// Converts tools/sentences-authored/{deckId}.json → public/sentences/{deckId}.json
// by stamping each sentence with its stable content-hash id.
// Run: npx tsx tools/publish-sentences.ts [deckId ...]

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Sentence } from '../src/types';

const ROOT = new URL('..', import.meta.url).pathname;
const authoredDir = join(ROOT, 'tools', 'sentences-authored');
const publicDir = join(ROOT, 'public', 'sentences');

type AuthoredSentence = Omit<Sentence, 'id'>;

function sentenceId(wordId: string, textJa: string): string {
  return 's-' + createHash('sha1').update(`${wordId}|${textJa}`).digest('hex').slice(0, 8);
}

const deckIds = process.argv.slice(2).length > 0 ? process.argv.slice(2) : ['n5-starter'];

mkdirSync(publicDir, { recursive: true });

for (const deckId of deckIds) {
  const authored: Record<string, AuthoredSentence[]> = JSON.parse(
    readFileSync(join(authoredDir, `${deckId}.json`), 'utf-8')
  );

  const out: Record<string, Sentence[]> = {};
  let total = 0;
  for (const [wordId, sentences] of Object.entries(authored)) {
    out[wordId] = sentences.map((s) => ({ id: sentenceId(wordId, s.textJa), ...s }));
    total += sentences.length;
  }

  const outPath = join(publicDir, `${deckId}.json`);
  writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
  console.log(`${deckId}: ${Object.keys(out).length} words, ${total} sentences → ${outPath}`);
}
