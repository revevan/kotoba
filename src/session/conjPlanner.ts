// Plans the conjugation slice of a session: which pattern cards are due, which
// new patterns to introduce, and which concrete verb anchors each prompt.
//
// Grounding (see docs + the conjugation feature plan):
// - The FSRS unit is the *pattern* (form × group), not verb × form — patterns
//   generalize; verb-by-verb cards would explode and over-schedule.
// - Anchors are verbs the learner already knows well (mature word cards),
//   frequent-first (deck order is the frequency proxy), rotated per review so
//   the pattern is practiced across verbs, never memorized on one.
// - Forms unlock in stages, prior stage stable first — spacing, not cramming.
//
// Pure: no IO, fully unit-testable. The controller feeds it card rows + words
// and materializes the result.

import { State } from 'ts-fsrs';
import type { CardRow } from '../data/db';
import { isDue } from '../srs/scheduler';
import type { Word } from '../types';
import {
  FORM_STAGES,
  conjCardId,
  groupsForForm,
  isConjCardId,
  parseConjCardId,
  patternGroup,
  type ConjForm,
  type PatternGroup,
} from '../conj/engine';

export interface ConjPlannerCfg {
  /** Cap on conjugation items woven into one session. */
  maxPerSession: number;
  /** New pattern cards introduced per calendar day. */
  newPatternsPerDay: number;
  /** A verb anchors prompts once its own card is this mature (Review state). */
  minWordIntervalDays: number;
  /** A pattern card counts as stable (for stage unlocking) at this interval. */
  stableIntervalDays: number;
}

export const CONJ_DEFAULTS: ConjPlannerCfg = {
  maxPerSession: 6,
  newPatternsPerDay: 2,
  minWordIntervalDays: 3,
  stableIntervalDays: 5,
};

/** Single-verb patterns (する/来る) can't wait for a 3-verb pool. */
const minPoolFor = (group: PatternGroup): number => (group === 'suru' || group === 'kuru' ? 1 : 3);

export interface ConjPlanItem {
  cardId: string;
  form: ConjForm;
  group: PatternGroup;
  /** Anchor verb for this prompt. */
  wordId: string;
  /** First-ever practice of this pattern → lead with the rule clip. */
  introduce?: boolean;
}

export interface ConjPlan {
  /** Prompts for this session, due patterns first, then new introductions. */
  items: ConjPlanItem[];
  /** Pattern cards to create (subset of items with introduce set). */
  newCardIds: string[];
}

/** Anchor pools: eligible mature verbs per pattern group, in deck order. */
function anchorPools(cards: CardRow[], words: Word[], cfg: ConjPlannerCfg): Map<PatternGroup, Word[]> {
  const cardByWord = new Map(cards.map((c) => [c.wordId, c.card]));
  const pools = new Map<PatternGroup, Word[]>();
  const seen = new Set<string>();
  for (const w of words) {
    if (w.pos !== 'verb' || !w.verbSubclass || seen.has(w.id)) continue;
    seen.add(w.id);
    const card = cardByWord.get(w.id);
    if (!card || card.state !== State.Review || (card.scheduled_days ?? 0) < cfg.minWordIntervalDays) continue;
    // A verb joins every group its subclass maps to across forms (godan verbs
    // are in both their contraction group and the collapsed 'godan' group).
    const groups = new Set<PatternGroup>([patternGroup('te', w.verbSubclass), patternGroup('masu', w.verbSubclass)]);
    for (const g of groups) {
      if (!pools.has(g)) pools.set(g, []);
      pools.get(g)!.push(w);
    }
  }
  return pools;
}

const startOfDay = (now: Date): number => {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/**
 * Highest stage index whose combos are fully rolled out: every (form × group)
 * of the stage either has a *stable* card or is blocked by an empty anchor
 * pool. Stage 0 is always unlocked; stage N+1 unlocks when stage N is done.
 */
function unlockedStages(conjCards: Map<string, CardRow>, pools: Map<PatternGroup, Word[]>, cfg: ConjPlannerCfg): number {
  let unlocked = 0;
  for (let s = 0; s < FORM_STAGES.length - 1; s++) {
    let complete = true;
    for (const form of FORM_STAGES[s]) {
      for (const group of groupsForForm(form)) {
        const pool = pools.get(group) ?? [];
        if (pool.length < minPoolFor(group)) continue; // pool-blocked combos don't hold the stage back
        const row = conjCards.get(conjCardId(form, group));
        if (!row || row.card.state !== State.Review || (row.card.scheduled_days ?? 0) < cfg.stableIntervalDays) {
          complete = false;
          break;
        }
      }
      if (!complete) break;
    }
    if (!complete) break;
    unlocked = s + 1;
  }
  return unlocked;
}

/** Group introduction order: simplest pattern first. */
const GROUP_ORDER: PatternGroup[] = ['ichidan', 'godan', 'godan-utsuru', 'godan-munubu', 'godan-ku', 'godan-gu', 'godan-su', 'suru', 'kuru'];

/** New (form × group) combos to introduce, round-robin across the stage's
 *  forms so early days mix forms instead of exhausting one form first
 *  (interleaving beats blocking across sessions). */
function creatableCombos(stage: number, conjCards: Map<string, CardRow>, pools: Map<PatternGroup, Word[]>): Array<{ form: ConjForm; group: PatternGroup }> {
  const out: Array<{ form: ConjForm; group: PatternGroup }> = [];
  for (let s = 0; s <= stage && s < FORM_STAGES.length; s++) {
    const forms = FORM_STAGES[s];
    const groupsByForm = forms.map((form) => groupsForForm(form).slice().sort((a, b) => GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b)));
    const maxLen = Math.max(...groupsByForm.map((g) => g.length));
    for (let i = 0; i < maxLen; i++) {
      for (let f = 0; f < forms.length; f++) {
        const group = groupsByForm[f][i];
        if (!group) continue;
        if (conjCards.has(conjCardId(forms[f], group))) continue;
        if ((pools.get(group) ?? []).length < minPoolFor(group)) continue;
        out.push({ form: forms[f], group });
      }
    }
  }
  return out;
}

export function planConjugation(opts: { cards: CardRow[]; words: Word[]; now?: Date; cfg?: Partial<ConjPlannerCfg> }): ConjPlan {
  const cfg: ConjPlannerCfg = { ...CONJ_DEFAULTS, ...opts.cfg };
  const now = opts.now ?? new Date();
  const pools = anchorPools(opts.cards, opts.words, cfg);
  const conjCards = new Map(opts.cards.filter((c) => isConjCardId(c.wordId)).map((c) => [c.wordId, c]));

  const usedAnchors = new Set<string>();
  const pickAnchor = (group: PatternGroup, rotation: number): Word | null => {
    const pool = pools.get(group) ?? [];
    if (pool.length === 0) return null;
    for (let i = 0; i < pool.length; i++) {
      const w = pool[(((rotation + i) % pool.length) + pool.length) % pool.length];
      if (!usedAnchors.has(w.id)) {
        usedAnchors.add(w.id);
        return w;
      }
    }
    return null; // every pool verb already anchors another item this session
  };

  const items: ConjPlanItem[] = [];

  // 1. Due pattern reviews, oldest due first.
  const due = [...conjCards.values()]
    .filter((c) => isDue(c.card, now))
    .sort((a, b) => new Date(a.card.due).getTime() - new Date(b.card.due).getTime());
  for (const row of due) {
    if (items.length >= cfg.maxPerSession) break;
    const parsed = parseConjCardId(row.wordId);
    if (!parsed) continue;
    const anchor = pickAnchor(parsed.group, row.card.reps);
    if (!anchor) continue; // pool empty right now — the card just stays due
    items.push({ cardId: row.wordId, form: parsed.form, group: parsed.group, wordId: anchor.id });
  }

  // 2. New pattern introductions, capped per day and by session room.
  const introducedToday = [...conjCards.values()].filter((c) => c.addedAt >= startOfDay(now)).length;
  let budget = Math.min(Math.max(0, cfg.newPatternsPerDay - introducedToday), Math.max(0, cfg.maxPerSession - items.length));
  const newCardIds: string[] = [];
  if (budget > 0) {
    const stage = unlockedStages(conjCards, pools, cfg);
    for (const combo of creatableCombos(stage, conjCards, pools)) {
      if (budget <= 0) break;
      const anchor = pickAnchor(combo.group, 0);
      if (!anchor) continue;
      const cardId = conjCardId(combo.form, combo.group);
      items.push({ cardId, form: combo.form, group: combo.group, wordId: anchor.id, introduce: true });
      newCardIds.push(cardId);
      budget--;
    }
  }

  return { items, newCardIds };
}

/** Due conjugation reviews that could actually be served (non-empty pool) —
 *  for the home-screen due count. */
export function dueConjCount(cards: CardRow[], words: Word[], now: Date = new Date(), cfg?: Partial<ConjPlannerCfg>): number {
  const full: ConjPlannerCfg = { ...CONJ_DEFAULTS, ...cfg };
  const pools = anchorPools(cards, words, full);
  return cards.filter((c) => {
    if (!isConjCardId(c.wordId) || !isDue(c.card, now)) return false;
    const parsed = parseConjCardId(c.wordId);
    return !!parsed && (pools.get(parsed.group) ?? []).length > 0;
  }).length;
}
