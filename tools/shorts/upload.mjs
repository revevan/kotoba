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

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Readable } from 'node:stream';
import { exec } from 'node:child_process';
import { google } from 'googleapis';
import { SHORTS_DIR, adminApi, loadEnv, publishSlots } from './lib.mjs';

const SECRET = join(SHORTS_DIR, 'client_secret.json');
const TOKEN = join(SHORTS_DIR, 'token.json');
const SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.readonly'];
const CATEGORY_EDUCATION = '27';
const DAILY_LIMIT = 6;
const env = loadEnv();

const args = process.argv.slice(2).filter((a) => a !== '--');
const flag = (name) => args.includes(name);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const dryRun = flag('--dry-run');
const limit = Number(opt('--limit', DAILY_LIMIT));

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
  if (flag('--auth')) {
    await authorize();
    console.log('auth ok');
    return;
  }

  const [approved, uploaded] = await Promise.all([
    adminApi(env, '/admin/shorts?status=approved'),
    adminApi(env, '/admin/shorts?status=uploaded'),
  ]);
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

  const yt = dryRun ? null : google.youtube({ version: 'v3', auth: await authorize() });

  for (const it of todo) {
    const publishAt = slots.next().value;
    const title = it.title.slice(0, 100);
    console.log(`  ${it.id} → "${title}" @ ${publishAt}`);
    if (dryRun) continue;
    try {
      const src = await fetch(it.videoUrl);
      if (!src.ok) throw new Error(`fetch ${it.videoUrl} → ${src.status}`);
      const res = await yt.videos.insert({
        part: ['snippet', 'status'],
        requestBody: {
          snippet: {
            title,
            description: it.description,
            tags: ['learnjapanese', 'jlpt', 'nihongo'],
            categoryId: CATEGORY_EDUCATION,
            defaultLanguage: 'en',
            defaultAudioLanguage: 'ja',
          },
          status: { privacyStatus: 'private', publishAt, selfDeclaredMadeForKids: false },
        },
        media: { mimeType: 'video/mp4', body: Readable.fromWeb(src.body) },
      });
      const videoId = res.data.id;
      await adminApi(env, `/admin/shorts/${it.id}/status`, { method: 'POST', body: JSON.stringify({ status: 'uploaded', videoId, publishAt }) });
      console.log(`    ✓ https://youtube.com/shorts/${videoId}`);
    } catch (e) {
      const reason = e?.errors?.[0]?.reason ?? e.message;
      if (reason === 'quotaExceeded' || reason === 'uploadLimitExceeded') {
        console.error(`  stopped: ${reason} — the daily run will continue tomorrow`);
        break;
      }
      console.error(`  ✗ ${it.id}: ${reason}`);
    }
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
