/**
 * Halaman dokumentasi Foundation. Dipakai bersama oleh Storybook dan preview
 * HTML supaya keduanya sinkron. Semua warna diambil dari token (CSS var).
 */
import { badge, badgeTones } from "../components/badge/badge";
import { button } from "../components/button/button";
import { oriNames } from "@dumns/ordinara-icons/names";
import { icon, iconNames } from "./icons";
import { renderIdentity } from "./identity";

const label = "text-micro font-semibold uppercase tracking-wider text-fg-subtle";
const card = "rounded-card border border-border/70 bg-surface p-4 shadow-card";

const swatch = (token: string) =>
  `<div class="space-y-1.5">
    <div class="h-12 rounded-control border border-border" style="background:var(--${token})"></div>
    <div class="text-micro leading-4 text-fg-muted">${token.replace("color-", "")}</div>
  </div>`;

const STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
const scale = (name: string) =>
  `<section class="space-y-3"><h3 class="${label}">${name}</h3><div class="grid grid-cols-6 gap-3 sm:grid-cols-11">${STEPS.map((s) => swatch(`color-${name}-${s}`)).join("")}</div></section>`;

export function renderColors(): string {
  const semantic = ["background", "surface", "fg", "fg-muted", "fg-subtle", "border", "border-subtle", "ring"];
  // Alias semantic memakai inline theme (tidak ada CSS var sendiri), jadi rujuk skala dasarnya.
  const semanticVar: Record<string, string> = {
    background: "color-neutral-50",
    surface: "color-surface",
    fg: "color-neutral-900",
    "fg-muted": "color-neutral-500",
    "fg-subtle": "color-neutral-400",
    border: "color-neutral-200",
    "border-subtle": "color-neutral-100",
    ring: "color-primary-500",
  };
  return `<div class="space-y-8">
    ${["primary", "secondary", "neutral", "success", "warning", "danger", "info"].map(scale).join("")}
    <section class="space-y-3"><h3 class="${label}">Semantic (berganti per tema)</h3>
      <div class="grid grid-cols-4 gap-3 sm:grid-cols-8">${semantic
        .map((t) => `<div class="space-y-1.5"><div class="h-12 rounded-control border border-border" style="background:var(--${semanticVar[t]})"></div><div class="text-micro leading-4 text-fg-muted">${t}</div></div>`)
        .join("")}</div>
    </section>
    <section class="space-y-3"><h3 class="${label}">Gradient</h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div class="h-16 rounded-card bg-brand-gradient"></div>
        <div class="h-16 rounded-card border border-border bg-brand-gradient-soft"></div>
      </div>
    </section>
  </div>`;
}

export function renderTypography(): string {
  const rows: [string, string, string][] = [
    ["4xl", "text-4xl font-extrabold tracking-tight", "Display 4xl · 36/40"],
    ["3xl", "text-3xl font-bold", "Heading 3xl · 30/36"],
    ["2xl", "text-2xl font-bold", "Heading 2xl · 24/32"],
    ["xl", "text-xl font-bold", "Heading xl · 20/28"],
    ["lg", "text-lg font-bold", "Card title lg · 18/28"],
    ["btn-lg", "text-btn-lg font-semibold", "Tombol besar · 15px"],
    ["base", "text-base", "Body base · 16/24"],
    ["sm", "text-sm", "Body sm · 14/20 — ukuran default UI"],
    ["xs", "text-xs", "Caption xs · 12/16"],
    ["micro", "text-micro font-semibold uppercase tracking-wider", "Label micro · 11px"],
  ];
  return `<div class="${card} divide-y divide-border/70">${rows
    .map(
      ([n, cls, sample]) =>
        `<div class="flex items-baseline gap-4 py-3"><span class="w-16 shrink-0 text-xs text-fg-muted">${n}</span><span class="${cls}">${sample}</span></div>`,
    )
    .join("")}
    <div class="flex items-baseline gap-4 py-3"><span class="w-16 shrink-0 text-xs text-fg-muted">weight</span><span class="text-lg">Regular 400 · <span class="font-medium">Medium 500</span> · <span class="font-semibold">Semibold 600</span> · <span class="font-bold">Bold 700</span></span></div>
    <div class="flex items-baseline gap-4 py-3"><span class="w-16 shrink-0 text-xs text-fg-muted">mono</span><span dir="ltr" class="font-mono text-sm">const ordinara = "design system";</span></div>
  </div>`;
}

export function renderShape(): string {
  const radius: [string, string][] = [
    ["sm", "rounded-sm"], ["md", "rounded-md"], ["lg", "rounded-lg"], ["control (xl)", "rounded-control"],
    ["card (2xl)", "rounded-card"], ["frame (3xl)", "rounded-frame"], ["check", "rounded-check"], ["full", "rounded-full"],
  ];
  const shadow: [string, string][] = [
    ["sm", "shadow-sm"], ["card", "shadow-card"], ["card-lg", "shadow-card-lg"], ["glow-primary", "shadow-glow-primary"],
  ];
  const space = [1, 2, 3, 4, 6, 8, 12, 16];
  const z: [string, number][] = [["dropdown", 20], ["sticky", 30], ["overlay", 40], ["toast", 50]];
  return `<div class="space-y-8">
    <section class="space-y-3"><h3 class="${label}">Radius</h3><div class="flex flex-wrap gap-4">${radius
      .map(([n, c]) => `<div class="space-y-1.5 text-center"><div class="size-16 border border-primary-300 bg-primary-50 ${c}"></div><div class="text-micro text-fg-muted">${n}</div></div>`)
      .join("")}</div></section>
    <section class="space-y-3"><h3 class="${label}">Shadow</h3><div class="flex flex-wrap gap-6">${shadow
      .map(([n, c]) => `<div class="space-y-2 text-center"><div class="size-24 rounded-card bg-surface ${c}"></div><div class="text-micro text-fg-muted">${n}</div></div>`)
      .join("")}</div></section>
    <section class="space-y-3"><h3 class="${label}">Spacing (grid 4px)</h3><div class="space-y-1.5">${space
      .map((s) => `<div class="flex items-center gap-3 text-micro text-fg-muted"><span class="w-14">${s} · ${s * 4}px</span><div class="h-3 rounded-sm bg-primary-600" style="width:calc(var(--spacing) * ${s})"></div></div>`)
      .join("")}</div></section>
    <section class="space-y-3"><h3 class="${label}">Layering (z-index)</h3><div class="${card} flex flex-wrap gap-2 text-xs">${z
      .map(([n, v]) => `<span class="rounded-md border border-border bg-neutral-50 px-2 py-1">z-${n} <span class="text-fg-muted">${v}</span></span>`)
      .join("")}</div></section>
  </div>`;
}

export function renderMotion(): string {
  const dur: [string, string][] = [["fast · 150ms", "duration-fast"], ["normal · 200ms", "duration-normal"]];
  return `<div class="space-y-4">
    <p class="text-sm text-fg-muted">Arahkan kursor ke kotak. Semua transisi menjadi ~0 saat <code class="font-mono">prefers-reduced-motion: reduce</code>.</p>
    <div class="flex flex-wrap gap-6">${dur
      .map(([n, c]) => `<div class="space-y-2 text-center"><div class="size-20 rounded-card bg-primary-600 transition-transform ${c} ease-out-soft hover:translate-y-2 hover:scale-95"></div><div class="text-micro text-fg-muted">${n}</div></div>`)
      .join("")}
      <div class="space-y-2 text-center"><div class="size-20 rounded-card bg-info-600 motion-safe:animate-fade-in"></div><div class="text-micro text-fg-muted">animate-fade-in</div></div>
      <div class="space-y-2 text-center"><div class="size-20 rounded-card bg-success-600 motion-safe:animate-flag-in"></div><div class="text-micro text-fg-muted">animate-flag-in</div></div>
      <div class="space-y-2 text-center"><div class="grid size-20 place-items-center"><span class="size-6 animate-spin-slow rounded-full border-2 border-primary-600 border-r-transparent"></span></div><div class="text-micro text-fg-muted">animate-spin-slow</div></div>
    </div>
  </div>`;
}

const codeBlock =
  "overflow-x-auto rounded-control border border-border/70 bg-neutral-900 p-4 font-mono text-xs leading-6 text-neutral-100";

const oriWeights = [
  ["ori", "regular"],
  ["ori-bold", "bold"],
  ["ori-fill", "fill"],
] as const;
const oriSizes = [16, 20, 24, 32, 40];
const oriCopy =
  "navigator.clipboard&&navigator.clipboard.writeText(this.dataset.ori);const l=this.querySelector('[data-label]');if(l){const t=l.textContent;l.textContent='Disalin';setTimeout(()=>l.textContent=t,900)}";
const oriFilter =
  "const q=this.value.trim().toLowerCase();this.closest('section').querySelectorAll('[data-ori]').forEach(e=>e.hidden=!!q&&!e.dataset.ori.includes(q))";

export function renderIcons(): string {
  const weightRow = oriWeights
    .map(
      ([c, w]) =>
        `<span class="flex items-center gap-2 text-sm"><i class="${c} ori-smiley text-2xl"></i>${w}<code class="font-mono text-micro text-fg-subtle">${c} ori-smiley</code></span>`,
    )
    .join("");
  const sizeRow = oriSizes
    .map(
      (n) =>
        `<span class="flex flex-col items-center gap-2"><i class="ori ori-star text-primary-600" style="font-size:${n}px"></i><span class="text-micro text-fg-subtle">${n}px</span></span>`,
    )
    .join("");
  const catalog = oriNames
    .map(
      (n) =>
        `<button type="button" data-ori="${n}" onclick="${oriCopy}" title="Salin ori-${n}" class="flex flex-col items-center gap-2 rounded-control border border-border/70 bg-surface p-3 text-fg hover:border-primary-300 hover:bg-primary-50"><i class="ori ori-${n} text-2xl"></i><span data-label class="w-full text-center text-micro leading-4 text-fg-muted [overflow-wrap:anywhere]">${n}</span></button>`,
    )
    .join("");
  return `<div class="space-y-8">
    <section class="space-y-3"><h3 class="${label}">Pakai class (ori)</h3>
      <p class="max-w-3xl text-sm text-fg-muted">Ikon dipanggil lewat class, seperti font ikon pada umumnya: <code class="font-mono">ori</code> + <code class="font-mono">ori-nama</code>. Ukuran mengikuti <code class="font-mono">font-size</code> dan warna mengikuti <code class="font-mono">color</code>. Ikon berarah dicerminkan otomatis pada <code class="font-mono">dir="rtl"</code>.</p>
      <div class="${card} flex flex-wrap items-center gap-6 text-fg">${weightRow}</div>
      <div class="${card} flex flex-wrap items-end gap-6 text-fg">${sizeRow}</div>
    </section>
    <section class="space-y-3"><h3 class="${label}">Dua jalur, nama class sama</h3>
      <div class="grid gap-3 lg:grid-cols-2 [&>*]:min-w-0">
        <div class="space-y-2"><div class="text-sm font-semibold">CSS mask: ringan, hanya ikon terdaftar</div>
          <pre class="${codeBlock} max-w-full">/* semua bobot */
import "@dumns/ordinara-icons/mask.css";

/* satu bobot saja (~31 kB gzip) */
import "@dumns/ordinara-icons/mask/base.css";
import "@dumns/ordinara-icons/mask/regular.css";</pre></div>
        <div class="space-y-2"><div class="text-sm font-semibold">Font: seluruh ikon (1.512), dimuat saat dipakai</div>
          <pre class="${codeBlock} max-w-full">/* build sekali: npm run build:font -w @dumns/ordinara-icons */
import "@dumns/ordinara-icons/font.css";</pre></div>
      </div>
      <pre class="${codeBlock} max-w-full">&lt;i class="ori ori-smiley"&gt;&lt;/i&gt;
&lt;i class="ori-bold ori-smiley"&gt;&lt;/i&gt;
&lt;i class="ori-fill ori-smiley text-primary-600 text-2xl"&gt;&lt;/i&gt;</pre>
    </section>
    <section class="space-y-3"><h3 class="${label}">Katalog class (${oriNames.length})</h3>
      <input type="search" placeholder="Cari ikon..." aria-label="Cari ikon" oninput="${oriFilter}" class="block h-10 w-full max-w-sm rounded-control border border-border bg-surface px-3.5 text-sm text-fg outline-none placeholder:text-fg-subtle focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20" />
      <div class="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">${catalog}</div>
    </section>
    <section class="space-y-3"><h3 class="${label}">Helper icon() (TypeScript)</h3>
      <p class="max-w-3xl text-sm text-fg-muted">Untuk markup yang dibuat dari kode: menghasilkan SVG inline, tanpa CSS tambahan.</p>
      <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">${iconNames
        .map(
          (n) =>
            `<div class="flex flex-col items-center gap-2 rounded-control border border-border/70 bg-surface p-3 text-fg">${icon({ name: n })}<span class="max-w-full truncate text-micro text-fg-muted">${n}</span></div>`,
        )
        .join("")}</div>
    </section>
  </div>`;
}

export function renderTheming(): string {
  const themes = ["default", "violet", "emerald"];
  const box = (t: string, dark: boolean) =>
    `<div ${t === "default" ? "" : `data-theme="${t}"`} class="${dark ? "dark " : ""}rounded-card border border-border/70 bg-surface p-4 text-fg">
      <div class="mb-3 text-micro font-semibold uppercase tracking-wider text-fg-subtle">${t} · ${dark ? "dark" : "light"}</div>
      <div class="flex flex-wrap items-center gap-2">${button({ label: "Primary", size: "sm" })}${button({ label: "Secondary", variant: "secondary", size: "sm" })}${button({ label: "Outline", variant: "outline", size: "sm" })}${badge({ label: "Badge", tone: "primary" })}</div>
    </div>`;
  return `<div class="grid gap-3 md:grid-cols-2">${themes.map((t) => box(t, false) + box(t, true)).join("")}</div>
    <p class="mt-3 text-sm text-fg-muted">Pasang <code class="font-mono">data-theme</code> (brand) dan/atau <code class="font-mono">.dark</code> di container manapun. Kotak "light" mengikuti halaman; jika halaman sedang dark, kotak light juga gelap.</p>`;
}

export function renderRtl(): string {
  const sample = (dir: "ltr" | "rtl") =>
    `<div dir="${dir}" class="${card} space-y-3">
      <div class="${label}">${dir.toUpperCase()}</div>
      <div class="flex h-10 items-center gap-2 rounded-control border border-border bg-surface px-3.5 text-sm">
        ${icon({ name: "search", size: 16, class: "text-fg-subtle" })}
        <span class="flex-1 text-start text-fg-subtle">Search…</span>
        <kbd class="ms-auto rounded-sm border border-border px-1 text-micro">⌘K</kbd>
      </div>
      <div class="flex items-center justify-between rounded-control bg-primary-50 px-3 py-2 text-sm font-medium text-primary-700">
        <span class="ps-1">Lanjut</span>${icon({ name: "chevron-right", size: 16 })}
      </div>
      <div class="flex items-center gap-2 text-sm"><span class="size-2 rounded-full bg-success-500"></span><span class="me-auto">Aktif</span><span class="text-end text-fg-muted">42</span></div>
    </div>`;
  return `<div class="grid gap-3 md:grid-cols-2">${sample("ltr")}${sample("rtl")}</div>
    <p class="mt-3 text-sm text-fg-muted">Aturan: pakai utilitas logis (<code class="font-mono">ms-/me-/ps-/pe-/start-/end-/text-start/text-end</code>), hindari <code class="font-mono">ml-/mr-/left-/right-</code>. Ikon berarah dicerminkan otomatis (<code class="font-mono">rtl:-scale-x-100</code>).</p>`;
}

export const foundationSections = [
  { id: "identity", title: "Brand identity", render: renderIdentity },
  { id: "colors", title: "Colors & status", render: renderColors },
  { id: "typography", title: "Typography scale", render: renderTypography },
  { id: "shape", title: "Radius, shadow, spacing, layering", render: renderShape },
  { id: "motion", title: "Motion", render: renderMotion },
  { id: "icons", title: "Icons", render: renderIcons },
  { id: "theming", title: "Theming & dark mode", render: renderTheming },
  { id: "rtl", title: "RTL", render: renderRtl },
] as const;
