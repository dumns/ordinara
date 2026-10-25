// Style komponen dari plugin komponen (datatables, charts, wysiwyg, tooltip, ...) hanya disertakan Tailwind v4
// jika nama class-nya muncul di source. Class itu dibuat oleh JS pihak ketiga saat runtime, jadi kita safelist-kan.
// Hasil: src/library/safelist.css  (di-import dari styles.css)
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const plugin = readFileSync(join(here, "../../../node_modules/flowbite/plugin.js"), "utf8");

// Semua kemunculan .datatable-*, .apexcharts-*, .wysiwyg*, .tooltip*, .popover*, .ProseMirror, .tiptap.
const names = new Set();
for (const m of plugin.matchAll(/\.((?:datatable|apexcharts|wysiwyg|ProseMirror|tiptap|tooltip|popover)[\w-]*)/g)) names.add(m[1]);

const list = [...names].sort();
writeFileSync(
  join(here, "../src/library/safelist.css"),
  `/* GENERATED oleh scripts/gen-library-safelist.mjs dari plugin komponen. Jangan edit manual. */\n@source inline("${list.join(" ")}");\n`,
);
console.log(`${list.length} class disafelist`);
