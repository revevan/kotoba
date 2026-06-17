/**
 * Kotoba STT proxy — Cloudflare Worker.
 *
 * Holds the speech-to-text API key (never shipped to the browser) and exposes a
 * single endpoint the PWA posts answer audio to:
 *
 *   POST /  multipart/form-data: audio=<blob>, lang=ja-JP|en-US
 *   200 -> { "transcript": "医者" }   (empty transcript = no speech detected)
 *
 * Default backend is Deepgram (set DEEPGRAM_API_KEY). To swap providers, replace
 * transcribe() below — the request/response contract above is all the client
 * depends on.
 *
 * Secrets / vars (wrangler):
 *   DEEPGRAM_API_KEY  (secret, required)
 *   ALLOWED_ORIGIN    (var, e.g. https://revevan.github.io) — CORS allow-list
 */

const LANG_MAP = { 'ja-JP': 'ja', 'en-US': 'en' };

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') {
      return json({ error: 'method-not-allowed' }, 405, cors);
    }
    if (!env.DEEPGRAM_API_KEY) {
      return json({ error: 'proxy-misconfigured' }, 500, cors);
    }

    let audio, lang;
    try {
      const form = await request.formData();
      audio = form.get('audio');
      lang = form.get('lang');
    } catch {
      return json({ error: 'bad-form' }, 400, cors);
    }
    if (!audio || typeof audio === 'string') {
      return json({ error: 'no-audio' }, 400, cors);
    }

    const language = LANG_MAP[lang] || 'ja';
    try {
      const result = await transcribe(audio, language, env.DEEPGRAM_API_KEY);
      return json(result, 200, cors);
    } catch (e) {
      return json({ error: 'upstream', detail: String(e) }, 502, cors);
    }
  },
};

async function transcribe(audio, language, apiKey) {
  // smart_format on gave better word accuracy in testing; the kanji→reading
  // analyzer handles kanji output, so formatting no longer needs to be off.
  const params = new URLSearchParams({ model: 'nova-2', language, smart_format: 'true', punctuate: 'false' });
  const resp = await fetch(`https://api.deepgram.com/v1/listen?${params}`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': audio.type || 'audio/mp4',
    },
    body: await audio.arrayBuffer(),
  });
  if (!resp.ok) throw new Error(`deepgram ${resp.status}`);
  const data = await resp.json();
  const alt = data?.results?.channels?.[0]?.alternatives?.[0];
  // confidence + decoded duration are diagnostic: duration ~0 means the audio
  // didn't decode; duration ok + empty transcript means it decoded but Deepgram
  // heard no words.
  return {
    transcript: alt?.transcript ?? '',
    confidence: alt?.confidence ?? null,
    duration: data?.metadata?.duration ?? null,
  };
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
