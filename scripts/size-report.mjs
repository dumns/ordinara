// Laporan ukuran CSS hasil build preview + budget (gzip). Jalankan setelah `npm run build:preview`.
import { readdirSync, readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { join } from "node:path";

const BUDGET_GZIP_KB = 60;
const dir = "apps/preview/dist/assets";
const css = readdirSync(dir).filter((f) => f.endsWith(".css"));
let total = 0;
for (const f of css) {
  const buf = readFileSync(join(dir, f));
  const gz = gzipSync(buf).length;
  total += gz;
  console.log(`${f}: ${(buf.length / 1024).toFixed(1)} kB (gzip ${(gz / 1024).toFixed(1)} kB)`);
}
const kb = total / 1024;
console.log(`Total CSS gzip: ${kb.toFixed(1)} kB (budget ${BUDGET_GZIP_KB} kB)`);
if (kb > BUDGET_GZIP_KB) {
  console.error("Melebihi budget CSS.");
  process.exit(1);
}
