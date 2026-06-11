import { describe, expect, it } from 'vitest';
import { buildQueue } from '../src/session/queueBuilder';

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
