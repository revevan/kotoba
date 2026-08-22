/**
 * Content-review page (/review): a reviewer listens to every clip for a word —
 * English prompt, Japanese (+ slow), alternate readings, each example sentence
 * (JA + EN) — and either confirms the card or flags the exact rows that are
 * wrong. Verdicts are stored per word on the kotoba-api worker; items we mark
 * 'fixed' re-enter the queue here for a confirmation pass ('verified').
 *
 * Gated server-side by REVIEWER_EMAILS; shares the app's login token, so a
 * device already signed into /app needs no extra sign-in.
 */

import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { Word } from '../types';
import { attachConjCues, attachSentences, fetchDeck, fetchDeckIndex } from '../data/decks';
import { enClip, enConjClip, jaClip, jaConjClip, jaSlowClip, senClip, senEnClip } from '../audio/clips';
import { ALL_FORMS, FORM_LABELS, conjugate } from '../conj/engine';
import { Player } from '../audio/player';
import { prefetchAudio } from '../audio/prefetch';
import { loadAuth, persistAuth, requestCode, verifyCode, type Auth } from '../sync/client';
import { cloudSyncEnabled } from '../sync/config';
import { fetchReviewState, fetchShorts, submitReview, submitShortVerdict, type ReviewRow, type ReviewSubmission, type ShortRow } from './api';

// ---- Card rows ----------------------------------------------------------

interface RowClip {
  label: string;
  src: string;
}

interface CardRow {
  key: string; // flag anchor, stored in flags.rows
  lines: { text: string; cls: string }[];
  clips: RowClip[];
}

function cardRows(w: Word): CardRow[] {
  const rows: CardRow[] = [
    { key: 'en', lines: [{ text: w.english, cls: 'r-en' }], clips: [{ label: '▶ EN', src: enClip(w.id) }] },
    {
      key: 'ja',
      lines: [
        { text: w.written[0], cls: 'r-jp' },
        { text: `${w.kana} · ${w.romaji}`, cls: 'r-sub' },
      ],
      clips: [
        { label: '▶ JA', src: jaClip(w.id) },
        { label: '▶ slow', src: jaSlowClip(w.id) },
      ],
    },
  ];
  for (const a of w.alts ?? []) {
    rows.push({
      key: `alt:${a.id}`,
      lines: [{ text: `also heard: ${a.kana} · ${a.romaji}`, cls: 'r-sub' }],
      clips: [{ label: '▶', src: jaClip(a.id) }],
    });
  }
  // Conjugation practice content: every generated conjugated-form clip, plus
  // the English meaning cue where one exists (label-prompt forms have none).
  if (w.verbSubclass) {
    for (const form of ALL_FORMS) {
      const c = conjugate({ kana: w.kana, surface: w.written[0] ?? w.kana, subclass: w.verbSubclass }, form);
      const cue = w.conjCues?.[form];
      rows.push({
        key: `conj:${form}`,
        lines: [
          { text: c.surface, cls: 'r-jp' },
          { text: `${c.kana} · ${FORM_LABELS[form]}`, cls: 'r-sub' },
          ...(cue ? [{ text: cue, cls: 'r-sub r-sen-en' }] : []),
        ],
        clips: [
          { label: '▶ JA', src: jaConjClip(w.id, form) },
          ...(cue ? [{ label: '▶ EN', src: enConjClip(w.id, form) }] : []),
        ],
      });
    }
  }
  for (const s of w.sentences ?? []) {
    rows.push({
      key: `sen:${s.id}`,
      lines: [
        { text: s.textJa, cls: 'r-jp r-sen' },
        { text: s.readingKana, cls: 'r-sub' },
        { text: s.textEn, cls: 'r-sub r-sen-en' },
      ],
      clips: [
        { label: '▶ JA', src: senClip(s.id) },
        { label: '▶ EN', src: senEnClip(s.id) },
      ],
    });
  }
  return rows;
}

/** Everything a card can play, in listen order — used for autoplay + prefetch. */
const cardUrls = (w: Word) => cardRows(w).flatMap((r) => r.clips.map((c) => c.src));

const ISSUE_KINDS = [
  ['audio-glitch', 'audio glitch'],
  ['mispronounced', 'mispronounced'],
  ['wrong-translation', 'wrong translation'],
  ['unnatural-japanese', 'unnatural Japanese'],
  ['wrong-reading', 'wrong reading'],
  ['other', 'other'],
] as const;

// ---- Offline-tolerant submit queue --------------------------------------

const OUTBOX_KEY = 'kotoba-review-outbox';
// Dev fallback when no API endpoint is configured: verdicts persist locally so
// the page is fully exercisable without the worker.
const LOCAL_KEY = 'kotoba-review-local';

function readJson<T>(key: string, fallback: T): T {
  try {
    const s = localStorage.getItem(key);
    return s ? (JSON.parse(s) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
}

// ---- Queue entries -------------------------------------------------------

interface Entry {
  word: Word;
  deckId: string;
  deckName: string;
  lesson: string | null;
}

async function loadEntries(): Promise<Entry[]> {
  const index = await fetchDeckIndex(); // file order: n5-starter → n5 → n4 → n3
  const decks = await Promise.all(index.map(fetchDeck));
  await attachSentences(decks);
  await attachConjCues(decks); // graceful: verbs without cue files just get JA rows
  const seen = new Set<string>();
  const entries: Entry[] = [];
  decks.forEach((deck, i) => {
    for (const w of deck.words) {
      if (seen.has(w.id)) continue; // overlapping decks: first (earliest) deck reviews it
      seen.add(w.id);
      const genki = w.tags.find((t) => t.startsWith('Genki_Ln.'));
      entries.push({ word: w, deckId: deck.id, deckName: index[i].name, lesson: genki ? `Genki L.${genki.slice(9)}` : null });
    }
  });
  return entries;
}

// ---- App -----------------------------------------------------------------

type Phase = 'boot' | 'login' | 'forbidden' | 'error' | 'ready';

export function ReviewApp() {
  const [phase, setPhase] = useState<Phase>('boot');
  const [error, setError] = useState('');
  const [auth, setAuth] = useState<Auth | null>(loadAuth());
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [reviews, setReviews] = useState<Map<string, ReviewRow>>(new Map());
  const [outbox, setOutbox] = useState<ReviewSubmission[]>(() => readJson(OUTBOX_KEY, []));
  const [shorts, setShorts] = useState<ShortRow[]>([]);
  const [shortsError, setShortsError] = useState('');
  const [mode, setMode] = useState<'words' | 'shorts'>('words');

  const boot = async (a: Auth | null) => {
    try {
      const [loaded, rows, clips] = await Promise.all([
        entries ? Promise.resolve(entries) : loadEntries(),
        cloudSyncEnabled ? (a ? fetchReviewState(a.token) : Promise.resolve(null)) : Promise.resolve(readJson<ReviewRow[]>(LOCAL_KEY, [])),
        // A failure here must not hide the queue silently — it's reported on the start screen.
        cloudSyncEnabled && a
          ? fetchShorts(a.token).catch((e: unknown) => {
              setShortsError(e instanceof Error ? e.message : String(e));
              return [] as ShortRow[];
            })
          : Promise.resolve([] as ShortRow[]),
      ]);
      setEntries(loaded);
      if (rows === null) {
        setPhase('login');
        return;
      }
      setReviews(new Map(rows.map((r) => [r.wordId, r])));
      setShorts(clips);
      setPhase('ready');
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg === 'unauthorized') {
        persistAuth(null);
        setAuth(null);
        setPhase('login');
      } else if (msg === 'forbidden') {
        setPhase('forbidden');
      } else {
        setError(msg);
        setPhase('error');
      }
    }
  };

  useEffect(() => {
    void boot(auth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Flush pending submissions: in order, stop at the first failure.
  const flushOutbox = async (pending: ReviewSubmission[], a: Auth | null) => {
    if (!cloudSyncEnabled || !a) return;
    let rest = [...pending];
    while (rest.length > 0) {
      try {
        await submitReview(a.token, rest[0]);
      } catch (e) {
        if (e instanceof Error && (e.message === 'unauthorized' || e.message === 'forbidden')) {
          persistAuth(null);
          setAuth(null);
          setPhase(e.message === 'forbidden' ? 'forbidden' : 'login');
        }
        break;
      }
      rest = rest.slice(1);
      setOutbox(rest);
      writeJson(OUTBOX_KEY, rest);
    }
  };

  useEffect(() => {
    const online = () => void flushOutbox(readJson(OUTBOX_KEY, []), auth);
    window.addEventListener('online', online);
    return () => window.removeEventListener('online', online);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const submit = (sub: ReviewSubmission) => {
    const existing = reviews.get(sub.wordId);
    // Mirror the worker's status transition so the queue updates offline.
    const status = sub.verdict === 'good' ? (existing?.status === 'fixed' ? 'verified' : 'ok') : 'open';
    const next = new Map(reviews);
    next.set(sub.wordId, {
      wordId: sub.wordId,
      deck: sub.deck,
      verdict: sub.verdict,
      flags: sub.flags ?? null,
      note: sub.note ?? null,
      status,
      fixNote: existing?.fixNote ?? null,
      updatedAt: Date.now(),
    });
    setReviews(next);
    if (cloudSyncEnabled) {
      const pending = [...readJson<ReviewSubmission[]>(OUTBOX_KEY, []), sub];
      setOutbox(pending);
      writeJson(OUTBOX_KEY, pending);
      void flushOutbox(pending, auth);
    } else {
      writeJson(LOCAL_KEY, [...next.values()]);
    }
  };

  if (phase === 'boot') return <Center msg="Loading decks…" />;
  if (phase === 'error') return <Center msg={`Something broke: ${error}`} retry={() => { setPhase('boot'); void boot(auth); }} />;
  if (phase === 'forbidden') {
    return <Center msg={`This page is for content reviewers. ${auth?.email ?? 'Your account'} isn't on the list — ask Evan to add it.`} />;
  }
  if (phase === 'login') {
    return (
      <Login
        onDone={(a) => {
          persistAuth(a);
          setAuth(a);
          setPhase('boot');
          void boot(a);
        }}
      />
    );
  }
  const judgeShort = async (id: string, verdict: 'approve' | 'reject', note?: string) => {
    const status = verdict === 'approve' ? 'approved' : 'rejected';
    setShorts((list) => list.map((sh) => (sh.id === id ? { ...sh, status, note: note ?? null, reviewedAt: Date.now() } : sh)));
    if (!auth) return;
    try {
      const result = await submitShortVerdict(auth.token, id, verdict, note);
      if (result === 'not-pending') {
        // Triage already moved this row (rerender/dropped); it's no longer ours to judge.
        setShorts((list) => list.filter((sh) => sh.id !== id));
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg === 'unauthorized' || msg === 'forbidden') {
        // Same routing as word reviews: expired session → login, delisted → forbidden.
        persistAuth(null);
        setAuth(null);
        setPhase(msg === 'forbidden' ? 'forbidden' : 'login');
        return;
      }
      // Transient failure: put it back so it isn't silently lost, and say so.
      setShorts((list) => list.map((sh) => (sh.id === id ? { ...sh, status: 'pending' } : sh)));
      setShortsError(`Couldn't save that verdict (${msg}) — try again.`);
    }
  };

  if (mode === 'shorts') {
    return <ShortsScreen shorts={shorts} error={shortsError} judge={judgeShort} onExit={() => setMode('words')} />;
  }
  return (
    <ReviewScreen
      entries={entries!}
      reviews={reviews}
      submit={submit}
      unsaved={outbox.length}
      email={auth?.email ?? null}
      pendingShorts={shorts.filter((sh) => sh.status === 'pending').length}
      shortsError={shortsError}
      onShorts={() => setMode('shorts')}
    />
  );
}

// ---- Shorts review --------------------------------------------------------
// One rendered video at a time: watch it, then OK (→ YouTube upload queue) or
// "needs a fix" with a note (→ Evan's evening triage; the corpus fix re-renders
// it automatically). Nothing here touches the word-review queue.

interface ShortsProps {
  shorts: ShortRow[];
  error: string;
  judge: (id: string, verdict: 'approve' | 'reject', note?: string) => void;
  onExit: () => void;
}

function ShortsScreen({ shorts, error, judge, onExit }: ShortsProps) {
  const pending = shorts.filter((sh) => sh.status === 'pending');
  const current = pending[0] ?? null;
  const [note, setNote] = useState('');
  const [rejecting, setRejecting] = useState(false);
  const done = shorts.filter((sh) => sh.status !== 'pending').length;

  useEffect(() => {
    setNote('');
    setRejecting(false);
  }, [current?.id]);

  if (!current) {
    return (
      <div class="rv-center">
        <div class="brand-kanji">言葉</div>
        <h1>ショート動画、全部チェック済み 🎬</h1>
        <p>No videos are waiting. {done > 0 && `You've reviewed ${done} recently.`}</p>
        {error && <p class="rv-err">{error}</p>}
        <button class="primary big" onClick={onExit}>← Back to words</button>
      </div>
    );
  }

  return (
    <div class="rv-screen">
      <header class="rv-head">
        <div class="rv-head-left">
          <span class="brand-kanji rv-brand">言葉</span>
          <span class="rv-deck">Shorts · {current.format}{current.level ? ` · JLPT ${current.level}` : ''}</span>
        </div>
        <div class="rv-head-right">
          <span class="rv-count">{pending.length} to go</span>
        </div>
      </header>
      <div class="rv-card rv-short">
        {error && <p class="rv-err">{error}</p>}
        <video key={current.id} class="rv-video" src={current.videoUrl} poster={current.posterUrl ?? undefined} controls playsInline preload="metadata" />
        <div class="rv-short-meta">
          <div class="r-en">{current.title}</div>
          <div class="r-sub rv-faint">{current.wordId} / {current.sentenceId}</div>
        </div>
        {rejecting && (
          <textarea
            class="rv-note"
            placeholder="何が変？ — what's wrong (audio, text, the sentence itself…)"
            value={note}
            onInput={(e) => setNote((e.target as HTMLTextAreaElement).value)}
            autoFocus
          />
        )}
        <div class="rv-actions">
          {!rejecting ? (
            <>
              <button class="ghost" onClick={() => setRejecting(true)}>直して (needs a fix)</button>
              <button class="primary" onClick={() => judge(current.id, 'approve')}>OK — upload it</button>
            </>
          ) : (
            <>
              <button class="ghost" onClick={() => setRejecting(false)}>Cancel</button>
              <button class="primary flagging" disabled={!note.trim()} onClick={() => judge(current.id, 'reject', note.trim())}>
                Send fix note
              </button>
            </>
          )}
        </div>
      </div>
      <footer class="rv-foot">
        <span class="rv-faint">{done} reviewed recently</span>
        <button class="ghost" onClick={onExit}>← Words</button>
      </footer>
    </div>
  );
}

function Center({ msg, retry }: { msg: string; retry?: () => void }) {
  return (
    <div class="rv-center">
      <div class="brand-kanji">言葉</div>
      <p>{msg}</p>
      {retry && <button onClick={retry}>Retry</button>}
    </div>
  );
}

// ---- Login (same passwordless flow as the app) ---------------------------

function Login({ onDone }: { onDone: (a: Auth) => void }) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [stage, setStage] = useState<'email' | 'code'>('email');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const send = async () => {
    setBusy(true);
    setErr('');
    try {
      await requestCode(email.trim());
      setStage('code');
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    }
    setBusy(false);
  };
  const verify = async () => {
    setBusy(true);
    setErr('');
    try {
      onDone(await verifyCode(email.trim(), code.trim()));
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
      setBusy(false);
    }
  };

  return (
    <div class="rv-center">
      <div class="brand-kanji">言葉</div>
      <h1>Kotoba review</h1>
      {stage === 'email' ? (
        <>
          <p class="rv-dim">Sign in with your Kotoba account email.</p>
          <input type="email" placeholder="you@example.com" value={email} onInput={(e) => setEmail((e.target as HTMLInputElement).value)} />
          <button class="primary" disabled={busy || !email.includes('@')} onClick={() => void send()}>
            {busy ? 'Sending…' : 'Email me a code'}
          </button>
        </>
      ) : (
        <>
          <p class="rv-dim">Enter the 6-digit code sent to {email}.</p>
          <input inputMode="numeric" placeholder="123456" value={code} onInput={(e) => setCode((e.target as HTMLInputElement).value)} />
          <button class="primary" disabled={busy || code.trim().length !== 6} onClick={() => void verify()}>
            {busy ? 'Checking…' : 'Sign in'}
          </button>
        </>
      )}
      {err && <p class="rv-err">{err}</p>}
    </div>
  );
}

// ---- Review screen --------------------------------------------------------

interface ScreenProps {
  entries: Entry[];
  reviews: Map<string, ReviewRow>;
  submit: (sub: ReviewSubmission) => void;
  unsaved: number;
  email: string | null;
  pendingShorts: number;
  shortsError: string;
  onShorts: () => void;
}

function ReviewScreen({ entries, reviews, submit, unsaved, email, pendingShorts, shortsError, onShorts }: ScreenProps) {
  const [started, setStarted] = useState(false);
  const [autoplay, setAutoplay] = useState(() => readJson('kotoba-review-autoplay', true));
  const [history, setHistory] = useState<string[]>([]);
  const [overrideId, setOverrideId] = useState<string | null>(null);
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const playerRef = useRef<Player | null>(null);
  if (!playerRef.current) playerRef.current = new Player();

  const byId = useMemo(() => new Map(entries.map((e) => [e.word.id, e])), [entries]);

  const recheck = entries.filter((e) => reviews.get(e.word.id)?.status === 'fixed');
  const todo = entries.filter((e) => !reviews.has(e.word.id));
  const queue = [...recheck, ...todo];
  const current: Entry | null = overrideId ? (byId.get(overrideId) ?? null) : (queue.find((e) => !skipped.has(e.word.id)) ?? queue[0] ?? null);

  const reviewedCount = entries.length - todo.length;
  const dayStart = new Date().setHours(0, 0, 0, 0);
  const today = [...reviews.values()].filter((r) => r.updatedAt >= dayStart).length;

  // Warm the next few cards' clips while the current one plays.
  useEffect(() => {
    if (!started || !current) return;
    const at = queue.findIndex((e) => e.word.id === current.word.id);
    const next = queue.slice(Math.max(at, 0) + 1, Math.max(at, 0) + 4);
    void prefetchAudio(next.flatMap((e) => cardUrls(e.word)));
  }, [started, current?.word.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const advance = (sub: ReviewSubmission) => {
    submit(sub);
    setHistory((h) => [...h.slice(-49), sub.wordId]);
    setOverrideId(null);
  };
  const skip = () => {
    if (!current) return;
    setSkipped((s) => new Set(s).add(current.word.id));
    setOverrideId(null);
  };
  const back = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory((h) => h.slice(0, -1));
    setOverrideId(prev);
  };

  if (!started) {
    return (
      <div class="rv-center">
        <div class="brand-kanji">言葉</div>
        <h1>Kotoba review</h1>
        <p>
          <strong>{reviewedCount.toLocaleString()}</strong> of <strong>{entries.length.toLocaleString()}</strong> words reviewed
          {recheck.length > 0 && (
            <>
              {' · '}
              <strong>{recheck.length}</strong> fixed and waiting for your re-check
            </>
          )}
        </p>
        {today > 0 && <p class="rv-dim">{today} today — nice.</p>}
        <button
          class="primary big"
          onClick={() => {
            playerRef.current!.unlock(); // inside the tap: unlocks iOS autoplay
            setStarted(true);
          }}
        >
          {queue.length === 0 ? 'All caught up — browse anyway' : 'Start reviewing'}
        </button>
        {pendingShorts > 0 && (
          <button class="ghost" onClick={onShorts}>
            🎬 {pendingShorts} short video{pendingShorts === 1 ? '' : 's'} waiting for your OK
          </button>
        )}
        {shortsError && <p class="rv-err">Shorts queue didn't load: {shortsError} — reload to retry.</p>}
        {email && <p class="rv-faint">signed in as {email}</p>}
        {!cloudSyncEnabled && <p class="rv-err">Local mode — no API endpoint configured; verdicts stay on this device.</p>}
      </div>
    );
  }

  if (!current) {
    return (
      <div class="rv-center">
        <div class="brand-kanji">言葉</div>
        <h1>全部終わりました 🎉</h1>
        <p>
          All {entries.length.toLocaleString()} words reviewed and nothing is waiting on a re-check. Thank you — お疲れさまでした!
        </p>
        {history.length > 0 && <button onClick={back}>← Back to the last card</button>}
      </div>
    );
  }

  const row = reviews.get(current.word.id);
  const position = Math.min(reviewedCount + 1, entries.length);

  return (
    <div class="rv-screen">
      <header class="rv-head">
        <div class="rv-head-left">
          <span class="brand-kanji rv-brand">言葉</span>
          <span class="rv-deck">
            {current.deckName}
            {current.lesson ? ` · ${current.lesson}` : ''}
          </span>
        </div>
        <div class="rv-head-right">
          {unsaved > 0 && <span class="rv-unsaved">{unsaved} unsaved</span>}
          <span class="rv-count">
            {position.toLocaleString()} / {entries.length.toLocaleString()}
          </span>
        </div>
      </header>
      <div class="rv-bar">
        <div class="rv-bar-fill" style={{ width: `${(reviewedCount / entries.length) * 100}%` }} />
      </div>

      <Card
        key={current.word.id}
        entry={current}
        existing={row ?? null}
        recheck={row?.status === 'fixed'}
        prefill={overrideId !== null}
        player={playerRef.current!}
        autoplay={autoplay}
        onToggleAutoplay={() => {
          setAutoplay((v: boolean) => {
            writeJson('kotoba-review-autoplay', !v);
            return !v;
          });
        }}
        onSubmit={advance}
        onSkip={skip}
        onBack={history.length > 0 ? back : null}
      />

      <footer class="rv-foot">
        <span class="rv-faint">{today} reviewed today</span>
        <span class="rv-faint">Enter next · Space replay · ← back</span>
      </footer>
    </div>
  );
}

// ---- Card -----------------------------------------------------------------

interface CardProps {
  entry: Entry;
  existing: ReviewRow | null;
  recheck: boolean;
  prefill: boolean;
  player: Player;
  autoplay: boolean;
  onToggleAutoplay: () => void;
  onSubmit: (sub: ReviewSubmission) => void;
  onSkip: () => void;
  onBack: (() => void) | null;
}

function Card({ entry, existing, recheck, prefill, player, autoplay, onToggleAutoplay, onSubmit, onSkip, onBack }: CardProps) {
  const w = entry.word;
  const rows = useMemo(() => cardRows(w), [w]);
  // Re-visiting an already-graded card (Back) starts from what was submitted;
  // a re-check starts clean so confirming the fix is one press.
  const [flagged, setFlagged] = useState<Set<string>>(() => new Set(prefill && !recheck ? (existing?.flags?.rows ?? []) : []));
  const [kinds, setKinds] = useState<Set<string>>(() => new Set(prefill && !recheck ? (existing?.flags?.kinds ?? []) : []));
  const [note, setNote] = useState(prefill && !recheck ? (existing?.note ?? '') : '');
  const [playing, setPlaying] = useState<string | null>(null);

  const dirty = flagged.size > 0 || kinds.size > 0 || note.trim().length > 0;

  const playCard = async () => {
    player.cancel();
    for (const r of rows) {
      setPlaying(r.key);
      const clips = r.clips.map((c, i) => ({ src: c.src, gapMs: i < r.clips.length - 1 ? 350 : 400 }));
      if ((await player.play(clips)) === 'cancelled') return;
    }
    setPlaying(null);
  };

  const playOne = async (key: string, src: string) => {
    player.cancel();
    setPlaying(key);
    await player.play([{ src }]);
    setPlaying((p) => (p === key ? null : p));
  };

  useEffect(() => {
    if (autoplay) void playCard();
    return () => player.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w.id]);

  const submit = () => {
    player.cancel();
    onSubmit({
      wordId: w.id,
      deck: entry.deckId,
      verdict: dirty ? 'flagged' : 'good',
      ...(dirty ? { flags: { rows: [...flagged], kinds: [...kinds] } } : {}),
      ...(note.trim() ? { note: note.trim() } : {}),
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT') {
        if (e.key === 'Escape') t.blur();
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        submit();
      } else if (e.key === ' ') {
        e.preventDefault();
        void playCard();
      } else if (e.key === 'ArrowLeft' && onBack) {
        e.preventDefault();
        onBack();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flagged, kinds, note, onBack]);

  const toggleRow = (key: string) => {
    setFlagged((s) => {
      const n = new Set(s);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });
  };

  return (
    <main class="rv-card">
      {recheck && (
        <div class="rv-recheck">
          <strong>Re-check</strong> — you flagged this{existing?.note ? `: “${existing.note}”` : '.'}
          {existing?.fixNote && (
            <div class="rv-fixnote">What changed: {existing.fixNote}</div>
          )}
          <div class="rv-faint">Listen again — if it's right now, hit “Looks good”.</div>
        </div>
      )}

      {rows.map((r) => (
        <div class={`rv-row${playing === r.key ? ' playing' : ''}${flagged.has(r.key) ? ' flagged' : ''}${r.key.startsWith('sen:') ? ' rv-sen' : ''}`} key={r.key}>
          <div class="rv-row-text">
            {r.lines.map((l) => (
              <div class={l.cls} key={l.text}>
                {l.text}
              </div>
            ))}
          </div>
          <div class="rv-row-btns">
            {r.clips.map((c) => (
              <button class="ghost rv-play" key={c.src} onClick={() => void playOne(r.key, c.src)}>
                {c.label}
              </button>
            ))}
            <button class={`ghost rv-flag${flagged.has(r.key) ? ' on' : ''}`} title="Flag this row" onClick={() => toggleRow(r.key)}>
              ⚑
            </button>
          </div>
        </div>
      ))}

      {(flagged.size > 0 || dirty) && (
        <div class="rv-kinds">
          {ISSUE_KINDS.map(([id, label]) => (
            <button
              key={id}
              class={`chip${kinds.has(id) ? ' on' : ''}`}
              onClick={() =>
                setKinds((s) => {
                  const n = new Set(s);
                  n.has(id) ? n.delete(id) : n.add(id);
                  return n;
                })
              }
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <textarea
        class="rv-note"
        placeholder="Anything wrong or worth fixing? 日本語でもOK — leave empty if it's all good."
        value={note}
        onInput={(e) => setNote((e.target as HTMLTextAreaElement).value)}
      />

      <div class="rv-actions">
        {onBack && (
          <button class="ghost" onClick={onBack}>
            ← Back
          </button>
        )}
        <button class="ghost" onClick={onSkip}>
          Skip for now
        </button>
        <button class={`primary big${dirty ? ' flagging' : ''}`} onClick={submit}>
          {dirty ? '⚑ Flag it — next' : recheck ? '✓ Fixed — looks good' : '✓ Looks good — next'}
        </button>
      </div>
      <div class="rv-tools">
        <button class="ghost rv-replay" onClick={() => void playCard()}>
          ↻ Replay all
        </button>
        <label class="rv-auto">
          <input type="checkbox" checked={autoplay} onChange={onToggleAutoplay} /> autoplay
        </label>
      </div>
    </main>
  );
}
