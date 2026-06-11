import { describe, expect, it } from 'vitest';
import { initialState, reduce, type Event, type Item, type ListenOutcome, type MachineState, type Step } from '../src/session/machine';

const teach = (id: string): Item => ({ wordId: id, mode: 'teach' });
const quiz = (id: string): Item => ({ wordId: id, mode: 'quiz' });

function start(queue: Item[], voiceEcho = true, degraded = false): Step {
  return reduce(initialState(), { type: 'start', queue, voiceEcho, degraded });
}

function run(step: Step, ...events: Event[]): Step {
  let cur = step;
  for (const ev of events) cur = reduce(cur.state, ev);
  return cur;
}

const playDone: Event = { type: 'playDone' };
const result = (outcome: ListenOutcome, recognized?: string): Event => ({ type: 'listenResult', outcome, recognized });

describe('session machine', () => {
  it('intro plays then enters the first item', () => {
    const s0 = start([teach('w1')]);
    expect(s0.state.phase).toBe('intro');
    expect(s0.effects).toEqual([{ type: 'play', kind: 'intro' }]);

    const s1 = run(s0, playDone);
    expect(s1.state.phase).toBe('teach-playing');
    expect(s1.effects).toEqual([{ type: 'play', kind: 'teach', wordId: 'w1' }]);
  });

  it('empty queue goes straight to done', () => {
    const s = run(start([]), playDone);
    expect(s.state.phase).toBe('done');
  });

  it('teach: play → echo listen → next item', () => {
    const s1 = run(start([teach('w1'), quiz('w2')]), playDone, playDone);
    expect(s1.state.phase).toBe('teach-listening');
    expect(s1.effects).toEqual([{ type: 'listen', kind: 'teach-echo', wordId: 'w1' }]);

    const s2 = run(s1, result('speech'));
    expect(s2.state.phase).toBe('quiz-playing');
    expect(s2.state.counts.taught).toBe(1);
  });

  it('teach with voiceEcho off skips the listen', () => {
    const s = run(start([teach('w1'), quiz('w2')], false), playDone, playDone);
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.counts.taught).toBe(1);
  });

  it('quiz: matched answer rates good and plays correct', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('match', '林檎'));
    expect(s.state.phase).toBe('correct-playing');
    expect(s.state.counts.correct).toBe(1);
    expect(s.effects).toEqual([
      { type: 'rate', wordId: 'w1', rating: 'good', mode: 'auto', recognized: '林檎' },
      { type: 'play', kind: 'correct', wordId: 'w1' },
    ]);
    expect(run(s, playDone).state.phase).toBe('done');
  });

  it('quiz: no match reveals, then self-grade "got it" rates good', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'reveal', wordId: 'w1' }]);

    const s2 = run(s, playDone);
    expect(s2.state.phase).toBe('self-grade-listening');

    const s3 = run(s2, result('gotit'));
    expect(s3.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
    expect(s3.state.counts.correct).toBe(1);
  });

  it('quiz: timeout reveals; self-grade "missed" rates again', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('timeout'), playDone, result('missed'));
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'self' });
    expect(s.state.counts.missed).toBe(1);
  });

  it('self-grade retries once on timeout, then defaults to again', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'), playDone);
    const s2 = run(s, result('timeout'));
    expect(s2.state.phase).toBe('self-grade-listening');
    expect(s2.effects).toEqual([{ type: 'listen', kind: 'self-grade', wordId: 'w1' }]);

    const s3 = run(s2, result('timeout'));
    expect(s3.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'timeout' });
  });

  it('skip during quiz listen rates again and advances', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, { type: 'tap', cmd: 'skip' });
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'skip' });
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.idx).toBe(1);
  });

  it('repeat during quiz listen replays the prompt', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, { type: 'tap', cmd: 'repeat' });
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'quiz-prompt', wordId: 'w1' }]);
  });

  it('pause and resume restart the current item', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, { type: 'tap', cmd: 'pause' });
    expect(s.state.phase).toBe('pause-playing');

    const s2 = run(s, playDone);
    expect(s2.state.phase).toBe('paused');
    expect(s2.effects).toEqual([{ type: 'listen', kind: 'resume' }]);

    const s3 = run(s2, result('timeout'));
    expect(s3.state.phase).toBe('paused'); // keeps listening for "resume"

    const s4 = run(s3, result('cmd-resume'), playDone);
    expect(s4.state.phase).toBe('quiz-playing');
    expect(s4.state.idx).toBe(0);
  });

  it('three SR errors degrade the session and skip listens', () => {
    let s = start([quiz('w1'), quiz('w2'), quiz('w3'), quiz('w4')]);
    s = run(s, playDone); // intro → quiz 1 playing
    for (let i = 0; i < 3; i++) {
      s = run(s, playDone); // prompt done → listening
      expect(s.state.phase).toBe('quiz-listening');
      s = run(s, result('error')); // SR error → reveal
      expect(s.state.phase).toBe('reveal-playing');
      s = run(s, playDone); // reveal done → self-grade
      s = run(s, { type: 'tap', cmd: 'missed' }); // → next quiz playing
    }
    expect(s.state.degraded).toBe(true);
    // Fourth quiz: prompt finishes and goes straight to reveal (no SR listen).
    s = run(s, playDone);
    expect(s.state.phase).toBe('reveal-playing');
  });

  it('mic denied degrades immediately', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('denied'));
    expect(s.state.degraded).toBe(true);
    expect(s.state.phase).toBe('reveal-playing');
  });

  it('session completes with ended effect', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('match'), playDone);
    expect(s.state.phase).toBe('done');
    expect(s.effects).toEqual([{ type: 'play', kind: 'done' }]);
    expect(run(s, playDone).effects).toEqual([{ type: 'ended' }]);
  });
});

describe('queue invariants', () => {
  it('counts add up over a full mixed session', () => {
    let s = start([teach('n1'), quiz('r1'), quiz('n1')]);
    s = run(s, playDone); // teach playing
    s = run(s, playDone, result('speech')); // taught → quiz r1
    s = run(s, playDone, result('match')); // correct → playing
    s = run(s, playDone); // → quiz n1
    s = run(s, playDone, result('nomatch'), playDone, result('gotit'));
    const c = (s.state as MachineState).counts;
    expect(c).toEqual({ taught: 1, correct: 2, missed: 0 });
    expect(s.state.phase).toBe('done');
  });
});
