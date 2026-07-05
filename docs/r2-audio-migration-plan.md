# Move the audio corpus to Cloudflare R2

## Why

`public/audio/**` is 542MB across ~34k files and growing (N3/N4 sentence audio
just landed, more decks planned). It ships as part of the GitHub Pages build
artifact today, and GitHub Pages has a ~1GB soft limit on published site size.
At current growth we cross that within a few more deck cycles.

R2 solves this cleanly: free egress, 10GB free storage (we're at 0.53GB), and
`kotobaapp.com`'s DNS already lives in Cloudflare (used for the Resend email
records — see `server/api/wrangler.toml`), so adding a subdomain is a DNS
change, not a new account or domain move.

Confirmed today: the live site (`kotobaapp.com`) is served by GitHub Pages
(`server: GitHub.com` header), fronted by Fastly, not Cloudflare. Only the two
Workers (`server/stt-proxy`, `server/api`) currently touch Cloudflare.

**Do this after the current sentence-generation batch is committed.**
Mid-migration is the wrong time to be juggling a moving `public/audio/`
directory — finish and commit the in-flight N3/N4 work first, then run this
as its own change.

## Design

- New R2 bucket `kotoba-audio`, bound to a custom domain `audio.kotobaapp.com`
  (Cloudflare's "Connect Domain" for R2 — no Worker needed, egress-free,
  served off Cloudflare's edge cache).
- Client fetches audio from `audio.kotobaapp.com` in production, but falls
  back to today's same-origin relative path (`/audio/...`) when no override is
  configured — so local dev (`npm run dev`) needs zero changes and there's an
  instant rollback (just unset a secret, no code revert).
- `public/audio/**` stays on disk for local dev exactly as it is today
  (`gen-audio` keeps writing there, `tools/audio-manifest.json` keeps working
  unchanged). A new sync step pushes it to R2. The production build strips
  `dist/audio` so it never ships to GitHub Pages once R2 is live.
- Whether to stop committing `public/audio/**` to git going forward is a
  separate decision — see "Open questions" below. Not required to fix the
  Pages size limit (that's fixed by dropping audio from the *build output*,
  not from git).

## Phase 1 — Provision R2 (one-time, no code changes)

1. `wrangler r2 bucket create kotoba-audio` (same Cloudflare account already
   used for `stt-proxy`/`api`).
2. In the Cloudflare dashboard: R2 → `kotoba-audio` → Settings → Custom
   Domains → connect `audio.kotobaapp.com`. This adds the DNS record
   automatically since the zone is already on Cloudflare.
3. Create a scoped R2 API token (Account → R2 → "Manage API tokens", object
   read+write, restricted to `kotoba-audio`) for the sync script. Store as
   `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` in the local
   `.env` (already gitignored) — analogous to how `DEEPGRAM_API_KEY` and
   `RESEND_API_KEY` are handled as wrangler secrets for the other two workers.

## Phase 2 — One-time backfill upload

Use `aws s3 sync` against R2's S3-compatible endpoint
(`https://<account_id>.r2.cloudflarestorage.com`) rather than writing a custom
uploader — it's idempotent, resumable, and only pushes changed/new files,
which matters since this repo will keep generating audio incrementally.

```bash
aws s3 sync public/audio/ s3://kotoba-audio/ \
  --endpoint-url https://$R2_ACCOUNT_ID.r2.cloudflarestorage.com \
  --cache-control "public, max-age=2592000" \
  --exclude "*.tmp"
```

Note: 30-day cache, not `immutable`. Filenames are stable per sentence/word
id, but ids get *re-synthesized in place* after corrections (see
`ee3751d "Apply human-reviewed N4 corrections"`), so content under a given key
can change. After every sync, purge the affected paths via the Cloudflare
cache-purge API (or purge everything under `audio.kotobaapp.com/*` — it's
cheap and infrequent) so corrections propagate immediately instead of waiting
out the 30-day edge cache.

## Phase 3 — Client code change

`src/audio/clips.ts:10` currently derives every clip URL from Vite's own
`import.meta.env.BASE_URL` (the site's routing base, e.g. `/`), which is the
wrong thing to repurpose for a CDN swap — it also controls app-shell asset
resolution. Add a dedicated audio base instead:

```ts
// src/audio/clips.ts
const base = () =>
  import.meta.env.VITE_AUDIO_BASE_URL ?? `${import.meta.env.BASE_URL}audio/`;
```

Wire `VITE_AUDIO_BASE_URL=https://audio.kotobaapp.com/` into
`.github/workflows/deploy.yml` the same way `VITE_STT_ENDPOINT` and
`VITE_API_ENDPOINT` are already passed as build-time secrets (`deploy.yml`
lines ~30-34). Local dev and `npm run preview` leave the var unset and keep
using `public/audio/` exactly as today.

## Phase 4 — Stop shipping audio in the Pages build

Once `VITE_AUDIO_BASE_URL` is set in CI, `dist/audio` is dead weight in the
Pages artifact. Strip it in `vite.config.ts` with a `closeBundle` hook that
only fires when the override is present, so local `npm run build` (no env
var) is unaffected:

```ts
// vite.config.ts, in plugins: [...]
{
  name: 'drop-audio-from-build',
  closeBundle() {
    if (process.env.VITE_AUDIO_BASE_URL) rmSync('dist/audio', { recursive: true, force: true });
  },
},
```

This is what actually fixes the GitHub Pages size limit — the deployed
artifact drops from ~550MB+ to tens of MB.

Also update `vite.config.ts:49`'s Workbox `globIgnores` comment/config as
needed — `audio/**` is already excluded from the precache, so no behavior
change there, just confirm the `CacheFirst` runtime-caching rule (line 56)
still matches `audio.kotobaapp.com` URLs (its `urlPattern` checks
`url.pathname.includes('/audio/')`, which won't match a different origin's
path unless the pattern is loosened — needs to become an origin-aware check,
e.g. also match `url.hostname === 'audio.kotobaapp.com'`).

## Phase 5 — Ongoing workflow after migration

After this lands, the generation loop becomes:

1. `npm run gen-audio` (unchanged — writes to `public/audio/`, updates
   `tools/audio-manifest.json`).
2. `npm run sync-audio-r2` (new script wrapping the `aws s3 sync` command from
   Phase 2, plus the cache purge) — pushes only new/changed clips.
3. Commit as usual (decks/sentences/manifest; audio files optional per the
   open question below).

I'd add `sync-audio-r2` as a real npm script (small wrapper around the AWS
CLI call, reading R2 credentials from `.env`) rather than a one-off command,
since it'll run every time new audio is generated, including the batch
currently in progress once it's done.

## Rollback

Unset `VITE_AUDIO_BASE_URL` in the repo/environment secrets and redeploy —
`clips.ts` falls back to the same-origin path immediately. No code revert
needed. (Requires `public/audio/` to still be present in the build, i.e.
don't also strip it from git before confirming R2 is stable.)

## Open questions before I execute this

- **Stop committing audio to git going forward?** Not required to fix the
  Pages limit, but git (`.git` is 132MB and climbing) will keep growing
  otherwise. If yes: gitignore `public/audio/**` after the backfill, treat R2
  as the source of truth, and rely on `tools/audio-manifest.json` (tiny, text)
  as the record of what's been generated. Existing history stays bloated
  unless separately rewritten with `git filter-repo` — that's a disruptive,
  force-push operation I'd want explicit sign-off on before touching.
- **Bucket/domain naming** — assumed `kotoba-audio` / `audio.kotobaapp.com`;
  say if you want different names.
- **Timing** — confirm the in-flight sentence-generation batch is fully
  committed before I start Phase 1, so the backfill upload is a clean
  snapshot rather than racing new files landing mid-sync.
