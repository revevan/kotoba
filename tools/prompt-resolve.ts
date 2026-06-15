// Resolves spoken prompts so each quiz is answerable, and folds true synonyms.
//
// Many words collapse to the same short English ("yes" is both はい and ええ;
// "to play" is both あそぶ and ひく). Two distinct situations hide in there:
//
//   - True synonyms — identical meaning, different reading (はい/ええ). Keep the
//     most common as the quiz card, attach the rest as `alts` (taught aloud and
//     accepted when grading), and drop their separate cards.
//   - Different words that merely share a bare prompt (あそぶ "have fun" vs ひく
//     "play an instrument"). Disambiguate by giving each a richer prompt; they
//     are NOT cross-accepted.
//
// The discriminator: words whose *first meaning clause* (parentheticals kept)
// is identical are treated as synonyms; otherwise they are distinct.

import type { AltReading, Word } from '../src/types';

/** First meaning clause — split on ; or , but never inside parentheses. */
export function firstClause(s: string): string {
  let depth = 0;
  let out = '';
  for (const ch of s) {
    if (ch === '(') depth++;
    else if (ch === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0 && (ch === ';' || ch === ',')) break;
    out += ch;
  }
  return out.trim();
}

const ABBREV: [RegExp, string][] = [
  [/\(\s*v\.?t\.?\s*\)/gi, '(transitive)'],
  [/\(\s*v\.?i\.?\s*\)/gi, '(intransitive)'],
  [/\(\s*hon\.?\s*\)/gi, '(honorific)'],
  [/\(\s*uk\s*\)/gi, ''],
];

function expandAbbrev(s: string): string {
  let r = s;
  for (const [re, to] of ABBREV) r = r.replace(re, to);
  return r.replace(/\s+/g, ' ').trim();
}

/** Keep prompts speakable: trim very long clauses at a word boundary. */
function softCap(s: string, max = 42): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const sp = cut.lastIndexOf(' ');
  return (sp > 8 ? cut.slice(0, sp) : cut).trim();
}

/** Disambiguating prompt: first clause with its parenthetical kept. */
export function richPrompt(english: string): string {
  return softCap(expandAbbrev(firstClause(english)) || english.trim());
}

/** Clean prompt: first clause, parentheticals removed. */
export function barePrompt(english: string): string {
  const bare = expandAbbrev(firstClause(english).replace(/\([^)]*\)/g, ''));
  return softCap(bare || english.trim());
}

function genkiLesson(tags: string[]): number {
  for (const t of tags) {
    const m = /^Genki_Ln\.(\d+)$/.exec(t);
    if (m) return Number(m[1]);
  }
  return 99;
}

/**
 * Lower sorts first = preferred primary. Genki order is the best available
 * commonness signal (earlier lessons = more basic/frequent); then richer
 * tagging, then the shorter reading, then a stable tiebreak.
 */
function primaryRank(w: Word): [number, number, number, string] {
  return [genkiLesson(w.tags), -w.tags.length, w.kana.length, w.kana];
}

function cmpRank(a: Word, b: Word): number {
  const ra = primaryRank(a);
  const rb = primaryRank(b);
  for (let i = 0; i < 3; i++) {
    if (ra[i] !== rb[i]) return (ra[i] as number) - (rb[i] as number);
  }
  return ra[3] < rb[3] ? -1 : ra[3] > rb[3] ? 1 : 0;
}

function groupBy<T>(items: T[], key: (t: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const it of items) {
    const k = key(it);
    const g = m.get(k);
    if (g) g.push(it);
    else m.set(k, [it]);
  }
  return m;
}

/**
 * Mutates words: sets `prompt`, attaches `alts`, and widens `written` on the
 * primaries to accept alternate readings. Returns the surviving words (folded
 * synonym cards removed), in their original order.
 */
export function resolvePrompts(words: Word[]): Word[] {
  const survivors = new Set<Word>();

  for (const group of groupBy(words, (w) => barePrompt(w.english).toLowerCase()).values()) {
    if (group.length === 1) {
      group[0].prompt = barePrompt(group[0].english);
      survivors.add(group[0]);
      continue;
    }

    // Within a shared bare prompt, identical rich prompts == true synonyms.
    const primaries: Word[] = [];
    for (const cluster of groupBy(group, (w) => richPrompt(w.english).toLowerCase()).values()) {
      const [primary, ...alts] = [...cluster].sort(cmpRank);
      if (alts.length) {
        // Every alternate's written forms are accepted when grading...
        primary.written = [...new Set([...primary.written, ...alts.flatMap((a) => [...a.written, a.kana])])];
        // ...but only readings that *sound* different from the primary are
        // worth teaching aloud (same kana, different kanji = same audio).
        const heard = new Set([primary.kana, ...(primary.alts ?? []).map((a) => a.kana)]);
        const reads: AltReading[] = [];
        for (const a of alts) {
          if (heard.has(a.kana)) continue;
          heard.add(a.kana);
          reads.push({ id: a.id, kana: a.kana, romaji: a.romaji });
        }
        if (reads.length) primary.alts = [...(primary.alts ?? []), ...reads];
      }
      primaries.push(primary);
    }

    // One survivor → the whole group was synonyms, keep the clean prompt.
    // Several survivors → distinct words, disambiguate each.
    if (primaries.length === 1) {
      primaries[0].prompt = barePrompt(primaries[0].english);
    } else {
      for (const w of primaries) w.prompt = richPrompt(w.english);
    }
    for (const w of primaries) survivors.add(w);
  }

  return words.filter((w) => survivors.has(w));
}
