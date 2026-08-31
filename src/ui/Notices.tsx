import { useState } from 'preact/hooks';
import { applyUpdate, updateReady } from '../platform/swUpdate';
import { latestUnseen, markSeen } from '../changelog';

/** Home-screen notice cards: pending app update + the "what's new" changelog.
 *  One shared surface so release notes and the update prompt read as one thing. */
export function Notices() {
  const [entry, setEntry] = useState(latestUnseen);

  return (
    <>
      {updateReady.value && (
        <div class="notice">
          <p>A new version of Kotoba is ready.</p>
          <div class="notice-actions">
            <button onClick={applyUpdate}>Restart now</button>
          </div>
        </div>
      )}
      {entry && (
        <div class="notice">
          <p class="notice-title">{entry.title}</p>
          <ul>
            {entry.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div class="notice-actions">
            <button
              class="ghost"
              onClick={() => {
                markSeen(entry.id);
                setEntry(null);
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
