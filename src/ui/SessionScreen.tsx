import { prefetchProgress, sessionState, sessionWord } from '../state';
import { endSession, tap } from '../session/controller';
import { mockMode, mockPending, mockSubmit } from '../speech/mock';
import type { Phase } from '../session/machine';

const PHASE_BADGE: Record<Phase, { text: string; cls: string }> = {
  'idle': { text: '', cls: '' },
  'intro': { text: 'STARTING', cls: 'speaking' },
  'teach-playing': { text: 'NEW WORD', cls: 'speaking' },
  'teach-listening': { text: 'REPEAT IT', cls: 'listening' },
  'quiz-playing': { text: 'QUESTION', cls: 'speaking' },
  'quiz-listening': { text: 'YOUR ANSWER?', cls: 'listening' },
  'correct-playing': { text: 'CORRECT', cls: 'correct' },
  'reveal-playing': { text: 'ANSWER', cls: 'reveal' },
  'self-grade-listening': { text: 'GOT IT?', cls: 'listening' },
  'pause-playing': { text: 'PAUSING', cls: 'paused' },
  'paused': { text: 'PAUSED — say “resume”', cls: 'paused' },
  'resume-playing': { text: 'RESUMING', cls: 'speaking' },
  'done': { text: 'DONE', cls: 'correct' },
};

export function SessionScreen() {
  const s = sessionState.value;
  const word = sessionWord.value;
  if (!s) return null;

  const badge = PHASE_BADGE[s.phase];
  const showAnswer = ['teach-playing', 'teach-listening', 'correct-playing', 'reveal-playing', 'self-grade-listening'].includes(s.phase);
  const isQuizzing = s.phase === 'quiz-playing' || s.phase === 'quiz-listening';
  const selfGrading = s.phase === 'reveal-playing' || s.phase === 'self-grade-listening';
  const paused = s.phase === 'paused' || s.phase === 'pause-playing';
  const done = s.phase === 'done';
  const progress = `${Math.min(s.idx + 1, s.queue.length)} / ${s.queue.length}`;

  return (
    <div class={`screen session ${badge.cls}`}>
      <header>
        <span class="progress">{progress}</span>
        <span class={`badge ${badge.cls}`}>{badge.text}</span>
        <button class="ghost" onClick={endSession}>
          End
        </button>
      </header>

      {s.degraded && <p class="degraded">Voice recognition unavailable — use the buttons</p>}
      {prefetchProgress.value && (
        <p class="hint">
          caching audio {prefetchProgress.value.done}/{prefetchProgress.value.total}
        </p>
      )}

      <main>
        {done ? (
          <div class="summary">
            <h2>Session complete</h2>
            <p>
              {s.counts.taught} new · {s.counts.correct} correct · {s.counts.missed} missed
            </p>
            <button class="start" onClick={endSession}>
              HOME
            </button>
          </div>
        ) : (
          <>
            <div class="word-en">{word?.english ?? ''}</div>
            {showAnswer && word && (
              <div class="word-ja">
                <div class="kana">{word.kana}</div>
                <div class="romaji">{word.romaji}</div>
                <div class="mora">{word.moraKana.join(' ・ ')}</div>
              </div>
            )}
            {isQuizzing && <div class="word-ja mystery">?</div>}
            {s.lastRecognized && <div class="recognized">“{s.lastRecognized}”</div>}
          </>
        )}
      </main>

      {mockMode && mockPending.value && (
        <form
          class="mockbar"
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.currentTarget as HTMLFormElement).elements.namedItem('mock') as HTMLInputElement;
            mockSubmit(input.value);
            input.value = '';
          }}
        >
          <input name="mock" placeholder={`mock ${mockPending.value.lang} (empty = timeout)`} autoFocus />
          <button type="submit">Say</button>
        </form>
      )}

      {!done && (
        <div class="controls">
          {selfGrading ? (
            <>
              <button class="ctl good" onClick={() => tap('gotit')}>
                Got it
              </button>
              <button class="ctl bad" onClick={() => tap('missed')}>
                Missed
              </button>
              <button class="ctl" onClick={() => tap('repeat')}>
                Repeat
              </button>
            </>
          ) : (
            <>
              <button class="ctl" onClick={() => tap('repeat')}>
                Repeat
              </button>
              <button class="ctl" onClick={() => tap(paused ? 'resume' : 'pause')}>
                {paused ? 'Resume' : 'Pause'}
              </button>
              <button class="ctl" onClick={() => tap('skip')}>
                Skip
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
