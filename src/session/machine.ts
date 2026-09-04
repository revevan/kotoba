// Pure session state machine: (state, event) → (state, effects). No browser
// APIs in here — the runner executes effects and feeds results back as events,
// which keeps the whole teach/quiz/self-grade flow unit-testable.

import type { ConjForm, PatternGroup } from '../conj/engine';

export type Mode = 'teach' | 'quiz' | 'cloze' | 'shadow' | 'build' | 'conjugate';

/** Conjugation payload: the pattern card being reviewed and the target form.
 *  `wordId` on the item is the anchor verb sampled for this prompt. */
export interface ItemConj {
  /** Pattern card id (conj:{form}:{group}) — the FSRS unit that gets rated. */
  cardId: string;
  form: ConjForm;
  group: PatternGroup;
  /** First-ever practice of this pattern → the prompt leads with the rule. */
  introduce?: boolean;
}

export interface Item {
  wordId: string;
  mode: Mode;
  /** Example sentence chosen for this item (rung-1 tail, or the cloze source). */
  sentenceId?: string;
  /** Present iff mode === 'conjugate'. */
  conj?: ItemConj;
  /** A re-drill of a word missed earlier this session: retrieval practice only,
   *  never rated — the miss already scheduled the card. See `redrill`. */
  practice?: true;
}

export type PlayKind =
  | 'intro'
  | 'teach'
  | 'teach2'
  | 'quiz-prompt'
  | 'cloze-prompt'
  | 'shadow-prompt'
  | 'build-prompt'
  | 'conj-prompt'
  | 'correct'
  | 'reveal'
  | 'cloze-reveal'
  | 'shadow-reveal'
  | 'build-reveal'
  | 'conj-reveal'
  | 'self-grade-reprompt'
  | 'paused'
  | 'resuming'
  | 'done';

export type ListenKind = 'teach-echo' | 'quiz-answer' | 'cloze-answer' | 'shadow-answer' | 'build-answer' | 'conj-answer' | 'self-grade' | 'resume';

export type RateMode = 'auto' | 'self' | 'skip' | 'timeout';

export type Effect =
  | { type: 'play'; kind: PlayKind; wordId?: string; sentenceId?: string }
  | { type: 'listen'; kind: ListenKind; wordId?: string; sentenceId?: string }
  // Connection lost mid-prompt: wait `ms` then retry the same prompt (holdDone).
  // `cue` = first hold of this outage → the runner plays the connection-lost cue.
  | { type: 'hold'; ms: number; cue: boolean }
  | { type: 'rate'; wordId: string; rating: 'good' | 'again'; mode: RateMode; recognized?: string }
  // A new word's teach step finished → it counts as studied and enters the schedule.
  | { type: 'learned'; wordId: string }
  | { type: 'ended' };

export type ListenOutcome =
  | 'match'      // quiz answer matched / teach echo matched
  | 'nomatch'    // speech recognized but not the expected word/command
  | 'speech'     // teach echo: heard something (lenient pass)
  | 'dontknow'   // user said わからない
  | 'gotit'
  | 'missed'
  | 'timeout'
  | 'error'
  | 'denied'
  | 'unavailable'
  | 'cmd-repeat'
  | 'cmd-skip'
  | 'cmd-pause'
  | 'cmd-resume';

export type Phase =
  | 'idle'
  | 'intro'
  | 'teach-playing'
  | 'teach-listening'
  | 'teach2-playing'
  | 'teach2-listening'
  | 'quiz-playing'
  | 'quiz-listening'
  | 'cloze-playing'
  | 'cloze-listening'
  | 'shadow-playing'
  | 'shadow-listening'
  | 'build-playing'
  | 'build-listening'
  | 'conj-playing'
  | 'conj-listening'
  | 'correct-playing'
  | 'reveal-playing'
  | 'self-grade-listening'
  | 'self-grade-reprompt-playing'
  | 'pause-playing'
  | 'paused'
  | 'resume-playing'
  | 'done';

export interface Counts {
  taught: number;
  correct: number;
  missed: number;
}

export interface MachineState {
  phase: Phase;
  queue: Item[];
  idx: number;
  /** Retries within the current listening state. */
  retries: number;
  /** Consecutive speech-recognition errors; 3 → degraded. */
  srFailures: number;
  /** Degraded = no speech recognition; self-grade via taps/timeout only. */
  degraded: boolean;
  /** Whether teach mode listens for the user's echo. */
  voiceEcho: boolean;
  counts: Counts;
  lastRecognized: string | null;
  /** The current reveal was reached via an SR/mic failure, not a judged miss —
   *  the UI and audio must not claim "not quite" (nothing was graded). */
  srErrorReveal: boolean;
  /** Connection lost while a prompt was loading: 'holding' = waiting to retry
   *  (no listen runs), 'retrying' = the replay is in flight. Cleared the moment
   *  anything plays, or on the next item. */
  offline: false | 'holding' | 'retrying';
}

export type TapCommand = 'repeat' | 'skip' | 'pause' | 'resume' | 'gotit' | 'missed';

export type Event =
  | { type: 'start'; queue: Item[]; voiceEcho: boolean; degraded?: boolean }
  | { type: 'playDone' }
  // The sequence hit a network failure (player 'silent'): nothing reliable was heard.
  | { type: 'playSilent' }
  | { type: 'holdDone' }
  | { type: 'listenResult'; outcome: ListenOutcome; recognized?: string }
  | { type: 'tap'; cmd: TapCommand };

export interface Step {
  state: MachineState;
  effects: Effect[];
}

const SR_FAILURE_LIMIT = 3;

/** How long a held prompt waits before replaying (the runner retries sooner on
 *  the browser's `online` event or a Repeat tap). */
export const HOLD_RETRY_MS = 10_000;

/** Phases whose play is a prompt the user must hear before anything else can
 *  happen. A silent one holds; every other silent play just moves on. */
const PROMPT_PHASES = new Set<Phase>([
  'intro',
  'teach-playing',
  'teach2-playing',
  'quiz-playing',
  'cloze-playing',
  'shadow-playing',
  'build-playing',
  'conj-playing',
  'resume-playing',
]);

/** Outcomes that represent a spoken answer worth echoing on screen. */
const WORD_ATTEMPT_OUTCOMES = new Set<ListenOutcome>(['match', 'nomatch', 'dontknow', 'speech']);

export function initialState(): MachineState {
  return {
    phase: 'idle',
    queue: [],
    idx: 0,
    retries: 0,
    srFailures: 0,
    degraded: false,
    voiceEcho: true,
    counts: { taught: 0, correct: 0, missed: 0 },
    lastRecognized: null,
    srErrorReveal: false,
    offline: false,
  };
}

export function currentItem(s: MachineState): Item | undefined {
  return s.queue[s.idx];
}

const step = (state: MachineState, ...effects: Effect[]): Step => ({ state, effects });

function enterItem(s: MachineState): Step {
  // New item → clear the recognized-text echo so it never sticks to the next word.
  s = { ...s, lastRecognized: null, srErrorReveal: false, offline: false };
  const item = currentItem(s);
  if (!item) {
    return step({ ...s, phase: 'done' }, { type: 'play', kind: 'done' });
  }
  if (item.mode === 'teach') {
    return step({ ...s, phase: 'teach-playing', retries: 0 }, { type: 'play', kind: 'teach', wordId: item.wordId, sentenceId: item.sentenceId });
  }
  if (item.mode === 'cloze') {
    return step({ ...s, phase: 'cloze-playing', retries: 0 }, { type: 'play', kind: 'cloze-prompt', wordId: item.wordId, sentenceId: item.sentenceId });
  }
  if (item.mode === 'shadow') {
    return step({ ...s, phase: 'shadow-playing', retries: 0 }, { type: 'play', kind: 'shadow-prompt', wordId: item.wordId, sentenceId: item.sentenceId });
  }
  if (item.mode === 'build') {
    return step({ ...s, phase: 'build-playing', retries: 0 }, { type: 'play', kind: 'build-prompt', wordId: item.wordId, sentenceId: item.sentenceId });
  }
  if (item.mode === 'conjugate') {
    return step({ ...s, phase: 'conj-playing', retries: 0 }, { type: 'play', kind: 'conj-prompt', wordId: item.wordId });
  }
  return step({ ...s, phase: 'quiz-playing', retries: 0 }, { type: 'play', kind: 'quiz-prompt', wordId: item.wordId });
}

function advance(s: MachineState): Step {
  return enterItem({ ...s, idx: s.idx + 1 });
}

/** Teach part 2: alternate readings + the word in a sentence, then a second
 *  prompted production. Splitting the teach around the first echo trades
 *  passive listening for speaking (retrieval/production research). */
function toTeach2(s: MachineState): Step {
  const item = currentItem(s)!;
  return step({ ...s, phase: 'teach2-playing', retries: 0 }, { type: 'play', kind: 'teach2', wordId: item.wordId, sentenceId: item.sentenceId });
}

function finishTeach(s: MachineState): Step {
  const item = currentItem(s)!;
  const next = advance({ ...s, counts: { ...s.counts, taught: s.counts.taught + 1 } });
  // Persist the word as studied now that the teach actually played; a word the
  // user never reached stays "new" and won't pollute the review queue.
  return { state: next.state, effects: [{ type: 'learned', wordId: item.wordId }, ...next.effects] };
}

/** True skip of a teach: the word stays "new" — no card, no taught count — so it
 *  gets taught properly another day. Its in-session re-quiz (baked into the queue
 *  a few slots ahead by the queue builder) is dropped too; a skipped word is the
 *  only way the same wordId appears again later in the queue. */
function skipTeach(s: MachineState): Step {
  const item = currentItem(s)!;
  const queue = s.queue.filter((it, i) => i <= s.idx || it.wordId !== item.wordId);
  return advance({ ...s, queue });
}

function pause(s: MachineState): Step {
  return step({ ...s, phase: 'pause-playing' }, { type: 'play', kind: 'paused' });
}

function resume(s: MachineState): Step {
  return step({ ...s, phase: 'resume-playing' }, { type: 'play', kind: 'resuming' });
}

/** A prompt could not be heard: park the session (mic stays closed) and retry
 *  later. The cue plays only on the first hold of an outage — retries and
 *  Repeat taps are silent, so flapping signal doesn't nag. */
function hold(s: MachineState): Step {
  return step({ ...s, offline: 'holding' }, { type: 'hold', ms: HOLD_RETRY_MS, cue: s.offline === false });
}

/** Re-emit the play the current phase entered with. Stays `offline` ('retrying')
 *  so a second silent attempt is recognised as the same outage (no second cue);
 *  the first playDone clears it. */
function replayCurrent(s: MachineState): Step {
  const base: MachineState = { ...s, offline: false };
  let next: Step;
  switch (s.phase) {
    case 'intro':
      next = step(base, { type: 'play', kind: 'intro' });
      break;
    case 'teach2-playing':
      next = toTeach2(base);
      break;
    case 'resume-playing':
      next = resume(base);
      break;
    default:
      next = enterItem(base);
  }
  return { state: { ...next.state, offline: 'retrying' }, effects: next.effects };
}

function bumpSrFailure(s: MachineState): MachineState {
  const srFailures = s.srFailures + 1;
  return { ...s, srFailures, degraded: s.degraded || srFailures >= SR_FAILURE_LIMIT };
}

function degrade(s: MachineState): MachineState {
  return { ...s, degraded: true };
}

/** Quiz/cloze answer didn't pass → reveal the answer, then self-grade. A cloze
 *  reveal plays the full natural sentence; a plain quiz just names the word.
 *  `srError` marks a reveal caused by an SR/mic failure — same flow, but the
 *  UI/audio swap "not quite" for a connection-trouble framing. */
function toReveal(s: MachineState, srError = false): Step {
  const item = currentItem(s)!;
  const kind =
    item.mode === 'cloze' ? 'cloze-reveal'
    : item.mode === 'shadow' ? 'shadow-reveal'
    : item.mode === 'build' ? 'build-reveal'
    : item.mode === 'conjugate' ? 'conj-reveal'
    : 'reveal';
  return step({ ...s, phase: 'reveal-playing', retries: 0, srErrorReveal: srError }, { type: 'play', kind, wordId: item.wordId, sentenceId: item.sentenceId });
}

/** Items between a miss and its re-drill — same spacing as the teach re-quiz. */
const REDRILL_GAP = 4;

/** A missed word comes back later in the same session for one more attempt.
 *  This is the short-term reinforcement the old 10-minute FSRS learning step was
 *  supposed to give but couldn't: the queue is fixed once the session starts, so
 *  a sub-day step re-drilled nothing and only made the word due again mid-session.
 *
 *  One re-drill per word per session — a re-drill that's missed again is not
 *  requeued (that's the `practice` guard, and it's what stops an endless loop on
 *  a word the user simply doesn't know yet); it just waits for tomorrow. */
function redrill(s: MachineState, item: Item): Item[] {
  if (item.practice) return s.queue;
  const queue = [...s.queue];
  // A missed conjugation re-drills the same pattern (same form + anchor), not a
  // plain recall of the anchor verb — the pattern is what was missed.
  const again: Item =
    item.mode === 'conjugate' && item.conj
      ? { wordId: item.wordId, mode: 'conjugate', conj: item.conj, practice: true }
      : { wordId: item.wordId, mode: 'quiz', practice: true };
  queue.splice(Math.min(s.idx + 1 + REDRILL_GAP, queue.length), 0, again);
  return queue;
}

/** The rate effect for an item — unless it's a re-drill, which never rates. The
 *  miss that queued it already set the card's interval (1 day); rating it again
 *  here would let a correct repeat wipe out the lapse and reschedule the word
 *  days out, which is exactly the "I missed it but it never came back" hole. */
const rated = (item: Item, effect: Effect): Effect[] => (item.practice ? [] : [effect]);

/** What a rating lands on: the pattern card for a conjugation, else the word. */
const rateTarget = (item: Item): string => item.conj?.cardId ?? item.wordId;

function gradeSelf(s: MachineState, rating: 'good' | 'again', mode: RateMode): Step {
  const item = currentItem(s)!;
  const counts =
    rating === 'good'
      ? { ...s.counts, correct: s.counts.correct + 1 }
      : { ...s.counts, missed: s.counts.missed + 1 };
  const queue = rating === 'again' ? redrill(s, item) : s.queue;
  const next = advance({ ...s, counts, queue });
  return { state: next.state, effects: [...rated(item, { type: 'rate', wordId: rateTarget(item), rating, mode }), ...next.effects] };
}

export function reduce(s: MachineState, ev: Event): Step {
  if (ev.type === 'start') {
    const fresh: MachineState = {
      ...initialState(),
      queue: ev.queue,
      voiceEcho: ev.voiceEcho,
      degraded: ev.degraded ?? false,
      phase: 'intro',
    };
    return step(fresh, { type: 'play', kind: 'intro' });
  }

  // Only echo what was heard for an actual word attempt — not "got it"/"missed
  // it" self-grade commands, which otherwise stuck under the next word.
  if (ev.type === 'listenResult' && ev.recognized && WORD_ATTEMPT_OUTCOMES.has(ev.outcome)) {
    s = { ...s, lastRecognized: ev.recognized };
  }

  // Connection loss. Something played ⇒ the outage is over. A silent PROMPT
  // holds (never opens the mic on a question nobody heard); a silent REVEAL
  // advances unrated (the answer was never heard, so silence afterwards is not
  // a miss — the card stays due); any other silent play is just a skipped
  // phrase and behaves like playDone.
  if (ev.type === 'playDone' && s.offline) s = { ...s, offline: false };
  if (ev.type === 'playSilent') {
    if (PROMPT_PHASES.has(s.phase)) return hold(s);
    if (s.phase === 'reveal-playing') return advance({ ...s, offline: false });
    s = { ...s, offline: false };
    ev = { type: 'playDone' };
  }
  if (ev.type === 'holdDone') {
    return s.offline === 'holding' && PROMPT_PHASES.has(s.phase) ? replayCurrent(s) : step(s);
  }

  // Taps behave like the equivalent voice command in the current phase.
  const outcome: ListenOutcome | null =
    ev.type === 'tap'
      ? ev.cmd === 'gotit' || ev.cmd === 'missed'
        ? ev.cmd
        : (`cmd-${ev.cmd}` as ListenOutcome)
      : ev.type === 'listenResult'
        ? ev.outcome
        : null;

  // Global commands available in every active phase.
  if (outcome === 'cmd-pause' && s.phase !== 'idle' && s.phase !== 'done' && s.phase !== 'paused' && s.phase !== 'pause-playing') {
    return pause(s);
  }
  if (outcome === 'cmd-resume' && (s.phase === 'paused' || s.phase === 'pause-playing')) {
    return resume(s);
  }
  // While holding: Repeat retries now; Skip moves on UNRATED (the question was
  // never heard, so the usual skip = "again" would be a rating from thin air).
  if (s.offline && PROMPT_PHASES.has(s.phase)) {
    if (outcome === 'cmd-repeat') return replayCurrent(s);
    if (outcome === 'cmd-skip' && s.phase !== 'intro' && s.phase !== 'resume-playing') {
      return s.phase === 'teach-playing' || s.phase === 'teach2-playing' ? skipTeach(s) : advance(s);
    }
  }

  switch (s.phase) {
    case 'intro':
      if (ev.type === 'playDone') return enterItem(s);
      break;

    case 'teach-playing':
      if (ev.type === 'playDone') {
        if (s.degraded || !s.voiceEcho) return toTeach2(s);
        return step({ ...s, phase: 'teach-listening', retries: 0 }, { type: 'listen', kind: 'teach-echo', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      break;

    case 'teach-listening': {
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      if (outcome === 'denied' || outcome === 'unavailable') return toTeach2(degrade(s));
      if (outcome === 'error') return toTeach2(bumpSrFailure(s));
      if (outcome) {
        // Lenient: any echo (or silence) moves on.
        return toTeach2({ ...s, srFailures: 0 });
      }
      break;
    }

    case 'teach2-playing':
      if (ev.type === 'playDone') {
        if (s.degraded || !s.voiceEcho) return finishTeach(s);
        return step({ ...s, phase: 'teach2-listening', retries: 0 }, { type: 'listen', kind: 'teach-echo', wordId: currentItem(s)!.wordId });
      }
      // Repeat replays just this half — the intro was already echoed.
      if (outcome === 'cmd-repeat') return toTeach2(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      break;

    case 'teach2-listening': {
      if (outcome === 'cmd-repeat') return toTeach2(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      if (outcome === 'denied' || outcome === 'unavailable') return finishTeach(degrade(s));
      if (outcome === 'error') return finishTeach(bumpSrFailure(s));
      if (outcome) {
        return finishTeach({ ...s, srFailures: 0 });
      }
      break;
    }

    case 'quiz-playing':
      if (ev.type === 'playDone') {
        // Degraded: no listen ever ran, so the reveal must not claim "not
        // quite" — nothing was graded (srError framing covers this).
        if (s.degraded) return toReveal(s, true);
        return step({ ...s, phase: 'quiz-listening', retries: 0 }, { type: 'listen', kind: 'quiz-answer', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      break;

    case 'cloze-playing':
    case 'shadow-playing':
    case 'build-playing':
    case 'conj-playing': {
      if (ev.type === 'playDone') {
        if (s.degraded) return toReveal(s, true);
        const item = currentItem(s)!;
        const kind: ListenKind =
          s.phase === 'cloze-playing' ? 'cloze-answer' : s.phase === 'shadow-playing' ? 'shadow-answer' : s.phase === 'build-playing' ? 'build-answer' : 'conj-answer';
        const next: Phase =
          s.phase === 'cloze-playing' ? 'cloze-listening' : s.phase === 'shadow-playing' ? 'shadow-listening' : s.phase === 'build-playing' ? 'build-listening' : 'conj-listening';
        return step({ ...s, phase: next, retries: 0 }, { type: 'listen', kind, wordId: item.wordId, sentenceId: item.sentenceId });
      }
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      break;
    }

    // Cloze/shadow/build answers grade like a quiz answer — the runner did the
    // mode-specific matching (single word, sentence coverage, LLM verdict) and
    // reports match/nomatch; only the reveal differs, derived from item.mode.
    case 'quiz-listening':
    case 'cloze-listening':
    case 'shadow-listening':
    case 'build-listening':
    case 'conj-listening': {
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'match') {
        // The 'good' rating is deferred until the correct clip ends (see
        // correct-playing): the pass screen is also the "no, I actually missed
        // it" window, and demoting must not first record a pass.
        const item = currentItem(s)!;
        const next: MachineState = {
          ...s,
          phase: 'correct-playing',
          srFailures: 0,
          counts: { ...s.counts, correct: s.counts.correct + 1 },
        };
        return step(next, { type: 'play', kind: 'correct', wordId: item.wordId, sentenceId: item.sentenceId });
      }
      if (outcome === 'nomatch' || outcome === 'dontknow' || outcome === 'timeout' || outcome === 'speech') {
        return toReveal({ ...s, srFailures: 0 });
      }
      if (outcome === 'error') return toReveal(bumpSrFailure(s), true);
      if (outcome === 'denied' || outcome === 'unavailable') return toReveal(degrade(s), true);
      break;
    }

    case 'correct-playing': {
      // The recognizer is lenient by design, so a "pass" can be wrong. While
      // the correct clip plays, "missed it" demotes the pass: the item is rated
      // 'again' instead of 'good' and comes back for an in-session re-drill,
      // exactly as if the recognizer had said nomatch.
      const item = currentItem(s)!;
      const good: Effect = { type: 'rate', wordId: rateTarget(item), rating: 'good', mode: 'auto', recognized: s.lastRecognized ?? undefined };
      if (ev.type === 'playDone' || outcome === 'cmd-skip') {
        const next = advance(s);
        return { state: next.state, effects: [...rated(item, good), ...next.effects] };
      }
      if (outcome === 'cmd-repeat') {
        return step(s, { type: 'play', kind: 'correct', wordId: item.wordId, sentenceId: item.sentenceId });
      }
      if (outcome === 'missed') {
        const counts = { ...s.counts, correct: s.counts.correct - 1, missed: s.counts.missed + 1 };
        const next = advance({ ...s, counts, queue: redrill(s, item) });
        return {
          state: next.state,
          effects: [...rated(item, { type: 'rate', wordId: rateTarget(item), rating: 'again', mode: 'self', recognized: s.lastRecognized ?? undefined }), ...next.effects],
        };
      }
      break;
    }

    case 'reveal-playing':
      if (ev.type === 'playDone') {
        return step({ ...s, phase: 'self-grade-listening', retries: 0 }, { type: 'listen', kind: 'self-grade', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return toReveal(s, s.srErrorReveal);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      break;

    case 'self-grade-listening': {
      // A revealed answer is a miss by default; "got it" is the override for a
      // correct answer the recognizer didn't catch. Silence leaves it missed
      // and moves on immediately — no waiting in limbo. But an *unrecognized
      // utterance* is usually a garbled "got it" (they said something), so that
      // gets one re-prompt before the miss is finalized.
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      if (outcome === 'cmd-repeat') return toReveal(s, s.srErrorReveal);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'nomatch' && s.retries === 0) {
        return step({ ...s, phase: 'self-grade-reprompt-playing', retries: 1 }, { type: 'play', kind: 'self-grade-reprompt', wordId: currentItem(s)!.wordId });
      }
      // An SR/mic failure is NOT a user signal: rating here graded cards Again
      // on network outages and poisoned FSRS. Advance unrated — no rate, no
      // re-drill, no miss count — the card's schedule is untouched, so it stays
      // due and simply returns next session.
      if (outcome === 'denied' || outcome === 'unavailable') return advance(degrade(s));
      if (outcome === 'error') return advance(bumpSrFailure(s));
      // Degraded mode is tap-only, and a driver whose recognizer just died
      // can't tap at all — an expired window means "no tap", not "I missed
      // it". Advance unrated; only explicit taps grade while degraded. In a
      // voiced session, silence after the reveal stays the deliberate default
      // miss (the user heard the answer and claimed nothing).
      if (outcome === 'timeout' && s.degraded) return advance(s);
      if (outcome) return gradeSelf(s, 'again', 'timeout');
      break;
    }

    case 'self-grade-reprompt-playing':
      // Keeps retries=1, so a second unrecognized utterance falls through to
      // the miss in self-grade-listening.
      if (ev.type === 'playDone') {
        return step({ ...s, phase: 'self-grade-listening' }, { type: 'listen', kind: 'self-grade', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      break;

    case 'pause-playing':
      // Land in paused with no listen — the mic is released while paused, so
      // resume is by tapping Resume (handled by the global cmd-resume above).
      if (ev.type === 'playDone') return step({ ...s, phase: 'paused' });
      break;

    case 'paused':
      break;

    case 'resume-playing':
      if (ev.type === 'playDone') return enterItem(s);
      break;

    case 'done':
      if (ev.type === 'playDone') return step(s, { type: 'ended' });
      break;

    case 'idle':
      break;
  }

  return step(s);
}
