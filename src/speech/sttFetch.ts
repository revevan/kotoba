// The transcribe POST with its retry ladder, isolated from the recognizer so
// the runner's listen watchdog can import the total budget — the watchdog must
// sit beyond the full ladder or it fires mid-retry (see runner.runListen).
// Kept free of import.meta.env and browser-only APIs for the same reason.

// 12s per attempt: Evan's debug logs show successful proxy responses taking
// 5-8s, so the old 8s abort was killing requests that were about to succeed.
export const STT_FETCH_TIMEOUT_MS = 12000;
export const STT_RETRY_BACKOFF_MS = 400;
export const STT_ATTEMPTS = 2;
/** Worst-case wall time postSttForm can hold a listen open. */
export const STT_TRANSCRIBE_BUDGET_MS = STT_ATTEMPTS * STT_FETCH_TIMEOUT_MS + STT_RETRY_BACKOFF_MS;

export interface SttPostResult {
  status: number;
  body: Record<string, unknown> | null;
}

/**
 * POST the recorded clip, retrying on network failure or 5xx. The clip is
 * already recorded when the first attempt fails, so a retry is invisible to
 * the user — no re-speaking. 2xx/4xx are final (an empty transcript or an
 * auth failure won't improve on a retry); `cancelled` stops the ladder when
 * the listen has been superseded or aborted.
 */
export async function postSttForm(
  endpoint: string,
  form: FormData,
  opts: { fetchImpl?: typeof fetch; cancelled?: () => boolean; log?: (msg: string) => void } = {},
): Promise<SttPostResult> {
  const doFetch = opts.fetchImpl ?? fetch;
  let lastErr: unknown;
  let last5xx: SttPostResult | null = null;
  for (let attempt = 1; attempt <= STT_ATTEMPTS; attempt++) {
    if (attempt > 1) {
      await new Promise((r) => setTimeout(r, STT_RETRY_BACKOFF_MS));
      if (opts.cancelled?.()) break;
      opts.log?.(`retry ${attempt}/${STT_ATTEMPTS}`);
    }
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), STT_FETCH_TIMEOUT_MS);
    try {
      const resp = await doFetch(endpoint, { method: 'POST', body: form, signal: ctrl.signal });
      let body: Record<string, unknown> | null = null;
      try {
        body = (await resp.json()) as Record<string, unknown>;
      } catch {
        /* non-JSON body */
      }
      if (resp.status < 500) return { status: resp.status, body };
      last5xx = { status: resp.status, body };
      opts.log?.(`attempt ${attempt}/${STT_ATTEMPTS}: HTTP ${resp.status}`);
    } catch (e) {
      lastErr = e;
      opts.log?.(`attempt ${attempt}/${STT_ATTEMPTS} failed: ${e}`);
    } finally {
      clearTimeout(timer);
    }
    if (opts.cancelled?.()) break;
  }
  if (last5xx) return last5xx;
  throw lastErr ?? new Error('stt post cancelled');
}
