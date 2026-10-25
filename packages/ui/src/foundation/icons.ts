import { iconPaths, type IconName, type IconWeight } from "./icons.generated";

export { iconPaths, type IconName, type IconWeight };
export const iconNames = Object.keys(iconPaths) as IconName[];

/** Ikon bermakna arah: dicerminkan otomatis pada dir="rtl". */
const directional = new Set<IconName>([
  "chevron-left",
  "chevron-right",
  "arrow-right",
  "panel-left-close",
  "panel-left-open",
  "log-out",
  "external-link",
]);

export interface IconProps {
  name: IconName;
  /** Ukuran px (default 20). */
  size?: number;
  /** Bobot Phosphor: regular (default), bold, fill. */
  weight?: IconWeight;
  class?: string;
  /** Jika diisi, ikon dianggap bermakna (role=img + aria-label). Jika tidak, aria-hidden. */
  label?: string;
}

export function icon({ name, size = 20, weight = "regular", class: cls = "", label }: IconProps): string {
  const flip = directional.has(name) ? " rtl:-scale-x-100" : "";
  const a11y = label ? `role="img" aria-label="${label}"` : `aria-hidden="true"`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 256 256" fill="currentColor" ` +
    `class="shrink-0${flip}${cls ? " " + cls : ""}" ${a11y}>${iconPaths[name][weight]}</svg>`
  );
}
