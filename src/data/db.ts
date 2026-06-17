import { openDB, type IDBPDatabase } from 'idb';
import type { Card } from '../srs/scheduler';

export interface CardRow {
  wordId: string;
  deckId: string;
  card: Card;
  addedAt: number;
}

export interface ReviewRow {
  wordId: string;
  rating: 'good' | 'again';
  mode: 'auto' | 'self' | 'skip' | 'timeout';
  /** FSRS card state at review time (0 New, 1 Learning, 2 Review, 3 Relearning). */
  state?: number;
  recognized?: string;
  ts: number;
}

const DB_NAME = 'kotoba';

function open(): Promise<IDBPDatabase> {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore('cards', { keyPath: 'wordId' });
      db.createObjectStore('reviews', { autoIncrement: true });
      db.createObjectStore('settings');
    },
  });
}

let dbp: Promise<IDBPDatabase> | null = null;
const db = () => (dbp ??= open());

export async function getAllCards(): Promise<CardRow[]> {
  return (await db()).getAll('cards');
}

export async function getCard(wordId: string): Promise<CardRow | undefined> {
  return (await db()).get('cards', wordId);
}

export async function putCard(row: CardRow): Promise<void> {
  await (await db()).put('cards', row);
}

export async function logReview(row: ReviewRow): Promise<void> {
  await (await db()).add('reviews', row);
}

export async function getAllReviews(): Promise<ReviewRow[]> {
  return (await db()).getAll('reviews');
}

/** Erase all study progress (cards + review log). Keeps settings/preferences. */
export async function clearProgress(): Promise<void> {
  const d = await db();
  const tx = d.transaction(['cards', 'reviews'], 'readwrite');
  await tx.objectStore('cards').clear();
  await tx.objectStore('reviews').clear();
  await tx.done;
}

/** Safety bound on the local review log (autoIncrement keys ascending → oldest
 * first). Kept high: the review history is the training data for a future FSRS
 * weight optimization, so we retain years of it rather than discard it. */
export async function pruneReviews(keep = 50000): Promise<void> {
  const d = await db();
  const keys = await d.getAllKeys('reviews');
  if (keys.length <= keep) return;
  const tx = d.transaction('reviews', 'readwrite');
  for (const k of keys.slice(0, keys.length - keep)) await tx.store.delete(k);
  await tx.done;
}

export async function getSetting<T>(key: string, fallback: T): Promise<T> {
  const v = await (await db()).get('settings', key);
  return v === undefined ? fallback : (v as T);
}

export async function setSetting<T>(key: string, value: T): Promise<void> {
  await (await db()).put('settings', value, key);
}

export async function getAllSettings(): Promise<Record<string, unknown>> {
  const d = await db();
  const keys = await d.getAllKeys('settings');
  const out: Record<string, unknown> = {};
  for (const k of keys) out[String(k)] = await d.get('settings', k);
  return out;
}
