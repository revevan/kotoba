import type { Item } from './machine';

/**
 * Build the session item list: review quizzes with new-word teach items spread
 * evenly through them, and each taught word re-quizzed `gap` items later
 * (its in-session first review, which produces the card's first FSRS rating).
 */
export function buildQueue(reviewIds: string[], newIds: string[], gap = 4): Item[] {
  const reviews: Item[] = reviewIds.map((id) => ({ wordId: id, mode: 'quiz' as const }));
  const base: Item[] = [];
  if (newIds.length === 0) {
    base.push(...reviews);
  } else {
    const interval = Math.floor(reviews.length / (newIds.length + 1));
    let r = 0;
    for (const id of newIds) {
      base.push(...reviews.slice(r, r + interval));
      r += interval;
      base.push({ wordId: id, mode: 'teach' });
    }
    base.push(...reviews.slice(r));
  }

  const out: Item[] = [];
  const scheduled: Array<{ at: number; item: Item }> = [];
  for (const item of base) {
    while (scheduled.length > 0 && scheduled[0].at <= out.length) {
      out.push(scheduled.shift()!.item);
    }
    out.push(item);
    if (item.mode === 'teach') {
      scheduled.push({ at: out.length + gap, item: { wordId: item.wordId, mode: 'quiz' } });
      scheduled.sort((a, b) => a.at - b.at);
    }
  }
  out.push(...scheduled.map((sc) => sc.item));
  return out;
}
