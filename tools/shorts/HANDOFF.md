# Shorts generator — handoff to Claude Code

Context doc for porting the shorts prototype into this repo. Prototype was built
in a Cowork session (2026-08-11); Evan has reviewed sample output and approved
the direction. Target: `tools/shorts/` + a `pnpm run gen-shorts` command in the
style of the existing `gen-audio` / `pipeline` tools.

## What exists

`gen_short.py` (next to this file) — working Python/Pillow/ffmpeg generator that
renders 1080x1920 vertical shorts entirely from repo assets: deck JSON
(`public/decks/*.json`), sentence JSON (`public/sentences/*.json`), and the
pre-generated MP3s (`public/audio/{ja,ja-slow,en,sen,sen-en}/<id>.mp3`).
No new TTS, no external assets. ~14–20s per video.

CLI: `python3 gen_short.py <format> <wordId> <sentenceId> <outName>`

Five samples were rendered and reviewed (water/friend quiz, tomorrow wotd,
"The cat died." deadpan, 我慢 notrans). Evan is happy with the look.

## Locked style decisions (from review — do not regress)

- **No zoom / no motion on slides.** Static frames only. (A subtle zoompan was
  tried twice and rejected: "shaky", then "weird".)
- **No "while you drive" copy** in social content — outro reads
  "Learn Japanese, hands-free." Driving phrasing stays in SEO pages only,
  and short-video platforms read "use your phone while driving" as risky-
  behavior promotion.
- Brand: marketing-page palette (bg #10101a, band #13131f, border #2c2c40,
  text #f0f0f5, body #b8b8c8, muted #9a9aae, faint #6c6c80, accent #7c7cf0,
  success #6fdc8c). JP text in Noto Serif CJK JP; UI text Noto Sans CJK JP.
  "Kotoba / hands-free Japanese" wordmark top of every frame.
- Countdown tick = soft 880Hz sine (generated in-script). No background music
  (add platform-library tracks at upload time if ever).

## The four formats

1. **quiz** — hook ("Can you say it in Japanese?") → English prompt (en audio)
   → 3-2-1 countdown (ticks) → reveal: word + kana + romaji (ja audio, then
   ja-slow phonetic) → bonus sentence (target word highlighted in accent,
   sen audio) → outro (ja audio replay).
2. **wotd** — "WORD OF THE DAY" teach frame (ja → ja-slow → ja) → sentence → outro.
3. **deadpan** — scroll-stop hook: the English sentence, cold, in quotes, with
   label "A REAL SENTENCE FROM OUR DECK · JLPT N5 · yes, really" + sen-en audio
   → JA sentence twice (sen audio ×2) → "THE KEY WORD" teach frame → outro.
   Leans into JLPT-textbook-bleakness meme culture. Likely best performer.
4. **notrans** — hook "English has no word for this." → "NO ENGLISH EQUIVALENT"
   teach frame → sentence → outro.

## Curated scroll-stopper queue (word_id / sentence_id, verified in corpus)

Deadpan:
- n5-532cb4ab / s-6176bd59 — 猫が死にました。"The cat died." (sample rendered)
- n3-18a6a444 / s-e490f3aa — "Honestly, I forgot the reason I'm late."
- n3-f9a11549 / s-688606e6 — "Don't you think old age is scary?"
- n3-588ba099 / s-25d9b44a — "I spent too much money and ended up going bankrupt."
- n3-a53b9e2f / s-6a29979d — "The elephant is scary because it's big."
- n3-e3847590 / s-5a89428a — "…I said itadakimasu and ate alone."
- n5-be77935b / s-6521a992 — "I slept during class."
- n5-930ed964 / s-ffedf15e — "I didn't brush my teeth because I didn't have time."
- n4-bef8c52a / s-8ac84faa — "Since I broke up with him, I've been living alone."
- n4-0811f6d5 / s-3fae9683 — "This is the last train."

Untranslatable (notrans):
- n3-6cc619d4 我慢 gaman / s-157eec1a (sample rendered)
- n3-91c87101 もったいない mottainai / s-f6625c04
- n4-85f644fa 先輩 senpai / s-b98ef260
- n3-c28a73f7 まさか masaka / s-8dec16c4
- n3-53421a64 相変わらず aikawarazu / s-f8e65f43

Corpus stats: 8,119 sentences / 2,921 words across jlpt-n5/n4/n3 — plenty more
where these came from (scan textEn for dark/relatable/absurd lines).

## Port checklist — DONE 2026-08-11 (Claude Code session)

- [x] Ported into `tools/shorts/gen_shorts.py` (Python+Pillow kept; venv at
      `tools/shorts/.venv`, bootstrapped by `run.sh`).
- [x] Reads assets directly from `public/decks`, `public/sentences`,
      `public/audio` — all decks auto-discovered, JLPT level from deck id.
- [x] macOS deps: ffmpeg was present; fonts installed via
      `brew install --cask font-noto-serif-cjk-jp font-noto-sans-cjk-jp`
      (per-weight JP OTFs in ~/Library/Fonts; resolver also checks
      `tools/shorts/fonts/` and the Linux ttc paths).
- [x] `pnpm run gen-shorts -- <deckId> [--format=X] [--count=N]` and
      `pnpm run gen-shorts -- --queue` (curated queue in `queue.json`).
- [x] Idempotency manifest `tools/shorts/shorts-manifest.json`
      (sha1 of style-version+format+word+sentence; `--force` overrides;
      STYLE_VERSION bump invalidates everything).
- [x] `out/review.html` video grid + `out/batch.json`
      (file/title/description/hashtags/publishAt — 5/week weekdays 15:00Z,
      `--start-date` to shift).
- [x] Title convention as specced (deadpan: `<EN sentence> — a real JLPT N5
      sentence`; notrans: `<word> (romaji) — English has no word for this`).
- Port fix beyond prototype: long N3 sentences overflowed the fixed layouts —
  added word-wrap for EN and kinsoku-aware char-wrap for JA (highlight
  preserved across lines); full curated queue (15) rendered clean.

## YouTube upload plan (decided in session)

- Cadence: 5/week scheduled, batch-produced monthly; commit to 8–12 weeks
  before judging. Rotate formats; use Studio retention data to double down.
- Hashtags: few + niche (#learnjapanese #jlpt #nihongo). Link kotobaapp.com in
  channel header + pinned comments (Shorts descriptions aren't clickable).
- Upload path: YouTube Data API v3. Caveats confirmed: videos.insert = 1600
  quota units (~6 uploads/day on default 10k quota — fine, schedule with
  `publishAt`, which requires `privacyStatus: private` at upload); NEW API
  projects have uploads locked private until the project passes Google's
  compliance audit — file the audit form immediately after creating the
  project, it gates publishing not production.
- Candidate MCP: github.com/anwerj/youtube-uploader-mcp (Go, local binary,
  tokens stay local — reviewed, legit). UNKNOWN whether it exposes `publishAt`;
  check its tool schemas after install. If not: write `tools/shorts/upload.mjs`
  with googleapis using the same client_secret.json, driven by `batch.json`.
- Cross-post the same MP4s natively to TikTok + IG Reels (manual/scheduled;
  no watermarked re-shares).

## Broader context

This is Kotoba's faceless-social strategy: the corpus IS the content machine,
so shorts cost ~zero marginal effort. It complements (not replaces) the
SEO/GEO roadmap in TODO.md — YouTube presence also feeds AI-engine citations.
Success metric: branded impressions in GSC + retention, reviewed monthly
alongside the existing prompt-audit routine. Kill without guilt if flat after
2–3 months.
