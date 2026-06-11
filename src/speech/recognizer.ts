import { dlog } from '../debug/log';

export type SRResult =
  | { kind: 'result'; alternatives: string[] }
  | { kind: 'timeout' }
  | { kind: 'no-speech' }
  | { kind: 'denied' }
  | { kind: 'error'; code: string }
  | { kind: 'aborted' }
  | { kind: 'unavailable' };

export interface ListenOptions {
  lang: 'ja-JP' | 'en-US';
  timeoutMs: number;
}

export type ListenFn = (opts: ListenOptions) => Promise<SRResult>;

interface SRWindow extends Window {
  SpeechRecognition?: new () => SpeechRecognitionLike;
  webkitSpeechRecognition?: new () => SpeechRecognitionLike;
}

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal?: boolean }> }) => void) | null;
  onerror: ((ev: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

function ctor(): (new () => SpeechRecognitionLike) | undefined {
  const w = window as SRWindow;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export function srAvailable(): boolean {
  return typeof window !== 'undefined' && !!ctor();
}

let activeAbort: (() => void) | null = null;

export function abortListening(): void {
  activeAbort?.();
}

/**
 * One-shot recognition. Safari quirks handled: fresh instance per utterance,
 * our own timeout clock (Safari's silence timeout is inconsistent), and
 * resolve-exactly-once across the onresult/onerror/onend event soup.
 *
 * iOS Safari often never marks a result as final (or delivers it only after
 * end), so interim results are captured and used as the answer whenever the
 * recognition ends or times out without a final result.
 */
export function listen(opts: ListenOptions): Promise<SRResult> {
  const C = ctor();
  if (!C) return Promise.resolve({ kind: 'unavailable' });

  // Single-flight: a new listen aborts any active one.
  activeAbort?.();

  return new Promise<SRResult>((resolve) => {
    const rec = new C();
    let settled = false;
    let interim: string[] = [];
    let timer: ReturnType<typeof setTimeout> | null = null;

    const settle = (result: SRResult) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      if (activeAbort === abort) activeAbort = null;
      try {
        rec.abort();
      } catch {
        /* already stopped */
      }
      dlog('sr', `settle ${result.kind}${result.kind === 'result' ? ` "${result.alternatives[0]}"` : ''}`);
      resolve(result);
    };

    /** Prefer whatever speech we heard over reporting silence/timeout. */
    const settleWithInterim = (fallback: SRResult) => {
      settle(interim.length > 0 ? { kind: 'result', alternatives: interim } : fallback);
    };

    const abort = () => settle({ kind: 'aborted' });
    activeAbort = abort;

    rec.lang = opts.lang;
    rec.continuous = false;
    rec.interimResults = true;
    rec.maxAlternatives = 5;

    rec.onresult = (ev) => {
      try {
        const results = ev.results;
        const last = results && results.length > 0 ? results[results.length - 1] : undefined;
        if (!last) return;
        const alternatives: string[] = [];
        for (let i = 0; i < last.length; i++) {
          const t = last[i]?.transcript ?? '';
          if (t.trim()) alternatives.push(t);
        }
        if (alternatives.length > 0) interim = alternatives;
        dlog('sr', `result final=${!!last.isFinal} "${alternatives[0] ?? ''}"`);
        if (last.isFinal) settleWithInterim({ kind: 'no-speech' });
      } catch (e) {
        dlog('sr', `onresult threw: ${e}`);
        settleWithInterim({ kind: 'error', code: 'result-parse' });
      }
    };
    rec.onerror = (ev) => {
      dlog('sr', `error ${ev.error}`);
      if (ev.error === 'no-speech') settleWithInterim({ kind: 'no-speech' });
      else if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') settle({ kind: 'denied' });
      else if (ev.error === 'aborted') settleWithInterim({ kind: 'aborted' });
      else settleWithInterim({ kind: 'error', code: ev.error });
    };
    rec.onend = () => {
      dlog('sr', 'end');
      // Ended without a final result: give a trailing result event a moment
      // to land, then fall back to whatever interim speech we captured.
      if (!settled) setTimeout(() => settleWithInterim({ kind: 'no-speech' }), 250);
    };

    timer = setTimeout(() => {
      dlog('sr', `timeout after ${opts.timeoutMs}ms`);
      try {
        rec.stop(); // give a trailing result a moment to land
      } catch {
        /* not started */
      }
      setTimeout(() => settleWithInterim({ kind: 'timeout' }), 700);
    }, opts.timeoutMs);

    try {
      dlog('sr', `start ${opts.lang} timeout=${opts.timeoutMs}`);
      rec.start();
    } catch (e) {
      dlog('sr', `start threw: ${e}`);
      settle({ kind: 'error', code: 'start-failed' });
    }
  });
}
