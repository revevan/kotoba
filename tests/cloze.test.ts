import { describe, expect, it } from 'vitest';
import { initialState, reduce, type Event, type Item, type ListenOutcome, type Step } from '../src/session/machine';
import { chooseExerciseType, pickSentence } from '../src/session/selectExercise';
import { buildQueue } from '../src/session/queueBuilder';
import { gradeCloze } from '../src/matching/match';
import { State, type Card } from 'ts-fsrs';
import type { Sentence, Word } from '../src/types';

const cloze = (id: string, sentenceId = 's1'): Item => ({ wordId: id, mode: 'cloze', sentenceId });

function start(queue: Item[]): Step {
  return reduce(initialState(), { type: 'start', queue, voiceEcho: true, degraded: false });
}
function run(step: Step, ...events: Event[]): Step {
  let cur = step;
  for (const ev of events) cur = reduce(cur.state, ev);
  return cur;
}
const playDone: Event = { type: 'playDone' };
const result = (outcome: ListenOutcome, recognized?: string): Event => ({ type: 'listenResult', outcome, recognized });

const sentence = (id: string, surface = '医者', reading = 'いしゃ'): Sentence => ({
  id,
  textJa: `父は${surface}です。`,
  readingKana: `ちちは${reading}です。`,
  textEn: 'My father is a doctor.',
  clozeSurface: surface,
  clozeReading: reading,
});

const word = (id: string, sentences?: Sentence[]): Word => ({
  id,
  english: 'doctor',
  prompt: 'doctor',
  kana: 'いしゃ',
  written: ['医者', 'いしゃ'],
  romaji: 'isha',
  mora: ['i', 'sha'],
  moraKana: ['い', 'しゃ'],
  sentences,
  tags: [],
});

function card(state: State, scheduled_days: number, reps = 0): Card {
  return { state, scheduled_days, reps, due: new Date(), stability: 0, difficulty: 0, elapsed_days: 0, lapses: 0, last_review: undefined } as unknown as Card;
}

describe('cloze machine flow', () => {
  it('enters cloze-playing and carries the sentenceId', () => {
    const s = run(start([cloze('w1')]), playDone);
    expect(s.state.phase).toBe('cloze-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'cloze-prompt', wordId: 'w1', sentenceId: 's1' }]);
  });

  it('plays the gapped prompt then listens for the answer', () => {
    const s = run(start([cloze('w1')]), playDone, playDone);
    expect(s.state.phase).toBe('cloze-listening');
    expect(s.effects).toEqual([{ type: 'listen', kind: 'cloze-answer', wordId: 'w1', sentenceId: 's1' }]);
  });

  it('a matched answer rates good and plays correct with the sentence tail', () => {
    const s = run(start([cloze('w1')]), playDone, playDone, result('match', '医者'));
    expect(s.state.phase).toBe('correct-playing');
    expect(s.state.counts.correct).toBe(1);
    expect(s.effects).toEqual([
      { type: 'rate', wordId: 'w1', rating: 'good', mode: 'auto', recognized: '医者' },
      { type: 'play', kind: 'correct', wordId: 'w1', sentenceId: 's1' },
    ]);
  });

  it('a miss reveals the full sentence, then self-grades', () => {
    const s = run(start([cloze('w1')]), playDone, playDone, result('nomatch'));
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'cloze-reveal', wordId: 'w1', sentenceId: 's1' }]);

    const s2 = run(s, playDone, result('missed'));
    expect(s2.effects[0]).toEqual({ type: 'rate', wordId: 'w1', rating: 'again', mode: 'self' });
  });

  it('degraded mode skips the listen and goes straight to the cloze reveal', () => {
    const s0 = reduce(initialState(), { type: 'start', queue: [cloze('w1')], voiceEcho: true, degraded: true });
    const s = run(s0, playDone, playDone);
    expect(s.state.phase).toBe('reveal-playing');
    expect(s.effects).toEqual([{ type: 'play', kind: 'cloze-reveal', wordId: 'w1', sentenceId: 's1' }]);
  });
});

describe('chooseExerciseType', () => {
  const w = word('w1', [sentence('s1')]);
  const cfg = { enableCloze: true, minIntervalDays: 7 };

  it('mature Review card with a sentence → cloze', () => {
    expect(chooseExerciseType(card(State.Review, 10), w, cfg)).toBe('cloze');
  });
  it('Review card below the interval threshold → quiz', () => {
    expect(chooseExerciseType(card(State.Review, 3), w, cfg)).toBe('quiz');
  });
  it('New/Learning cards → quiz', () => {
    expect(chooseExerciseType(card(State.New, 0), w, cfg)).toBe('quiz');
    expect(chooseExerciseType(card(State.Learning, 30), w, cfg)).toBe('quiz');
  });
  it('no sentence → quiz even when mature', () => {
    expect(chooseExerciseType(card(State.Review, 30), word('w1'), cfg)).toBe('quiz');
  });
  it('flag off → quiz', () => {
    expect(chooseExerciseType(card(State.Review, 30), w, { enableCloze: false, minIntervalDays: 7 })).toBe('quiz');
  });
  it('forceMature (?cloze=1) bypasses the maturity gate but still needs a sentence', () => {
    const forced = { enableCloze: true, minIntervalDays: 7, forceMature: true };
    expect(chooseExerciseType(card(State.New, 0), w, forced)).toBe('cloze');
    expect(chooseExerciseType(undefined, w, forced)).toBe('cloze');
    expect(chooseExerciseType(card(State.New, 0), word('w1'), forced)).toBe('quiz'); // no sentence
  });
});

describe('pickSentence rotation', () => {
  const w = word('w1', [sentence('a'), sentence('b'), sentence('c')]);
  it('rotates deterministically through the pool', () => {
    expect(pickSentence(w, 0)?.id).toBe('a');
    expect(pickSentence(w, 1)?.id).toBe('b');
    expect(pickSentence(w, 2)?.id).toBe('c');
    expect(pickSentence(w, 3)?.id).toBe('a'); // wraps
  });
  it('returns undefined with no pool', () => {
    expect(pickSentence(word('w1'), 0)).toBeUndefined();
  });
});

describe('gradeCloze', () => {
  const s = sentence('s1', '医者', 'いしゃ');
  it('accepts the kanji surface and the reading', () => {
    expect(gradeCloze(['医者'], s).matched).toBe(true);
    expect(gradeCloze(['いしゃ'], s).matched).toBe(true);
  });
  it('rejects a different word', () => {
    expect(gradeCloze(['せんせい'], s).matched).toBe(false);
  });
});

describe('buildQueue decoration', () => {
  it('applies mode + sentenceId from the decorator', () => {
    const q = buildQueue(['r1', 'r2'], [], 4, (id, role) =>
      role === 'review' && id === 'r1' ? { mode: 'cloze', sentenceId: 'sx' } : {},
    );
    expect(q[0]).toEqual({ wordId: 'r1', mode: 'cloze', sentenceId: 'sx' });
    expect(q[1]).toEqual({ wordId: 'r2', mode: 'quiz' });
  });

  it('decorates teach and its in-session requiz', () => {
    const q = buildQueue([], ['n1'], 1, (_id, role) => (role === 'teach' ? { sentenceId: 'st' } : {}));
    const teach = q.find((i) => i.mode === 'teach');
    expect(teach).toEqual({ wordId: 'n1', mode: 'teach', sentenceId: 'st' });
  });
});
