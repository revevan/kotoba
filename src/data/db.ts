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
const DB_VERSION = 1;

/** Reserved settings key: per-setting last-modified stamps (ms), so the cloud
 * sync merge can apply only remote values that are actually newer. Rides
 * inside the settings map, so it syncs and backs up with everything else. */
export const SETTINGS_META_KEY = '__meta';

async function open(): Promise<IDBPDatabase> {
  const d = await openDB(DB_NAME, DB_VERSION, {
    // Guarded per-version steps: a client mid-upgrade (or a future v2 bump)
    // must never re-create a store that already exists.
    upgrade(db, oldVersion) {
      if (oldVersion < 1) {
        if (!db.objectStoreNames.contains('cards')) db.createObjectStore('cards', { keyPath: 'wordId' });
        if (!db.objectStoreNames.contains('reviews')) db.createObjectStore('reviews', { autoIncrement: true });
        if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings');
      }
    },
    terminated() {
      dbp = null; // browser killed the connection — reopen on next use
    },
  });
  // Another tab is upgrading to a newer version: close so it isn't blocked
  // forever; the next db() call here reopens at the new version.
  d.addEventListener('versionchange', () => {
    d.close();
    dbp = null;
  });
  return d;
}

let dbp: Promise<IDBPDatabase> | null = null;
const db = () => {
  if (!dbp) {
    dbp = open();
    // A failed open (private-mode quota, transient IO error) must not be
    // memoized — that bricked the page until site data was cleared. Drop the
    // rejected promise so the next call retries.
    dbp.catch(() => {
      dbp = null;
    });
  }
  return dbp;
};

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
  const d = await db();
  const tx = d.transaction('settings', 'readwrite');
  const meta = ((await tx.store.get(SETTINGS_META_KEY)) ?? {}) as Record<string, number>;
  meta[key] = Date.now();
  await tx.store.put(value, key);
  await tx.store.put(meta, SETTINGS_META_KEY);
  await tx.done;
}

/** Write a setting without bumping its last-modified stamp — the sync merge
 * uses this so an applied remote value keeps the remote's timestamp. */
export async function putSettingRaw(key: string, value: unknown): Promise<void> {
  await (await db()).put('settings', value, key);
}

export async function getSettingsMeta(): Promise<Record<string, number>> {
  return ((await (await db()).get('settings', SETTINGS_META_KEY)) ?? {}) as Record<string, number>;
}

export async function setSettingsMeta(meta: Record<string, number>): Promise<void> {
  await (await db()).put('settings', meta, SETTINGS_META_KEY);
}

export async function getAllSettings(): Promise<Record<string, unknown>> {
  const d = await db();
  const keys = await d.getAllKeys('settings');
  const out: Record<string, unknown> = {};
  for (const k of keys) out[String(k)] = await d.get('settings', k);
  return out;
}
