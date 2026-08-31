import { render } from 'preact';
import { App } from './app';
import { initSW } from './platform/swUpdate';
import './styles.css';

initSW();

render(<App />, document.getElementById('app')!);
