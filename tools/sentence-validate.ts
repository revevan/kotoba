// Pure helpers for validating generated example sentences against a word's
// allowed (i+1) vocabulary. Kept side-effect free and tokenizer-agnostic so the
// logic is unit-testable without loading the ~18MB kuromoji dictionary.

import type { Deck, Word } from '../src/types';

/** kuromoji POS tags that carry meaning (vs. particles/copula/punctuation). */
const FUNCTION_POS = new Set(['助詞', '助動詞', '記号', '接続詞', 'フィラー']);

/** A content word must be in the allowed list; function words are always fine. */
export function isContentPos(pos: string): boolean {
  return !FUNCTION_POS.has(pos);
}

/** Every surface/base form that should be accepted for a given word. */
export function formsOf(word: Word): string[] {
  return [...word.written, word.kana, ...(word.alts?.map((a) => a.kana) ?? [])];
}

/**
 * Cumulative i+1 vocabulary: every word from the start of the deck up to and
 * including `index` is "known". Decks are pedagogically ordered, so a word's
 * allowed list is everything taught before it.
 */
export function allowedForms(deck: Deck, index: number): Set<string> {
  const set = new Set<string>();
  for (let i = 0; i <= index && i < deck.words.length; i++) {
    for (const f of formsOf(deck.words[i])) set.add(f);
  }
  return set;
}

export interface VocabCheck {
  ok: boolean;
  offenders: string[];
}

/**
 * Confirm every content word in a sentence is allowed (or is the target itself).
 * `contentWords` are the meaning-bearing token forms (surface or dictionary);
 * each must appear in `allowed` ∪ `targetForms`.
 */
export function checkVocab(contentWords: string[], allowed: Set<string>, targetForms: string[]): VocabCheck {
  const target = new Set(targetForms);
  const offenders = contentWords.filter((w) => !allowed.has(w) && !target.has(w));
  return { ok: offenders.length === 0, offenders: [...new Set(offenders)] };
}

/** The cloze answer must literally occur in the sentence so the audio can split it. */
export function clozeSurfacePresent(textJa: string, clozeSurface: string): boolean {
  return clozeSurface.length > 0 && textJa.includes(clozeSurface);
}
