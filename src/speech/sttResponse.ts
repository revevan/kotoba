import type { SRResult } from './recognizer';

/** Shape returned by the STT proxy: { transcript, confidence?, duration?, words? }. */
export interface SttProxyResponse {
  transcript?: unknown;
  confidence?: unknown;
  duration?: unknown;
  words?: unknown;
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
  const alternatives = [transcript];
  const primary = primaryUtterance(body?.words);
  if (primary && primary !== transcript) alternatives.push(primary);
  return { kind: 'result', alternatives };
}

interface ProxyWord {
  word: string;
  start: number;
  end: number;
}

// A pause this long between decoded words separates the spoken answer from
// junk transcribed out of trailing noise. Continuous speech (the word inside a
// sentence) has no such pause, so embedded-word answers are still graded whole.
const UTTERANCE_GAP_S = 0.6;

function parseWords(raw: unknown): ProxyWord[] | null {
  if (!Array.isArray(raw) || raw.length < 2) return null;
  const words: ProxyWord[] = [];
  for (const w of raw) {
    if (!w || typeof w !== 'object') return null;
    const { word, start, end } = w as Record<string, unknown>;
    if (typeof word !== 'string' || typeof start !== 'number' || typeof end !== 'number') return null;
    words.push({ word, start, end });
  }
  return words;
}

/**
 * The first continuous run of words, cut at the first inter-word pause of
 * UTTERANCE_GAP_S or more. In noise the capture VAD can't hear the end of
 * speech, so the clip runs to its max-utterance cap and Deepgram decodes the
 * noisy tail into extra tokens ("きんようび妙帯" for 金曜日); the timings expose
 * the silence between answer and junk. Null when there is no such pause.
 */
export function primaryUtterance(raw: unknown): string | null {
  const words = parseWords(raw);
  if (!words) return null;
  let cut = words.length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].start - words[i - 1].end >= UTTERANCE_GAP_S) {
      cut = i;
      break;
    }
  }
  if (cut === words.length) return null;
  return words
    .slice(0, cut)
    .map((w) => w.word)
    .join('');
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
