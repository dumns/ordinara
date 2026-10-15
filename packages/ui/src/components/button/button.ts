/**
 * Button. Satu sumber markup & daftar varian dipakai oleh Storybook DAN preview
 * HTML, sehingga keduanya selalu sinkron.
 *
 * Satu basis bersama; varian hanya menentukan warna. Ukuran: sm h-8, md h-10, lg h-12.
 */
import { icon, type IconName } from "../../foundation/icons";

export const buttonVariants = ["primary", "secondary", "accent", "outline", "ghost", "danger", "white"] as const;
export const buttonSizes = ["sm", "md", "lg"] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  /** Tampilkan spinner; label disembunyikan dan tombol tidak bisa diklik. */
  loading?: boolean;
  iconStart?: IconName;
  iconEnd?: IconName;
}

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap " +
  "transition-colors duration-fast active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 text-white shadow-sm hover:bg-hover-primary focus-visible:ring-primary-500",
  secondary: "bg-primary-50 text-primary-700 hover:bg-primary-100 focus-visible:ring-primary-300",
  accent: "bg-secondary-600 text-neutral-900 shadow-sm hover:bg-secondary-700 focus-visible:ring-secondary-300",
  outline: "border border-border bg-surface text-neutral-700 hover:bg-neutral-50 focus-visible:ring-neutral-300",
  ghost: "text-fg-muted hover:bg-neutral-100 hover:text-neutral-800 focus-visible:ring-neutral-300",
  danger: "bg-danger-600 text-white hover:bg-hover-danger focus-visible:ring-danger-300",
  white: "bg-surface text-primary-700 shadow-sm hover:bg-white/90 focus-visible:ring-white",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-btn-lg",
};

/** Warna spinner mengikuti varian (teks tombol disembunyikan saat loading). */
const spinnerClass: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-primary-600",
  accent: "text-neutral-900",
  outline: "text-primary-600",
  ghost: "text-primary-600",
  danger: "text-white",
  white: "text-primary-600",
};

export function button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  iconStart,
  iconEnd,
}: ButtonProps): string {
  const cls = [base, variantClass[variant], sizeClass[size], loading ? "relative pointer-events-none text-transparent!" : ""]
    .filter(Boolean)
    .join(" ");
  const spinner = loading
    ? `<span class="absolute inset-0 m-auto size-4 animate-spin-slow rounded-full border-2 border-current border-r-transparent ${spinnerClass[variant]}" aria-hidden="true"></span>`
    : "";
  return (
    `<button type="button" class="${cls}"${disabled || loading ? " disabled" : ""}${loading ? ' aria-busy="true"' : ""}>` +
    `${iconStart ? icon({ name: iconStart, size: 16 }) : ""}${label}${iconEnd ? icon({ name: iconEnd, size: 16 }) : ""}${spinner}` +
    `</button>`
  );
}
