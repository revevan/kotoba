import { afterEach, describe, expect, it, vi } from 'vitest';
import { CLIP_FETCH_BUDGET_MS, resolveClip, sequenceOutcome } from '../src/audio/player';

describe('sequenceOutcome (decision 2: 404 is content, network failure is connection)', () => {
  it('every clip played → done', () => {
    expect(sequenceOutcome(['played', 'played', 'played'])).toBe('done');
  });

  it('a missing clip (404) mid-sequence is skipped, still done', () => {
    expect(sequenceOutcome(['played', 'missing', 'played'])).toBe('done');
  });

  it('a network failure after a played clip makes the sequence silent ("how do you say" + blank)', () => {
    expect(sequenceOutcome(['played', 'network-failed'])).toBe('silent');
  });

  it('all network failures → silent', () => {
    expect(sequenceOutcome(['network-failed', 'network-failed'])).toBe('silent');
  });

  it('an element error on a loaded clip is not a connection signal', () => {
    expect(sequenceOutcome(['play-error', 'played'])).toBe('done');
  });

  it('an empty sequence is done', () => {
    expect(sequenceOutcome([])).toBe('done');
  });
});

describe('resolveClip', () => {
  const objectUrls: string[] = [];
  const g = globalThis as unknown as Record<string, unknown>;
  const saved = { caches: g.caches, fetch: g.fetch, createObjectURL: URL.createObjectURL };

  afterEach(() => {
    g.caches = saved.caches;
    g.fetch = saved.fetch;
    URL.createObjectURL = saved.createObjectURL;
    vi.useRealTimers();
  });

  function install(opts: { cached?: Blob | null; fetch?: typeof fetch }) {
    URL.createObjectURL = (b: Blob) => {
      const u = `blob:mock/${objectUrls.length}-${b.size}`;
      objectUrls.push(u);
      return u;
    };
    g.caches = { match: async () => (opts.cached ? new Response(opts.cached) : undefined) };
    if (opts.fetch) g.fetch = opts.fetch;
  }

  it('serves a cached clip without touching the network', async () => {
    const fetchSpy = vi.fn();
    install({ cached: new Blob(['abc']), fetch: fetchSpy as unknown as typeof fetch });
    const r = await resolveClip('https://audio.example/ja/w1.mp3');
    expect(r.kind).toBe('blob');
    if (r.kind === 'blob') expect(r.from).toBe('cache');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('a 404 is "missing", not a connection failure', async () => {
    install({ cached: null, fetch: async () => new Response(null, { status: 404 }) });
    expect((await resolveClip('https://audio.example/sen-pre/s1.mp3')).kind).toBe('missing');
  });

  it('a thrown fetch (offline) is network-failed', async () => {
    install({
      cached: null,
      fetch: async () => {
        throw new TypeError('Load failed');
      },
    });
    expect((await resolveClip('https://audio.example/ja/w1.mp3')).kind).toBe('network-failed');
  });

  it('a 5xx is network-failed', async () => {
    install({ cached: null, fetch: async () => new Response('nope', { status: 503 }) });
    expect((await resolveClip('https://audio.example/ja/w1.mp3')).kind).toBe('network-failed');
  });

  it('a hanging fetch is aborted at the budget and counts as network-failed', async () => {
    vi.useFakeTimers();
    install({
      cached: null,
      fetch: (_url, init) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')));
        }),
    });
    const p = resolveClip('https://audio.example/ja/w1.mp3');
    await vi.advanceTimersByTimeAsync(CLIP_FETCH_BUDGET_MS + 1);
    expect((await p).kind).toBe('network-failed');
  });

  it('a network hit becomes a blob URL', async () => {
    install({ cached: null, fetch: async () => new Response(new Blob(['mp3'])) });
    const r = await resolveClip('https://audio.example/ja/w1.mp3');
    expect(r.kind).toBe('blob');
    if (r.kind === 'blob') expect(r.from).toBe('network');
  });

  it('data: URLs are played directly', async () => {
    expect((await resolveClip('data:audio/wav;base64,AAAA')).kind).toBe('direct');
  });
});
