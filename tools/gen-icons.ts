// Generates simple solid PWA icons (no image libraries: raw PNG encoding).
// Run once: npx tsx tools/gen-icons.ts

import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const iconsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'icons');

function crc32(buf: Buffer): number {
  let c = ~0;
  for (const byte of buf) {
    c ^= byte;
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Solid indigo tile with a centered lighter diamond. */
function png(size: number): Buffer {
  const bg = [0x10, 0x10, 0x1a];
  const fg = [0x7c, 0x6c, 0xff];
  const raw = Buffer.alloc(size * (1 + size * 4));
  const c = size / 2;
  const r = size * 0.32;
  for (let y = 0; y < size; y++) {
    const rowStart = y * (1 + size * 4);
    raw[rowStart] = 0; // no filter
    for (let x = 0; x < size; x++) {
      const inDiamond = Math.abs(x - c) + Math.abs(y - c) <= r;
      const [cr, cg, cb] = inDiamond ? fg : bg;
      const o = rowStart + 1 + x * 4;
      raw[o] = cr;
      raw[o + 1] = cg;
      raw[o + 2] = cb;
      raw[o + 3] = 255;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(iconsDir, { recursive: true });
for (const size of [192, 512]) {
  writeFileSync(join(iconsDir, `icon-${size}.png`), png(size));
  console.log(`icon-${size}.png`);
}
