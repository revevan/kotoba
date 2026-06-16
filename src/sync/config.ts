// URL of the Kotoba API (passwordless login + progress sync). Injected at build
// time (VITE_API_ENDPOINT); empty when no backend is deployed, in which case
// the app runs fully local-only with no sign-in.
const raw = (import.meta.env.VITE_API_ENDPOINT as string | undefined) ?? '';

export const apiEndpoint = raw.trim().replace(/\/$/, '');
export const cloudSyncEnabled = apiEndpoint.length > 0;
