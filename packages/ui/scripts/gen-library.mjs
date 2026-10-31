// Membuat pustaka komponen Ordinara dari sumber dokumentasi komponen (plugin, MIT):
// judul, deskripsi, dan SEMUA contoh markup per section, lalu disesuaikan ke brand Ordinara
// (teks, logo, gambar placeholder, tautan eksternal).
//   - packages/ui/src/library/pages/<group>-<name>.ts   (data)
//   - packages/ui/src/library/registry.ts               (daftar + loader dinamis)
//   - apps/storybook/stories/library/<group>-<name>.stories.ts
// Hanya halaman yang jadwalnya <= versi paket (library-manifest.json) yang dibuat.
// Jalankan: npm run gen:library -w @ordinara/ui   (butuh internet saat pertama kali; sumber di-cache)
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const uiRoot = join(here, "..");
const cacheDir = join(uiRoot, ".cache/library-docs");
const pagesDir = join(uiRoot, "src/library/pages");
const storiesDir = join(here, "../../../apps/storybook/stories/library");
const BASE = "https://raw.githubusercontent.com/themesberg/flowbite/main/content";

// Jadwal rilis: hanya halaman dengan since <= versi paket yang di-generate (lihat library-manifest.json).
const manifest = JSON.parse(readFileSync(join(uiRoot, "library-manifest.json"), "utf8"));
const version = JSON.parse(readFileSync(join(uiRoot, "package.json"), "utf8")).version;
const num = (v) => v.split(".").map(Number);
const lte = (a, b) => {
  const [x, y] = [num(a), num(b)];
  for (let i = 0; i < 3; i++) if ((x[i] ?? 0) !== (y[i] ?? 0)) return (x[i] ?? 0) < (y[i] ?? 0);
  return true;
};
const enabled = (id) => !!manifest.since[id] && lte(manifest.since[id], version);

const SOURCES = {
  Components: ["accordion", "alerts", "avatar", "badge", "banner", "bottom-navigation", "breadcrumb", "buttons", "button-group", "card", "carousel", "chat-bubble", "clipboard", "datepicker", "device-mockups", "drawer", "dropdowns", "footer", "forms", "gallery", "indicators", "jumbotron", "kbd", "list-group", "mega-menu", "modal", "navbar", "pagination", "popover", "progress", "qr-code", "rating", "sidebar", "skeleton", "speed-dial", "spinner", "stepper", "tables", "tabs", "timeline", "toast", "tooltips", "typography", "video"],
  Forms: ["input-field", "file-input", "search-input", "number-input", "phone-input", "select", "textarea", "timepicker", "checkbox", "radio", "toggle", "range", "floating-label"],
  Typography: ["headings", "paragraphs", "blockquote", "images", "lists", "links", "text", "text-decoration", "hr"],
  Plugins: ["charts", "datatables", "datepicker", "wysiwyg"],
};
const DIR = { Components: "components", Forms: "forms", Typography: "typography", Plugins: "plugins" };

mkdirSync(cacheDir, { recursive: true });
for (const d of [pagesDir, storiesDir]) {
  rmSync(d, { recursive: true, force: true });
  mkdirSync(d, { recursive: true });
}

async function source(group, name) {
  const file = join(cacheDir, `${DIR[group]}-${name}.md`);
  if (!existsSync(file)) {
    const res = await fetch(`${BASE}/${DIR[group]}/${name}.md`);
    if (!res.ok) throw new Error(`gagal mengambil ${group}/${name}: ${res.status}`);
    writeFileSync(file, await res.text());
  }
  return readFileSync(file, "utf8");
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** Potong teks di batas kalimat (atau kata) agar tidak berhenti di tengah kata. */
const shorten = (text, max = 200) => {
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const sentence = head.match(/^[\s\S]*[.!?](?=\s|$)/);
  if (sentence && sentence[0].length >= 60) return sentence[0];
  return head.replace(/\s+\S*$/, "") + "…";
};

const clean = (s) =>
  esc(s.replace(/\{\{<[^>]*>\}\}/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/<a\s[^>]*>([^<]*)<\/a>/g, "$1").replace(/<\/?[a-zA-Z][^>]*>/g, ""))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\s+/g, " ")
    .trim();

// ---------- penyesuaian brand ----------
const svgUri = (svg) => "data:image/svg+xml," + encodeURIComponent(svg.replace(/\s+/g, " ").trim());
const LOGO = svgUri(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d74eb"/><stop offset="1" stop-color="#1950c8"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#g)"/><rect x="7.5" y="15" width="5" height="9" rx="2.5" fill="#fff" opacity=".5"/><rect x="13.5" y="10" width="5" height="14" rx="2.5" fill="#fff" opacity=".75"/><rect x="19.5" y="5" width="5" height="19" rx="2.5" fill="#fff"/></svg>',
);
const AVATAR = [
  ["#c6d7fb", "#2361e7"],
  ["#fcd3b6", "#d56515"],
  ["#a7f3d0", "#047857"],
  ["#e2e8f0", "#475569"],
];
let imageCounter = 0;
const avatarUri = () => {
  const [bg, fg] = AVATAR[imageCounter++ % AVATAR.length];
  return svgUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="${bg}"/><circle cx="48" cy="38" r="17" fill="${fg}" opacity=".85"/><path d="M14 96c2-22 16-34 34-34s32 12 34 34z" fill="${fg}" opacity=".85"/></svg>`,
  );
};
const pictureUri = () => {
  const [bg, fg] = AVATAR[imageCounter++ % AVATAR.length];
  return svgUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="#f1f5f9"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><circle cx="560" cy="210" r="70" fill="${fg}" opacity=".25"/><path d="M0 600V430l190-150 170 120 150-100 290 190v110z" fill="${fg}" opacity=".35"/></svg>`,
  );
};

/** Ganti nama/aset sumber dengan brand Ordinara. */
function brand(text) {
  return text
    // Jalur relatif ke aset sumber (/docs/images/...): ganti dengan placeholder bergaya Ordinara.
    .replace(/(src|srcset)="\/docs\/images\/(?:people|users|avatars?)[^"]*"/g, (_, attr) => `${attr}="${avatarUri()}"`)
    .replace(/(src|srcset)="\/docs\/images\/[^"]*"/g, (_, attr) => `${attr}="${pictureUri()}"`)
    // Tautan relatif/shortcode/eksternal ke situs sumber -> placeholder "#".
    .replace(/href="\{\{<[^"]*"/g, 'href="#"')
    .replace(/href="\/docs\/[^"]*"/g, 'href="#"')
    .replace(/href="https?:\/\/(?:www\.)?tailwindui\.com[^"]*"/g, 'href="#"')
    // Salah ketik bawaan sumber.
    .replace(/agong/g, "ago")
    .replace(/https?:\/\/flowbite\.com\/docs\/images\/logo\.svg/g, LOGO)
    .replace(/https?:\/\/flowbite\.com\/docs\/images\/(?:people|users|avatars?)[^"'\s)]*/g, () => avatarUri())
    .replace(/https?:\/\/flowbite\.com\/docs\/images\/[^"'\s)]*/g, () => pictureUri())
    .replace(/https?:\/\/[a-z0-9.-]*flowbite\.s3\.amazonaws\.com\/[^"'\s)]*/g, () => pictureUri())
    .replace(/href="https?:\/\/(?:www\.)?flowbite\.com[^"]*"/g, 'href="#"')
    .replace(/https?:\/\/(?:www\.)?flowbite\.com[^"'\s)<]*/g, "#")
    .replace(/@flowbite\.com/g, "@example.com")
    .replace(/flowbite\.com/g, "example.com")
    .replace(/flowbite/gi, (m) => (m[0] === "F" ? "Ordinara" : "ordinara"));
}

function params(line) {
  const out = {};
  for (const m of line.matchAll(/(\w+)="([^"]*)"/g)) out[m[1]] = m[2];
  for (const m of line.matchAll(/(\w+)=([A-Za-z0-9_-]+)(?=\s|>)/g)) if (!(m[1] in out)) out[m[1]] = m[2];
  return out;
}

function parse(md, fallbackTitle) {
  const lines = md.split("\n");
  let i = 0;
  let title = fallbackTitle;
  if (lines[0].trim() === "---") {
    i = 1;
    while (i < lines.length && lines[i].trim() !== "---") {
      const t = lines[i].match(/^title:\s*(.+)$/);
      if (t) title = t[1].replace(/^Tailwind CSS\s+/i, "").replace(/\s*-\s*Flowbite.*$/i, "").trim();
      i++;
    }
    i++;
  }
  const sections = [];
  let cur = { title: "Intro", level: 2, description: [], examples: [] };
  let intro = [];
  let started = false;
  const push = () => {
    if (cur.examples.length) sections.push({ title: cur.title, level: cur.level, description: clean(cur.description.join(" ")), examples: cur.examples });
  };
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("{{< example")) {
      // Header bisa multi-baris (parameter javascript=`...`): lanjutkan sampai `>}}` penutup di luar backtick.
      let header = line;
      while (((header.match(/`/g) ?? []).length % 2 === 1 || !/>\}\}\s*$/.test(header)) && i + 1 < lines.length) header += "\n" + lines[++i];
      const jsMatch = header.match(/javascript=`([\s\S]*?)`\s*(?=\w+=|>\}\})/);
      const p = params(header.replace(/javascript=`[\s\S]*?`/, ""));
      const html = [];
      for (i++; i < lines.length && !lines[i].startsWith("{{< /example"); i++) html.push(lines[i]);
      const ex = { html: html.join("\n").trim() };
      if (p.class) ex.class = p.class;
      if (p.bodyClass) ex.bodyClass = p.bodyClass;
      if (p.iframeHeight) ex.iframeHeight = p.iframeHeight;
      if (p.iframeMaxHeight) ex.iframeMaxHeight = p.iframeMaxHeight;
      if (jsMatch) ex.javascript = jsMatch[1].trim();
      if (ex.html) cur.examples.push(ex);
      continue;
    }
    if (line.startsWith("{{< code")) {
      for (i++; i < lines.length && !lines[i].startsWith("{{< /code"); i++);
      continue;
    }
    if (line.trim().startsWith("```")) {
      for (i++; i < lines.length && !lines[i].trim().startsWith("```"); i++);
      continue;
    }
    const h = line.match(/^(#{2,4})\s+(.+?)\s*$/);
    if (h) {
      started = true;
      push();
      cur = { title: h[2].replace(/\{[^}]*\}$/, "").trim(), level: h[1].length, description: [], examples: [] };
      continue;
    }
    if (!line.trim() || line.startsWith("{{<") || line.startsWith("|") || /^\s*[-*]\s/.test(line) || line.startsWith("<")) continue;
    if (!started) intro.push(line);
    else if (!cur.examples.length) cur.description.push(line);
  }
  push();
  const b = (t) => brand(t);
  return {
    title: b(title),
    intro: b(clean(intro.slice(0, 3).join(" "))),
    sections: sections.map((sec) => ({
      ...sec,
      title: b(sec.title),
      description: b(sec.description),
      examples: sec.examples.map((ex) => ({ ...ex, html: b(ex.html) })),
    })),
  };
}

const pascal = (s) => {
  const w = s.replace(/<[^>]+>/g, "").replace(/[^A-Za-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean).map((x) => x[0].toUpperCase() + x.slice(1));
  const n = w.join("");
  return /^[A-Za-z]/.test(n) ? n : `S${n}`;
};

const registry = [];
const allPages = []; // semua halaman sumber (termasuk yang belum dirilis), untuk TASKS.md
let totalExamples = 0;
for (const [group, names] of Object.entries(SOURCES)) {
  for (const name of names) {
    const md = await source(group, name);
    const fallback = name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const page = parse(md, fallback);
    const fileId = `${DIR[group]}-${name}`;
    const pageId = `${DIR[group]}/${name}`;
    allPages.push({ id: pageId, group, title: page.title, sections: page.sections.length, examples: page.sections.reduce((n, sec) => n + sec.examples.length, 0), since: manifest.since[pageId] ?? null, released: enabled(pageId) });
    if (!enabled(pageId)) continue;
    const count = page.sections.reduce((n, s) => n + s.examples.length, 0);
    totalExamples += count;
    writeFileSync(
      join(pagesDir, `${fileId}.ts`),
      `// GENERATED oleh scripts/gen-library.mjs dari sumber dokumentasi komponen (MIT). Jangan edit manual.\nimport type { LibraryPage } from "../types";\n\nconst page: LibraryPage = ${JSON.stringify(page, null, 1)};\n\nexport default page;\n`,
    );
    registry.push({ id: `${DIR[group]}/${name}`, fileId, group, title: page.title, intro: shorten(page.intro, 330), sections: page.sections.length, examples: count });

    const used = new Set(["Gallery"]);
    const storyExports = page.sections.map((s, idx) => {
      let ex = pascal(s.title);
      while (used.has(ex)) ex += "X";
      used.add(ex);
      return `export const ${ex}: Story = { name: ${JSON.stringify(s.title)}, render: () => renderLibrarySection(page.sections[${idx}]!) };`;
    });
    writeFileSync(
      join(storiesDir, `${fileId}.stories.ts`),
      `// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.\nimport type { Meta, StoryObj } from "@storybook/html-vite";\nimport { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";\nimport page from "@ordinara/ui/library/${fileId}";\n\nconst meta: Meta = { title: ${JSON.stringify(`${group}/${page.title}`)} };\nexport default meta;\n\ntype Story = StoryObj;\n\nexport const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };\n${storyExports.join("\n")}\n`,
    );
  }
}

writeFileSync(
  join(uiRoot, "src/library/registry.ts"),
  `// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.\nimport type { LibraryEntry } from "./types";\n\nexport const libraryRegistry: LibraryEntry[] = [\n${registry
    .map(
      (r) =>
        `  { id: ${JSON.stringify(r.id)}, group: ${JSON.stringify(r.group)}, title: ${JSON.stringify(r.title)}, intro: ${JSON.stringify(r.intro)}, sections: ${r.sections}, examples: ${r.examples}, load: () => import("./pages/${r.fileId}").then((m) => m.default) },`,
    )
    .join("\n")}\n];\n`,
);

writeFileSync(join(cacheDir, "..", "library-index.json"), JSON.stringify(allPages, null, 1));
console.log(`versi ${version}: ${registry.length} dari ${allPages.length} halaman dirilis, ${totalExamples} contoh`);
