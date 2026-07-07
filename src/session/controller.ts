// Wires the UI to a live session: loads decks/cards, builds the queue,
// constructs the runner with real (or mock) audio + speech deps.

import { Player } from '../audio/player';
import { sessionClipUrls, setPhraseLocale } from '../audio/clips';
import { prefetchAudio } from '../audio/prefetch';
import { getAllCards, getCard, logReview, putCard } from '../data/db';
import { attachSentences, fetchDeck, fetchDeckIndex, wordMap } from '../data/decks';
import { isDue, newCard, rateCard } from '../srs/scheduler';
import { abortListening, listen, srAvailable } from '../speech/recognizer';
import { cloudAbort, cloudListen, cloudReleaseMic, cloudSrAvailable, cloudWaitForEcho, primeCloudAudio, primeMic } from '../speech/cloudRecognizer';
import { cloudSttEnabled } from '../speech/sttConfig';
import { mockAbort, mockListen, mockMode } from '../speech/mock';
import { gradeBuild } from '../speech/grader';
import { forcedRung, labsEnabled } from '../labs';
import { acquireWakeLock, keepWakeLockAlive, releaseWakeLock } from '../platform/wakeLock';
import { warmupMic } from '../platform/unlock';
import { requestPersistentStorage } from '../platform/storage';
import { initReadingAnalyzer } from '../matching/reading';
import { syncOnLoad, syncPush } from '../sync/sync';
import type { Deck, Word } from '../types';
import { buildQueue, type Decorate } from './queueBuilder';
import { chooseExerciseType, pickClozeSentence, pickSentence } from './selectExercise';
import { SessionRunner } from './runner';
import type { TapCommand } from './machine';
import {
  announcerJa,
  buildNote,
  clozeEnglishFirst,
  deckProgress,
  auth,
  clozeMinIntervalDays,
  deckIndex,
  dueCount,
  enableCloze,
  enabledDeckIds,
  loadError,
  maxReviews,
  newAvailable,
  newPerDay,
  prefetchProgress,
  screen,
  sessionState,
  sessionWord,
  voiceEcho,
} from '../state';
import { clearProgress, getSetting, pruneReviews, setSetting } from '../data/db';

/** `?cloze=1` debug override: force the cloze exercise regardless of card maturity. */
const forceClozeMode = typeof location !== 'undefined' && new URLSearchParams(location.search).has('cloze');

async function restoreSettings(): Promise<void> {
  enabledDeckIds.value = await getSetting('enabledDecks', enabledDeckIds.value);
  // 'newPerDay' replaced the old 'newPerSession' key; fall back for older saves.
  newPerDay.value = await getSetting('newPerDay', await getSetting('newPerSession', newPerDay.value));
  maxReviews.value = await getSetting('maxReviews', maxReviews.value);
  voiceEcho.value = await getSetting('voiceEcho', voiceEcho.value);
  announcerJa.value = await getSetting('announcerJa', announcerJa.value);
  enableCloze.value = await getSetting('enableCloze', enableCloze.value);
  clozeMinIntervalDays.value = await getSetting('clozeMinIntervalDays', clozeMinIntervalDays.value);
  clozeEnglishFirst.value = await getSetting('clozeEnglishFirst', clozeEnglishFirst.value);
  setPhraseLocale(announcerJa.value ? 'ja' : 'en');
}

/** Restore persisted settings, then load deck/card data. */
export async function initApp(): Promise<void> {
  void requestPersistentStorage(); // don't block startup on it
  void pruneReviews(); // trim any leftover duplicated review history
  await restoreSettings();
  await syncOnLoad(); // pull + merge cloud progress if signed in
  await loadHomeData();
}

/** After a fresh sign-in: pull cloud progress, restore settings, refresh home. */
export async function afterSignIn(): Promise<void> {
  await syncOnLoad();
  await restoreSettings();
  await loadHomeData();
}

export async function updateSetting(
  key: 'enabledDecks' | 'newPerDay' | 'maxReviews' | 'voiceEcho' | 'announcerJa' | 'enableCloze' | 'clozeMinIntervalDays' | 'clozeEnglishFirst',
  value: unknown,
): Promise<void> {
  if (key === 'enabledDecks') enabledDeckIds.value = value as string[];
  if (key === 'newPerDay') newPerDay.value = value as number;
  if (key === 'maxReviews') maxReviews.value = value as number;
  if (key === 'voiceEcho') voiceEcho.value = value as boolean;
  if (key === 'announcerJa') {
    announcerJa.value = value as boolean;
    setPhraseLocale(announcerJa.value ? 'ja' : 'en');
  }
  if (key === 'enableCloze') enableCloze.value = value as boolean;
  if (key === 'clozeMinIntervalDays') clozeMinIntervalDays.value = value as number;
  if (key === 'clozeEnglishFirst') clozeEnglishFirst.value = value as boolean;
  await setSetting(key, value);
  if (key === 'enabledDecks' || key === 'newPerDay') await loadHomeData();
}

// If the OS pauses playback (phone call, Siri), pause the session too — the
// machine ignores the command in phases where pausing makes no sense.
const player = new Player(() => runner?.tap('pause'));
let runner: SessionRunner | null = null;
let loadedDecks: Deck[] = [];

keepWakeLockAlive();

function startOfTodayMs(now = new Date()): number {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/** How many more new words may be introduced today. The daily budget
 * (newPerDay) is a per-calendar-day total that can be completed across several
 * sessions: if you only got through 4 of 10, a later session offers the other
 * 6. Once all newPerDay are done, this is 0 and further sessions are
 * review-only — so you can't pile on extra new cards beyond the daily cap. */
function newQuotaToday(cards: { addedAt: number }[], now = new Date()): number {
  const learnedToday = cards.filter((c) => c.addedAt >= startOfTodayMs(now)).length;
  return Math.max(0, newPerDay.value - learnedToday);
}

/** Decks available without an account — the full JLPT decks need sign-up. */
export const GUEST_DECK_IDS = ['n5-starter'];

export async function loadHomeData(): Promise<void> {
  try {
    loadError.value = null;
    const index = await fetchDeckIndex();
    deckIndex.value = index;
    // Guests are limited to the starter deck regardless of stored settings.
    if (!auth.value) {
      const clamped = enabledDeckIds.value.filter((id) => GUEST_DECK_IDS.includes(id));
      enabledDeckIds.value = clamped.length > 0 ? clamped : [...GUEST_DECK_IDS];
    }
    const enabled = index.filter((d) => enabledDeckIds.value.includes(d.id));
    // All decks (SW-cached) so per-deck progress covers disabled decks too.
    const allDecks = await Promise.all(index.map(fetchDeck));
    loadedDecks = allDecks.filter((d) => enabled.some((e) => e.id === d.id));
    await attachSentences(loadedDecks); // graceful: words without sentences stay plain
    const words = wordMap(loadedDecks);
    const cards = await getAllCards();
    const cardIds = new Set(cards.map((c) => c.wordId));
    const now = new Date();
    // Per-deck progress: a word counts as studied once it has a card. Words
    // shared between decks (starter ⊂ N5) count toward each deck they're in.
    const progress: Record<string, number> = {};
    for (const d of allDecks) progress[d.id] = d.words.filter((w) => cardIds.has(w.id)).length;
    deckProgress.value = progress;
    dueCount.value = cards.filter((c) => words.has(c.wordId) && isDue(c.card, now)).length;
    const newInDeck = [...words.keys()].filter((id) => !cardIds.has(id)).length;
    // What's actually startable today: deck-available new words, capped by the daily quota.
    newAvailable.value = Math.min(newInDeck, newQuotaToday(cards, now));
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
  const state = row.card.state; // capture pre-rating state for the review log
  row.card = rateCard(row.card, rating);
  await putCard(row);
  await logReview({ wordId, rating, mode, state, recognized, ts: Date.now() });
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

  // Daily cap: only introduce up to (newPerDay − already studied today) words,
  // so multiple sessions in one day can't blow past the limit.
  const quota = newQuotaToday(cards, now);
  const fresh: string[] = [];
  for (const deck of loadedDecks) {
    for (const w of deck.words) {
      if (fresh.length >= quota) break;
      if (!cardIds.has(w.id) && !fresh.includes(w.id)) fresh.push(w.id);
    }
    if (fresh.length >= quota) break;
  }

  // No cards are created up front — a word only enters the schedule once its
  // teach step actually plays (via markLearned), so unreached words stay "new".

  // Card-aware slot decoration: mature reviews become cloze, and every slot that
  // plays a word gets a rotating example sentence (rotation keyed off card.reps).
  const cardById = new Map(cards.map((c) => [c.wordId, c.card]));
  const clozeCfg = {
    enableCloze: enableCloze.value,
    minIntervalDays: clozeMinIntervalDays.value,
    forceMature: forceClozeMode,
    // Pre-release rungs 3–4, gated behind ?labs=1.
    ...(labsEnabled ? { labs: { shadowMinIntervalDays: 14, buildMinIntervalDays: 30, force: forcedRung } } : {}),
  };
  const decorate: Decorate = (wordId, role) => {
    const word = words.get(wordId);
    const card = cardById.get(wordId);
    // A teach slot is the teaching step itself; only quiz slots (a real review
    // or a just-taught word's in-session re-quiz) upgrade to a higher rung.
    if (word && role !== 'teach') {
      const type = chooseExerciseType(card, word, clozeCfg);
      if (type === 'build') {
        // Model answer for the reveal, when the word has one.
        const sentence = pickSentence(word, card?.reps ?? 0);
        return { mode: 'build', ...(sentence ? { sentenceId: sentence.id } : {}) };
      }
      if (type === 'shadow') {
        const sentence = pickSentence(word, card?.reps ?? 0);
        if (sentence) return { mode: 'shadow', sentenceId: sentence.id };
      }
      if (type === 'cloze') {
        const sentence = pickClozeSentence(word, card?.reps ?? 0);
        if (sentence) return { mode: 'cloze', sentenceId: sentence.id };
      }
    }
    if (!word?.sentences?.length) return {};
    const sentence = pickSentence(word, card?.reps ?? 0);
    return sentence ? { sentenceId: sentence.id } : {};
  };

  const queue = buildQueue(due, fresh, 4, decorate);
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
    // Cloud path only: pace the teach echo locally instead of paying Deepgram to
    // transcribe a "repeat after me" we never grade.
    waitForEcho: !mockMode && cloudSttEnabled ? cloudWaitForEcho : undefined,
    // Rung 4 grader (labs): mock mode approves anything that reached grading.
    // The wrapper mirrors the note into state for on-screen feedback.
    gradeBuild: !labsEnabled
      ? undefined
      : async (word, transcript) => {
          const v = mockMode
            ? { verdict: 'good' as const, note: 'mock grader' }
            : cloudSttEnabled
              ? await gradeBuild(word, transcript)
              : { verdict: 'again' as const };
          buildNote.value = v.note ?? null;
          return v;
        },
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
    clozeEnglishFirst: clozeEnglishFirst.value,
    onChange: (state, word) => {
      sessionState.value = state;
      sessionWord.value = word;
      // Grader feedback belongs to one attempt: clear it when a new prompt
      // starts (reveal/correct keep it visible).
      if (state.phase.endsWith('-playing') && state.phase !== 'reveal-playing' && state.phase !== 'correct-playing') {
        buildNote.value = null;
      }
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
