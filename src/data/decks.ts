import type { Deck, DeckInfo, Sentence, Word } from '../types';

const base = `${import.meta.env.BASE_URL}decks/`;
const sentencesBase = `${import.meta.env.BASE_URL}sentences/`;
const conjCuesBase = `${import.meta.env.BASE_URL}conj-cues/`;

/** Approved example sentences for a deck, keyed by wordId. */
export type SentencePool = Record<string, Sentence[]>;

export async function fetchDeckIndex(): Promise<DeckInfo[]> {
  const res = await fetch(`${base}index.json`);
  if (!res.ok) throw new Error(`deck index: HTTP ${res.status}`);
  return res.json();
}

export async function fetchDeck(info: DeckInfo): Promise<Deck> {
  const res = await fetch(`${base}${info.file}`);
  if (!res.ok) throw new Error(`deck ${info.id}: HTTP ${res.status}`);
  return res.json();
}

/** Sentence content is optional: a missing/204 file just means no sentences yet. */
export async function fetchSentences(deckId: string): Promise<SentencePool> {
  try {
    const res = await fetch(`${sentencesBase}${deckId}.json`);
    if (!res.ok) return {};
    return (await res.json()) as SentencePool;
  } catch {
    return {};
  }
}

/** Mutates the decks' word objects in place, attaching any approved sentence pool. */
export async function attachSentences(decks: Deck[]): Promise<void> {
  await Promise.all(
    decks.map(async (deck) => {
      const pool = await fetchSentences(deck.id);
      for (const w of deck.words) {
        const list = pool[w.id];
        if (list?.length) w.sentences = list;
      }
    }),
  );
}

/** English conjugation cues (see tools/gen-conj-cues.ts); optional content. */
export async function attachConjCues(decks: Deck[]): Promise<void> {
  await Promise.all(
    decks.map(async (deck) => {
      try {
        const res = await fetch(`${conjCuesBase}${deck.id}.json`);
        if (!res.ok) return;
        const cues = (await res.json()) as Record<string, Word['conjCues']>;
        for (const w of deck.words) {
          const c = cues[w.id];
          if (c) w.conjCues = c;
        }
      } catch {
        /* missing cue file ⇒ label-prompt fallback */
      }
    }),
  );
}

/** Word lookup across enabled decks; duplicate ids (overlapping decks) collapse. */
export function wordMap(decks: Deck[]): Map<string, Word> {
  const map = new Map<string, Word>();
  for (const deck of decks) {
    for (const w of deck.words) {
      if (!map.has(w.id)) map.set(w.id, w);
    }
  }
  return map;
}
