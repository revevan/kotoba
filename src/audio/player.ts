import { dlog } from '../debug/log';
import type { ClipItem } from './clips';

// ~0.05s of silence (8kHz mono 16-bit WAV); played inside the start gesture
// to unlock programmatic playback for the rest of the session on iOS.
function silentWavDataUri(): string {
  const samples = 400;
  const dataSize = samples * 2;
  const buf = new ArrayBuffer(44 + dataSize);
  const v = new DataView(buf);
  const str = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i));
  };
  str(0, 'RIFF');
  v.setUint32(4, 36 + dataSize, true);
  str(8, 'WAVE');
  str(12, 'fmt ');
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true); // PCM
  v.setUint16(22, 1, true); // mono
  v.setUint32(24, 8000, true);
  v.setUint32(28, 16000, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  str(36, 'data');
  v.setUint32(40, dataSize, true);
  let bin = '';
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return `data:audio/wav;base64,${btoa(bin)}`;
}

const SILENCE = silentWavDataUri();

/**
 * 'silent' = the connection failed somewhere in the sequence (see
 * sequenceOutcome) — the listener cannot have heard the whole thing, and the
 * session must hold rather than open the mic on a prompt nobody heard.
 */
export type PlayOutcome = 'done' | 'silent' | 'cancelled';

/** What became of one clip with a src. */
export type ClipResult =
  | 'played' // reached 'ended'
  | 'play-error' // loaded but the element errored/stalled — not a connection signal
  | 'missing' // 404: the clip doesn't exist (content gap, skip it)
  | 'network-failed'; // fetch threw / timed out / non-OK: the connection is gone

/**
 * A missing clip is content, not connection: the sequence still counts as
 * played. Any network failure — even after earlier clips played — makes the
 * sequence silent, because the user cannot have heard all of it (Evan's case:
 * "how do you say…" plays, the English word never arrives, the mic must NOT open).
 */
export function sequenceOutcome(results: ClipResult[]): 'done' | 'silent' {
  return results.some((r) => r === 'network-failed') ? 'silent' : 'done';
}

/** Per-clip fetch budget. Cached clips resolve instantly; a dead cell zone
 *  tends to hang rather than fail, and the hold must land quickly. */
export const CLIP_FETCH_BUDGET_MS = 4000;

type Resolved =
  | { kind: 'blob'; objectUrl: string; from: 'cache' | 'network' }
  | { kind: 'direct' } // no fetch available — let the element load the URL itself
  | { kind: 'missing' }
  | { kind: 'network-failed' };

const tail = (url: string) => url.split('/').slice(-2).join('/');

async function fromCache(url: string): Promise<Blob | null> {
  try {
    if (typeof caches === 'undefined') return null;
    // Precache entries carry a ?__WB_REVISION__ key; runtime entries don't.
    const res = await caches.match(url, { ignoreSearch: true });
    if (!res) return null;
    const blob = await res.blob();
    // An opaque (no-cors) entry has an empty body — treat as a miss.
    return blob.size > 0 ? blob : null;
  } catch {
    return null;
  }
}

/**
 * Load a clip as a blob URL: Cache API first (works even when the service
 * worker isn't controlling the page), then a budgeted network fetch (which the
 * SW's CacheFirst route stores as a side effect). Streaming a URL straight into
 * the media element bypassed all of this on iOS — cached clips still failed
 * offline — and gave no way to tell "missing" from "no connection".
 */
export async function resolveClip(url: string, budgetMs = CLIP_FETCH_BUDGET_MS): Promise<Resolved> {
  if (url.startsWith('data:') || url.startsWith('blob:')) return { kind: 'direct' };
  const cached = await fromCache(url);
  if (cached) return { kind: 'blob', objectUrl: URL.createObjectURL(cached), from: 'cache' };
  if (typeof fetch !== 'function') return { kind: 'direct' };
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), budgetMs);
  try {
    const res = await fetch(url, { mode: 'cors', signal: ctl.signal });
    if (res.status === 404) return { kind: 'missing' };
    if (!res.ok) return { kind: 'network-failed' };
    const blob = await res.blob();
    return { kind: 'blob', objectUrl: URL.createObjectURL(blob), from: 'network' };
  } catch {
    return { kind: 'network-failed' };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Single HTMLAudioElement playback queue. iOS only trusts an element that was
 * play()ed during a user gesture, so the same element is reused for every clip.
 */
export class Player {
  private el: HTMLAudioElement = new Audio();
  // crossOrigin set in the constructor: audio may come from the R2 CDN
  // (audio.kotobaapp.com), and anonymous CORS keeps responses non-opaque so
  // the service worker's runtime cache stores them without quota padding.
  private generation = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private gapResolve: ((o: 'done' | 'cancelled') => void) | null = null;

  /** Called when the OS pauses playback out from under us (phone call, Siri,
   *  CarPlay ducking). Without it the clip's 'ended' never fires and the
   *  session would sit silent forever; the owner typically pauses the session. */
  constructor(private onInterrupt?: () => void) {
    this.el.crossOrigin = 'anonymous';
  }

  /** Must be called synchronously inside the session-start tap handler. */
  unlock(): void {
    this.el.src = SILENCE;
    void this.el.play().catch(() => {});
  }

  async play(items: ClipItem[]): Promise<PlayOutcome> {
    const gen = ++this.generation;
    // Resolve every clip up front, in parallel: the outcome is known before
    // the first sound, and inter-clip gaps no longer include network latency.
    const resolved = await Promise.all(items.map((it) => (it.src ? resolveClip(it.src) : null)));
    const revoke = () => {
      for (const r of resolved) if (r?.kind === 'blob') URL.revokeObjectURL(r.objectUrl);
    };
    if (gen !== this.generation) {
      revoke();
      return 'cancelled';
    }
    this.logResolved(items, resolved);
    const results: ClipResult[] = [];
    try {
      for (let i = 0; i < items.length; i++) {
        if (gen !== this.generation) return 'cancelled';
        const item = items[i];
        const r = resolved[i];
        if (item.src && r) {
          if (r.kind === 'missing' || r.kind === 'network-failed') {
            results.push(r.kind);
          } else {
            const outcome = await this.playOne(r.kind === 'blob' ? r.objectUrl : item.src, item.src, gen);
            if (outcome === 'cancelled') return 'cancelled';
            results.push(outcome);
          }
        }
        if (item.gapMs) {
          const outcome = await this.wait(item.gapMs, gen);
          if (outcome === 'cancelled') return 'cancelled';
        }
      }
      return gen === this.generation ? sequenceOutcome(results) : 'cancelled';
    } finally {
      revoke();
    }
  }

  cancel(): void {
    this.generation++;
    if (this.timer) clearTimeout(this.timer);
    // Settle any pending gap now — its timer is dead, so without this the
    // play() awaiting it would hang forever.
    this.gapResolve?.('cancelled');
    this.el.pause();
  }

  /** One summary line per sequence (the debug ring buffer is small), plus a
   *  line per clip that didn't resolve — those are the ones worth reading. */
  private logResolved(items: ClipItem[], resolved: (Resolved | null)[]): void {
    const n = { cache: 0, network: 0, direct: 0, missing: 0, failed: 0 };
    resolved.forEach((r, i) => {
      if (!r) return;
      if (r.kind === 'blob') n[r.from]++;
      else if (r.kind === 'direct') n.direct++;
      else if (r.kind === 'missing') {
        n.missing++;
        dlog('player', `missing (404): ${tail(items[i].src!)}`);
      } else {
        n.failed++;
        dlog('player', `network-failed: ${tail(items[i].src!)}`);
      }
    });
    const parts = Object.entries(n)
      .filter(([, c]) => c > 0)
      .map(([k, c]) => `${k} ${c}`);
    dlog('player', `seq ${parts.join(', ') || 'no clips'}`);
  }

  private playOne(src: string, label: string, gen: number): Promise<ClipResult | 'cancelled'> {
    return new Promise((resolve) => {
      const el = this.el;
      // Stall guard: play() can hang forever without ended/error/pause firing
      // (no audio output, autoplay left pending, wedged element) — and in that
      // state el.paused may even read false while currentTime never advances.
      // Zero playback progress across three checks ⇒ skip the clip like a load
      // error; any progress resets the count. Never let one clip strand the
      // session.
      let stalls = 0;
      const stallTimer = setInterval(() => {
        if (el.currentTime === 0) {
          stalls++;
          if (stalls >= 3) {
            dlog('player', `clip stalled (no playback progress): ${tail(label)}`);
            cleanup();
            resolve(gen === this.generation ? 'play-error' : 'cancelled');
          }
        } else {
          stalls = 0;
        }
      }, 2000);
      let finished = false;
      const cleanup = () => {
        finished = true;
        clearInterval(stallTimer);
        el.removeEventListener('ended', onEnded);
        el.removeEventListener('error', onError);
        el.removeEventListener('pause', onPause);
      };
      const onEnded = () => {
        cleanup();
        resolve(gen === this.generation ? 'played' : 'cancelled');
      };
      const onError = () => {
        // A clip that loaded but won't decode/play: skip it rather than wedge
        // the session. The finished guard silences the late play()-rejection
        // that can land after a stall already resolved this clip.
        if (finished) return;
        dlog('player', `clip failed (${el.error?.code ?? 'play-rejected'}): ${tail(label)}`);
        cleanup();
        resolve(gen === this.generation ? 'play-error' : 'cancelled');
      };
      const onPause = () => {
        if (gen !== this.generation) {
          cleanup();
          resolve('cancelled');
          return;
        }
        // Still the live generation and not at clip end: the OS paused us
        // (interruption). Surface it instead of hanging the sequence.
        if (el.ended) return; // natural end — onEnded settles this clip
        dlog('player', `interrupted (external pause): ${tail(label)}`);
        cleanup();
        resolve('cancelled');
        this.onInterrupt?.();
      };
      el.addEventListener('ended', onEnded);
      el.addEventListener('error', onError);
      el.addEventListener('pause', onPause);
      el.src = src;
      el.play().catch(() => onError());
    });
  }

  private wait(ms: number, gen: number): Promise<'done' | 'cancelled'> {
    return new Promise((resolve) => {
      const finish = (o: 'done' | 'cancelled') => {
        if (this.gapResolve === finish) this.gapResolve = null;
        resolve(o);
      };
      this.gapResolve = finish;
      this.timer = setTimeout(() => finish(gen === this.generation ? 'done' : 'cancelled'), ms);
    });
  }
}
