// Bulk sentence-generation pipeline (Anthropic Message Batches).
//
//   npm run pipeline -- <deckId> plan               cluster words semantically
//   npm run pipeline -- <deckId> submit [--pilot N] submit generation batch
//   npm run pipeline -- <deckId> submit --retry     regenerate rejects (≤2 rounds)
//   npm run pipeline -- <deckId> fetch              poll batch → validate → dedup
//   npm run pipeline -- <deckId> judge              submit judge batch over valid sentences
//   npm run pipeline -- <deckId> finalize           judge scores → candidates + review.md
//
// Output feeds the existing review/approve flow:
//   npm run gen-sentences -- --approve <deckId>     → public/sentences/<deckId>.json
//   npm run gen-audio <deckId>                      → sentence audio clips
//
// Needs ANTHROPIC_API_KEY. All intermediate artifacts live in
// tools/pipeline/state/<deckId>/ (gitignored) for auditability and reruns.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Word } from '../../src/types';
import { checkVocab, clozeSurfacePresent, formsOf } from '../sentence-validate';
import {
  AUTO_APPROVE, CLUSTER_SIZE, FRAMES, GEN_MODEL, JUDGE_MODEL, LEVELS,
  MAX_RETRY_ROUNDS, NEAR_DUP_JACCARD, PATTERN_OVERUSE_LIMIT, SCENARIOS, SENTENCES_PER_WORD,
  type LevelConfig,
} from './config';
import {
  buildTokenizer, client, clozeMatchesTarget, countOccurrences, draftsDir, hashInt, loadDeck, maskCloze,
  parseJsonText, readState, reusablePool, sentenceId, trigramJaccard, whitelistForms,
  whitelistText, wordById, writeState,
  type Cluster, type GenSentence, type JudgeScore, type PlanState, type RejectedSentence,
} from './lib';

// ---------------------------------------------------------------- plan

const CATEGORIES = [
  'people-family', 'food-drink', 'home-objects', 'places-buildings', 'transport-travel',
  'time-calendar', 'weather-nature', 'body-health', 'school-work', 'verbs-motion',
  'verbs-daily-actions', 'verbs-communication', 'adjectives-qualities', 'numbers-counters',
  'abstract-misc',
];

async function plan(cfg: LevelConfig): Promise<void> {
  const deck = loadDeck(cfg.deckId);
  const reused = Object.keys(reusablePool(cfg.reuseSentenceDeckIds)).filter((id) =>
    deck.words.some((w) => w.id === id));
  const targets = deck.words.filter((w) => !reused.includes(w.id));
  console.log(`${cfg.deckId}: ${deck.words.length} words, ${reused.length} covered by reuse, ${targets.length} to generate`);

  // Category-tag targets in chunks (one Messages call each, structured output).
  const tags = new Map<string, string>();
  const chunk = 200;
  for (let i = 0; i < targets.length; i += chunk) {
    const slice = targets.slice(i, i + chunk);
    const listing = slice.map((w) => `${w.id} | ${w.kana} | ${w.prompt}`).join('\n');
    const res = await client.messages.create({
      model: GEN_MODEL,
      max_tokens: 16000,
      output_config: {
        format: {
          type: 'json_schema',
          schema: {
            type: 'object',
            additionalProperties: false,
            required: ['tags'],
            properties: {
              tags: {
                type: 'array',
                items: {
                  type: 'object',
                  additionalProperties: false,
                  required: ['id', 'category'],
                  properties: { id: { type: 'string' }, category: { type: 'string', enum: CATEGORIES } },
                },
              },
            },
          },
        },
      },
      messages: [{
        role: 'user',
        content:
          `Tag each Japanese vocabulary word with the single best-fitting semantic category from this list: ${CATEGORIES.join(', ')}.\n` +
          `Words that could be confused with each other (same English gloss, transitive/intransitive pairs) should get the same category.\n` +
          `One tag per word id.\n\n${listing}`,
      }],
    });
    const text = res.content.find((b) => b.type === 'text')?.text ?? '{}';
    for (const t of parseJsonText<{ tags: Array<{ id: string; category: string }> }>(text).tags) {
      tags.set(t.id, t.category);
    }
    console.log(`  tagged ${Math.min(i + chunk, targets.length)}/${targets.length}`);
  }

  // Group by category, then chunk into clusters.
  const byCat = new Map<string, Word[]>();
  for (const w of targets) {
    const cat = tags.get(w.id) ?? 'abstract-misc';
    (byCat.get(cat) ?? byCat.set(cat, []).get(cat)!).push(w);
  }
  const clusters: Cluster[] = [];
  for (const [cat, words] of [...byCat.entries()].sort()) {
    for (let i = 0; i < words.length; i += CLUSTER_SIZE) {
      clusters.push({
        id: `${cfg.deckId}-c${String(clusters.length).padStart(3, '0')}`,
        category: cat,
        wordIds: words.slice(i, i + CLUSTER_SIZE).map((w) => w.id),
      });
    }
  }
  writeState(cfg.deckId, 'plan.json', { deckId: cfg.deckId, clusters, reused } satisfies PlanState);
  console.log(`${clusters.length} clusters → state/plan.json`);
}

// ---------------------------------------------------------------- submit

const GOLD_EXAMPLES = `Example of the quality expected (target word 買い物, category shopping, frame: statement):
{"word_id":"...","text_ja":"母は駅の前で買い物をします。","reading_kana":"はははえきのまえでかいものをします。","text_en":"My mother shops in front of the station.","cloze_surface":"買い物","cloze_reading":"かいもの","scenario":"shopping for groceries","frame":"plain statement"}
(target word 自転車, frame: desire):
{"word_id":"...","text_ja":"新しい自転車が買いたいです。","reading_kana":"あたらしいじてんしゃがかいたいです。","text_en":"I want to buy a new bicycle.","cloze_surface":"自転車","cloze_reading":"じてんしゃ","scenario":"hobbies and free time","frame":"desire (〜たい)"}
(target word 火曜日, frame: question):
{"word_id":"...","text_ja":"火曜日に学校へ行きますか。","reading_kana":"かようびにがっこうへいきますか。","text_en":"Do you go to school on Tuesday?","cloze_surface":"火曜日","cloze_reading":"かようび","scenario":"at school or class","frame":"question"}`;

function genSystem(cfg: LevelConfig): Array<{ type: 'text'; text: string; cache_control?: { type: 'ephemeral' } }> {
  return [{
    type: 'text',
    text:
      `You write example sentences for a hands-free Japanese vocabulary app for English-speaking learners. ` +
      `Sentences are heard (not read) and later quizzed as fill-in-the-blank: the target word is beeped out and ` +
      `the learner must say it, so the context must point clearly to ONE answer.\n\n` +
      `Hard rules for every sentence:\n` +
      `1. Use ONLY words from the ALLOWED VOCABULARY below, plus the target word. Particles, copula, ` +
      `and basic grammatical function words are always allowed. No other content words.\n` +
      `2. ${cfg.grammarCeiling}\n` +
      `3. The target word must appear EXACTLY ONCE, in a natural conjugated/particle-attached position; ` +
      `cloze_surface is the exact substring of text_ja for the target (may be conjugated).\n` +
      `4. Natural, everyday Japanese a native speaker would actually say. Short: roughly ${cfg.minTokens}-${cfg.maxTokens} words.\n` +
      `5. Sentence context must make the target word recoverable when beeped out — if several allowed words ` +
      `could plausibly fill the blank, rewrite until only the target fits.\n` +
      `6. Within one request, NO two words may share a sentence pattern, and the ${SENTENCES_PER_WORD} sentences ` +
      `for a single word must each use a different scenario/frame.\n` +
      `7. reading_kana is the full hiragana reading of text_ja.\n\n${GOLD_EXAMPLES}\n\n` +
      `ALLOWED VOCABULARY:\n${whitelistText(cfg.whitelistDeckIds)}`,
    cache_control: { type: 'ephemeral' },
  }];
}

const GEN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['sentences'],
  properties: {
    sentences: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['word_id', 'text_ja', 'reading_kana', 'text_en', 'cloze_surface', 'cloze_reading', 'scenario', 'frame'],
        properties: {
          word_id: { type: 'string' },
          text_ja: { type: 'string' },
          reading_kana: { type: 'string' },
          text_en: { type: 'string' },
          cloze_surface: { type: 'string' },
          cloze_reading: { type: 'string' },
          scenario: { type: 'string' },
          frame: { type: 'string' },
        },
      },
    },
  },
} as const;

function clusterUserPrompt(cluster: Cluster, words: Map<string, Word>, extra?: string): string {
  const lines = cluster.wordIds.map((id) => {
    const w = words.get(id)!;
    const alts = w.alts?.length ? ` — alternate readings also accepted: ${w.alts.map((a) => a.kana).join(', ')}` : '';
    return `- ${w.id}: ${w.written[0] ?? w.kana}（${w.kana}） = "${w.prompt}"${alts}`;
  });
  const n = hashInt(cluster.id);
  const scen = [0, 1, 2, 3].map((k) => SCENARIOS[(n + k * 5) % SCENARIOS.length]);
  const frames = [0, 1, 2].map((k) => FRAMES[(n + k * 3) % FRAMES.length]);
  return (
    `Write ${SENTENCES_PER_WORD} sentences for EACH of these related words (category: ${cluster.category}).\n` +
    `These words are semantically similar — their sentences must be clearly distinct from each other ` +
    `(different patterns, different contexts), so a learner never confuses them.\n\n${lines.join('\n')}\n\n` +
    `Preferred scenarios for this batch: ${scen.join('; ')}. Preferred frames: ${frames.join('; ')} ` +
    `(vary per sentence; deviate when a scenario doesn't suit a word).` +
    (extra ? `\n\n${extra}` : '')
  );
}

async function submit(cfg: LevelConfig, opts: { pilot?: number; retry?: boolean }): Promise<void> {
  const planState = readState<PlanState>(cfg.deckId, 'plan.json');
  if (!planState) throw new Error('run plan first');
  const deck = loadDeck(cfg.deckId);
  const words = wordById(deck);
  const submitted = readState<string[]>(cfg.deckId, 'submitted.json') ?? [];

  let clusters: Cluster[];
  let extra: string | undefined;
  if (opts.retry) {
    const round = (readState<number>(cfg.deckId, 'retry-round.json') ?? 0) + 1;
    if (round > MAX_RETRY_ROUNDS) throw new Error(`retry round ${round} exceeds cap ${MAX_RETRY_ROUNDS} — remaining rejects go to manual authoring`);
    const rejects = readState<RejectedSentence[]>(cfg.deckId, 'rejects.json') ?? [];
    const banned = readState<string[]>(cfg.deckId, 'banned-patterns.json') ?? [];
    // A word retries only if it still lacks a full pool of valid sentences.
    const valid = readState<GenSentence[]>(cfg.deckId, 'valid.json') ?? [];
    const validCount = new Map<string, number>();
    for (const s of valid) validCount.set(s.wordId, (validCount.get(s.wordId) ?? 0) + 1);
    const retryIds = [...new Set(rejects.map((r) => r.wordId))].filter((id) => (validCount.get(id) ?? 0) < SENTENCES_PER_WORD);
    if (retryIds.length === 0) {
      console.log('nothing to retry — all words have full pools');
      return;
    }
    clusters = [];
    for (let i = 0; i < retryIds.length; i += CLUSTER_SIZE) {
      clusters.push({ id: `${cfg.deckId}-r${round}-${clusters.length}`, category: 'retry', wordIds: retryIds.slice(i, i + CLUSTER_SIZE) });
    }
    const reasons = [...new Set(rejects.flatMap((r) => r.reasons))].slice(0, 12);
    extra =
      `These words were regenerated because earlier attempts failed validation. Common failure reasons: ${reasons.join('; ')}.` +
      (banned.length ? `\nThe following sentence patterns are OVERUSED in this deck — do NOT produce them again:\n${banned.slice(0, 20).join('\n')}` : '');
    writeState(cfg.deckId, 'retry-round.json', round);
    console.log(`retry round ${round}: ${retryIds.length} words in ${clusters.length} clusters`);
  } else {
    clusters = planState.clusters.filter((c) => !submitted.includes(c.id));
    if (opts.pilot) clusters = clusters.slice(0, opts.pilot);
    if (clusters.length === 0) {
      console.log('nothing to submit (all clusters already submitted)');
      return;
    }
  }

  const system = genSystem(cfg);
  const batch = await client.messages.batches.create({
    requests: clusters.map((c) => ({
      custom_id: c.id,
      params: {
        model: GEN_MODEL,
        // Sonnet 5 runs adaptive thinking by default and it counts against
        // max_tokens — the pilot truncated at 8192 with the budget spent on
        // thinking. Medium effort curbs the thinking spend; 24K leaves the
        // ~4K JSON payload plenty of room either way.
        max_tokens: 24000,
        system,
        output_config: { effort: 'medium' as const, format: { type: 'json_schema' as const, schema: GEN_SCHEMA } },
        messages: [{ role: 'user', content: clusterUserPrompt(c, words, extra) }],
      },
    })),
  });
  writeState(cfg.deckId, 'gen-batch.json', { id: batch.id, clusterIds: clusters.map((c) => c.id) });
  if (!opts.retry) writeState(cfg.deckId, 'submitted.json', [...submitted, ...clusters.map((c) => c.id)]);
  console.log(`submitted batch ${batch.id}: ${clusters.length} requests (${clusters.reduce((a, c) => a + c.wordIds.length, 0)} words)`);
  console.log('next: npm run pipeline --', cfg.deckId, 'fetch');
}

// ---------------------------------------------------------------- fetch (poll + validate + dedup)

async function pollBatch(batchId: string): Promise<void> {
  for (;;) {
    const b = await client.messages.batches.retrieve(batchId);
    if (b.processing_status === 'ended') return;
    console.log(`  batch ${batchId}: ${b.processing_status} (processing=${b.request_counts.processing} succeeded=${b.request_counts.succeeded} errored=${b.request_counts.errored})`);
    await new Promise((r) => setTimeout(r, 30_000));
  }
}

async function fetchResults(cfg: LevelConfig): Promise<void> {
  const genBatch = readState<{ id: string }>(cfg.deckId, 'gen-batch.json');
  if (!genBatch) throw new Error('no generation batch — run submit first');
  const deck = loadDeck(cfg.deckId);
  const words = wordById(deck);
  const allowed = whitelistForms(cfg.whitelistDeckIds);
  const tk = await buildTokenizer();

  console.log(`polling batch ${genBatch.id} …`);
  await pollBatch(genBatch.id);

  const raw: GenSentence[] = [];
  const apiErrors: string[] = [];
  for await (const result of await client.messages.batches.results(genBatch.id)) {
    if (result.result.type !== 'succeeded') {
      apiErrors.push(`${result.custom_id}: ${result.result.type}`);
      continue;
    }
    const msg = result.result.message;
    if (msg.stop_reason === 'refusal') {
      apiErrors.push(`${result.custom_id}: refusal`);
      continue;
    }
    if (msg.stop_reason === 'max_tokens') {
      apiErrors.push(`${result.custom_id}: truncated at max_tokens (output=${msg.usage.output_tokens}) — raise max_tokens or lower effort`);
      continue;
    }
    const text = msg.content.find((b) => b.type === 'text')?.text ?? '{}';
    try {
      const parsed = parseJsonText<{ sentences: Array<Record<string, string>> }>(text);
      for (const s of parsed.sentences) {
        raw.push({
          wordId: s.word_id, textJa: s.text_ja, readingKana: s.reading_kana, textEn: s.text_en,
          clozeSurface: s.cloze_surface, clozeReading: s.cloze_reading, scenario: s.scenario, frame: s.frame,
        });
      }
    } catch (e) {
      apiErrors.push(`${result.custom_id}: parse — ${e instanceof Error ? e.message : e}`);
    }
  }
  console.log(`raw sentences: ${raw.length}${apiErrors.length ? ` (${apiErrors.length} request-level failures)` : ''}`);
  for (const e of apiErrors) console.warn(`  ⚠ ${e}`);

  // Mechanical validation (free, local).
  const prevValid = readState<GenSentence[]>(cfg.deckId, 'valid.json') ?? [];
  const valid: GenSentence[] = [...prevValid];
  const seen = new Set(prevValid.map((s) => sentenceId(s.wordId, s.textJa)));
  const rejects: RejectedSentence[] = [];
  const perWordMasks = new Map<string, string[]>();
  for (const s of prevValid) {
    (perWordMasks.get(s.wordId) ?? perWordMasks.set(s.wordId, []).get(s.wordId)!).push(maskCloze(s.textJa, s.clozeSurface));
  }

  for (const s of raw) {
    const reasons: string[] = [];
    const word = words.get(s.wordId);
    if (!word) {
      reasons.push(`unknown word id ${s.wordId}`);
    } else {
      if (!clozeSurfacePresent(s.textJa, s.clozeSurface)) reasons.push('cloze surface not in sentence');
      else if (countOccurrences(s.textJa, s.clozeSurface) !== 1) reasons.push('cloze surface appears more than once');
      else if (!clozeMatchesTarget(tk, s, word)) reasons.push('cloze is not the target word');
      const tokens = tk.tokenize(s.textJa);
      const contentLen = tokens.filter((t) => t.pos !== '記号').length;
      if (contentLen < cfg.minTokens || contentLen > cfg.maxTokens) reasons.push(`length ${contentLen} outside ${cfg.minTokens}-${cfg.maxTokens} tokens`);
      const vocab = checkVocab(tokens, allowed, formsOf(word));
      if (!vocab.ok) reasons.push(`off-whitelist: ${vocab.offenders.join(' ')}`);
      const key = sentenceId(s.wordId, s.textJa);
      if (seen.has(key)) reasons.push('exact duplicate');
      const mask = maskCloze(s.textJa, s.clozeSurface);
      const prior = perWordMasks.get(s.wordId) ?? [];
      if (reasons.length === 0 && prior.some((m) => trigramJaccard(m, mask) > NEAR_DUP_JACCARD)) reasons.push('near-duplicate within word');
      if (reasons.length === 0 && prior.length >= SENTENCES_PER_WORD) reasons.push('pool already full');
      if (reasons.length === 0) {
        valid.push(s);
        seen.add(key);
        (perWordMasks.get(s.wordId) ?? perWordMasks.set(s.wordId, []).get(s.wordId)!).push(mask);
        continue;
      }
    }
    rejects.push({ ...s, reasons });
  }

  // Corpus-level pattern overuse: signatures shared across too many words get retried.
  const bySig = new Map<string, number[]>(); // sig → indices into valid
  valid.forEach((s, i) => {
    const sig = maskCloze(s.textJa, s.clozeSurface);
    (bySig.get(sig) ?? bySig.set(sig, []).get(sig)!).push(i);
  });
  const banned: string[] = [];
  const overusedIdx = new Set<number>();
  for (const [sig, idxs] of bySig) {
    if (idxs.length > PATTERN_OVERUSE_LIMIT) {
      banned.push(sig);
      for (const i of idxs.slice(PATTERN_OVERUSE_LIMIT)) overusedIdx.add(i);
    }
  }
  const kept = valid.filter((_, i) => !overusedIdx.has(i));
  for (const i of overusedIdx) rejects.push({ ...valid[i], reasons: [`overused pattern: ${maskCloze(valid[i].textJa, valid[i].clozeSurface)}`] });

  writeState(cfg.deckId, 'valid.json', kept);
  writeState(cfg.deckId, 'rejects.json', rejects);
  writeState(cfg.deckId, 'banned-patterns.json', banned);

  const wordsWithFull = new Set<string>();
  const counts = new Map<string, number>();
  for (const s of kept) counts.set(s.wordId, (counts.get(s.wordId) ?? 0) + 1);
  for (const [id, n] of counts) if (n >= SENTENCES_PER_WORD) wordsWithFull.add(id);
  console.log(`valid: ${kept.length} sentences across ${counts.size} words (${wordsWithFull.size} full pools) | rejected: ${rejects.length} | banned patterns: ${banned.length}`);
  if (rejects.length > 0) console.log(`next: npm run pipeline -- ${cfg.deckId} submit --retry   (or proceed to judge)`);
  else console.log(`next: npm run pipeline -- ${cfg.deckId} judge`);
}

// ---------------------------------------------------------------- judge

const JUDGE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['scores'],
  properties: {
    scores: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['index', 'naturalness', 'level_appropriateness', 'translation_accuracy', 'cloze_recoverability', 'interest', 'note'],
        properties: {
          index: { type: 'integer' },
          naturalness: { type: 'integer', enum: [1, 2, 3, 4, 5] },
          level_appropriateness: { type: 'integer', enum: [1, 2, 3, 4, 5] },
          translation_accuracy: { type: 'integer', enum: [1, 2, 3, 4, 5] },
          cloze_recoverability: { type: 'integer', enum: [1, 2, 3, 4, 5] },
          interest: { type: 'integer', enum: [1, 2, 3, 4, 5] },
          note: { type: 'string' },
        },
      },
    },
  },
} as const;

async function judge(cfg: LevelConfig): Promise<void> {
  const valid = readState<GenSentence[]>(cfg.deckId, 'valid.json');
  if (!valid?.length) throw new Error('no valid sentences — run fetch first');
  const deck = loadDeck(cfg.deckId);
  const words = wordById(deck);

  const byWord = new Map<string, GenSentence[]>();
  for (const s of valid) (byWord.get(s.wordId) ?? byWord.set(s.wordId, []).get(s.wordId)!).push(s);

  const system: Array<{ type: 'text'; text: string; cache_control?: { type: 'ephemeral' } }> = [{
    type: 'text',
    text:
      `You are a strict native-speaker reviewer for a Japanese learning app. Score each example sentence 1-5 on:\n` +
      `- naturalness: would a native speaker actually say this, exactly as written\n` +
      `- level_appropriateness: grammar within this ceiling → ${cfg.grammarCeiling}\n` +
      `- translation_accuracy: the English faithfully conveys the Japanese\n` +
      `- cloze_recoverability (MOST IMPORTANT): the sentence is played with the target word beeped out and the ` +
      `learner must say the missing word. 5 = context forces exactly one answer; 1 = many words fit the blank.\n` +
      `- interest: penalize generic template sentences (これは＿です。-style earns a 1-2)\n` +
      `Also verify the reading_kana matches the sentence — if wrong, cap naturalness at 2 and say so in note.\n` +
      `note: one short sentence, empty string if nothing to flag.`,
    cache_control: { type: 'ephemeral' },
  }];

  const requests = [...byWord.entries()].map(([wordId, list]) => {
    const w = words.get(wordId)!;
    const body = list.map((s, i) =>
      `${i}. ${s.textJa} | reading: ${s.readingKana} | EN: ${s.textEn} | target(beeped): ${s.clozeSurface}（${s.clozeReading}）`).join('\n');
    return {
      custom_id: `judge-${wordId}`,
      params: {
        model: JUDGE_MODEL,
        max_tokens: 8000, // adaptive thinking counts against this — see submit()
        system,
        output_config: { effort: 'medium' as const, format: { type: 'json_schema' as const, schema: JUDGE_SCHEMA } },
        messages: [{
          role: 'user' as const,
          content: `Target word: ${w.written[0] ?? w.kana}（${w.kana}） = "${w.prompt}"\nSentences:\n${body}`,
        }],
      },
    };
  });

  const batch = await client.messages.batches.create({ requests });
  writeState(cfg.deckId, 'judge-batch.json', { id: batch.id });
  console.log(`submitted judge batch ${batch.id}: ${requests.length} requests (${valid.length} sentences)`);
  console.log('next: npm run pipeline --', cfg.deckId, 'finalize');
}

// ---------------------------------------------------------------- finalize

interface Candidate {
  id: string;
  wordId: string;
  textJa: string;
  readingKana: string;
  textEn: string;
  clozeSurface: string;
  clozeReading: string;
  valid: boolean;
  offenders: string[];
  approved: boolean;
  /** False ⇒ ships as a teach example only (cloze recoverability below gate). */
  clozeEligible: boolean;
  scores?: Omit<JudgeScore, 'sentenceKey'>;
}

async function finalize(cfg: LevelConfig): Promise<void> {
  const judgeBatch = readState<{ id: string }>(cfg.deckId, 'judge-batch.json');
  if (!judgeBatch) throw new Error('no judge batch — run judge first');
  const allValid = readState<GenSentence[]>(cfg.deckId, 'valid.json') ?? [];
  const deck = loadDeck(cfg.deckId);
  const words = wordById(deck);

  // Re-check target attribution — earlier fetches ran before this validator
  // existed, so state may still hold mis-filed sentences.
  const tk = await buildTokenizer();
  const valid = allValid.filter((s) => {
    const w = words.get(s.wordId);
    const ok = !!w && clozeMatchesTarget(tk, s, w);
    if (!ok) console.warn(`  ✗ dropped (cloze ≠ target ${s.wordId}): ${s.textJa}`);
    return ok;
  });

  console.log(`polling judge batch ${judgeBatch.id} …`);
  await pollBatch(judgeBatch.id);

  const byWord = new Map<string, GenSentence[]>();
  for (const s of valid) (byWord.get(s.wordId) ?? byWord.set(s.wordId, []).get(s.wordId)!).push(s);

  const scores = new Map<string, JudgeScore>();
  for await (const result of await client.messages.batches.results(judgeBatch.id)) {
    if (result.result.type !== 'succeeded') {
      console.warn(`  ⚠ ${result.custom_id}: ${result.result.type}`);
      continue;
    }
    const wordId = result.custom_id.replace(/^judge-/, '');
    const list = byWord.get(wordId) ?? [];
    const text = result.result.message.content.find((b) => b.type === 'text')?.text ?? '{}';
    try {
      const parsed = parseJsonText<{ scores: Array<Record<string, number | string>> }>(text);
      for (const sc of parsed.scores) {
        const s = list[sc.index as number];
        if (!s) continue;
        scores.set(sentenceId(s.wordId, s.textJa), {
          sentenceKey: sentenceId(s.wordId, s.textJa),
          naturalness: sc.naturalness as number,
          levelAppropriateness: sc.level_appropriateness as number,
          translationAccuracy: sc.translation_accuracy as number,
          clozeRecoverability: sc.cloze_recoverability as number,
          interest: sc.interest as number,
          note: (sc.note as string) || undefined,
        });
      }
    } catch (e) {
      console.warn(`  ⚠ ${result.custom_id}: parse — ${e instanceof Error ? e.message : e}`);
    }
  }

  // Two gates: teach quality (naturalness/level/translation) decides whether a
  // sentence ships at all; cloze recoverability only decides whether it may be
  // gapped as a quiz. Low-C sentences on demonstrative-like words are still
  // valuable listening examples — don't discard them.
  const teachOk = (sc: JudgeScore): boolean =>
    sc.naturalness >= AUTO_APPROVE.naturalness &&
    sc.levelAppropriateness >= AUTO_APPROVE.levelAppropriateness &&
    sc.translationAccuracy >= AUTO_APPROVE.translationAccuracy;
  const clozeOk = (sc: JudgeScore): boolean => sc.clozeRecoverability >= AUTO_APPROVE.clozeRecoverability;

  const candidates: Candidate[] = [];
  let shipped = 0;
  let teachOnly = 0;
  let flagged = 0;
  let unscored = 0;
  for (const s of valid) {
    const key = sentenceId(s.wordId, s.textJa);
    const sc = scores.get(key);
    const approved = sc ? teachOk(sc) : false;
    const clozeEligible = sc ? clozeOk(sc) : false;
    if (!sc) unscored++;
    else if (approved && clozeEligible) shipped++;
    else if (approved) teachOnly++;
    else flagged++;
    candidates.push({
      id: key, wordId: s.wordId, textJa: s.textJa, readingKana: s.readingKana, textEn: s.textEn,
      clozeSurface: s.clozeSurface, clozeReading: s.clozeReading,
      valid: true, offenders: [], approved, clozeEligible,
      scores: sc ? { naturalness: sc.naturalness, levelAppropriateness: sc.levelAppropriateness, translationAccuracy: sc.translationAccuracy, clozeRecoverability: sc.clozeRecoverability, interest: sc.interest, note: sc.note } : undefined,
    });
  }

  // Copy over already-shipped pools (starter overlap) as pre-approved.
  const reuse = reusablePool(cfg.reuseSentenceDeckIds);
  let reusedCount = 0;
  for (const [wordId, list] of Object.entries(reuse)) {
    if (!words.has(wordId)) continue;
    for (const s of list) {
      candidates.push({ id: s.id, wordId, textJa: s.textJa, readingKana: s.readingKana, textEn: s.textEn, clozeSurface: s.clozeSurface, clozeReading: s.clozeReading, valid: true, offenders: [], approved: true, clozeEligible: s.clozeEligible !== false });
      reusedCount++;
    }
  }

  // Words with no shippable sentence at all → manual-authoring queue.
  const shippableWords = new Set(candidates.filter((c) => c.approved).map((c) => c.wordId));
  const manualQueue = deck.words.filter((w) => !shippableWords.has(w.id)).map((w) => `${w.id} ${w.prompt} (${w.kana})`);

  writeFileSync(join(draftsDir, `${cfg.deckId}.candidates.json`), JSON.stringify(candidates, null, 2) + '\n');
  writeFileSync(join(draftsDir, `${cfg.deckId}.review.md`), reviewMd(cfg, candidates, manualQueue, words));

  console.log(`auto-approved (cloze+teach): ${shipped} | teach-example only: ${teachOnly} | flagged for review: ${flagged} | unscored: ${unscored} | reused: ${reusedCount}`);
  console.log(`words without any shippable sentence: ${manualQueue.length}`);
  console.log(`review table: tools/sentences-draft/${cfg.deckId}.review.md`);
  console.log(`then: npm run gen-sentences -- --approve ${cfg.deckId} && npm run gen-audio ${cfg.deckId}`);
}

function reviewMd(cfg: LevelConfig, candidates: Candidate[], manualQueue: string[], words: Map<string, Word>): string {
  const row = (c: Candidate): string => {
    const sc = c.scores;
    const scoreTxt = sc ? `N${sc.naturalness} L${sc.levelAppropriateness} T${sc.translationAccuracy} C${sc.clozeRecoverability} I${sc.interest}${sc.note ? ` — ${sc.note}` : ''}` : c.approved ? 'reused (starter)' : 'unscored';
    const use = c.approved ? (c.clozeEligible ? 'cloze+teach' : 'teach only') : '';
    return `| ${words.get(c.wordId)?.prompt ?? c.wordId} | ${c.textJa} | ${c.textEn} | ${c.clozeReading} | ${scoreTxt} | ${use} | ${c.approved ? 'yes' : ''} |`;
  };
  const flaggedRows = candidates.filter((c) => !c.approved).map(row);
  const approvedRows = candidates.filter((c) => c.approved && c.scores).map(row);
  return [
    `# Sentence review — ${cfg.deckId}`, '',
    `Judge scores: N=naturalness L=level T=translation C=cloze-recoverability I=interest (1-5).`,
    `Auto-approved: C≥${AUTO_APPROVE.clozeRecoverability} N≥${AUTO_APPROVE.naturalness} L≥${AUTO_APPROVE.levelAppropriateness} T≥${AUTO_APPROVE.translationAccuracy}.`,
    `Flip \`approved\` in ${cfg.deckId}.candidates.json to override either direction, then:`,
    `\`npm run gen-sentences -- --approve ${cfg.deckId}\``, '',
    `## Flagged for review (${flaggedRows.length})`, '',
    '| word | sentence (JA) | EN | cloze answer | judge | use | approve? |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...flaggedRows, '',
    `## Needs manual authoring (${manualQueue.length} words with no shippable sentence)`, '',
    ...manualQueue.map((m) => `- ${m}`), '',
    `## Auto-approved (${approvedRows.length}) — spot-check only`, '',
    '| word | sentence (JA) | EN | cloze answer | judge | use | approve? |',
    '| --- | --- | --- | --- | --- | --- | --- |',
    ...approvedRows, '',
  ].join('\n');
}

// ---------------------------------------------------------------- CLI

async function main(): Promise<void> {
  const [deckId, cmd, ...rest] = process.argv.slice(2);
  const cfg = LEVELS[deckId ?? ''];
  if (!cfg) throw new Error(`usage: pipeline <${Object.keys(LEVELS).join('|')}> <plan|submit|fetch|judge|finalize>`);
  switch (cmd) {
    case 'plan':
      return plan(cfg);
    case 'submit': {
      const pilotIdx = rest.indexOf('--pilot');
      return submit(cfg, {
        pilot: pilotIdx >= 0 ? Number(rest[pilotIdx + 1] ?? 5) : undefined,
        retry: rest.includes('--retry'),
      });
    }
    case 'fetch':
      return fetchResults(cfg);
    case 'judge':
      return judge(cfg);
    case 'finalize':
      return finalize(cfg);
    default:
      throw new Error(`unknown command ${cmd}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
}
