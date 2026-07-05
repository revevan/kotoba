// List (and resolve) in-app feedback submissions from the kotoba-api worker.
//
//   npm run feedback                — list open submissions
//   npm run feedback -- --all       — include resolved ones
//   npm run feedback -- --resolve 3 — toggle resolved on submission #3
//
// Needs KOTOBA_ADMIN_SECRET in .env (matches the worker's ADMIN_SECRET secret).

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const API = 'https://kotoba-api.evanwkennedy.workers.dev';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

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

async function main() {
  const secret = loadEnv().KOTOBA_ADMIN_SECRET;
  if (!secret) throw new Error('KOTOBA_ADMIN_SECRET missing from .env');

  const args = process.argv.slice(2);
  const resolveIdx = args.indexOf('--resolve');
  if (resolveIdx !== -1) {
    const id = args[resolveIdx + 1];
    const r = await fetch(`${API}/admin/feedback/${id}/resolve?secret=${secret}`, { method: 'POST' });
    console.log(await r.text());
    return;
  }

  const r = await fetch(`${API}/admin/feedback?secret=${secret}`);
  if (!r.ok) throw new Error(`list failed (${r.status})`);
  type Item = { id: number; type: string; message: string; contact: string | null; context: string | null; created_at: number; resolved: number };
  let items = (await r.json()) as Item[];
  if (!args.includes('--all')) items = items.filter((i) => !i.resolved);

  if (items.length === 0) {
    console.log('No open feedback. 🎉');
    return;
  }
  for (const i of items) {
    const when = new Date(i.created_at).toISOString().slice(0, 16).replace('T', ' ');
    console.log(`#${i.id} [${i.type}] ${when}${i.resolved ? ' (resolved)' : ''}`);
    console.log(`  ${i.message.replace(/\n/g, '\n  ')}`);
    if (i.contact) console.log(`  contact: ${i.contact}`);
    if (i.context) console.log(`  context: ${i.context}`);
    console.log();
  }
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
