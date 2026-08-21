// Shared helpers for the shorts pipeline scripts (plan / register / upload).
// Config comes from the repo-root .env locally and from process.env in CI.

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

export const SHORTS_DIR = dirname(fileURLToPath(import.meta.url));
export const REPO = join(SHORTS_DIR, '..', '..');
export const OUT_DIR = join(SHORTS_DIR, 'out');

export const API = 'https://kotoba-api.evanwkennedy.workers.dev';
export const AUDIO_BASE = 'https://audio.kotobaapp.com';
export const R2_BUCKET = 'kotoba-audio'; // shorts live under shorts/ on the same public host
export const R2_PREFIX = 'shorts';

export function loadEnv() {
  const env = {};
  const path = join(REPO, '.env');
  if (existsSync(path)) {
    for (const line of readFileSync(path, 'utf8').split('\n')) {
      const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  return { ...env, ...process.env };
}

export function need(env, ...keys) {
  for (const k of keys) if (!env[k]) throw new Error(`${k} missing (set it in .env or the CI environment)`);
}

/** Admin API call against the kotoba-api worker (Bearer ADMIN_SECRET). */
export async function adminApi(env, path, init = {}) {
  need(env, 'KOTOBA_ADMIN_SECRET');
  const r = await fetch(`${API}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.KOTOBA_ADMIN_SECRET}`, ...(init.headers ?? {}) },
  });
  if (!r.ok) throw new Error(`${init.method ?? 'GET'} ${path} → ${r.status} ${await r.text()}`);
  return r.json();
}

export function r2Client(env) {
  need(env, 'R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY');
  return new S3Client({
    region: 'auto',
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
  });
}

export async function r2Put(s3, key, body, contentType) {
  await s3.send(new PutObjectCommand({ Bucket: R2_BUCKET, Key: key, Body: body, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' }));
  return `${AUDIO_BASE}/${key}`;
}

/** Audio clips a format needs, as (subdir, id) pairs — mirrors gen_shorts.audio_paths. */
export function clipsFor(format, wordId, sentenceId) {
  const clips = [['ja', wordId], ['ja-slow', wordId], ['sen', sentenceId]];
  if (format === 'quiz' || format === 'notrans') clips.push(['en', wordId]);
  if (format === 'deadpan' || format === 'notrans') clips.push(['sen-en', sentenceId]);
  return clips;
}

/** 5/week at 15:00 UTC: yields ISO publish slots on consecutive weekdays from `start`. */
export function* publishSlots(start) {
  const d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate(), 15));
  for (;;) {
    while (d.getUTCDay() === 0 || d.getUTCDay() === 6) d.setUTCDate(d.getUTCDate() + 1);
    yield d.toISOString().replace('.000Z', 'Z');
    d.setUTCDate(d.getUTCDate() + 1);
  }
}
