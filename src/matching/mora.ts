import { toRomaji } from 'wanakana';

const SMALL_COMBINING = new Set(['ゃ', 'ゅ', 'ょ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゎ']);

/** Split a hiragana string into morae. きょ = one mora; っ, ん, ー each their own. */
export function segmentMora(kana: string): string[] {
  const out: string[] = [];
  for (const ch of kana) {
    if (SMALL_COMBINING.has(ch) && out.length > 0 && !'っんー'.includes(out[out.length - 1])) {
      out[out.length - 1] += ch;
    } else {
      out.push(ch);
    }
  }
  return out;
}

const VOWELS = new Set(['a', 'i', 'u', 'e', 'o']);

function vowelOf(romaji: string): string {
  const last = romaji[romaji.length - 1];
  return VOWELS.has(last) ? last : 'a';
}

/**
 * Map hiragana morae to audio clip keys (romaji). っ → 'q' (a pause at
 * playback); ー → the vowel clip of the previous mora.
 */
export function moraClipKeys(morae: string[]): string[] {
  const keys: string[] = [];
  for (const m of morae) {
    if (m === 'っ') {
      keys.push('q');
    } else if (m === 'ー') {
      const prev = keys.length > 0 ? keys[keys.length - 1] : 'a';
      keys.push(vowelOf(prev === 'q' ? 'a' : prev));
    } else {
      keys.push(toRomaji(m).toLowerCase().replace(/[^a-z]/g, ''));
    }
  }
  return keys;
}
