import { describe, expect, it } from 'vitest';
import { buildQueue, interleaveItems } from '../src/session/queueBuilder';
import type { Item } from '../src/session/machine';

describe('buildQueue', () => {
  it('re-quizzes each taught word later in the session', () => {
    const q = buildQueue(['r1', 'r2', 'r3', 'r4', 'r5', 'r6'], ['n1', 'n2'], 3);
    for (const id of ['n1', 'n2']) {
      const teachIdx = q.findIndex((i) => i.wordId === id && i.mode === 'teach');
      const quizIdx = q.findIndex((i) => i.wordId === id && i.mode === 'quiz');
      expect(teachIdx).toBeGreaterThanOrEqual(0);
      expect(quizIdx).toBeGreaterThan(teachIdx);
    }
    expect(q).toHaveLength(6 + 2 * 2);
  });

  it('works with no reviews', () => {
    const q = buildQueue([], ['n1'], 4);
    expect(q.map((i) => i.mode)).toEqual(['teach', 'quiz']);
  });

  it('works with no new words', () => {
    const q = buildQueue(['r1', 'r2'], []);
    expect(q).toHaveLength(2);
    expect(q.every((i) => i.mode === 'quiz')).toBe(true);
  });

  it('keeps the gap between teach and its quiz', () => {
    const q = buildQueue(['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8'], ['n1'], 4);
    const t = q.findIndex((i) => i.wordId === 'n1' && i.mode === 'teach');
    const z = q.findIndex((i) => i.wordId === 'n1' && i.mode === 'quiz');
    expect(z - t).toBeGreaterThanOrEqual(4);
  });
});

describe('interleaveItems', () => {
  const q = (n: number): Item[] => Array.from({ length: n }, (_, i) => ({ wordId: `r${i}`, mode: 'quiz' as const }));
  const extras = (n: number): Item[] =>
    Array.from({ length: n }, (_, i) => ({ wordId: `v${i}`, mode: 'conjugate' as const, conj: { cardId: `conj:te:g${i}`, form: 'te' as const, group: 'ichidan' as const } }));

  it('spreads extras evenly, never first, preserving order', () => {
    const out = interleaveItems(q(6), extras(2));
    expect(out).toHaveLength(8);
    expect(out[0].mode).toBe('quiz');
    const at = out.map((i, idx) => (i.mode === 'conjugate' ? idx : -1)).filter((i) => i >= 0);
    expect(at).toEqual([2, 5]);
    expect(out.filter((i) => i.mode === 'conjugate').map((i) => i.wordId)).toEqual(['v0', 'v1']);
  });

  it('handles empty inputs', () => {
    expect(interleaveItems(q(3), [])).toHaveLength(3);
    expect(interleaveItems([], extras(2))).toHaveLength(2);
  });

  it('appends when the queue is shorter than the extras', () => {
    const out = interleaveItems(q(1), extras(3));
    expect(out).toHaveLength(4);
    expect(out[0].mode).toBe('quiz');
  });
});
