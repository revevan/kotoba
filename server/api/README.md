# Kotoba API — passwordless login + progress sync

A Cloudflare Worker (+ D1) that lets people sign in with an emailed one-time code
and sync their progress across devices. No passwords, no third-party login.

```
POST /auth/request  { email }                  -> { ok: true }      # emails a 6-digit code
POST /auth/verify   { email, code }            -> { token, email }  # token = bearer for /sync
POST /auth/logout   (Bearer)                   -> { ok: true }
GET  /sync          (Bearer)                   -> { data, updatedAt }
PUT  /sync          (Bearer) { data, updatedAt } -> { ok, updatedAt }
```

The `data` blob is the same shape the in-app backup export produces (cards,
reviews, settings). Merging is done client-side (newer review wins), so the
server just stores the latest blob per user.

## One-time setup

1. **Create the D1 database**
   ```bash
   cd server/api
   wrangler d1 create kotoba
   ```
   Paste the printed `database_id` into `wrangler.toml`.

2. **Create the tables**
   ```bash
   wrangler d1 execute kotoba --remote --file=schema.sql
   ```

3. **Email sending (Resend)**
   - Sign up at https://resend.com (free tier: 3,000 emails/mo).
   - Verify your sending domain (add the DNS records Resend shows — trivial if
     the domain is on Cloudflare). Until verified you can only email your own
     account address.
   - Create an API key, then:
     ```bash
     wrangler secret put RESEND_API_KEY      # paste the key when prompted
     ```
   - Set `MAIL_FROM` in `wrangler.toml` to an address on the verified domain,
     e.g. `Kotoba <login@yourdomain.app>`.

4. **Confirm `ALLOWED_ORIGIN`** in `wrangler.toml` matches where the app is
   served (GitHub Pages: `https://<you>.github.io`).

5. **Deploy**
   ```bash
   wrangler deploy
   ```
   Note the worker URL (e.g. `https://kotoba-api.<you>.workers.dev`). Add it as a
   GitHub Actions secret named `API_ENDPOINT` so the app build can reach it
   (wired the same way as `STT_ENDPOINT`).

## Cost

D1 and Workers are free-tier (far below the limits for a personal app); Resend is
free up to 3,000 emails/month. The only recurring cost is the domain used for the
verified sending address (~$10–16/yr).

## Security notes

- Login codes are 6 digits, hashed before storage, expire in 10 minutes, allow 5
  attempts, and are rate-limited to one per 45s per email.
- `/auth/request` always returns `{ ok: true }` so it never reveals whether an
  address has an account.
- Session tokens are 256-bit random, stored only as a SHA-256 hash, valid 90 days.
