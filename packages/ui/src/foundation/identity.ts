/**
 * Halaman "Brand identity": logo, warna, tipografi, dan bentuk.
 * Dipakai bersama oleh Storybook dan preview HTML.
 */
import { logoMark, logoWordmark } from "../identity/logo";

const eyebrow = "text-micro font-semibold uppercase tracking-wider text-fg-subtle";
const panel = "rounded-card border border-border/70 bg-surface shadow-card";

const section = (title: string, lead: string, body: string) => `
  <section class="space-y-4">
    <div class="space-y-1">
      <h2 class="font-display text-xl font-bold tracking-tight text-fg">${title}</h2>
      <p class="max-w-2xl text-sm text-fg-muted">${lead}</p>
    </div>
    ${body}
  </section>`;

const swatch = (token: string, name: string, role: string) => `
  <div class="${panel} overflow-hidden">
    <div class="h-20" style="background:var(--${token})"></div>
    <div class="p-4"><div class="font-display text-sm font-bold text-fg">${name}</div><div class="text-xs text-fg-muted">${role}</div><div class="mt-1 font-mono text-micro text-fg-subtle">${token.replace("color-", "")}</div></div>
  </div>`;

export function renderIdentity(): string {
  const header = `<div class="${panel} flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
    <div class="space-y-3">
      ${logoWordmark({ size: 44 })}
      <p class="max-w-md text-base text-fg-muted">Tatanan yang terukur untuk setiap produk: komponen yang konsisten, mudah dirawat, dan nyaman dipakai.</p>
    </div>
    <div class="shrink-0">${logoMark({ size: 96 })}</div>
  </div>`;

  const logo = section(
    "Logo",
    "Tiga batang naik berurutan di dalam ubin membulat: satu, dua, tiga. Batang paling tinggi dan terang menandai urutan yang selesai.",
    `<div class="grid gap-4 sm:grid-cols-3">
      <div class="${panel} grid place-items-center gap-4 p-8">${logoWordmark({ size: 36 })}<span class="${eyebrow}">Utama</span></div>
      <div class="dark ${panel} grid place-items-center gap-4 bg-surface p-8 text-fg">${logoWordmark({ size: 36, tone: "inverse" })}<span class="${eyebrow}">Di atas gelap</span></div>
      <div class="${panel} grid place-items-center gap-4 p-8 text-neutral-700">${logoWordmark({ size: 36, tone: "mono" })}<span class="${eyebrow}">Monokrom</span></div>
    </div>`,
  );

  const color = section(
    "Warna",
    "Biru sebagai warna aksi, oranye untuk sorotan sekunder, dan slate untuk struktur. Skala lengkap (50–950) ada di halaman Colors.",
    `<div class="grid gap-4 sm:grid-cols-3">
      ${swatch("color-primary-600", "Primary", "Aksi utama, tautan, fokus")}
      ${swatch("color-secondary-600", "Secondary", "Sorotan dan penanda")}
      ${swatch("color-neutral-900", "Neutral", "Teks, permukaan, border")}
    </div>`,
  );

  const type = section(
    "Tipografi",
    "Font display bersudut hangat untuk judul dan angka, dipasangkan dengan font body yang netral dan mudah dibaca.",
    `<div class="grid gap-4 md:grid-cols-[1fr_1.2fr]">
      <div class="${panel} p-8"><div class="font-display text-8xl font-extrabold leading-none tracking-tighter text-primary-600">Aa</div><div class="${eyebrow} mt-3">Display · judul dan angka</div></div>
      <div class="${panel} space-y-3 p-8">
        <h3 class="font-display text-3xl font-extrabold tracking-tight text-fg">Satu, dua, tiga.</h3>
        <p class="text-base text-fg-muted">Teks body memakai font netral dengan angka tabel rata agar tabel dan statistik terbaca rapi: <span class="font-semibold tabular-nums text-fg">1.234.567</span>.</p>
      </div>
    </div>`,
  );

  const shape = section(
    "Bentuk",
    "Sudut membulat dengan tiga tingkat: kontrol, kartu, dan bingkai.",
    `<div class="grid gap-4 sm:grid-cols-3">
      <div class="${panel} grid place-items-center gap-3 p-6"><div class="size-20 rounded-control border border-primary-300 bg-primary-50"></div><span class="${eyebrow}">Kontrol</span></div>
      <div class="${panel} grid place-items-center gap-3 p-6"><div class="size-20 rounded-card border border-primary-300 bg-primary-50"></div><span class="${eyebrow}">Kartu</span></div>
      <div class="${panel} grid place-items-center gap-3 p-6"><div class="size-20 rounded-frame border border-primary-300 bg-primary-50"></div><span class="${eyebrow}">Bingkai</span></div>
    </div>`,
  );

  return `<div class="space-y-10">${header}${logo}${color}${type}${shape}</div>`;
}
