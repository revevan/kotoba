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

/** The minimal kuromoji token shape the form extraction needs. */
export interface Token {
  pos: string;
  surface_form: string;
  basic_form?: string;
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
 * Confirm every content word in a sentence is allowed (or is the target).
 *
 * kuromoji freely over-segments multi-token vocabulary — 郵便局 → 郵便+局,
 * 朝御飯 → 朝+御飯, お兄さん → お+兄さん — and even mis-parses single words
 * (いつ → い+つ). So rather than trust the segmentation, we treat the known
 * vocabulary as the authority: starting at each content token, if some run of
 * consecutive tokens concatenates to a known form, the whole run is "covered".
 * A content token is an offender only if it is left uncovered and its own
 * dictionary form isn't known either (the latter lets a conjugated target verb,
 * 起きます → 起き/起きる, pass on its dictionary form).
 */
export function checkVocab(tokens: Token[], allowed: Set<string>, targetForms: string[]): VocabCheck {
  const known = new Set<string>([...allowed, ...targetForms]);
  let maxLen = 1;
  for (const f of known) maxLen = Math.max(maxLen, f.length);

  const covered = new Array<boolean>(tokens.length).fill(false);
  for (let i = 0; i < tokens.length; i++) {
    if (!isContentPos(tokens[i].pos)) continue; // only start a run at a content token
    let concat = '';
    let best = -1;
    for (let j = i; j < tokens.length; j++) {
      concat += tokens[j].surface_form;
      if (concat.length > maxLen) break;
      if (known.has(concat)) best = j;
    }
    for (let k = i; k <= best; k++) covered[k] = true;
  }

  const offenders: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!isContentPos(t.pos) || covered[i]) continue;
    if (t.basic_form && t.basic_form !== '*' && known.has(t.basic_form)) continue;
    offenders.push(t.surface_form);
  }
  return { ok: offenders.length === 0, offenders: [...new Set(offenders)] };
}

/** The cloze answer must literally occur in the sentence so the audio can split it. */
export function clozeSurfacePresent(textJa: string, clozeSurface: string): boolean {
  return clozeSurface.length > 0 && textJa.includes(clozeSurface);
}
