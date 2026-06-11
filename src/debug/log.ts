// Lightweight in-app diagnostics. Every session event is appended to a ring
// buffer and mirrored to localStorage, so a misbehaving session on the phone
// can be inspected after the fact: reload with ?debug=1 to see the overlay.

import { signal } from '@preact/signals';

export interface LogEntry {
  t: number;
  tag: string;
  msg: string;
}

const MAX = 400;
const STORE_KEY = 'kotoba-log';

const hasDom = typeof window !== 'undefined';

export const debugEnabled =
  hasDom && (/[?&]debug=1/.test(window.location.search) || window.localStorage.getItem('kotoba-debug') === '1');

function restore(): LogEntry[] {
  if (!hasDom) return [];
  try {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) ?? '[]') as LogEntry[];
  } catch {
    return [];
  }
}

export const logEntries = signal<LogEntry[]>(restore());

let persistTimer: ReturnType<typeof setTimeout> | null = null;

export function dlog(tag: string, msg: unknown): void {
  const text = typeof msg === 'string' ? msg : JSON.stringify(msg);
  const next = [...logEntries.value, { t: Date.now(), tag, msg: text }].slice(-MAX);
  logEntries.value = next;
  if (!hasDom) return;
  if (persistTimer) clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(next));
    } catch {
      /* storage full/unavailable */
    }
  }, 250);
}

export function clearLog(): void {
  logEntries.value = [];
  if (hasDom) window.localStorage.removeItem(STORE_KEY);
}

export function formatLog(entries: LogEntry[]): string {
  return entries
    .map((e) => `${new Date(e.t).toISOString().slice(11, 23)} [${e.tag}] ${e.msg}`)
    .join('\n');
}

if (hasDom) {
  window.addEventListener('error', (e) => dlog('js-error', `${e.message} @ ${e.filename}:${e.lineno}`));
  window.addEventListener('unhandledrejection', (e) => dlog('unhandled-rejection', String(e.reason)));
  dlog('boot', `loaded ${new Date().toISOString()}`);
}
