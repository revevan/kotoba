import type { Item, Mode } from './machine';

/** Role of a slot, so the decorator can pick mode/sentence with full context. */
export type ItemRole = 'review' | 'teach' | 'requiz';

export interface ItemMeta {
  /** Overrides the default mode for the slot (e.g. a review → 'cloze'). */
  mode?: Mode;
  /** Example sentence chosen for this slot (rung-1 tail, or the cloze source). */
  sentenceId?: string;
}

/** Card-aware hook: choose exercise type + rotating sentence for each slot. */
export type Decorate = (wordId: string, role: ItemRole) => ItemMeta;

/**
 * Build the session item list: review quizzes with new-word teach items spread
 * evenly through them, and each taught word re-quizzed `gap` items later
 * (its in-session first review, which produces the card's first FSRS rating).
 *
 * `decorate` (optional) upgrades each slot — a mature review becomes a cloze, a
 * teach/quiz gets a rotating example sentence — while the interleave is unchanged.
 */
export function buildQueue(reviewIds: string[], newIds: string[], gap = 4, decorate?: Decorate): Item[] {
  const make = (wordId: string, role: ItemRole, defaultMode: Mode): Item => {
    const meta = decorate?.(wordId, role) ?? {};
    const item: Item = { wordId, mode: meta.mode ?? defaultMode };
    if (meta.sentenceId) item.sentenceId = meta.sentenceId;
    return item;
  };

  const reviews: Item[] = reviewIds.map((id) => make(id, 'review', 'quiz'));
  const base: Item[] = [];
  if (newIds.length === 0) {
    base.push(...reviews);
  } else {
    const interval = Math.floor(reviews.length / (newIds.length + 1));
    let r = 0;
    for (const id of newIds) {
      base.push(...reviews.slice(r, r + interval));
      r += interval;
      base.push(make(id, 'teach', 'teach'));
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
      scheduled.push({ at: out.length + gap, item: make(item.wordId, 'requiz', 'quiz') });
      scheduled.sort((a, b) => a.at - b.at);
    }
  }
  out.push(...scheduled.map((sc) => sc.item));
  return out;
}

/**
 * Splice extras (conjugation prompts) evenly through an existing queue, never
 * before the first item. Even spread = interleaving: a conjugation item lands
 * between vocab reviews, and consecutive extras never cluster at the end.
 */
export function interleaveItems(queue: Item[], extras: Item[]): Item[] {
  if (extras.length === 0) return queue;
  if (queue.length === 0) return [...extras];
  const out = [...queue];
  // Insert back-to-front so earlier indices stay valid.
  for (let i = extras.length - 1; i >= 0; i--) {
    const at = Math.ceil(((i + 1) * queue.length) / (extras.length + 1));
    out.splice(at, 0, extras[i]);
  }
  return out;
}
