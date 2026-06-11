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
