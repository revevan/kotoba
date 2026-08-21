// Publish rendered shorts to R2 and register them as pending review.
//
//   node tools/shorts/register.mjs            (everything in out/batch.json)
//
// Idempotent: the worker ignores ids it already has, and R2 objects are
// immutable by id, so re-running after a partial failure is safe.

import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { OUT_DIR, R2_PREFIX, adminApi, loadEnv, r2Client, r2Put } from './lib.mjs';

const env = loadEnv();

async function main() {
  const batchPath = join(OUT_DIR, 'batch.json');
  if (!existsSync(batchPath)) throw new Error('no out/batch.json — run gen-shorts first');
  const batch = JSON.parse(readFileSync(batchPath, 'utf8'));
  if (batch.length === 0) {
    console.log('empty batch — nothing to register');
    return;
  }
  const s3 = r2Client(env);
  const items = [];
  for (const it of batch) {
    const id = it.file.replace(/\.mp4$/, '');
    const mp4 = join(OUT_DIR, it.file);
    const jpg = join(OUT_DIR, 'thumbs', `${it.file}.jpg`);
    const videoUrl = await r2Put(s3, `${R2_PREFIX}/${id}.mp4`, createReadStream(mp4), 'video/mp4');
    const posterUrl = existsSync(jpg) ? await r2Put(s3, `${R2_PREFIX}/${id}.jpg`, createReadStream(jpg), 'image/jpeg') : null;
    items.push({
      id, format: it.format, wordId: it.wordId, sentenceId: it.sentenceId, level: it.level,
      title: it.title, description: it.description, duration: it.duration, videoUrl, posterUrl,
    });
    console.log(`  ↑ ${id}`);
  }
  const res = await adminApi(env, '/admin/shorts', { method: 'POST', body: JSON.stringify({ items }) });
  console.log(`registered ${res.inserted} new of ${res.received} (rest already known)`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
