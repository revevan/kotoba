import { describe, expect, it } from 'vitest';
import { HOLD_RETRY_MS, initialState, reduce, type Effect, type Event, type Item, type ListenOutcome, type MachineState, type Step } from '../src/session/machine';

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

  it('teach: play → echo → context (teach2) → second echo → next item', () => {
    const s1 = run(start([teach('w1'), quiz('w2')]), playDone, playDone);
    expect(s1.state.phase).toBe('teach-listening');
    expect(s1.effects).toEqual([{ type: 'listen', kind: 'teach-echo', wordId: 'w1' }]);

    const s2 = run(s1, result('speech'));
    expect(s2.state.phase).toBe('teach2-playing');
    expect(s2.effects).toEqual([{ type: 'play', kind: 'teach2', wordId: 'w1' }]);

    const s3 = run(s2, playDone);
    expect(s3.state.phase).toBe('teach2-listening');
    expect(s3.effects).toEqual([{ type: 'listen', kind: 'teach-echo', wordId: 'w1' }]);

    const s4 = run(s3, result('speech'));
    expect(s4.state.phase).toBe('quiz-playing');
    expect(s4.state.counts.taught).toBe(1);
  });

  it('teach with voiceEcho off plays both halves without listening', () => {
    const s1 = run(start([teach('w1'), quiz('w2')], false), playDone, playDone);
    expect(s1.state.phase).toBe('teach2-playing');
    const s2 = run(s1, playDone);
    expect(s2.state.phase).toBe('quiz-playing');
    expect(s2.state.counts.taught).toBe(1);
  });

  it('finishing a teach emits a learned effect (only studied words get scheduled)', () => {
    const s = run(start([teach('w1'), quiz('w2')], false), playDone, playDone, playDone);
    expect(s.effects).toContainEqual({ type: 'learned', wordId: 'w1' });
  });

  it('skip during teach2 still leaves the word new', () => {
    const s = run(start([teach('w1'), quiz('w1')]), playDone, playDone, result('speech'), playDone, result('cmd-skip'));
    expect(s.effects.map((e) => e.type)).not.toContain('learned');
    expect(s.state.phase).toBe('done'); // re-quiz dropped → nothing left
    expect(s.state.counts.taught).toBe(0);
  });

  it('repeat during teach2 replays only the context half', () => {
    const s = run(start([teach('w1')]), playDone, playDone, result('speech'), playDone, result('cmd-repeat'));
    expect(s.state.phase).toBe('teach2-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'teach2', wordId: 'w1' }]);
  });

  it('skip during teach-playing leaves the word new and drops its re-quiz', () => {
    // Queue as the builder lays it out: teach w1 … re-quiz w1 a few slots later.
    const s = run(start([teach('w1'), quiz('w2'), quiz('w1')]), playDone, { type: 'tap', cmd: 'skip' });
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'quiz-prompt', wordId: 'w2' }]);
    expect(s.state.counts.taught).toBe(0);
    expect(s.state.queue.map((i) => i.wordId)).toEqual(['w1', 'w2']); // re-quiz gone
  });

  it('skip during teach-listening also skips without learning', () => {
    const s = run(start([teach('w1'), quiz('w1')]), playDone, playDone, result('cmd-skip'));
    expect(s.effects.map((e) => e.type)).not.toContain('learned');
    expect(s.state.phase).toBe('done'); // re-quiz dropped → nothing left
    expect(s.state.counts.taught).toBe(0);
  });

  it('quiz: matched answer plays correct, and rates good once the clip ends', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('match', '林檎'));
    expect(s.state.phase).toBe('correct-playing');
    expect(s.state.counts.correct).toBe(1);
    // Rating is deferred to the end of the correct clip — that window is where
    // "missed it" can still demote the pass.
    expect(s.effects).toEqual([{ type: 'play', kind: 'correct', wordId: 'w1' }]);
    const done = run(s, playDone);
    expect(done.state.phase).toBe('done');
    expect(done.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'auto', recognized: '林檎' });
  });

  it('"missed it" during the correct clip demotes the pass to a rated miss + re-drill', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('match', '林檎'));
    expect(s.state.phase).toBe('correct-playing');

    const demoted = run(s, { type: 'tap', cmd: 'missed' });
    expect(demoted.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'self', recognized: '林檎' });
    expect(demoted.state.counts).toEqual({ taught: 0, correct: 0, missed: 1 });
    // The false pass re-drills later in the session, like any other miss.
    expect(demoted.state.queue.filter((i) => i.wordId === 'w1' && i.practice)).toHaveLength(1);
    expect(demoted.state.phase).toBe('quiz-playing'); // moved on to w2
  });

  it('a demoted re-drill pass stays unrated and is not requeued again', () => {
    const p: Item = { wordId: 'w1', mode: 'quiz', practice: true };
    const s = run(start([p]), playDone, playDone, result('match', 'ねこ'), { type: 'tap', cmd: 'missed' });
    expect(s.effects.some((e) => e.type === 'rate')).toBe(false); // the original miss already scheduled it
    expect(s.state.queue).toHaveLength(1); // one re-drill per word per session
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

  it('self-grade defaults to missed immediately — no retry/limbo', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('nomatch'), playDone);
    expect(s.state.phase).toBe('self-grade-listening');

    const s2 = run(s, result('timeout'));
    expect(s2.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'timeout' });
    expect(s2.state.counts.missed).toBe(1);
    expect(s2.state.phase).toBe('quiz-playing'); // straight on to w2
    expect(s2.state.idx).toBe(1);
  });

  it('self-grade "got it" overrides a missed answer to correct', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'), playDone, result('gotit'));
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
    expect(s.state.counts.correct).toBe(1);
    expect(s.state.counts.missed).toBe(0);
  });

  it('self-grade garbled utterance re-prompts once; "got it" then still rates good', () => {
    // Quiz miss → reveal → self-grade hears something that isn't a command
    // (e.g. a misheard "got it") → re-prompt instead of finalizing the miss.
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'), playDone, result('nomatch'));
    expect(s.state.phase).toBe('self-grade-reprompt-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'self-grade-reprompt', wordId: 'w1' }]);

    const s2 = run(s, playDone);
    expect(s2.state.phase).toBe('self-grade-listening');
    expect(s2.effects).toEqual([{ type: 'listen', kind: 'self-grade', wordId: 'w1' }]);

    const s3 = run(s2, result('gotit'));
    expect(s3.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
    expect(s3.state.counts.correct).toBe(1);
    expect(s3.state.counts.missed).toBe(0);
  });

  it('self-grade second garbled utterance finalizes the miss', () => {
    const s = run(
      start([quiz('w1'), quiz('w2')]),
      playDone, playDone, result('nomatch'), // miss → reveal
      playDone, result('nomatch'), // garbled → re-prompt
      playDone, result('nomatch'), // garbled again → miss stands
    );
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'timeout' });
    expect(s.state.counts.missed).toBe(1);
    expect(s.state.idx).toBe(1); // moved on
  });

  it('self-grade re-prompt accepts a tap without waiting for the clip to end', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'), playDone, result('nomatch'), { type: 'tap', cmd: 'gotit' });
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
  });

  it('recognized echo clears on the next word and ignores self-grade commands', () => {
    // Wrong answer on w1 → reveal → "missed it" self-grade → on to w2.
    let s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('nomatch', '一社'));
    expect(s.state.lastRecognized).toBe('一社'); // shows what was heard on the miss
    s = run(s, playDone, result('missed', 'Missed it.'));
    // The self-grade phrase must not become the echo, and the new word starts clean.
    expect(s.state.lastRecognized).not.toBe('Missed it.');
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.lastRecognized).toBeNull();
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

  it('pause releases (no listen) and a Resume tap restarts the current item', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, { type: 'tap', cmd: 'pause' });
    expect(s.state.phase).toBe('pause-playing');

    const s2 = run(s, playDone);
    expect(s2.state.phase).toBe('paused');
    expect(s2.effects).toEqual([]); // no listen while paused — the mic is off

    const s3 = run(s2, { type: 'tap', cmd: 'resume' });
    expect(s3.state.phase).toBe('resume-playing');

    const s4 = run(s3, playDone);
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
    expect(s.effects).toEqual([
      { type: 'rate', wordId: 'w1', rating: 'good', mode: 'auto', recognized: undefined },
      { type: 'play', kind: 'done' },
    ]);
    expect(run(s, playDone).effects).toEqual([{ type: 'ended' }]);
  });
});

describe('SR errors never rate a card', () => {
  // The P0 rule: an FSRS rating requires a real user signal (voice or tap). A
  // network/STT failure must never grade the card — the old behavior rated
  // Again on the error path and poisoned scheduling during outages.
  const cloze = (id: string): Item => ({ wordId: id, mode: 'cloze', sentenceId: 's1' });

  it('error in quiz listen reveals without rating; error in self-grade advances unrated', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('error'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects.some((e) => e.type === 'rate')).toBe(false);

    const s2 = run(s, playDone, result('error'));
    expect(s2.effects.some((e) => e.type === 'rate')).toBe(false);
    expect(s2.state.phase).toBe('quiz-playing'); // moved on to w2
    expect(s2.state.idx).toBe(1);
    expect(s2.state.srFailures).toBe(2);
    expect(s2.state.counts.missed).toBe(0); // not counted as a miss either
    expect(s2.state.queue.some((i) => i.practice)).toBe(false); // no re-drill
  });

  it('error in a sentence-rung listen reveals without rating', () => {
    const s = run(start([cloze('w1')]), playDone, playDone, result('error'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'cloze-reveal', wordId: 'w1', sentenceId: 's1' }]);
  });

  it('error in a conjugation listen reveals without rating', () => {
    const conj: Item = { wordId: 'v1', mode: 'conjugate', conj: { cardId: 'conj:te:ichidan', form: 'te', group: 'ichidan' } };
    const s = run(start([conj]), playDone, playDone, result('error'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects.some((e) => e.type === 'rate')).toBe(false);
  });

  it('mic lost during self-grade degrades and advances unrated', () => {
    for (const outcome of ['denied', 'unavailable'] as const) {
      const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('nomatch'), playDone, result(outcome));
      expect(s.state.degraded).toBe(true);
      expect(s.effects.some((e) => e.type === 'rate')).toBe(false);
      expect(s.state.idx).toBe(1);
      expect(s.state.counts.missed).toBe(0);
    }
  });

  it('self-grade "got it" after an SR-errored answer still rates good', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('error'), playDone, result('gotit'));
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
  });

  it('marks an error-caused reveal so the UI/audio can drop the "not quite" framing', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('error'));
    expect(s.state.srErrorReveal).toBe(true);
    // Repeat replays the reveal without losing the error framing…
    const repeated = run(s, playDone, result('cmd-repeat'));
    expect(repeated.state.srErrorReveal).toBe(true);
    // …the flag survives into self-grade, and clears on the next item.
    const advanced = run(repeated, playDone, result('error'));
    expect(advanced.state.idx).toBe(1);
    expect(advanced.state.srErrorReveal).toBe(false);
  });

  it('a judged miss reveals without the error framing', () => {
    const s = run(start([quiz('w1')]), playDone, playDone, result('nomatch'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.state.srErrorReveal).toBe(false);
  });

  it('self-grade timeout through a WORKING pipeline still rates the default miss', () => {
    // Real silence is a deliberate miss-by-default (see machine self-grade
    // comment) — only failure outcomes are exempt from rating.
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('nomatch'), playDone, result('timeout'));
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'timeout' });
  });

  it('degraded reveal carries the not-graded framing (no listen ever ran)', () => {
    const s = run(start([quiz('w1')], true, true), playDone, playDone);
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.state.srErrorReveal).toBe(true);
  });

  it('degraded tap window expiring advances unrated (C2: expiry is "no tap", not a miss)', () => {
    // Degraded sessions reach self-grade on every card; if the user can't tap
    // (driving), a rating here would mark the whole session wrong.
    const s = run(start([quiz('w1'), quiz('w2')], true, true), playDone, playDone, playDone, result('timeout'));
    expect(s.effects.some((e) => e.type === 'rate')).toBe(false);
    expect(s.state.idx).toBe(1);
    expect(s.state.counts.missed).toBe(0);
    expect(s.state.queue.some((i) => i.practice)).toBe(false); // no re-drill either
  });

  it('degraded taps still grade normally', () => {
    const gotit = run(start([quiz('w1')], true, true), playDone, playDone, playDone, { type: 'tap', cmd: 'gotit' });
    expect(gotit.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'self' });
    const missed = run(start([quiz('w1')], true, true), playDone, playDone, playDone, { type: 'tap', cmd: 'missed' });
    expect(missed.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'self' });
  });

  it('errors across answer and self-grade listens accumulate to degraded, all unrated', () => {
    let s = run(start([quiz('w1'), quiz('w2'), quiz('w3')]), playDone);
    const effects: Effect[] = [];
    const collect = (ev: Event) => {
      s = run(s, ev);
      effects.push(...s.effects);
    };
    collect(playDone); // w1 prompt done → listening
    collect(result('error')); // failure 1 → reveal
    collect(playDone); // reveal done → self-grade
    collect(result('error')); // failure 2 → advance unrated
    expect(s.state.phase).toBe('quiz-playing');
    collect(playDone); // w2 prompt done → listening
    collect(result('error')); // failure 3 → degraded
    expect(s.state.degraded).toBe(true);
    expect(effects.some((e) => e.type === 'rate')).toBe(false);
  });
});

describe('re-drill on a miss', () => {
  const practice = (id: string): Item => ({ wordId: id, mode: 'quiz', practice: true });

  it('a missed word comes back later in the same session', () => {
    const s = run(
      start([quiz('w1'), quiz('w2'), quiz('w3'), quiz('w4'), quiz('w5'), quiz('w6')]),
      playDone, // intro
      playDone, // w1 prompt
      result('nomatch'), // wrong → reveal
      playDone,
      result('missed'), // self-grade: missed
    );
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'self' });
    expect(s.state.queue.map((i) => i.wordId)).toEqual(['w1', 'w2', 'w3', 'w4', 'w5', 'w1', 'w6']);
    expect(s.state.queue[5]).toEqual(practice('w1'));
    expect(s.state.idx).toBe(1); // the re-drill is ahead, not now
  });

  it('the re-drill is practice only — answering it never re-rates the card', () => {
    // The miss already scheduled the card a day out. If a correct repeat rated
    // the card again it would reschedule it days out and erase the lapse.
    const correct = run(start([practice('w1')]), playDone, playDone, result('match', 'ねこ'));
    expect(correct.effects.some((e) => e.type === 'rate')).toBe(false);
    expect(correct.effects).toEqual([{ type: 'play', kind: 'correct', wordId: 'w1' }]);

    const missed = run(start([practice('w1')]), playDone, playDone, result('nomatch'), playDone, result('missed'));
    expect(missed.effects.some((e) => e.type === 'rate')).toBe(false);
  });

  it('a re-drill missed again is not requeued — the word just waits for tomorrow', () => {
    const s = run(start([practice('w1')]), playDone, playDone, result('nomatch'), playDone, result('missed'));
    expect(s.state.queue).toHaveLength(1); // no second re-drill; no endless loop
    expect(s.state.phase).toBe('done');
  });

  it('a skipped answer re-drills too, and a correct answer does not', () => {
    const skipped = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, { type: 'tap', cmd: 'skip' });
    expect(skipped.state.queue.map((i) => i.wordId)).toEqual(['w1', 'w2', 'w1']);

    const passed = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('match'));
    expect(passed.state.queue.map((i) => i.wordId)).toEqual(['w1', 'w2']);
  });
});

describe('queue invariants', () => {
  it('counts add up over a full mixed session', () => {
    let s = start([teach('n1'), quiz('r1'), quiz('n1')]);
    s = run(s, playDone); // teach playing
    s = run(s, playDone, result('speech')); // first echo → teach2
    s = run(s, playDone, result('speech')); // second echo → taught → quiz r1
    s = run(s, playDone, result('match')); // correct → playing
    s = run(s, playDone); // → quiz n1
    s = run(s, playDone, result('nomatch'), playDone, result('gotit'));
    const c = (s.state as MachineState).counts;
    expect(c).toEqual({ taught: 1, correct: 2, missed: 0 });
    expect(s.state.phase).toBe('done');
  });
});

describe('conjugation items', () => {
  const conj = (id: string, cardId = 'conj:te:ichidan'): Item => ({
    wordId: id,
    mode: 'conjugate',
    conj: { cardId, form: 'te', group: 'ichidan' },
  });

  it('plays the conj prompt, listens, and rates the PATTERN card on a match', () => {
    const s1 = run(start([conj('v1')]), playDone);
    expect(s1.state.phase).toBe('conj-playing');
    expect(s1.effects).toEqual([{ type: 'play', kind: 'conj-prompt', wordId: 'v1' }]);

    const s2 = run(s1, playDone);
    expect(s2.state.phase).toBe('conj-listening');
    expect(s2.effects).toEqual([{ type: 'listen', kind: 'conj-answer', wordId: 'v1' }]);

    const s3 = run(s2, result('match', 'たべて'));
    expect(s3.state.phase).toBe('correct-playing');
    const s4 = run(s3, playDone);
    expect(s4.effects[0]).toEqual({ type: 'rate', wordId: 'conj:te:ichidan', rating: 'good', mode: 'auto', recognized: 'たべて' });
  });

  it('reveals with conj-reveal on a miss and rates the pattern card again', () => {
    const s = run(start([conj('v1')]), playDone, playDone, result('nomatch'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'conj-reveal', wordId: 'v1' }]);

    const graded = run(s, playDone, result('missed'));
    expect(graded.effects[0]).toEqual({ type: 'rate', wordId: 'conj:te:ichidan', rating: 'again', mode: 'self' });
  });

  it('re-drills the same pattern (not a plain quiz) after a miss, unrated', () => {
    const missed = run(start([conj('v1'), quiz('w2')]), playDone, playDone, result('nomatch'), playDone, result('missed'));
    const drill = missed.state.queue.find((i) => i.practice);
    expect(drill).toBeDefined();
    expect(drill!.mode).toBe('conjugate');
    expect(drill!.conj?.cardId).toBe('conj:te:ichidan');
  });

  it('degraded mode goes straight to the reveal', () => {
    const s = run(start([conj('v1')], true, true), playDone, playDone);
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'conj-reveal', wordId: 'v1' }]);
  });
});

describe('connection loss (silent plays)', () => {
  const playSilent: Event = { type: 'playSilent' };
  const holdDone: Event = { type: 'holdDone' };
  const tap = (cmd: 'repeat' | 'skip' | 'pause' | 'resume'): Event => ({ type: 'tap', cmd });
  const rates = (s: Step) => s.effects.filter((e) => e.type === 'rate');

  it('a silent quiz prompt holds instead of listening', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent);
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.offline).toBe('holding');
    expect(s.effects).toEqual([{ type: 'hold', ms: HOLD_RETRY_MS, cue: true }]);
  });

  it('holdDone replays the same prompt, still marked offline (retrying)', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent, holdDone);
    expect(s.state.offline).toBe('retrying');
    expect(s.effects).toEqual([{ type: 'play', kind: 'quiz-prompt', wordId: 'w1' }]);
  });

  it('a second silent attempt holds again without a second cue', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent, holdDone, playSilent);
    expect(s.state.offline).toBe('holding');
    expect(s.effects).toEqual([{ type: 'hold', ms: HOLD_RETRY_MS, cue: false }]);
  });

  it('the retry playing clears offline and listens as normal', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent, holdDone, playDone);
    expect(s.state.offline).toBe(false);
    expect(s.state.phase).toBe('quiz-listening');
    expect(s.effects[0]?.type).toBe('listen');
  });

  it('Repeat while holding retries now', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent, tap('repeat'));
    expect(s.state.offline).toBe('retrying');
    expect(s.effects).toEqual([{ type: 'play', kind: 'quiz-prompt', wordId: 'w1' }]);
  });

  it('Skip while holding advances unrated — no rate, no re-drill, no miss', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playSilent, tap('skip'));
    expect(s.state.idx).toBe(1);
    expect(s.state.offline).toBe(false);
    expect(rates(s)).toEqual([]);
    expect(s.state.counts.missed).toBe(0);
    expect(s.state.queue.some((i) => i.practice)).toBe(false);
  });

  it('a silent teach holds: no echo listen and the word is never marked learned', () => {
    const s = run(start([teach('w1')]), playDone, playSilent);
    expect(s.state.offline).toBe('holding');
    expect(s.effects.some((e) => e.type === 'learned' || e.type === 'listen')).toBe(false);
  });

  it('a silent teach2 holds and replays only the context half', () => {
    const s = run(start([teach('w1')]), playDone, playDone, result('speech'), playSilent, holdDone);
    expect(s.state.phase).toBe('teach2-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'teach2', wordId: 'w1' }]);
  });

  it('a silent intro holds and replays the intro', () => {
    const held = run(start([quiz('w1')]), playSilent);
    expect(held.state.phase).toBe('intro');
    expect(held.state.offline).toBe('holding');
    expect(run(held, holdDone).effects).toEqual([{ type: 'play', kind: 'intro' }]);
  });

  it('a silent reveal advances unrated — the answer was never heard', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('nomatch'), playSilent);
    expect(s.state.idx).toBe(1);
    expect(rates(s)).toEqual([]);
    expect(s.state.counts.missed).toBe(0);
    expect(s.state.queue.some((i) => i.practice)).toBe(false);
  });

  it('the airplane-mode chain cannot start: a silent prompt never reaches self-grade', () => {
    // Before: silent prompt → listen → timeout → silent reveal → self-grade timeout → rated Again.
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playSilent, result('timeout'), playSilent, result('timeout'));
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.idx).toBe(0);
    expect(s.state.offline).toBe('holding');
    expect(rates(s)).toEqual([]);
  });

  it('a silent correct clip still rates good — the answer was judged', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playDone, result('match'), playSilent);
    expect(s.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'good', mode: 'auto' });
    expect(s.state.idx).toBe(1);
    expect(s.state.offline).toBe(false);
  });

  it('a silent pause phrase still lands in paused', () => {
    const s = run(start([quiz('w1')]), playDone, tap('pause'), playSilent);
    expect(s.state.phase).toBe('paused');
    expect(s.state.offline).toBe(false);
  });

  it('holdDone outside a hold is a no-op', () => {
    const s = run(start([quiz('w1')]), playDone, holdDone);
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.effects).toEqual([]);
  });

  it('pausing while holding works, and Resume replays the prompt online', () => {
    const s = run(start([quiz('w1')]), playDone, playSilent, tap('pause'), playDone, tap('resume'), playDone);
    expect(s.state.phase).toBe('quiz-playing');
    expect(s.state.offline).toBe(false);
    expect(s.effects).toEqual([{ type: 'play', kind: 'quiz-prompt', wordId: 'w1' }]);
  });

  it('a new item always starts online', () => {
    const s = run(start([quiz('w1'), quiz('w2')]), playDone, playSilent, holdDone, playDone, result('match'), playDone);
    expect(s.state.idx).toBe(1);
    expect(s.state.offline).toBe(false);
  });
});
