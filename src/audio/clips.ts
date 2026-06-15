import type { Word } from '../types';

export interface ClipItem {
  /** Omitted src = pure pause of gapMs. */
  src?: string;
  /** Silence after this clip, ms. */
  gapMs?: number;
}

const base = () => `${import.meta.env.BASE_URL}audio/`;

export const jaClip = (id: string) => `${base()}ja/${id}.mp3`;
export const jaSlowClip = (id: string) => `${base()}ja-slow/${id}.mp3`;
export const enClip = (id: string) => `${base()}en/${id}.mp3`;
export const phraseClip = (key: string) => `${base()}phrases/${key}.mp3`;

/** Alternate readings: "you may also hear — ee". Empty when there are none. */
function altReadings(w: Word): ClipItem[] {
  if (!w.alts?.length) return [];
  return [
    { src: phraseClip('also-hear'), gapMs: 300 },
    ...w.alts.flatMap((a) => [{ src: jaClip(a.id), gapMs: 350 }]),
  ];
}

/** "apple … in Japanese … ringo … riiin—gooo … ringo … repeat after me: ringo" */
export function teachSequence(w: Word): ClipItem[] {
  return [
    { src: enClip(w.id), gapMs: 400 },
    { src: phraseClip('in-japanese'), gapMs: 300 },
    { src: jaClip(w.id), gapMs: 600 },
    { src: jaSlowClip(w.id), gapMs: 600 },
    { src: jaClip(w.id), gapMs: 500 },
    ...altReadings(w),
    { src: phraseClip('repeat-after-me'), gapMs: 300 },
    { src: jaClip(w.id) },
  ];
}

export function quizPromptSequence(w: Word): ClipItem[] {
  return [{ src: phraseClip('how-do-you-say'), gapMs: 300 }, { src: enClip(w.id) }];
}

export function correctSequence(w: Word): ClipItem[] {
  return [{ src: phraseClip('correct'), gapMs: 250 }, { src: jaClip(w.id) }];
}

/**
 * Wrong/unrecognized answer: clearly signal the miss, give the correct answer,
 * then a brief "say got it if you knew it" override hint. The answer is graded
 * as missed by default unless the user overrides.
 */
export function revealSequence(w: Word): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 250 },
    { src: phraseClip('the-answer-is'), gapMs: 300 },
    { src: jaClip(w.id), gapMs: 500 },
    { src: jaSlowClip(w.id), gapMs: 600 },
    { src: jaClip(w.id), gapMs: 600 },
    { src: phraseClip('knew-it') },
  ];
}

export const phraseSequence = (key: string): ClipItem[] => [{ src: phraseClip(key) }];

/** Every audio URL a session item set can need — used to warm the cache. */
export function sessionClipUrls(words: Word[]): string[] {
  const urls = new Set<string>();
  for (const key of ['in-japanese', 'repeat-after-me', 'also-hear', 'how-do-you-say', 'correct', 'not-quite', 'the-answer-is', 'knew-it', 'session-start', 'session-done', 'paused', 'resuming']) {
    urls.add(phraseClip(key));
  }
  for (const w of words) {
    urls.add(jaClip(w.id));
    urls.add(jaSlowClip(w.id));
    urls.add(enClip(w.id));
    for (const a of w.alts ?? []) urls.add(jaClip(a.id));
  }
  return [...urls];
}
