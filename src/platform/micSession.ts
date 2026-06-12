import { dlog } from '../debug/log';

// One capture stream held for the whole session. iOS Safari's speech service
// stops delivering audio to recognitions after the first one once clip
// playback has flipped the audio session back to playback-only in between;
// pinning an open mic stream keeps the session in play-and-record throughout.
// (Re-opening the mic per listen is not enough — verified on device.)

let stream: MediaStream | null = null;

/** Call from the session-start tap handler (also surfaces the permission prompt). */
export async function openMicSession(): Promise<boolean> {
  closeMicSession();
  try {
    if (!navigator.mediaDevices?.getUserMedia) return false;
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    for (const track of stream.getAudioTracks()) {
      track.onmute = () => dlog('mic', 'track muted');
      track.onunmute = () => dlog('mic', 'track unmuted');
      track.onended = () => dlog('mic', 'track ended');
    }
    return true;
  } catch (e) {
    dlog('mic', `open failed: ${e}`);
    stream = null;
    return false;
  }
}

/** Mic track state for diagnostics: e.g. "live", "live muted", "closed". */
export function micState(): string {
  const t = stream?.getAudioTracks()[0];
  if (!t) return 'closed';
  return `${t.readyState}${t.muted ? ' muted' : ''}${t.enabled ? '' : ' disabled'}`;
}

export function closeMicSession(): void {
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
}
