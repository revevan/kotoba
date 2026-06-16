// Kanji → reading conversion so the matcher can grade an answer even when the
// speech recognizer writes it with unexpected kanji (e.g. 一社 for いしゃ). Uses
// a Japanese morphological analyzer (kuromoji) whose ~18MB IPADIC dictionary is
// fetched on demand from a CDN and cached by the service worker for offline use.
//
// Everything here degrades gracefully: until the analyzer is loaded (or if it
// fails to load at all), reading expansion is a no-op and matching falls back to
// the kanji/kana comparison it always did.

import { TokenizerBuilder, type IpadicFeatures, type LoaderConfig } from '@patdx/kuromoji';
import { toHiragana } from 'wanakana';
import { dlog } from '../debug/log';

const DICT_CDN = 'https://cdn.jsdelivr.net/npm/@aiktb/kuromoji@1.0.2/dict/';

const loader: LoaderConfig = {
  async loadArrayBuffer(url: string): Promise<ArrayBufferLike> {
    // kuromoji asks for "<name>.dat.gz"; the CDN files are already decompressed.
    const file = url.replace('.gz', '').split('/').pop();
    const res = await fetch(DICT_CDN + file);
    if (!res.ok) throw new Error(`dict ${file} ${res.status}`);
    return res.arrayBuffer();
  },
};

type Tok = { tokenize(text: string): IpadicFeatures[] };
let tokenizerPromise: Promise<Tok | null> | null = null;

/** Begin loading the analyzer (call once, e.g. at session start). */
export function initReadingAnalyzer(): void {
  if (tokenizerPromise) return;
  tokenizerPromise = new TokenizerBuilder({ loader })
    .build()
    .then((tk) => {
      dlog('reading', 'analyzer ready');
      return tk as Tok;
    })
    .catch((e) => {
      dlog('reading', `analyzer failed to load: ${e}`);
      return null;
    });
}

/** Hiragana reading of mixed kanji/kana text. Pure given the tokens. */
export function readingFromTokens(tokens: IpadicFeatures[]): string {
  return tokens.map((t) => (t.reading ? toHiragana(t.reading) : t.surface_form)).join('');
}

/**
 * Return the recognizer alternatives plus a hiragana reading for each, so a
 * kanji transcription can be graded by pronunciation. No-op until the analyzer
 * has loaded.
 */
export async function expandWithReadings(alternatives: string[]): Promise<string[]> {
  if (!tokenizerPromise) return alternatives;
  const tk = await tokenizerPromise;
  if (!tk) return alternatives;

  const out = [...alternatives];
  const seen = new Set(alternatives);
  for (const alt of alternatives) {
    try {
      const reading = readingFromTokens(tk.tokenize(alt));
      if (reading && !seen.has(reading)) {
        seen.add(reading);
        out.push(reading);
      }
    } catch {
      /* skip this alternative */
    }
  }
  return out;
}
