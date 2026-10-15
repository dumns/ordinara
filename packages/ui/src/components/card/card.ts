/** Card: kontainer dasar (border tipis, sudut besar, shadow lembut) dan stat card. */
import { icon, type IconName } from "../../foundation/icons";
import { badge, type BadgeTone } from "../badge/badge";
import { button } from "../button/button";

export interface CardProps {
  title: string;
  description?: string;
  /** Pill kecil di atas judul. */
  badgeLabel?: string;
  badgeTone?: BadgeTone;
  /** Teks tautan dengan panah di bawah konten. */
  link?: string;
  /** Jika diisi, seluruh kartu menjadi satu tautan (teks `link` jadi penanda visual, bukan anchor bersarang). */
  href?: string;
  /** Tombol primary di bawah konten. */
  buttonLabel?: string;
  /** Shadow naik saat hover. */
  hoverable?: boolean;
  /** Konten tambahan (HTML). */
  body?: string;
}

const arrow = icon({ name: "arrow-right", size: 16 });

export function card({
  title,
  description,
  badgeLabel,
  badgeTone = "primary",
  link,
  href,
  buttonLabel,
  hoverable = false,
  body = "",
}: CardProps): string {
  const cls = `block rounded-card border border-border/70 bg-surface text-start shadow-card${hoverable || href ? " transition-shadow duration-normal hover:shadow-card-lg" : ""}`;
  const tag = href ? "a" : "div";
  const linkClass = "mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:underline";
  const linkHtml = link ? (href ? `<span class="${linkClass}">${link}${arrow}</span>` : `<a href="#" class="${linkClass}">${link}${arrow}</a>`) : "";
  return `<${tag}${href ? ` href="${href}"` : ""} class="${cls}"><div class="p-6">
    ${badgeLabel ? `<div class="mb-3">${badge({ label: badgeLabel, tone: badgeTone, rounded: true })}</div>` : ""}
    <h3 class="font-display text-lg font-bold text-fg">${title}</h3>
    ${description ? `<p class="mt-2 text-sm text-fg-muted">${description}</p>` : ""}
    ${body}
    ${linkHtml}
    ${buttonLabel ? `<div class="mt-5">${button({ label: buttonLabel, iconEnd: "arrow-right" })}</div>` : ""}
  </div></${tag}>`;
}

export interface StatCardProps {
  value: string;
  label: string;
  iconName?: IconName;
  /** Catatan kecil di samping label, mis. "(50%)". */
  note?: string;
}

/** Stat card: angka ringkas dengan ubin ikon. */
export function statCard({ value, label, iconName = "star", note }: StatCardProps): string {
  return `<div class="flex items-center gap-3 rounded-card border border-border/70 bg-surface px-3.5 py-3 shadow-card">
    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">${icon({ name: iconName, size: 18 })}</span>
    <div class="min-w-0">
      <p class="font-display text-lg font-bold leading-tight text-fg">${value}</p>
      <p class="text-xs leading-snug text-fg-muted">${label}${note ? ` <span class="text-fg-subtle">${note}</span>` : ""}</p>
    </div>
  </div>`;
}

export interface HeroCardProps {
  title: string;
  description: string;
  iconName?: IconName;
}

/** Kartu hero bergradasi untuk fitur unggulan / highlight AI. */
export function heroCard({ title, description, iconName = "sparkles" }: HeroCardProps): string {
  return `<div class="rounded-2xl bg-brand-gradient p-5 text-white shadow-glow-primary">
    <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">${icon({ name: iconName, size: 20 })}</span>
    <p class="mt-3 font-display text-lg font-bold">${title}</p>
    <p class="mt-1 text-sm text-white/80">${description}</p>
  </div>`;
}
