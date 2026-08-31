import { formRegister, labelPromptSegments, meaningSegments, ruleFor, segKey, type ConjForm, type PatternGroup, type SpeechSeg } from '../conj/engine';
import type { ItemConj } from '../session/machine';
import type { Sentence, Word } from '../types';
import { splitAtCloze } from './clozeSplit';

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

/** Announcer locale: 'ja' swaps every narrator phrase for the phrases-ja/ set.
 *  Word/sentence clips and the beep are locale-independent. */
let phraseDir = 'phrases';
export function setPhraseLocale(locale: 'en' | 'ja'): void {
  phraseDir = locale === 'ja' ? 'phrases-ja' : 'phrases';
}
export const phraseLocale = (): 'en' | 'ja' => (phraseDir === 'phrases-ja' ? 'ja' : 'en');

export const phraseClip = (key: string) => `${base()}${phraseDir}/${key}.mp3`;

// Sentence audio, keyed by sentence id.
export const senClip = (id: string) => `${base()}sen/${id}.mp3`; // full natural sentence
export const senEnClip = (id: string) => `${base()}sen-en/${id}.mp3`; // English translation
export const senPreClip = (id: string) => `${base()}sen-pre/${id}.mp3`; // sentence up to the gap
export const senPostClip = (id: string) => `${base()}sen-post/${id}.mp3`; // sentence after the gap
/** Short beep that fills the cloze gap. A static WAV asset, not TTS. */
export const beepClip = () => `${base()}phrases/beep.wav`;

/** Pre-generated conjugated form of a verb (see tools/gen-audio.ts). */
export const jaConjClip = (wordId: string, form: ConjForm) => `${base()}ja-conj/${wordId}-${form}.mp3`;
/** Spoken English meaning cue for a verb × form ("didn't sleep"). */
export const enConjClip = (wordId: string, form: ConjForm) => `${base()}en-conj/${wordId}-${form}.mp3`;
/** Register tag appended to ambiguous meaning cues ("…casually?"). */
export const registerClip = (register: 'casual' | 'polite') => phraseClip(`register-${register}`);

/** Segment clips are locale-independent (always phrases/): the EN half is the
 *  announcer, the JA half is the Japanese voice — same for both locales. */
const segClip = (seg: SpeechSeg) => `${base()}phrases/${segKey(seg)}.mp3`;

/**
 * A rule/meaning line as stitched audio: EN fragments in the announcer voice,
 * kana in the Japanese voice — the app's normal "In Japanese: … りんご"
 * pattern, so the Japanese terms actually sound Japanese.
 */
export function segmentSequence(segs: SpeechSeg[], trailingGapMs = 0): ClipItem[] {
  const items: ClipItem[] = segs.map((s) => (s.lang === 'pause' ? { gapMs: 280 } : { src: segClip(s), gapMs: 140 }));
  if (items.length > 0) items[items.length - 1] = { ...items[items.length - 1], gapMs: trailingGapMs };
  return items;
}

/** Spoken one-line rule for a pattern, stitched EN/JA. */
export const ruleClips = (form: ConjForm, group: PatternGroup, trailingGapMs = 0) => segmentSequence(ruleFor(form, group).segments, trailingGapMs);
/** Spoken meaning of a form ("This is the plain negative — …"), stitched. */
export const meaningClips = (form: ConjForm, trailingGapMs = 0) => segmentSequence(meaningSegments(form), trailingGapMs);

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

/** Teach part 1 — "apple … in Japanese … ringo … riiin—gooo … repeat after me:
 *  ringo". Kept short so the learner speaks early: retrieval/production
 *  research favors more speaking over extra passive listens. Context and
 *  alternate readings follow in teach2Sequence, after the first echo. */
export function teachSequence(w: Word): ClipItem[] {
  return [
    { src: enClip(w.id), gapMs: 200 },
    { src: phraseClip('in-japanese'), gapMs: 120 },
    { src: jaClip(w.id), gapMs: 450 },
    { src: jaSlowClip(w.id), gapMs: 450 },
    { src: phraseClip('repeat-after-me'), gapMs: 120 },
    { src: jaClip(w.id) },
  ];
}

/** Teach part 2, after the first echo — "you may also hear … for example …
 *  <sentence> … one more time: ringo" — then the second echo. The sentence
 *  between the two productions spaces them (within-session lag). */
export function teach2Sequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    ...altReadings(w),
    ...(sentence ? [...exampleTail(sentence), { gapMs: 300 }] : []),
    { src: phraseClip('one-more-time'), gapMs: 120 },
    { src: jaClip(w.id) },
  ];
}

export function quizPromptSequence(w: Word): ClipItem[] {
  return [{ src: phraseClip('how-do-you-say'), gapMs: 80 }, { src: enClip(w.id) }];
}

export function correctSequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    { src: phraseClip('correct'), gapMs: 80 },
    { src: jaClip(w.id), ...(sentence ? { gapMs: 400 } : {}) },
    ...(sentence ? exampleTail(sentence) : []),
  ];
}

/**
 * Rung 2 prompt: hear the sentence with the target word replaced by a beep, then
 * say the missing word. The gap IS the cue. Optionally lead with the English
 * translation for comprehension support.
 */
export function clozePromptSequence(sentence: Sentence, opts: { englishFirst?: boolean } = {}): ClipItem[] {
  // Only the halves gen-audio synthesized exist — a cloze at the sentence edge
  // has no pre (or post) clip, and requesting it is a guaranteed 404.
  const split = splitAtCloze(sentence);
  return [
    { src: phraseClip('fill-the-blank'), gapMs: 150 },
    ...(opts.englishFirst ? [{ src: senEnClip(sentence.id), gapMs: 250 }] : []),
    ...(split?.pre ? [{ src: senPreClip(sentence.id), gapMs: 50 }] : []),
    { src: beepClip(), gapMs: 50 },
    ...(split?.post ? [{ src: senPostClip(sentence.id) }] : []),
  ];
}

/** Rung 3 prompt: "repeat the sentence — <sentence>". The learner says it back. */
export function shadowPromptSequence(sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('repeat-the-sentence'), gapMs: 150 },
    { src: senClip(sentence.id) },
  ];
}

/** Rung 3 reveal: replay the sentence once, then self-grade. */
export function shadowRevealSequence(sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 120 },
    { src: senClip(sentence.id), gapMs: 350 },
    { src: phraseClip('knew-it') },
  ];
}

/** Rung 4 prompt: "make your own sentence with — <word>". */
export function buildPromptSequence(w: Word): ClipItem[] {
  return [
    { src: phraseClip('make-a-sentence'), gapMs: 150 },
    { src: jaClip(w.id) },
  ];
}

/** Rung 4 reveal: model answer is the word's example sentence (when it has one). */
export function buildRevealSequence(w: Word, sentence?: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 120 },
    ...(sentence ? [{ src: phraseClip('for-example'), gapMs: 120 }, { src: senClip(sentence.id), gapMs: 350 }] : [{ src: jaClip(w.id), gapMs: 350 }]),
    { src: phraseClip('knew-it') },
  ];
}

/** Rung 2 reveal: name the word, then play the full natural sentence in context. */
export function clozeRevealSequence(w: Word, sentence: Sentence): ClipItem[] {
  return [
    { src: phraseClip('not-quite'), gapMs: 80 },
    { src: phraseClip('the-answer-is'), gapMs: 120 },
    { src: jaClip(w.id), gapMs: 350 },
    { src: senClip(sentence.id), gapMs: 350 },
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
    { src: jaClip(w.id), gapMs: 400 },
    { src: phraseClip('knew-it') },
  ];
}

/**
 * Conjugation prompt. Meaning-first when the verb has an English cue for the
 * form: "How do you say — didn't sleep — casually? … 寝る" (meaning→form
 * production, like real speech). Forms without a clean English meaning
 * (te/conditionals/passive/causative) fall back to the label prompt:
 * "Say the te-form of — 寝る".
 *
 * An introduction (first practice of the pattern) leads with what the form
 * MEANS and its rule, so the first attempt is guided, not a cold guess.
 */
export function conjPromptSequence(w: Word, conj: ItemConj): ClipItem[] {
  // Generous pauses: the intro is two dense sentences — breathing room between
  // "what it means", "how it's built", and the actual question keeps it from
  // feeling like a wall of words.
  const intro: ClipItem[] = conj.introduce
    ? [...meaningClips(conj.form, 700), ...ruleClips(conj.form, conj.group, 900)]
    : [];
  const cue = w.conjCues?.[conj.form];
  if (!cue) {
    // Label prompt. Stitched EN/JA for the EN announcer ("Say the — て — form
    // of —"); the JA announcer's own clip is already native Japanese.
    const label = labelPromptSegments(conj.form);
    const prompt: ClipItem[] =
      label && phraseLocale() === 'en'
        ? segmentSequence(label, 120)
        : [{ src: phraseClip(`conj-${conj.form}`), gapMs: 120 }];
    return [...intro, ...prompt, { src: jaClip(w.id) }];
  }
  const register = formRegister(conj.form);
  return [
    ...intro,
    { src: phraseClip('how-do-you-say'), gapMs: 80 },
    { src: enConjClip(w.id, conj.form), gapMs: register ? 60 : 250 },
    ...(register ? [{ src: registerClip(register), gapMs: 250 }] : []),
    { src: jaClip(w.id) },
  ];
}

/** Conjugation correct: confirm, then replay the conjugated form once. */
export function conjCorrectSequence(w: Word, conj: ItemConj): ClipItem[] {
  return [
    { src: phraseClip('correct'), gapMs: 80 },
    { src: jaConjClip(w.id, conj.form) },
  ];
}

/** Conjugation reveal: the answer, then the one-line rule — the "chart" lives
 *  here, as feedback at the point of error. Label-cued forms also restate what
 *  the form means (their prompt couldn't convey it). */
export function conjRevealSequence(w: Word, conj: ItemConj): ClipItem[] {
  const labelCued = !w.conjCues?.[conj.form];
  return [
    { src: phraseClip('not-quite'), gapMs: 80 },
    { src: phraseClip('the-answer-is'), gapMs: 120 },
    { src: jaConjClip(w.id, conj.form), gapMs: 650 },
    ...(labelCued ? meaningClips(conj.form, 550) : []),
    ...ruleClips(conj.form, conj.group, 600),
    { src: phraseClip('knew-it') },
  ];
}

export const phraseSequence = (key: string): ClipItem[] => [{ src: phraseClip(key) }];

/** Reveal intro for an SR/mic-failure reveal: every reveal sequence opens with
 *  "Not quite." — a grading claim that's a lie when the answer was never
 *  judged. Swap in "Couldn't check that one." and keep the rest of the reveal
 *  (answer + self-grade prompt) intact. */
export function srErrorIntro(seq: ClipItem[]): ClipItem[] {
  return [{ ...seq[0], src: phraseClip('couldnt-check') }, ...seq.slice(1)];
}

/** Every audio URL a session item set can need — used to warm the cache. */
export function sessionClipUrls(words: Word[]): string[] {
  const urls = new Set<string>();
  for (const key of ['in-japanese', 'repeat-after-me', 'one-more-time', 'also-hear', 'how-do-you-say', 'correct', 'not-quite', 'couldnt-check', 'the-answer-is', 'knew-it', 'session-start', 'session-done', 'paused', 'resuming', 'for-example', 'fill-the-blank', 'repeat-the-sentence', 'make-a-sentence']) {
    urls.add(phraseClip(key));
  }
  for (const w of words) {
    urls.add(jaClip(w.id));
    urls.add(jaSlowClip(w.id));
    urls.add(enClip(w.id));
    for (const a of w.alts ?? []) urls.add(jaClip(a.id));
    // Warm the whole sentence pool — rotation may land on any of them. Same
    // split gate as clozePromptSequence: only existing halves get warmed.
    for (const s of w.sentences ?? []) {
      urls.add(senClip(s.id));
      urls.add(senEnClip(s.id));
      const split = splitAtCloze(s);
      if (split?.pre) urls.add(senPreClip(s.id));
      if (split?.post) urls.add(senPostClip(s.id));
    }
  }
  if (words.some((w) => w.sentences?.length)) urls.add(beepClip());
  return [...urls];
}

/** Audio a session's conjugation items can need (prompt/rule/answer clips). */
export function conjClipUrls(items: Array<{ wordId: string; conj?: ItemConj }>, words: Map<string, Word>): string[] {
  const urls = new Set<string>();
  const addSegs = (segs: SpeechSeg[] | null) => {
    for (const s of segs ?? []) if (s.lang !== 'pause') urls.add(segClip(s));
  };
  for (const it of items) {
    if (!it.conj) continue;
    const { form, group } = it.conj;
    addSegs(ruleFor(form, group).segments);
    addSegs(meaningSegments(form));
    urls.add(jaConjClip(it.wordId, form));
    urls.add(jaClip(it.wordId));
    const cue = words.get(it.wordId)?.conjCues?.[form];
    if (cue) {
      urls.add(phraseClip('how-do-you-say'));
      urls.add(enConjClip(it.wordId, form));
      const register = formRegister(form);
      if (register) urls.add(registerClip(register));
    } else {
      addSegs(labelPromptSegments(form));
      urls.add(phraseClip(`conj-${form}`));
    }
  }
  return [...urls];
}
