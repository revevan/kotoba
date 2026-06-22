/** An alternate, less-common reading of the same meaning (taught + accepted). */
export interface AltReading {
  /** Word id of the original reading; reuses its existing ja audio clip. */
  id: string;
  kana: string;
  romaji: string;
}

/**
 * An example sentence that uses a word in context. Pure static content, shipped
 * alongside the decks (see public/sentences/{deckId}.json). A small pool per word
 * is rotated so learners hear varied contexts and don't memorize one sentence.
 */
export interface Sentence {
  /** Stable hash; sentence audio clips (sen/sen-pre/sen-post/sen-en) key off it. */
  id: string;
  /** Full sentence, normal kanji usage. */
  textJa: string;
  /** Full hiragana reading. */
  readingKana: string;
  /** Natural English translation. */
  textEn: string;
  /** Exact substring of textJa that is the target word as it appears (may be conjugated). */
  clozeSurface: string;
  /** Hiragana reading of clozeSurface — the accepted cloze answer. */
  clozeReading: string;
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
  /** Approved example-sentence pool, attached at load time; absent ⇒ plain behavior. */
  sentences?: Sentence[];
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
