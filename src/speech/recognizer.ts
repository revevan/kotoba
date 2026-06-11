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
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
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
 */
export function listen(opts: ListenOptions): Promise<SRResult> {
  const C = ctor();
  if (!C) return Promise.resolve({ kind: 'unavailable' });

  // Single-flight: a new listen aborts any active one.
  activeAbort?.();

  return new Promise<SRResult>((resolve) => {
    const rec = new C();
    let settled = false;
    let gotResult = false;
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
      resolve(result);
    };

    const abort = () => settle({ kind: 'aborted' });
    activeAbort = abort;

    rec.lang = opts.lang;
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 5;

    rec.onresult = (ev) => {
      gotResult = true;
      const last = ev.results[ev.results.length - 1];
      const alternatives: string[] = [];
      for (let i = 0; i < last.length; i++) alternatives.push(last[i].transcript);
      settle({ kind: 'result', alternatives });
    };
    rec.onerror = (ev) => {
      if (ev.error === 'no-speech') settle({ kind: 'no-speech' });
      else if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') settle({ kind: 'denied' });
      else if (ev.error === 'aborted') settle({ kind: 'aborted' });
      else settle({ kind: 'error', code: ev.error });
    };
    rec.onend = () => {
      // Ended without a result or error event → treat as silence.
      if (!gotResult) settle({ kind: 'no-speech' });
    };

    timer = setTimeout(() => {
      try {
        rec.stop(); // give a trailing result a moment to land
      } catch {
        /* not started */
      }
      setTimeout(() => settle({ kind: 'timeout' }), 700);
    }, opts.timeoutMs);

    try {
      rec.start();
    } catch {
      settle({ kind: 'error', code: 'start-failed' });
    }
  });
}
