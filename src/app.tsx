import { useEffect } from 'preact/hooks';
import { screen } from './state';
import { initApp } from './session/controller';
import { debugEnabled } from './debug/log';
import { DebugLog } from './ui/DebugLog';
import { HomeScreen } from './ui/HomeScreen';
import { SessionScreen } from './ui/SessionScreen';
import { SettingsScreen } from './ui/SettingsScreen';

export function App() {
  useEffect(() => {
    void initApp();
  }, []);

  const current =
    screen.value === 'session' ? <SessionScreen /> : screen.value === 'settings' ? <SettingsScreen /> : <HomeScreen />;

  return (
    <>
      {current}
      {debugEnabled && <DebugLog />}
    </>
  );
}
