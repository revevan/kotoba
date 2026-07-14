import { describe, expect, it } from 'vitest';
import { isDue, newCard, rateCard } from '../src/srs/scheduler';

const DAY = 24 * 60 * 60 * 1000;

describe('scheduler', () => {
  it('new cards are due immediately', () => {
    const now = new Date();
    expect(isDue(newCard(now), now)).toBe(true);
  });

  it('good rating pushes the due date out', () => {
    const now = new Date();
    const card = rateCard(newCard(now), 'good', now);
    expect(new Date(card.due).getTime()).toBeGreaterThan(now.getTime());
  });

  it('again keeps the card due sooner than good', () => {
    const now = new Date();
    const again = rateCard(newCard(now), 'again', now);
    const good = rateCard(newCard(now), 'good', now);
    expect(new Date(again.due).getTime()).toBeLessThanOrEqual(new Date(good.due).getTime());
  });

  it('no rating can bring a card back inside the same session', () => {
    // The bug this guards: sub-day FSRS steps made a word you had just studied
    // due again before you had even finished the session, so the home-screen
    // count never reached zero. Every rating must land at least a day out.
    const now = new Date('2026-01-01T09:00:00Z');
    for (const rating of ['good', 'again'] as const) {
      const card = rateCard(newCard(now), rating, now);
      expect(new Date(card.due).getTime() - now.getTime()).toBeGreaterThanOrEqual(DAY);
    }
  });

  it('a missed word comes back the next day, however mature the card', () => {
    let at = new Date('2026-01-01T09:00:00Z');
    let card = rateCard(newCard(at), 'good', at);
    for (let i = 0; i < 5; i++) {
      at = new Date(card.due);
      card = rateCard(card, 'good', at);
    }
    expect(new Date(card.due).getTime() - at.getTime()).toBeGreaterThan(30 * DAY); // genuinely mature

    const lapsedAt = new Date(card.due);
    const lapsed = rateCard(card, 'again', lapsedAt);
    expect(new Date(lapsed.due).getTime() - lapsedAt.getTime()).toBe(DAY);
  });

  it('repeated good ratings grow the interval', () => {
    let card = newCard(new Date('2026-01-01'));
    card = rateCard(card, 'good', new Date('2026-01-01'));
    const first = new Date(card.due).getTime() - new Date('2026-01-01').getTime();
    const secondReviewAt = new Date(card.due);
    card = rateCard(card, 'good', secondReviewAt);
    const second = new Date(card.due).getTime() - secondReviewAt.getTime();
    expect(second).toBeGreaterThan(first);
  });
});
