// Thin client for the Kotoba API: passwordless login + progress sync.

import { apiEndpoint } from './config';

export interface Auth {
  token: string;
  email: string;
}

const STORE = 'kotoba-auth';

export function loadAuth(): Auth | null {
  try {
    const s = localStorage.getItem(STORE);
    return s ? (JSON.parse(s) as Auth) : null;
  } catch {
    return null;
  }
}

export function persistAuth(a: Auth | null): void {
  try {
    if (a) localStorage.setItem(STORE, JSON.stringify(a));
    else localStorage.removeItem(STORE);
  } catch {
    /* storage unavailable */
  }
}

async function call(path: string, init: RequestInit = {}, token?: string): Promise<Response> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json', ...(init.headers as Record<string, string>) };
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(`${apiEndpoint}${path}`, { ...init, headers });
}

/** Ask the server to email a one-time code. Resolves once it's been sent. */
export async function requestCode(email: string): Promise<void> {
  const r = await call('/auth/request', { method: 'POST', body: JSON.stringify({ email }) });
  if (!r.ok) throw new Error(`Couldn't send a code right now (${r.status}). Try again in a moment.`);
}

/** Exchange an emailed code for a session token. */
export async function verifyCode(email: string, code: string): Promise<Auth> {
  const r = await call('/auth/verify', { method: 'POST', body: JSON.stringify({ email, code }) });
  if (r.status === 401) throw new Error('That code is incorrect or has expired.');
  if (r.status === 429) throw new Error('Too many tries — request a new code.');
  if (!r.ok) throw new Error(`Sign-in failed (${r.status}).`);
  return (await r.json()) as Auth;
}

export async function logout(token: string): Promise<void> {
  try {
    await call('/auth/logout', { method: 'POST' }, token);
  } catch {
    /* best-effort */
  }
}

/** Returns the stored progress blob, or null if the account has none yet. */
export async function pullRemote(token: string): Promise<unknown | null> {
  const r = await call('/sync', {}, token);
  if (r.status === 401) throw new Error('unauthorized');
  if (!r.ok) throw new Error(`pull failed (${r.status})`);
  const body = (await r.json()) as { data: unknown | null };
  return body.data ?? null;
}

export async function pushRemote(token: string, data: unknown): Promise<void> {
  const r = await call('/sync', { method: 'PUT', body: JSON.stringify({ data, updatedAt: Date.now() }) }, token);
  if (r.status === 401) throw new Error('unauthorized');
  if (!r.ok) throw new Error(`push failed (${r.status})`);
}

// ---- Admin stats (Settings → Stats, ADMIN_EMAILS accounts only) ----

export interface StatsUser {
  email: string;
  createdAt: number;
  lastSyncAt: number | null;
  cards: number;
  reps: number;
  lastReviewAt: number | null;
  activeDays30: number;
  studiedDays30: number;
}

export interface Stats {
  generatedAt: number;
  totalUsers: number;
  activeToday: number;
  active7d: number;
  active30d: number;
  studiedToday: number;
  studied7d: number;
  studied30d: number;
  users: StatsUser[];
  days: { day: string; active: number; studied: number }[];
}

export async function fetchStats(token: string): Promise<Stats> {
  const r = await call('/stats', {}, token);
  if (r.status === 401 || r.status === 403) throw new Error('This account is not allowed to view stats.');
  if (!r.ok) throw new Error(`Stats failed to load (${r.status}).`);
  return (await r.json()) as Stats;
}

/** Submit a bug report / feature request from the in-app form. */
export async function sendFeedback(type: 'bug' | 'feedback' | 'feature', message: string, contact?: string): Promise<void> {
  const context = `${location.pathname}${location.search} · ${navigator.userAgent}`.slice(0, 500);
  const r = await call('/feedback', {
    method: 'POST',
    body: JSON.stringify({ type, message, contact: contact || undefined, context }),
  });
  if (!r.ok) throw new Error(`Couldn't send right now (${r.status}). Try again in a moment.`);
}
