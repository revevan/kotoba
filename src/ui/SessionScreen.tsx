import { buildNote, conjInfo, prefetchProgress, sessionState, sessionWord } from '../state';
import { endSession, tap } from '../session/controller';
import { mockMode, mockPending, mockSubmit } from '../speech/mock';
import type { Phase } from '../session/machine';

const PHASE_BADGE: Record<Phase, { text: string; cls: string }> = {
  'idle': { text: '', cls: '' },
  'intro': { text: 'STARTING', cls: 'speaking' },
  'teach-playing': { text: 'NEW WORD', cls: 'speaking' },
  'teach-listening': { text: 'REPEAT IT', cls: 'listening' },
  'teach2-playing': { text: 'IN CONTEXT', cls: 'speaking' },
  'teach2-listening': { text: 'ONE MORE TIME', cls: 'listening' },
  'quiz-playing': { text: 'QUESTION', cls: 'speaking' },
  'quiz-listening': { text: 'YOUR ANSWER?', cls: 'listening' },
  'cloze-playing': { text: 'FILL THE BLANK', cls: 'speaking' },
  'cloze-listening': { text: 'SAY THE MISSING WORD', cls: 'listening' },
  'shadow-playing': { text: 'REPEAT THE SENTENCE', cls: 'speaking' },
  'shadow-listening': { text: 'SAY IT BACK', cls: 'listening' },
  'build-playing': { text: 'MAKE A SENTENCE', cls: 'speaking' },
  'build-listening': { text: 'YOUR SENTENCE?', cls: 'listening' },
  'conj-playing': { text: 'CONJUGATE', cls: 'speaking' },
  'conj-listening': { text: 'SAY THE FORM', cls: 'listening' },
  'correct-playing': { text: 'CORRECT', cls: 'correct' },
  'reveal-playing': { text: 'NOT QUITE', cls: 'reveal' },
  'self-grade-listening': { text: 'MISSED — say “got it” to override', cls: 'reveal' },
  'self-grade-reprompt-playing': { text: 'DIDN’T CATCH THAT — got it, or missed it?', cls: 'reveal' },
  'pause-playing': { text: 'PAUSING', cls: 'paused' },
  'paused': { text: 'PAUSED — mic off · tap Resume', cls: 'paused' },
  'resume-playing': { text: 'RESUMING', cls: 'speaking' },
  'done': { text: 'DONE', cls: 'correct' },
};

// A reveal reached via an SR/mic failure graded nothing — the default badges
// ("NOT QUITE" / "MISSED") would claim a miss that never happened.
const SR_ERROR_BADGE: Partial<Record<Phase, { text: string; cls: string }>> = {
  'reveal-playing': { text: 'CONNECTION TROUBLE', cls: 'reveal' },
  'self-grade-listening': { text: 'NOT GRADED — say “got it” if you knew it', cls: 'reveal' },
};

export function SessionScreen() {
  const s = sessionState.value;
  const word = sessionWord.value;
  if (!s) return null;

  const badge = (s.srErrorReveal ? SR_ERROR_BADGE[s.phase] : undefined) ?? PHASE_BADGE[s.phase];
  const showAnswer = ['teach-playing', 'teach-listening', 'teach2-playing', 'teach2-listening', 'correct-playing', 'reveal-playing', 'self-grade-listening', 'self-grade-reprompt-playing'].includes(s.phase);
  const isQuizzing = s.phase === 'quiz-playing' || s.phase === 'quiz-listening' || s.phase === 'build-playing' || s.phase === 'build-listening' || s.phase === 'conj-playing' || s.phase === 'conj-listening';
  const clozing = s.phase === 'cloze-playing' || s.phase === 'cloze-listening';
  const shadowing = s.phase === 'shadow-playing' || s.phase === 'shadow-listening';
  // Teach part 2 plays the example sentence — show it while it's heard.
  const teaching2 = s.phase === 'teach2-playing' || s.phase === 'teach2-listening';
  const selfGrading = s.phase === 'reveal-playing' || s.phase === 'self-grade-listening' || s.phase === 'self-grade-reprompt-playing';
  // The sentence backing the current item (cloze source / rung-1 example).
  const item = s.queue[s.idx];
  const sentence = item?.sentenceId ? word?.sentences?.find((x) => x.id === item.sentenceId) : undefined;
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
      {s.srErrorReveal && selfGrading && <p class="hint">Couldn’t reach the server, so this one isn’t counted — it’ll come back.</p>}
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
            {/* Conjugation items lead with the MEANING cue ("didn't sleep"),
                not the grammar label — the label is the small line under it. */}
            <div class="word-en">
              {item?.conj && conjInfo.value?.cue
                ? `${conjInfo.value.cue}${conjInfo.value.register ? ` (${conjInfo.value.register})` : ''}`
                : word?.english ?? ''}
            </div>
            {item?.conj && conjInfo.value && (
              <div class="conj">
                <div class="conj-label">{conjInfo.value.label} · {word?.written[0] ?? word?.kana}</div>
                {(showAnswer || selfGrading) && (
                  <div class="conj-rule">
                    {conjInfo.value.meaning}
                    <br />
                    {conjInfo.value.rule}
                  </div>
                )}
              </div>
            )}
            {showAnswer && word && (item?.conj && conjInfo.value ? (
              <div class="word-ja">
                <div class="kana">{conjInfo.value.answerKana}</div>
                <div class="romaji">{conjInfo.value.answerRomaji}</div>
                {conjInfo.value.answerSurface !== conjInfo.value.answerKana && <div class="alts">{conjInfo.value.answerSurface}</div>}
              </div>
            ) : (
              <div class="word-ja">
                <div class="kana">{word.kana}</div>
                <div class="romaji">{word.romaji}</div>
                <div class="mora">{word.moraKana.join(' ・ ')}</div>
                {word.alts?.length ? (
                  <div class="alts">also: {word.alts.map((a) => `${a.kana} (${a.romaji})`).join(', ')}</div>
                ) : null}
              </div>
            ))}
            {isQuizzing && <div class="word-ja mystery">?</div>}
            {s.phase.endsWith('-listening') && !selfGrading && (
              <div class="listenviz">
                <span class="bars"><span></span><span></span><span></span><span></span><span></span></span>
                <span class="listenviz-caption">listening…</span>
              </div>
            )}
            {buildNote.value && <div class="recognized">{buildNote.value}</div>}
            {sentence && (clozing || shadowing || teaching2 || (showAnswer && item?.mode === 'cloze')) && (
              <div class="sentence">
                <div class="sentence-ja">{clozing ? sentence.textJa.replace(sentence.clozeSurface, '＿＿＿') : sentence.textJa}</div>
                {showAnswer && <div class="sentence-en">{sentence.textEn}</div>}
              </div>
            )}
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
          <input name="mock" placeholder={`mock ${mockPending.value.lang}${clozing ? ' cloze' : ''} (empty = timeout)`} autoFocus />
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
              {s.phase === 'correct-playing' && (
                <button class="ctl bad" onClick={() => tap('missed')}>
                  Missed it
                </button>
              )}
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
