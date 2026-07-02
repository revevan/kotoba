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

export type PlayOutcome = 'done' | 'cancelled';

/**
 * Single HTMLAudioElement playback queue. iOS only trusts an element that was
 * play()ed during a user gesture, so the same element is reused for every clip.
 */
export class Player {
  private el: HTMLAudioElement = new Audio();
  private generation = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private gapResolve: ((o: PlayOutcome) => void) | null = null;

  /** Called when the OS pauses playback out from under us (phone call, Siri,
   *  CarPlay ducking). Without it the clip's 'ended' never fires and the
   *  session would sit silent forever; the owner typically pauses the session. */
  constructor(private onInterrupt?: () => void) {}

  /** Must be called synchronously inside the session-start tap handler. */
  unlock(): void {
    this.el.src = SILENCE;
    void this.el.play().catch(() => {});
  }

  async play(items: ClipItem[]): Promise<PlayOutcome> {
    const gen = ++this.generation;
    for (const item of items) {
      if (gen !== this.generation) return 'cancelled';
      if (item.src) {
        const outcome = await this.playOne(item.src, gen);
        if (outcome === 'cancelled') return 'cancelled';
      }
      if (item.gapMs) {
        const outcome = await this.wait(item.gapMs, gen);
        if (outcome === 'cancelled') return 'cancelled';
      }
    }
    return gen === this.generation ? 'done' : 'cancelled';
  }

  cancel(): void {
    this.generation++;
    if (this.timer) clearTimeout(this.timer);
    // Settle any pending gap now — its timer is dead, so without this the
    // play() awaiting it would hang forever.
    this.gapResolve?.('cancelled');
    this.el.pause();
  }

  private playOne(src: string, gen: number): Promise<PlayOutcome> {
    return new Promise((resolve) => {
      const el = this.el;
      const cleanup = () => {
        el.removeEventListener('ended', onEnded);
        el.removeEventListener('error', onError);
        el.removeEventListener('pause', onPause);
      };
      const onEnded = () => {
        cleanup();
        resolve(gen === this.generation ? 'done' : 'cancelled');
      };
      const onError = () => {
        // Missing/failed clip: skip it rather than wedge the session.
        dlog('player', `clip failed (${el.error?.code ?? 'play-rejected'}): ${src.split('/').slice(-2).join('/')}`);
        cleanup();
        resolve(gen === this.generation ? 'done' : 'cancelled');
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
        dlog('player', `interrupted (external pause): ${el.currentSrc.split('/').slice(-2).join('/')}`);
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

  private wait(ms: number, gen: number): Promise<PlayOutcome> {
    return new Promise((resolve) => {
      const finish = (o: PlayOutcome) => {
        if (this.gapResolve === finish) this.gapResolve = null;
        resolve(o);
      };
      this.gapResolve = finish;
      this.timer = setTimeout(() => finish(gen === this.generation ? 'done' : 'cancelled'), ms);
    });
  }
}
