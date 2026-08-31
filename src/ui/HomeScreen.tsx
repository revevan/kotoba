import { useState } from 'preact/hooks';
import { auth, deckIndex, deckProgress, dueCount, enabledDeckIds, enteredApp, loadError, newAvailable, screen } from '../state';
import { GUEST_DECK_IDS, startSession, updateSetting } from '../session/controller';
import { sendFeedback } from '../sync/client';
import { cloudSyncEnabled } from '../sync/config';
import { Notices } from './Notices';

function FeedbackForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  if (!cloudSyncEnabled) return null;
  if (status === 'sent') return <p class="hint">Thanks — got it! 🙏</p>;
  if (!open)
    return (
      <p class="hint support">
        Something broken or missing?{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Report a bug
        </a>
      </p>
    );

  return (
    <form
      class="feedback"
      onSubmit={(e) => {
        e.preventDefault();
        const f = e.currentTarget as HTMLFormElement;
        const type = (f.elements.namedItem('type') as HTMLSelectElement).value as 'bug' | 'feedback' | 'feature';
        const message = (f.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
        const contact = (f.elements.namedItem('contact') as HTMLInputElement).value.trim();
        if (!message) return;
        setStatus('sending');
        sendFeedback(type, message, contact).then(
          () => setStatus('sent'),
          () => setStatus('error'),
        );
      }}
    >
      <select name="type">
        <option value="bug">Bug</option>
        <option value="feedback">Feedback</option>
        <option value="feature">Feature idea</option>
      </select>
      <textarea name="message" rows={3} placeholder="What happened? What did you expect?" required />
      <input name="contact" type="email" placeholder="Email (optional — for follow-up)" />
      <div class="feedback-actions">
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        <button type="button" class="ghost" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
      {status === 'error' && <p class="error">Couldn’t send — please try again.</p>}
    </form>
  );
}

export function HomeScreen() {
  const decks = deckIndex.value;
  const enabled = enabledDeckIds.value;

  const toggleDeck = (id: string) => {
    const next = enabled.includes(id) ? enabled.filter((d) => d !== id) : [...enabled, id];
    void updateSetting('enabledDecks', next);
  };

  const nothingToDo = dueCount.value === 0 && newAvailable.value === 0;

  return (
    <div class="screen home">
      <header>
        <h1><span class="brand-kanji">言葉</span> Kotoba</h1>
        <button class="ghost" onClick={() => (screen.value = 'settings')}>
          Settings
        </button>
      </header>

      {loadError.value && <p class="error">Couldn’t load decks: {loadError.value}</p>}

      <Notices />

      <div class="stats">
        <div class="stat">
          <span class="num">{dueCount.value}</span>
          <span class="label">due</span>
        </div>
        <div class="stat">
          <span class="num">{newAvailable.value}</span>
          <span class="label">new today</span>
        </div>
      </div>

      <div class="decks">
        {decks.map((d) => {
          const locked = !auth.value && !GUEST_DECK_IDS.includes(d.id);
          if (locked)
            return (
              <button key={d.id} class="deck locked" onClick={() => (enteredApp.value = false)}>
                <span class="lock">🔒</span>
                <span>{d.name}</span>
                <span class="count">Sign up free</span>
              </button>
            );
          return (
            <label key={d.id} class={`deck ${enabled.includes(d.id) ? 'on' : ''}`}>
              <input type="checkbox" checked={enabled.includes(d.id)} onChange={() => toggleDeck(d.id)} />
              <span>{d.name}</span>
              <span class="count">{deckProgress.value[d.id] ?? 0}/{d.wordCount}</span>
            </label>
          );
        })}
      </div>

      <button class="start" disabled={nothingToDo || !!loadError.value} onClick={() => void startSession()}>
        START
      </button>
      {nothingToDo && !loadError.value && <p class="hint">All caught up — nothing due and no new words selected.</p>}
      <p class="hint">Mount the phone, tap START once, then it’s all voice.</p>
      <p class="hint support">
        Like this?{' '}
        <a href="https://buymeacoffee.com/kotobaapp" target="_blank" rel="noopener noreferrer">
          Buy me a coffee ☕
        </a>
      </p>
      <FeedbackForm />
    </div>
  );
}
