import { render } from 'preact';
import { ReviewApp } from './ReviewApp';
import '../styles.css';
import './review.css';

render(<ReviewApp />, document.getElementById('app')!);
