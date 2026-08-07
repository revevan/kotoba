-- Kotoba API schema (Cloudflare D1 / SQLite).
-- Apply with: wrangler d1 execute kotoba --file=schema.sql   (add --remote to run on the deployed DB)

CREATE TABLE IF NOT EXISTS users (
  id         TEXT PRIMARY KEY,
  email      TEXT UNIQUE NOT NULL,
  created_at INTEGER NOT NULL
);

-- Short-lived one-time login codes (hashed). One live row per email.
CREATE TABLE IF NOT EXISTS login_codes (
  email      TEXT NOT NULL,
  code_hash  TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts   INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_login_codes_email ON login_codes (email);

-- Session bearer tokens (hashed).
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions (user_id);

-- One synced progress blob per user (cards + reviews + settings JSON).
CREATE TABLE IF NOT EXISTS progress (
  user_id    TEXT PRIMARY KEY,
  data       TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);

-- One row per user per UTC day with at least one authenticated sync — powers
-- the admin stats page's daily-active counts. Written by PUT /sync. `studied`
-- marks days with at least one graded review (from the blob's newest
-- last_review), separating "opened the app" from "actually studied"; a row can
-- have syncs = 0 when the studied day is marked retroactively after midnight.
CREATE TABLE IF NOT EXISTS activity_days (
  user_id TEXT NOT NULL,
  day     TEXT NOT NULL,             -- 'YYYY-MM-DD' (UTC)
  syncs   INTEGER NOT NULL DEFAULT 1,
  studied INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, day)
);
CREATE INDEX IF NOT EXISTS idx_activity_days_day ON activity_days (day);

-- User-submitted bug reports / feature requests (from the in-app form).
CREATE TABLE IF NOT EXISTS feedback (
  type       TEXT NOT NULL,      -- bug | feedback | feature
  message    TEXT NOT NULL,
  contact    TEXT,               -- optional email/handle
  context    TEXT,               -- app-supplied: url + user agent
  created_at INTEGER NOT NULL,
  resolved   INTEGER NOT NULL DEFAULT 0
);

-- Content-review verdicts from the reviewer page (/review). One row per word —
-- the current state, not a history. Lifecycle: verdict 'good' closes a word
-- immediately (status 'ok'); 'flagged' opens it ('open') until the maintainers
-- mark it 'fixed', which re-queues it on the reviewer's page for confirmation
-- ('verified') — or they short-circuit straight to 'closed'.
CREATE TABLE IF NOT EXISTS content_reviews (
  word_id    TEXT PRIMARY KEY,
  deck       TEXT NOT NULL,
  verdict    TEXT NOT NULL,   -- good | flagged
  flags      TEXT,            -- JSON from the review page: rows flagged + issue kinds
  note       TEXT,            -- reviewer's free-text note (English or Japanese)
  status     TEXT NOT NULL,   -- ok | open | fixed | verified | closed
  fix_note   TEXT,            -- maintainer note on what was changed (shown on re-check)
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_content_reviews_status ON content_reviews (status);

-- Fixed-window rate limiting (exact, global — the Workers ratelimit binding
-- only counts per-machine). Stale rows are pruned opportunistically.
CREATE TABLE IF NOT EXISTS rate_limits (
  key      TEXT PRIMARY KEY,
  count    INTEGER NOT NULL,
  reset_at INTEGER NOT NULL
);
