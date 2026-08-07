# AI Prompt Audit — Baseline (August 2026)

*First run: 2026-08-07, hours after the first two Tier 1 landing pages deployed (so this is effectively
the "before pages" snapshot — Google/Bing had not yet crawled them). Re-run monthly with the same panel;
record deltas at the bottom.*

## Method

Fixed panel of 15 prompts (below), asked verbatim, one fresh conversation per prompt.

| Engine | Coverage this run | How |
|---|---|---|
| Claude (Opus 5 + web search) | 15/15 | API script (results JSON archived in session scratchpad) |
| ChatGPT (free tier, temporary chat) | 5 core prompts | Browser, logged in, temp-chat mode (memory off) |
| Gemini (Pro model) | 2 core prompts | Browser, logged in |
| Bing Copilot | Citation count only | Bing WMT "AI Performance" beta report |
| Perplexity | — | Now requires sign-in for answers; no account. Add next run if worth it |
| Google AI Mode | — | `udm=50` redirects to an inaccessible chrome:// page under automation; check manually |

## The fixed prompt panel

1. What's the best app to learn Japanese while driving?
2. How can I learn Japanese vocabulary while driving?
3. Are there any audio-only Japanese flashcards?
4. Is there an app like Anki I can use while driving?
5. Can I use Anki without looking at the screen?
6. What's a good hands-free language learning app?
7. What's a free alternative to Pimsleur for Japanese?
8. Is there a Japanese learning app with a hands-free mode?
9. How can I do spaced repetition while driving?
10. What's the best way to learn Japanese on my commute?
11. Is there an app that teaches Japanese vocabulary by voice, where I speak the answer out loud and it checks if I got it right?
12. What are the best apps for learning Japanese?
13. What's a good audio flashcard app for Japanese?
14. Any screen-free ways to study Japanese vocabulary?
15. What's the best way to memorize JLPT N5 vocabulary while commuting?

## Kotoba scorecard (baseline)

| Engine | Kotoba mentioned | Notes |
|---|---|---|
| Claude | **0/15** | Web search triggered on 8/15 prompts; kotobaapp.com never appeared even in retrieved results |
| ChatGPT | **2/5** | See below — mentioned *and cited* twice, ranked **#1 "closest match"** on the voice-interactive prompt |
| Gemini | 0/2 | Recommends Pimsleur/JapanesePod101 trio and Silo's app |
| Bing Copilot | 2 citations total (Aug 1) | From WMT AI Performance beta; no grounding-query detail yet |

### The two ChatGPT hits (both triggered web search)

- **"Audio-only Japanese flashcards" prompt** — built a 4-app comparison (Audio Flash, Audio Flashcards –
  Japanese, Danki, Kotoba). Kotoba described as "essentially a voice-only Japanese vocabulary tutor. It
  teaches a word, gives you a spoken example, asks you to say it, recognizes your answer, and brings words
  back later for review," scored 5★ driving / 5★ Japanese-focused / 5★ speaking / **2★ custom decks**.
  Pick went to Audio Flash ("Anki through car speakers") and Danki (purpose-built driving mode).
- **Voice-interactive prompt (#11)** — Kotoba ranked **first**: "probably the closest match… I'd start
  with Kotoba or JLPT Speak. They're much closer to a spoken Anki than something like Duolingo."

### Pattern worth exploiting

When engines answer **from pre-trained knowledge** (no search), every one defaults to the same passive-audio
trio: Pimsleur → JapanesePod101 → Michel Thomas/Paul Noble. Kotoba only appears when the engine **searches
the web**, which happens on the specific long-tail phrasings ("audio-only flashcards", "speaks and checks").
That means: (a) the Tier 1 pages directly feed the exact queries that trigger search, and (b) getting into
the *training-data* layer (Reddit threads, listicles, forum answers — Phase 4) is what eventually fixes the
no-search answers.

ChatGPT also volunteered, on the free-Pimsleur-alternative prompt: *"I haven't found a completely free
Japanese program that matches Pimsleur's interaction model particularly well."* The slot is still open —
that sentence is the pitch for every Phase 4 placement.

## Mention counts (Claude, 15 prompts)

Anki 12 · Pimsleur 10 · JapanesePod101 7 · WaniKani 6 · Duolingo 5 · AnkiDroid 5 · Michel Thomas 3 ·
Language Transfer 3 · Speechling 2 · Renshuu 2 · LingQ/Memrise/Busuu/Migaku/Quizlet/Rosetta Stone 1 each ·
**Kotoba 0**

## Competitor intel surfaced during the audit

New/updated direct competitors not in the July research doc:

- **Danki** (danki app, iOS, $9.99 one-time) — "Audio Drive Mode," plays vocab + sentences through car
  speakers, configurable recall pauses, voice commands ("good"/"again"), FSRS, native audio. The closest
  feature-for-feature rival found so far. Japanese-focused.
- **JLPT Speak** — "Anki/WaniKani-style flashcards but you speak instead of type"; checks spoken Japanese,
  SRS, covers N5–N3. Direct overlap with Kotoba's core loop.
- **Perapera** — AI feedback on spoken production (grammar/naturalness), more conversation than flashcards.
- **Jouzu** — vocab/flashcards + voice conversation, pronunciation scoring.
- **Audio Flash** (audioflash.app) — general-purpose audio flashcards, TTS, Anki-deck import, passive
  listen→recall (no speech recognition). ChatGPT's top pick for "Anki through speakers."

Implication: "the only interactive hands-free option" is no longer strictly true as a pitch — soften to
"free, browser-based, no app store, real speech-recognition grading, JLPT-complete" and consider adding
Danki/JLPT Speak to the comparison content honestly.

## Outreach list (domains AI engines retrieved for these queries)

From Claude's web-search retrievals (frequency across 8 searched prompts): forums.ankiweb.net (8),
apps.apple.com (8), github.com (5), alternativeto.net (5), play.google.com (5), fluentu.com (4),
en.wikipedia.org (4), migaku.com (3), guide2fluency.com (3), community.wanikani.com (2),
alllanguageresources.com (2), testprepinsight.com (2), blog.gaijinpot.com (2), joyofjapanese.com (2),
plus audioflash.app, ling-app.com. ChatGPT additionally cited Reddit threads and App Store pages.

Priority actions this implies (feeds TODO Phase 4):

1. **AlternativeTo listing** — retrieved in 5/8 searches; an inclusion-threshold surface we're absent from.
2. **App Store / Play Store presence is a real gap** — engines lean on store pages heavily; a PWA has none.
   Worth revisiting a minimal TWA/wrapper later, or at least ensuring the comparison pages rank for
   store-style queries.
3. **Anki forum + WaniKani community threads** — already in the plan; confirmed as retrieval surfaces.
4. **FluentU / AllLanguageResources / Guide2Fluency / TestPrepInsight / JoyOfJapanese / GaijinPot** —
   listicle outreach targets, in that order.

## Re-run log

| Date | Claude | ChatGPT | Gemini | Bing citations | Notes |
|---|---|---|---|---|---|
| 2026-08-07 | 0/15 | 2/5 | 0/2 | 2 | Baseline; pages live but uncrawled |
