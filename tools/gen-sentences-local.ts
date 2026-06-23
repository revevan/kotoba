// Validates hand-authored (i+1) example sentences and emits the same review
// handoff as gen-sentences.ts — but with NO API call. Author candidates in
// tools/sentences-authored/{deckId}.json (keyed by wordId, same shape as the
// shipped public/sentences pool minus the id); this script tokenizes each with
// kuromoji, runs the shared validators, and writes the draft + review table.
//
//   npm run gen-sentences-local -- [deckId ...]
//
// Then review/approve exactly as with gen-sentences: set approved in the
// .candidates.json and run `npm run gen-sentences -- --approve [deckId ...]`.

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { TokenizerBuilder, type IpadicFeatures, type LoaderConfig } from '@patdx/kuromoji';
import type { Deck, Sentence } from '../src/types';
import { allowedForms, checkVocab, clozeSurfacePresent, formsOf } from './sentence-validate';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const authoredDir = join(root, 'tools', 'sentences-authored');
const draftsDir = join(root, 'tools', 'sentences-draft');

const DICT_CDN = 'https://cdn.jsdelivr.net/npm/@aiktb/kuromoji@1.0.2/dict/';

interface Candidate extends Sentence {
  wordId: string;
  valid: boolean;
  offenders: string[];
  approved: boolean;
}

/** The hand-authored input: per-word arrays of sentence fields (no id). */
type Authored = Record<string, Array<Omit<Sentence, 'id'>>>;

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

async function run(decks: Deck[]): Promise<void> {
  mkdirSync(draftsDir, { recursive: true });
  const tk = await buildTokenizer();

  for (const deck of decks) {
    const authoredPath = join(authoredDir, `${deck.id}.json`);
    if (!existsSync(authoredPath)) {
      console.warn(`${deck.id}: no authored input at ${authoredPath} — skipping`);
      continue;
    }
    const authored = JSON.parse(readFileSync(authoredPath, 'utf8')) as Authored;
    const indexOf = new Map(deck.words.map((w, i) => [w.id, i]));
    const candidates: Candidate[] = [];
    let flagged = 0;

    for (const [wordId, drafts] of Object.entries(authored)) {
      const i = indexOf.get(wordId);
      if (i === undefined) {
        console.warn(`  unknown wordId ${wordId} — skipping`);
        continue;
      }
      const word = deck.words[i];
      const allowed = allowedForms(deck, i);
      const targetForms = formsOf(word);
      for (const d of drafts) {
        const vocab = checkVocab(tk.tokenize(d.textJa), allowed, targetForms);
        const surfaceOk = clozeSurfacePresent(d.textJa, d.clozeSurface);
        const valid = vocab.ok && surfaceOk;
        if (!valid) flagged++;
        candidates.push({
          id: sentenceId(word.id, d.textJa),
          wordId: word.id,
          ...d,
          valid,
          offenders: surfaceOk ? vocab.offenders : [...vocab.offenders, `cloze "${d.clozeSurface}" not in sentence`],
          approved: false,
        });
      }
    }

    // Emit in deck order so the review table reads top-to-bottom.
    candidates.sort((a, b) => (indexOf.get(a.wordId)! - indexOf.get(b.wordId)!));
    writeFileSync(join(draftsDir, `${deck.id}.candidates.json`), JSON.stringify(candidates, null, 2) + '\n');
    writeFileSync(join(draftsDir, `${deck.id}.review.md`), reviewTable(deck, candidates));
    console.log(`${deck.id}: ${candidates.length} candidates (${flagged} flagged) → ${draftsDir}`);
  }
}

async function main(): Promise<void> {
  const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  const decks = loadDecks(only);
  console.log(`decks: ${decks.map((d) => d.id).join(', ')}`);
  await run(decks);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  void main();
}
