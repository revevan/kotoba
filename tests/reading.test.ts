import { describe, expect, it } from 'vitest';
import type { IpadicFeatures } from '@patdx/kuromoji';
import { readingFromTokens } from '../src/matching/reading';
import { gradeAnswer } from '../src/matching/match';
import type { Word } from '../src/types';

// Minimal token stub — only the fields readingFromTokens touches.
const tok = (surface_form: string, reading?: string): IpadicFeatures =>
  ({ surface_form, reading }) as IpadicFeatures;

describe('readingFromTokens', () => {
  it('joins katakana readings as hiragana', () => {
    // 一社 → イッシャ → いっしゃ
    expect(readingFromTokens([tok('一社', 'イッシャ')])).toBe('いっしゃ');
    expect(readingFromTokens([tok('医', 'イ'), tok('者', 'シャ')])).toBe('いしゃ');
  });

  it('falls back to the surface form when a token has no reading', () => {
    expect(readingFromTokens([tok('🍎')])).toBe('🍎');
  });
});

describe('reading enables fuzzy match against a kanji transcription', () => {
  const isha: Word = {
    id: 'n5-isha',
    english: 'doctor',
    prompt: 'doctor',
    kana: 'いしゃ',
    written: ['医者', 'いしゃ'],
    romaji: 'isha',
    mora: ['i', 'sha'],
    moraKana: ['い', 'しゃ'],
    tags: [],
  };

  it('the kanji 一社 alone fails, but its reading いっしゃ passes', () => {
    expect(gradeAnswer(['一社'], isha).matched).toBe(false);
    // expandWithReadings would add this reading; it's within the fuzzy tolerance.
    expect(gradeAnswer(['一社', 'いっしゃ'], isha).matched).toBe(true);
  });
});
