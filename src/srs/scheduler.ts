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

/** Day-granularity dueness: anything scheduled for today (local) counts now.
 *
 *  FSRS stores exact timestamps, so a word missed at 9:14pm lands due 9:14pm
 *  tomorrow — under an exact-time comparison it was invisible the next morning
 *  and the home count crept up through the day as the clock passed each card's
 *  previous study time. Comparing against local end-of-day makes the count
 *  stable all day and never lets a session end with cards still "due". */
export function isDue(card: Card, now: Date = new Date()): boolean {
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return new Date(card.due).getTime() < endOfToday.getTime();
}
