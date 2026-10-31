/**
 * Demo/galeri komponen. Dipakai bersama oleh Storybook (story "Gallery") dan
 * preview HTML supaya keduanya sinkron.
 */
import { badge, badgeTones } from "./badge/badge";
import { button, buttonSizes, buttonVariants } from "./button/button";
import { card, heroCard, statCard } from "./card/card";
import { frame } from "./frame/frame";

const label = "text-micro font-semibold uppercase tracking-wider text-fg-subtle";
const group = (title: string, body: string) => `<div class="space-y-3"><h3 class="${label}">${title}</h3>${body}</div>`;
const row = (items: string[]) => `<div class="flex flex-wrap items-center gap-3">${items.join("")}</div>`;
const panel = (inner: string) => `<div class="space-y-8 rounded-card border border-border/70 bg-surface p-6 shadow-card">${inner}</div>`;

export function renderButtonDemo(): string {
  const onGradient = `<div class="flex flex-wrap items-center gap-3 rounded-xl bg-brand-gradient p-5">
    ${button({ label: "Mulai Sekarang", variant: "white" })}
    <button type="button" class="inline-flex items-center justify-center gap-2 rounded-control border border-white/30 px-4 h-10 text-sm font-semibold text-white transition-colors duration-fast hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2">Pelajari Lebih Lanjut</button>
  </div>`;
  return panel(
    [
      group("Variants", row(buttonVariants.filter((v) => v !== "white").map((variant) => button({ label: variant, variant })))),
      group("Sizes", row(buttonSizes.map((size) => button({ label: `size ${size}`, size })))),
      group(
        "Dengan ikon",
        row([
          button({ label: "Bantuan", variant: "outline", iconStart: "circle-help" }),
          button({ label: "Pindai QR", variant: "outline", iconStart: "qr-code" }),
          button({ label: "Pratinjau", iconStart: "eye" }),
          button({ label: "Pilih paket", iconEnd: "arrow-right" }),
          button({ label: "Hapus", variant: "danger", iconStart: "trash-2" }),
        ]),
      ),
      group("On gradient", onGradient),
      group(
        "Loading",
        row([button({ label: "Memuat…", loading: true }), button({ label: "Memuat…", variant: "outline", loading: true })]),
      ),
      group("Disabled", row(buttonVariants.filter((v) => v !== "white").map((variant) => button({ label: variant, variant, disabled: true })))),
    ].join(""),
  );
}

export function renderBadgeDemo(): string {
  return panel(
    [
      group("Tones", row(badgeTones.map((tone) => badge({ label: tone, tone })))),
      group("Dengan titik", row(badgeTones.map((tone) => badge({ label: tone, tone, dot: true })))),
      group("Rounded (rounded-md)", row(badgeTones.map((tone) => badge({ label: tone, tone, rounded: true })))),
      group("Bordered", row(badgeTones.map((tone) => badge({ label: tone, tone, bordered: true })))),
      group("Large", row(badgeTones.map((tone) => badge({ label: tone, tone, large: true })))),
    ].join(""),
  );
}

export function renderCardDemo(): string {
  const basic = [
    card({ title: "Judul kartu", description: "Deskripsi singkat yang menjelaskan isi kartu: border tipis, sudut membulat, dan shadow lembut." }),
    card({ title: "Lengkapi pengaturan", description: "Atur preferensi akun agar pengalaman terasa lebih sesuai dengan kebutuhanmu.", buttonLabel: "Lanjutkan" }),
    card({ title: "Panduan penggunaan", description: "Ringkasan singkat cara memakai fitur ini dari awal sampai selesai.", link: "Baca selengkapnya", badgeLabel: "Panduan", hoverable: true }),
  ];
  const stats = [
    statCard({ value: "12", label: "Selesai", note: "(50%)", iconName: "circle-check" }),
    statCard({ value: "248", label: "Total Item", iconName: "chart-bar" }),
    statCard({ value: "8", label: "Terjadwal", iconName: "calendar" }),
  ];
  return `<div class="space-y-8">
    ${group("Card dasar", `<div class="grid gap-4 md:grid-cols-3">${basic.join("")}</div>`)}
    ${group("Stat card", `<div class="grid gap-3 sm:grid-cols-3">${stats.join("")}</div>`)}
    ${group("Gradient hero", `<div class="max-w-sm">${heroCard({ title: "Fitur Unggulan", description: "Kartu hero bergradasi untuk menyorot fitur atau informasi utama." })}</div>`)}
  </div>`;
}

export function renderFrameDemo(): string {
  const body = `<div class="grid gap-4 sm:grid-cols-[1fr_1.4fr]">
      <div class="space-y-2 rounded-card border border-border/70 bg-neutral-50 p-4">
        <div class="${label}">Skor</div>
        <div class="flex items-baseline gap-1"><span class="font-display text-4xl font-extrabold text-fg">94</span><span class="text-sm text-fg-muted">/100</span></div>
        ${badge({ label: "Lulus 94%", tone: "success" })}
      </div>
      <div class="space-y-2 rounded-card bg-neutral-900 p-4 font-mono text-xs leading-5 text-neutral-100">
        <div class="text-neutral-400">// Contoh keluaran</div>
        <div>const status = "aktif";</div>
        <div class="flex flex-wrap gap-1.5 pt-1">${badge({ label: "Aktif", tone: "success", rounded: true })}${badge({ label: "Menunggu", tone: "warning", rounded: true })}</div>
      </div>
    </div>`;
  return `<div class="space-y-6">
    ${frame({ title: "ordinara://v0.1/live-preview", tabs: ["Ringkasan", "Aktivitas", "Pengaturan"], activeTab: 0, body })}
    ${frame({ title: "frame-tanpa-tab.html", body: `<p class="text-sm text-fg-muted">Frame tanpa tab: cukup title bar dan konten.</p>` })}
  </div>`;
}
