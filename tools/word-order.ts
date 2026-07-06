// Pedagogical word ordering for the full JLPT decks.
//
// The source word lists are alphabetized by kana, so introducing new words in
// file order meant a beginner met あう・あお・あか・あき… in a row — the
// hardest words to keep apart, with no regard for how common or useful they
// are. This orders words the way a course would teach them instead:
//
//   1. Genki-tagged words first, in textbook lesson order (the intended
//      teaching sequence — same signal the N5 Starter deck already uses).
//   2. Everything else by corpus frequency, most common first, so the words
//      you'll actually hear come before the rare ones.
//   3. Kana (gojūon) as the final tiebreak — this only bites for the ~3–4% of
//      words absent from the frequency list (mostly compound/polite forms).
//
// Frequency ranks come from a public Japanese word-frequency list (surface
// forms ordered most→least frequent):
//   https://github.com/hingston/japanese (44492-japanese-words-...txt),
// mirrored at tools/sources/frequency-ja.txt. Rank = line number (0 = most
// frequent); a word's rank is the best (lowest) rank across its written forms
// and its kana reading.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Word } from '../src/types';

/** Genki lesson number from a word's tags, or null if untagged. */
export function genkiLesson(tags: string[]): number | null {
  for (const t of tags) {
    const m = /^Genki_Ln\.(\d+)$/.exec(t);
    if (m) return Number(m[1]);
  }
  return null;
}

/** surface form → frequency rank (0 = most frequent). */
export type FreqRanks = Map<string, number>;

/** Load the mirrored frequency list into a surface→rank map. */
export function loadFreqRanks(sourcesDir: string): FreqRanks {
  const text = readFileSync(join(sourcesDir, 'frequency-ja.txt'), 'utf8');
  const ranks: FreqRanks = new Map();
  let rank = 0;
  for (const line of text.split('\n')) {
    const w = line.trim();
    if (w && !ranks.has(w)) ranks.set(w, rank++);
  }
  return ranks;
}

/** Best (lowest) rank across a word's written forms + kana; Infinity if absent. */
export function freqRankOf(word: Word, ranks: FreqRanks): number {
  let best = Infinity;
  for (const form of [...word.written, word.kana]) {
    const r = ranks.get(form);
    if (r !== undefined && r < best) best = r;
  }
  return best;
}

/**
 * Return a new array of `words` sorted into teaching order (see file header).
 * Stable and deterministic: same input + same frequency list → same order.
 */
export function orderWords(words: Word[], ranks: FreqRanks): Word[] {
  const meta = words.map((w) => ({
    w,
    lesson: genkiLesson(w.tags),
    rank: freqRankOf(w, ranks),
  }));
  return meta
    .sort((a, b) => {
      // Genki words as a block, ahead of everything else.
      const aGenki = a.lesson !== null;
      const bGenki = b.lesson !== null;
      if (aGenki !== bGenki) return aGenki ? -1 : 1;
      // Within the Genki block: lesson order first.
      if (aGenki && bGenki && a.lesson !== b.lesson) return a.lesson! - b.lesson!;
      // Then (or, for non-Genki words, primarily) by frequency.
      if (a.rank !== b.rank) return a.rank - b.rank;
      // Final tiebreak: kana order — only reached for words the list misses.
      return a.w.kana.localeCompare(b.w.kana, 'ja');
    })
    .map((m) => m.w);
}
