import { signal } from '@preact/signals';
import type { ListenFn, ListenOptions, SRResult } from './recognizer';

/** `?mock=1` dev mode: recognition resolves from a text box instead of the mic. */
export const mockMode = typeof location !== 'undefined' && new URLSearchParams(location.search).has('mock');

export const mockPending = signal<ListenOptions | null>(null);

let resolver: ((r: SRResult) => void) | null = null;

export const mockListen: ListenFn = (opts) => {
  resolver?.({ kind: 'aborted' });
  mockPending.value = opts;
  return new Promise<SRResult>((resolve) => {
    resolver = resolve;
  });
};

export function mockSubmit(text: string): void {
  const r = resolver;
  resolver = null;
  mockPending.value = null;
  if (!r) return;
  if (text.trim() === '') r({ kind: 'timeout' });
  else r({ kind: 'result', alternatives: [text.trim()] });
}

export function mockAbort(): void {
  const r = resolver;
  resolver = null;
  mockPending.value = null;
  r?.({ kind: 'aborted' });
}
