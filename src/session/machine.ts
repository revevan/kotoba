// Pure session state machine: (state, event) → (state, effects). No browser
// APIs in here — the runner executes effects and feeds results back as events,
// which keeps the whole teach/quiz/self-grade flow unit-testable.

export type Mode = 'teach' | 'quiz' | 'cloze' | 'shadow' | 'build';

export interface Item {
  wordId: string;
  mode: Mode;
  /** Example sentence chosen for this item (rung-1 tail, or the cloze source). */
  sentenceId?: string;
}

export type PlayKind =
  | 'intro'
  | 'teach'
  | 'quiz-prompt'
  | 'cloze-prompt'
  | 'shadow-prompt'
  | 'build-prompt'
  | 'correct'
  | 'reveal'
  | 'cloze-reveal'
  | 'shadow-reveal'
  | 'build-reveal'
  | 'paused'
  | 'resuming'
  | 'done';

export type ListenKind = 'teach-echo' | 'quiz-answer' | 'cloze-answer' | 'shadow-answer' | 'build-answer' | 'self-grade' | 'resume';

export type RateMode = 'auto' | 'self' | 'skip' | 'timeout';

export type Effect =
  | { type: 'play'; kind: PlayKind; wordId?: string; sentenceId?: string }
  | { type: 'listen'; kind: ListenKind; wordId?: string; sentenceId?: string }
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
  | 'quiz-playing'
  | 'quiz-listening'
  | 'cloze-playing'
  | 'cloze-listening'
  | 'shadow-playing'
  | 'shadow-listening'
  | 'build-playing'
  | 'build-listening'
  | 'correct-playing'
  | 'reveal-playing'
  | 'self-grade-listening'
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
}

export type TapCommand = 'repeat' | 'skip' | 'pause' | 'resume' | 'gotit' | 'missed';

export type Event =
  | { type: 'start'; queue: Item[]; voiceEcho: boolean; degraded?: boolean }
  | { type: 'playDone' }
  | { type: 'listenResult'; outcome: ListenOutcome; recognized?: string }
  | { type: 'tap'; cmd: TapCommand };

export interface Step {
  state: MachineState;
  effects: Effect[];
}

const SR_FAILURE_LIMIT = 3;

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
  };
}

export function currentItem(s: MachineState): Item | undefined {
  return s.queue[s.idx];
}

const step = (state: MachineState, ...effects: Effect[]): Step => ({ state, effects });

function enterItem(s: MachineState): Step {
  // New item → clear the recognized-text echo so it never sticks to the next word.
  s = { ...s, lastRecognized: null };
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
  return step({ ...s, phase: 'quiz-playing', retries: 0 }, { type: 'play', kind: 'quiz-prompt', wordId: item.wordId });
}

function advance(s: MachineState): Step {
  return enterItem({ ...s, idx: s.idx + 1 });
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

function bumpSrFailure(s: MachineState): MachineState {
  const srFailures = s.srFailures + 1;
  return { ...s, srFailures, degraded: s.degraded || srFailures >= SR_FAILURE_LIMIT };
}

function degrade(s: MachineState): MachineState {
  return { ...s, degraded: true };
}

/** Quiz/cloze answer didn't pass → reveal the answer, then self-grade. A cloze
 *  reveal plays the full natural sentence; a plain quiz just names the word. */
function toReveal(s: MachineState): Step {
  const item = currentItem(s)!;
  const kind =
    item.mode === 'cloze' ? 'cloze-reveal'
    : item.mode === 'shadow' ? 'shadow-reveal'
    : item.mode === 'build' ? 'build-reveal'
    : 'reveal';
  return step({ ...s, phase: 'reveal-playing', retries: 0 }, { type: 'play', kind, wordId: item.wordId, sentenceId: item.sentenceId });
}

function gradeSelf(s: MachineState, rating: 'good' | 'again', mode: RateMode): Step {
  const item = currentItem(s)!;
  const counts =
    rating === 'good'
      ? { ...s.counts, correct: s.counts.correct + 1 }
      : { ...s.counts, missed: s.counts.missed + 1 };
  const next = advance({ ...s, counts });
  return { state: next.state, effects: [{ type: 'rate', wordId: item.wordId, rating, mode }, ...next.effects] };
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

  switch (s.phase) {
    case 'intro':
      if (ev.type === 'playDone') return enterItem(s);
      break;

    case 'teach-playing':
      if (ev.type === 'playDone') {
        if (s.degraded || !s.voiceEcho) return finishTeach(s);
        return step({ ...s, phase: 'teach-listening', retries: 0 }, { type: 'listen', kind: 'teach-echo', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      break;

    case 'teach-listening': {
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return skipTeach(s);
      if (outcome === 'denied' || outcome === 'unavailable') return finishTeach(degrade(s));
      if (outcome === 'error') return finishTeach(bumpSrFailure(s));
      if (outcome) {
        // Lenient: any echo (or silence) moves on.
        return finishTeach({ ...s, srFailures: 0 });
      }
      break;
    }

    case 'quiz-playing':
      if (ev.type === 'playDone') {
        if (s.degraded) return toReveal(s);
        return step({ ...s, phase: 'quiz-listening', retries: 0 }, { type: 'listen', kind: 'quiz-answer', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      break;

    case 'cloze-playing':
    case 'shadow-playing':
    case 'build-playing': {
      if (ev.type === 'playDone') {
        if (s.degraded) return toReveal(s);
        const item = currentItem(s)!;
        const kind: ListenKind = s.phase === 'cloze-playing' ? 'cloze-answer' : s.phase === 'shadow-playing' ? 'shadow-answer' : 'build-answer';
        const next: Phase = s.phase === 'cloze-playing' ? 'cloze-listening' : s.phase === 'shadow-playing' ? 'shadow-listening' : 'build-listening';
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
    case 'build-listening': {
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'match') {
        const item = currentItem(s)!;
        const next: MachineState = {
          ...s,
          phase: 'correct-playing',
          srFailures: 0,
          counts: { ...s.counts, correct: s.counts.correct + 1 },
        };
        return step(
          next,
          { type: 'rate', wordId: item.wordId, rating: 'good', mode: 'auto', recognized: ev.type === 'listenResult' ? ev.recognized : undefined },
          { type: 'play', kind: 'correct', wordId: item.wordId, sentenceId: item.sentenceId },
        );
      }
      if (outcome === 'nomatch' || outcome === 'dontknow' || outcome === 'timeout' || outcome === 'speech') {
        return toReveal({ ...s, srFailures: 0 });
      }
      if (outcome === 'error') return toReveal(bumpSrFailure(s));
      if (outcome === 'denied' || outcome === 'unavailable') return toReveal(degrade(s));
      break;
    }

    case 'correct-playing':
      if (ev.type === 'playDone') return advance(s);
      if (outcome === 'cmd-repeat') {
        const item = currentItem(s)!;
        return step(s, { type: 'play', kind: 'correct', wordId: item.wordId, sentenceId: item.sentenceId });
      }
      if (outcome === 'cmd-skip') return advance(s);
      break;

    case 'reveal-playing':
      if (ev.type === 'playDone') {
        return step({ ...s, phase: 'self-grade-listening', retries: 0 }, { type: 'listen', kind: 'self-grade', wordId: currentItem(s)!.wordId });
      }
      if (outcome === 'cmd-repeat') return toReveal(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      break;

    case 'self-grade-listening': {
      // A revealed answer is a miss by default; "got it" is the override for a
      // correct answer the recognizer didn't catch. Anything else (silence,
      // an unrecognized utterance, an SR error) leaves it missed and moves on
      // immediately — no retry, no waiting in limbo.
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      if (outcome === 'cmd-repeat') return toReveal(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'denied' || outcome === 'unavailable') s = degrade(s);
      if (outcome === 'error') s = bumpSrFailure(s);
      if (outcome) return gradeSelf(s, 'again', 'timeout');
      break;
    }

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
