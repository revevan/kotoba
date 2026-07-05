// Client for the rung-4 ("build it") sentence grader — a /grade route on the
// same worker that proxies speech-to-text (it already holds the API keys).
// The runner treats any failure as nomatch, which flows to reveal +
// self-grade, so this endpoint is never load-bearing for session progress.

import { dlog } from '../debug/log';
import type { Word } from '../types';
import { sttEndpoint } from './sttConfig';

export interface BuildVerdict {
  verdict: 'good' | 'again';
  note?: string;
}

export async function gradeBuild(word: Word, transcript: string): Promise<BuildVerdict> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    const resp = await fetch(`${sttEndpoint.replace(/\/$/, '')}/grade`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        word: { kana: word.kana, written: word.written, english: word.prompt },
        transcript,
      }),
      signal: ctrl.signal,
    });
    if (!resp.ok) throw new Error(`grade ${resp.status}`);
    const body = (await resp.json()) as { verdict?: string; note?: string };
    const verdict = body.verdict === 'good' ? 'good' : 'again';
    dlog('grader', `verdict=${verdict}${body.note ? ` note="${body.note}"` : ''}`);
    return { verdict, note: body.note };
  } finally {
    clearTimeout(timer);
  }
}
