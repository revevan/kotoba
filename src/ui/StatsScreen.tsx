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
function dayBars(stats: Stats): { day: string; active: number }[] {
  const byDay = new Map(stats.days.map((d) => [d.day, d.active]));
  const out = [];
  for (let i = 29; i >= 0; i--) {
    const day = new Date(stats.generatedAt - i * DAY_MS).toISOString().slice(0, 10);
    out.push({ day, active: byDay.get(day) ?? 0 });
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
              <span class="num">{stats.activeToday}</span>
              <span class="label">active today</span>
            </div>
            <div class="stat">
              <span class="num">{stats.active7d}</span>
              <span class="label">active 7d</span>
            </div>
            <div class="stat">
              <span class="num">{stats.active30d}</span>
              <span class="label">active 30d</span>
            </div>
          </div>

          <p class="hint">Users syncing per day (last 30 days, UTC)</p>
          <div class="day-bars">
            {bars.map((b) => (
              <div key={b.day} class="day-bar" title={`${b.day}: ${b.active}`}>
                <span style={`height:${Math.round((b.active / peak) * 100)}%`} />
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
                  <th>Days/30</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p class="hint">
            "Last active" is the newest cloud sync; guests who never sign in aren't counted here (see Cloudflare
            Analytics for raw traffic). Daily bars start filling from today onward.
          </p>
        </>
      )}
    </div>
  );
}
