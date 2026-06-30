import { afterEach, describe, expect, it, vi } from 'vitest';
import { SessionRunner, type RunnerDeps } from '../src/session/runner';
import type { ClipItem } from '../src/audio/clips';
import type { ListenOptions, SRResult } from '../src/speech/recognizer';
import type { Phase } from '../src/session/machine';
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
    expect(waitForEcho).toHaveBeenCalledTimes(1);
    expect(listen).not.toHaveBeenCalled(); // teach never hits Deepgram
    expect(phases[phases.length - 1]).toBe('done');
  });

  it('watchdog forces progress when the listen never resolves at all', async () => {
    vi.useFakeTimers();
    const { runner, phases } = makeRunner(() => new Promise<SRResult>(() => {}));
    runner.start([{ wordId: 'w1', mode: 'teach' }], true);
    await vi.advanceTimersByTimeAsync(0); // play intro + teach → reach the listen

    expect(phases).toContain('teach-listening');
    await vi.advanceTimersByTimeAsync(8001); // teach-echo 5000ms + 3000ms watchdog
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
