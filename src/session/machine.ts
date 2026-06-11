// Pure session state machine: (state, event) → (state, effects). No browser
// APIs in here — the runner executes effects and feeds results back as events,
// which keeps the whole teach/quiz/self-grade flow unit-testable.

export type Mode = 'teach' | 'quiz';

export interface Item {
  wordId: string;
  mode: Mode;
}

export type PlayKind =
  | 'intro'
  | 'teach'
  | 'quiz-prompt'
  | 'correct'
  | 'reveal'
  | 'paused'
  | 'resuming'
  | 'done';

export type ListenKind = 'teach-echo' | 'quiz-answer' | 'self-grade' | 'resume';

export type RateMode = 'auto' | 'self' | 'skip' | 'timeout';

export type Effect =
  | { type: 'play'; kind: PlayKind; wordId?: string }
  | { type: 'listen'; kind: ListenKind; wordId?: string }
  | { type: 'rate'; wordId: string; rating: 'good' | 'again'; mode: RateMode; recognized?: string }
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
  const item = currentItem(s);
  if (!item) {
    return step({ ...s, phase: 'done' }, { type: 'play', kind: 'done' });
  }
  if (item.mode === 'teach') {
    return step({ ...s, phase: 'teach-playing', retries: 0 }, { type: 'play', kind: 'teach', wordId: item.wordId });
  }
  return step({ ...s, phase: 'quiz-playing', retries: 0 }, { type: 'play', kind: 'quiz-prompt', wordId: item.wordId });
}

function advance(s: MachineState): Step {
  return enterItem({ ...s, idx: s.idx + 1 });
}

function finishTeach(s: MachineState): Step {
  return advance({ ...s, counts: { ...s.counts, taught: s.counts.taught + 1 } });
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

/** Quiz answer didn't pass → reveal the answer, then self-grade. */
function toReveal(s: MachineState): Step {
  const item = currentItem(s)!;
  return step({ ...s, phase: 'reveal-playing', retries: 0 }, { type: 'play', kind: 'reveal', wordId: item.wordId });
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

  if (ev.type === 'listenResult') {
    s = { ...s, lastRecognized: ev.recognized ?? s.lastRecognized };
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
      if (outcome === 'cmd-skip') return finishTeach(s);
      break;

    case 'teach-listening': {
      if (outcome === 'cmd-repeat') return enterItem(s);
      if (outcome === 'cmd-skip') return finishTeach(s);
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

    case 'quiz-listening': {
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
          { type: 'play', kind: 'correct', wordId: item.wordId },
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
        return step(s, { type: 'play', kind: 'correct', wordId: item.wordId });
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
      if (outcome === 'gotit') return gradeSelf(s, 'good', 'self');
      if (outcome === 'missed') return gradeSelf(s, 'again', 'self');
      if (outcome === 'cmd-repeat') return toReveal(s);
      if (outcome === 'cmd-skip') return gradeSelf(s, 'again', 'skip');
      if (outcome === 'denied' || outcome === 'unavailable') {
        s = degrade(s);
        // fall through to retry/timeout handling below
      }
      if (outcome === 'error') s = bumpSrFailure(s);
      if (outcome === 'timeout' || outcome === 'nomatch' || outcome === 'error' || outcome === 'denied' || outcome === 'unavailable') {
        if (s.retries < 1) {
          return step({ ...s, retries: s.retries + 1 }, { type: 'listen', kind: 'self-grade', wordId: currentItem(s)!.wordId });
        }
        return gradeSelf(s, 'again', 'timeout');
      }
      break;
    }

    case 'pause-playing':
      if (ev.type === 'playDone') {
        return step({ ...s, phase: 'paused' }, { type: 'listen', kind: 'resume' });
      }
      break;

    case 'paused':
      if (ev.type === 'listenResult') {
        if (ev.outcome === 'denied' || ev.outcome === 'unavailable') s = degrade(s);
        // Anything that isn't a resume keeps the resume-listen loop going.
        return step(s, { type: 'listen', kind: 'resume' });
      }
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
