// Pure, presentation-layer choices that sit on top of the single FSRS card per
// word: which exercise a review should be, and which sentence to rotate to.

import { State } from 'ts-fsrs';
import type { Card } from '../srs/scheduler';
import type { Sentence, Word } from '../types';

export interface ClozeConfig {
  enableCloze: boolean;
  minIntervalDays: number;
  /** `?cloze=1` debug override: treat any word-with-sentence as mature. */
  forceMature?: boolean;
  /** Labs (rungs 3–4): sentence shadowing + free production, pre-release. */
  labs?: {
    shadowMinIntervalDays: number;
    buildMinIntervalDays: number;
    /** `?rung=` debug override: force this type when prerequisites are met. */
    force?: 'cloze' | 'shadow' | 'build' | null;
  };
}

/**
 * A word graduates from plain recall to cloze once it is a mature Review card
 * (interval ≥ threshold) and has an approved sentence to gap. Everything else —
 * new/learning cards, sentence-less words, the flag being off — stays plain.
 *
 * `forceMature` bypasses only the maturity gate (state + interval), so the cloze
 * path can be exercised on a fresh database without waiting for a card to age.
 */
/** Sentences whose context forces a unique answer — the only ones a cloze quiz
 *  may gap. Low-recoverability sentences (clozeEligible: false) remain in the
 *  pool as teach/correct-tail examples only. */
export function clozeSentences(word: Word): Sentence[] {
  return (word.sentences ?? []).filter((s) => s.clozeEligible !== false);
}

export function chooseExerciseType(card: Card | undefined, word: Word, cfg: ClozeConfig): 'quiz' | 'cloze' | 'shadow' | 'build' {
  // Debug override (labs only): force a rung when its prerequisites are met.
  if (cfg.labs?.force === 'build') return 'build';
  if (cfg.labs?.force === 'shadow' && (word.sentences?.length ?? 0) > 0) return 'shadow';
  if (cfg.labs?.force === 'cloze' && clozeSentences(word).length > 0) return 'cloze';
  if (cfg.forceMature) return clozeSentences(word).length > 0 ? 'cloze' : 'quiz';

  if (!card || card.state !== State.Review) return 'quiz';
  const days = card.scheduled_days ?? 0;

  // The ladder, top rung first: build (free production) → shadow (say the
  // sentence back) → cloze (fill the blank) → plain recall. Each rung needs
  // maturity plus its content prerequisite; missing either falls through.
  if (cfg.labs && days >= cfg.labs.buildMinIntervalDays) return 'build';
  if (cfg.labs && days >= cfg.labs.shadowMinIntervalDays && (word.sentences?.length ?? 0) > 0) return 'shadow';
  if (cfg.enableCloze && days >= cfg.minIntervalDays && clozeSentences(word).length > 0) return 'cloze';
  return 'quiz';
}

/**
 * Deterministic rotation through the sentence pool so each exposure advances to
 * a different sentence (keyed off the card's repetition count). Deterministic
 * keeps the queue unit-testable; modulo wraps the pool.
 */
export function pickSentence(word: Word, rotation: number): Sentence | undefined {
  return pickFrom(word.sentences, rotation);
}

/** Rotation restricted to cloze-eligible sentences (for cloze slots). */
export function pickClozeSentence(word: Word, rotation: number): Sentence | undefined {
  return pickFrom(clozeSentences(word), rotation);
}

function pickFrom(pool: Sentence[] | undefined, rotation: number): Sentence | undefined {
  if (!pool || pool.length === 0) return undefined;
  const i = ((rotation % pool.length) + pool.length) % pool.length;
  return pool[i];
}
