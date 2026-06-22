// Pure, presentation-layer choices that sit on top of the single FSRS card per
// word: which exercise a review should be, and which sentence to rotate to.

import { State } from 'ts-fsrs';
import type { Card } from '../srs/scheduler';
import type { Sentence, Word } from '../types';

export interface ClozeConfig {
  enableCloze: boolean;
  minIntervalDays: number;
}

/**
 * A word graduates from plain recall to cloze once it is a mature Review card
 * (interval ≥ threshold) and has an approved sentence to gap. Everything else —
 * new/learning cards, sentence-less words, the flag being off — stays plain.
 */
export function chooseExerciseType(card: Card | undefined, word: Word, cfg: ClozeConfig): 'quiz' | 'cloze' {
  if (!cfg.enableCloze) return 'quiz';
  if (!word.sentences || word.sentences.length === 0) return 'quiz';
  if (!card || card.state !== State.Review) return 'quiz';
  if ((card.scheduled_days ?? 0) < cfg.minIntervalDays) return 'quiz';
  return 'cloze';
}

/**
 * Deterministic rotation through the sentence pool so each exposure advances to
 * a different sentence (keyed off the card's repetition count). Deterministic
 * keeps the queue unit-testable; modulo wraps the pool.
 */
export function pickSentence(word: Word, rotation: number): Sentence | undefined {
  const pool = word.sentences;
  if (!pool || pool.length === 0) return undefined;
  const i = ((rotation % pool.length) + pool.length) % pool.length;
  return pool[i];
}
