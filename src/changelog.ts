// "What's new" entries, newest first. The home screen shows the top entry as a
// dismissible card until it's been seen (per device, localStorage). Add a new
// entry (fresh id) with each user-visible release — this is the "don't
// surprise users" surface for rung promotions, conj graduation, etc.
//
// Title convention (Evan, 2026-09-03): frame release cards as "Bug fixes" —
// a feature-sounding title makes people think something changed that they
// need to relearn. Put the specifics in the points.

export interface ChangelogEntry {
  /** Stable unique id; the dismissal marker. Convention: YYYY-MM-slug. */
  id: string;
  title: string;
  points: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    id: '2026-09-connection-loss',
    title: 'Bug fixes',
    points: [
      'Session audio is saved on your phone as you start, so dead zones mid-commute no longer cut it off.',
      'If a question can’t load, you’ll hear “connection lost” and the app waits and retries instead of guessing. Nothing is graded while it waits.',
      'A missed connection never counts against a card.',
    ],
  },
  {
    id: '2026-09-safety-rails',
    title: 'Smoother sessions / bug fixes',
    points: [
      'Connection trouble no longer counts against you — if the app can’t hear the network, your card is left unchanged and it says so.',
      'Updates no longer restart the app mid-session. You’ll see a note here when a new version is ready.',
      'Re-recorded audio now refreshes properly on devices that had the old clips cached.',
    ],
  },
];

const SEEN_KEY = 'kotoba-changelog-seen';

export function latestUnseen(): ChangelogEntry | null {
  const entry = CHANGELOG[0];
  if (!entry) return null;
  try {
    return localStorage.getItem(SEEN_KEY) === entry.id ? null : entry;
  } catch {
    return null; // storage unavailable — don't nag on every load
  }
}

export function markSeen(id: string): void {
  try {
    localStorage.setItem(SEEN_KEY, id);
  } catch {
    /* storage unavailable */
  }
}
