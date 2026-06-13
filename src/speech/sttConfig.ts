// URL of the STT proxy that holds the cloud speech-to-text API key. Injected
// at build time (VITE_STT_ENDPOINT); empty in dev / when no proxy is deployed,
// in which case the app falls back to the built-in Web Speech recognizer.
const raw = (import.meta.env.VITE_STT_ENDPOINT as string | undefined) ?? '';

export const sttEndpoint = raw.trim();
export const cloudSttEnabled = sttEndpoint.length > 0;
