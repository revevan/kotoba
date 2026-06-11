import { describe, expect, it } from 'vitest';
import { gradeAnswer, isDontKnow } from '../src/matching/match';
import type { Word } from '../src/types';

const ringo: Word = {
  id: 'n5-test1',
  english: 'apple',
  prompt: 'apple',
  kana: 'りんご',
  written: ['林檎', 'りんご'],
  romaji: 'ringo',
  mora: ['ri', 'n', 'go'],
  moraKana: ['り', 'ん', 'ご'],
  tags: [],
};

const gakkou: Word = {
  id: 'n5-test2',
  english: 'school',
  prompt: 'school',
  kana: 'がっこう',
  written: ['学校', 'がっこう'],
  romaji: 'gakkou',
  mora: ['ga', 'q', 'ko', 'u'],
  moraKana: ['が', 'っ', 'こ', 'う'],
  tags: [],
};

describe('gradeAnswer', () => {
  it('matches the kanji form (typical iOS transcription)', () => {
    expect(gradeAnswer(['林檎'], ringo).matched).toBe(true);
  });
  it('matches hiragana and katakana', () => {
    expect(gradeAnswer(['りんご'], ringo).matched).toBe(true);
    expect(gradeAnswer(['リンゴ'], ringo).matched).toBe(true);
  });
  it('matches with surrounding punctuation/whitespace', () => {
    expect(gradeAnswer([' 林檎。'], ringo).matched).toBe(true);
  });
  it('uses later alternatives', () => {
    expect(gradeAnswer(['頑固', 'りんご'], ringo).matched).toBe(true);
  });
  it('allows one kana of fuzz on short words', () => {
    expect(gradeAnswer(['りんが'], ringo).matched).toBe(true);
  });
  it('rejects different words', () => {
    expect(gradeAnswer(['みかん'], ringo).matched).toBe(false);
    expect(gradeAnswer(['先生'], gakkou).matched).toBe(false);
  });
  it('rejects the word embedded in a longer phrase beyond fuzz', () => {
    expect(gradeAnswer(['りんごをたべます'], ringo).matched).toBe(false);
  });
  it('matches longer words with two kana of fuzz', () => {
    expect(gradeAnswer(['がっこお'], gakkou).matched).toBe(true);
  });
  it('handles empty alternatives', () => {
    expect(gradeAnswer([], ringo).matched).toBe(false);
    expect(gradeAnswer([''], ringo).matched).toBe(false);
  });
});

describe('isDontKnow', () => {
  it('detects わからない in kana and kanji', () => {
    expect(isDontKnow(['わからない'])).toBe(true);
    expect(isDontKnow(['分かりません'])).toBe(true);
  });
  it('ignores answers', () => {
    expect(isDontKnow(['りんご'])).toBe(false);
  });
});
