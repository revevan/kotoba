// English meaning cues for conjugation prompts: "didn't sleep", "is eating",
// "let's go". Built from a verb's short gloss ("to sleep") by template; the
// only real English morphology needed is past tense (irregulars + -ed rules)
// and -ing. Pure — used by tools/gen-conj-cues.ts at build time (cue text +
// TTS input) and testable without content.

import { cueKind, type ConjForm } from './engine';

/** Common irregular English pasts — covers the verbs JLPT glosses use. */
const IRREGULAR_PAST: Record<string, string> = {
  be: 'was', bear: 'bore', beat: 'beat', become: 'became', begin: 'began', bend: 'bent',
  bet: 'bet', bind: 'bound', bite: 'bit', bleed: 'bled', blow: 'blew', break: 'broke',
  bring: 'brought', build: 'built', burst: 'burst', buy: 'bought', catch: 'caught',
  choose: 'chose', cling: 'clung', come: 'came', cost: 'cost', creep: 'crept', cut: 'cut',
  deal: 'dealt', dig: 'dug', do: 'did', draw: 'drew', drink: 'drank', drive: 'drove',
  eat: 'ate', fall: 'fell', feed: 'fed', feel: 'felt', fight: 'fought', find: 'found',
  fit: 'fit', flee: 'fled', fling: 'flung', fly: 'flew', forget: 'forgot',
  forgive: 'forgave', freeze: 'froze', get: 'got', give: 'gave', go: 'went',
  grind: 'ground', grow: 'grew', hang: 'hung', have: 'had', hear: 'heard', hide: 'hid',
  hit: 'hit', hold: 'held', hurt: 'hurt', keep: 'kept', kneel: 'knelt', know: 'knew',
  lay: 'laid', lead: 'led', leave: 'left', lend: 'lent', let: 'let', lie: 'lay',
  light: 'lit', lose: 'lost', make: 'made', mean: 'meant', meet: 'met', pay: 'paid',
  put: 'put', quit: 'quit', read: 'read', ride: 'rode', ring: 'rang', rise: 'rose',
  run: 'ran', say: 'said', see: 'saw', seek: 'sought', sell: 'sold', send: 'sent',
  set: 'set', sew: 'sewed', shake: 'shook', shine: 'shone', shoot: 'shot', show: 'showed',
  shrink: 'shrank', shut: 'shut', sing: 'sang', sink: 'sank', sit: 'sat', sleep: 'slept',
  slide: 'slid', speak: 'spoke', spend: 'spent', spill: 'spilled', spin: 'spun',
  spit: 'spat', split: 'split', spread: 'spread', spring: 'sprang', stand: 'stood',
  steal: 'stole', stick: 'stuck', sting: 'stung', strike: 'struck', sweep: 'swept',
  swim: 'swam', swing: 'swung', take: 'took', teach: 'taught', tear: 'tore',
  tell: 'told', think: 'thought', throw: 'threw', understand: 'understood',
  wake: 'woke', wear: 'wore', weep: 'wept', win: 'won', wind: 'wound', write: 'wrote',
};

const VOWELS = 'aeiou';

/** Monosyllabic CVC check for final-consonant doubling (stop→stopped).
 *  Multi-syllable verbs (open, visit, listen) don't double in the common case. */
function doublesFinal(w: string): boolean {
  if (w.length < 3) return false;
  const [a, b, c] = [w[w.length - 3], w[w.length - 2], w[w.length - 1]];
  if (VOWELS.includes(c) || 'wxy'.includes(c)) return false;
  if (!VOWELS.includes(b) || VOWELS.includes(a)) return false;
  const syllables = (w.match(/[aeiouy]+/g) ?? []).length;
  return syllables === 1;
}

export function pastTense(word: string): string {
  const irr = IRREGULAR_PAST[word];
  if (irr) return irr;
  if (word.endsWith('e')) return word + 'd';
  if (word.endsWith('y') && word.length > 1 && !VOWELS.includes(word[word.length - 2])) return word.slice(0, -1) + 'ied';
  if (doublesFinal(word)) return word + word[word.length - 1] + 'ed';
  return word + 'ed';
}

export function ingForm(word: string): string {
  if (word.endsWith('ie')) return word.slice(0, -2) + 'ying';
  if (word.endsWith('e') && !word.endsWith('ee')) return word.slice(0, -1) + 'ing';
  if (doublesFinal(word)) return word + word[word.length - 1] + 'ing';
  return word + 'ing';
}

/** First word inflected, rest carried: "get up" → "got up" / "getting up". */
const inflectPhrase = (phrase: string, inflect: (w: string) => string): string => {
  const [head, ...rest] = phrase.split(' ');
  return [inflect(head), ...rest].join(' ');
};

/**
 * Base verb phrase from the short gloss: "(humble) to eat" → "eat",
 * "to get up (e.g., from sleeping)" → "get up". Null if the gloss isn't a
 * clean "to …" verb phrase — the caller should skip cue generation.
 */
export function baseVerb(prompt: string): string | null {
  const stripped = prompt
    .replace(/\([^)]*\)/g, ' ') // parentheticals anywhere
    .replace(/\s+/g, ' ')
    .trim()
    .split(/[,;/]/)[0]
    .trim();
  const m = /^to\s+(.+)$/i.exec(stripped);
  return m ? m[1].trim().toLowerCase() : null;
}

/**
 * The English cue for a meaning-cued form ("didn't sleep"). The register tag
 * ("casually"/"politely") is a separate phrase clip appended by the prompt
 * sequence — it is NOT part of this text. Null for label-cued forms.
 */
export function cueFor(base: string, form: ConjForm): string | null {
  if (cueKind(form) === 'label') return null;
  switch (form) {
    case 'masu':
      return base; // "…politely" comes from the register tag
    case 'masen':
    case 'nai':
      return `doesn't ${base}`;
    case 'mashita':
    case 'ta':
      return inflectPhrase(base, pastTense);
    case 'masendeshita':
    case 'nakatta':
      return `didn't ${base}`;
    case 'tai':
      return `want to ${base}`;
    case 'teiru':
      return `is ${inflectPhrase(base, ingForm)}`;
    case 'potential':
      return `can ${base}`;
    case 'volitional':
      return `let's ${base}`;
    case 'imperative':
      return `${base}!`;
    default:
      return null;
  }
}

/** All meaning-cued forms (the ones needing per-verb cue text + audio). */
export const MEANING_CUED_FORMS: ConjForm[] = ['masu', 'masen', 'mashita', 'masendeshita', 'ta', 'nai', 'nakatta', 'tai', 'teiru', 'potential', 'volitional', 'imperative'];
