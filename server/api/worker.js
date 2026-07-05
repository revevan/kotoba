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
 *   GET  /admin/feedback?secret=…                  -> [ …submissions ]
 *   POST /admin/feedback/:id/resolve?secret=…      -> { resolved }
 *
 * Secrets / vars (wrangler):
 *   ADMIN_SECRET   (secret, gates /admin/*)
 *   RESEND_API_KEY (secret, required to send mail)
 *   MAIL_FROM      (var, e.g. "Kotoba <login@yourdomain>")
 *   ALLOWED_ORIGIN (var, the app origin, e.g. https://revevan.github.io)
 *   APP_NAME       (var, e.g. "Kotoba")
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
        default: {
          const m = /^POST \/admin\/feedback\/(\d+)\/resolve$/.exec(route);
          if (m) return await feedbackResolve(request, env, cors, Number(m[1]));
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
  return json({ ok: true, updatedAt }, 200, cors);
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
          subject: `Kotoba ${type}: ${message.slice(0, 60)}`,
          text: `${message}\n\ncontact: ${contact ?? '—'}\ncontext: ${context ?? '—'}\n\nList: npm run feedback`,
        }),
      });
    } catch {
      /* notification is non-critical */
    }
  }
  return json({ ok: true }, 200, cors);
}

function isAdmin(request, env) {
  const secret = new URL(request.url).searchParams.get('secret');
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
