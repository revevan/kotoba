/**
 * Prompt for mic permission inside the start gesture so the first real
 * recognition doesn't stall mid-drive waiting for a permission dialog.
 */
export async function warmupMic(): Promise<boolean> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach((t) => t.stop());
    return true;
  } catch {
    return false;
  }
}
