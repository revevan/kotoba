import { toHiragana } from 'wanakana';

const STRIP = /[\s。、．，.,!?！？・「」『』()（）'"-]/g;

/** NFKC-normalize and strip whitespace/punctuation; keeps kanji as-is. */
export function normalizeText(s: string): string {
  return s.normalize('NFKC').replace(STRIP, '').toLowerCase();
}

/** Normalized + katakana/romaji converted to hiragana (kanji passes through). */
export function toComparableKana(s: string): string {
  return toHiragana(normalizeText(s));
}

const KANA_ONLY = /^[ぁ-ゖー]+$/;

export function isKanaOnly(s: string): boolean {
  return KANA_ONLY.test(s);
}
