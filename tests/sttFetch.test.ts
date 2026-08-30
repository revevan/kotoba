import { afterEach, describe, expect, it, vi } from 'vitest';
import { postSttForm, STT_ATTEMPTS, STT_FETCH_TIMEOUT_MS, STT_RETRY_BACKOFF_MS, STT_TRANSCRIBE_BUDGET_MS } from '../src/speech/sttFetch';

const ok = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

describe('postSttForm', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('retries once after a network failure and returns the second response', async () => {
    vi.useFakeTimers();
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockRejectedValueOnce(new TypeError('Load failed'))
      .mockResolvedValueOnce(ok({ transcript: 'ねこ' }));
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl });
    await vi.advanceTimersByTimeAsync(STT_RETRY_BACKOFF_MS);
    const res = await p;
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(res).toEqual({ status: 200, body: { transcript: 'ねこ' } });
  });

  it('retries a 5xx and returns the eventual success', async () => {
    vi.useFakeTimers();
    const fetchImpl = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(ok({ error: 'upstream' }, 503))
      .mockResolvedValueOnce(ok({ transcript: 'ねこ' }));
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl });
    await vi.advanceTimersByTimeAsync(STT_RETRY_BACKOFF_MS);
    const res = await p;
    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(res.status).toBe(200);
  });

  it('does not retry a 4xx — auth failures are final', async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue(ok({ error: 'nope' }, 403));
    const res = await postSttForm('https://stt.test', new FormData(), { fetchImpl });
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    expect(res.status).toBe(403);
  });

  it('rejects after every attempt fails', async () => {
    vi.useFakeTimers();
    const fetchImpl = vi.fn<typeof fetch>().mockRejectedValue(new TypeError('Load failed'));
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl });
    const settled = expect(p).rejects.toThrow('Load failed');
    await vi.advanceTimersByTimeAsync(STT_RETRY_BACKOFF_MS);
    await settled;
    expect(fetchImpl).toHaveBeenCalledTimes(STT_ATTEMPTS);
  });

  it('returns the last 5xx when every attempt is a server error', async () => {
    vi.useFakeTimers();
    const fetchImpl = vi.fn<typeof fetch>().mockImplementation(() => Promise.resolve(ok({ error: 'down' }, 502)));
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl });
    await vi.advanceTimersByTimeAsync(STT_RETRY_BACKOFF_MS);
    const res = await p;
    expect(fetchImpl).toHaveBeenCalledTimes(STT_ATTEMPTS);
    expect(res).toEqual({ status: 502, body: { error: 'down' } });
  });

  it('aborts a hung attempt at the per-attempt timeout, then retries', async () => {
    vi.useFakeTimers();
    let calls = 0;
    const fetchImpl: typeof fetch = (_url, init) => {
      calls++;
      return new Promise((_resolve, reject) => {
        init!.signal!.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      });
    };
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl });
    const settled = expect(p).rejects.toThrow();
    await vi.advanceTimersByTimeAsync(STT_TRANSCRIBE_BUDGET_MS);
    await settled;
    expect(calls).toBe(STT_ATTEMPTS);
  });

  it('stops between attempts once cancelled', async () => {
    vi.useFakeTimers();
    let cancelled = false;
    const fetchImpl = vi.fn<typeof fetch>().mockImplementation(() => {
      cancelled = true; // superseded while the first attempt was in flight
      return Promise.reject(new TypeError('Load failed'));
    });
    const p = postSttForm('https://stt.test', new FormData(), { fetchImpl, cancelled: () => cancelled });
    const settled = expect(p).rejects.toThrow('Load failed');
    await vi.advanceTimersByTimeAsync(STT_TRANSCRIBE_BUDGET_MS);
    await settled;
    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('tolerates a non-JSON body', async () => {
    const fetchImpl = vi.fn<typeof fetch>().mockResolvedValue(new Response('<html>oops</html>', { status: 200 }));
    const res = await postSttForm('https://stt.test', new FormData(), { fetchImpl });
    expect(res).toEqual({ status: 200, body: null });
  });

  it('budget constant covers the full ladder', () => {
    expect(STT_TRANSCRIBE_BUDGET_MS).toBe(STT_ATTEMPTS * STT_FETCH_TIMEOUT_MS + STT_RETRY_BACKOFF_MS);
  });
});
