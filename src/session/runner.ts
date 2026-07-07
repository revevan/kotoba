import type { Sentence, Word } from '../types';
import type { ClipItem } from '../audio/clips';
import {
  buildPromptSequence,
  buildRevealSequence,
  clozePromptSequence,
  clozeRevealSequence,
  correctSequence,
  phraseSequence,
  quizPromptSequence,
  revealSequence,
  shadowPromptSequence,
  shadowRevealSequence,
  teach2Sequence,
  teachSequence,
} from '../audio/clips';
import { dlog } from '../debug/log';
import { gradeAnswer, gradeCloze, isDontKnow } from '../matching/match';
import { gradeShadow } from '../matching/shadow';
import { expandWithReadings } from '../matching/reading';
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
  /** A new word's teach finished → record it as studied. */
  markLearned(wordId: string): Promise<void>;
  /** Turn the microphone on/off (released while paused). */
  setMic(on: boolean): void;
  /** Local-VAD wait for the teach "repeat after me" echo — paces the step
   * without transcribing (no Deepgram cost). Omitted = use full recognition. */
  waitForEcho?(timeoutMs: number): Promise<'spoke' | 'silent' | 'aborted'>;
  /** Rung 4 ("build it") LLM grading of a free-production transcript. Omitted
   * or failing ⇒ the answer falls back to reveal + self-grade. */
  gradeBuild?(word: Word, transcript: string): Promise<{ verdict: 'good' | 'again'; note?: string }>;
  words: Map<string, Word>;
  /** Whether the cloze prompt leads with the English translation. */
  clozeEnglishFirst?: boolean;
  onChange(state: MachineState, word: Word | undefined): void;
  onEnded(counts: Counts): void;
}

const LISTEN_TIMEOUTS: Record<ListenKind, number> = {
  'teach-echo': 5000,
  'quiz-answer': 7000,
  'cloze-answer': 7000,
  // Composing takes longer than recalling — give production exercises room.
  'shadow-answer': 10000,
  'build-answer': 12000,
  // Short: the verdict is already in (missed), this is only the brief window
  // to say "got it" and override. Don't make a real miss sit and wait.
  'self-grade': 4000,
  resume: 10000,
};

/** VAD overrides: a whole sentence needs a longer utterance window and a
 *  slightly longer pause before we decide the speaker is done. */
const LONG_UTTERANCE = { maxUtteranceMs: 10000, trailingSilenceMs: 1100 };

/**
 * Expected-answer terms to bias the cloud recognizer toward, gathered from the
 * word/sentence being quizzed. Short Japanese answers ("誰", "今") frequently
 * decode to an empty transcript unaided; boosting the target reading and its
 * written forms recovers them without changing how the answer is graded.
 */
function answerHints(kind: ListenKind, word?: Word, sentence?: Sentence): string[] | undefined {
  const terms: string[] = [];
  if (kind === 'cloze-answer' && sentence) {
    terms.push(sentence.clozeReading, sentence.clozeSurface);
  } else if (kind === 'shadow-answer' && sentence && word) {
    // Bias toward the sentence being shadowed (and its target word).
    terms.push(sentence.clozeSurface, sentence.clozeReading, word.kana);
  } else if (word) {
    terms.push(word.kana, ...word.written);
    for (const alt of word.alts ?? []) terms.push(alt.kana);
  }
  const seen = new Set<string>();
  const hints = terms
    .map((t) => t?.trim())
    .filter((t): t is string => !!t && !seen.has(t) && (seen.add(t), true));
  return hints.length ? hints : undefined;
}

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
    const prevPhase = this.state.phase;
    const { state, effects } = reduce(this.state, ev);
    this.state = state;
    // Release the mic while paused; re-prime it as the session resumes.
    if (state.phase !== prevPhase) {
      if (state.phase === 'paused') this.deps.setMic(false);
      else if (state.phase === 'resume-playing') this.deps.setMic(true);
    }
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
          outcome = await this.deps.play(this.sequenceFor(eff.kind, eff.wordId, eff.sentenceId));
        } catch (e) {
          // A playback failure must never strand the session.
          dlog('runner', `play ${eff.kind} threw: ${e}`);
          outcome = 'done';
        }
        if (outcome === 'done' && !this.stopped) this.dispatch({ type: 'playDone' });
        return;
      }
      case 'listen':
        return this.runListen(eff.kind, eff.wordId, eff.sentenceId);
      case 'rate':
        try {
          await this.deps.rate(eff.wordId, eff.rating, eff.mode, eff.recognized);
        } catch (e) {
          dlog('runner', `rate threw: ${e}`);
        }
        return;
      case 'learned':
        try {
          await this.deps.markLearned(eff.wordId);
        } catch (e) {
          dlog('runner', `markLearned threw: ${e}`);
        }
        return;
      case 'ended':
        this.deps.onEnded(this.state.counts);
        return;
    }
  }

  private sentenceFor(word: Word | undefined, sentenceId?: string): Sentence | undefined {
    if (!word || !sentenceId) return undefined;
    return word.sentences?.find((s) => s.id === sentenceId);
  }

  private sequenceFor(kind: PlayKind, wordId?: string, sentenceId?: string): ClipItem[] {
    const word = wordId ? this.deps.words.get(wordId) : undefined;
    const sentence = this.sentenceFor(word, sentenceId);
    switch (kind) {
      case 'intro':
        return phraseSequence('session-start');
      case 'teach':
        return teachSequence(word!);
      case 'teach2':
        return teach2Sequence(word!, sentence);
      case 'quiz-prompt':
        return quizPromptSequence(word!);
      case 'cloze-prompt':
        // A cloze item always carries a sentence; if it somehow went missing,
        // fall back to a plain prompt rather than play an empty gap.
        return sentence ? clozePromptSequence(sentence, { englishFirst: this.deps.clozeEnglishFirst }) : quizPromptSequence(word!);
      case 'shadow-prompt':
        return sentence ? shadowPromptSequence(sentence) : quizPromptSequence(word!);
      case 'build-prompt':
        return buildPromptSequence(word!);
      case 'shadow-reveal':
        return sentence ? shadowRevealSequence(sentence) : revealSequence(word!);
      case 'build-reveal':
        return buildRevealSequence(word!, sentence);
      case 'correct':
        return correctSequence(word!, sentence);
      case 'reveal':
        return revealSequence(word!);
      case 'cloze-reveal':
        return sentence ? clozeRevealSequence(word!, sentence) : revealSequence(word!);
      case 'paused':
        return phraseSequence('paused');
      case 'resuming':
        return phraseSequence('resuming');
      case 'done':
        return phraseSequence('session-done');
    }
  }

  private async runListen(kind: ListenKind, wordId?: string, sentenceId?: string): Promise<void> {
    const gen = ++this.listenGen;
    const timeoutMs = LISTEN_TIMEOUTS[kind];
    const degraded = this.state.degraded || !this.deps.srAvailable();
    const degradedWaitMs = kind === 'self-grade' ? 5000 : kind === 'resume' ? 10000 : 300;

    // A listen can legitimately outlive timeoutMs by a lot: speech can begin
    // just before the no-speech deadline, run a full utterance window plus
    // trailing silence (~3.2s), and the transcription POST has its own 8s
    // budget. The watchdog is a last line of defense against a *wedged*
    // recognizer, so it must sit beyond that worst case — not race a valid
    // answer that's still being transcribed.
    const WATCHDOG_OVERHEAD_MS = 14000;

    // Last line of defense: if the listen somehow never produces an event
    // (recognizer wedged, exception below, …) force the session forward.
    const watchdog = setTimeout(() => {
      if (gen !== this.listenGen || this.stopped) return;
      dlog('runner', `WATCHDOG fired for ${kind} — forcing timeout`);
      this.listenGen++;
      this.deps.abortListen();
      this.dispatch({ type: 'listenResult', outcome: 'timeout' });
    }, degraded ? degradedWaitMs + 3000 : timeoutMs + WATCHDOG_OVERHEAD_MS);

    try {
      // Degraded mode (no usable speech recognition): self-grade and resume
      // become tap-or-timeout windows; other listens resolve as timeouts.
      if (degraded) {
        await new Promise((r) => setTimeout(r, degradedWaitMs));
        if (gen !== this.listenGen || this.stopped) return;
        this.dispatch({ type: 'listenResult', outcome: 'timeout' });
        return;
      }

      // "Repeat after me" only needs pacing, not a graded transcript: wait for
      // the echo on-device and move on, with no Deepgram POST. (The teach step
      // passes any echo leniently anyway — see machine 'teach-listening'.)
      if (kind === 'teach-echo' && this.deps.waitForEcho) {
        const echo = await this.deps.waitForEcho(timeoutMs);
        if (gen !== this.listenGen || this.stopped) return;
        this.dispatch({ type: 'listenResult', outcome: echo === 'spoke' ? 'speech' : 'timeout' });
        return;
      }

      const ja = kind === 'teach-echo' || kind === 'quiz-answer' || kind === 'cloze-answer' || kind === 'shadow-answer' || kind === 'build-answer';
      const long = kind === 'shadow-answer' || kind === 'build-answer';
      const lang = ja ? 'ja-JP' : 'en-US';
      const word = wordId ? this.deps.words.get(wordId) : undefined;
      const sentence = this.sentenceFor(word, sentenceId);
      const hints = ja ? answerHints(kind, word, sentence) : undefined;
      const res = await this.deps.listen({ lang, timeoutMs, hints, ...(long ? LONG_UTTERANCE : {}) });
      if (gen !== this.listenGen || this.stopped) return;
      let outcome: ListenOutcome;
      let recognized: string | undefined;

      switch (res.kind) {
        case 'result': {
          recognized = res.alternatives[0];
          // For spoken Japanese, also grade against the reading of each
          // alternative so a kanji transcription still matches by pronunciation.
          const graded = ja ? await expandWithReadings(res.alternatives) : res.alternatives;
          if (gen !== this.listenGen || this.stopped) return;
          if (kind === 'build-answer') {
            outcome = await this.classifyBuild(word, recognized, graded);
            if (gen !== this.listenGen || this.stopped) return;
            break;
          }
          outcome = this.classify(kind, graded, word, sentence);
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

  /** Rung 4: the word must be heard in the utterance (cheap local gate), then
   *  the LLM judges correctness. Grader missing/unreachable ⇒ nomatch, which
   *  flows to the reveal + self-grade — the exercise still works offline. */
  private async classifyBuild(word: Word | undefined, transcript: string | undefined, graded: string[]): Promise<ListenOutcome> {
    if (!word || !transcript) return 'nomatch';
    if (isDontKnow(graded)) return 'dontknow';
    const forms = [word.kana, ...word.written, ...(word.alts?.map((a) => a.kana) ?? [])];
    const heardWord = graded.some((alt) => forms.some((f) => f.length > 0 && alt.includes(f)));
    if (!heardWord) {
      dlog('runner', 'build: target word not heard in transcript');
      return 'nomatch';
    }
    if (!this.deps.gradeBuild) return 'nomatch';
    try {
      const { verdict, note } = await this.deps.gradeBuild(word, transcript);
      this.lastBuildNote = note ?? null;
      return verdict === 'good' ? 'match' : 'nomatch';
    } catch (e) {
      dlog('runner', `gradeBuild failed: ${e}`);
      return 'nomatch';
    }
  }

  /** Grader feedback for the most recent build answer (UI display only). */
  lastBuildNote: string | null = null;

  private classify(kind: ListenKind, alternatives: string[], word: Word | undefined, sentence?: Sentence): ListenOutcome {
    switch (kind) {
      case 'quiz-answer':
        if (isDontKnow(alternatives)) return 'dontknow';
        return word && gradeAnswer(alternatives, word).matched ? 'match' : 'nomatch';
      case 'cloze-answer':
        if (isDontKnow(alternatives)) return 'dontknow';
        return sentence && gradeCloze(alternatives, sentence).matched ? 'match' : 'nomatch';
      case 'shadow-answer':
        if (isDontKnow(alternatives)) return 'dontknow';
        return sentence && gradeShadow(alternatives, sentence).matched ? 'match' : 'nomatch';
      case 'build-answer':
        return 'nomatch'; // handled by classifyBuild (async)
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
