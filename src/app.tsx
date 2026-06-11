import { useEffect } from 'preact/hooks';
import { screen } from './state';
import { initApp } from './session/controller';
import { HomeScreen } from './ui/HomeScreen';
import { SessionScreen } from './ui/SessionScreen';
import { SettingsScreen } from './ui/SettingsScreen';

export function App() {
  useEffect(() => {
    void initApp();
  }, []);

  switch (screen.value) {
    case 'session':
      return <SessionScreen />;
    case 'settings':
      return <SettingsScreen />;
    default:
      return <HomeScreen />;
  }
}
