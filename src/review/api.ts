// Client for the content-review endpoints on the kotoba-api worker.

import { apiEndpoint } from '../sync/config';

/** What the reviewer flagged on a card: row keys + issue-kind chips. */
export interface ReviewFlags {
  rows: string[]; // 'en' | 'ja' | 'alt:<wordId>' | 'sen:<sentenceId>'
  kinds: string[]; // 'audio-glitch' | 'mispronounced' | …
}

export type ReviewStatus = 'ok' | 'open' | 'fixed' | 'verified' | 'closed';

export interface ReviewRow {
  wordId: string;
  deck: string;
  verdict: 'good' | 'flagged';
  flags: ReviewFlags | null;
  note: string | null;
  status: ReviewStatus;
  fixNote: string | null;
  updatedAt: number;
}

export interface ReviewSubmission {
  wordId: string;
  deck: string;
  verdict: 'good' | 'flagged';
  flags?: ReviewFlags;
  note?: string;
}

async function call(path: string, token: string, init: RequestInit = {}): Promise<Response> {
  const r = await fetch(`${apiEndpoint}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...(init.headers as Record<string, string>) },
  });
  if (r.status === 401) throw new Error('unauthorized');
  if (r.status === 403) throw new Error('forbidden');
  if (!r.ok) throw new Error(`${path} failed (${r.status})`);
  return r;
}

export async function fetchReviewState(token: string): Promise<ReviewRow[]> {
  const r = await call('/review/state', token);
  return ((await r.json()) as { reviews: ReviewRow[] }).reviews;
}

export async function submitReview(token: string, sub: ReviewSubmission): Promise<void> {
  await call('/review', token, { method: 'POST', body: JSON.stringify(sub) });
}
