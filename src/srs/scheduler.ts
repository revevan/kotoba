import { createEmptyCard, fsrs, Rating, type Card } from 'ts-fsrs';

export type { Card };
export { Rating };

// No short learning/relearning steps: this app is used every few days, not
// many times a day, so a new word's first correct answer should schedule it
// ~2 days out (and grow from there) rather than 15 minutes out — otherwise
// every word stays perpetually "due" until it graduates, inflating the queue.
const f = fsrs({ enable_fuzz: true, learning_steps: [], relearning_steps: [] });

export type SimpleRating = 'good' | 'again';

export function newCard(now: Date = new Date()): Card {
  return createEmptyCard(now);
}

export function rateCard(card: Card, rating: SimpleRating, now: Date = new Date()): Card {
  return f.next(card, now, rating === 'good' ? Rating.Good : Rating.Again).card;
}

export function isDue(card: Card, now: Date = new Date()): boolean {
  return new Date(card.due).getTime() <= now.getTime();
}
