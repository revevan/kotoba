// Sync public/audio/** to the kotoba-audio R2 bucket (served at
// audio.kotobaapp.com). Idempotent and self-healing: lists the bucket and
// uploads only keys that are missing or whose size differs — no local state
// file to lose. Run after every gen-audio:
//
//   npm run sync-audio-r2
//
// Credentials in .env (gitignored):
//   R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY  (required)
//   CF_ZONE_ID / CF_API_TOKEN  (optional — purge the edge cache after upload
//   so re-synthesized clips propagate instead of waiting out the 30-day TTL)

import { ListObjectsV2Command, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { createReadStream, existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const audioDir = join(root, 'public', 'audio');
const BUCKET = 'kotoba-audio';
const CONCURRENCY = 12;

// Minimal .env loader (repo has no dotenv dependency).
function loadEnv(): Record<string, string> {
  const path = join(root, '.env');
  const env: Record<string, string> = {};
  if (existsSync(path)) {
    for (const line of readFileSync(path, 'utf8').split('\n')) {
      const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
      if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
    }
  }
  return { ...env, ...process.env } as Record<string, string>;
}

const CONTENT_TYPES: Record<string, string> = { '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };

function* walk(dir: string): Generator<string> {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/\.(mp3|wav)$/.test(entry.name)) yield p;
  }
}

async function main(): Promise<void> {
  const env = loadEnv();
  for (const k of ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY']) {
    if (!env[k]) throw new Error(`${k} not set — create an R2 API token (dashboard → R2 → Manage API tokens) and add it to .env`);
  }
  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
  });

  // Remote inventory: key → size.
  const remote = new Map<string, number>();
  let token: string | undefined;
  do {
    const page = await s3.send(new ListObjectsV2Command({ Bucket: BUCKET, ContinuationToken: token }));
    for (const o of page.Contents ?? []) if (o.Key) remote.set(o.Key, o.Size ?? -1);
    token = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (token);
  console.log(`remote objects: ${remote.size}`);

  // Local inventory → pending uploads.
  const pending: Array<{ key: string; path: string; size: number }> = [];
  let localCount = 0;
  for (const path of walk(audioDir)) {
    localCount++;
    const key = relative(audioDir, path).split('\\').join('/');
    const size = statSync(path).size;
    if (remote.get(key) !== size) pending.push({ key, path, size });
  }
  console.log(`local clips: ${localCount} | to upload: ${pending.length}`);

  let done = 0;
  let failed = 0;
  const queue = [...pending];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (;;) {
        const item = queue.shift();
        if (!item) return;
        try {
          await s3.send(new PutObjectCommand({
            Bucket: BUCKET,
            Key: item.key,
            Body: createReadStream(item.path),
            ContentLength: item.size,
            ContentType: CONTENT_TYPES[item.path.slice(item.path.lastIndexOf('.'))] ?? 'application/octet-stream',
            CacheControl: 'public, max-age=2592000',
          }));
          done++;
          if (done % 500 === 0) console.log(`  uploaded ${done}/${pending.length}`);
        } catch (e) {
          failed++;
          console.error(`  ✗ ${item.key}: ${e instanceof Error ? e.message : e}`);
        }
      }
    }),
  );
  console.log(`uploaded ${done}, failed ${failed}`);
  if (failed > 0) process.exitCode = 1;

  // Edge-cache purge so re-synthesized clips (same key, new content) propagate.
  if (done > 0 && env.CF_ZONE_ID && env.CF_API_TOKEN) {
    const resp = await fetch(`https://api.cloudflare.com/client/v4/zones/${env.CF_ZONE_ID}/purge_cache`, {
      method: 'POST',
      headers: { authorization: `Bearer ${env.CF_API_TOKEN}`, 'content-type': 'application/json' },
      body: JSON.stringify({ purge_everything: true }),
    });
    const body = (await resp.json()) as { success?: boolean };
    console.log(`edge cache purge: ${body.success ? 'ok' : 'FAILED'}`);
  } else if (done > 0) {
    console.log('edge cache not purged (CF_ZONE_ID/CF_API_TOKEN unset) — changed clips refresh within 30 days');
  }
}

void main();
