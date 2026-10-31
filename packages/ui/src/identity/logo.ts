/**
 * Logo Ordinara: tiga batang yang naik berurutan (1 · 2 · 3) di dalam ubin membulat.
 * Batang ketiga paling terang = urutan yang selesai.
 */

export type LogoTone = "brand" | "mono" | "inverse";

export interface LogoMarkOptions {
  /** Ukuran sisi dalam px (default 32). */
  size?: number;
  /** brand = ubin biru + batang putih; mono = mengikuti currentColor; inverse = ubin putih. */
  tone?: LogoTone;
  class?: string;
}

let uid = 0;

export function logoMark({ size = 32, tone = "brand", class: cls = "" }: LogoMarkOptions = {}): string {
  const id = `ord-g-${++uid}`;
  const tile =
    tone === "brand"
      ? `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d74eb"/><stop offset="1" stop-color="#1950c8"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#${id})"/>`
      : tone === "inverse"
        ? `<rect width="32" height="32" rx="9" fill="#ffffff"/>`
        : "";
  const bar = tone === "mono" ? "currentColor" : tone === "inverse" ? "#2361e7" : "#ffffff";
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32" class="shrink-0${cls ? " " + cls : ""}" role="img" aria-label="Ordinara">` +
    tile +
    `<rect x="7.5" y="15" width="5" height="9" rx="2.5" fill="${bar}" opacity="0.5"/>` +
    `<rect x="13.5" y="10" width="5" height="14" rx="2.5" fill="${bar}" opacity="0.75"/>` +
    `<rect x="19.5" y="5" width="5" height="19" rx="2.5" fill="${bar}"/>` +
    `</svg>`
  );
}

/** Logo + nama. */
export function logoWordmark({ size = 32, tone = "brand", class: cls = "" }: LogoMarkOptions = {}): string {
  return `<span class="inline-flex items-center gap-2.5${cls ? " " + cls : ""}">${logoMark({ size, tone })}<span class="font-display font-extrabold tracking-tight" style="font-size:${Math.round(size * 0.72)}px;line-height:1">Ordinara</span></span>`;
}

/** Data URI untuk favicon / gambar. */
export function logoDataUri(): string {
  const svg = logoMark({ size: 32 }).replace(' class="shrink-0"', "");
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
