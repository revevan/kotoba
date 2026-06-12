import type { Word } from '../types';
import type { ClipItem } from '../audio/clips';
import {
  correctSequence,
  phraseSequence,
  quizPromptSequence,
  revealSequence,
  teachSequence,
} from '../audio/clips';
import { dlog } from '../debug/log';
import { gradeAnswer, isDontKnow } from '../matching/match';
import { parseCommand } from '../speech/commands';
import type { ListenFn } from '../speech/recognizer';
import {
  currentItem,
  initialState,
  reduce,
  type Counts,
  type Effect,
  type Event,
  type Item,
  type ListenKind,
  type ListenOutcome,
  type MachineState,
  type PlayKind,
  type RateMode,
  type TapCommand,
} from './machine';

export interface RunnerDeps {
  play(items: ClipItem[]): Promise<'done' | 'cancelled'>;
  cancelPlay(): void;
  listen: ListenFn;
  abortListen(): void;
  srAvailable(): boolean;
  rate(wordId: string, rating: 'good' | 'again', mode: RateMode, recognized?: string): Promise<void>;
  words: Map<string, Word>;
  onChange(state: MachineState, word: Word | undefined): void;
  onEnded(counts: Counts): void;
}

const LISTEN_TIMEOUTS: Record<ListenKind, number> = {
  'teach-echo': 5000,
  'quiz-answer': 7000,
  'self-grade': 6000,
  resume: 10000,
};

export class SessionRunner {
  private state = initialState();
  private listenGen = 0;
  private stopped = false;

  constructor(private deps: RunnerDeps) {}

  start(queue: Item[], voiceEcho: boolean): void {
    this.dispatch({ type: 'start', queue, voiceEcho, degraded: !this.deps.srAvailable() });
  }

  tap(cmd: TapCommand): void {
    this.interrupt();
    this.dispatch({ type: 'tap', cmd });
  }

  stop(): void {
    this.stopped = true;
    this.interrupt();
  }

  getState(): MachineState {
    return this.state;
  }

  private interrupt(): void {
    this.listenGen++;
    this.deps.cancelPlay();
    this.deps.abortListen();
  }

  private currentWord(): Word | undefined {
    const item = currentItem(this.state);
    return item ? this.deps.words.get(item.wordId) : undefined;
  }

  private dispatch(ev: Event): void {
    if (this.stopped) return;
    const { state, effects } = reduce(this.state, ev);
    this.state = state;
    dlog('machine', `${ev.type}${'outcome' in ev ? `:${ev.outcome}` : ''}${'cmd' in ev ? `:${ev.cmd}` : ''} → ${state.phase} [${effects.map((e) => e.type).join(',')}]`);
    try {
      this.deps.onChange(state, this.currentWord());
    } catch (e) {
      dlog('runner', `onChange threw: ${e}`);
    }
    for (const eff of effects) void this.execute(eff);
  }

  private async execute(eff: Effect): Promise<void> {
    switch (eff.type) {
      case 'play': {
        let outcome: 'done' | 'cancelled';
        try {
          outcome = await this.deps.play(this.sequenceFor(eff.kind, eff.wordId));
        } catch (e) {
          // A playback failure must never strand the session.
          dlog('runner', `play ${eff.kind} threw: ${e}`);
          outcome = 'done';
        }
        if (outcome === 'done' && !this.stopped) this.dispatch({ type: 'playDone' });
        return;
      }
      case 'listen':
        return this.runListen(eff.kind, eff.wordId);
      case 'rate':
        try {
          await this.deps.rate(eff.wordId, eff.rating, eff.mode, eff.recognized);
        } catch (e) {
          dlog('runner', `rate threw: ${e}`);
        }
        return;
      case 'ended':
        this.deps.onEnded(this.state.counts);
        return;
    }
  }

  private sequenceFor(kind: PlayKind, wordId?: string): ClipItem[] {
    const word = wordId ? this.deps.words.get(wordId) : undefined;
    switch (kind) {
      case 'intro':
        return phraseSequence('session-start');
      case 'teach':
        return teachSequence(word!);
      case 'quiz-prompt':
        return quizPromptSequence(word!);
      case 'correct':
        return correctSequence(word!);
      case 'reveal':
        return revealSequence(word!);
      case 'paused':
        return phraseSequence('paused');
      case 'resuming':
        return phraseSequence('resuming');
      case 'done':
        return phraseSequence('session-done');
    }
  }

  private async runListen(kind: ListenKind, wordId?: string): Promise<void> {
    const gen = ++this.listenGen;
    const timeoutMs = LISTEN_TIMEOUTS[kind];
    const degraded = this.state.degraded || !this.deps.srAvailable();
    const degradedWaitMs = kind === 'self-grade' ? 8000 : kind === 'resume' ? 10000 : 300;

    // Last line of defense: if the listen somehow never produces an event
    // (recognizer wedged, exception below, …) force the session forward.
    const watchdog = setTimeout(() => {
      if (gen !== this.listenGen || this.stopped) return;
      dlog('runner', `WATCHDOG fired for ${kind} — forcing timeout`);
      this.listenGen++;
      this.deps.abortListen();
      this.dispatch({ type: 'listenResult', outcome: 'timeout' });
    }, (degraded ? degradedWaitMs : timeoutMs) + 3000);

    try {
      // Degraded mode (no usable speech recognition): self-grade and resume
      // become tap-or-timeout windows; other listens resolve as timeouts.
      if (degraded) {
        await new Promise((r) => setTimeout(r, degradedWaitMs));
        if (gen !== this.listenGen || this.stopped) return;
        this.dispatch({ type: 'listenResult', outcome: 'timeout' });
        return;
      }

      const lang = kind === 'teach-echo' || kind === 'quiz-answer' ? 'ja-JP' : 'en-US';
      const res = await this.deps.listen({ lang, timeoutMs });
      if (gen !== this.listenGen || this.stopped) return;

      const word = wordId ? this.deps.words.get(wordId) : undefined;
      let outcome: ListenOutcome;
      let recognized: string | undefined;

      switch (res.kind) {
        case 'result': {
          recognized = res.alternatives[0];
          outcome = this.classify(kind, res.alternatives, word);
          break;
        }
        case 'timeout':
        case 'no-speech':
        // Still the current listen, so nothing else is driving the session:
        // a Safari-initiated abort must advance it like silence would.
        case 'aborted':
          outcome = 'timeout';
          break;
        case 'denied':
          outcome = 'denied';
          break;
        case 'unavailable':
          outcome = 'unavailable';
          break;
        default:
          outcome = 'error';
      }
      this.dispatch({ type: 'listenResult', outcome, recognized });
    } catch (e) {
      dlog('runner', `listen ${kind} threw: ${e}`);
      if (gen !== this.listenGen || this.stopped) return;
      this.dispatch({ type: 'listenResult', outcome: 'error' });
    } finally {
      clearTimeout(watchdog);
    }
  }

  private classify(kind: ListenKind, alternatives: string[], word: Word | undefined): ListenOutcome {
    switch (kind) {
      case 'quiz-answer':
        if (isDontKnow(alternatives)) return 'dontknow';
        return word && gradeAnswer(alternatives, word).matched ? 'match' : 'nomatch';
      case 'teach-echo':
        return word && gradeAnswer(alternatives, word).matched ? 'match' : 'speech';
      case 'self-grade': {
        const cmd = parseCommand(alternatives);
        if (cmd === 'gotit') return 'gotit';
        if (cmd === 'missed') return 'missed';
        if (cmd === 'repeat') return 'cmd-repeat';
        if (cmd === 'skip') return 'cmd-skip';
        if (cmd === 'pause') return 'cmd-pause';
        return 'nomatch';
      }
      case 'resume': {
        const cmd = parseCommand(alternatives);
        return cmd === 'resume' ? 'cmd-resume' : 'timeout';
      }
    }
  }
}
