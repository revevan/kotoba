# Kotoba

Audio-first, hands-free Japanese vocabulary trainer (PWA) built for driving and
commuting: tap Start once and the whole session runs by voice — teach → quiz →
self-grade → sentence rungs. FSRS spaced repetition (`ts-fsrs`), progress in
IndexedDB with JSON export/import, optional passwordless sign-in for
cross-device sync. Live at https://kotobaapp.com. Deeper docs:
`README.md` and `docs/kotoba-overview.md`.

## Commands

Package manager is **pnpm** (pinned via `packageManager`).

```bash
pnpm install
pnpm dev            # Vite dev server at :5173
pnpm test           # vitest run — tests/**/*.test.ts, node env
pnpm run build      # tsc --noEmit && vite build → dist/
pnpm run preview
```

Content-pipeline scripts (see package.json): `build-decks`, `order-decks`,
`gen-audio [deckId]`, `gen-sentences`, `pipeline -- <deckId> plan|submit|fetch|judge`,
`publish-sentences`, `sync-audio-r2`, `feedback`, `reviews`.
Social (shorts pipeline, `tools/shorts/`): `gen-shorts -- --queue [file]` renders
1080x1920 vocab shorts (Python/Pillow/ffmpeg, self-bootstrapping venv, Noto CJK JP
fonts). Fully automated in CI: `shorts-render.yml` (Mon) runs `plan.mjs` (curated
queue + Claude-picked top-up, stages audio from R2) → render → `register.mjs`
(MP4+poster to R2 `shorts/`, rows in D1 `shorts` as pending) → wife approves on
`/review` (Shorts tab) → `shorts-upload.yml` (daily) runs `upload.mjs` (approved →
uploading → uploaded: YouTube private + scheduled 1/weekday 15:00Z, ≤6/day quota;
stuck `uploading` rows are reconciled by marker tag next run). Rejected shorts
surface in `pnpm run reviews`; resolve with `-- --short-rerender <id>` (corpus fixed,
same ids → re-rendered Monday) or `-- --short-drop <id>`. Status moves are checked
against `SHORT_TRANSITIONS` in the worker. Local: `upload-shorts -- --auth|--dry-run`. Secrets: GOOGLE_CLIENT_SECRET_JSON,
GOOGLE_TOKEN_JSON, KOTOBA_ADMIN_SECRET, ANTHROPIC_API_KEY, R2_*. SEO: `indexnow`
(pings Bing/IndexNow with live sitemap URLs — run after marketing-page deploys).

## Architecture

Preact 10 + `@preact/signals`, Vite 6 + `vite-plugin-pwa` (Workbox),
TypeScript strict, `idb`, `wanakana`, `@patdx/kuromoji`.

- `app/index.html` → `src/main.tsx` → `src/app.tsx` — the SPA at `/app/`
- `review/index.html` → `src/review/main.tsx` — unlisted `/review/` page
- `public/index.html` — static marketing page at `/`
  (both bundles declared in `vite.config.ts` `rollupOptions.input`)
- `src/state.ts` — global signal store
- Domains: `src/session/` (machine, runner, queueBuilder, controller),
  `src/speech/` (cloud + Web Speech recognizers, grader, commands),
  `src/matching/`, `src/srs/scheduler.ts`, `src/conj/`, `src/audio/`,
  `src/data/`, `src/sync/`, `src/ui/` (screens), `src/platform/`
- Backend: two Cloudflare Workers — `server/stt-proxy/worker.js` (Deepgram
  nova-2 + Claude grading, rate-limit bindings) and `server/api/worker.js`
  (D1 `kotoba`, Resend login email, feedback, `REVIEWER_EMAILS` gate,
  `GET /stats` usage dashboard gated by `ADMIN_EMAILS`;
  schema in `server/api/schema.sql`)
- Content pipeline in `tools/` (Anthropic Message Batches sentence pipeline in
  `tools/pipeline/`); outputs to `public/decks/`, `public/sentences/`, `public/audio/`

## Conventions

- TypeScript everywhere: `.ts` logic, `.tsx` components; ESM; `jsx: react-jsx`
  with `jsxImportSource: preact`; strict + `noUnusedLocals/Parameters`.
- **No Prettier/ESLint/Biome** — style by hand: 2-space indent, single quotes,
  semicolons, ~120-col lines.
- Styling is one global stylesheet `src/styles.css` (plus
  `src/review/review.css`) with plain class names — no CSS modules/Tailwind.
- camelCase module files, PascalCase components, `*.test.ts` in `tests/`.

## Gotchas

- URL flags: `?mock=1` (type instead of speak), `?debug=1` (on-screen log,
  persisted), `?labs=1` (pre-release rungs, `src/labs.ts`).
- Build-time env: `BASE_PATH`, `VITE_STT_ENDPOINT`, `VITE_API_ENDPOINT`,
  `VITE_AUDIO_BASE_URL` (when set, `dist/audio` is deleted by the
  `drop-audio-from-build` plugin).
- Local `.env` (gitignored): `ANTHROPIC_API_KEY`, R2 creds,
  `KOTOBA_ADMIN_SECRET`, `CF_ZONE_ID`, `CF_API_TOKEN`. Worker secrets via
  `wrangler secret put`: `DEEPGRAM_API_KEY`, `RESEND_API_KEY`.
- `public/audio/` and `dist/` are gitignored; audio lives in R2
  (`audio.kotobaapp.com`).
- SW updates are prompt-based (C2): a deploy never hard-reloads a live session.
  `src/platform/swUpdate.ts` applies silently on cold start, otherwise shows a
  home-screen notice; Settings has a manual check. Ship user-visible changes
  with a new entry at the top of `src/changelog.ts` (fresh id).
- Audio is CacheFirst on unversioned URLs: **any re-recorded clip at an
  existing URL requires bumping the `kotoba-audio-v*` cacheName** in
  `vite.config.ts` AND appending the old name to `STALE_CACHES` in
  `swUpdate.ts` (currently v2).
- Sync blob rules (C2): additive-only schema, `version` field, unknown
  top-level keys pass through old clients untouched, settings merge is
  newer-wins via per-key stamps (`__meta` in the settings store). IDB upgrade
  callbacks must stay `oldVersion`-aware (`src/data/db.ts`). Server keeps a
  one-back blob snapshot in D1 `progress_prev`.
- Deploy: push to `main` → `.github/workflows/deploy.yml` (pnpm install →
  test → build → GitHub Pages). CI runs the tests — don't push red.
- **Workers deploy via the global `wrangler` (v4, `~/.npm-global/bin`), always
  with `--cwd` — never from the repo root and never via `npx wrangler`.**
  Wrangler auto-loads the repo-root `.env`, whose zone-scoped `CF_API_TOKEN`
  overrides the OAuth login and breaks every account call ("Failed to
  automatically retrieve account IDs"); `npx` may hang downloading a fresh copy.
  Canonical commands (all pre-approved in `.claude/settings.local.json`):
  `wrangler --cwd server/api deploy`, `wrangler --cwd server/stt-proxy deploy`,
  `wrangler --cwd server/api d1 execute kotoba --remote --file=schema.sql`
  (schema.sql is additive/idempotent), `wrangler --cwd server/api tail`,
  `… deployments list`, `… whoami`. `wrangler secret put` stays Evan-only.
- `pnpm-workspace.yaml` sets `minimumReleaseAge: 10080` and disables build
  scripts for `msedge-tts`.
