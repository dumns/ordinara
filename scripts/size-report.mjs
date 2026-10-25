// Laporan ukuran CSS hasil build preview + budget (gzip). Jalankan setelah `npm run build:preview`.
// Budget berlaku untuk CSS komponen; rule ikon mask (`.ori*.ori-nama`) dihitung terpisah karena
// pemakai memilih bobot yang dimuat (lihat packages/icons).
import { readdirSync, readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { join } from "node:path";

const BUDGET_GZIP_KB = 60;
const dir = "apps/preview/dist/assets";
const iconRule = /\.ori(?:-bold|-fill)?\.ori-[a-z0-9-]+\{[^}]*\}/g;
const css = readdirSync(dir).filter((f) => f.endsWith(".css"));
let total = 0;
let icons = 0;
for (const f of css) {
  const text = readFileSync(join(dir, f), "utf8");
  const iconText = (text.match(iconRule) ?? []).join("");
  const rest = text.replace(iconRule, "");
  const gz = gzipSync(Buffer.from(rest)).length;
  const gzIcons = iconText ? gzipSync(Buffer.from(iconText)).length : 0;
  total += gz;
  icons += gzIcons;
  console.log(`${f}: ${(rest.length / 1024).toFixed(1)} kB (gzip ${(gz / 1024).toFixed(1)} kB)${gzIcons ? `, ikon mask terpisah: gzip ${(gzIcons / 1024).toFixed(1)} kB` : ""}`);
}
const kb = total / 1024;
console.log(`Total CSS komponen gzip: ${kb.toFixed(1)} kB (budget ${BUDGET_GZIP_KB} kB)`);
if (icons) console.log(`Ikon mask (semua bobot, tidak dihitung budget): gzip ${(icons / 1024).toFixed(1)} kB`);
if (kb > BUDGET_GZIP_KB) {
  console.error("Melebihi budget CSS.");
  process.exit(1);
}
