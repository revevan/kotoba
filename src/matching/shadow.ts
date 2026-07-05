// Lenient grading for the "say it back" (sentence shadowing) exercise: the
// learner repeats a full sentence and passes when most of it was heard — a
// car mic and Deepgram won't reproduce every particle, and shadowing is about
// production practice, not transcription accuracy.

import type { Sentence } from '../types';
import { toComparableKana } from './normalize';

/** Fraction of the target reading that must be covered (in order) to pass. */
export const SHADOW_COVERAGE = 0.6;

/** Length of the longest common subsequence between two strings. */
export function lcsLength(a: string, b: string): number {
  if (a.length === 0 || b.length === 0) return 0;
  let prev = new Array<number>(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    const cur = new Array<number>(b.length + 1).fill(0);
    for (let j = 1; j <= b.length; j++) {
      cur[j] = a[i - 1] === b[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    }
    prev = cur;
  }
  return prev[b.length];
}

export interface ShadowResult {
  matched: boolean;
  /** Best in-order coverage of the sentence reading across the alternatives. */
  coverage: number;
}

/**
 * Grade a shadowed sentence: compare each recognizer alternative (the runner
 * already appends kanji→reading expansions) against the sentence's full
 * reading and keep the best in-order character coverage.
 */
export function gradeShadow(alternatives: string[], sentence: Sentence): ShadowResult {
  const target = toComparableKana(sentence.readingKana);
  if (target.length === 0) return { matched: false, coverage: 0 };
  let best = 0;
  for (const alt of alternatives) {
    if (!alt) continue;
    const kana = toComparableKana(alt);
    if (kana.length === 0) continue;
    best = Math.max(best, lcsLength(kana, target) / target.length);
  }
  return { matched: best >= SHADOW_COVERAGE, coverage: best };
}
