// Weekly planner: decide which shorts to render next and stage their audio.
//
//   node tools/shorts/plan.mjs [--target N] [--no-auto]
//
// 1. Asks the API which ids already exist (any status) so nothing re-renders.
// 2. Takes un-rendered items from the curated queue.json first.
// 3. Tops up to --target (default 10) by asking Claude to pick scroll-stopper
//    sentences from the corpus (deadpan / notrans / wotd mix), skipping words
//    already used.
// 4. Downloads the clips those items need from audio.kotobaapp.com into
//    public/audio/ (CI runners start without the audio corpus).
// 5. Writes out/plan-queue.json for `gen-shorts --queue out/plan-queue.json`.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import Anthropic from '@anthropic-ai/sdk';
import { AUDIO_BASE, OUT_DIR, REPO, SHORTS_DIR, adminApi, clipsFor, loadEnv } from './lib.mjs';

let args;
try {
  ({ values: args } = parseArgs({
  args: process.argv.slice(2).filter((a) => a !== '--'),
  options: { target: { type: 'string' }, 'no-auto': { type: 'boolean' } },
  strict: true,
  }));
} catch (e) {
  console.error(`${e.message}\nusage: plan.mjs [--target N] [--no-auto]`);
  process.exit(2);
}
const target = Math.max(0, Number(args.target ?? 10) || 0);
const auto = !args['no-auto'];
const env = loadEnv();

const DECKS = ['jlpt-n5', 'jlpt-n4', 'jlpt-n3'];
const idOf = (it) => `${it.format}_${it.wordId}_${it.sentenceId}`;

function loadPool(deckId) {
  const deck = JSON.parse(readFileSync(join(REPO, 'public', 'decks', `${deckId}.json`), 'utf8'));
  const sents = JSON.parse(readFileSync(join(REPO, 'public', 'sentences', `${deckId}.json`), 'utf8'));
  const words = new Map(deck.words.map((w) => [w.id, w]));
  return { deckId, level: deckId.replace('jlpt-', '').toUpperCase(), words, sents };
}

/** Ask Claude for scroll-stopper picks from a random sample of unused sentences. */
async function autoSelect(count, usedWords, existingIds) {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const pools = DECKS.map(loadPool);
  const candidates = [];
  for (const p of pools) {
    for (const [wordId, list] of Object.entries(p.sents)) {
      if (usedWords.has(wordId)) continue;
      const w = p.words.get(wordId);
      if (!w) continue;
      for (const s of list) {
        if (!s.textJa.includes(s.clozeSurface)) continue;
        candidates.push({ wordId, sentenceId: s.id, level: p.level, word: w.written[0], kana: w.kana, gloss: w.prompt, ja: s.textJa, en: s.textEn });
      }
    }
  }
  // Random sample keeps the prompt small and the picks varied week to week.
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  const sample = candidates.slice(0, 400);
  const listing = sample.map((c, i) => `${i}\t${c.level}\t${c.word}（${c.kana}）${c.gloss}\t${c.ja}\t${c.en}`).join('\n');

  const res = await client.messages.create({
    model: 'claude-opus-5',
    max_tokens: 4000,
    output_config: {
      effort: 'medium',
      format: {
        type: 'json_schema',
        schema: {
          type: 'object',
          additionalProperties: false,
          required: ['picks'],
          properties: {
            picks: {
              type: 'array',
              items: {
                type: 'object',
                additionalProperties: false,
                required: ['index', 'format', 'why'],
                properties: {
                  index: { type: 'integer' },
                  format: { type: 'string', enum: ['deadpan', 'notrans', 'wotd'] },
                  why: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
    system:
      'You pick example sentences from a Japanese-learning corpus to turn into faceless short videos. ' +
      'The winning format is "deadpan": a real textbook sentence that is bleak, absurd, oddly specific, or darkly relatable, ' +
      'shown cold in English first ("The cat died." / "I slept during class." / "I spent too much money and went bankrupt."). ' +
      'Use "notrans" only for words with no clean English equivalent (gaman, mottainai, senpai, natsukashii…), and "wotd" sparingly ' +
      'for a striking word whose sentence is merely fine. Prefer short sentences (≤ 12 words in English), no proper nouns, ' +
      'nothing that reads as promoting risky behavior. Never pick two sentences with the same feel. Return exactly the requested number.',
    messages: [{ role: 'user', content: `Pick ${count} from these (index, level, word, JA, EN):\n\n${listing}` }],
  });
  if (res.stop_reason === 'refusal') throw new Error('selection refused');
  const text = res.content.find((b) => b.type === 'text')?.text ?? '{}';
  const { picks } = JSON.parse(text);
  const out = [];
  for (const p of picks) {
    const c = sample[p.index];
    if (!c) continue;
    const item = { format: p.format, wordId: c.wordId, sentenceId: c.sentenceId };
    if (existingIds.has(idOf(item)) || usedWords.has(c.wordId)) continue;
    usedWords.add(c.wordId);
    out.push(item);
    console.log(`  auto ${p.format}: ${c.en} — ${p.why}`);
  }
  return out;
}

async function fetchClip(sub, id) {
  const dir = join(REPO, 'public', 'audio', sub);
  const path = join(dir, `${id}.mp3`);
  if (existsSync(path)) return;
  mkdirSync(dir, { recursive: true });
  const r = await fetch(`${AUDIO_BASE}/${sub}/${id}.mp3`);
  if (!r.ok) throw new Error(`clip ${sub}/${id}.mp3 → ${r.status}`);
  writeFileSync(path, Buffer.from(await r.arrayBuffer()));
}

async function main() {
  const existing = await adminApi(env, '/admin/shorts?status=all');
  const existingIds = new Set(existing.map((s) => s.id));
  // Words with a live short stay out of the picker; rejected/dropped ones may
  // come back with a different (fixed) sentence — the exact same id never will.
  const usedWords = new Set(existing.filter((s) => !['rejected', 'dropped'].includes(s.status)).map((s) => s.wordId));
  console.log(`${existingIds.size} shorts already registered`);

  // Fixed-and-flagged-for-rerender items go first; `force` tells gen-shorts to
  // ignore its manifest so a local rerun actually re-renders them.
  const plan = existing
    .filter((s) => s.status === 'rerender')
    .map((s) => ({ format: s.format, wordId: s.wordId, sentenceId: s.sentenceId, force: true }));
  if (plan.length) console.log(`${plan.length} re-renders after corpus fixes`);
  const curated = JSON.parse(readFileSync(join(SHORTS_DIR, 'queue.json'), 'utf8'));
  plan.push(...curated.filter((it) => !existingIds.has(idOf(it))).slice(0, Math.max(0, target - plan.length)));
  for (const it of plan) usedWords.add(it.wordId);
  console.log(`${plan.length} from curated queue`);

  if (plan.length < target && auto) {
    if (!env.ANTHROPIC_API_KEY) {
      console.warn('ANTHROPIC_API_KEY missing — skipping auto-selection');
    } else {
      plan.push(...(await autoSelect(target - plan.length, usedWords, existingIds)));
    }
  }
  mkdirSync(OUT_DIR, { recursive: true });
  if (plan.length === 0) {
    console.log('nothing to render');
    writeFileSync(join(OUT_DIR, 'plan-queue.json'), '[]\n');
    return;
  }

  // Stage audio per item; one broken item (clip missing on R2, id gone from
  // the corpus) is skipped with a loud line rather than sinking the whole week.
  const ready = [];
  let fetched = 0;
  for (const it of plan) {
    try {
      const clips = clipsFor(it.format, it.wordId, it.sentenceId);
      await Promise.all(clips.map(([sub, id]) => fetchClip(sub, id)));
      fetched += clips.length;
      ready.push(it);
    } catch (e) {
      console.error(`  SKIP ${idOf(it)}: ${e.message}${it.force ? ' (rerender row — drop it with reviews --short-drop if the ids changed)' : ''}`);
    }
  }
  writeFileSync(join(OUT_DIR, 'plan-queue.json'), JSON.stringify(ready, null, 1) + '\n');
  console.log(`planned ${ready.length}/${plan.length} shorts (${fetched} clips staged) → out/plan-queue.json`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
