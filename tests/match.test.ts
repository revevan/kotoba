import { describe, expect, it } from 'vitest';
import { gradeAnswer, gradeConjugation, isDontKnow } from '../src/matching/match';
import { expectedAnswer } from '../src/conj/engine';
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

describe('gradeConjugation', () => {
  const te = { kana: 'たべて', surface: '食べて' };

  it('accepts the exact kana or written surface', () => {
    expect(gradeConjugation(['たべて'], te).matched).toBe(true);
    expect(gradeConjugation(['食べて'], te).matched).toBe(true);
    expect(gradeConjugation(['タベテ'], te).matched).toBe(true); // katakana transcript
  });

  it('REJECTS the wrong form at edit distance 1 — the ending is the answer', () => {
    expect(gradeConjugation(['たべた'], te).matched).toBe(false);
    expect(gradeConjugation(['たべる'], te).matched).toBe(false);
    expect(gradeConjugation(['たべ'], te).matched).toBe(false);
  });

  it('rejects the answer embedded in a longer utterance', () => {
    expect(gradeConjugation(['たべています'], te).matched).toBe(false);
  });

  it('accepts engine-provided alt readings (ら抜き potential)', () => {
    const pot = { kana: 'たべられる', surface: '食べられる', altKana: ['たべれる'] };
    expect(gradeConjugation(['たべれる'], pot).matched).toBe(true);
    expect(gradeConjugation(['たべられる'], pot).matched).toBe(true);
  });
});

describe('gradeConjugation with expectedAnswer (register handling)', () => {
  const 食べる = { kana: 'たべる', surface: '食べる', subclass: 'ichidan' as const };

  it('accepts the polite twin on untagged meaning cues', () => {
    const tai = expectedAnswer(食べる, 'tai');
    expect(gradeConjugation(['たべたいです'], tai).matched).toBe(true);
    expect(gradeConjugation(['たべたい'], tai).matched).toBe(true);
  });

  it('rejects the other register when the cue tagged one', () => {
    const nai = expectedAnswer(食べる, 'nai'); // cue said "casually"
    expect(gradeConjugation(['たべません'], nai).matched).toBe(false);
    expect(gradeConjugation(['たべない'], nai).matched).toBe(true);
    const masen = expectedAnswer(食べる, 'masen'); // cue said "politely"
    expect(gradeConjugation(['たべない'], masen).matched).toBe(false);
    expect(gradeConjugation(['たべません'], masen).matched).toBe(true);
  });
});
