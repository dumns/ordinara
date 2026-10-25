/** Frame: jendela mockup (tiga titik, judul mono, tab pill) untuk membingkai preview/produk. */
export interface FrameProps {
  /** Judul di title bar (monospace), mis. "ordinara://preview". */
  title: string;
  tabs?: string[];
  activeTab?: number;
  /** Isi (HTML). */
  body: string;
}

export function frame({ title, tabs = [], activeTab = 0, body }: FrameProps): string {
  const tabsHtml = tabs.length
    ? `<div class="ms-auto hidden gap-1 sm:flex">${tabs
        .map(
          (t, i) =>
            `<span class="rounded-full px-3 py-1 text-xs font-medium ${
              i === activeTab ? "bg-primary-50 text-primary-700" : "text-fg-muted"
            }">${t}</span>`,
        )
        .join("")}</div>`
    : "";
  return `<div class="overflow-hidden rounded-card border border-border/70 bg-surface shadow-card">
    <div class="flex items-center gap-3 border-b border-border/70 bg-neutral-50 px-4 py-3">
      <span class="flex gap-1.5" aria-hidden="true"><i class="size-3 rounded-full bg-danger-500"></i><i class="size-3 rounded-full bg-warning-400"></i><i class="size-3 rounded-full bg-success-500"></i></span>
      <span class="truncate font-mono text-micro text-fg-muted">${title}</span>${tabsHtml}
    </div>
    <div class="p-6">${body}</div>
  </div>`;
}
