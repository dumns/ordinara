// Menghasilkan src/mask/*.css (jalur CSS mask) dari SVG Phosphor (MIT): class "ori ori-<nama>",
// "ori-bold ori-<nama>", "ori-fill ori-<nama>". Hanya ikon di icon-set.json yang disertakan.
// Jalankan: npm run build:mask -w @dumns/ordinara-icons
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "../../node_modules/@phosphor-icons/core/assets");
const WEIGHTS = {
  regular: { cls: "ori", suffix: "" },
  bold: { cls: "ori-bold", suffix: "-bold" },
  fill: { cls: "ori-fill", suffix: "-fill" },
};
const NL = "\n";

/** Ikon bermakna arah: dicerminkan pada dir="rtl". */
const DIRECTIONAL = [
  "caret-left", "caret-right", "caret-double-left", "caret-double-right", "arrow-left", "arrow-right", "arrow-up-right",
  "arrow-square-out", "sign-out", "sign-in", "sidebar-simple", "sidebar", "skip-forward", "skip-back", "paper-plane-tilt",
  "list-bullets", "text-align-left", "text-align-right", "trend-up", "trend-down",
];

const { names } = JSON.parse(readFileSync(join(root, "icon-set.json"), "utf8"));
const unique = [...new Set(names)].sort();

const uri = (svg) =>
  'url("data:image/svg+xml,' +
  svg
    .trim()
    .replace(/\s*\n\s*/g, "")
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E") +
  '")';

const missing = [];
const byWeight = { regular: [], bold: [], fill: [] };
for (const name of unique) {
  for (const [weight, { cls, suffix }] of Object.entries(WEIGHTS)) {
    const file = join(assets, weight, `${name}${suffix}.svg`);
    if (!existsSync(file)) {
      missing.push(`${weight}/${name}`);
      continue;
    }
    const u = uri(readFileSync(file, "utf8"));
    byWeight[weight].push(`.${cls}.ori-${name}{-webkit-mask-image:${u};mask-image:${u}}`);
  }
}
if (missing.length) throw new Error("Ikon tidak ditemukan di Phosphor: " + missing.join(", "));

const HEADER = "/* GENERATED oleh scripts/build-mask.mjs dari Phosphor Icons (MIT). Jangan edit manual. */" + NL;
const base =
  ".ori,.ori-bold,.ori-fill{display:inline-block;flex-shrink:0;width:1em;height:1em;vertical-align:-0.125em;background-color:currentColor;" +
  "-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:contain;mask-size:contain}";
const rtl = DIRECTIONAL.map((n) => `[dir="rtl"] .ori-${n}`).join(",") + "{transform:scaleX(-1)}";

mkdirSync(join(root, "src/mask"), { recursive: true });
writeFileSync(join(root, "src/mask/base.css"), HEADER + "/* Dasar: ukuran = font-size, warna = color. */" + NL + base + NL + rtl + NL);

const sizes = [];
for (const [weight, rules] of Object.entries(byWeight)) {
  const css = HEADER + `/* Bobot ${weight}: <i class="${WEIGHTS[weight].cls} ori-nama"></i> */` + NL + rules.join(NL) + NL;
  writeFileSync(join(root, `src/mask/${weight}.css`), css);
  sizes.push(`${weight} ${(css.length / 1024).toFixed(0)} kB`);
}

writeFileSync(
  join(root, "src/mask.css"),
  HEADER +
    '/* Semua bobot. Untuk satu bobot saja: import "@dumns/ordinara-icons/mask/base.css" dan "@dumns/ordinara-icons/mask/regular.css". */' + NL +
    '@import "./mask/base.css";' + NL +
    '@import "./mask/regular.css";' + NL +
    '@import "./mask/bold.css";' + NL +
    '@import "./mask/fill.css";' + NL,
);
writeFileSync(join(root, "src/names.ts"), "// GENERATED oleh scripts/build-mask.mjs. Nama ikon yang tersedia di jalur CSS mask." + NL + "export const oriNames = " + JSON.stringify(unique) + " as const;" + NL + "export type OriName = (typeof oriNames)[number];" + NL);
console.log(`mask: ${unique.length} ikon; ${sizes.join(", ")}`);
