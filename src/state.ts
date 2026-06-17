import { effect, signal } from '@preact/signals';
import type { MachineState } from './session/machine';
import type { DeckInfo, Word } from './types';
import { loadAuth, persistAuth, type Auth } from './sync/client';

export type Screen = 'home' | 'session' | 'settings';

export const screen = signal<Screen>('home');

// Account / sync
export const auth = signal<Auth | null>(loadAuth());
effect(() => persistAuth(auth.value)); // keep localStorage in sync with the signal
/** Set when a guest chooses to use the app without an account. */
export const enteredApp = signal(false);
export const syncStatus = signal<'idle' | 'syncing' | 'done' | 'error'>('idle');

// Home data
export const deckIndex = signal<DeckInfo[]>([]);
export const enabledDeckIds = signal<string[]>(['n5-starter']);
export const dueCount = signal(0);
export const newAvailable = signal(0);
export const loadError = signal<string | null>(null);

// Settings
export const newPerDay = signal(5); // cap on new words introduced per calendar day
export const maxReviews = signal(30); // cap on reviews per session
export const voiceEcho = signal(true);

// Live session
export const sessionState = signal<MachineState | null>(null);
export const sessionWord = signal<Word | undefined>(undefined);
export const prefetchProgress = signal<{ done: number; total: number } | null>(null);
