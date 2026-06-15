/** An alternate, less-common reading of the same meaning (taught + accepted). */
export interface AltReading {
  /** Word id of the original reading; reuses its existing ja audio clip. */
  id: string;
  kana: string;
  romaji: string;
}

export interface Word {
  id: string;
  /** Full English meaning, for display. */
  english: string;
  /** Short English used for the spoken prompt audio. */
  prompt: string;
  /** Hiragana reading. */
  kana: string;
  /** Accepted written forms (kanji/katakana expression; may equal kana). */
  written: string[];
  romaji: string;
  /** Romaji clip keys for the mora breakdown; 'q' = sokuon (rendered as a pause). */
  mora: string[];
  /** Hiragana morae, for display alongside the breakdown. */
  moraKana: string[];
  /** Alternate readings of the same meaning, mentioned when teaching this word. */
  alts?: AltReading[];
  tags: string[];
}

export interface Deck {
  id: string;
  name: string;
  words: Word[];
}

export interface DeckInfo {
  id: string;
  name: string;
  wordCount: number;
  file: string;
}
