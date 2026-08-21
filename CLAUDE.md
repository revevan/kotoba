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
Social: `gen-shorts -- --queue` (or `-- <deckId> [--format=X] [--count=N]`) renders
1080x1920 vocab shorts from corpus assets into `tools/shorts/out/` (review.html grid
+ batch.json for the uploader; Python/Pillow/ffmpeg, self-bootstrapping venv;
needs the brew-cask Noto CJK JP fonts — see `tools/shorts/HANDOFF.md`). SEO: `indexnow`
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
- Deploy: push to `main` → `.github/workflows/deploy.yml` (pnpm install →
  test → build → GitHub Pages). CI runs the tests — don't push red.
- `pnpm-workspace.yaml` sets `minimumReleaseAge: 10080` and disables build
  scripts for `msedge-tts`.
