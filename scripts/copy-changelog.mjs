// Menyalin CHANGELOG.md root ke folder paket saat `npm pack`/`npm publish` (hook prepack) agar isinya
// ikut masuk tarball dan sama persis dengan CHANGELOG repo. Dengan argumen --clean menghapus salinannya (hook postpack).
// Dipanggil dari folder paket: node ../../scripts/copy-changelog.mjs [--clean]
import { copyFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "../CHANGELOG.md");
const dest = join(process.cwd(), "CHANGELOG.md");

if (process.argv.includes("--clean")) rmSync(dest, { force: true });
else copyFileSync(src, dest);
