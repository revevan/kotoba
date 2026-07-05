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

-- User-submitted bug reports / feature requests (from the in-app form).
CREATE TABLE IF NOT EXISTS feedback (
  type       TEXT NOT NULL,      -- bug | feedback | feature
  message    TEXT NOT NULL,
  contact    TEXT,               -- optional email/handle
  context    TEXT,               -- app-supplied: url + user agent
  created_at INTEGER NOT NULL,
  resolved   INTEGER NOT NULL DEFAULT 0
);
