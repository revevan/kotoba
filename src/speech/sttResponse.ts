import type { SRResult } from './recognizer';

/** Shape returned by the STT proxy: { transcript, confidence? }. */
export interface SttProxyResponse {
  transcript?: unknown;
  confidence?: unknown;
  error?: unknown;
}

/** Map a proxy JSON body (already parsed) + HTTP status into an SRResult. */
export function mapProxyResponse(status: number, body: SttProxyResponse | null): SRResult {
  if (status === 401 || status === 403) return { kind: 'denied' };
  if (status < 200 || status >= 300) {
    const code = body && typeof body.error === 'string' ? body.error : `http-${status}`;
    return { kind: 'error', code };
  }
  const transcript = body && typeof body.transcript === 'string' ? body.transcript.trim() : '';
  if (!transcript) return { kind: 'no-speech' };
  return { kind: 'result', alternatives: [transcript] };
}

/**
 * Voice-activity decision for the capture loop, evaluated on each audio frame.
 *
 * We record continuously but only *send* audio once speech is detected, then
 * stop a short while after it falls silent — natural turn-taking without the
 * full timeout window every time. Pure so it can be unit-tested frame by frame.
 */
export interface VadState {
  speechStarted: boolean;
  /** ms timestamp of the last frame whose level was above the speech threshold. */
  lastVoiceMs: number | null;
}

export interface VadConfig {
  /** Normalized RMS (0..1) above which a frame counts as speech. */
  threshold: number;
  /** Silence after speech that ends the utterance. */
  trailingSilenceMs: number;
  /** Hard cap on a single utterance once speech has started. */
  maxUtteranceMs: number;
  /** If no speech by this point, give up (maps to no-speech). */
  noSpeechTimeoutMs: number;
}

export type VadDecision = 'continue' | 'stop-utterance' | 'stop-no-speech';

export function vadStep(
  state: VadState,
  level: number,
  nowMs: number,
  startedAtMs: number,
  cfg: VadConfig
): { state: VadState; decision: VadDecision } {
  const voiced = level >= cfg.threshold;
  const next: VadState = {
    speechStarted: state.speechStarted || voiced,
    lastVoiceMs: voiced ? nowMs : state.lastVoiceMs,
  };

  if (!next.speechStarted) {
    if (nowMs - startedAtMs >= cfg.noSpeechTimeoutMs) return { state: next, decision: 'stop-no-speech' };
    return { state: next, decision: 'continue' };
  }

  if (nowMs - startedAtMs >= cfg.maxUtteranceMs) return { state: next, decision: 'stop-utterance' };
  if (next.lastVoiceMs !== null && nowMs - next.lastVoiceMs >= cfg.trailingSilenceMs) {
    return { state: next, decision: 'stop-utterance' };
  }
  return { state: next, decision: 'continue' };
}

/** Root-mean-square of a byte time-domain buffer (128 = silence midpoint), normalized 0..1. */
export function rmsLevel(timeDomain: Uint8Array): number {
  let sumSq = 0;
  for (let i = 0; i < timeDomain.length; i++) {
    const v = (timeDomain[i] - 128) / 128;
    sumSq += v * v;
  }
  return Math.sqrt(sumSq / timeDomain.length);
}
