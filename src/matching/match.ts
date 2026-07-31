import type { Sentence, Word } from '../types';
import { isKanaOnly, normalizeText, toComparableKana } from './normalize';

export interface MatchResult {
  matched: boolean;
  matchedAlternative?: string;
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    prev = cur;
  }
  return prev[n];
}

/**
 * Core matcher: grade recognizer alternatives against an expected reading. Checks
 * each alternative against the accepted written forms (iOS usually returns kanji),
 * the hiragana reading, and finally a small Levenshtein tolerance on kana.
 */
export function matchKana(alternatives: string[], expectedKana: string, acceptedForms: string[] = []): MatchResult {
  const targetKana = toComparableKana(expectedKana);
  const written = new Set(acceptedForms.map(normalizeText));
  const maxDist = targetKana.length <= 3 ? 1 : 2;

  for (const alt of alternatives) {
    if (!alt) continue;
    const raw = normalizeText(alt);
    if (raw && written.has(raw)) return { matched: true, matchedAlternative: alt };
    const kana = toComparableKana(alt);
    if (kana === targetKana) return { matched: true, matchedAlternative: alt };
    if (isKanaOnly(kana) && targetKana.length > 1 && levenshtein(kana, targetKana) <= maxDist) {
      return { matched: true, matchedAlternative: alt };
    }
  }
  return { matched: false };
}

/** Grade recognized speech against the expected word (its reading + written forms). */
export function gradeAnswer(alternatives: string[], word: Word): MatchResult {
  return matchKana(alternatives, word.kana, word.written);
}

/**
 * Grade a cloze answer against the gapped word as it appears in the sentence.
 * Lenient by design: the reading is matched (after kuromoji expansion upstream),
 * so the dictionary form and the conjugated surface both pass on a car mic.
 */
export function gradeCloze(alternatives: string[], sentence: Sentence): MatchResult {
  return matchKana(alternatives, sentence.clozeReading, [sentence.clozeSurface]);
}

import type { Conjugated } from '../conj/engine';

/**
 * Grade a spoken conjugation. STRICT on purpose: the Levenshtein tolerance the
 * word matcher allows would accept the wrong form here — 食べた is distance 1
 * from 食べて, and the ending IS the answer. Exact comparable-kana (or written
 * surface) only; kanji transcripts still pass via the upstream reading
 * expansion, and engine-provided alts (e.g. ら抜き potential) are accepted.
 */
export function gradeConjugation(alternatives: string[], expected: Conjugated): MatchResult {
  const targets = new Set([toComparableKana(expected.kana), ...(expected.altKana ?? []).map(toComparableKana)]);
  const surface = normalizeText(expected.surface);
  for (const alt of alternatives) {
    if (!alt) continue;
    if (normalizeText(alt) === surface) return { matched: true, matchedAlternative: alt };
    if (targets.has(toComparableKana(alt))) return { matched: true, matchedAlternative: alt };
  }
  return { matched: false };
}

const DONT_KNOW = ['わからない', 'わかりません', 'しらない', 'しりません', '分からない', '分かりません', '知らない', '知りません'];

/** "I don't know" in the answer → go straight to the reveal. */
export function isDontKnow(alternatives: string[]): boolean {
  return alternatives.some((alt) => {
    const kana = toComparableKana(alt);
    const raw = normalizeText(alt);
    return DONT_KNOW.some((d) => kana.includes(d) || raw.includes(d));
  });
}
