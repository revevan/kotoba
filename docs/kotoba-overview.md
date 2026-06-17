# Kotoba — Project Overview

A reference document describing the Kotoba app: what it is, how it works, how
it's built, where it lives, and where it's going. Written to give context for
questions about the product, the learning approach, content, and roadmap — not
just the code.

## What it is

**Kotoba** is a hands-free, audio-first Japanese vocabulary trainer, built as a
web app (PWA) for use during a commute. The idea: dash-mount the phone with the
screen on, put in AirPods (or use car audio), tap **Start** once, and then run an
entire study session by voice — no tapping, no looking. It teaches a word, has
you say it back, quizzes you on it later, and schedules reviews with spaced
repetition so words come back right before you'd forget them.

"Kotoba" (言葉) means "word" / "language" in Japanese.

- **Live app:** https://revevan.github.io/kotoba/
- **Source:** https://github.com/revevan/kotoba
- **Domain:** kotobaapp.com (owned; currently used for sign-in email. The app
  itself still serves from the GitHub Pages URL above — moving it onto the
  custom domain is a planned step.)

## Who it's for

Originally built for one person's ~3×/week commute to LA, now being opened up to
friends and coworkers who also commute and want to learn Japanese. Anyone can use
it without an account; signing in (passwordless email) adds cross-device sync.

## The learning loop

1. **Teach (new word):** plays the English ("apple"), then the Japanese ("ringo"),
   then a slowed-down rendition for the sounds, then asks you to repeat it. If a
   word has common alternate readings, it mentions them ("you may also hear…").
2. **Quiz (review):** "How do you say — apple?" You say the word out loud.
3. **Grading (hybrid):**
   - If speech recognition clearly hears the right word, it auto-passes ("Correct!").
   - If not, it reveals the answer once and asks you to self-grade by voice
     ("Say got it, or missed it") or with on-screen buttons. Default is "missed."
4. **Spaced repetition:** every answer updates that word's schedule (using the
   FSRS algorithm), so it returns at the right interval — days, then weeks.

**On-the-road controls** (voice or buttons): repeat, skip, pause, resume, got it,
missed it.

## Content / decks

Three selectable decks, all derived from **Jonathan Waller's JLPT word lists**
(tanos.co.uk, CC-BY licensed):

- **N5 Starter** (~120 words) — common early-Genki vocabulary, pedagogically
  ordered. The default for newcomers.
- **JLPT N5** (~660 words)
- **JLPT N4** (~600 words)

Words that map to the same English meaning are handled deliberately:
- **True synonyms** (e.g. "yes" = はい / ええ) fold into the most common reading
  as the quiz answer; the alternates are taught aloud and accepted if you say
  them. (`docs/synonym-folds.md` lists all ~70 folds for native-speaker review.)
- **Different words that share a short English gloss** (e.g. "to play" = あそぶ
  vs ひく) get disambiguated prompts so each quiz has a single intended answer.

## Audio

All speech is **pre-generated** as MP3 files (no live TTS cost), using free
Microsoft Edge neural voices — `ja-JP-NanamiNeural` for Japanese and
`en-US-AriaNeural` for English. Roughly **4,000 clips**: each word has a normal
Japanese reading, a slowed (-40%) reading for the breakdown, and an English
prompt, plus shared phrase clips ("In Japanese:", "Not quite.", etc.). The audio
is cached on-device so sessions work in cellular dead zones.

## How recognition works (and why it's the hard part)

The app captures your spoken answer and transcribes it with **Deepgram** (the
`nova-2` model, good at Japanese), called through a small server that holds the
API key. Hard-won lessons from real-world testing:

- The microphone is opened **once per session and kept hot** — opening a fresh
  mic per answer left a ~1–2 second dead window on iOS that silently dropped
  short answers.
- A **kanji→reading analyzer** (kuromoji) converts any transcription to its
  pronunciation before matching, so an answer Deepgram writes with unexpected
  kanji (一社 for いしゃ) still matches by sound.
- There's a built-in fallback to the browser's own speech recognition if the
  cloud path isn't configured.

Recognition quality depends a lot on the acoustic setup: AirPods (close mic) work
far better than a car's far-field Bluetooth microphone, and a second person
talking nearby will get picked up (an open mic can't isolate one voice).

## Accounts & sync

- **Passwordless email login:** enter your email, get a 6-digit code, you're in.
  No passwords. Session lasts 90 days.
- **Cross-device sync:** your study progress (the spaced-repetition card states)
  is stored in the cloud and merged across devices. The app is fully usable
  signed out — sign-in just adds backup/sync.
- Progress can also be exported/imported as a JSON file, and **reset** entirely
  from Settings.

## Technical architecture (high level)

- **Frontend:** a PWA built with Vite + TypeScript + Preact, hosted free on
  **GitHub Pages**. Progress is stored locally in IndexedDB.
- **Speech-to-text proxy:** a **Cloudflare Worker** that forwards audio to
  Deepgram and keeps the API key off the device.
- **Accounts/sync API:** a second **Cloudflare Worker** + **Cloudflare D1**
  (SQLite) database, with login emails sent via **Resend**.
- **Spaced repetition:** the FSRS algorithm (`ts-fsrs`).
- Deploys automatically via GitHub Actions on every push to `main`.

## Cost model

Designed to be essentially free to run:
- Hosting (GitHub Pages), backend (Cloudflare Workers + D1), and login email
  (Resend free tier, 3,000/mo) are all **free** at this scale.
- **Deepgram** speech-to-text is usage-billed — a few cents per session — so it
  scales with the number of active users. This is the one real cost.
- The **domain** (~$10–16/yr) is the only fixed recurring cost.
- A "Buy Me a Coffee" / donation link is a planned addition to offset Deepgram
  costs as usage grows.

## Developer/diagnostic notes

- Add `?debug=1` to the URL for an on-screen log (state transitions, speech
  recognition details, audio levels). Persists across reloads.
- Add `?mock=1` to type answers instead of speaking — useful for testing the
  flow without a mic.

## Status & roadmap

**Working now:** the full hands-free loop (teach → quiz → spaced repetition),
cloud speech recognition, kanji-aware grading, passwordless login + sync,
offline audio, progress reset. Recognition has been tuned and validated to work
well with AirPods.

**Likely next steps / ideas:**
- Point the app itself at `kotobaapp.com` (custom domain) for a clean public URL.
- A stats / progress screen (streaks, words learned, retention).
- "Buy Me a Coffee" donation link.
- Rate-limiting / abuse protection on the speech proxy as usage grows.
- More decks (N3+, themed sets, custom word lists).
- Native-speaker review of the synonym folds, then corrections.
- First real-commute field testing and iteration on the in-car experience.
