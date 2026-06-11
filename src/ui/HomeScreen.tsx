import { deckIndex, dueCount, enabledDeckIds, loadError, newAvailable, newPerSession, screen } from '../state';
import { startSession, updateSetting } from '../session/controller';

export function HomeScreen() {
  const decks = deckIndex.value;
  const enabled = enabledDeckIds.value;

  const toggleDeck = (id: string) => {
    const next = enabled.includes(id) ? enabled.filter((d) => d !== id) : [...enabled, id];
    void updateSetting('enabledDecks', next);
  };

  const nothingToDo = dueCount.value === 0 && Math.min(newAvailable.value, newPerSession.value) === 0;

  return (
    <div class="screen home">
      <header>
        <h1>ことば Kotoba</h1>
        <button class="ghost" onClick={() => (screen.value = 'settings')}>
          Settings
        </button>
      </header>

      {loadError.value && <p class="error">Couldn’t load decks: {loadError.value}</p>}

      <div class="stats">
        <div class="stat">
          <span class="num">{dueCount.value}</span>
          <span class="label">due</span>
        </div>
        <div class="stat">
          <span class="num">{Math.min(newAvailable.value, newPerSession.value)}</span>
          <span class="label">new</span>
        </div>
      </div>

      <div class="decks">
        {decks.map((d) => (
          <label key={d.id} class={`deck ${enabled.includes(d.id) ? 'on' : ''}`}>
            <input type="checkbox" checked={enabled.includes(d.id)} onChange={() => toggleDeck(d.id)} />
            <span>{d.name}</span>
            <span class="count">{d.wordCount}</span>
          </label>
        ))}
      </div>

      <button class="start" disabled={nothingToDo || !!loadError.value} onClick={() => void startSession()}>
        START
      </button>
      {nothingToDo && !loadError.value && <p class="hint">All caught up — nothing due and no new words selected.</p>}
      <p class="hint">Mount the phone, tap START once, then it’s all voice.</p>
    </div>
  );
}
