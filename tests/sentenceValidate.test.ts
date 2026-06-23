import { describe, expect, it } from 'vitest';
import { allowedForms, checkVocab, clozeSurfacePresent, formsOf, isContentPos } from '../tools/sentence-validate';
import type { Token } from '../tools/sentence-validate';

const tok = (pos: string, surface_form: string, basic_form?: string): Token => ({ pos, surface_form, basic_form });
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
    // 父 は 医者 です 。
    const tokens = [tok('名詞', '父'), tok('助詞', 'は'), tok('名詞', '医者'), tok('助動詞', 'です'), tok('記号', '。')];
    expect(checkVocab(tokens, allowed, target)).toEqual({ ok: true, offenders: [] });
  });

  it('flags an out-of-vocabulary content word, ignoring particles/copula', () => {
    const tokens = [tok('名詞', '父'), tok('名詞', '先生'), tok('名詞', '医者')];
    const res = checkVocab(tokens, allowed, target);
    expect(res.ok).toBe(false);
    expect(res.offenders).toEqual(['先生']);
  });

  it('passes a conjugated target verb on its dictionary form (起きます → 起きる)', () => {
    const t = formsOf(w('v', 'おきる', ['起きる', 'おきる']));
    const tokens = [tok('動詞', '起き', '起きる'), tok('助動詞', 'ます')];
    expect(checkVocab(tokens, allowed, t)).toEqual({ ok: true, offenders: [] });
  });

  it('covers a multi-token compound that concatenates to a known word (郵便局 → 郵便+局)', () => {
    const a = allowedForms({ ...deck, words: [...deck.words, w('p', 'ゆうびんきょく', ['郵便局'])] }, 3);
    const tokens = [tok('名詞', '郵便'), tok('名詞', '局', '局'), tok('助詞', 'は')];
    expect(checkVocab(tokens, a, [])).toEqual({ ok: true, offenders: [] });
  });

  it('recovers a mis-parsed single word (いつ → い+つ)', () => {
    // kuromoji splits いつ into い(動詞)+つ(助動詞); the run concatenates to the target.
    const tokens = [tok('動詞', 'い', 'いる'), tok('助動詞', 'つ')];
    expect(checkVocab(tokens, allowed, ['いつ'])).toEqual({ ok: true, offenders: [] });
  });
});

describe('clozeSurfacePresent', () => {
  it('requires the cloze answer to occur in the sentence', () => {
    expect(clozeSurfacePresent('父は医者です。', '医者')).toBe(true);
    expect(clozeSurfacePresent('父は医者です。', '先生')).toBe(false);
    expect(clozeSurfacePresent('父は医者です。', '')).toBe(false);
  });
});
