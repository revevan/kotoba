// Uploads the rendered shorts batch to YouTube as private, scheduled videos.
//
//   pnpm run upload-shorts -- --auth              first-time OAuth (opens browser)
//   pnpm run upload-shorts                        upload next ≤6 pending items
//   pnpm run upload-shorts -- --limit 3 --dry-run
//   pnpm run upload-shorts -- --start-date 2026-09-01   re-sequence publish dates
//
// Reads tools/shorts/out/batch.json (from gen-shorts) and tracks progress in
// tools/shorts/out/upload-state.json, so it's safe to re-run daily until the
// batch is done. videos.insert costs 1,600 quota units → ≤6 uploads/day on the
// default 10k quota; the script stops cleanly on quotaExceeded.
//
// Needs tools/shorts/client_secret.json (OAuth Desktop client; gitignored).
// Tokens cache in tools/shorts/token.json (gitignored). While the consent
// screen is in "Testing", refresh tokens expire after 7 days — the script
// just re-prompts for auth when that happens.

import { createReadStream, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { google } from 'googleapis';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'out');
const SECRET = join(ROOT, 'client_secret.json');
const TOKEN = join(ROOT, 'token.json');
const BATCH = join(OUT, 'batch.json');
const STATE = join(OUT, 'upload-state.json');

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.readonly'];
const CATEGORY_EDUCATION = '27';
const DAILY_LIMIT = 6;

// ---------------------------------------------------------------- args

const args = process.argv.slice(2).filter((a) => a !== '--');
const flag = (name) => args.includes(name);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
};
const dryRun = flag('--dry-run');
const limit = Number(opt('--limit', DAILY_LIMIT));

// ---------------------------------------------------------------- auth

function loadJson(path, fallback) {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback;
}

async function authorize() {
  if (!existsSync(SECRET)) {
    throw new Error(`missing ${SECRET} — download the OAuth Desktop client JSON from Google Cloud Console`);
  }
  const secret = JSON.parse(readFileSync(SECRET, 'utf8'));
  const { client_id, client_secret } = secret.installed ?? secret.web;

  // Loopback redirect: Desktop clients accept any http://localhost:PORT.
  const server = createServer();
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const redirect = `http://localhost:${port}`;
  const client = new google.auth.OAuth2(client_id, client_secret, redirect);

  const cached = loadJson(TOKEN, null);
  if (cached?.refresh_token) {
    client.setCredentials(cached);
    try {
      await client.getAccessToken();
      server.close();
      return client;
    } catch (e) {
      console.warn(`cached token rejected (${e.message}) — re-authorizing`);
    }
  }

  const url = client.generateAuthUrl({ access_type: 'offline', prompt: 'consent', scope: SCOPES });
  console.log('\nOpening browser for Google sign-in. If it does not open, visit:\n' + url + '\n');
  exec(`open "${url}"`);

  const code = await new Promise((resolve, reject) => {
    server.on('request', (req, res) => {
      const u = new URL(req.url, redirect);
      const c = u.searchParams.get('code');
      res.end(c ? 'Authorized — you can close this tab.' : 'Missing code.');
      if (c) resolve(c); else reject(new Error('no code in redirect'));
    });
  });
  server.close();

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  writeFileSync(TOKEN, JSON.stringify(tokens, null, 1));
  console.log(`token saved → ${TOKEN}`);
  return client;
}

// ---------------------------------------------------------------- scheduling

function nextWeekday(d) {
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6) d.setUTCDate(d.getUTCDate() + 1);
  return d;
}

/** 5/week at 15:00 UTC starting from `start` (Date), one per weekday. */
function* publishDates(start) {
  const d = nextWeekday(new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate(), 15)));
  for (;;) {
    yield d.toISOString().replace('.000Z', 'Z');
    d.setUTCDate(d.getUTCDate() + 1);
    nextWeekday(d);
  }
}

// ---------------------------------------------------------------- main

async function main() {
  if (flag('--auth')) {
    await authorize();
    console.log('auth ok');
    return;
  }

  const batch = loadJson(BATCH, null);
  if (!batch) throw new Error(`no batch at ${BATCH} — run pnpm run gen-shorts first`);
  const state = loadJson(STATE, {});

  const pending = batch.filter((it) => !state[it.file]?.videoId);
  if (pending.length === 0) {
    console.log('nothing pending — batch fully uploaded');
    return;
  }

  // Re-sequence publish dates if asked, or if any pending date is already past
  // (the batch was rendered earlier than it's being uploaded).
  const now = Date.now();
  const stale = pending.some((it) => Date.parse(it.publishAt) <= now + 60 * 60 * 1000);
  const startOpt = opt('--start-date', null);
  if (startOpt || stale) {
    const start = startOpt ? new Date(startOpt + 'T00:00:00Z') : new Date(now + 24 * 60 * 60 * 1000);
    const gen = publishDates(start);
    for (const it of pending) it.publishAt = gen.next().value;
    console.log(`${startOpt ? 'start-date given' : 'publish dates were in the past'} — re-sequenced ${pending.length} items from ${pending[0].publishAt}`);
  }

  const todo = pending.slice(0, limit);
  console.log(`${pending.length} pending, uploading ${todo.length} now${dryRun ? ' (dry run)' : ''}`);

  const auth = dryRun ? null : await authorize();
  const yt = dryRun ? null : google.youtube({ version: 'v3', auth });

  for (const it of todo) {
    const path = join(OUT, it.file);
    if (!existsSync(path)) {
      console.warn(`  skip ${it.file}: file missing`);
      continue;
    }
    const body = {
      snippet: {
        title: it.title.slice(0, 100),
        description: it.description,
        tags: it.hashtags.map((h) => h.replace(/^#/, '')),
        categoryId: CATEGORY_EDUCATION,
        defaultLanguage: 'en',
        defaultAudioLanguage: 'ja',
      },
      status: {
        privacyStatus: 'private',
        publishAt: it.publishAt,
        selfDeclaredMadeForKids: false,
      },
    };
    console.log(`  ${it.file} → "${body.snippet.title}" @ ${it.publishAt}`);
    if (dryRun) continue;

    try {
      const res = await yt.videos.insert({
        part: ['snippet', 'status'],
        requestBody: body,
        media: { body: createReadStream(path) },
      });
      const videoId = res.data.id;
      state[it.file] = { videoId, publishAt: it.publishAt, uploadedAt: new Date().toISOString(), title: body.snippet.title };
      writeFileSync(STATE, JSON.stringify(state, null, 1));
      console.log(`    ✓ https://youtube.com/shorts/${videoId}`);
    } catch (e) {
      const reason = e?.errors?.[0]?.reason ?? e.message;
      if (reason === 'quotaExceeded' || reason === 'uploadLimitExceeded') {
        console.error(`  stopped: ${reason} — re-run tomorrow to continue`);
        break;
      }
      console.error(`  ✗ ${it.file}: ${reason}`);
    }
  }

  const done = batch.filter((it) => state[it.file]?.videoId).length;
  console.log(`\n${done}/${batch.length} uploaded · state → ${STATE}`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
