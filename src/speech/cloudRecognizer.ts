import { dlog } from '../debug/log';
import type { ListenOptions, SRResult } from './recognizer';
import { sttEndpoint } from './sttConfig';
import { postSttForm } from './sttFetch';
import { mapProxyResponse, rmsLevel, vadStep, type VadConfig, type VadState } from './sttResponse';

/**
 * Cloud speech-to-text recognizer — a drop-in replacement for the WebKit Web
 * Speech `listen()` that bypasses iOS Safari's unreliable speech service.
 *
 * The microphone is opened ONCE per session and kept hot (see ensureMic): on
 * iOS a freshly-opened getUserMedia stream has a ~1–2s dead period before real
 * audio flows, which silently swallowed short answers — most visibly the
 * 4-second self-grade window right after the app finished speaking. A persistent
 * stream removes that dead period entirely. Each listen just attaches a fresh
 * MediaRecorder, uses a WebAudio AnalyserNode for voice-activity detection
 * (send only once speech is heard, stop shortly after silence), and POSTs the
 * clip to the proxy (which holds the API key) for transcription.
 */

interface WebkitWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

const VAD_BASE: Omit<VadConfig, 'noSpeechTimeoutMs'> = {
  threshold: 0.01,
  trailingSilenceMs: 700,
  // Cap the clip short: answers are one word / one command, so a longer window
  // just feeds Deepgram seconds of ambient noise in a noisy car.
  maxUtteranceMs: 2500,
};

// Number of 50ms poll frames to sample before starting VAD — gives the dynamic
// threshold time to adapt to ambient noise (e.g. highway wind at speed).
const CALIBRATION_FRAMES = 3; // 150ms

let audioCtx: AudioContext | null = null;
let listenSeq = 0;
let activeAbort: (() => void) | null = null;

// Persistent mic for the session.
let micStream: MediaStream | null = null;
let micSource: MediaStreamAudioSourceNode | null = null;
let micAnalyser: AnalyserNode | null = null;

export function cloudSrAvailable(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof window.MediaRecorder !== 'undefined'
  );
}

// When returning from background on iOS the AudioContext is suspended and the
// mic stream tracks may have ended. Resume the context and clear any dead stream
// so the next ensureMic() acquires a fresh one. This runs on every foreground
// transition, which is safe — ensureMic() is a no-op when everything is healthy.
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    void audioCtx?.resume();
    if (micStream?.getAudioTracks().some((t) => t.readyState === 'ended')) {
      cloudReleaseMic();
    }
  });
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

function micLive(): boolean {
  return !!micStream && micStream.getAudioTracks().some((t) => t.readyState === 'live');
}

// Bumped by cloudReleaseMic so an in-flight acquisition that loses the race
// (e.g. pause tapped while resume's primeMic awaits getUserMedia) stops its
// stream instead of leaving a hot mic behind.
let micEpoch = 0;
// Single-flight: resume fires primeMic() without awaiting it, and the next
// listen calls ensureMic() concurrently — both must share one getUserMedia,
// not race two streams (the loser's stream would leak and stay live).
let micAcquiring: Promise<AnalyserNode | null> | null = null;

/** Acquire (or reuse) the persistent mic + analyser. Returns null on failure. */
function ensureMic(): Promise<AnalyserNode | null> {
  if (micLive() && micAnalyser) return Promise.resolve(micAnalyser);
  if (micAcquiring) return micAcquiring;
  micAcquiring = acquireMic().finally(() => {
    micAcquiring = null;
  });
  return micAcquiring;
}

async function acquireMic(): Promise<AnalyserNode | null> {
  cloudReleaseMic(); // clear any half-dead state
  const epoch = micEpoch;

  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
  } catch (e) {
    dlog('cstt', `getUserMedia failed: ${e}`);
    return null;
  }
  if (epoch !== micEpoch) {
    // Released (paused / session ended) while acquiring — don't keep a hot mic.
    stream.getTracks().forEach((t) => t.stop());
    dlog('cstt', 'mic released mid-acquire');
    return null;
  }

  micStream = stream;
  primeCloudAudio();
  if (!audioCtx) return null;
  micSource = audioCtx.createMediaStreamSource(stream);
  micAnalyser = audioCtx.createAnalyser();
  micAnalyser.fftSize = 1024;
  micSource.connect(micAnalyser);
  dlog('cstt', 'mic acquired (persistent)');
  return micAnalyser;
}

/** Warm the mic at session start so the first answer doesn't hit a cold stream. */
export async function primeMic(): Promise<void> {
  await ensureMic();
}

export function cloudReleaseMic(): void {
  micEpoch++;
  try {
    micSource?.disconnect();
  } catch {
    /* already gone */
  }
  micStream?.getTracks().forEach((t) => t.stop());
  micStream = null;
  micSource = null;
  micAnalyser = null;
}

export function cloudAbort(): void {
  listenSeq++;
  activeAbort?.();
}

/**
 * Local voice-activity wait for the "repeat after me" echo. Holds until the user
 * speaks (then a beat of silence) or the timeout elapses, using only the
 * already-warm mic analyser — nothing is recorded or sent to Deepgram, so the
 * teach step costs no transcription. The mic stream stays open for the next quiz
 * answer. Participates in the same listenSeq/activeAbort machinery as cloudListen
 * so a tap/pause (cloudAbort) cancels it.
 */
export async function cloudWaitForEcho(timeoutMs: number): Promise<'spoke' | 'silent' | 'aborted'> {
  if (!cloudSrAvailable()) return 'silent';
  const seq = ++listenSeq;
  activeAbort?.();

  const analyser = await ensureMic();
  if (seq !== listenSeq) return 'aborted';
  if (!analyser) return 'silent';

  return new Promise<'spoke' | 'silent' | 'aborted'>((resolve) => {
    let settled = false;
    let poll: ReturnType<typeof setInterval> | null = null;
    let vad: VadState = { speechStartMs: null, lastVoiceMs: null };
    const startedAt = performance.now();
    const cfg: VadConfig = { ...VAD_BASE, noSpeechTimeoutMs: timeoutMs };
    const frame = new Uint8Array(analyser.fftSize);

    const finish = (r: 'spoke' | 'silent' | 'aborted') => {
      if (settled) return;
      settled = true;
      if (poll) clearInterval(poll);
      poll = null;
      if (activeAbort === abort) activeAbort = null;
      dlog('cstt', `echo-wait ${r}`);
      resolve(r);
    };
    const abort = () => finish('aborted');
    activeAbort = abort;

    poll = setInterval(() => {
      if (settled) return;
      if (seq !== listenSeq) {
        finish('aborted');
        return;
      }
      analyser.getByteTimeDomainData(frame);
      const r = vadStep(vad, rmsLevel(frame), performance.now(), startedAt, cfg);
      vad = r.state;
      if (r.decision === 'stop-utterance') finish('spoke');
      else if (r.decision === 'stop-no-speech') finish('silent');
    }, 50);
  });
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

  const analyser = await ensureMic();
  if (seq !== listenSeq) return { kind: 'aborted' };
  if (!analyser || !micStream) return { kind: 'denied' };
  const stream = micStream;

  return new Promise<SRResult>((resolve) => {
    let settled = false;
    let stopping = false;
    let posting = false;
    let poll: ReturnType<typeof setInterval> | null = null;
    let recorder: MediaRecorder | null = null;
    const chunks: BlobPart[] = [];
    let vad: VadState = { speechStartMs: null, lastVoiceMs: null };
    let peak = 0; // loudest frame seen, for diagnosing missed speech
    const startedAt = performance.now();
    const cfg: VadConfig = {
      ...VAD_BASE,
      ...(opts.maxUtteranceMs ? { maxUtteranceMs: opts.maxUtteranceMs } : {}),
      ...(opts.trailingSilenceMs ? { trailingSilenceMs: opts.trailingSilenceMs } : {}),
      noSpeechTimeoutMs: opts.timeoutMs,
    };
    let calibFrames = 0;
    let calibSum = 0;

    const frame = new Uint8Array(analyser.fftSize);

    const finish = (result: SRResult) => {
      if (settled) return;
      settled = true;
      if (poll) clearInterval(poll);
      poll = null;
      if (activeAbort === abort) activeAbort = null;
      // Stop this listen's recorder but leave the mic stream hot for the next one.
      if (recorder && recorder.state !== 'inactive') {
        try {
          recorder.stop();
        } catch {
          /* already stopped */
        }
      }
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
        for (const hint of opts.hints ?? []) form.append('hint', hint);
        dlog('cstt', `POST ${Math.round(blob.size / 1024)}KB ${opts.lang} ${type} ${clipMs}ms peak=${peak.toFixed(3)}${opts.hints?.length ? ` hints=${opts.hints.length}` : ''}`);
        // The clip is recorded, so retries cost the user nothing (see sttFetch);
        // a superseded/aborted listen stops the ladder via `cancelled`.
        const { status, body } = await postSttForm(sttEndpoint, form, {
          cancelled: () => settled || seq !== listenSeq,
          log: (m) => dlog('cstt', m),
        });
        dlog('cstt', `deepgram tx="${body?.transcript ?? ''}" conf=${body?.confidence ?? '?'} dur=${body?.duration ?? '?'}`);
        finish(mapProxyResponse(status, body));
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

      // Calibration phase: sample ambient noise before running VAD so the
      // threshold adapts to the environment (quiet room vs. highway driving).
      if (calibFrames < CALIBRATION_FRAMES) {
        calibSum += level;
        calibFrames++;
        if (calibFrames === CALIBRATION_FRAMES) {
          const floor = calibSum / CALIBRATION_FRAMES;
          const adapted = Math.max(VAD_BASE.threshold, Math.min(0.15, floor * 2.0));
          if (adapted > VAD_BASE.threshold) {
            cfg.threshold = adapted;
            dlog('cstt', `noise floor ${floor.toFixed(3)} → threshold ${adapted.toFixed(3)}`);
          }
        }
        return;
      }

      const r = vadStep(vad, level, now, startedAt, cfg);
      vad = r.state;
      if (r.decision === 'stop-no-speech') {
        dlog('cstt', `no-speech: mic never crossed threshold (peak=${peak.toFixed(3)}, thr=${cfg.threshold})`);
        finish({ kind: 'no-speech' });
      } else if (r.decision === 'stop-utterance') stopAndSend();
    }, 50);
  });
}
