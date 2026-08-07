import { useEffect, useState } from 'preact/hooks';
import { auth, screen } from '../state';
import { fetchStats, type Stats } from '../sync/client';

// Admin-only usage dashboard (Settings → Stats). The entry point is gated by
// adminAccess() in Settings; the API enforces its own ADMIN_EMAILS allowlist.

const DAY_MS = 86_400_000;

function relative(t: number | null): string {
  if (!t) return 'never';
  const d = (Date.now() - t) / DAY_MS;
  if (d < 1 / 24) return 'just now';
  if (d < 1) return `${Math.round(d * 24)}h ago`;
  if (d < 60) return `${Math.round(d)}d ago`;
  return new Date(t).toISOString().slice(0, 10);
}

/** Last 30 UTC days ending today, joined against the server's active counts. */
function dayBars(stats: Stats): { day: string; active: number; studied: number }[] {
  const byDay = new Map(stats.days.map((d) => [d.day, d]));
  const out = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date(stats.generatedAt - i * DAY_MS).toISOString().slice(0, 10);
    const row = byDay.get(day);
    out.push({ day, active: row?.active ?? 0, studied: row?.studied ?? 0 });
  }
  return out;
}

export function StatsScreen() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = auth.value?.token;
    if (!token) {
      setError('Sign in first.');
      return;
    }
    fetchStats(token).then(setStats, (e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  const users = stats ? [...stats.users].sort((a, b) => (b.lastSyncAt ?? 0) - (a.lastSyncAt ?? 0)) : [];
  const bars = stats ? dayBars(stats) : [];
  const peak = Math.max(1, ...bars.map((b) => b.active));

  return (
    <div class="screen settings admin-stats">
      <header>
        <button class="ghost" onClick={() => (screen.value = 'settings')}>
          ← Back
        </button>
        <h1>Stats</h1>
      </header>

      {error && <p class="error">{error}</p>}
      {!stats && !error && <p class="hint">Loading…</p>}

      {stats && (
        <>
          <div class="stats">
            <div class="stat">
              <span class="num">{stats.totalUsers}</span>
              <span class="label">signups</span>
            </div>
            <div class="stat">
              <span class="num">
                {stats.studiedToday}<span class="denom">/{stats.activeToday}</span>
              </span>
              <span class="label">studied / opened today</span>
            </div>
            <div class="stat">
              <span class="num">
                {stats.studied7d}<span class="denom">/{stats.active7d}</span>
              </span>
              <span class="label">studied / opened 7d</span>
            </div>
            <div class="stat">
              <span class="num">
                {stats.studied30d}<span class="denom">/{stats.active30d}</span>
              </span>
              <span class="label">studied / opened 30d</span>
            </div>
          </div>

          <p class="hint">Per day: opened the app (dim) vs studied at least one card (accent) — last 30 days, UTC</p>
          <div class="day-bars">
            {bars.map((b) => (
              <div key={b.day} class="day-bar" title={`${b.day}: ${b.studied} studied / ${b.active} opened`}>
                {b.active > 0 && <span class="opened" style={`height:${Math.round((b.active / peak) * 100)}%`} />}
                {b.studied > 0 && <span class="studied" style={`height:${Math.round((b.studied / peak) * 100)}%`} />}
              </div>
            ))}
          </div>

          <div class="user-table-wrap">
            <table class="user-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Joined</th>
                  <th>Last active</th>
                  <th>Cards</th>
                  <th>Reps</th>
                  <th>Opened/30</th>
                  <th>Studied/30</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.email}>
                    <td class="email">{u.email}</td>
                    <td>{new Date(u.createdAt).toISOString().slice(0, 10)}</td>
                    <td>{relative(u.lastSyncAt)}</td>
                    <td>{u.cards}</td>
                    <td>{u.reps}</td>
                    <td>{u.activeDays30}</td>
                    <td>{u.studiedDays30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p class="hint">
            "Opened" is any cloud sync (app load or session end); "studied" means at least one card graded that UTC
            day. Guests who never sign in aren't counted here (see Cloudflare Analytics for raw traffic).
          </p>
        </>
      )}
    </div>
  );
}
