// Daily uploader: pushes reviewer-approved shorts to YouTube as private,
// scheduled videos — one publish slot per weekday at 15:00 UTC, continuing
// after whatever is already scheduled.
//
//   pnpm run upload-shorts -- --auth           first-time OAuth (opens browser)
//   pnpm run upload-shorts                     upload next ≤6 approved items
//   pnpm run upload-shorts -- --limit 3 --dry-run
//
// Source of truth is the `shorts` table on the kotoba-api worker (status
// 'approved' from the reviewer page → 'uploaded' here). videos.insert costs
// 1,600 quota units → ≤6 uploads/day on the default 10k quota; stops cleanly
// on quotaExceeded and picks up tomorrow.
//
// Credentials: tools/shorts/client_secret.json + token.json locally (both
// gitignored), or GOOGLE_CLIENT_SECRET_JSON + GOOGLE_TOKEN_JSON env vars in CI.
// The consent screen is published ("In production"), so refresh tokens don't
// expire on the 7-day Testing-mode clock.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Readable } from 'node:stream';
import { parseArgs } from 'node:util';
import { exec } from 'node:child_process';
import { google } from 'googleapis';
import { SHORTS_DIR, adminApi, loadEnv, publishSlots } from './lib.mjs';

const SECRET = join(SHORTS_DIR, 'client_secret.json');
const TOKEN = join(SHORTS_DIR, 'token.json');
const SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.readonly'];
const CATEGORY_EDUCATION = '27';
const DAILY_LIMIT = 6;
const env = loadEnv();

// strict: an unknown flag (e.g. a typo'd --dryrun) is an error, never a real upload.
let args;
try {
  ({ values: args } = parseArgs({
  args: process.argv.slice(2).filter((a) => a !== '--'),
  options: { auth: { type: 'boolean' }, 'dry-run': { type: 'boolean' }, limit: { type: 'string' } },
  strict: true,
  }));
} catch (e) {
  console.error(`${e.message}\nusage: upload-shorts [--auth] [--dry-run] [--limit N]`);
  process.exit(2);
}
const dryRun = Boolean(args['dry-run']);
const limit = Math.max(1, Number(args.limit ?? DAILY_LIMIT) || DAILY_LIMIT);

/** Short tag carried on every upload so a row stuck in 'uploading' can be matched
 *  back to its YouTube video (tags are capped at 30 chars; ids are longer). */
const markerTag = (id) => `kb-${createHash('sha1').update(id).digest('hex').slice(0, 12)}`;

async function setStatus(it, body, attempts = 3) {
  for (let i = 1; ; i++) {
    try {
      return await adminApi(env, `/admin/shorts/${it.id}/status`, { method: 'POST', body: JSON.stringify(body) });
    } catch (e) {
      if (i >= attempts) throw e;
      await new Promise((r) => setTimeout(r, 1500 * i));
    }
  }
}

/** Rows left in 'uploading' by an interrupted run: find them on the channel by
 *  marker tag → 'uploaded'; not there → back to 'approved' for a clean retry. */
async function reconcile(yt, stuck) {
  if (stuck.length === 0) return;
  console.log(`${stuck.length} row(s) stuck in 'uploading' — reconciling against the channel`);
  const ch = await yt.channels.list({ part: ['contentDetails'], mine: true });
  const uploads = ch.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  const pl = uploads ? await yt.playlistItems.list({ part: ['contentDetails'], playlistId: uploads, maxResults: 50 }) : null;
  const ids = (pl?.data.items ?? []).map((i) => i.contentDetails.videoId);
  const vids = ids.length ? (await yt.videos.list({ part: ['snippet', 'status'], id: ids })).data.items ?? [] : [];
  const byTag = new Map();
  for (const v of vids) for (const t of v.snippet?.tags ?? []) if (t.startsWith('kb-')) byTag.set(t, v);
  for (const it of stuck) {
    const v = byTag.get(markerTag(it.id));
    if (v) {
      await setStatus(it, { status: 'uploaded', videoId: v.id, publishAt: v.status?.publishAt });
      console.log(`  recovered ${it.id} → https://youtube.com/shorts/${v.id}`);
    } else {
      await setStatus(it, { status: 'approved' });
      console.log(`  ${it.id} never reached YouTube — back to approved`);
    }
  }
}

function readCreds(path, envKey) {
  if (env[envKey]) return JSON.parse(env[envKey]);
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
}

async function authorize() {
  const secret = readCreds(SECRET, 'GOOGLE_CLIENT_SECRET_JSON');
  if (!secret) throw new Error(`missing ${SECRET} (or GOOGLE_CLIENT_SECRET_JSON) — OAuth Desktop client JSON from Google Cloud Console`);
  const { client_id, client_secret } = secret.installed ?? secret.web;

  const cached = readCreds(TOKEN, 'GOOGLE_TOKEN_JSON');
  if (cached?.refresh_token) {
    const client = new google.auth.OAuth2(client_id, client_secret);
    client.setCredentials(cached);
    try {
      await client.getAccessToken();
      return client;
    } catch (e) {
      if (env.CI) throw new Error(`cached token rejected in CI (${e.message}) — re-run --auth locally and update GOOGLE_TOKEN_JSON`);
      console.warn(`cached token rejected (${e.message}) — re-authorizing`);
    }
  }
  if (env.CI) throw new Error('no GOOGLE_TOKEN_JSON in CI — run --auth locally and add the secret');

  // Loopback redirect: Desktop clients accept any http://localhost:PORT.
  const server = createServer();
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const redirect = `http://localhost:${server.address().port}`;
  const client = new google.auth.OAuth2(client_id, client_secret, redirect);
  const url = client.generateAuthUrl({ access_type: 'offline', prompt: 'consent', scope: SCOPES });
  console.log('\nOpening browser for Google sign-in. If it does not open, visit:\n' + url + '\n');
  exec(`open "${url}"`);
  const code = await new Promise((resolve, reject) => {
    server.on('request', (req, res) => {
      const c = new URL(req.url, redirect).searchParams.get('code');
      res.end(c ? 'Authorized — you can close this tab.' : 'Missing code.');
      if (c) resolve(c); else reject(new Error('no code in redirect'));
    });
  });
  server.close();
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  writeFileSync(TOKEN, JSON.stringify(tokens, null, 1));
  console.log(`token saved → ${TOKEN}\n(for CI: paste this file's contents into the GOOGLE_TOKEN_JSON secret)`);
  return client;
}

async function main() {
  if (args.auth) {
    await authorize();
    console.log('auth ok');
    return;
  }

  const [stuck, uploadedBefore] = await Promise.all([
    adminApi(env, '/admin/shorts?status=uploading'),
    adminApi(env, '/admin/shorts?status=uploaded'),
  ]);
  const yt = dryRun ? null : google.youtube({ version: 'v3', auth: await authorize() });
  if (!dryRun) await reconcile(yt, stuck);

  const [approved, uploaded] = stuck.length && !dryRun
    ? await Promise.all([adminApi(env, '/admin/shorts?status=approved'), adminApi(env, '/admin/shorts?status=uploaded')])
    : [await adminApi(env, '/admin/shorts?status=approved'), uploadedBefore];
  if (approved.length === 0) {
    console.log('nothing approved — queue is empty (check the review page)');
    return;
  }

  // Next free slot: the weekday after the latest scheduled publish, or tomorrow.
  const lastScheduled = uploaded.map((s) => Date.parse(s.publishAt || '')).filter(Number.isFinite);
  const after = Math.max(Date.now() + 86_400_000, ...lastScheduled.map((t) => t + 86_400_000));
  const slots = publishSlots(new Date(after));

  const todo = approved.slice(0, limit);
  console.log(`${approved.length} approved, ${uploaded.length} already scheduled → uploading ${todo.length}${dryRun ? ' (dry run)' : ''}`);

  for (const it of todo) {
    const publishAt = slots.next().value;
    const title = it.title.length > 100 ? it.title.slice(0, 99).replace(/\s+\S*$/, '') + '…' : it.title;
    console.log(`  ${it.id} → "${title}" @ ${publishAt}`);
    if (dryRun) continue;
    // Phase 1: reserve. A crash after this leaves 'uploading', which the next
    // run reconciles instead of blindly inserting again.
    try {
      await setStatus(it, { status: 'uploading' });
    } catch (e) {
      console.error(`  ✗ ${it.id}: could not reserve (${e.message}) — skipping`);
      continue;
    }
    let videoId;
    try {
      const src = await fetch(it.videoUrl);
      if (!src.ok) throw new Error(`fetch ${it.videoUrl} → ${src.status}`);
      const res = await yt.videos.insert({
        part: ['snippet', 'status'],
        requestBody: {
          snippet: {
            title,
            description: it.description,
            tags: ['learnjapanese', 'jlpt', 'nihongo', markerTag(it.id)],
            categoryId: CATEGORY_EDUCATION,
            defaultLanguage: 'en',
            defaultAudioLanguage: 'ja',
          },
          status: { privacyStatus: 'private', publishAt, selfDeclaredMadeForKids: false },
        },
        media: { mimeType: 'video/mp4', body: Readable.fromWeb(src.body) },
      });
      videoId = res.data.id;
    } catch (e) {
      const reason = e?.errors?.[0]?.reason ?? e.message;
      // Insert failed: release the reservation so tomorrow retries cleanly.
      await setStatus(it, { status: 'approved' }).catch(() => {});
      if (reason === 'quotaExceeded' || reason === 'uploadLimitExceeded') {
        console.error(`  stopped: ${reason} — the daily run will continue tomorrow`);
        break;
      }
      console.error(`  ✗ ${it.id}: ${reason}`);
      continue;
    }
    // Phase 2: confirm. If even the retries fail, the row stays 'uploading'
    // and reconcile() recovers the videoId by marker tag on the next run.
    try {
      await setStatus(it, { status: 'uploaded', videoId, publishAt });
      console.log(`    ✓ https://youtube.com/shorts/${videoId}`);
    } catch (e) {
      console.error(`    uploaded as ${videoId} but could not record it (${e.message}) — will reconcile next run`);
    }
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
