import type { Deck, DeckInfo, Word } from '../types';

const base = `${import.meta.env.BASE_URL}decks/`;

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
