// Rungs 3–4 (labs): shadow grading, the exercise ladder, and machine flows.

import { describe, expect, it } from 'vitest';
import { State } from 'ts-fsrs';
import { gradeShadow, lcsLength } from '../src/matching/shadow';
import { chooseExerciseType } from '../src/session/selectExercise';
import { initialState, reduce, type Event, type Item, type ListenOutcome, type Step } from '../src/session/machine';
import type { Card } from '../src/srs/scheduler';
import type { Sentence, Word } from '../src/types';
import { SessionRunner } from '../src/session/runner';
import { fixLoanwordReadings } from '../tools/pipeline/lib';

const sentence: Sentence = {
  id: 's1',
  textJa: '毎朝りんごを食べます。',
  readingKana: 'まいあさりんごをたべます。',
  textEn: 'I eat an apple every morning.',
  clozeSurface: 'りんご',
  clozeReading: 'りんご',
};

const word = (sentences?: Sentence[]): Word => ({
  id: 'w1', english: 'apple', prompt: 'apple', kana: 'りんご', written: ['林檎', 'りんご'],
  romaji: 'ringo', mora: ['ri', 'n', 'go'], moraKana: ['り', 'ん', 'ご'], sentences, tags: [],
});

function card(state: State, scheduled_days: number): Card {
  return { state, scheduled_days, reps: 0, due: new Date(), stability: 0, difficulty: 0, elapsed_days: 0, lapses: 0 } as unknown as Card;
}

describe('gradeShadow', () => {
  it('passes a perfect repetition', () => {
    const r = gradeShadow(['まいあさりんごをたべます'], sentence);
    expect(r.matched).toBe(true);
    expect(r.coverage).toBeGreaterThan(0.9);
  });
  it('passes with kanji transcription (graded after reading expansion upstream)', () => {
    expect(gradeShadow(['毎朝りんごを食べます', 'まいあさりんごをたべます'], sentence).matched).toBe(true);
  });
  it('passes with minor recognition drops', () => {
    expect(gradeShadow(['まいあさりんごたべます'], sentence).matched).toBe(true); // dropped を
  });
  it('fails when only the target word was said', () => {
    expect(gradeShadow(['りんご'], sentence).matched).toBe(false);
  });
  it('fails on unrelated speech and empties', () => {
    expect(gradeShadow(['こんにちは'], sentence).matched).toBe(false);
    expect(gradeShadow([], sentence).matched).toBe(false);
    expect(gradeShadow([''], sentence).matched).toBe(false);
  });
  it('lcsLength sanity', () => {
    expect(lcsLength('abcde', 'ace')).toBe(3);
    expect(lcsLength('', 'abc')).toBe(0);
  });
});

describe('exercise ladder (labs)', () => {
  const labs = { shadowMinIntervalDays: 14, buildMinIntervalDays: 30, force: null };
  const cfg = { enableCloze: true, minIntervalDays: 7, labs };
  const w = word([sentence]);

  it('climbs quiz → cloze → shadow → build with interval', () => {
    expect(chooseExerciseType(card(State.Review, 3), w, cfg)).toBe('quiz');
    expect(chooseExerciseType(card(State.Review, 8), w, cfg)).toBe('cloze');
    expect(chooseExerciseType(card(State.Review, 20), w, cfg)).toBe('shadow');
    expect(chooseExerciseType(card(State.Review, 45), w, cfg)).toBe('build');
  });
  it('shadow needs a sentence; build does not', () => {
    const bare = word();
    expect(chooseExerciseType(card(State.Review, 20), bare, cfg)).toBe('quiz');
    expect(chooseExerciseType(card(State.Review, 45), bare, cfg)).toBe('build');
  });
  it('without labs, mature cards stop at cloze', () => {
    const noLabs = { enableCloze: true, minIntervalDays: 7 };
    expect(chooseExerciseType(card(State.Review, 45), w, noLabs)).toBe('cloze');
  });
  it('?rung= forces a type when prerequisites allow', () => {
    expect(chooseExerciseType(undefined, w, { ...cfg, labs: { ...labs, force: 'shadow' } })).toBe('shadow');
    expect(chooseExerciseType(undefined, w, { ...cfg, labs: { ...labs, force: 'build' } })).toBe('build');
    expect(chooseExerciseType(undefined, word(), { ...cfg, labs: { ...labs, force: 'shadow' } })).toBe('quiz');
  });
});

describe('runner integration (shadow/build grading)', () => {
  const flush = () => new Promise((r) => setTimeout(r, 0));

  function make(mode: 'shadow' | 'build', listenText: string, gradeBuild?: (w: Word, t: string) => Promise<{ verdict: 'good' | 'again'; note?: string }>) {
    const rates: Array<{ rating: string; mode: string }> = [];
    const phases: string[] = [];
    const w = word([sentence]);
    const runner = new SessionRunner({
      play: async () => 'done',
      cancelPlay: () => {},
      listen: async () => ({ kind: 'result', alternatives: [listenText] }),
      abortListen: () => {},
      srAvailable: () => true,
      rate: async (_w, rating, m) => { rates.push({ rating, mode: m }); },
      markLearned: async () => {},
      setMic: () => {},
      gradeBuild,
      words: new Map([[w.id, w]]),
      onChange: (s) => phases.push(s.phase),
      onEnded: () => {},
    });
    runner.start([{ wordId: 'w1', mode, sentenceId: 's1' }], true);
    return { rates, phases, flushAll: async () => { for (let i = 0; i < 15; i++) await flush(); } };
  }

  it('shadow: repeating the sentence rates good automatically', async () => {
    const t = make('shadow', 'まいあさりんごをたべます');
    await t.flushAll();
    expect(t.rates[0]).toMatchObject({ rating: 'good', mode: 'auto' });
    expect(t.phases).toContain('correct-playing');
  });

  it('shadow: saying only the word goes to the reveal', async () => {
    const t = make('shadow', 'りんご');
    await t.flushAll();
    expect(t.phases).toContain('reveal-playing');
  });

  it('build: grader verdict good rates good', async () => {
    const t = make('build', '毎日りんごを食べます', async () => ({ verdict: 'good', note: 'nice' }));
    await t.flushAll();
    expect(t.rates[0]).toMatchObject({ rating: 'good', mode: 'auto' });
  });

  it('build: grader verdict again goes to the reveal', async () => {
    const t = make('build', 'りんごとりんごとりんご', async () => ({ verdict: 'again' }));
    await t.flushAll();
    expect(t.phases).toContain('reveal-playing');
  });

  it('build: transcript without the word never reaches the grader', async () => {
    let called = false;
    const t = make('build', '毎日パンを食べます', async () => { called = true; return { verdict: 'good' }; });
    await t.flushAll();
    expect(called).toBe(false);
    expect(t.phases).toContain('reveal-playing');
  });

  it('build: grader unreachable degrades to the reveal (self-grade)', async () => {
    const t = make('build', '毎日りんごを食べます', async () => { throw new Error('network'); });
    await t.flushAll();
    expect(t.phases).toContain('reveal-playing');
  });
});

describe('machine shadow/build flow', () => {
  const start = (queue: Item[]): Step => reduce(initialState(), { type: 'start', queue, voiceEcho: true, degraded: false });
  const run = (step: Step, ...events: Event[]): Step => events.reduce((cur, ev) => reduce(cur.state, ev), step);
  const playDone: Event = { type: 'playDone' };
  const result = (outcome: ListenOutcome): Event => ({ type: 'listenResult', outcome });

  it('shadow: prompt → listen → match rates good', () => {
    const s1 = run(start([{ wordId: 'w1', mode: 'shadow', sentenceId: 's1' }]), playDone);
    expect(s1.state.phase).toBe('shadow-playing');
    expect(s1.effects).toEqual([{ type: 'play', kind: 'shadow-prompt', wordId: 'w1', sentenceId: 's1' }]);
    const s2 = run(s1, playDone);
    expect(s2.state.phase).toBe('shadow-listening');
    const s3 = run(s2, result('match'));
    expect(s3.state.phase).toBe('correct-playing');
    expect(run(s3, playDone).effects[0]).toMatchObject({ type: 'rate', wordId: 'w1', rating: 'good' });
  });

  it('build: nomatch goes to the build reveal, then self-grade override works', () => {
    const s1 = run(start([{ wordId: 'w1', mode: 'build', sentenceId: 's1' }]), playDone, playDone);
    expect(s1.state.phase).toBe('build-listening');
    const s2 = run(s1, result('nomatch'));
    expect(s2.state.phase).toBe('reveal-playing');
    expect(s2.effects).toEqual([{ type: 'play', kind: 'build-reveal', wordId: 'w1', sentenceId: 's1' }]);
    const s3 = run(s2, playDone, result('gotit'));
    expect(s3.effects[0]).toMatchObject({ type: 'rate', rating: 'good', mode: 'self' });
  });

  it('shadow timeout reveals with the sentence replay', () => {
    const s = run(start([{ wordId: 'w1', mode: 'shadow', sentenceId: 's1' }]), playDone, playDone, result('timeout'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'shadow-reveal', wordId: 'w1', sentenceId: 's1' }]);
  });
});

describe('fixLoanwordReadings', () => {
  it('repairs vowel-expanded loanword readings in every spelling style', () => {
    expect(fixLoanwordReadings('ビールを飲みます。', 'びいるをのみます。')).toBe('びーるをのみます。');
    expect(fixLoanwordReadings('子供はゲームが好きです。', 'こどもはげえむがすきです。')).toBe('こどもはげーむがすきです。');
    expect(fixLoanwordReadings('ボールで遊びます。', 'ぼうるであそびます。')).toBe('ぼーるであそびます。');
    expect(fixLoanwordReadings('誕生日のカード', 'たんじょうびのかあど')).toBe('たんじょうびのかーど');
    expect(fixLoanwordReadings('パスポートとデータ', 'ぱすぽうととでえた')).toBe('ぱすぽーととでーた');
  });
  it('leaves correct readings and non-loanword text alone', () => {
    expect(fixLoanwordReadings('ビールを飲みます。', 'びーるをのみます。')).toBe('びーるをのみます。');
    expect(fixLoanwordReadings('毎朝走ります。', 'まいあさはしります。')).toBe('まいあさはしります。');
    // 東京(とうきょう) contains an o-row + う — must not be "corrected".
    expect(fixLoanwordReadings('東京へ行きます。', 'とうきょうへいきます。')).toBe('とうきょうへいきます。');
  });
});

describe('conjEarlyAccess', () => {
  it('admits only allowlisted accounts, case/whitespace-insensitively', async () => {
    const { conjEarlyAccess } = await import('../src/labs');
    expect(conjEarlyAccess('revevan@gmail.com')).toBe(true);
    expect(conjEarlyAccess(' Revevan@Gmail.com ')).toBe(true);
    expect(conjEarlyAccess('someone@example.com')).toBe(false);
    expect(conjEarlyAccess(null)).toBe(false);
    expect(conjEarlyAccess(undefined)).toBe(false);
    expect(conjEarlyAccess('')).toBe(false);
  });
});
