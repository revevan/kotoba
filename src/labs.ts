// Rungs 3–4 of the difficulty ladder ("say it back" sentence shadowing and
// "build it" free production) — now live for everyone. ?labs=0 remains as a
// persisted opt-out/kill switch (?labs=1 re-enables). ?rung=shadow|build|cloze
// forces that exercise type for any word that has the prerequisites,
// bypassing the card-maturity ladder — testing only.

const KEY = 'kotoba-labs-off';
const hasDom = typeof window !== 'undefined';

function resolve(): boolean {
  if (!hasDom) return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get('labs') === '0') {
    try { window.localStorage.setItem(KEY, '1'); } catch { /* storage unavailable */ }
    return false;
  }
  if (params.get('labs') === '1') {
    try { window.localStorage.removeItem(KEY); } catch { /* storage unavailable */ }
    return true;
  }
  try { return window.localStorage.getItem(KEY) !== '1'; } catch { return true; }
}

export const labsEnabled = resolve();

// Conjugation practice is pre-release: only these signed-in accounts see it
// (the toggle, the due-count contribution, and the session items) until the
// public flip. To launch it to everyone, delete this gate and its call sites.
const CONJ_EARLY_ACCESS = new Set(['revevan@gmail.com']);

export function conjEarlyAccess(email: string | null | undefined): boolean {
  return !!email && CONJ_EARLY_ACCESS.has(email.trim().toLowerCase());
}

/** Debug override: force one exercise type regardless of card maturity. */
export const forcedRung: 'cloze' | 'shadow' | 'build' | null = (() => {
  if (!hasDom || !labsEnabled) {
    // ?cloze=1 predates labs and stays available without the flag.
    return null;
  }
  const r = new URLSearchParams(window.location.search).get('rung');
  return r === 'shadow' || r === 'build' || r === 'cloze' ? r : null;
})();
