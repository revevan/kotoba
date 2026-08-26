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

- **Live app:** https://kotobaapp.com — served directly at the custom domain
  (from GitHub Pages).
- **Source:** https://github.com/revevan/kotoba
- **Sign-in email** is also sent from the kotobaapp.com domain (via Resend).

## Who it's for

Originally built for one person's ~3×/week commute to LA, now being opened up to
friends and coworkers who also commute and want to learn Japanese. Anyone can use
it without an account; signing in (passwordless email) adds cross-device sync and
unlocks the full deck lineup.

## The learning loop

New visitors land on a short intro screen and can either **sign in** (email code)
or **continue as a guest**. Once in a session, every review is one of a ladder of
exercise types, chosen per word based on how well you know it:

1. **Teach (new word):** plays the English ("apple"), then the Japanese ("ringo"),
   then a slowed-down rendition for the sounds, then asks you to repeat it. If a
   word has common alternate readings, it mentions them ("you may also hear…").
2. **Quiz (plain recall):** "How do you say — apple?" You say the word out loud.
3. **Cloze (fill the blank):** once a word is a *mature* review card and has an
   approved example sentence, the quiz becomes a gap-fill — you hear the sentence
   with the target word blanked and say the missing word in context.
4. **Grading (hybrid):**
   - If speech recognition clearly hears the right word, it auto-passes ("Correct!").
   - If not, it reveals the answer once and asks you to self-grade by voice
     ("Say got it, or missed it") or with on-screen buttons. Default is "missed."
5. **Spaced repetition:** every answer updates that word's schedule (using the
   FSRS algorithm), so it returns at the right interval — days, then weeks.

**On-the-road controls** (voice or buttons): repeat, skip, pause, resume, got it,
missed it.

### The exercise ladder (rungs)

As a word matures, it climbs a ladder of increasingly demanding exercises, top
rung first when prerequisites are met:

- **build** (free production) — you compose your own sentence using the word.
- **shadow** — you hear an example sentence and say it back.
- **cloze** — you fill the blanked-out target word in an example sentence.
- **plain recall** — the base quiz.

The top two rungs (**shadow** and **build**) are **pre-release**, gated behind
`?labs=1`. They rely on a cloud sentence grader (see below). Cloze is live in the
normal flow. Example sentences are shipped as static content per deck
(`public/sentences/{deckId}.json`), with a small rotating pool per word so
learners hear varied contexts instead of memorizing one sentence.

## Content / decks

Four selectable decks, all derived from **Jonathan Waller's JLPT word lists**
(tanos.co.uk, CC-BY licensed):

- **N5 Starter** (~121 words) — common early-Genki (chapters 1–6) vocabulary,
  pedagogically ordered. The default for newcomers, and the only deck available
  to signed-out guests.
- **JLPT N5** (~672 words)
- **JLPT N4** (~609 words)
- **JLPT N3** (~1,640 words)

Words that map to the same English meaning are handled deliberately:
- **True synonyms** (e.g. "yes" = はい / ええ) fold into the most common reading
  as the quiz answer; the alternates are taught aloud and accepted if you say
  them. (`docs/synonym-folds.md` lists all the folds for native-speaker review.)
- **Different words that share a short English gloss** (e.g. "to play" = あそぶ
  vs ひく) get disambiguated prompts so each quiz has a single intended answer.

## Audio

All speech is **pre-generated** as MP3 files (no live TTS cost), using free
Microsoft Edge neural voices — `ja-JP-NanamiNeural` for Japanese and
`en-US-AriaNeural` for English. Each word has a normal Japanese reading, a slowed
(-40%) reading for the breakdown, and an English prompt; example sentences add
their own clips (sentence, slowed pre/post, and English). Plus shared phrase
clips ("In Japanese:", "Not quite.", etc.). That's thousands of clips in total.

The audio corpus is served from a **Cloudflare R2** bucket
(`audio.kotobaapp.com`) rather than bundled into the site, and is cached
on-device so sessions still work in cellular dead zones. (The build strips the
local `dist/audio` when the R2 base URL is set; unset it to roll back to
same-origin audio.)

## How recognition works (and why it's the hard part)

The app captures your spoken answer and transcribes it with **Deepgram** (the
`nova-2` model, good at Japanese), called through a small Cloudflare Worker that
holds the API key. Hard-won lessons from real-world testing:

- The microphone is opened **once per session and kept hot** — opening a fresh
  mic per answer left a ~1–2 second dead window on iOS that silently dropped
  short answers.
- A **kanji→reading analyzer** (kuromoji) converts any transcription to its
  pronunciation before matching, so an answer Deepgram writes with unexpected
  kanji (一社 for いしゃ) still matches by sound.
- **Keyword boosting** nudges Deepgram toward the expected answer for short words.
- There's a built-in fallback to the browser's own speech recognition if the
  cloud path isn't configured.

For the labs **shadow/build** rungs, where a simple word-match isn't enough, the
same worker exposes a `/grade` endpoint that sends the transcript to **Claude**
(Anthropic, `claude-haiku-4-5` by default) for a yes/no judgment on whether the
target word was used correctly in a meaningful sentence.

Recognition quality depends a lot on the acoustic setup: AirPods (close mic) work
far better than a car's far-field Bluetooth microphone, and a second person
talking nearby will get picked up (an open mic can't isolate one voice).

## Accounts & sync

- **Passwordless email login:** enter your email, get a 6-digit code, you're in.
  No passwords. Session lasts 90 days. Signup requires agreeing to the Terms and
  Privacy Policy (consent checkbox).
- **Guest mode:** the app is fully usable signed out, but guests are limited to
  the **N5 Starter** deck; the other decks are shown locked and prompt sign-in.
- **Cross-device sync:** your study progress (the spaced-repetition card states)
  is stored in the cloud and merged across devices. Sign-in adds backup/sync and
  unlocks the full deck lineup.
- Progress can also be exported/imported as a JSON file, and **reset** entirely
  from Settings.
- **In-app feedback:** a feedback form forwards submissions to the maintainer's
  email (best-effort, via Resend).

## Technical architecture (high level)

- **Frontend:** a PWA built with Vite + TypeScript + Preact, hosted free on
  **GitHub Pages** at the custom domain. Progress is stored locally in IndexedDB.
- **Speech-to-text + grading proxy:** a **Cloudflare Worker** that forwards audio
  to Deepgram (keeping the API key off the device) and, for the labs rungs,
  grades sentences via the Anthropic API.
- **Accounts/sync API:** a second **Cloudflare Worker** + **Cloudflare D1**
  (SQLite) database, with login emails and feedback forwarding sent via **Resend**.
- **Audio CDN:** the MP3 corpus lives in **Cloudflare R2** (`audio.kotobaapp.com`).
- **Spaced repetition:** the FSRS algorithm (`ts-fsrs`).
- **Analytics:** Cloudflare Web Analytics (privacy-friendly, cookieless beacon).
- **Abuse protection:** per-IP rate limits (Workers Rate Limiting bindings,
  backed by exact D1 windows) on the STT, grade, feedback, and auth-email
  endpoints.
- Deploys automatically via GitHub Actions on every push to `main` (which runs
  `npm test` before building).

## Cost model

Designed to be cheap to run:
- Hosting (GitHub Pages), backend (Cloudflare Workers + D1 + R2), and login/
  feedback email (Resend free tier, 3,000/mo) are all **free** at this scale.
- **Deepgram** speech-to-text is usage-billed — a few cents per session — so it
  scales with the number of active users. This is the main variable cost.
- **Anthropic** (Claude Haiku) sentence grading adds a small per-call cost, but
  only on the pre-release labs rungs.
- The **domain** (~$10–16/yr) is the only fixed recurring cost.
- A "Buy Me a Coffee" / donation link is a planned addition to offset the usage
  costs as they grow.

## Legal / privacy

- **Terms** and **Privacy Policy** pages ship with the app
  (`/terms.html`, `/privacy.html`), linked from the landing/signup screen.
  Governing law is California / Los Angeles.
- Signup captures explicit consent to both.

## Developer/diagnostic notes

- Add `?debug=1` to the URL for an on-screen log (state transitions, speech
  recognition details, audio levels). Persists across reloads.
- Add `?mock=1` to type answers instead of speaking — useful for testing the
  flow without a mic.
- Add `?labs=1` to enable the pre-release shadow/build rungs; `?cloze=1` to treat
  any word-with-sentence as mature (force cloze); `?rung=` to force a specific
  exercise type when its prerequisites are met.

## Status & roadmap

**Working now:** the full hands-free loop (teach → quiz → cloze → spaced
repetition), cloud speech recognition, kanji-aware grading, example sentences,
passwordless login + sync, guest mode with deck gating, offline audio (R2 CDN),
progress reset, in-app feedback, per-IP rate limiting, custom domain, and legal
pages. Recognition has been tuned and validated to work well with AirPods.

**Likely next steps / ideas:**
- Finalize the labs **shadow/build** rungs (rungs 3–4) and bring them out from
  behind `?labs=1`.
- Native-speaker review of the synonym folds and example sentences, then
  corrections.
- A stats / progress screen (streaks, words learned, retention).
- **Acquisition-source tracking:** capture `document.referrer` + `utm_source`
  on first app load (e.g. ChatGPT referrals arrive with
  `utm_source=chatgpt.com`), persist it with local state, and store it as an
  `acquisition_source` column on signup — so "of the users who came from X,
  how many signed up and stuck around" becomes a plain D1 query. Pair with a
  session started/completed counter so first-session drop-off is measurable.
- "Buy Me a Coffee" donation link.
- More decks (themed sets, custom word lists) beyond the current N5→N3 lineup.
- Continued real-commute field testing and iteration on the in-car experience.
