// Generates vocab-constrained (i+1) example sentences per word, validates them
// with kuromoji, and emits a native-review handoff. Mirrors the synonym-fold
// review workflow: nothing ships until a human marks it approved.
//
//   npm run gen-sentences -- [deckId ...]            generate drafts → review table
//   npm run gen-sentences -- --approve [deckId ...]  reviewed drafts → public/sentences
//
// Generation needs ANTHROPIC_API_KEY (optionally ANTHROPIC_MODEL). The pure
// validation lives in sentence-validate.ts and is unit-tested separately.

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { TokenizerBuilder, type IpadicFeatures, type LoaderConfig } from '@patdx/kuromoji';
import type { Deck, Sentence } from '../src/types';
import { allowedForms, checkVocab, clozeSurfacePresent, formsOf } from './sentence-validate';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const draftsDir = join(root, 'tools', 'sentences-draft');
const sentencesDir = join(root, 'public', 'sentences');

const DICT_CDN = 'https://cdn.jsdelivr.net/npm/@aiktb/kuromoji@1.0.2/dict/';
const POOL_SIZE = 3; // sentences generated per word (rotation pool)

/** A draft candidate carries its validation verdict + a human approval flag. */
interface Candidate extends Sentence {
  wordId: string;
  valid: boolean;
  offenders: string[];
  approved: boolean;
}

const sentenceId = (wordId: string, textJa: string): string =>
  's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);

function loadDecks(only: string[]): Deck[] {
  const files = readdirSync(decksDir).filter((f) => f.endsWith('.json') && f !== 'index.json');
  const decks = files.map((f) => JSON.parse(readFileSync(join(decksDir, f), 'utf8')) as Deck);
  return only.length > 0 ? decks.filter((d) => only.includes(d.id)) : decks;
}

async function buildTokenizer(): Promise<{ tokenize(text: string): IpadicFeatures[] }> {
  const loader: LoaderConfig = {
    async loadArrayBuffer(url: string): Promise<ArrayBufferLike> {
      const file = url.replace('.gz', '').split('/').pop();
      const res = await fetch(DICT_CDN + file);
      if (!res.ok) throw new Error(`dict ${file} ${res.status}`);
      return res.arrayBuffer();
    },
  };
  return new TokenizerBuilder({ loader }).build();
}

/** Ask the model for a small pool of i+1 sentences. Returns raw JSON objects. */
async function generate(word: { kana: string; prompt: string }, allowedList: string[]): Promise<Array<Omit<Sentence, 'id'>>> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY not set');
  const model = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';
  const prompt = `You generate example sentences for a hands-free Japanese vocabulary app for
English-speaking beginners (JLPT N5-N4). For the TARGET WORD, write ${POOL_SIZE} natural,
short everyday sentences (~6-14 syllables) that each:
- use the target word in a common, distinct context;
- use ONLY words from ALLOWED_LIST plus the target word (basic particles/copula
  are always allowed); no other content words;
- are grammatical and natural to a native speaker; unambiguous.

Return JSON only (no markdown), an array of ${POOL_SIZE} objects with fields:
  text_ja, reading_kana, text_en, cloze_surface, cloze_reading

TARGET WORD: ${word.prompt} (${word.kana})
ALLOWED_LIST: ${allowedList.join(', ')}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model, max_tokens: 1024, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { content: Array<{ type: string; text?: string }> };
  const text = data.content.find((c) => c.type === 'text')?.text ?? '[]';
  const json = text.slice(text.indexOf('['), text.lastIndexOf(']') + 1);
  const raw = JSON.parse(json) as Array<Record<string, string>>;
  return raw.map((r) => ({
    textJa: r.text_ja,
    readingKana: r.reading_kana,
    textEn: r.text_en,
    clozeSurface: r.cloze_surface,
    clozeReading: r.cloze_reading,
  }));
}

async function generateDrafts(decks: Deck[]): Promise<void> {
  mkdirSync(draftsDir, { recursive: true });
  const tk = await buildTokenizer();

  for (const deck of decks) {
    const candidates: Candidate[] = [];
    for (let i = 0; i < deck.words.length; i++) {
      const word = deck.words[i];
      const allowed = allowedForms(deck, i);
      const targetForms = formsOf(word);
      let drafts: Array<Omit<Sentence, 'id'>>;
      try {
        drafts = await generate(word, [...allowed]);
      } catch (e) {
        console.error(`  ${word.prompt}: ${e instanceof Error ? e.message : e}`);
        continue;
      }
      for (const d of drafts) {
        const vocab = checkVocab(tk.tokenize(d.textJa), allowed, targetForms);
        const surfaceOk = clozeSurfacePresent(d.textJa, d.clozeSurface);
        candidates.push({
          id: sentenceId(word.id, d.textJa),
          wordId: word.id,
          ...d,
          valid: vocab.ok && surfaceOk,
          offenders: surfaceOk ? vocab.offenders : [...vocab.offenders, `cloze "${d.clozeSurface}" not in sentence`],
          approved: false,
        });
      }
      console.log(`  ${word.prompt}: ${drafts.length} drafts`);
    }
    writeFileSync(join(draftsDir, `${deck.id}.candidates.json`), JSON.stringify(candidates, null, 2) + '\n');
    writeFileSync(join(draftsDir, `${deck.id}.review.md`), reviewTable(deck, candidates));
    console.log(`${deck.id}: ${candidates.length} candidates → ${draftsDir}`);
  }
}

function reviewTable(deck: Deck, candidates: Candidate[]): string {
  const byId = new Map(deck.words.map((w) => [w.id, w.prompt]));
  const rows = candidates.map((c) => {
    const flag = c.valid ? '' : `⚠️ ${c.offenders.join(', ')}`;
    return `| ${byId.get(c.wordId) ?? c.wordId} | ${c.textJa} | ${c.readingKana} | ${c.textEn} | ${c.clozeReading} | ${flag} | ${c.approved ? 'yes' : ''} |`;
  });
  return [
    `# Sentence review — ${deck.id}`,
    '',
    'Set `approved` to `yes` in the .candidates.json for each sentence to ship,',
    'then run: `npm run gen-sentences -- --approve ' + deck.id + '`',
    '',
    '| word | sentence (JA) | reading | EN | cloze answer | notes | approve? |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
    '',
  ].join('\n');
}

function approveDrafts(decks: Deck[]): void {
  mkdirSync(sentencesDir, { recursive: true });
  for (const deck of decks) {
    const path = join(draftsDir, `${deck.id}.candidates.json`);
    if (!existsSync(path)) {
      console.warn(`${deck.id}: no drafts at ${path}`);
      continue;
    }
    const candidates = JSON.parse(readFileSync(path, 'utf8')) as Candidate[];
    const pool: Record<string, Sentence[]> = {};
    for (const c of candidates) {
      if (!c.approved || !c.valid) continue;
      (pool[c.wordId] ??= []).push({
        id: c.id,
        textJa: c.textJa,
        readingKana: c.readingKana,
        textEn: c.textEn,
        clozeSurface: c.clozeSurface,
        clozeReading: c.clozeReading,
      });
    }
    writeFileSync(join(sentencesDir, `${deck.id}.json`), JSON.stringify(pool, null, 2) + '\n');
    const n = Object.values(pool).reduce((a, l) => a + l.length, 0);
    console.log(`${deck.id}: wrote ${n} approved sentences for ${Object.keys(pool).length} words`);
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const approve = args.includes('--approve');
  const only = args.filter((a) => !a.startsWith('--'));
  const decks = loadDecks(only);
  console.log(`decks: ${decks.map((d) => d.id).join(', ')}`);
  if (approve) approveDrafts(decks);
  else await generateDrafts(decks);
}

// Only run when invoked directly (so tests can import the pure helpers safely).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main();
}
