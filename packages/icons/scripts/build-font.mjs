// Menghasilkan font ikon Ordinara (jalur font) dari SVG Phosphor (MIT): seluruh ikon, 3 bobot.
// Output (dist/font, tidak di-commit): ordinara-icons{,-bold,-fill}.woff2 + font.css (class "ori ori-<nama>").
// Codepoint disimpan di codepoints.json (di-commit) agar stabil antar versi.
// Jalankan: npm run build:font -w @ordinara/icons
import { createReadStream, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SVGIcons2SVGFontStream } from "svgicons2svgfont";
import svg2ttf from "svg2ttf";
import ttf2woff2 from "ttf2woff2";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "../../node_modules/@phosphor-icons/core/assets");
const dist = join(root, "dist/font");
const NL = "\n";

const WEIGHTS = {
  regular: { cls: "ori", suffix: "", family: "Ordinara Icons", file: "ordinara-icons" },
  bold: { cls: "ori-bold", suffix: "-bold", family: "Ordinara Icons Bold", file: "ordinara-icons-bold" },
  fill: { cls: "ori-fill", suffix: "-fill", family: "Ordinara Icons Fill", file: "ordinara-icons-fill" },
};

/** Ikon bermakna arah: dicerminkan pada dir="rtl". Sama dengan jalur mask. */
const DIRECTIONAL = [
  "caret-left", "caret-right", "caret-double-left", "caret-double-right", "arrow-left", "arrow-right", "arrow-up-right",
  "arrow-square-out", "sign-out", "sign-in", "sidebar-simple", "sidebar", "skip-forward", "skip-back", "paper-plane-tilt",
  "list-bullets", "text-align-left", "text-align-right", "trend-up", "trend-down",
];

const names = readdirSync(join(assets, "regular"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.slice(0, -4))
  .sort();

// Codepoint stabil: nama yang sudah ada tidak berubah, nama baru mendapat nomor berikutnya (area PUA).
const cpFile = join(root, "codepoints.json");
const codepoints = existsSync(cpFile) ? JSON.parse(readFileSync(cpFile, "utf8")) : {};
let next = Math.max(0xe000 - 1, ...Object.values(codepoints)) + 1;
for (const n of names) if (!(n in codepoints)) codepoints[n] = next++;
writeFileSync(cpFile, JSON.stringify(codepoints).replace(/,"/g, "," + NL + '"') + NL);

/** SVG -> font SVG (glyph) -> TTF -> WOFF2. */
async function buildWoff2(weight, w) {
  const stream = new SVGIcons2SVGFontStream({ fontName: w.family, fontHeight: 1024, normalize: true, descent: 0, log: () => {} });
  const chunks = [];
  const done = new Promise((resolve, reject) => {
    stream.on("data", (c) => chunks.push(c));
    stream.on("end", resolve);
    stream.on("error", reject);
  });
  const have = [];
  for (const n of names) {
    const file = join(assets, weight, `${n}${w.suffix}.svg`);
    if (!existsSync(file)) continue;
    const glyph = createReadStream(file);
    glyph.metadata = { unicode: [String.fromCodePoint(codepoints[n])], name: n };
    stream.write(glyph);
    have.push(n);
  }
  stream.end();
  await done;
  const ttf = svg2ttf(chunks.map(String).join(""), {});
  return { woff2: Buffer.from(ttf2woff2(Buffer.from(ttf.buffer))), have };
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const faces = [];
const rules = [];
for (const [weight, w] of Object.entries(WEIGHTS)) {
  const { woff2, have } = await buildWoff2(weight, w);
  writeFileSync(join(dist, `${w.file}.woff2`), woff2);
  console.log(`${weight}: ${have.length} ikon, ${(woff2.length / 1024).toFixed(0)} kB woff2`);
  faces.push(
    `@font-face{font-family:"${w.family}";src:url("./${w.file}.woff2") format("woff2");font-weight:normal;font-style:normal;font-display:block}`,
  );
  rules.push(`.${w.cls}{font-family:"${w.family}" !important}`);
  for (const n of have) rules.push(`.${w.cls}.ori-${n}::before{content:"\\${codepoints[n].toString(16)}"}`);
}

const base =
  ".ori,.ori-bold,.ori-fill{display:inline-block;flex-shrink:0;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;" +
  "speak:never;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:-0.125em}";
const rtl = DIRECTIONAL.map((n) => `[dir="rtl"] .ori-${n}`).join(",") + "{transform:scaleX(-1)}";

const css =
  "/* GENERATED oleh scripts/build-font.mjs dari Phosphor Icons (MIT). Jangan edit manual. */" + NL +
  faces.join(NL) + NL + base + NL + rtl + NL + rules.join(NL) + NL;
writeFileSync(join(dist, "font.css"), css);
console.log(`font.css ${(css.length / 1024).toFixed(0)} kB`);
