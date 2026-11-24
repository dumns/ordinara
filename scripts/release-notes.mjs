// Mencetak catatan rilis sebuah versi dari CHANGELOG.md: isi section `## [X.Y.Z]` (tanpa baris judulnya),
// ditambah daftar paket yang terbit. Dipakai workflow release.yml dan bisa dicoba lokal:
//   node scripts/release-notes.mjs 0.1.1 [path/ke/CHANGELOG.md]
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const version = (process.argv[2] ?? "").replace(/^v/, "");
if (!/^\d+\.\d+\.\d+$/.test(version)) {
  console.error("Pakai: node scripts/release-notes.mjs <X.Y.Z>");
  process.exit(1);
}

// Argumen ke-2 (opsional): path CHANGELOG lain, mis. versi CHANGELOG di commit sebuah tag lama.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const changelog = process.argv[3] ?? join(root, "CHANGELOG.md");
const lines = readFileSync(changelog, "utf8").split("\n");
const start = lines.findIndex((l) => l.startsWith(`## [${version}]`));
if (start < 0) {
  console.error(`CHANGELOG.md tidak punya section untuk versi ${version}`);
  process.exit(1);
}
let end = lines.findIndex((l, i) => i > start && l.startsWith("## ["));
if (end < 0) end = lines.length;
const body = lines.slice(start + 1, end).join("\n").trim();

const packages = ["@dumns/ordinara", "@dumns/ordinara-tokens", "@dumns/ordinara-icons"];
console.log(
  [
    body,
    "",
    "---",
    "",
    `Paket di [GitHub Packages](https://github.com/orgs/dumns/packages?repo_name=ordinara): ${packages.map((p) => `\`${p}@${version}\``).join(", ")}.`,
    "",
    "Riwayat lengkap: [CHANGELOG.md](https://github.com/dumns/ordinara/blob/master/CHANGELOG.md).",
  ].join("\n"),
);
