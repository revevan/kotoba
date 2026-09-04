import { afterEach, describe, expect, it, vi } from 'vitest';
import { CUE_COOLDOWN_MS, SessionRunner, type RunnerDeps } from '../src/session/runner';
import type { ClipItem } from '../src/audio/clips';
import type { ListenOptions, SRResult } from '../src/speech/recognizer';
import { STT_TRANSCRIBE_BUDGET_MS } from '../src/speech/sttFetch';
import { HOLD_RETRY_MS, type MachineState, type Phase } from '../src/session/machine';
import type { Sentence, Word } from '../src/types';

const word: Word = {
  id: 'w1',
  english: 'mother',
  prompt: 'mother',
  kana: 'おかあさん',
  written: ['お母さん', 'おかあさん'],
  romaji: 'okaasan',
  mora: ['o', 'ka', 'a', 'sa', 'n'],
  moraKana: ['お', 'か', 'あ', 'さ', 'ん'],
  tags: [],
};

function makeRunner(listen: RunnerDeps['listen']) {
  const phases: Phase[] = [];
  let ended = false;
  const runner = new SessionRunner({
    play: async () => 'done',
    cancelPlay: () => {},
    listen,
    abortListen: () => {},
    srAvailable: () => true,
    rate: async () => {},
    markLearned: async () => {},
    setMic: () => {},
    words: new Map([[word.id, word]]),
    onChange: (s) => phases.push(s.phase),
    onEnded: () => {
      ended = true;
    },
  });
  return { runner, phases, isEnded: () => ended };
}

const flush = () => new Promise((r) => setTimeout(r, 0));

afterEach(() => {
  vi.useRealTimers();
});

describe('SessionRunner robustness', () => {
  it('advances past a Safari-initiated abort instead of wedging (the word-2 freeze)', async () => {
    // iOS Safari answers our timeout's stop() with an 'aborted' error while
    // the listen is still the current one — that must count as silence.
    const { runner, phases, isEnded } = makeRunner(async (): Promise<SRResult> => ({ kind: 'aborted' }));
    runner.start([{ wordId: 'w1', mode: 'teach' }], true);
    for (let i = 0; i < 10; i++) await flush();

    expect(phases).toContain('teach-listening');
    expect(phases[phases.length - 1]).toBe('done');
    expect(isEnded()).toBe(true);
  });

  it('paces the teach echo locally (waitForEcho) without a transcription POST', async () => {
    const listen = vi.fn(async (): Promise<SRResult> => ({ kind: 'no-speech' }));
    const waitForEcho = vi.fn(async () => 'spoke' as const);
    const phases: Phase[] = [];
    const runner = new SessionRunner({
      play: async () => 'done',
      cancelPlay: () => {},
      listen,
      abortListen: () => {},
      srAvailable: () => true,
      rate: async () => {},
      markLearned: async () => {},
      setMic: () => {},
      waitForEcho,
      words: new Map([[word.id, word]]),
      onChange: (s) => phases.push(s.phase),
      onEnded: () => {},
    });
    runner.start([{ wordId: 'w1', mode: 'teach' }], true);
    for (let i = 0; i < 10; i++) await flush();

    expect(phases).toContain('teach-listening');
    expect(phases).toContain('teach2-listening');
    expect(waitForEcho).toHaveBeenCalledTimes(2); // one per teach echo
    expect(listen).not.toHaveBeenCalled(); // teach never hits Deepgram
    expect(phases[phases.length - 1]).toBe('done');
  });

  it('an SR-error reveal plays the connection phrase, not "not quite", and rates nothing', async () => {
    const played: string[] = [];
    const rateCalls: string[] = [];
    const phases: Phase[] = [];
    const runner = new SessionRunner({
      play: async (items: ClipItem[]) => {
        for (const i of items) if (i.src) played.push(i.src);
        return 'done';
      },
      cancelPlay: () => {},
      listen: async (): Promise<SRResult> => ({ kind: 'error', code: 'network' }),
      abortListen: () => {},
      srAvailable: () => true,
      rate: async (_w, rating) => {
        rateCalls.push(rating);
      },
      markLearned: async () => {},
      setMic: () => {},
      words: new Map([[word.id, word]]),
      onChange: (s) => phases.push(s.phase),
      onEnded: () => {},
    });
    runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
    for (let i = 0; i < 12; i++) await flush();

    expect(phases).toContain('reveal-playing');
    expect(phases[phases.length - 1]).toBe('done');
    expect(played.some((s) => s.endsWith('couldnt-check.mp3'))).toBe(true);
    expect(played.some((s) => s.endsWith('not-quite.mp3'))).toBe(false);
    expect(rateCalls).toEqual([]); // never rate a card on a network failure
  });

  it('watchdog forces progress when the listen never resolves at all', async () => {
    vi.useFakeTimers();
    const { runner, phases } = makeRunner(() => new Promise<SRResult>(() => {}));
    runner.start([{ wordId: 'w1', mode: 'teach' }], true);
    await vi.advanceTimersByTimeAsync(0); // play intro + teach → reach the listen

    expect(phases).toContain('teach-listening');
    // Watchdog budget = timeout (5000) + utterance window (3200) + the full
    // transcribe retry ladder + slack (3000): it must NOT fire while a
    // slow-but-valid transcription could still be in flight…
    const watchdogMs = 5000 + 3200 + STT_TRANSCRIBE_BUDGET_MS + 3000;
    await vi.advanceTimersByTimeAsync(watchdogMs - 200);
    expect(phases[phases.length - 1]).toBe('teach-listening');
    // …but must force progress once the budget is exhausted (into teach part 2,
    // whose own wedged listen needs a second watchdog to reach done).
    await vi.advanceTimersByTimeAsync(201);
    expect(phases[phases.length - 1]).toBe('teach2-listening');
    await vi.advanceTimersByTimeAsync(watchdogMs + 1);
    expect(phases[phases.length - 1]).toBe('done');
  });
});

describe('SessionRunner answer hints', () => {
  it('boosts the cloud recognizer with the quizzed word reading + written forms', async () => {
    const seen: ListenOptions[] = [];
    const runner = new SessionRunner({
      play: async () => 'done',
      cancelPlay: () => {},
      listen: async (opts: ListenOptions): Promise<SRResult> => {
        seen.push(opts);
        return { kind: 'result', alternatives: ['おかあさん'] };
      },
      abortListen: () => {},
      srAvailable: () => true,
      rate: async () => {},
      markLearned: async () => {},
      setMic: () => {},
      words: new Map([[word.id, word]]),
      onChange: () => {},
      onEnded: () => {},
    });
    runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
    for (let i = 0; i < 12; i++) await flush();

    const quiz = seen.find((o) => o.lang === 'ja-JP');
    expect(quiz?.hints).toEqual(['おかあさん', 'お母さん']);
  });
});

describe('SessionRunner cloze', () => {
  const sentence: Sentence = {
    id: 's1',
    textJa: '父は医者です。',
    readingKana: 'ちちはいしゃです。',
    textEn: 'My father is a doctor.',
    clozeSurface: '医者',
    clozeReading: 'いしゃ',
  };
  const isha: Word = {
    id: 'doc',
    english: 'doctor',
    prompt: 'doctor',
    kana: 'いしゃ',
    written: ['医者', 'いしゃ'],
    romaji: 'isha',
    mora: ['i', 'sha'],
    moraKana: ['い', 'しゃ'],
    sentences: [sentence],
    tags: [],
  };

  it('plays the gapped prompt (with a beep), grades the spoken answer, and rates good', async () => {
    const played: string[] = [];
    let rated: { rating: string; mode: string } | null = null;
    const phases: Phase[] = [];
    const runner = new SessionRunner({
      play: async (items: ClipItem[]) => {
        for (const i of items) if (i.src) played.push(i.src);
        return 'done';
      },
      cancelPlay: () => {},
      listen: async (): Promise<SRResult> => ({ kind: 'result', alternatives: ['いしゃ'] }),
      abortListen: () => {},
      srAvailable: () => true,
      rate: async (_w, rating, mode) => {
        rated = { rating, mode };
      },
      markLearned: async () => {},
      setMic: () => {},
      words: new Map([[isha.id, isha]]),
      onChange: (s) => phases.push(s.phase),
      onEnded: () => {},
    });
    runner.start([{ wordId: 'doc', mode: 'cloze', sentenceId: 's1' }], true);
    for (let i = 0; i < 12; i++) await flush();

    expect(phases).toContain('cloze-playing');
    expect(phases).toContain('cloze-listening');
    expect(played.some((s) => s.endsWith('beep.wav'))).toBe(true);
    expect(rated).toEqual({ rating: 'good', mode: 'auto' });
    expect(phases[phases.length - 1]).toBe('done');
  });
});

describe('connection loss (hold + retry)', () => {
  const CUE: ClipItem[] = [{ src: '/cues/connection-lost.mp3' }];
  const word2: Word = { ...word, id: 'w2', english: 'father', prompt: 'father', kana: 'おとうさん', written: ['お父さん'], romaji: 'otousan' };
  const isCue = (srcs: string[]) => srcs[0] === CUE[0].src;
  const isPrompt = (srcs: string[], id: string) => srcs.some((x) => x.endsWith(`/en/${id}.mp3`));

  /** Player stub: `silent(srcs)` decides per sequence whether the connection is
   *  "gone"; the cue always plays (it's bundled with the shell). */
  function offlineRunner(silent: (srcs: string[]) => boolean) {
    const played: string[][] = [];
    // Answers correctly, so a recovered prompt runs straight through (a miss
    // would re-drill the word and add a second prompt to the counts below).
    const listen = vi.fn(async (): Promise<SRResult> => ({ kind: 'result', alternatives: [word.kana, word2.kana] }));
    const states: MachineState[] = [];
    const runner = new SessionRunner({
      play: async (items) => {
        const srcs = items.map((i) => i.src ?? '');
        played.push(srcs);
        return !isCue(srcs) && silent(srcs) ? 'silent' : 'done';
      },
      cancelPlay: () => {},
      listen,
      abortListen: () => {},
      srAvailable: () => true,
      rate: async () => {},
      markLearned: async () => {},
      setMic: () => {},
      cueClip: CUE,
      words: new Map([
        [word.id, word],
        [word2.id, word2],
      ]),
      onChange: (s) => states.push(s),
      onEnded: () => {},
    });
    const cues = () => played.filter(isCue).length;
    const prompts = (id: string) => played.filter((p) => isPrompt(p, id)).length;
    const last = () => states[states.length - 1];
    const phases = () => states.map((s) => s.phase);
    return { runner, played, listen, cues, prompts, last, phases };
  }

  it('a silent prompt holds: cue once, no listen, replay every HOLD_RETRY_MS until the connection returns', async () => {
    vi.useFakeTimers();
    let online = true;
    const r = offlineRunner(() => !online);
    r.runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
    online = false; // the intro already resolved; the prompt is what fails
    await vi.advanceTimersByTimeAsync(0);

    expect(r.last().phase).toBe('quiz-playing');
    expect(r.last().offline).toBe('holding');
    expect(r.cues()).toBe(1);
    expect(r.prompts('w1')).toBe(1);
    expect(r.listen).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS - 10);
    expect(r.prompts('w1')).toBe(1); // not yet
    await vi.advanceTimersByTimeAsync(20);
    expect(r.prompts('w1')).toBe(2); // replayed…
    expect(r.last().offline).toBe('holding'); // …and held again
    expect(r.cues()).toBe(1); // no second cue for the same outage
    expect(r.listen).not.toHaveBeenCalled();

    online = true;
    await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS + 10);
    expect(r.prompts('w1')).toBe(3);
    expect(r.phases()).toContain('quiz-listening');
    expect(r.listen).toHaveBeenCalled();
  });

  it('the online event retries immediately and the pending timer does not fire a second retry', async () => {
    vi.useFakeTimers();
    const g = globalThis as unknown as { window?: EventTarget };
    g.window = new EventTarget();
    try {
      let online = true;
      const r = offlineRunner(() => !online);
      r.runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
      online = false;
      await vi.advanceTimersByTimeAsync(0);
      expect(r.last().offline).toBe('holding');

      online = true;
      g.window.dispatchEvent(new Event('online'));
      await vi.advanceTimersByTimeAsync(0);
      expect(r.prompts('w1')).toBe(2);
      expect(r.phases()).toContain('quiz-listening');

      await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS * 2);
      expect(r.prompts('w1')).toBe(2); // the 10 s timer was cancelled
      r.runner.stop();
    } finally {
      delete g.window;
    }
  });

  it('an online event during an in-flight retry makes the next hold retry immediately', async () => {
    vi.useFakeTimers();
    const g = globalThis as unknown as { window?: EventTarget };
    g.window = new EventTarget();
    try {
      let online = true;
      const played: string[][] = [];
      const states: MachineState[] = [];
      const runner = new SessionRunner({
        // Prompt plays take 500 ms to settle — the window in which the event lands.
        play: async (items) => {
          const srcs = items.map((i) => i.src ?? '');
          played.push(srcs);
          if (isCue(srcs)) return 'done';
          await new Promise((res) => setTimeout(res, 500));
          return online ? 'done' : 'silent';
        },
        cancelPlay: () => {},
        listen: async () => ({ kind: 'result', alternatives: [word.kana] }),
        abortListen: () => {},
        srAvailable: () => true,
        rate: async () => {},
        markLearned: async () => {},
        setMic: () => {},
        cueClip: CUE,
        words: new Map([[word.id, word]]),
        onChange: (s) => states.push(s),
        onEnded: () => {},
      });
      const prompts = () => played.filter((p) => isPrompt(p, 'w1')).length;
      runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
      await vi.advanceTimersByTimeAsync(600); // intro settles online…
      online = false;
      await vi.advanceTimersByTimeAsync(600); // …the prompt fails → hold
      expect(states[states.length - 1].offline).toBe('holding');
      await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS + 100); // retry in flight (still failing)
      expect(prompts()).toBe(2);
      g.window.dispatchEvent(new Event('online')); // lands mid-retry: no timer to cancel
      await vi.advanceTimersByTimeAsync(450); // the in-flight retry still settles silent → hold(nudged)
      expect(prompts()).toBe(3); // replayed at once, not after another HOLD_RETRY_MS
      online = true;
      await vi.advanceTimersByTimeAsync(600); // the nudged retry is the one that plays
      expect(states.map((s) => s.phase)).toContain('quiz-listening');
      runner.stop();
    } finally {
      delete g.window;
    }
  });

  it('tapping Pause during a hold cancels the pending retry', async () => {
    vi.useFakeTimers();
    let online = true;
    const r = offlineRunner(() => !online);
    r.runner.start([{ wordId: 'w1', mode: 'quiz' }], true);
    online = false;
    await vi.advanceTimersByTimeAsync(0);
    expect(r.last().offline).toBe('holding');

    r.runner.tap('pause');
    await vi.advanceTimersByTimeAsync(0);
    expect(r.last().phase).toBe('paused');
    await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS * 3);
    expect(r.prompts('w1')).toBe(1); // nothing replayed while paused
    expect(r.last().phase).toBe('paused');
  });

  it('a second outage within the cooldown is silent; after the cooldown the cue plays again', async () => {
    vi.useFakeTimers();
    let online = true;
    // w2's prompt is always "offline" — a second, separate outage.
    const r = offlineRunner((srcs) => !online || isPrompt(srcs, 'w2'));
    r.runner.start(
      [
        { wordId: 'w1', mode: 'quiz' },
        { wordId: 'w2', mode: 'quiz' },
      ],
      true,
    );
    online = false;
    await vi.advanceTimersByTimeAsync(0);
    expect(r.cues()).toBe(1); // outage 1 (w1)

    online = true;
    await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS + 10); // w1 retries, plays, runs through to w2
    expect(r.last().idx).toBe(1);
    expect(r.last().offline).toBe('holding'); // outage 2 (w2), ~10 s after the first cue
    expect(r.cues()).toBe(1); // suppressed by the cooldown

    // Same shape, but with the cooldown elapsed before outage 2.
    const r2 = offlineRunner((srcs) => !online || isPrompt(srcs, 'w2'));
    online = false;
    r2.runner.start(
      [
        { wordId: 'w1', mode: 'quiz' },
        { wordId: 'w2', mode: 'quiz' },
      ],
      true,
    );
    await vi.advanceTimersByTimeAsync(0);
    expect(r2.cues()).toBe(1);
    await vi.advanceTimersByTimeAsync(CUE_COOLDOWN_MS + 1000); // still offline: silent retries only
    expect(r2.cues()).toBe(1);
    online = true;
    await vi.advanceTimersByTimeAsync(HOLD_RETRY_MS + 10);
    expect(r2.last().idx).toBe(1);
    expect(r2.cues()).toBe(2); // a fresh outage after the cooldown is announced again
  });
});
