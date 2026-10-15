/**
 * Render contoh pustaka komponen. Dipakai bersama oleh preview HTML dan Storybook.
 *
 * Setiap contoh dibungkus frame demo. Wrapper memakai `transform` agar elemen
 * `fixed` (navbar, sidebar, bottom navigation) tetap berada di dalam frame.
 * Pengecualian: modal dan drawer (backdrop-nya ada di <body>).
 */
import type { LibraryExample, LibraryPage, LibrarySection } from "./types";

const label = "text-micro font-semibold uppercase tracking-wider text-fg-subtle";

/** Modal/drawer menempelkan backdrop ke <body>; tanpa konteks transform agar tetap berada di atas backdrop. */
const overlayMarkup = /data-(modal|drawer)-(target|toggle|show|hide)/;

export function renderLibraryExample(ex: LibraryExample): string {
  const overlay = overlayMarkup.test(ex.html);
  const height = ex.iframeHeight ? `height:${ex.iframeHeight}px;` : "";
  const maxHeight = ex.iframeMaxHeight ? `max-height:${ex.iframeMaxHeight}px;` : "";
  const scroll = (height || maxHeight) && !overlay ? "overflow:auto;" : "";
  const contain = overlay ? "" : "transform:translateZ(0);";
  return `<div class="relative overflow-hidden rounded-card border border-border/70 bg-surface">
    <div class="relative bg-neutral-primary ${ex.bodyClass ?? ""}" style="${contain}${height}${maxHeight}${scroll}">
      <div class="p-6 ${ex.class ?? ""}">${ex.html}</div>
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
