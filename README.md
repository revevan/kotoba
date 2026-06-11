# Kotoba — hands-free Japanese vocab for the commute

An audio-first spaced-repetition vocabulary trainer designed to be used with the
phone dash-mounted and the screen on: tap **Start** once, then the whole session
runs by voice over AirPods or car Bluetooth.

- **Teach:** "Apple. In Japanese: ringo. り・ん・ご. Repeat after me: ringo."
- **Quiz:** "How do you say — apple?" → say the word → auto-graded by speech
  recognition when it hears you clearly; otherwise it reveals the answer and you
  say "got it" or "missed it".
- **Spaced repetition:** FSRS scheduling (`ts-fsrs`) brings words back right
  before you'd forget them. Progress lives in IndexedDB on the phone, with JSON
  export/import for backup.
- **$0 to run:** static site, no backend. All speech audio is pre-generated as
  MP3s with free Microsoft neural voices (`msedge-tts`); recognition uses
  Safari/Chrome's built-in `webkitSpeechRecognition`.

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
npm run gen-audio                 # generate MP3s for ALL decks (slow, ~3000 clips)
npm run gen-audio n5-starter      # ...or just one deck
```

`gen-audio` is idempotent: `tools/audio-manifest.json` records a content hash per
clip, so re-runs only generate what's new. Voices: `ja-JP-NanamiNeural` (words,
plus a slowed `-40%` rendition in `public/audio/ja-slow/` used as the phonetic
breakdown), `en-US-AriaNeural` (prompts).

Word lists: Jonathan Waller's JLPT lists (tanos.co.uk, CC-BY) via the
`elzup/jlpt-word-list` CSV mirror, kept in `tools/sources/`.

## Deploy

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and
publishes to GitHub Pages on every push to `main`. One-time setup in the repo:
**Settings → Pages → Source: GitHub Actions.** The app then lives at
`https://<user>.github.io/kotoba/` — open it in iPhone Safari, allow the mic,
and optionally Add to Home Screen.

> Heads-up: if speech recognition misbehaves in the installed (home-screen) app,
> run it as a normal Safari tab instead — everything else works the same.

## On-the-road controls

Voice (during any listening moment): **repeat · skip · pause · resume**, and
**got it / missed it** when self-grading. Every command also has a giant on-screen
button. If speech recognition fails three times in a row, the session degrades
gracefully to reveal-and-tap mode instead of stalling.
