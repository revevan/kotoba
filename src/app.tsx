import { useEffect } from 'preact/hooks';
import { auth, enteredApp, screen } from './state';
import { initApp } from './session/controller';
import { debugEnabled } from './debug/log';
import { DebugLog } from './ui/DebugLog';
import { Landing } from './ui/Landing';
import { HomeScreen } from './ui/HomeScreen';
import { SessionScreen } from './ui/SessionScreen';
import { SettingsScreen } from './ui/SettingsScreen';

export function App() {
  useEffect(() => {
    void initApp();
  }, []);

  // Show the landing page until the visitor signs in or chooses to continue as a guest.
  const showLanding = !auth.value && !enteredApp.value;

  const current = showLanding ? (
    <Landing />
  ) : screen.value === 'session' ? (
    <SessionScreen />
  ) : screen.value === 'settings' ? (
    <SettingsScreen />
  ) : (
    <HomeScreen />
  );

  return (
    <>
      {current}
      {debugEnabled && <DebugLog />}
    </>
  );
}
