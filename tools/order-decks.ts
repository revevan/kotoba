// Reorder the full JLPT decks into pedagogical teaching order in place.
//
// New words are introduced in deck-file order (src/session/controller.ts), and
// the decks shipped alphabetized by kana — so a beginner met a wall of あ-words.
// This rewrites the word arrays into Genki-lesson-then-frequency order (see
// tools/word-order.ts) WITHOUT touching any word object: same ids, readings,
// alts, and sentence links — only the order changes. Regenerating the decks
// from source would clobber the hand-repairs, so we reorder the shipped files
// directly.
//
// The N5 Starter deck is left alone: it's a curated Genki 1–6 slice, already in
// lesson order.
//
//   npx tsx tools/order-decks.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Deck } from '../src/types';
import { loadFreqRanks, orderWords } from './word-order';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const sourcesDir = join(root, 'tools', 'sources');

const DECKS = ['jlpt-n5', 'jlpt-n4', 'jlpt-n3'];

const ranks = loadFreqRanks(sourcesDir);

for (const id of DECKS) {
  const path = join(decksDir, `${id}.json`);
  const deck = JSON.parse(readFileSync(path, 'utf8')) as Deck;
  const before = deck.words.map((w) => w.id);
  deck.words = orderWords(deck.words, ranks);
  const after = deck.words.map((w) => w.id);

  // Sanity: reordering must preserve the exact set of words.
  if (before.length !== after.length || new Set(after).size !== after.length) {
    throw new Error(`${id}: word set changed during reorder`);
  }
  const moved = before.filter((wid, i) => wid !== after[i]).length;
  writeFileSync(path, JSON.stringify(deck, null, 1));
  console.log(`${id}: ${deck.words.length} words reordered (${moved} changed position)`);
}
