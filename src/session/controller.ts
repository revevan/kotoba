// Wires the UI to a live session: loads decks/cards, builds the queue,
// constructs the runner with real (or mock) audio + speech deps.

import { Player } from '../audio/player';
import { sessionClipUrls } from '../audio/clips';
import { prefetchAudio } from '../audio/prefetch';
import { getAllCards, getCard, logReview, putCard } from '../data/db';
import { fetchDeck, fetchDeckIndex, wordMap } from '../data/decks';
import { isDue, newCard, rateCard } from '../srs/scheduler';
import { abortListening, listen, srAvailable } from '../speech/recognizer';
import { cloudAbort, cloudListen, cloudReleaseMic, cloudSrAvailable, primeCloudAudio, primeMic } from '../speech/cloudRecognizer';
import { cloudSttEnabled } from '../speech/sttConfig';
import { mockAbort, mockListen, mockMode } from '../speech/mock';
import { acquireWakeLock, keepWakeLockAlive, releaseWakeLock } from '../platform/wakeLock';
import { warmupMic } from '../platform/unlock';
import { requestPersistentStorage } from '../platform/storage';
import { initReadingAnalyzer } from '../matching/reading';
import { syncOnLoad, syncPush } from '../sync/sync';
import type { Deck, Word } from '../types';
import { buildQueue } from './queueBuilder';
import { SessionRunner } from './runner';
import type { TapCommand } from './machine';
import {
  deckIndex,
  dueCount,
  enabledDeckIds,
  loadError,
  maxReviews,
  newAvailable,
  newPerSession,
  prefetchProgress,
  screen,
  sessionState,
  sessionWord,
  voiceEcho,
} from '../state';
import { clearProgress, getSetting, pruneReviews, setSetting } from '../data/db';

/** Restore persisted settings, then load deck/card data. */
export async function initApp(): Promise<void> {
  void requestPersistentStorage(); // don't block startup on it
  void pruneReviews(); // trim any leftover duplicated review history
  enabledDeckIds.value = await getSetting('enabledDecks', enabledDeckIds.value);
  newPerSession.value = await getSetting('newPerSession', newPerSession.value);
  maxReviews.value = await getSetting('maxReviews', maxReviews.value);
  voiceEcho.value = await getSetting('voiceEcho', voiceEcho.value);
  await syncOnLoad(); // pull + merge cloud progress if signed in
  await loadHomeData();
}

/** After a fresh sign-in: pull cloud progress, restore settings, refresh home. */
export async function afterSignIn(): Promise<void> {
  await syncOnLoad();
  enabledDeckIds.value = await getSetting('enabledDecks', enabledDeckIds.value);
  newPerSession.value = await getSetting('newPerSession', newPerSession.value);
  maxReviews.value = await getSetting('maxReviews', maxReviews.value);
  voiceEcho.value = await getSetting('voiceEcho', voiceEcho.value);
  await loadHomeData();
}

export async function updateSetting(key: 'enabledDecks' | 'newPerSession' | 'maxReviews' | 'voiceEcho', value: unknown): Promise<void> {
  if (key === 'enabledDecks') enabledDeckIds.value = value as string[];
  if (key === 'newPerSession') newPerSession.value = value as number;
  if (key === 'maxReviews') maxReviews.value = value as number;
  if (key === 'voiceEcho') voiceEcho.value = value as boolean;
  await setSetting(key, value);
  if (key === 'enabledDecks') await loadHomeData();
}

const player = new Player();
let runner: SessionRunner | null = null;
let loadedDecks: Deck[] = [];

keepWakeLockAlive();

export async function loadHomeData(): Promise<void> {
  try {
    loadError.value = null;
    const index = await fetchDeckIndex();
    deckIndex.value = index;
    const enabled = index.filter((d) => enabledDeckIds.value.includes(d.id));
    loadedDecks = await Promise.all(enabled.map(fetchDeck));
    const words = wordMap(loadedDecks);
    const cards = await getAllCards();
    const cardIds = new Set(cards.map((c) => c.wordId));
    const now = new Date();
    dueCount.value = cards.filter((c) => words.has(c.wordId) && isDue(c.card, now)).length;
    newAvailable.value = [...words.keys()].filter((id) => !cardIds.has(id)).length;
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : String(e);
  }
}

function deckIdOf(wordId: string): string {
  for (const deck of loadedDecks) {
    if (deck.words.some((w) => w.id === wordId)) return deck.id;
  }
  return 'unknown';
}

async function rate(wordId: string, rating: 'good' | 'again', mode: 'auto' | 'self' | 'skip' | 'timeout', recognized?: string): Promise<void> {
  const row = (await getCard(wordId)) ?? { wordId, deckId: deckIdOf(wordId), card: newCard(), addedAt: Date.now() };
  row.card = rateCard(row.card, rating);
  await putCard(row);
  await logReview({ wordId, rating, mode, recognized, ts: Date.now() });
}

/** Must be called directly from the START tap handler (audio unlock). */
export async function startSession(): Promise<void> {
  player.unlock(); // synchronous, inside the gesture
  if (cloudSttEnabled) primeCloudAudio(); // resume AudioContext inside the gesture

  void acquireWakeLock();
  initReadingAnalyzer(); // load the kanji→reading dictionary in the background
  if (!mockMode) {
    // Open the mic once and keep it hot for the whole session (cloud path);
    // a per-listen mic has a dead startup window on iOS that drops answers.
    if (cloudSttEnabled) await primeMic();
    else await warmupMic();
  }

  const words = wordMap(loadedDecks);
  const cards = await getAllCards();
  const cardIds = new Set(cards.map((c) => c.wordId));
  const now = new Date();

  const due = cards
    .filter((c) => words.has(c.wordId) && isDue(c.card, now))
    .sort((a, b) => new Date(a.card.due).getTime() - new Date(b.card.due).getTime())
    .slice(0, maxReviews.value)
    .map((c) => c.wordId);

  const fresh: string[] = [];
  for (const deck of loadedDecks) {
    for (const w of deck.words) {
      if (fresh.length >= newPerSession.value) break;
      if (!cardIds.has(w.id) && !fresh.includes(w.id)) fresh.push(w.id);
    }
  }

  // No cards are created up front — a word only enters the schedule once its
  // teach step actually plays (via markLearned), so unreached words stay "new".

  const queue = buildQueue(due, fresh);
  const queueWords = queue.map((i) => words.get(i.wordId)).filter((w): w is Word => !!w);
  void prefetchAudio(sessionClipUrls(queueWords), (done, total) => {
    prefetchProgress.value = done >= total ? null : { done, total };
  });

  runner = new SessionRunner({
    play: (items) => player.play(items),
    cancelPlay: () => player.cancel(),
    listen: mockMode ? mockListen : cloudSttEnabled ? cloudListen : listen,
    abortListen: mockMode ? mockAbort : cloudSttEnabled ? cloudAbort : abortListening,
    srAvailable: () => mockMode || (cloudSttEnabled ? cloudSrAvailable() : srAvailable()),
    rate,
    markLearned: async (wordId) => {
      if (!(await getCard(wordId))) {
        await putCard({ wordId, deckId: deckIdOf(wordId), card: newCard(), addedAt: Date.now() });
      }
    },
    setMic: (on) => {
      if (mockMode || !cloudSttEnabled) return;
      if (on) void primeMic();
      else cloudReleaseMic();
    },
    words,
    onChange: (state, word) => {
      sessionState.value = state;
      sessionWord.value = word;
    },
    onEnded: () => {
      void loadHomeData();
      void syncPush(); // back up the session's progress to the cloud
    },
  });

  screen.value = 'session';
  runner.start(queue, voiceEcho.value);
}

/** Wipe study progress locally and, if signed in, on the server too. */
export async function resetProgress(): Promise<void> {
  await clearProgress();
  await syncPush(); // overwrite the remote copy with the now-empty progress
  await loadHomeData();
}

export function tap(cmd: TapCommand): void {
  runner?.tap(cmd);
}

export function endSession(): void {
  runner?.stop();
  runner = null;
  sessionState.value = null;
  sessionWord.value = undefined;
  cloudReleaseMic(); // release the persistent mic
  void releaseWakeLock();
  screen.value = 'home';
  void loadHomeData();
  void syncPush(); // back up whatever was reviewed before ending
}
