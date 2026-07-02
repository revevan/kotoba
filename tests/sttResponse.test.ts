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

  it('adds a pre-gap alternative when trailing noise decoded into extra words', () => {
    const body = {
      transcript: 'きんようび妙帯',
      words: [
        { word: 'きんようび', start: 0.2, end: 1.1 },
        { word: '妙帯', start: 1.9, end: 2.4 },
      ],
    };
    expect(mapProxyResponse(200, body)).toEqual({ kind: 'result', alternatives: ['きんようび妙帯', 'きんようび'] });
  });

  it('keeps continuous speech as a single alternative', () => {
    const body = {
      transcript: 'りんごをたべます',
      words: [
        { word: 'りんご', start: 0.2, end: 0.7 },
        { word: 'を', start: 0.75, end: 0.85 },
        { word: 'たべます', start: 0.9, end: 1.5 },
      ],
    };
    expect(mapProxyResponse(200, body)).toEqual({ kind: 'result', alternatives: ['りんごをたべます'] });
  });

  it('ignores missing or malformed word timings', () => {
    expect(mapProxyResponse(200, { transcript: 'はい' })).toEqual({ kind: 'result', alternatives: ['はい'] });
    expect(mapProxyResponse(200, { transcript: 'はい', words: 'nope' })).toEqual({ kind: 'result', alternatives: ['はい'] });
    expect(mapProxyResponse(200, { transcript: 'はい', words: [{ word: 'はい' }, { word: 'よ' }] })).toEqual({
      kind: 'result',
      alternatives: ['はい'],
    });
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
  const fresh: VadState = { speechStartMs: null, lastVoiceMs: null };

  it('continues while waiting for speech onset', () => {
    const r = vadStep(fresh, 0.0, 100, 0, cfg);
    expect(r.decision).toBe('continue');
    expect(r.state.speechStartMs).toBe(null);
  });

  it('gives up if no speech by the timeout', () => {
    const r = vadStep(fresh, 0.0, 5000, 0, cfg);
    expect(r.decision).toBe('stop-no-speech');
  });

  it('latches the speech-onset timestamp once a loud frame arrives', () => {
    const r = vadStep(fresh, 0.5, 300, 0, cfg);
    expect(r.state.speechStartMs).toBe(300);
    expect(r.state.lastVoiceMs).toBe(300);
    expect(r.decision).toBe('continue');
  });

  it('ends the utterance after trailing silence', () => {
    const started: VadState = { speechStartMs: 500, lastVoiceMs: 1000 };
    expect(vadStep(started, 0.0, 1800, 0, cfg).decision).toBe('continue'); // 800ms < 900
    expect(vadStep(started, 0.0, 1950, 0, cfg).decision).toBe('stop-utterance'); // 950ms >= 900
  });

  it('caps a never-ending utterance at maxUtteranceMs from onset', () => {
    const loud: VadState = { speechStartMs: 0, lastVoiceMs: 4999 };
    expect(vadStep(loud, 0.5, 5000, 0, cfg).decision).toBe('stop-utterance');
  });

  it('gives a late answer the full utterance window (cap from onset, not listen start)', () => {
    // Speech begins at 4.2s — just before the 5s no-speech deadline.
    let r = vadStep(fresh, 0.5, 4200, 0, cfg);
    expect(r.decision).toBe('continue');
    // 4.8s after listen start but only 600ms after onset: must keep going.
    r = vadStep(r.state, 0.5, 4800, 0, cfg);
    expect(r.decision).toBe('continue');
    // Still going 4s into the utterance (8.2s after listen start).
    r = vadStep(r.state, 0.5, 8200, 0, cfg);
    expect(r.decision).toBe('continue');
    // Cap finally lands 5s after onset.
    r = vadStep(r.state, 0.5, 9200, 0, cfg);
    expect(r.decision).toBe('stop-utterance');
  });
});
