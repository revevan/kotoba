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

// ---- Shorts (rendered videos awaiting approval before YouTube upload) ----

export type ShortStatus = 'pending' | 'approved' | 'rejected' | 'uploaded';

export interface ShortRow {
  id: string;
  format: string;
  wordId: string;
  sentenceId: string;
  level: string | null;
  title: string;
  description: string;
  duration: number | null;
  videoUrl: string;
  posterUrl: string | null;
  status: ShortStatus;
  note: string | null;
  reviewedBy: string | null;
  reviewedAt: number | null;
  videoId: string | null;
  publishAt: string | null;
  createdAt: number;
  updatedAt: number;
}

export async function fetchShorts(token: string): Promise<ShortRow[]> {
  const r = await call('/review/shorts', token);
  return ((await r.json()) as { shorts: ShortRow[] }).shorts;
}

export async function submitShortVerdict(token: string, id: string, verdict: 'approve' | 'reject', note?: string): Promise<void> {
  await call(`/review/shorts/${id}`, token, { method: 'POST', body: JSON.stringify({ verdict, note }) });
}
