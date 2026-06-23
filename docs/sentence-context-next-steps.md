# Sentence-Context — Next Steps (terminal handoff)

This branch (`claude/listen-phase-sentences-bntd84`) ships the sentence-context
feature **with N5-starter content and audio already generated and committed**.
What's left is a **local smoke test**, an **on-device test**, an optional
**native-review prune**, and **scaling to the full decks**.

## What's already done (no action needed)

- Data model: `Sentence` type + `Word.sentences` (`src/types.ts`); sentences load
  from `public/sentences/{deckId}.json` and attach to in-memory words.
- Rung 1: rotating example sentence in the teach flow and on correct reviews.
- Rung 2: cloze quiz for mature Review cards — `pre → beep → post` audio, graded
  by the existing single-word reading matcher (`gradeCloze`).
- Selector + rotation (`src/session/selectExercise.ts`), pure and unit-tested.
- Generation tooling: `tools/gen-sentences-local.ts` (no-API, the default path),
  `tools/gen-sentences.ts` (API path), `tools/gen-audio.ts`.
- **N5-starter content shipped**: `public/sentences/n5-starter.json` — 305
  sentences across 117/120 words (avg 2.6 each). The 3 uncovered words
  (半, どうも, 時々) have no natural i+1 sentence and are intentionally skipped.
- **N5-starter audio shipped**: `sen/ sen-en/ sen-pre/ sen-post/` clips +
  `phrases/beep.wav`. 146 sentences start with the cloze word → empty `pre`,
  those clips intentionally absent (player skips them).
- Settings UI: enable/disable, interval threshold, English-first hint.
- 92 tests green; `npm run build` clean.

## Prerequisites

```bash
npm install
```

Network access needed only when (re)generating: the kuromoji dict CDN
`cdn.jsdelivr.net` (validation) and Microsoft Edge TTS (audio). The no-API
content path needs **no** API key. The legacy `gen-sentences` (API) path needs
`ANTHROPIC_API_KEY` + Anthropic API credits — not required for anything below.

## Regenerating content (only if you change sentences)

The N5-starter pool is already generated and committed, so you can skip straight
to testing. To change sentences, edit `tools/sentences-authored/n5-starter.json`
(per-word arrays of `textJa/readingKana/textEn/clozeSurface/clozeReading`) and:

```bash
npm run gen-sentences-local -- n5-starter   # validate → drafts + review table
```

This validates every sentence with kuromoji (each content word must be in the
word's cumulative i+1 vocabulary + the target) and writes:

- `tools/sentences-draft/n5-starter.candidates.json` — drafts with a `valid`
  flag, `offenders`, and `approved`.
- `tools/sentences-draft/n5-starter.review.md` — a human-readable review table.

Then set `"approved": true` on the entries you want and promote them:

```bash
npm run gen-sentences -- --approve n5-starter   # → public/sentences/n5-starter.json
```

> Optional native-review prune: every shipped sentence is currently approved,
> but they are LLM-authored + machine-validated, not yet native-reviewed. Skim
> `tools/sentences-draft/n5-starter.review.md`, flip `approved` to `false` on any
> that read awkwardly (especially the early copula-only ones), and re-run
> `--approve`.

## Regenerating audio (only if you change sentences)

N5-starter audio is already generated and committed. Re-run only after changing
the pool:

```bash
npm run gen-audio n5-starter
```

Idempotent (skips clips already in `tools/audio-manifest.json`). For each
approved sentence it produces, under `public/audio/`:

- `sen/{id}.mp3` — full natural sentence (rung-1 example + cloze reveal)
- `sen-en/{id}.mp3` — English translation (used only if "English-first" is on)
- `sen-pre/{id}.mp3` / `sen-post/{id}.mp3` — the split around the cloze gap
- `phrases/beep.wav` + `phrases/for-example.mp3` + `phrases/fill-the-blank.mp3`

> Sentences that start with the gapped word have an empty `pre`; gen-audio skips
> that clip and the player skips the missing URL — expected, not a bug.

## Step 1 — Test locally without a mic

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

## Step 2 — On-device recognition test

Deploy/run on your phone and do a real commute: AirPods vs. car mic. The cloze
answer is a single Japanese word, so recognition should match plain quiz, but
validate before scaling. Tune the interval threshold to taste.

## Step 3 — Scale content to the full decks

Same no-API flow as N5-starter, per deck:

1. Author `tools/sentences-authored/jlpt-n5.json` (and `jlpt-n4.json`).
2. `npm run gen-sentences-local -- jlpt-n5 jlpt-n4` → validate to 0 flags.
3. Approve, then `npm run gen-sentences -- --approve jlpt-n5 jlpt-n4`.
4. `npm run gen-audio jlpt-n5 jlpt-n4`.

Note the Workbox audio cache budget was raised to 12000 entries in
`vite.config.ts`; revisit if the full corpus + sentences exceeds it.

## Handy references

- Exercise selection / rotation: `src/session/selectExercise.ts`
- Cloze state machine branch: `src/session/machine.ts` (`cloze-playing`/`cloze-listening`)
- Audio sequences: `src/audio/clips.ts` (`clozePromptSequence`, `clozeRevealSequence`, `exampleTail`)
- Matcher reuse: `src/matching/match.ts` (`matchKana`, `gradeCloze`)
- Validation core (unit-tested): `tools/sentence-validate.ts`
- Tests to keep green: `tests/cloze.test.ts`, `tests/sentenceValidate.test.ts`, `tests/runner.test.ts`
