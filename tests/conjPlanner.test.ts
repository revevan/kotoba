import { describe, expect, it } from 'vitest';
import { State, createEmptyCard, type Card } from 'ts-fsrs';
import { CONJ_DEFAULTS, dueConjCount, planConjugation } from '../src/session/conjPlanner';
import { conjCardId } from '../src/conj/engine';
import type { CardRow } from '../src/data/db';
import type { Word } from '../src/types';
import type { VerbSubclass } from '../src/conj/engine';

const NOW = new Date('2026-07-19T12:00:00');
const DAY = 24 * 60 * 60 * 1000;

const verb = (id: string, subclass: VerbSubclass): Word => ({
  id,
  english: 'to test',
  prompt: 'to test',
  kana: 'てすとする',
  written: [id],
  romaji: 'tesuto',
  mora: [],
  moraKana: [],
  pos: 'verb',
  verbSubclass: subclass,
  tags: [],
});

const noun = (id: string): Word => ({ ...verb(id, 'ichidan'), pos: undefined, verbSubclass: undefined });

function card(state: State, scheduledDays: number, opts: { dueInDays?: number; reps?: number } = {}): Card {
  const c = createEmptyCard(new Date(+NOW - 30 * DAY));
  c.state = state;
  c.scheduled_days = scheduledDays;
  c.reps = opts.reps ?? 3;
  c.due = new Date(+NOW + (opts.dueInDays ?? -1) * DAY);
  return c;
}

const wordRow = (wordId: string, state = State.Review, days = 10): CardRow => ({
  wordId,
  deckId: 'jlpt-n5',
  card: card(state, days, { dueInDays: 5 }),
  addedAt: +NOW - 30 * DAY,
});

const conjRow = (id: string, opts: { state?: State; days?: number; dueInDays?: number; reps?: number; addedAt?: number } = {}): CardRow => ({
  wordId: id,
  deckId: 'conj',
  card: card(opts.state ?? State.Review, opts.days ?? 7, { dueInDays: opts.dueInDays ?? -1, reps: opts.reps ?? 3 }),
  addedAt: opts.addedAt ?? +NOW - 10 * DAY,
});

/** 4 mature ichidan + 4 mature godan verbs + a noun + an immature verb. */
function fixtureWords(): { words: Word[]; cards: CardRow[] } {
  const words = [
    verb('i1', 'ichidan'),
    verb('i2', 'ichidan'),
    verb('i3', 'ichidan'),
    verb('i4', 'ichidan'),
    verb('g1', 'godan-ku'),
    verb('g2', 'godan-ku'),
    verb('g3', 'godan-ku'),
    verb('g4', 'godan-mu'),
    noun('n1'),
    verb('young', 'ichidan'),
  ];
  const cards = [
    ...['i1', 'i2', 'i3', 'i4', 'g1', 'g2', 'g3', 'g4', 'n1'].map((id) => wordRow(id)),
    wordRow('young', State.Learning, 0), // not mature → never an anchor
  ];
  return { words, cards };
}

describe('planConjugation', () => {
  it('introduces stage-1 patterns for groups with enough mature verbs', () => {
    const { words, cards } = fixtureWords();
    const plan = planConjugation({ cards, words, now: NOW });
    expect(plan.newCardIds.length).toBe(CONJ_DEFAULTS.newPatternsPerDay);
    expect(plan.items.every((i) => i.introduce)).toBe(true);
    // Round-robin across stage-1 forms: two different forms, not two groups of one form.
    const forms = new Set(plan.items.map((i) => i.form));
    expect(forms.size).toBe(2);
    // Only groups with pools: ichidan (4 verbs) and godan (4 godan verbs).
    for (const item of plan.items) expect(['ichidan', 'godan', 'godan-ku']).toContain(item.group);
  });

  it('never introduces beyond the daily budget, counting cards created earlier today', () => {
    const { words, cards } = fixtureWords();
    const withToday = [...cards, conjRow(conjCardId('masu', 'ichidan'), { state: State.Learning, dueInDays: 3, addedAt: +NOW - 1000 })];
    const plan = planConjugation({ cards: withToday, words, now: NOW });
    expect(plan.newCardIds.length).toBe(CONJ_DEFAULTS.newPatternsPerDay - 1);
  });

  it('serves due pattern cards with rotating anchors, no anchor reused in-session', () => {
    const { words, cards } = fixtureWords();
    const due = [
      conjRow(conjCardId('masu', 'ichidan'), { reps: 0 }),
      conjRow(conjCardId('te', 'ichidan'), { reps: 1 }),
      conjRow(conjCardId('nai', 'ichidan'), { reps: 2 }),
    ];
    const plan = planConjugation({ cards: [...cards, ...due], words, now: NOW, cfg: { newPatternsPerDay: 0 } });
    expect(plan.items).toHaveLength(3);
    const anchors = plan.items.map((i) => i.wordId);
    expect(new Set(anchors).size).toBe(3); // all distinct
    expect(anchors).toEqual(['i1', 'i2', 'i3']); // reps-keyed rotation over deck order
  });

  it('skips due cards whose anchor pool is empty and caps the session', () => {
    const { words, cards } = fixtureWords();
    const due = [
      conjRow(conjCardId('te', 'suru')), // no mature する verb → unservable
      ...Array.from({ length: 10 }, (_, i) => conjRow(conjCardId(i % 2 ? 'te' : 'masu', i % 2 ? 'godan-ku' : 'godan'), { dueInDays: -1 - i })),
    ];
    const plan = planConjugation({ cards: [...cards, ...due], words, now: NOW, cfg: { newPatternsPerDay: 0 } });
    expect(plan.items.length).toBeLessThanOrEqual(CONJ_DEFAULTS.maxPerSession);
    expect(plan.items.every((i) => i.group !== 'suru')).toBe(true);
  });

  it('does not use immature verbs or non-verbs as anchors', () => {
    const { words, cards } = fixtureWords();
    const due = [conjRow(conjCardId('masu', 'ichidan'))];
    const plan = planConjugation({ cards: [...cards, ...due], words, now: NOW, cfg: { newPatternsPerDay: 0 } });
    for (const item of plan.items) {
      expect(item.wordId).not.toBe('young');
      expect(item.wordId).not.toBe('n1');
    }
  });

  it('keeps stage 2 locked until stage-1 cards are stable', () => {
    const { words, cards } = fixtureWords();
    // All stage-1 combos with non-empty pools exist but are NOT yet stable.
    const stage1 = ['masu', 'te', 'ta', 'nai'].flatMap((form) =>
      form === 'te' || form === 'ta'
        ? [conjRow(conjCardId(form as 'te', 'ichidan'), { days: 1, dueInDays: 3 }), conjRow(conjCardId(form as 'te', 'godan-ku'), { days: 1, dueInDays: 3 }), conjRow(conjCardId(form as 'te', 'godan-munubu'), { days: 1, dueInDays: 3 })]
        : [conjRow(conjCardId(form as 'masu', 'ichidan'), { days: 1, dueInDays: 3 }), conjRow(conjCardId(form as 'masu', 'godan'), { days: 1, dueInDays: 3 })],
    );
    const plan = planConjugation({ cards: [...cards, ...stage1], words, now: NOW });
    expect(plan.newCardIds).toEqual([]); // nothing creatable: stage 1 done-but-unstable, stage 2 locked
  });

  it('unlocks stage 2 once stage-1 cards are stable', () => {
    const { words, cards } = fixtureWords();
    const stable = { days: 10, dueInDays: 3 };
    const stage1 = [
      conjRow(conjCardId('masu', 'ichidan'), stable),
      conjRow(conjCardId('masu', 'godan'), stable),
      conjRow(conjCardId('te', 'ichidan'), stable),
      conjRow(conjCardId('te', 'godan-ku'), stable),
      conjRow(conjCardId('te', 'godan-munubu'), stable),
      conjRow(conjCardId('ta', 'ichidan'), stable),
      conjRow(conjCardId('ta', 'godan-ku'), stable),
      conjRow(conjCardId('ta', 'godan-munubu'), stable),
      conjRow(conjCardId('nai', 'ichidan'), stable),
      conjRow(conjCardId('nai', 'godan'), stable),
    ];
    const plan = planConjugation({ cards: [...cards, ...stage1], words, now: NOW });
    expect(plan.newCardIds.length).toBeGreaterThan(0);
    const stage2Forms = ['mashita', 'masen', 'nakatta', 'tai'];
    expect(plan.newCardIds.every((id) => stage2Forms.some((f) => id.startsWith(`conj:${f}:`)))).toBe(true);
  });

  it('is deterministic', () => {
    const { words, cards } = fixtureWords();
    const a = planConjugation({ cards, words, now: NOW });
    const b = planConjugation({ cards, words, now: NOW });
    expect(a).toEqual(b);
  });
});

describe('dueConjCount', () => {
  it('counts only servable due conjugation cards', () => {
    const { words, cards } = fixtureWords();
    const rows = [
      ...cards,
      conjRow(conjCardId('masu', 'ichidan')), // due, servable
      conjRow(conjCardId('te', 'suru')), // due, pool empty
      conjRow(conjCardId('te', 'ichidan'), { dueInDays: 3 }), // not due
    ];
    expect(dueConjCount(rows, words, NOW)).toBe(1);
  });
});
