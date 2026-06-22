# Sentence-Context — Next Steps (terminal handoff)

This branch (`claude/listen-phase-sentences-bntd84`) ships the **code** for the
sentence-context feature, fully tested, with graceful fallback. What's left is
**content + audio generation** and an **on-device test** — work that needs your
API key, the Edge TTS endpoint, a native-speaker review pass, and your phone.
Pick this up in Claude Code in the terminal.

## What's already done (no action needed)

- Data model: `Sentence` type + `Word.sentences` (`src/types.ts`); sentences load
  from `public/sentences/{deckId}.json` and attach to in-memory words.
- Rung 1: rotating example sentence in the teach flow and on correct reviews.
- Rung 2: cloze quiz for mature Review cards — `pre → beep → post` audio, graded
  by the existing single-word reading matcher (`gradeCloze`).
- Selector + rotation (`src/session/selectExercise.ts`), pure and unit-tested.
- Generation tooling: `tools/gen-sentences.ts`, `tools/gen-audio.ts` (sentence
  clips + a generated `public/audio/phrases/beep.wav`).
- A 4-word sample pool (`public/sentences/n5-starter.json`) so the path runs today.
- Settings UI: enable/disable, interval threshold, English-first hint.
- 89 tests green; `npm run build` clean.

## Prerequisites

```bash
npm install
export ANTHROPIC_API_KEY=sk-ant-...      # for gen-sentences
# optional: export ANTHROPIC_MODEL=claude-sonnet-4-6
```

Network access needed: `api.anthropic.com` (sentence generation), the kuromoji
dict CDN `cdn.jsdelivr.net` (validation), and Microsoft Edge TTS (audio).

## Step 1 — Generate sentence drafts (N5 Starter first)

```bash
npm run gen-sentences -- n5-starter
```

This generates ~3 candidates per word, validates each with kuromoji (every content
word must be in the word's cumulative i+1 vocabulary + the target), and writes:

- `tools/sentences-draft/n5-starter.candidates.json` — the drafts, each with a
  `valid` flag, `offenders` (vocab/cloze issues), and `approved: false`.
- `tools/sentences-draft/n5-starter.review.md` — a human-readable review table.

> The sample `public/sentences/n5-starter.json` will be **overwritten** by Step 3
> once you approve real content, so don't hand-edit it.

## Step 2 — Native review

Open `tools/sentences-draft/n5-starter.review.md`. For each sentence you want to
ship, set `"approved": true` on that entry in
`tools/sentences-draft/n5-starter.candidates.json`. Reject anything unnatural or
flagged with `⚠️` offenders. Aim for ~2–3 approved per word so the pool rotates
(this is the whole point — learners shouldn't memorize one sentence).

## Step 3 — Promote approved sentences

```bash
npm run gen-sentences -- --approve n5-starter
```

Writes only `approved && valid` entries to `public/sentences/n5-starter.json`
(keyed by wordId). This is what the app actually loads.

## Step 4 — Generate sentence audio

```bash
npm run gen-audio n5-starter
```

Idempotent (skips clips already in the manifest). For each approved sentence it
produces, under `public/audio/`:

- `sen/{id}.mp3` — full natural sentence (rung-1 example + cloze reveal)
- `sen-en/{id}.mp3` — English translation (used only if "English-first" is on)
- `sen-pre/{id}.mp3` / `sen-post/{id}.mp3` — the split around the cloze gap
- `phrases/beep.wav` + `phrases/for-example.mp3` + `phrases/fill-the-blank.mp3`

> Sentences that start with the gapped word have an empty `pre`; gen-audio skips
> that clip and the player skips the missing URL — expected, not a bug.

## Step 5 — Test locally without a mic

```bash
npm run dev
# open http://localhost:5173/?mock=1&debug=1
```

- `?mock=1` replaces the mic with a text box; type the answer (empty = timeout).
- To force a cloze item without waiting days for a card to mature, temporarily
  lower the threshold in **Settings → "Fill-in-the-blank after (days)"** to `0`,
  and make sure the word has an approved sentence and a Review-state card.
- Confirm: the prompt plays `pre → beep → post`, a correct typed answer rates
  good and plays the example tail, a wrong answer reveals the full sentence then
  self-grades, and teach/review tails rotate across runs.
- `?debug=1` shows the in-app log; look for `cloze-playing` / `cloze-listening`.

## Step 6 — On-device recognition test (the one I can't do)

Deploy/run on your phone and do a real commute: AirPods vs. car mic. The cloze
answer is a single Japanese word, so recognition should match plain quiz, but
validate before scaling. Tune the interval threshold to taste.

## Step 7 — Scale content (Phase C)

Repeat Steps 1–4 for the full decks:

```bash
npm run gen-sentences -- jlpt-n5 jlpt-n4
# review + approve each
npm run gen-sentences -- --approve jlpt-n5 jlpt-n4
npm run gen-audio jlpt-n5 jlpt-n4
```

Note the Workbox audio cache budget was raised to 12000 entries in
`vite.config.ts`; revisit if the full corpus + sentences exceeds it.

## Handy references

- Exercise selection / rotation: `src/session/selectExercise.ts`
- Cloze state machine branch: `src/session/machine.ts` (`cloze-playing`/`cloze-listening`)
- Audio sequences: `src/audio/clips.ts` (`clozePromptSequence`, `clozeRevealSequence`, `exampleTail`)
- Matcher reuse: `src/matching/match.ts` (`matchKana`, `gradeCloze`)
- Validation core (unit-tested): `tools/sentence-validate.ts`
- Tests to keep green: `tests/cloze.test.ts`, `tests/sentenceValidate.test.ts`, `tests/runner.test.ts`
