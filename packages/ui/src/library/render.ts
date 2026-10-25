/**
 * Render contoh pustaka komponen. Dipakai bersama oleh preview HTML dan Storybook.
 *
 * Setiap contoh dibungkus frame demo. Wrapper memakai `transform` agar elemen
 * `fixed` (navbar, sidebar, bottom navigation) tetap berada di dalam frame.
 * Pengecualian: modal dan drawer (backdrop-nya ada di <body>).
 */
import type { LibraryExample, LibraryPage, LibrarySection } from "./types";

const label = "text-micro font-semibold uppercase tracking-wider text-fg-subtle";

/** Modal menempelkan backdrop ke <body>; tanpa konteks transform agar modal tetap berada di atas backdrop. */
const overlayMarkup = /data-modal-(target|toggle|show|hide)/;
/**
 * Drawer/sidebar (data-drawer-*) memakai posisi `fixed`, jadi HARUS dikurung dalam bingkai (transform).
 * Bingkainya diberi z-index agar tetap terang di atas backdrop saat drawer dibuka.
 */
const drawerMarkup = /data-drawer-(target|toggle|show|hide)/;

/**
 * Contoh "layout penuh" (sidebar, navbar tetap, drawer): memakai posisi `fixed` dan tinggi layar, dirancang
 * untuk iframe. Di sini dikurung dalam bingkai ber-tinggi tetap, tanpa padding dan tanpa scrollbar; `h-screen`
 * diperlakukan sebagai 100% tinggi bingkai (lihat `.ord-demo` di styles.css).
 */
/**
 * Ada elemen `fixed` yang TERLIHAT di awal? (bukan panel tersembunyi seperti drawer off-canvas
 * `-translate-x-full` tanpa `sm:translate-x-0`). Hanya contoh seperti itu yang diperlakukan sebagai layout penuh.
 */
function hasVisibleFixed(html: string): boolean {
  for (const m of html.matchAll(/class="([^"]*)"/g)) {
    const cls = m[1] ?? "";
    if (!/(^|\s)fixed(\s|$)/.test(cls)) continue;
    const hiddenOffscreen = /(^|\s)-translate-x-full(\s|$)/.test(cls) && !/(sm|md|lg|xl):translate-x-0/.test(cls);
    if (!hiddenOffscreen && !/(^|\s)hidden(\s|$)/.test(cls)) return true;
  }
  return false;
}

export function renderLibraryExample(ex: LibraryExample): string {
  const overlay = overlayMarkup.test(ex.html);
  const layout = !overlay && !!ex.iframeHeight && hasVisibleFixed(ex.html);
  const height = ex.iframeHeight ? `height:${ex.iframeHeight}px;` : "";
  const maxHeight = ex.iframeMaxHeight ? `max-height:${ex.iframeMaxHeight}px;` : "";
  const scroll = layout ? "overflow:hidden;" : (height || maxHeight) && !overlay ? "overflow:auto;" : "";
  const contain = overlay ? "" : "transform:translateZ(0);";
  const raise = !overlay && drawerMarkup.test(ex.html) ? "z-index:50;" : "";
  const pad = layout ? "h-full" : "p-6";
  // Layout penuh yang lebih tinggi dari bingkai: pudarkan tepi bawah agar terpotongnya terlihat disengaja.
  const fade = layout ? "mask-image:linear-gradient(to bottom,#000 calc(100% - 56px),transparent);" : "";
  return `<div class="relative overflow-hidden rounded-card border border-border/70 bg-surface">
    <div class="ord-demo relative bg-neutral-primary ${ex.bodyClass ?? ""}" style="${contain}${raise}${height}${maxHeight}${scroll}${fade}">
      <div class="${pad} ${ex.class ?? ""}">${ex.html}</div>
      ${ex.javascript ? `<script type="text/plain" data-ordinara-js>${ex.javascript.replace(/<\/script/gi, "<\\/script")}</script>` : ""}
    </div>
  </div>`;
}

export function renderLibrarySection(section: LibrarySection): string {
  return `<div class="space-y-4">${section.examples.map(renderLibraryExample).join("")}</div>`;
}

export function renderLibraryPage(page: LibraryPage): string {
  const body = page.sections
    .map(
      (s, i) => `<section id="s-${i}" class="space-y-3 scroll-mt-20">
        <h2 class="font-display ${s.level <= 2 ? "text-xl" : "text-base"} font-bold tracking-tight text-fg">${s.title}</h2>
        ${s.description ? `<p class="max-w-3xl text-sm text-fg-muted">${s.description}</p>` : ""}
        ${renderLibrarySection(s)}
      </section>`,
    )
    .join("");
  return `<div class="space-y-10">${body}</div>`;
}

export { label as libraryLabelClass };
