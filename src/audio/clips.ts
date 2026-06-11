import type { Word } from '../types';

export interface ClipItem {
  /** Omitted src = pure pause of gapMs. */
  src?: string;
  /** Silence after this clip, ms. */
  gapMs?: number;
}

const base = () => `${import.meta.env.BASE_URL}audio/`;

export const jaClip = (id: string) => `${base()}ja/${id}.mp3`;
export const enClip = (id: string) => `${base()}en/${id}.mp3`;
export const moraClip = (key: string) => `${base()}mora/${key}.mp3`;
export const phraseClip = (key: string) => `${base()}phrases/${key}.mp3`;

function moraBreakdown(w: Word): ClipItem[] {
  return w.mora.map((m) => (m === 'q' ? { gapMs: 300 } : { src: moraClip(m), gapMs: 350 }));
}

/** "apple … in Japanese … ringo … ri—n—go … ringo … repeat after me: ringo" */
export function teachSequence(w: Word): ClipItem[] {
  return [
    { src: enClip(w.id), gapMs: 400 },
    { src: phraseClip('in-japanese'), gapMs: 300 },
    { src: jaClip(w.id), gapMs: 600 },
    ...moraBreakdown(w),
    { gapMs: 250 },
    { src: jaClip(w.id), gapMs: 500 },
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

/** Answer reveal followed by the self-grade question. */
export function revealSequence(w: Word): ClipItem[] {
  return [
    { src: phraseClip('the-answer-is'), gapMs: 300 },
    { src: jaClip(w.id), gapMs: 500 },
    ...moraBreakdown(w),
    { gapMs: 250 },
    { src: jaClip(w.id), gapMs: 600 },
    { src: phraseClip('did-you-get-it') },
  ];
}

export const phraseSequence = (key: string): ClipItem[] => [{ src: phraseClip(key) }];

/** Every audio URL a session item set can need — used to warm the cache. */
export function sessionClipUrls(words: Word[]): string[] {
  const urls = new Set<string>();
  for (const key of ['in-japanese', 'repeat-after-me', 'how-do-you-say', 'correct', 'the-answer-is', 'did-you-get-it', 'session-start', 'session-done', 'paused', 'resuming']) {
    urls.add(phraseClip(key));
  }
  for (const w of words) {
    urls.add(jaClip(w.id));
    urls.add(enClip(w.id));
    for (const m of w.mora) if (m !== 'q') urls.add(moraClip(m));
  }
  return [...urls];
}
