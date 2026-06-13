import { describe, expect, it } from 'vitest';
import { mapProxyResponse, rmsLevel, vadStep, type VadConfig, type VadState } from '../src/speech/sttResponse';

describe('mapProxyResponse', () => {
  it('maps a transcript to a result', () => {
    expect(mapProxyResponse(200, { transcript: '医者' })).toEqual({ kind: 'result', alternatives: ['医者'] });
  });

  it('trims whitespace and treats empty as no-speech', () => {
    expect(mapProxyResponse(200, { transcript: '  はい ' })).toEqual({ kind: 'result', alternatives: ['はい'] });
    expect(mapProxyResponse(200, { transcript: '   ' })).toEqual({ kind: 'no-speech' });
    expect(mapProxyResponse(200, {})).toEqual({ kind: 'no-speech' });
  });

  it('maps auth failures to denied', () => {
    expect(mapProxyResponse(401, null)).toEqual({ kind: 'denied' });
    expect(mapProxyResponse(403, null)).toEqual({ kind: 'denied' });
  });

  it('maps other non-2xx to error with a code', () => {
    expect(mapProxyResponse(500, { error: 'upstream-down' })).toEqual({ kind: 'error', code: 'upstream-down' });
    expect(mapProxyResponse(502, null)).toEqual({ kind: 'error', code: 'http-502' });
  });
});

describe('rmsLevel', () => {
  it('is ~0 for silence (all 128)', () => {
    const buf = new Uint8Array(256).fill(128);
    expect(rmsLevel(buf)).toBeCloseTo(0, 5);
  });

  it('rises with amplitude', () => {
    const quiet = new Uint8Array(256).map((_, i) => (i % 2 ? 132 : 124)); // ±4
    const loud = new Uint8Array(256).map((_, i) => (i % 2 ? 200 : 56)); // ±72
    expect(rmsLevel(loud)).toBeGreaterThan(rmsLevel(quiet));
  });
});

describe('vadStep', () => {
  const cfg: VadConfig = {
    threshold: 0.02,
    trailingSilenceMs: 900,
    maxUtteranceMs: 5000,
    noSpeechTimeoutMs: 5000,
  };
  const fresh: VadState = { speechStarted: false, lastVoiceMs: null };

  it('continues while waiting for speech onset', () => {
    const r = vadStep(fresh, 0.0, 100, 0, cfg);
    expect(r.decision).toBe('continue');
    expect(r.state.speechStarted).toBe(false);
  });

  it('gives up if no speech by the timeout', () => {
    const r = vadStep(fresh, 0.0, 5000, 0, cfg);
    expect(r.decision).toBe('stop-no-speech');
  });

  it('latches speechStarted once a loud frame arrives', () => {
    const r = vadStep(fresh, 0.5, 300, 0, cfg);
    expect(r.state.speechStarted).toBe(true);
    expect(r.state.lastVoiceMs).toBe(300);
    expect(r.decision).toBe('continue');
  });

  it('ends the utterance after trailing silence', () => {
    const started: VadState = { speechStarted: true, lastVoiceMs: 1000 };
    expect(vadStep(started, 0.0, 1800, 0, cfg).decision).toBe('continue'); // 800ms < 900
    expect(vadStep(started, 0.0, 1950, 0, cfg).decision).toBe('stop-utterance'); // 950ms >= 900
  });

  it('caps a never-ending utterance at maxUtteranceMs', () => {
    const loud: VadState = { speechStarted: true, lastVoiceMs: 4999 };
    expect(vadStep(loud, 0.5, 5000, 0, cfg).decision).toBe('stop-utterance');
  });
});
