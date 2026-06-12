import { afterEach, describe, expect, it, vi } from 'vitest';
import { SessionRunner, type RunnerDeps } from '../src/session/runner';
import type { SRResult } from '../src/speech/recognizer';
import type { Phase } from '../src/session/machine';
import type { Word } from '../src/types';

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
