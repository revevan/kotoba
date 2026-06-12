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
/** Set while a settled instance hasn't fired 'end' yet; next listen waits on it. */
let draining: Promise<void> | null = null;
/** Bumped per listen/abort so a listen superseded while draining never starts. */
let listenSeq = 0;
/**
 * iOS Safari quirk (observed on device, strict alternation across 7 pickups):
 * a recognition that consumed speech leaves the service's NEXT session deaf —
 * it starts, captures nothing, and ends 'aborted' on stop(). A session that
 * heard nothing leaves the next one working. So after any speech-consuming
 * listen, a throwaway recognition burns the dead session immediately before
 * the next real one.
 */
let burnNext = false;

/** Throwaway recognition to absorb a dead session slot; resolves after its 'end'. */
function burnDeadSlot(C: new () => SpeechRecognitionLike): Promise<void> {
  dlog('sr', 'burning dead slot');
  return new Promise<void>((resolve) => {
    const rec = new C();
    let done = false;
    let guard: ReturnType<typeof setTimeout> | null = null;
    const finish = () => {
      if (done) return;
      done = true;
      if (guard) clearTimeout(guard);
      resolve();
    };
    rec.lang = 'ja-JP';
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = () => {};
    rec.onerror = () => {
      /* 'aborted' is the expected outcome */
    };
    rec.onend = finish;
    try {
      rec.start();
    } catch {
      finish();
      return;
    }
    setTimeout(() => {
      try {
        rec.stop();
      } catch {
        /* already stopped */
      }
    }, 300);
    guard = setTimeout(finish, 1500); // never hold the session hostage
  });
}

export function abortListening(): void {
  listenSeq++;
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
 *
 * Teardown must be gentle: recognitions already terminating on their own are
 * left untouched, and a new listen waits for the previous instance's 'end'
 * before start()ing. After a speech-consuming session the next one is dead
 * (see burnNext) and gets absorbed by a throwaway recognition first.
 */
export async function listen(opts: ListenOptions): Promise<SRResult> {
  const C = ctor();
  if (!C) return { kind: 'unavailable' };

  const seq = ++listenSeq;

  // Single-flight: a new listen aborts any active one.
  activeAbort?.();

  if (draining) {
    dlog('sr', 'waiting for previous instance to end');
    await draining;
    if (seq !== listenSeq) return { kind: 'aborted' };
  }

  if (burnNext) {
    burnNext = false;
    await burnDeadSlot(C);
    if (seq !== listenSeq) return { kind: 'aborted' };
  }

  return new Promise<SRResult>((resolve) => {
    const rec = new C();
    let settled = false;
    let ended = false;
    let stopping = false;
    let interim: string[] = [];
    let timer: ReturnType<typeof setTimeout> | null = null;
    let releaseDrain: (() => void) | null = null;

    /** Block the next listen until this instance's 'end' fires (or a grace timeout). */
    const beginDrain = () => {
      if (ended || releaseDrain) return;
      const mine = new Promise<void>((res) => {
        const done = () => {
          clearTimeout(guard);
          if (draining === mine) draining = null;
          releaseDrain = null;
          res();
        };
        // Safari sometimes never fires 'end'; don't hold the session hostage.
        const guard = setTimeout(done, 1500);
        releaseDrain = done;
      });
      draining = mine;
    };

    // 'none' for recognitions already terminating on their own (final result,
    // error fired) — poking those with stop()/abort() risks wedging the
    // service for the rest of the page's life on iOS.
    const settle = (result: SRResult, teardown: 'none' | 'stop' | 'abort' = 'none') => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      if (activeAbort === abort) activeAbort = null;
      if (!ended) {
        beginDrain();
        try {
          if (teardown === 'abort') rec.abort();
          else if (teardown === 'stop') rec.stop();
        } catch {
          /* already stopped */
        }
      }
      // Speech was consumed (even if the listen was aborted mid-utterance):
      // the next session will be deaf and must be burned first.
      burnNext = result.kind === 'result' || interim.length > 0;
      dlog('sr', `settle ${result.kind}${result.kind === 'result' ? ` "${result.alternatives[0]}"` : ''}`);
      resolve(result);
    };

    /** Prefer whatever speech we heard over reporting silence/timeout. */
    const settleWithInterim = (fallback: SRResult, teardown: 'none' | 'stop' | 'abort' = 'none') => {
      settle(interim.length > 0 ? { kind: 'result', alternatives: interim } : fallback, teardown);
    };

    const abort = () => settle({ kind: 'aborted' }, 'stop');
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
        settleWithInterim({ kind: 'error', code: 'result-parse' }, 'stop');
      }
    };
    rec.onerror = (ev) => {
      dlog('sr', `error ${ev.error}`);
      if (ev.error === 'no-speech') settleWithInterim({ kind: 'no-speech' });
      else if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') settle({ kind: 'denied' });
      else if (ev.error === 'aborted') {
        // Our own abort() pre-settles before tearing down, so an 'aborted'
        // error that arrives unsettled is Safari-initiated (e.g. it reacts to
        // our timeout's stop() with this) — report it as silence, not abort.
        settleWithInterim({ kind: stopping ? 'timeout' : 'no-speech' });
      } else settleWithInterim({ kind: 'error', code: ev.error });
    };
    rec.onend = () => {
      dlog('sr', 'end');
      ended = true;
      releaseDrain?.();
      // Ended without a final result: give a trailing result event a moment
      // to land, then fall back to whatever interim speech we captured.
      if (!settled) setTimeout(() => settleWithInterim({ kind: 'no-speech' }), 250);
    };

    timer = setTimeout(() => {
      dlog('sr', `timeout after ${opts.timeoutMs}ms`);
      stopping = true;
      try {
        rec.stop(); // give a trailing result a moment to land
      } catch {
        /* not started */
      }
      // Nothing reacted to stop() within the grace period: the recognition is
      // wedged, so abort() is the only teardown left.
      setTimeout(() => settleWithInterim({ kind: 'timeout' }, 'abort'), 700);
    }, opts.timeoutMs);

    try {
      dlog('sr', `start ${opts.lang} timeout=${opts.timeoutMs}`);
      rec.start();
    } catch (e) {
      dlog('sr', `start threw: ${e}`);
      ended = true; // never started; no 'end' will come, nothing to drain
      settle({ kind: 'error', code: 'start-failed' });
    }
  });
}
