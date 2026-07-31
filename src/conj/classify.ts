// Verb classification for the conjugation exercise: decide whether a deck word
// is a conjugatable verb and which VerbSubclass it is. Pure and
// tokenizer-agnostic (like tools/sentence-validate.ts) so it tests without the
// 18MB kuromoji dictionary; tools/enrich-verbs.ts feeds it real tokens.
//
// Classification is deliberately conservative — a verb is only tagged when
// three independent signals agree (gloss shape, kana ending, kuromoji parse).
// Anything ambiguous is skipped and logged for manual triage: a missing verb
// just doesn't get conjugation prompts, a misclassified one teaches wrong
// Japanese.

import type { VerbSubclass } from './engine';

/** The minimal kuromoji token shape classification needs. */
export interface ClassifyToken {
  pos: string;
  surface_form: string;
  basic_form?: string;
  /** IPADIC conjugated_type, e.g. 五段・カ行イ音便, 一段, サ変・スル. */
  conj_type?: string;
}

export type ClassifyResult =
  | { kind: 'verb'; subclass: VerbSubclass }
  | { kind: 'not-verb' }
  | { kind: 'ambiguous'; reason: string };

/** U-row kana a dictionary-form verb can end with. */
const U_ROW = new Set(['う', 'く', 'ぐ', 'す', 'つ', 'ぬ', 'ぶ', 'む', 'る']);

const ENDING_SUBCLASS: Record<string, VerbSubclass> = {
  う: 'godan-u',
  く: 'godan-ku',
  ぐ: 'godan-gu',
  す: 'godan-su',
  つ: 'godan-tsu',
  ぬ: 'godan-nu',
  ぶ: 'godan-bu',
  む: 'godan-mu',
  る: 'godan-ru',
};

/** IPADIC conjugated_type prefix → subclass. */
const CONJ_TYPE_SUBCLASS: Array<[RegExp, VerbSubclass]> = [
  [/^五段・カ行/, 'godan-ku'],
  [/^五段・ガ行/, 'godan-gu'],
  [/^五段・サ行/, 'godan-su'],
  [/^五段・タ行/, 'godan-tsu'],
  [/^五段・ナ行/, 'godan-nu'],
  [/^五段・バ行/, 'godan-bu'],
  [/^五段・マ行/, 'godan-mu'],
  [/^五段・ラ行/, 'godan-ru'],
  [/^五段・ワ行/, 'godan-u'],
  [/^一段/, 'ichidan'],
  [/^カ変/, 'kuru'],
  [/^サ変/, 'suru'],
];

/** i/e-row kana that can precede る in an ichidan verb. */
const IE_ROW = /[いきぎしじちぢにひびぴみりえけげせぜてでねへべぺめれ]/;

/** Fixes for words kuromoji can't settle. Keyed by hiragana reading.
 *  NOT overridden on purpose: ございます (fixed polite form — nothing to
 *  conjugate), 落る/楽む (source typos missing okurigana; conjugating those
 *  surfaces would render broken kanji — fix the entries via content review
 *  first, then re-run enrich-verbs). */
export const MANUAL_OVERRIDES: Record<string, VerbSubclass> = {
  はく: 'godan-ku', // 履く — kuromoji can't pick between 吐く/履く homophones (both godan-ku)
  わる: 'godan-ru', // 割る — kuromoji mis-parses the bare surface as 一段
};

export interface ClassifyInput {
  english: string;
  kana: string;
  /** Primary written surface (written[0]). */
  surface: string;
}

/** Signal 1: does the gloss look like a verb? ("to meet, to see") — a leading
 *  parenthetical qualifier ("(polite) to eat") is stripped first. */
export function glossIsVerb(english: string): boolean {
  const stripped = english.trim().replace(/^\([^)]*\)\s*/, '');
  return /^to\s/i.test(stripped);
}

function subclassFromTokens(tokens: ClassifyToken[], surface: string): VerbSubclass | null {
  // The parse must end in a verb token whose dictionary form matches the tail
  // of the surface we asked about (勉強する → 名詞 勉強 + 動詞 する is fine;
  // a parse that lemmatizes to some other verb is not trusted).
  const last = tokens[tokens.length - 1];
  if (!last || last.pos !== '動詞' || !last.conj_type) return null;
  if (!last.basic_form || last.basic_form === '*' || !surface.endsWith(last.surface_form)) return null;
  // Dictionary form only: an inflected entry would conjugate the wrong stem.
  if (last.basic_form !== last.surface_form) return null;
  for (const [re, subclass] of CONJ_TYPE_SUBCLASS) {
    if (re.test(last.conj_type)) {
      // する-compound: サ変 verb preceded by a noun stem.
      if (subclass === 'suru' && tokens.length > 1) return 'suru';
      return subclass;
    }
  }
  return null;
}

/**
 * Classify one word. `tokens` is the kuromoji parse of the primary surface, or
 * null when no tokenizer is available (then only overrides can classify).
 */
export function classifyVerb(input: ClassifyInput, tokens: ClassifyToken[] | null): ClassifyResult {
  const { english, kana, surface } = input;

  if (!glossIsVerb(english)) return { kind: 'not-verb' };

  const override = MANUAL_OVERRIDES[kana];
  if (override) return { kind: 'verb', subclass: override };

  const ending = kana.slice(-1);
  if (!U_ROW.has(ending)) {
    // Verb-glossed but not a conjugatable dictionary form (suffix entries,
    // ～てある patterns, nominal glosses) — skip.
    return { kind: 'ambiguous', reason: `verb gloss but ends ${ending}` };
  }

  if (!tokens) return { kind: 'ambiguous', reason: 'no tokenizer' };
  const parsed = subclassFromTokens(tokens, surface);
  if (!parsed) return { kind: 'ambiguous', reason: 'kuromoji did not parse a dictionary-form verb' };

  // Signal agreement: kuromoji's class must be consistent with the kana ending.
  if (parsed === 'suru') {
    if (kana === 'する' || kana.endsWith('する')) return { kind: 'verb', subclass: 'suru' };
    return { kind: 'ambiguous', reason: `サ変 parse but reading ${kana}` };
  }
  if (parsed === 'kuru') {
    if (kana === 'くる' || kana.endsWith('くる')) return { kind: 'verb', subclass: 'kuru' };
    return { kind: 'ambiguous', reason: `カ変 parse but reading ${kana}` };
  }
  if (parsed === 'ichidan') {
    if (ending === 'る' && IE_ROW.test(kana.slice(-2, -1))) return { kind: 'verb', subclass: 'ichidan' };
    return { kind: 'ambiguous', reason: `一段 parse but reading ${kana}` };
  }
  const byEnding = ENDING_SUBCLASS[ending];
  if (parsed === byEnding) return { kind: 'verb', subclass: parsed };
  return { kind: 'ambiguous', reason: `kuromoji ${parsed} vs ending ${ending}` };
}
