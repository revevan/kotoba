/**
 * Kotoba API — passwordless email login + progress sync (Cloudflare Worker + D1).
 *
 * Endpoints (JSON, CORS-restricted to ALLOWED_ORIGIN):
 *   POST /auth/request  { email }                  -> { ok: true }  (always; emails a 6-digit code)
 *   POST /auth/verify   { email, code }            -> { token, email }
 *   POST /auth/logout   (Bearer)                   -> { ok: true }
 *   GET  /sync          (Bearer)                   -> { data, updatedAt }
 *   PUT  /sync          (Bearer) { data, updatedAt } -> { ok, updatedAt }
 *   POST /feedback      { type, message, contact? } -> { ok: true }
 *   GET  /admin/feedback   (Bearer ADMIN_SECRET)  -> [ …submissions ]
 *   POST /admin/feedback/:id/resolve (Bearer)      -> { resolved }
 *   GET  /review/state  (Bearer, reviewer)         -> { reviews: [ …rows ] }
 *   POST /review        (Bearer, reviewer) { wordId, deck, verdict, flags?, note? } -> { ok, status }
 *   GET  /admin/reviews?status=open|fixed|all (Bearer ADMIN_SECRET) -> [ …rows ]
 *   POST /admin/reviews/:wordId/status (Bearer) { status, fixNote? } -> { ok, status }
 *   GET  /stats         (Bearer, ADMIN_EMAILS)  -> { totalUsers, activeToday, …, users, days }
 *
 * Secrets / vars (wrangler):
 *   ADMIN_SECRET   (secret, gates /admin/*)
 *   RESEND_API_KEY (secret, required to send mail)
 *   MAIL_FROM      (var, e.g. "Kotoba <login@yourdomain>")
 *   ALLOWED_ORIGIN (var, the app origin, e.g. https://revevan.github.io)
 *   APP_NAME       (var, e.g. "Kotoba")
 *   REVIEWER_EMAILS (var, comma-separated — accounts allowed on /review/*)
 *   ADMIN_EMAILS   (var, comma-separated — accounts allowed on GET /stats)
 *   DB             (D1 binding)
 */

const CODE_TTL_MS = 10 * 60 * 1000; // login code lifetime
const TOKEN_TTL_MS = 90 * 24 * 60 * 60 * 1000; // session lifetime
const RESEND_COOLDOWN_MS = 45 * 1000; // min gap between codes per email
const MAX_CODE_ATTEMPTS = 5;
const MAX_BLOB_BYTES = 2_000_000;

export default {
  async fetch(request, env) {
    // ALLOWED_ORIGIN is a comma-separated allowlist; echo the request's origin
    // if it's on it (supports the custom domain + the old GitHub Pages URL).
    const allowed = (env.ALLOWED_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
    const reqOrigin = request.headers.get('Origin') || '';
    const origin = allowed.includes(reqOrigin) ? reqOrigin : allowed[0] || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    };
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (!env.DB) return json({ error: 'db-not-configured' }, 500, cors);

    const { pathname } = new URL(request.url);
    const route = `${request.method} ${pathname}`;
    // Server-side guards for the unauthenticated public routes: CORS headers
    // only constrain browsers, so require an allowlisted Origin and per-IP
    // rate limits before doing work that costs money (Resend) or storage.
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if ((pathname.startsWith('/auth/') || pathname === '/feedback') && request.method === 'POST') {
      if (allowed.length > 0 && !allowed.includes(reqOrigin)) {
        return json({ error: 'forbidden' }, 403, cors);
      }
      // Fast per-machine check first (ratelimit binding), then the exact
      // global window in D1.
      const limiter = pathname === '/feedback' ? env.RATE_FEEDBACK : env.RATE_AUTH;
      if (limiter && !(await limiter.limit({ key: ip })).success) {
        return json({ error: 'rate-limited' }, 429, cors);
      }
      const kind = pathname === '/feedback' ? 'fb' : 'auth';
      const okMin = await rateLimit(env.DB, `${kind}:m:${ip}`, kind === 'fb' ? 5 : 6, 60_000);
      const okHour = okMin && (await rateLimit(env.DB, `${kind}:h:${ip}`, 20, 3_600_000));
      if (!okMin || !okHour) return json({ error: 'rate-limited' }, 429, cors);
    }
    try {
      switch (route) {
        case 'POST /auth/request':
          return await authRequest(request, env, cors);
        case 'POST /auth/verify':
          return await authVerify(request, env, cors);
        case 'POST /auth/logout':
          return await authLogout(request, env, cors);
        case 'GET /sync':
          return await syncGet(request, env, cors);
        case 'PUT /sync':
          return await syncPut(request, env, cors);
        case 'POST /feedback':
          return await feedbackPost(request, env, cors);
        case 'GET /admin/feedback':
          return await feedbackList(request, env, cors);
        case 'GET /review/state':
          return await reviewState(request, env, cors);
        case 'POST /review':
          return await reviewPost(request, env, cors);
        case 'GET /admin/reviews':
          return await adminReviewList(request, env, cors);
        case 'GET /stats':
          return await statsGet(request, env, cors);
        default: {
          const m = /^POST \/admin\/feedback\/(\d+)\/resolve$/.exec(route);
          if (m) return await feedbackResolve(request, env, cors, Number(m[1]));
          const r = /^POST \/admin\/reviews\/([\w-]+)\/status$/.exec(route);
          if (r) return await adminReviewStatus(request, env, cors, r[1]);
          return json({ error: 'not-found' }, 404, cors);
        }
      }
    } catch (e) {
      return json({ error: 'server', detail: String(e) }, 500, cors);
    }
  },
};

async function authRequest(request, env, cors) {
  const { email } = await readJson(request);
  const addr = normalizeEmail(email);
  if (!addr) return json({ error: 'bad-email' }, 400, cors);

  const now = Date.now();
  const recent = await env.DB.prepare(
    'SELECT created_at FROM login_codes WHERE email = ? ORDER BY created_at DESC LIMIT 1',
  )
    .bind(addr)
    .first();
  // Silently no-op if a code was just sent — avoids spamming + enumeration.
  if (recent && now - recent.created_at < RESEND_COOLDOWN_MS) {
    return json({ ok: true }, 200, cors);
  }

  const code = sixDigitCode();
  const codeHash = await sha256hex(`${addr}:${code}`);
  await env.DB.prepare('DELETE FROM login_codes WHERE email = ?').bind(addr).run();
  await env.DB.prepare(
    'INSERT INTO login_codes (email, code_hash, expires_at, attempts, created_at) VALUES (?, ?, ?, 0, ?)',
  )
    .bind(addr, codeHash, now + CODE_TTL_MS, now)
    .run();

  await sendCodeEmail(env, addr, code);
  return json({ ok: true }, 200, cors); // never reveal whether the address is known
}

async function authVerify(request, env, cors) {
  const { email, code } = await readJson(request);
  const addr = normalizeEmail(email);
  const entered = String(code ?? '').trim();
  if (!addr || !/^\d{6}$/.test(entered)) return json({ error: 'bad-input' }, 400, cors);

  const row = await env.DB.prepare(
    'SELECT rowid, code_hash, expires_at, attempts FROM login_codes WHERE email = ? ORDER BY created_at DESC LIMIT 1',
  )
    .bind(addr)
    .first();
  if (!row || row.expires_at < Date.now()) return json({ error: 'invalid-code' }, 401, cors);
  if (row.attempts >= MAX_CODE_ATTEMPTS) return json({ error: 'too-many-attempts' }, 429, cors);

  const matches = (await sha256hex(`${addr}:${entered}`)) === row.code_hash;
  if (!matches) {
    await env.DB.prepare('UPDATE login_codes SET attempts = attempts + 1 WHERE rowid = ?').bind(row.rowid).run();
    return json({ error: 'invalid-code' }, 401, cors);
  }
  await env.DB.prepare('DELETE FROM login_codes WHERE email = ?').bind(addr).run();

  let user = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(addr).first();
  if (!user) {
    const id = crypto.randomUUID();
    await env.DB.prepare('INSERT INTO users (id, email, created_at) VALUES (?, ?, ?)').bind(id, addr, Date.now()).run();
    user = { id };
  }

  const token = randomToken();
  await env.DB.prepare(
    'INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)',
  )
    .bind(await sha256hex(token), user.id, Date.now(), Date.now() + TOKEN_TTL_MS)
    .run();
  return json({ token, email: addr }, 200, cors);
}

async function authLogout(request, env, cors) {
  const token = bearer(request);
  if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256hex(token)).run();
  return json({ ok: true }, 200, cors);
}

async function syncGet(request, env, cors) {
  const userId = await authUser(request, env);
  if (!userId) return json({ error: 'unauthorized' }, 401, cors);
  const row = await env.DB.prepare('SELECT data, updated_at FROM progress WHERE user_id = ?').bind(userId).first();
  return json(row ? { data: JSON.parse(row.data), updatedAt: row.updated_at } : { data: null, updatedAt: 0 }, 200, cors);
}

async function syncPut(request, env, cors) {
  const userId = await authUser(request, env);
  if (!userId) return json({ error: 'unauthorized' }, 401, cors);
  const body = await readJson(request);
  if (!body || typeof body.data !== 'object' || body.data === null) return json({ error: 'bad-body' }, 400, cors);
  const data = JSON.stringify(body.data);
  if (data.length > MAX_BLOB_BYTES) return json({ error: 'too-large' }, 413, cors);
  const updatedAt = Number(body.updatedAt) || Date.now();
  await env.DB.prepare(
    'INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?) ' +
      'ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at',
  )
    .bind(userId, data, updatedAt)
    .run();
  // Activity ledger for the stats page: one row per user per UTC day, plus a
  // studied flag on the day of the newest graded review. The flag is written
  // to the review's own day (not today's) so a sync landing after UTC
  // midnight still credits the right day.
  await env.DB.prepare(
    'INSERT INTO activity_days (user_id, day, syncs) VALUES (?, ?, 1) ' +
      'ON CONFLICT(user_id, day) DO UPDATE SET syncs = syncs + 1',
  )
    .bind(userId, new Date().toISOString().slice(0, 10))
    .run();
  const studiedDay = newestReviewDay(body.data);
  if (studiedDay) {
    await env.DB.prepare(
      'INSERT INTO activity_days (user_id, day, syncs, studied) VALUES (?, ?, 0, 1) ' +
        'ON CONFLICT(user_id, day) DO UPDATE SET studied = 1',
    )
      .bind(userId, studiedDay)
      .run();
  }
  return json({ ok: true, updatedAt }, 200, cors);
}

/** UTC day ('YYYY-MM-DD') of the newest card review in a sync blob, or null. */
function newestReviewDay(data) {
  let max = 0;
  for (const row of data?.cards ?? []) {
    const t = row?.card?.last_review ? Date.parse(row.card.last_review) : 0;
    if (t > max) max = t;
  }
  return max ? new Date(max).toISOString().slice(0, 10) : null;
}

// ---- Admin stats (in-app, gated to ADMIN_EMAILS accounts) ----

const DAY_MS = 86_400_000;

/** Session user whose email is on the ADMIN_EMAILS allowlist, or null. */
async function authAdminUser(request, env) {
  const userId = await authUser(request, env);
  if (!userId) return null;
  const allowed = (env.ADMIN_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (allowed.length === 0) return null;
  const row = await env.DB.prepare('SELECT email FROM users WHERE id = ?').bind(userId).first();
  return row && allowed.includes(row.email) ? row.email : null;
}

async function statsGet(request, env, cors) {
  if (!(await authAdminUser(request, env))) return json({ error: 'forbidden' }, 403, cors);
  const now = Date.now();

  const { results: users } = await env.DB.prepare(
    'SELECT u.id, u.email, u.created_at, p.updated_at AS last_sync, p.data FROM users u ' +
      'LEFT JOIN progress p ON p.user_id = u.id ORDER BY u.created_at',
  ).all();
  const dayFor = (msAgo) => new Date(now - msAgo).toISOString().slice(0, 10);
  const since = dayFor(30 * DAY_MS);
  const { results: dayRows } = await env.DB.prepare(
    'SELECT day, COUNT(*) AS active, SUM(studied) AS studied FROM activity_days WHERE day >= ? GROUP BY day ORDER BY day',
  )
    .bind(since)
    .all();
  const { results: perUser } = await env.DB.prepare(
    'SELECT user_id, COUNT(*) AS days, SUM(studied) AS studied_days FROM activity_days WHERE day >= ? GROUP BY user_id',
  )
    .bind(since)
    .all();
  const activeDaysByUser = new Map(perUser.map((r) => [r.user_id, r.days]));
  const studiedDaysByUser = new Map(perUser.map((r) => [r.user_id, r.studied_days]));
  // Distinct users with a studied day today / in the last 7 / 30 calendar days
  // (UTC). Calendar-day windows, unlike the rolling-24h "active" tiles.
  const studiedCounts = await env.DB.prepare(
    'SELECT COUNT(DISTINCT CASE WHEN day >= ?1 THEN user_id END) AS s1, ' +
      'COUNT(DISTINCT CASE WHEN day >= ?2 THEN user_id END) AS s7, ' +
      'COUNT(DISTINCT user_id) AS s30 ' +
      'FROM activity_days WHERE studied = 1 AND day >= ?3',
  )
    .bind(dayFor(0), dayFor(6 * DAY_MS), since)
    .first();

  const rows = users.map((u) => {
    // Card stats come from the synced blob (cards + settings; ts-fsrs card
    // objects carry reps and last_review).
    let cards = 0;
    let reps = 0;
    let lastReviewAt = 0;
    if (u.data) {
      try {
        for (const row of JSON.parse(u.data).cards ?? []) {
          cards++;
          reps += row.card?.reps ?? 0;
          const t = row.card?.last_review ? Date.parse(row.card.last_review) : 0;
          if (t > lastReviewAt) lastReviewAt = t;
        }
      } catch {
        /* unreadable blob — report zeros */
      }
    }
    return {
      email: u.email,
      createdAt: u.created_at,
      lastSyncAt: u.last_sync ?? null,
      cards,
      reps,
      lastReviewAt: lastReviewAt || null,
      activeDays30: activeDaysByUser.get(u.id) ?? 0,
      studiedDays30: studiedDaysByUser.get(u.id) ?? 0,
    };
  });

  const activeWithin = (ms) => rows.filter((r) => r.lastSyncAt && now - r.lastSyncAt < ms).length;
  return json(
    {
      generatedAt: now,
      totalUsers: rows.length,
      activeToday: activeWithin(DAY_MS),
      active7d: activeWithin(7 * DAY_MS),
      active30d: activeWithin(30 * DAY_MS),
      studiedToday: studiedCounts?.s1 ?? 0,
      studied7d: studiedCounts?.s7 ?? 0,
      studied30d: studiedCounts?.s30 ?? 0,
      users: rows,
      days: dayRows,
    },
    200,
    cors,
  );
}

const FEEDBACK_TYPES = ['bug', 'feedback', 'feature'];
const MAX_FEEDBACK_CHARS = 4000;

async function feedbackPost(request, env, cors) {
  const body = await readJson(request);
  const type = FEEDBACK_TYPES.includes(body.type) ? body.type : null;
  const message = String(body.message ?? '').trim();
  if (!type) return json({ error: 'bad-type' }, 400, cors);
  if (!message) return json({ error: 'message-required' }, 400, cors);
  if (message.length > MAX_FEEDBACK_CHARS) return json({ error: 'too-long' }, 413, cors);

  const contact = String(body.contact ?? '').trim().slice(0, 200) || null;
  const context = String(body.context ?? '').trim().slice(0, 500) || null;
  await env.DB.prepare(
    'INSERT INTO feedback (type, message, contact, context, created_at, resolved) VALUES (?, ?, ?, ?, ?, 0)',
  )
    .bind(type, message, contact, context, Date.now())
    .run();
  // Best-effort heads-up to the maintainer; the submission is already saved.
  if (env.NOTIFY_EMAIL && env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.MAIL_FROM || 'Kotoba <onboarding@resend.dev>',
          to: [env.NOTIFY_EMAIL],
          subject: `Kotoba ${type}: ${message.replace(/\s+/g, ' ').slice(0, 60)}`,
          text: `${message}\n\ncontact: ${contact ?? '—'}\ncontext: ${context ?? '—'}\n\nList: npm run feedback`,
        }),
      });
    } catch {
      /* notification is non-critical */
    }
  }
  return json({ ok: true }, 200, cors);
}

// ---- Content review (reviewer page at /review) ----

const REVIEW_STATUSES = ['ok', 'open', 'fixed', 'verified', 'closed'];
const MAX_REVIEW_NOTE_CHARS = 4000;
const MAX_REVIEW_FLAGS_CHARS = 2000;

/** Session user whose email is on the REVIEWER_EMAILS allowlist, or null. */
async function authReviewer(request, env) {
  const userId = await authUser(request, env);
  if (!userId) return null;
  const allowed = (env.REVIEWER_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  if (allowed.length === 0) return null;
  const row = await env.DB.prepare('SELECT email FROM users WHERE id = ?').bind(userId).first();
  return row && allowed.includes(row.email) ? row.email : null;
}

const reviewRow = (r) => ({
  wordId: r.word_id,
  deck: r.deck,
  verdict: r.verdict,
  flags: r.flags ? JSON.parse(r.flags) : null,
  note: r.note,
  status: r.status,
  fixNote: r.fix_note,
  updatedAt: r.updated_at,
});

async function reviewState(request, env, cors) {
  const reviewer = await authReviewer(request, env);
  if (!reviewer) return json({ error: 'forbidden' }, 403, cors);
  const { results } = await env.DB.prepare(
    'SELECT word_id, deck, verdict, flags, note, status, fix_note, updated_at FROM content_reviews',
  ).all();
  return json({ reviews: results.map(reviewRow) }, 200, cors);
}

async function reviewPost(request, env, cors) {
  const reviewer = await authReviewer(request, env);
  if (!reviewer) return json({ error: 'forbidden' }, 403, cors);

  const body = await readJson(request);
  const wordId = String(body.wordId ?? '').trim();
  const deck = String(body.deck ?? '').trim();
  const verdict = body.verdict === 'good' || body.verdict === 'flagged' ? body.verdict : null;
  if (!/^[\w-]{1,64}$/.test(wordId) || !/^[\w-]{1,64}$/.test(deck) || !verdict) {
    return json({ error: 'bad-input' }, 400, cors);
  }
  const note = String(body.note ?? '').trim().slice(0, MAX_REVIEW_NOTE_CHARS) || null;
  let flags = null;
  if (body.flags != null) {
    flags = JSON.stringify(body.flags);
    if (flags.length > MAX_REVIEW_FLAGS_CHARS) return json({ error: 'too-long' }, 413, cors);
  }

  const existing = await env.DB.prepare('SELECT status FROM content_reviews WHERE word_id = ?').bind(wordId).first();
  // 'good' on a fixed item is the reviewer confirming our fix; 'flagged'
  // always (re)opens. fix_note survives a re-open so the next fix has context.
  const status = verdict === 'good' ? (existing?.status === 'fixed' ? 'verified' : 'ok') : 'open';
  const now = Date.now();
  await env.DB.prepare(
    'INSERT INTO content_reviews (word_id, deck, verdict, flags, note, status, fix_note, created_at, updated_at) ' +
      'VALUES (?, ?, ?, ?, ?, ?, NULL, ?, ?) ' +
      'ON CONFLICT(word_id) DO UPDATE SET deck = excluded.deck, verdict = excluded.verdict, ' +
      'flags = excluded.flags, note = excluded.note, status = excluded.status, updated_at = excluded.updated_at',
  )
    .bind(wordId, deck, verdict, flags, note, status, now, now)
    .run();
  return json({ ok: true, status }, 200, cors);
}

async function adminReviewList(request, env, cors) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401, cors);
  const want = new URL(request.url).searchParams.get('status') || 'open';
  const stmt =
    want === 'all'
      ? env.DB.prepare('SELECT word_id, deck, verdict, flags, note, status, fix_note, updated_at FROM content_reviews ORDER BY updated_at DESC LIMIT 2000')
      : env.DB.prepare('SELECT word_id, deck, verdict, flags, note, status, fix_note, updated_at FROM content_reviews WHERE status = ? ORDER BY updated_at DESC LIMIT 2000').bind(want);
  const { results } = await stmt.all();
  return json(results.map(reviewRow), 200, cors);
}

async function adminReviewStatus(request, env, cors, wordId) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401, cors);
  const body = await readJson(request);
  const status = REVIEW_STATUSES.includes(body.status) ? body.status : null;
  if (!status) return json({ error: 'bad-status' }, 400, cors);
  const fixNote = String(body.fixNote ?? '').trim().slice(0, MAX_REVIEW_NOTE_CHARS) || null;
  const r = await env.DB.prepare(
    'UPDATE content_reviews SET status = ?, fix_note = COALESCE(?, fix_note), updated_at = ? WHERE word_id = ?',
  )
    .bind(status, fixNote, Date.now(), wordId)
    .run();
  if (!r.meta.changes) return json({ error: 'not-found' }, 404, cors);
  return json({ ok: true, status }, 200, cors);
}

function isAdmin(request, env) {
  // Header, not query param — query strings tend to end up in logs.
  const secret = bearer(request);
  return Boolean(env.ADMIN_SECRET) && secret === env.ADMIN_SECRET;
}

async function feedbackList(request, env, cors) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401, cors);
  const { results } = await env.DB.prepare(
    'SELECT rowid AS id, type, message, contact, context, created_at, resolved FROM feedback ORDER BY created_at DESC LIMIT 500',
  ).all();
  return json(results, 200, cors);
}

async function feedbackResolve(request, env, cors, id) {
  if (!isAdmin(request, env)) return json({ error: 'unauthorized' }, 401, cors);
  const row = await env.DB.prepare('SELECT resolved FROM feedback WHERE rowid = ?').bind(id).first();
  if (!row) return json({ error: 'not-found' }, 404, cors);
  const resolved = row.resolved ? 0 : 1;
  await env.DB.prepare('UPDATE feedback SET resolved = ? WHERE rowid = ?').bind(resolved, id).run();
  return json({ resolved: Boolean(resolved) }, 200, cors);
}

/**
 * Exact fixed-window limiter in D1. Returns false once `limit` requests have
 * been counted inside the current window. Stale rows are pruned ~1% of calls.
 */
async function rateLimit(db, key, limit, windowMs) {
  const now = Date.now();
  const row = await db
    .prepare(
      'INSERT INTO rate_limits (key, count, reset_at) VALUES (?1, 1, ?2) ' +
        'ON CONFLICT(key) DO UPDATE SET ' +
        'count = CASE WHEN rate_limits.reset_at < ?3 THEN 1 ELSE rate_limits.count + 1 END, ' +
        'reset_at = CASE WHEN rate_limits.reset_at < ?3 THEN ?2 ELSE rate_limits.reset_at END ' +
        'RETURNING count',
    )
    .bind(key, now + windowMs, now)
    .first();
  if (Math.random() < 0.01) {
    await db.prepare('DELETE FROM rate_limits WHERE reset_at < ?').bind(now).run();
  }
  return (row?.count ?? 1) <= limit;
}

async function authUser(request, env) {
  const token = bearer(request);
  if (!token) return null;
  const s = await env.DB.prepare('SELECT user_id, expires_at FROM sessions WHERE token_hash = ?')
    .bind(await sha256hex(token))
    .first();
  if (!s || s.expires_at < Date.now()) return null;
  return s.user_id;
}

async function sendCodeEmail(env, addr, code) {
  if (!env.RESEND_API_KEY) throw new Error('email-not-configured');
  const app = env.APP_NAME || 'Kotoba';
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.MAIL_FROM || 'Kotoba <onboarding@resend.dev>',
      to: [addr],
      subject: `Your ${app} sign-in code is ${code}`,
      text: `Your ${app} sign-in code is ${code}\n\nIt expires in 10 minutes. If you didn't request it, you can ignore this email.`,
    }),
  });
  if (!resp.ok) throw new Error(`resend ${resp.status}`);
}

function bearer(request) {
  const m = /^Bearer (.+)$/.exec(request.headers.get('Authorization') || '');
  return m ? m[1] : null;
}

function normalizeEmail(e) {
  const s = String(e ?? '').trim().toLowerCase();
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s) ? s : null;
}

function sixDigitCode() {
  return String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, '0');
}

function randomToken() {
  const b = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sha256hex(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function json(body, status, cors) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...cors } });
}
