/** Badge / pill: label status singkat berlatar tint. */
export const badgeTones = ["primary", "secondary", "success", "warning", "danger", "info", "neutral"] as const;
export type BadgeTone = (typeof badgeTones)[number];

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  /** Titik status di kiri label. */
  dot?: boolean;
  /** Sudut lebih kotak (rounded-md) alih-alih pill. */
  rounded?: boolean;
  /** Ukuran besar. */
  large?: boolean;
  /** Ring tipis sewarna teks. */
  bordered?: boolean;
}

const toneClass: Record<BadgeTone, string> = {
  primary: "bg-primary-50 text-primary-700",
  secondary: "bg-secondary-50 text-secondary-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  danger: "bg-danger-50 text-danger-700",
  info: "bg-info-50 text-info-700",
  neutral: "bg-neutral-100 text-neutral-600",
};

const dotClass: Record<BadgeTone, string> = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  danger: "bg-danger-500",
  info: "bg-info-500",
  neutral: "bg-neutral-400",
};

export function badge({ label, tone = "primary", dot = false, rounded = false, large = false, bordered = false }: BadgeProps): string {
  const cls = [
    "inline-flex items-center gap-1.5 font-medium leading-none",
    rounded ? "rounded-md" : "rounded-full",
    large ? "px-3.5 py-2 text-sm" : "px-3 py-1.5 text-xs",
    toneClass[tone],
    bordered ? "ring-1 ring-inset ring-current/30" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const d = dot ? `<span class="size-2 shrink-0 rounded-full ${dotClass[tone]}" aria-hidden="true"></span>` : "";
  return `<span class="${cls}">${d}${label}</span>`;
}
