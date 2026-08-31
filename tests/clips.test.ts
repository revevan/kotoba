import { describe, expect, it } from 'vitest';
import { splitAtCloze } from '../src/audio/clozeSplit';
import { clozePromptSequence, revealSequence, sessionClipUrls, shadowRevealSequence, srErrorIntro } from '../src/audio/clips';
import type { Sentence, Word } from '../src/types';

const sen = (over: Partial<Sentence> = {}): Sentence => ({
  id: 's1',
  textJa: '父は毎日働きます。',
  readingKana: 'ちちはまいにちはたらきます。',
  textEn: 'My father works every day.',
  clozeSurface: '毎日',
  clozeReading: 'まいにち',
  ...over,
});

const word = (sentences: Sentence[]): Word => ({
  id: 'w1',
  english: 'every day',
  prompt: 'every day',
  kana: 'まいにち',
  written: ['毎日'],
  romaji: 'mainichi',
  mora: [],
  moraKana: [],
  tags: [],
  sentences,
});

const srcs = (items: Array<{ src?: string }>) => items.map((i) => i.src).filter((s): s is string => !!s);

describe('splitAtCloze', () => {
  it('splits around a mid-sentence surface, trimmed', () => {
    expect(splitAtCloze(sen())).toEqual({ pre: '父は', post: '働きます。' });
  });

  it('sentence-start surface yields an empty pre', () => {
    const s = sen({ textJa: '毎日働きます。', clozeSurface: '毎日' });
    expect(splitAtCloze(s)).toEqual({ pre: '', post: '働きます。' });
  });

  it('sentence-end surface yields an empty post', () => {
    const s = sen({ textJa: '働くのは毎日', clozeSurface: '毎日' });
    expect(splitAtCloze(s)).toEqual({ pre: '働くのは', post: '' });
  });

  it('splits on the speak override when it contains the surface', () => {
    const s = sen({ speak: '父は毎日、働きます。' });
    expect(splitAtCloze(s)).toEqual({ pre: '父は', post: '、働きます。' });
  });

  it('falls back to textJa when the override rewrote the surface', () => {
    const s = sen({ speak: 'ちちはマイニチはたらきます。' });
    expect(splitAtCloze(s)).toEqual({ pre: '父は', post: '働きます。' });
  });

  it('returns null when the surface is in neither source', () => {
    expect(splitAtCloze(sen({ clozeSurface: '猫' }))).toBeNull();
  });
});

describe('clozePromptSequence', () => {
  it('mid-sentence cloze plays pre, beep, post', () => {
    const played = srcs(clozePromptSequence(sen()));
    expect(played.some((s) => s.includes('sen-pre/s1'))).toBe(true);
    expect(played.some((s) => s.endsWith('beep.wav'))).toBe(true);
    expect(played.some((s) => s.includes('sen-post/s1'))).toBe(true);
  });

  it('sentence-start cloze skips the sen-pre clip (it was never generated)', () => {
    const played = srcs(clozePromptSequence(sen({ textJa: '毎日働きます。' })));
    expect(played.some((s) => s.includes('sen-pre/'))).toBe(false);
    expect(played.some((s) => s.endsWith('beep.wav'))).toBe(true);
    expect(played.some((s) => s.includes('sen-post/s1'))).toBe(true);
  });

  it('sentence-end cloze skips the sen-post clip', () => {
    const played = srcs(clozePromptSequence(sen({ textJa: '働くのは毎日', clozeSurface: '毎日' })));
    expect(played.some((s) => s.includes('sen-pre/s1'))).toBe(true);
    expect(played.some((s) => s.includes('sen-post/'))).toBe(false);
  });

  it('unsplittable sentence plays the beep alone between prompt phrases', () => {
    const played = srcs(clozePromptSequence(sen({ clozeSurface: '猫' })));
    expect(played.some((s) => s.includes('sen-pre/') || s.includes('sen-post/'))).toBe(false);
    expect(played.some((s) => s.endsWith('beep.wav'))).toBe(true);
  });

  it('englishFirst still leads with the translation clip', () => {
    const played = srcs(clozePromptSequence(sen(), { englishFirst: true }));
    expect(played[1]).toContain('sen-en/s1');
  });
});

describe('srErrorIntro', () => {
  it('swaps the "not quite" intro for the connection phrase, keeping the rest', () => {
    const w = word([]);
    const reveal = srErrorIntro(revealSequence(w));
    expect(reveal[0].src).toContain('couldnt-check');
    expect(reveal[0].gapMs).toBe(revealSequence(w)[0].gapMs);
    expect(reveal.slice(1)).toEqual(revealSequence(w).slice(1));

    const shadow = srErrorIntro(shadowRevealSequence(sen()));
    expect(shadow[0].src).toContain('couldnt-check');
    expect(shadow.some((i) => i.src?.includes('sen/s1'))).toBe(true);
  });
});

describe('sessionClipUrls', () => {
  it('warms only the sentence-half clips that exist', () => {
    const startCloze = sen({ id: 's2', textJa: '毎日働きます。' });
    const urls = sessionClipUrls([word([sen(), startCloze])]);
    expect(urls.some((u) => u.includes('sen-pre/s1'))).toBe(true);
    expect(urls.some((u) => u.includes('sen-post/s1'))).toBe(true);
    expect(urls.some((u) => u.includes('sen/s2'))).toBe(true);
    expect(urls.some((u) => u.includes('sen-en/s2'))).toBe(true);
    expect(urls.some((u) => u.includes('sen-pre/s2'))).toBe(false);
    expect(urls.some((u) => u.includes('sen-post/s2'))).toBe(true);
  });
});
