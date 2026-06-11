import { render } from 'preact';
import { App } from './app';
import './styles.css';

if ('serviceWorker' in navigator) {
  import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true })).catch(() => {});
}

render(<App />, document.getElementById('app')!);
