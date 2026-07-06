# Kotoba — hands-free Japanese vocab for the commute

An audio-first spaced-repetition vocabulary trainer designed to be used with the
phone dash-mounted and the screen on: tap **Start** once, then the whole session
runs by voice over AirPods or car Bluetooth.

- **Teach:** "Apple. In Japanese: ringo. り・ん・ご. Repeat after me: ringo."
- **Quiz:** "How do you say — apple?" → say the word → auto-graded by speech
  recognition when it hears you clearly; otherwise it reveals the answer and you
  say "got it" or "missed it".
- **Sentence work:** as a word matures it climbs a ladder of exercises —
  **cloze** (fill the blanked word in an example sentence) is live; **shadow**
  (say a sentence back) and **build** (free production) are pre-release behind
  `?labs=1`. Example sentences ship as static content per deck.
- **Spaced repetition:** FSRS scheduling (`ts-fsrs`) brings words back right
  before you'd forget them. Progress lives in IndexedDB on the phone, with JSON
  export/import for backup, plus optional passwordless sign-in for cross-device
  sync.
- **Cheap to run:** static site served from GitHub Pages; audio is pre-generated
  as MP3s with free Microsoft neural voices (`msedge-tts`) and served from a
  Cloudflare R2 CDN. Recognition uses **Deepgram** (`nova-2`) through a small
  Cloudflare Worker that holds the API key, with the browser's built-in
  `webkitSpeechRecognition` as a fallback. The labs sentence rungs grade
  production with **Claude** (Anthropic). Deepgram/Anthropic usage is the only
  real cost; hosting, backend (Workers + D1 + R2), and email (Resend) are free at
  this scale.

## Develop

```sh
npm install
npm run dev          # http://localhost:5173 — mic + speech recognition work on localhost
npm test             # vitest: matching, mora, state machine, scheduler, queue
npm run build        # typecheck + production build to dist/
```

Add `?mock=1` to the URL to type answers instead of speaking them — fastest way
to iterate on the session flow without a mic.

Add `?debug=1` to show an on-screen diagnostics log (machine events, speech
recognition lifecycle, audio failures). The log also persists to localStorage,
so after something misbehaves you can reload with `?debug=1` and copy it out.

## Data & audio pipeline

```sh
npm run build-decks               # JLPT CSVs (tools/sources) → public/decks/*.json
npm run gen-audio                 # generate MP3s for ALL decks (slow, thousands of clips)
npm run gen-audio n5-starter      # ...or just one deck
npm run sync-audio-r2             # push the audio corpus to the Cloudflare R2 CDN
```

`gen-audio` is idempotent: `tools/audio-manifest.json` records a content hash per
clip, so re-runs only generate what's new. Voices: `ja-JP-NanamiNeural` (words
and sentences, plus a slowed `-40%` rendition in `public/audio/ja-slow/` used as
the phonetic breakdown), `en-US-AriaNeural` (prompts). Clips are generated
locally then synced to Cloudflare R2 (`audio.kotobaapp.com`); the production
build fetches from there instead of bundling the corpus.

Word lists: Jonathan Waller's JLPT lists (tanos.co.uk, CC-BY) via the
`elzup/jlpt-word-list` CSV mirror, kept in `tools/sources/`.

### Example sentences

The cloze/shadow/build rungs draw on a corpus of example sentences generated
offline and shipped as static content (`public/sentences/{deckId}.json`). The
`tools/pipeline` stages generate them at scale with the **Anthropic Message
Batches API**: `plan` clusters words semantically (5–10 related words per request
to force pattern differentiation), `submit` runs the generation batch (Sonnet),
`fetch` validates mechanically with kuromoji and dedups near-duplicates
(char-trigram Jaccard on the cloze-masked sentence), and `judge` runs an LLM
rubric pass (weighting cloze recoverability most heavily) to decide what ships.

```sh
npm run pipeline -- <deckId> plan     # cluster words → state/plan.json
npm run pipeline -- <deckId> submit    # generation batch
npm run pipeline -- <deckId> fetch     # poll → validate → dedup
npm run pipeline -- <deckId> judge     # judge batch over valid sentences
npm run publish-sentences              # approved candidates → public/sentences/*.json
```

## Deploy

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and
publishes to GitHub Pages on every push to `main`. The app is served from the
custom domain **https://kotobaapp.com** (GitHub Pages custom domain; the build
sets `BASE_PATH: /` and ships a `public/CNAME`). Open it in iPhone Safari, allow
the mic, and optionally Add to Home Screen.

> Heads-up: if speech recognition misbehaves in the installed (home-screen) app,
> run it as a normal Safari tab instead — everything else works the same.

## On-the-road controls

Voice (during any listening moment): **repeat · skip · pause · resume**, and
**got it / missed it** when self-grading. Every command also has a giant on-screen
button. If speech recognition fails three times in a row, the session degrades
gracefully to reveal-and-tap mode instead of stalling.
