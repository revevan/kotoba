// Pre-generates the entire audio corpus as MP3s using the free Microsoft Edge
// neural TTS endpoint (msedge-tts). Idempotent: a manifest of content hashes
// skips clips that are already generated. Run: npm run gen-audio [deckId ...]

import { createHash } from 'node:crypto';
import { createWriteStream, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import type { Deck } from '../src/types';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decksDir = join(root, 'public', 'decks');
const audioDir = join(root, 'public', 'audio');
const manifestPath = join(root, 'tools', 'audio-manifest.json');

const JA_VOICE = 'ja-JP-NanamiNeural';
const EN_VOICE = 'en-US-AriaNeural';

const PHRASES: Record<string, string> = {
  'session-start': "Let's begin!",
  'in-japanese': 'In Japanese:',
  'repeat-after-me': 'Repeat after me.',
  'how-do-you-say': 'How do you say —',
  'correct': 'Correct!',
  'the-answer-is': 'The answer is —',
  'did-you-get-it': 'Did you get it? Say — got it — or — missed it.',
  'paused': "Paused. Say resume when you're ready.",
  'resuming': 'Resuming!',
  'session-done': 'Session complete. Great work!',
};

interface Job {
  out: string; // path relative to public/audio
  text: string;
  voice: string;
  rate?: string;
}

function hashOf(job: Job): string {
  return createHash('sha1').update(`${job.voice}|${job.rate ?? ''}|${job.text}`).digest('hex');
}

function loadDecks(only: string[]): Deck[] {
  const files = readdirSync(decksDir).filter((f) => f.endsWith('.json') && f !== 'index.json');
  const decks = files.map((f) => JSON.parse(readFileSync(join(decksDir, f), 'utf8')) as Deck);
  return only.length > 0 ? decks.filter((d) => only.includes(d.id)) : decks;
}

function collectJobs(decks: Deck[]): Job[] {
  const jobs = new Map<string, Job>();
  for (const [key, text] of Object.entries(PHRASES)) {
    jobs.set(`phrases/${key}.mp3`, { out: `phrases/${key}.mp3`, text, voice: EN_VOICE });
  }
  for (const deck of decks) {
    for (const w of deck.words) {
      jobs.set(`ja/${w.id}.mp3`, { out: `ja/${w.id}.mp3`, text: w.kana, voice: JA_VOICE });
      jobs.set(`en/${w.id}.mp3`, { out: `en/${w.id}.mp3`, text: w.prompt, voice: EN_VOICE });
      w.mora.forEach((key, i) => {
        if (key === 'q') return;
        jobs.set(`mora/${key}.mp3`, { out: `mora/${key}.mp3`, text: w.moraKana[i] === 'ー' ? w.moraKana[i - 1] ?? 'あ' : w.moraKana[i], voice: JA_VOICE, rate: '-20%' });
      });
    }
  }
  return [...jobs.values()];
}

async function main() {
  const only = process.argv.slice(2);
  const decks = loadDecks(only);
  console.log(`decks: ${decks.map((d) => d.id).join(', ')}`);

  const manifest: Record<string, string> = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};
  const jobs = collectJobs(decks).filter((job) => {
    const path = join(audioDir, job.out);
    return !(existsSync(path) && manifest[job.out] === hashOf(job));
  });
  console.log(`to generate: ${jobs.length} clips`);

  for (const sub of ['ja', 'en', 'mora', 'phrases']) mkdirSync(join(audioDir, sub), { recursive: true });

  // One TTS connection per (voice, rate) config; clips generated sequentially
  // to be polite to the free endpoint.
  const clients = new Map<string, MsEdgeTTS>();
  const getClient = async (job: Job) => {
    const key = `${job.voice}|${job.rate ?? ''}`;
    let c = clients.get(key);
    if (!c) {
      c = new MsEdgeTTS();
      await c.setMetadata(job.voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      clients.set(key, c);
    }
    return c;
  };

  let done = 0;
  let failed = 0;
  for (const job of jobs) {
    const outPath = join(audioDir, job.out);
    const tmpPath = `${outPath}.tmp`;
    let attempts = 0;
    for (;;) {
      try {
        const client = await getClient(job);
        const { audioStream } = client.toStream(job.text, job.rate ? { rate: job.rate } : undefined);
        await pipeline(audioStream, createWriteStream(tmpPath));
        renameSync(tmpPath, outPath);
        manifest[job.out] = hashOf(job);
        done++;
        break;
      } catch (e) {
        attempts++;
        clients.clear(); // drop possibly-broken connections
        if (attempts >= 3) {
          console.error(`FAILED ${job.out}: ${e instanceof Error ? e.message : e}`);
          failed++;
          break;
        }
        await new Promise((r) => setTimeout(r, 1500 * attempts));
      }
    }
    if (done % 25 === 0 && done > 0) {
      console.log(`  ${done}/${jobs.length}`);
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
    }
  }

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
  console.log(`generated ${done}, failed ${failed}, skipped ${collectJobs(decks).length - jobs.length}`);
  for (const c of clients.values()) c.close();
  process.exit(failed > 0 ? 1 : 0);
}

void main();
