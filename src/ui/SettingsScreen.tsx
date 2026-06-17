import { useRef, useState } from 'preact/hooks';
import { auth, enteredApp, maxReviews, newPerSession, screen, syncStatus, voiceEcho } from '../state';
import { resetProgress, updateSetting } from '../session/controller';
import { downloadBackup, importBackup } from '../data/backup';
import { loadHomeData } from '../session/controller';
import { syncPush } from '../sync/sync';
import { cloudSyncEnabled } from '../sync/config';
import { logout } from '../sync/client';

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

  const signOut = async () => {
    const a = auth.value;
    auth.value = null;
    if (a) await logout(a.token);
    screen.value = 'home';
  };

  const onReset = async () => {
    const scope = auth.value ? 'this device and your account' : 'this device';
    if (!window.confirm(`Erase all study progress on ${scope}? Your due and new-word counts go back to zero. This can't be undone.`)) {
      return;
    }
    setMsg('Resetting…');
    try {
      await resetProgress();
      setMsg('Progress reset.');
    } catch (e) {
      setMsg(`Reset failed: ${e instanceof Error ? e.message : e}`);
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

      {cloudSyncEnabled && (
        <div class="account">
          {auth.value ? (
            <>
              <p class="hint">
                Signed in as <strong>{auth.value.email}</strong> · sync {syncStatus.value}
              </p>
              <div class="row buttons">
                <button onClick={() => void syncPush()}>Sync now</button>
                <button onClick={() => void signOut()}>Sign out</button>
              </div>
            </>
          ) : (
            <div class="row buttons">
              <button
                onClick={() => {
                  enteredApp.value = false; // return to the landing/sign-in screen
                }}
              >
                Sign in to sync across devices
              </button>
            </div>
          )}
        </div>
      )}

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
      <div class="row buttons">
        <button class="danger" onClick={() => void onReset()}>
          Reset all progress
        </button>
      </div>
      {msg && <p class="hint">{msg}</p>}
    </div>
  );
}
