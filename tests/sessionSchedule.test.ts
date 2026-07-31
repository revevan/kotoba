// End-to-end: queue builder → session machine → scheduler. Guards the bug where
// finishing a session left words already due again on the home screen, because
// FSRS's sub-day learning steps expired before the session was even over.

import { describe, expect, it } from 'vitest';
import { type Card, isDue, newCard, rateCard } from '../src/srs/scheduler';
import { type Event, type Item, initialState, reduce, type Step } from '../src/session/machine';
import { buildQueue } from '../src/session/queueBuilder';

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const DAY = 24 * 60 * MINUTES;

// A rough but honest model of session pacing, so elapsed time is realistic:
// clips (teach, prompts, reveals) run ~15s, and answering takes ~30s.
const PLAYBACK = 15 * SECONDS;
const ANSWER = 30 * SECONDS;

/** Drive a session to completion, applying rate effects to cards exactly as the
 *  controller does. `missOnce` words are answered wrong the first time they are
 *  quizzed and right after that — i.e. the re-drill is answered correctly. */
function runSession(queue: Item[], cards: Map<string, Card>, start: Date, missOnce = new Set<string>()) {
  let now = new Date(start);
  let step: Step = reduce(initialState(), { type: 'start', queue, voiceEcho: false });

  const apply = (s: Step) => {
    for (const e of s.effects) {
      if (e.type === 'learned' && !cards.has(e.wordId)) cards.set(e.wordId, newCard(now));
      if (e.type === 'rate') cards.set(e.wordId, rateCard(cards.get(e.wordId) ?? newCard(now), e.rating, now));
    }
  };
  apply(step);

  for (let guard = 0; guard < 1000 && step.state.phase !== 'done'; guard++) {
    const { phase } = step.state;
    const item = step.state.queue[step.state.idx];
    let ev: Event;
    if (phase.endsWith('-listening')) {
      now = new Date(+now + ANSWER);
      if (phase === 'self-grade-listening') {
        ev = { type: 'tap', cmd: 'missed' };
      } else if (missOnce.has(item.wordId)) {
        missOnce.delete(item.wordId); // wrong once; the re-drill goes fine
        ev = { type: 'listenResult', outcome: 'nomatch' };
      } else {
        ev = { type: 'listenResult', outcome: 'match' };
      }
    } else {
      now = new Date(+now + PLAYBACK);
      ev = { type: 'playDone' };
    }
    step = reduce(step.state, ev);
    apply(step);
  }
  expect(step.state.phase).toBe('done'); // the driver never stalls
  // The machine treats the queue immutably, so the re-drills it inserted are on
  // the final state, not the array we passed in.
  return { end: now, counts: step.state.counts, queue: step.state.queue };
}

describe('a finished session leaves nothing due', () => {
  const newIds = Array.from({ length: 10 }, (_, i) => `n${i + 1}`);

  it('10 new words + a review, all answered right → home screen is clear', () => {
    const start = new Date('2026-01-01T09:00:00Z');
    const cards = new Map<string, Card>([['r1', newCard(new Date('2025-12-30T09:00:00Z'))]]);

    const { end } = runSession(buildQueue(['r1'], newIds), cards, start);

    // The session is long enough that the old 10-minute learning step would have
    // expired mid-session — that is the whole bug.
    expect(+end - +start).toBeGreaterThan(10 * MINUTES);

    expect(cards.size).toBe(11);
    const due = [...cards.values()].filter((c) => isDue(c, end));
    expect(due).toEqual([]); // was 11 under the old sub-day steps

    // ...and still clear an hour later, on the couch.
    expect([...cards.values()].filter((c) => isDue(c, new Date(+end + 60 * MINUTES)))).toEqual([]);
  });

  it('a word missed in the session is re-drilled, and still comes back tomorrow', () => {
    const start = new Date('2026-01-01T09:00:00Z');
    const cards = new Map<string, Card>();
    const built = buildQueue([], newIds);

    const { end, queue } = runSession(built, cards, start, new Set(['n3']));

    // Missing it added one re-drill to the session...
    expect(queue).toHaveLength(built.length + 1);
    expect(queue.filter((i) => i.wordId === 'n3' && i.practice)).toHaveLength(1);

    // ...but nothing is due on the way out,
    expect([...cards.values()].filter((c) => isDue(c, end))).toEqual([]);

    // ...and the missed word is scheduled for tomorrow, not pushed out by the
    // re-drill it just answered correctly.
    const missed = cards.get('n3')!;
    expect(+new Date(missed.due) - +end).toBeGreaterThan(12 * 60 * MINUTES);
    expect(+new Date(missed.due) - +end).toBeLessThan(1.5 * DAY);

    // A word answered right is scheduled further out than the one that was missed.
    expect(+new Date(cards.get('n1')!.due)).toBeGreaterThan(+new Date(missed.due));
  });
});

describe('day-granularity dueness', () => {
  // Local-time dates on purpose: isDue rolls over at local midnight.
  it('a card scheduled for later today counts as due now', () => {
    const card = { ...newCard(), due: new Date('2026-01-02T21:14:00') };
    expect(isDue(card, new Date('2026-01-02T08:00:00'))).toBe(true); // same day, hours early
    expect(isDue(card, new Date('2026-01-01T23:59:00'))).toBe(false); // yesterday: not yet
    expect(isDue(card, new Date('2026-01-03T00:01:00'))).toBe(true); // overdue stays due
  });

  it("yesterday evening's miss shows up the next morning", () => {
    const at = new Date('2026-01-01T21:14:00');
    let card = newCard(at);
    card = rateCard(card, 'again', at); // due ~9:14pm tomorrow, exact-time
    expect(isDue(card, new Date('2026-01-02T07:30:00'))).toBe(true); // was false before the fix
    expect(isDue(card, at)).toBe(false); // but not due tonight, right after the miss
  });
});
