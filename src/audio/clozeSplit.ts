import type { Sentence } from '../types';

/**
 * Split a sentence into the audio before and after the gapped target word.
 *
 * Single source of truth for which sen-pre/sen-post clips exist: gen-audio
 * only synthesizes the non-empty halves, so playback must gate on this exact
 * split — an empty half has no clip, and requesting it is a guaranteed 404
 * (1,741 sentences start with their cloze target).
 */
export function splitAtCloze(s: Sentence): { pre: string; post: string } | null {
  // Prefer the speak override so pre/post keep its pitch fixes; fall back to
  // textJa when the override rewrote the cloze surface itself (then the target
  // word isn't in pre/post anyway — the beep replaces it).
  const src = s.speak?.includes(s.clozeSurface) ? s.speak : s.textJa;
  const i = src.indexOf(s.clozeSurface);
  if (i < 0) return null;
  return { pre: src.slice(0, i).trim(), post: src.slice(i + s.clozeSurface.length).trim() };
}
