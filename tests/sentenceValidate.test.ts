import { describe, expect, it } from 'vitest';
import { allowedForms, checkVocab, clozeSurfacePresent, formsOf, isContentPos } from '../tools/sentence-validate';
import type { Deck, Word } from '../src/types';

const w = (id: string, kana: string, written: string[]): Word => ({
  id,
  english: id,
  prompt: id,
  kana,
  written,
  romaji: '',
  mora: [],
  moraKana: [],
  tags: [],
});

const deck: Deck = {
  id: 'd',
  name: 'd',
  words: [w('a', 'ちち', ['父']), w('b', 'いしゃ', ['医者', 'いしゃ']), w('c', 'せんせい', ['先生'])],
};

describe('isContentPos', () => {
  it('treats particles/copula/punctuation as function words', () => {
    expect(isContentPos('助詞')).toBe(false);
    expect(isContentPos('助動詞')).toBe(false);
    expect(isContentPos('記号')).toBe(false);
    expect(isContentPos('名詞')).toBe(true);
    expect(isContentPos('動詞')).toBe(true);
  });
});

describe('allowedForms', () => {
  it('accumulates every form taught up to and including the index', () => {
    expect(allowedForms(deck, 0)).toEqual(new Set(['父', 'ちち']));
    const upToB = allowedForms(deck, 1);
    expect(upToB.has('父')).toBe(true);
    expect(upToB.has('医者')).toBe(true);
    expect(upToB.has('先生')).toBe(false); // not yet taught
  });
});

describe('checkVocab', () => {
  const allowed = allowedForms(deck, 0); // only 父/ちち known
  const target = formsOf(w('b', 'いしゃ', ['医者', 'いしゃ']));

  it('passes when every content word is allowed or the target', () => {
    expect(checkVocab(['父', '医者'], allowed, target)).toEqual({ ok: true, offenders: [] });
  });
  it('flags an out-of-vocabulary content word', () => {
    const res = checkVocab(['父', '先生', '医者'], allowed, target);
    expect(res.ok).toBe(false);
    expect(res.offenders).toEqual(['先生']);
  });
});

describe('clozeSurfacePresent', () => {
  it('requires the cloze answer to occur in the sentence', () => {
    expect(clozeSurfacePresent('父は医者です。', '医者')).toBe(true);
    expect(clozeSurfacePresent('父は医者です。', '先生')).toBe(false);
    expect(clozeSurfacePresent('父は医者です。', '')).toBe(false);
  });
});
