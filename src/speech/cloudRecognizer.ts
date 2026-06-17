import { dlog } from '../debug/log';
import type { ListenOptions, SRResult } from './recognizer';
import { sttEndpoint } from './sttConfig';
import { mapProxyResponse, rmsLevel, vadStep, type VadConfig, type VadState } from './sttResponse';

/**
 * Cloud speech-to-text recognizer — a drop-in replacement for the WebKit Web
 * Speech `listen()` that bypasses iOS Safari's unreliable speech service.
 *
 * Each listen opens the mic with getUserMedia, records with MediaRecorder, and
 * uses a WebAudio AnalyserNode for voice-activity detection: we only send audio
 * once speech is heard and stop shortly after it falls silent, then POST the
 * clip to the configured proxy (which holds the API key) for transcription.
 *
 * No WebKit speech service means none of its failure modes: no dead second
 * pickup, no system dictation chimes, and consistent Japanese accuracy.
 */

interface WebkitWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

const VAD_BASE: Omit<VadConfig, 'noSpeechTimeoutMs'> = {
  threshold: 0.015,
  trailingSilenceMs: 700,
  // Cap the clip short: answers are one word / one command, so a longer window
  // just feeds Deepgram seconds of ambient noise and echo in a noisy car.
  maxUtteranceMs: 2500,
};

let audioCtx: AudioContext | null = null;
let listenSeq = 0;
let activeAbort: (() => void) | null = null;

export function cloudSrAvailable(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof window.MediaRecorder !== 'undefined'
  );
}

/** Create/resume the AudioContext from inside the start gesture (iOS autoplay rules). */
export function primeCloudAudio(): void {
  try {
    if (!audioCtx) {
      const Ctx = window.AudioContext ?? (window as WebkitWindow).webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    void audioCtx?.resume();
  } catch {
    /* best effort */
  }
}

export function cloudAbort(): void {
  listenSeq++;
  activeAbort?.();
}

function pickMimeType(): string {
  const candidates = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg'];
  for (const c of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported?.(c)) return c;
  }
  return '';
}

function extFor(type: string): string {
  if (type.includes('mp4')) return '.mp4';
  if (type.includes('webm')) return '.webm';
  if (type.includes('ogg')) return '.ogg';
  return '.bin';
}

export async function cloudListen(opts: ListenOptions): Promise<SRResult> {
  if (!cloudSrAvailable()) return { kind: 'unavailable' };

  const seq = ++listenSeq;
  activeAbort?.();

  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true },
    });
  } catch (e) {
    dlog('cstt', `getUserMedia failed: ${e}`);
    return { kind: 'denied' };
  }
  if (seq !== listenSeq) {
    stream.getTracks().forEach((t) => t.stop());
    return { kind: 'aborted' };
  }

  primeCloudAudio();
  if (!audioCtx) {
    stream.getTracks().forEach((t) => t.stop());
    return { kind: 'unavailable' };
  }
  const ctx = audioCtx;

  return new Promise<SRResult>((resolve) => {
    let settled = false;
    let stopping = false;
    let posting = false;
    let poll: ReturnType<typeof setInterval> | null = null;
    let recorder: MediaRecorder | null = null;
    const chunks: BlobPart[] = [];
    let vad: VadState = { speechStarted: false, lastVoiceMs: null };
    let peak = 0; // loudest frame seen, for diagnosing missed speech
    const startedAt = performance.now();
    const cfg: VadConfig = { ...VAD_BASE, noSpeechTimeoutMs: opts.timeoutMs };

    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    source.connect(analyser);
    const frame = new Uint8Array(analyser.fftSize);

    const finish = (result: SRResult) => {
      if (settled) return;
      settled = true;
      if (poll) clearInterval(poll);
      poll = null;
      if (activeAbort === abort) activeAbort = null;
      try {
        source.disconnect();
      } catch {
        /* already gone */
      }
      stream.getTracks().forEach((t) => t.stop());
      dlog('cstt', `settle ${result.kind}${result.kind === 'result' ? ` "${result.alternatives[0]}"` : ''}`);
      resolve(result);
    };

    const abort = () => finish({ kind: 'aborted' });
    activeAbort = abort;

    const transcribe = async () => {
      if (posting || settled) return;
      posting = true;
      if (seq !== listenSeq) {
        finish({ kind: 'aborted' });
        return;
      }
      const type = recorder?.mimeType || 'audio/mp4';
      const blob = new Blob(chunks, { type });
      const clipMs = Math.round(performance.now() - startedAt);
      if (blob.size < 1200) {
        dlog('cstt', `no-speech: clip too small (${blob.size}B, ${clipMs}ms, peak=${peak.toFixed(3)})`);
        finish({ kind: 'no-speech' });
        return;
      }
      try {
        const form = new FormData();
        form.append('audio', blob, `clip${extFor(type)}`);
        form.append('lang', opts.lang);
        dlog('cstt', `POST ${Math.round(blob.size / 1024)}KB ${opts.lang} ${type} ${clipMs}ms peak=${peak.toFixed(3)}`);
        const ctrl = new AbortController();
        const httpTimer = setTimeout(() => ctrl.abort(), 8000);
        const resp = await fetch(sttEndpoint, { method: 'POST', body: form, signal: ctrl.signal });
        clearTimeout(httpTimer);
        let body: Record<string, unknown> | null = null;
        try {
          body = (await resp.json()) as Record<string, unknown>;
        } catch {
          /* non-JSON body */
        }
        dlog('cstt', `deepgram tx="${body?.transcript ?? ''}" conf=${body?.confidence ?? '?'} dur=${body?.duration ?? '?'}`);
        finish(mapProxyResponse(resp.status, body));
      } catch (e) {
        dlog('cstt', `transcribe failed: ${e}`);
        finish({ kind: 'error', code: 'network' });
      }
    };

    const stopAndSend = () => {
      if (stopping) return;
      stopping = true;
      if (poll) clearInterval(poll);
      poll = null;
      if (recorder && recorder.state !== 'inactive') {
        try {
          recorder.stop(); // onstop → transcribe()
        } catch {
          void transcribe();
        }
      } else {
        void transcribe();
      }
    };

    try {
      const mimeType = pickMimeType();
      recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      recorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size) chunks.push(ev.data);
      };
      recorder.onstop = () => void transcribe();
      recorder.start();
    } catch (e) {
      dlog('cstt', `MediaRecorder failed: ${e}`);
      finish({ kind: 'unavailable' });
      return;
    }

    dlog('cstt', `listen ${opts.lang} timeout=${opts.timeoutMs}`);

    poll = setInterval(() => {
      if (settled || stopping) return;
      analyser.getByteTimeDomainData(frame);
      const now = performance.now();
      const level = rmsLevel(frame);
      if (level > peak) peak = level;
      const r = vadStep(vad, level, now, startedAt, cfg);
      vad = r.state;
      if (r.decision === 'stop-no-speech') {
        dlog('cstt', `no-speech: mic never crossed threshold (peak=${peak.toFixed(3)}, thr=${cfg.threshold})`);
        finish({ kind: 'no-speech' });
      } else if (r.decision === 'stop-utterance') stopAndSend();
    }, 50);
  });
}
