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
