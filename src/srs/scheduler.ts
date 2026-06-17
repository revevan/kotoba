import { createEmptyCard, fsrs, Rating, type Card } from 'ts-fsrs';

export type { Card };
export { Rating };

// Standard FSRS defaults, including short learning/relearning steps. New items
// get a couple of closely-spaced early reviews before graduating to multi-day
// intervals — the research-backed way to build durable memory (and what Anki
// and WaniKani both do). The earlier queue-inflation problem is handled by only
// scheduling words that were actually taught, plus the per-day new-word cap.
const f = fsrs({ enable_fuzz: true });

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
