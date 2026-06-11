import { describe, expect, it } from 'vitest';
import { moraClipKeys, segmentMora } from '../src/matching/mora';

describe('segmentMora', () => {
  it('splits plain kana', () => {
    expect(segmentMora('りんご')).toEqual(['り', 'ん', 'ご']);
  });
  it('keeps digraphs as one mora', () => {
    expect(segmentMora('きょう')).toEqual(['きょ', 'う']);
    expect(segmentMora('びょういん')).toEqual(['びょ', 'う', 'い', 'ん']);
  });
  it('treats っ as its own mora', () => {
    expect(segmentMora('がっこう')).toEqual(['が', 'っ', 'こ', 'う']);
  });
  it('treats ー as its own mora', () => {
    expect(segmentMora('こーひー')).toEqual(['こ', 'ー', 'ひ', 'ー']);
  });
});

describe('moraClipKeys', () => {
  it('maps to romaji clip keys', () => {
    expect(moraClipKeys(['り', 'ん', 'ご'])).toEqual(['ri', 'n', 'go']);
  });
  it('maps digraphs', () => {
    expect(moraClipKeys(['きょ', 'う'])).toEqual(['kyo', 'u']);
  });
  it('maps っ to the pause key', () => {
    expect(moraClipKeys(['が', 'っ', 'こ', 'う'])).toEqual(['ga', 'q', 'ko', 'u']);
  });
  it('maps ー to the previous vowel', () => {
    expect(moraClipKeys(['こ', 'ー', 'ひ', 'ー'])).toEqual(['ko', 'o', 'hi', 'i']);
  });
});
