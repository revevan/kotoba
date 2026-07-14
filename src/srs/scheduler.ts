import { createEmptyCard, fsrs, Rating, type Card } from 'ts-fsrs';

export type { Card };
export { Rating };

// No sub-day steps: every rating lands a card at least a day out.
//
// Stock FSRS steps ('1m'/'10m') are wrong for this app. The session queue is
// fixed when the session starts, so a 10-minute step can't re-drill anything —
// it just makes a word you *just* studied due again before you've finished the
// session, which is what kept the home-screen count from ever reaching zero.
//
// The short-term repetition those steps are meant to provide already happens
// in-session, and better: a taught word is re-quizzed a few items later, and a
// missed word is re-drilled later in the same session (see machine.ts). So the
// in-session re-quiz *is* the graduating rating — hence learning_steps: [].
//
// A miss always comes back the next day (relearning_steps: ['1d']). The step is
// what pins it to a day: left to its own weights FSRS reschedules a lapsed
// mature card several days out, which is too long a leash for a word you just
// blanked on.
const f = fsrs({
  enable_fuzz: true,
  learning_steps: [],
  relearning_steps: ['1d'],
});

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
