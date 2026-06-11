import { createEmptyCard, fsrs, Rating, type Card } from 'ts-fsrs';

export type { Card };
export { Rating };

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
