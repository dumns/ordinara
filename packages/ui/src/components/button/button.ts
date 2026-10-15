/**
 * Button — komponen seed untuk memverifikasi pipeline.
 * Satu sumber markup & daftar varian dipakai oleh Storybook DAN preview HTML,
 * sehingga keduanya selalu sinkron.
 */

export const buttonVariants = ["primary", "secondary", "danger"] as const;
export const buttonSizes = ["sm", "md", "lg"] as const;

export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center font-medium rounded-control transition-colors " +
  "focus:outline-none focus-visible:ring-4 ring-focus-ring disabled:opacity-50 disabled:pointer-events-none";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent text-text-inverse hover:bg-accent-hover",
  secondary:
    "bg-surface text-text-default border border-border-default hover:bg-surface-sunken",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export function button({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps): string {
  const cls = [base, variantClass[variant], sizeClass[size]].join(" ");
  return `<button type="button" class="${cls}"${disabled ? " disabled" : ""}>${label}</button>`;
}
