import type { Sentence, Word } from '../types';

export interface ClipItem {
  /** Omitted src = pure pause of gapMs. */
  src?: string;
  /** Silence after this clip, ms. */
  gapMs?: number;
}

// Audio corpus base. Production points at the R2 custom domain via
// VITE_AUDIO_BASE_URL (see docs/r2-audio-migration-plan.md); unset — local
// dev, preview, rollback — falls back to same-origin /audio/ from public/.
const AUDIO_BASE = (import.meta.env.VITE_AUDIO_BASE_URL as string | undefined) || `${import.meta.env.BASE_URL}audio/`;
const base = () => AUDIO_BASE;

export const jaClip = (id: string) => `${base()}ja/${id}.mp3`;
export const jaSlowClip = (id: string) => `${base()}ja-slow/${id}.mp3`;
export const enClip = (id: string) => `${base()}en/${id}.mp3`;
export const phraseClip = (key: string) => `${base()}phrases/${key}.mp3`;

// Sentence audio, keyed by sentence id.
export const senClip = (id: string) => `${base()}sen/${id}.mp3`; // full natural sentence
export const senEnClip = (id: string) => `${base()}sen-en/${id}.mp3`; // English translation
export const senPreClip = (id: string) => `${base()}sen-pre/${id}.mp3`; // sentence up to the gap
export const senPostClip = (id: string) => `${base()}sen-post/${id}.mp3`; // sentence after the gap
/** Short beep that fills the cloze gap. A static WAV asset, not TTS. */
export const beepClip = () => `${base()}phrases/beep.wav`;

/** Alternate readings: "you may also hear — ee". Empty when there are none. */
function altReadings(w: Word): ClipItem[] {
  if (!w.alts?.length) return [];
  return [
    { src: phraseClip('also-hear'), gapMs: 200 },
    ...w.alts.flatMap((a) => [{ src: jaClip(a.id), gapMs: 350 }]),
  ];
}

/** "for example … <sentence>" — rung 1 pure input, appended where a word is heard. */
export function exampleTail(sentence: Sentence): ClipItem[] {
  return [{ src: phraseClip('for-example'), gapMs: 80 }, { src: senClip(sentence.id) }];
}

/** "apple … in Japanese … ringo … riiin—gooo … ringo … for example … <sentence>
 *  … repeat after me: ringo" (sentence tail only when one is provided). */
export function teachSequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    { src: enClip(w.id), gapMs: 200 },
    { src: phraseClip('in-japanese'), gapMs: 120 },
    { src: jaClip(w.id), gapMs: 600 },
    { src: jaSlowClip(w.id), gapMs: 600 },
    { src: jaClip(w.id), gapMs: 500 },
    ...altReadings(w),
    ...(sentence ? [...exampleTail(sentence), { gapMs: 500 }] : []),
    { src: phraseClip('repeat-after-me'), gapMs: 120 },
    { src: jaClip(w.id) },
  ];
}

export function quizPromptSequence(w: Word): ClipItem[] {
  return [{ src: phraseClip('how-do-you-say'), gapMs: 80 }, { src: enClip(w.id) }];
}

export function correctSequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    { src: phraseClip('correct'), gapMs: 80 },
    { src: jaClip(w.id), ...(sentence ? { gapMs: 600 } : {}) },
    ...(sentence ? exampleTail(sentence) : []),
  ];
}

/**
 * Rung 2 prompt: hear the sentence with the target word replaced by a beep, then
 * say the missing word. The gap IS the cue. Optionally lead with the English
 * translation for comprehension support.
 */
export function clozePromptSequence(sentence: Sentence, opts: { englishFirst?: boolean } = {}): ClipItem[] {
  return [
    { src: phraseClip('fill-the-blank'), gapMs: 300 },
    ...(opts.englishFirst ? [{ src: senEnClip(sentence.id), gapMs: 500 }] : []),
    { src: senPreClip(sentence.id), gapMs: 120 },
    { src: beepClip(), gapMs: 120 },
    { src: senPostClip(sentence.id) },
  ];
}

/** Rung 3 prompt: "repeat the sentence — <sentence>". The learner says it back. */
export function shadowPromptSequence(sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('repeat-the-sentence'), gapMs: 300 },
    { src: senClip(sentence.id) },
  ];
}

/** Rung 3 reveal: replay the sentence once, then self-grade. */
export function shadowRevealSequence(sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 120 },
    { src: senClip(sentence.id), gapMs: 500 },
    { src: phraseClip('knew-it') },
  ];
}

/** Rung 4 prompt: "make your own sentence with — <word>". */
export function buildPromptSequence(w: Word): ClipItem[] {
  return [
    { src: phraseClip('make-a-sentence'), gapMs: 300 },
    { src: jaClip(w.id) },
  ];
}

/** Rung 4 reveal: model answer is the word's example sentence (when it has one). */
export function buildRevealSequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 120 },
    ...(sentence ? [{ src: phraseClip('for-example'), gapMs: 120 }, { src: senClip(sentence.id), gapMs: 500 }] : [{ src: jaClip(w.id), gapMs: 500 }]),
    { src: phraseClip('knew-it') },
  ];
}

/** Rung 2 reveal: name the word, then play the full natural sentence in context. */
export function clozeRevealSequence(w: Word, sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 80 },
    { src: phraseClip('the-answer-is'), gapMs: 120 },
    { src: jaClip(w.id), gapMs: 500 },
    { src: senClip(sentence.id), gapMs: 500 },
    { src: phraseClip('knew-it') },
  ];
}

/**
 * Wrong/unrecognized answer: clearly signal the miss, give the correct answer
 * once (it was already taught), then prompt for a "got it / missed it" grade.
 * Graded as missed by default unless overridden.
 */
export function revealSequence(w: Word): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 80 },
    { src: phraseClip('the-answer-is'), gapMs: 120 },
    { src: jaClip(w.id), gapMs: 600 },
    { src: phraseClip('knew-it') },
  ];
}

export const phraseSequence = (key: string): ClipItem[] => [{ src: phraseClip(key) }];

/** Every audio URL a session item set can need — used to warm the cache. */
export function sessionClipUrls(words: Word[]): string[] {
  const urls = new Set<string>();
  for (const key of ['in-japanese', 'repeat-after-me', 'also-hear', 'how-do-you-say', 'correct', 'not-quite', 'the-answer-is', 'knew-it', 'session-start', 'session-done', 'paused', 'resuming', 'for-example', 'fill-the-blank', 'repeat-the-sentence', 'make-a-sentence']) {
    urls.add(phraseClip(key));
  }
  for (const w of words) {
    urls.add(jaClip(w.id));
    urls.add(jaSlowClip(w.id));
    urls.add(enClip(w.id));
    for (const a of w.alts ?? []) urls.add(jaClip(a.id));
    // Warm the whole sentence pool — rotation may land on any of them.
    for (const s of w.sentences ?? []) {
      urls.add(senClip(s.id));
      urls.add(senEnClip(s.id));
      urls.add(senPreClip(s.id));
      urls.add(senPostClip(s.id));
    }
  }
  if (words.some((w) => w.sentences?.length)) urls.add(beepClip());
  return [...urls];
}
