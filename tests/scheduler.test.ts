import { describe, expect, it } from 'vitest';
import { isDue, newCard, rateCard } from '../src/srs/scheduler';

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
