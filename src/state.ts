import { signal } from '@preact/signals';
import type { MachineState } from './session/machine';
import type { DeckInfo, Word } from './types';

export type Screen = 'home' | 'session' | 'settings';

export const screen = signal<Screen>('home');

// Home data
export const deckIndex = signal<DeckInfo[]>([]);
export const enabledDeckIds = signal<string[]>(['n5-starter']);
export const dueCount = signal(0);
export const newAvailable = signal(0);
export const loadError = signal<string | null>(null);

// Settings
export const newPerSession = signal(5);
export const maxReviews = signal(30);
export const voiceEcho = signal(true);

// Live session
export const sessionState = signal<MachineState | null>(null);
export const sessionWord = signal<Word | undefined>(undefined);
export const prefetchProgress = signal<{ done: number; total: number } | null>(null);
