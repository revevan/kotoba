import { useRef, useState } from 'preact/hooks';
import { maxReviews, newPerSession, screen, voiceEcho } from '../state';
import { updateSetting } from '../session/controller';
import { downloadBackup, importBackup } from '../data/backup';
import { loadHomeData } from '../session/controller';

export function SettingsScreen() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');

  const onImport = async (file: File) => {
    try {
      const res = await importBackup(await file.text());
      setMsg(`Imported ${res.cards} cards`);
      await loadHomeData();
    } catch (e) {
      setMsg(`Import failed: ${e instanceof Error ? e.message : e}`);
    }
  };

  return (
    <div class="screen settings">
      <header>
        <button class="ghost" onClick={() => (screen.value = 'home')}>
          ← Back
        </button>
        <h1>Settings</h1>
      </header>

      <label class="row">
        <span>New words per session</span>
        <input
          type="number"
          min={0}
          max={20}
          value={newPerSession.value}
          onChange={(e) => void updateSetting('newPerSession', Number((e.currentTarget as HTMLInputElement).value))}
        />
      </label>

      <label class="row">
        <span>Max reviews per session</span>
        <input
          type="number"
          min={5}
          max={200}
          value={maxReviews.value}
          onChange={(e) => void updateSetting('maxReviews', Number((e.currentTarget as HTMLInputElement).value))}
        />
      </label>

      <label class="row">
        <span>Listen for my echo after teaching</span>
        <input
          type="checkbox"
          checked={voiceEcho.value}
          onChange={(e) => void updateSetting('voiceEcho', (e.currentTarget as HTMLInputElement).checked)}
        />
      </label>

      <div class="row buttons">
        <button onClick={() => void downloadBackup()}>Export progress</button>
        <button onClick={() => fileRef.current?.click()}>Import backup</button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          style="display:none"
          onChange={(e) => {
            const f = (e.currentTarget as HTMLInputElement).files?.[0];
            if (f) void onImport(f);
          }}
        />
      </div>
      {msg && <p class="hint">{msg}</p>}
    </div>
  );
}
