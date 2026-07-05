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
    // ALLOWED_ORIGIN is a comma-separated allowlist; echo the request's origin
    // if it's on it (supports the custom domain + the old GitHub Pages URL).
    const allowed = (env.ALLOWED_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
    const reqOrigin = request.headers.get('Origin') || '';
    const origin = allowed.includes(reqOrigin) ? reqOrigin : allowed[0] || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') {
      return json({ error: 'method-not-allowed' }, 405, cors);
    }

    // Rung-4 sentence grader: POST /grade { word:{kana,written,english}, transcript }
    //   200 -> { verdict: "good"|"again", note }
    if (new URL(request.url).pathname === '/grade') {
      if (!env.ANTHROPIC_API_KEY) return json({ error: 'grader-misconfigured' }, 500, cors);
      try {
        const body = await request.json();
        if (!body?.word?.kana || typeof body.transcript !== 'string' || !body.transcript.trim()) {
          return json({ error: 'bad-body' }, 400, cors);
        }
        const result = await gradeSentence(body.word, body.transcript.slice(0, 300), env);
        return json(result, 200, cors);
      } catch (e) {
        return json({ error: 'upstream', detail: String(e) }, 502, cors);
      }
    }

    if (!env.DEEPGRAM_API_KEY) {
      return json({ error: 'proxy-misconfigured' }, 500, cors);
    }

    let audio, lang, hints;
    try {
      const form = await request.formData();
      audio = form.get('audio');
      lang = form.get('lang');
      // Expected-answer terms the client knows (the word being quizzed). Used to
      // bias Deepgram toward short utterances it otherwise drops as no-speech.
      hints = form.getAll('hint').filter((h) => typeof h === 'string' && h.trim());
    } catch {
      return json({ error: 'bad-form' }, 400, cors);
    }
    if (!audio || typeof audio === 'string') {
      return json({ error: 'no-audio' }, 400, cors);
    }

    const language = LANG_MAP[lang] || 'ja';
    try {
      const result = await transcribe(audio, language, env.DEEPGRAM_API_KEY, hints);
      return json(result, 200, cors);
    } catch (e) {
      return json({ error: 'upstream', detail: String(e) }, 502, cors);
    }
  },
};

async function transcribe(audio, language, apiKey, hints = []) {
  // smart_format on gave better word accuracy in testing; the kanji→reading
  // analyzer handles kanji output, so formatting no longer needs to be off.
  const params = new URLSearchParams({ model: 'nova-2', language, smart_format: 'true', punctuate: 'false' });
  // Keyword boosting: nudge the model toward the expected answer so short words
  // ("誰", "今") aren't dropped as no-speech. Intensifier 3: at 2 Deepgram still
  // returned empty transcripts for clean short answers (good level, ~2s decoded
  // audio, transcript=""). Hallucination risk stays bounded because the client
  // only uploads once its VAD hears speech — clips are never pure silence —
  // and a wrong accept still gets corrected by the reveal flow.
  for (const hint of dedupe(hints).slice(0, 8)) params.append('keywords', `${hint}:3`);
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
    // Word timings let the client split the spoken answer off junk words
    // decoded from trailing cabin noise (in noise the VAD can't detect the
    // end of speech, so clips run to the max-utterance cap and the tail gets
    // transcribed too, e.g. "きんようび妙帯" for 金曜日).
    words: (alt?.words ?? []).map((w) => ({ word: w.word, start: w.start, end: w.end })),
  };
}

/**
 * LLM grading for the "build a sentence" exercise. Lenient by design: the
 * transcript comes from far-field speech recognition, so particle slips and
 * STT artifacts must not fail a genuinely correct sentence. Haiku by default —
 * this is a yes/no judgment on one short sentence (override: GRADE_MODEL var).
 */
async function gradeSentence(word, transcript, env) {
  const model = env.GRADE_MODEL || 'claude-haiku-4-5';
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 150,
      system:
        'You grade one sentence spoken by a Japanese learner (beginner–intermediate). The input is a speech-to-text ' +
        'transcript and may contain recognition artifacts. Grade whether the TARGET WORD is used correctly and the ' +
        'sentence is meaningful Japanese. Be lenient: ignore minor particle/conjugation slips and obvious STT errors. ' +
        'Grade "again" only when the target word is missing or clearly misused, or the utterance is not a meaningful ' +
        'sentence. Reply with JSON only: {"verdict":"good"|"again","note":"<one short encouraging sentence, ≤12 words>"}',
      messages: [{
        role: 'user',
        content: `TARGET WORD: ${word.written?.[0] ?? word.kana}（${word.kana}） = "${word.english ?? ''}"\nTRANSCRIPT: 「${transcript}」`,
      }],
    }),
  });
  if (!resp.ok) throw new Error(`anthropic ${resp.status}`);
  const data = await resp.json();
  const text = (data.content || []).find((b) => b.type === 'text')?.text ?? '';
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) return { verdict: 'again', note: '' };
  const parsed = JSON.parse(text.slice(start, end + 1));
  return { verdict: parsed.verdict === 'good' ? 'good' : 'again', note: String(parsed.note ?? '').slice(0, 120) };
}

function dedupe(items) {
  return [...new Set(items.map((s) => s.trim()).filter(Boolean))];
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
