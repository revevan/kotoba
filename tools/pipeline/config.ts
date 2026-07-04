// Bulk sentence-generation pipeline configuration. One entry per deck level;
// N4/N3 reuse the same pipeline with a wider whitelist (cumulative levels).

export interface LevelConfig {
  /** Deck the sentences are for. */
  deckId: string;
  /** Decks whose vocabulary forms the whitelist (level-based i+1). */
  whitelistDeckIds: string[];
  /** Decks whose already-shipped sentences cover words (skip + copy over). */
  reuseSentenceDeckIds: string[];
  /** kuromoji token-count bounds for a sentence (inclusive). */
  minTokens: number;
  maxTokens: number;
  /** Grammar ceiling described to the generator. */
  grammarCeiling: string;
}

export const LEVELS: Record<string, LevelConfig> = {
  'jlpt-n5': {
    deckId: 'jlpt-n5',
    whitelistDeckIds: ['jlpt-n5'],
    reuseSentenceDeckIds: ['n5-starter'],
    minTokens: 3,
    maxTokens: 14,
    grammarCeiling:
      'JLPT N5 grammar only: です/ます forms, basic particles (は が を に で と も の へ から まで), ' +
      'simple past/negative, 〜たい, 〜てください, 〜ましょう, こ/そ/あ/ど words, basic counters. ' +
      'No passive, causative, conditional (ば/たら), 敬語, or plain-form subordinate clauses.',
  },
  'jlpt-n4': {
    deckId: 'jlpt-n4',
    whitelistDeckIds: ['jlpt-n5', 'jlpt-n4'],
    reuseSentenceDeckIds: [],
    minTokens: 3,
    maxTokens: 16,
    grammarCeiling:
      'JLPT N4 grammar and below: everything from N5 plus 〜たら/〜ば conditionals, 〜てもいい, ' +
      '〜なければならない, potential form, plain form + と思う/と言う, 〜たことがある, comparative より/のほうが.',
  },
  'jlpt-n3': {
    deckId: 'jlpt-n3',
    whitelistDeckIds: ['jlpt-n5', 'jlpt-n4', 'jlpt-n3'],
    reuseSentenceDeckIds: [],
    minTokens: 4,
    maxTokens: 18,
    grammarCeiling:
      'JLPT N3 grammar and below: everything from N5/N4 plus passive, causative, 〜そうだ/〜ようだ/〜らしい, ' +
      '〜ば〜ほど, 〜ことにする/〜ことになる, 〜ながら, casual plain-form conversation, てしまう/ておく/てある.',
  },
};

/** Words per generation cluster (semantically related words prompted together). */
export const CLUSTER_SIZE = 8;
/** Sentences generated per word (rotation pool; matches n5-starter's pool). */
export const SENTENCES_PER_WORD = 3;
/** Max regeneration rounds before a word goes to the manual-authoring queue. */
export const MAX_RETRY_ROUNDS = 2;
/** A masked sentence pattern used more than this often is "overused" (retried). */
export const PATTERN_OVERUSE_LIMIT = 4;
/** Near-duplicate threshold (char-trigram Jaccard on the cloze-masked sentence). */
export const NEAR_DUP_JACCARD = 0.75;

/** Auto-ship rule (user-approved): judge scores at/above these thresholds ship;
 *  anything below lands in the human review queue. Scores are 1-5. */
export const AUTO_APPROVE = {
  clozeRecoverability: 4,
  naturalness: 4,
  levelAppropriateness: 3,
  translationAccuracy: 4,
};

/** Models. Sonnet 5 supersedes the sonnet-4-6 named in the planning doc —
 *  better Japanese at lower (intro) batch pricing. Override via env. */
export const GEN_MODEL = process.env.PIPELINE_GEN_MODEL ?? 'claude-sonnet-5';
export const JUDGE_MODEL = process.env.PIPELINE_JUDGE_MODEL ?? 'claude-sonnet-5';

/** Scenario contexts rotated across clusters (assigned deterministically). */
export const SCENARIOS = [
  'morning routine', 'commuting to work', 'weather small talk', 'a friend visiting',
  'cooking dinner', 'weekend plans', 'shopping for groceries', 'at a restaurant',
  'at school or class', 'family life', 'travel and directions', 'health and feeling unwell',
  'work and the office', 'hobbies and free time', 'phone calls and messages', 'running late',
];

/** Grammatical frames rotated across clusters (the generator picks a mix). */
export const FRAMES = [
  'plain statement', 'question', 'negative statement', 'past tense',
  'invitation (〜ましょう/〜ませんか)', 'request (〜てください)', 'desire (〜たい)', 'reason (〜から)',
];
