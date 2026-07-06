import { describe, expect, it } from 'vitest';
import type { Word } from '../src/types';
import { freqRankOf, orderWords, type FreqRanks } from '../tools/word-order';

// Minimal Word factory — only the fields the ordering touches.
const w = (id: string, kana: string, written: string[], tags: string[] = []): Word =>
  ({ id, english: id, prompt: id, kana, written, romaji: '', mora: [], moraKana: [], tags }) as Word;

const genki = (n: number) => [`Genki`, `Genki_Ln.${n}`, 'JLPT_N5'];

// surface → rank; lower = more frequent.
const ranks: FreqRanks = new Map([
  ['水', 10],
  ['会う', 50],
  ['犬', 5],
  ['猫', 200],
]);

describe('freqRankOf', () => {
  it('takes the best rank across written forms and kana', () => {
    expect(freqRankOf(w('a', 'みず', ['水', 'みず']), ranks)).toBe(10);
  });
  it('is Infinity for words absent from the list', () => {
    expect(freqRankOf(w('a', 'ほにゃ', ['本や']), ranks)).toBe(Infinity);
  });
});

describe('orderWords', () => {
  it('puts Genki words first, in lesson order, ahead of everything else', () => {
    const words = [
      w('freq', 'いぬ', ['犬']), // no Genki tag, very common
      w('l3', 'みず', ['水'], genki(3)),
      w('l1', 'あう', ['会う'], genki(1)),
    ];
    expect(orderWords(words, ranks).map((x) => x.id)).toEqual(['l1', 'l3', 'freq']);
  });

  it('orders non-Genki words by frequency, most common first', () => {
    const words = [
      w('neko', 'ねこ', ['猫']), // rank 200
      w('inu', 'いぬ', ['犬']), // rank 5
      w('mizu', 'みず', ['水']), // rank 10
    ];
    expect(orderWords(words, ranks).map((x) => x.id)).toEqual(['inu', 'mizu', 'neko']);
  });

  it('falls back to kana order only for words missing from the frequency list', () => {
    const words = [
      w('b', 'ん', ['んn']), // both absent → kana tiebreak
      w('a', 'あ', ['あa']),
    ];
    expect(orderWords(words, ranks).map((x) => x.id)).toEqual(['a', 'b']);
  });

  it('does not drop or duplicate words', () => {
    const words = [w('x', 'えx', ['猫']), w('y', 'わy', ['水'], genki(2)), w('z', 'をz', [])];
    const out = orderWords(words, ranks);
    expect(new Set(out.map((o) => o.id))).toEqual(new Set(['x', 'y', 'z']));
    expect(out).toHaveLength(3);
  });
});
