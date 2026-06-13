# Kotoba STT proxy

A tiny Cloudflare Worker that holds your speech-to-text API key and transcribes
answer audio for the app. The browser can't hold the key (the app is a static
site), so this sits between the PWA and the STT provider.

Default provider is **Deepgram** (`nova-2`, excellent Japanese, ~hundreds of ms
latency). The client only depends on the contract below, so you can swap the
provider by editing `transcribe()` in `worker.js`.

```
POST /   multipart/form-data: audio=<blob>, lang=ja-JP|en-US
200  ->  { "transcript": "医者" }     # empty transcript = no speech
```

## One-time setup

1. **Get a Deepgram API key** — sign up at https://deepgram.com (free credit is
   plenty for personal use), create an API key.

2. **Install Wrangler and log in**
   ```bash
   npm install -g wrangler
   wrangler login
   ```

3. **Deploy the worker** (from this folder)
   ```bash
   cd server/stt-proxy
   wrangler secret put DEEPGRAM_API_KEY   # paste your key when prompted
   wrangler deploy
   ```
   Wrangler prints the worker URL, e.g. `https://kotoba-stt-proxy.<you>.workers.dev`.

4. **Confirm the CORS origin** in `wrangler.toml` (`ALLOWED_ORIGIN`) matches the
   origin your app is served from — for GitHub Pages that's
   `https://<you>.github.io` (no path, no trailing slash). Re-run `wrangler deploy`
   if you change it.

5. **Point the app at the worker.** Add the URL as a GitHub Actions secret named
   `STT_ENDPOINT` (repo → Settings → Secrets and variables → Actions → New
   repository secret). The deploy workflow injects it as `VITE_STT_ENDPOINT` at
   build time. Without this secret the app simply falls back to the built-in
   (unreliable on iOS) Web Speech recognizer, so nothing breaks if it's unset.

6. **Trigger a deploy** (push any commit to `main`, or run the Deploy workflow
   manually). The new build will route recognition through the proxy.

## Cost

Deepgram prerecorded is billed per second of audio. Answer clips are a second or
two each, and silence never gets sent (the client only uploads once it detects
speech), so a full commute session is a few cents at most.

## Swapping to OpenAI Whisper

Replace `transcribe()` with a call to `https://api.openai.com/v1/audio/transcriptions`
(`model: gpt-4o-transcribe` or `whisper-1`, `language: ja`/`en`, the audio as the
`file` field), set `OPENAI_API_KEY` instead, and return `data.text`.
