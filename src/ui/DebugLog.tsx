import { useState } from 'preact/hooks';
import { clearLog, formatLog, logEntries } from '../debug/log';

/** Collapsible diagnostics panel, shown only with ?debug=1. */
export function DebugLog() {
  const [open, setOpen] = useState(false);
  const entries = logEntries.value;

  const copy = () => {
    void navigator.clipboard?.writeText(formatLog(entries)).catch(() => {});
  };

  return (
    <div class={`debuglog ${open ? 'open' : ''}`}>
      <div class="debuglog-bar">
        <button onClick={() => setOpen(!open)}>{open ? '▼' : '▲'} log ({entries.length})</button>
        {open && (
          <>
            <button onClick={copy}>copy</button>
            <button onClick={clearLog}>clear</button>
          </>
        )}
      </div>
      {open && (
        <pre class="debuglog-body">
          {entries.slice(-100).map((e) => `${new Date(e.t).toISOString().slice(11, 23)} [${e.tag}] ${e.msg}`).join('\n')}
        </pre>
      )}
    </div>
  );
}
