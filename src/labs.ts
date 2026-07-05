// Hidden feature gate for pre-release exercises (rungs 3–4 of the difficulty
// ladder: "say it back" sentence shadowing and "build it" free production).
// Enable with ?labs=1 (persists, like ?debug=1); disable with ?labs=0.
// ?rung=shadow|build|cloze forces that exercise type for any word that has
// the prerequisites, bypassing the card-maturity ladder — testing only.

const KEY = 'kotoba-labs';
const hasDom = typeof window !== 'undefined';

function resolve(): boolean {
  if (!hasDom) return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get('labs') === '1') {
    try { window.localStorage.setItem(KEY, '1'); } catch { /* storage unavailable */ }
    return true;
  }
  if (params.get('labs') === '0') {
    try { window.localStorage.removeItem(KEY); } catch { /* storage unavailable */ }
    return false;
  }
  try { return window.localStorage.getItem(KEY) === '1'; } catch { return false; }
}

export const labsEnabled = resolve();

/** Debug override: force one exercise type regardless of card maturity. */
export const forcedRung: 'cloze' | 'shadow' | 'build' | null = (() => {
  if (!hasDom || !labsEnabled) {
    // ?cloze=1 predates labs and stays available without the flag.
    return null;
  }
  const r = new URLSearchParams(window.location.search).get('rung');
  return r === 'shadow' || r === 'build' || r === 'cloze' ? r : null;
})();
