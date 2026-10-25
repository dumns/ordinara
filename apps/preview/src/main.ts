import "@ordinara/ui/fonts.css";
import "@ordinara/ui/styles.css";
import "@ordinara/icons/mask.css";
import { icon, initLibrary, logoDataUri, logoMark } from "@ordinara/ui";
import { pages, type Page } from "./pages";

const root = document.documentElement;

// Favicon: logo Ordinara
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = logoDataUri();
document.head.append(favicon);
const shell = document.getElementById("shell")!;

/* ---------- state (URL > localStorage) ---------- */
const store = {
  get: (k: string) => {
    try {
      return localStorage.getItem(`ordinara:${k}`);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string) => {
    try {
      localStorage.setItem(`ordinara:${k}`, v);
    } catch {
      /* storage tidak tersedia */
    }
  },
};
const params = new URLSearchParams(location.search);
const state = {
  dark: params.has("dark") || (!params.has("light") && store.get("dark") === "1"),
  rtl: params.get("dir") ? params.get("dir") === "rtl" : store.get("dir") === "rtl",
  theme: params.get("theme") ?? store.get("theme") ?? "default",
  collapsed: store.get("collapsed") === "1",
};

function applyState() {
  root.classList.toggle("dark", state.dark);
  root.dir = state.rtl ? "rtl" : "ltr";
  if (state.theme === "default") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", state.theme);
  shell.dataset["collapsed"] = String(state.collapsed);
  store.set("dark", state.dark ? "1" : "0");
  store.set("dir", state.rtl ? "rtl" : "ltr");
  store.set("theme", state.theme);
  store.set("collapsed", state.collapsed ? "1" : "0");
}

/* ---------- markup ---------- */
const groups = ["Overview", "Foundation", "Helpers", "Components", "Forms", "Typography", "Plugins"] as const;

const navItem = (p: Page) => `
  <a href="#/${p.id}" data-nav="${p.id}" data-search="${(p.title + " " + p.group).toLowerCase()}" title="${p.title}"
     class="flex cursor-pointer items-center gap-3 rounded-control px-3 py-2.5 text-sm font-medium text-fg-muted transition-[color,background-color] duration-normal hover:bg-neutral-100/80 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 aria-[current=page]:bg-primary-50 aria-[current=page]:text-primary-700 aria-[current=page]:hover:bg-primary-50">
    <span class="flex w-6 shrink-0 items-center justify-center">${icon({ name: p.icon, size: 20 })}</span>
    <span class="truncate group-data-[collapsed=true]/shell:lg:hidden">${p.title}</span>
  </a>`;

const navGroup = (g: (typeof groups)[number]) => !pages.some((p) => p.group === g) ? "" : `
  <div data-group="${g}" class="space-y-1">
    <div class="px-3 pb-1 pt-4 text-micro font-semibold uppercase tracking-wider text-fg-subtle group-data-[collapsed=true]/shell:lg:hidden">${g}</div>
    ${pages.filter((p) => p.group === g).map(navItem).join("")}
  </div>`;

const ctl =
  "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-control border border-border bg-surface px-2.5 text-sm font-medium text-neutral-700 transition-colors duration-fast hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2";

shell.innerHTML = `
  <div id="scrim" class="fixed inset-0 z-overlay hidden bg-neutral-950/50 lg:hidden"></div>
  <aside id="sidebar" class="fixed inset-y-0 start-0 z-overlay flex w-64 -translate-x-full flex-col border-e border-border/70 bg-surface transition-[transform,width] duration-300 ease-in-out rtl:translate-x-full lg:static lg:translate-x-0 lg:rtl:translate-x-0 group-data-[collapsed=true]/shell:lg:w-[72px]">
    <div class="flex h-16 items-center gap-3 border-b border-border/70 px-4">
      ${logoMark({ size: 36 })}
      <div class="min-w-0 flex-1 group-data-[collapsed=true]/shell:lg:hidden">
        <div class="font-display text-lg font-extrabold leading-4 tracking-tight">Ordinara</div>
        <div class="text-micro text-fg-muted">Design System · v0.1.0</div>
      </div>
      <button id="collapse" type="button" aria-label="Ciutkan sidebar" class="hidden size-8 items-center justify-center rounded-control text-fg-muted hover:bg-neutral-100 lg:inline-flex group-data-[collapsed=true]/shell:lg:hidden">${icon({ name: "panel-left-close", size: 18 })}</button>
    </div>
    <div class="px-3 pt-3 group-data-[collapsed=true]/shell:lg:hidden">
      <label class="flex h-10 items-center gap-2 rounded-control border border-border bg-surface px-3.5 text-sm text-fg-subtle focus-within:border-primary-400 focus-within:ring-4 focus-within:ring-primary-500/10">
        ${icon({ name: "search", size: 16 })}
        <input id="search" type="search" placeholder="Cari halaman…" aria-label="Cari halaman" class="min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-sm text-neutral-700 shadow-none outline-none ring-0 placeholder:text-fg-subtle focus:border-0 focus:outline-none focus:ring-0 [&::-webkit-search-cancel-button]:hidden" />
        <kbd class="rounded-sm border border-border px-1 text-micro">⌘K</kbd>
      </label>
    </div>
    <button id="expand" type="button" aria-label="Lebarkan sidebar" class="mx-auto mt-3 hidden size-9 items-center justify-center rounded-control text-fg-muted hover:bg-neutral-100 group-data-[collapsed=true]/shell:lg:inline-flex">${icon({ name: "panel-left-open", size: 18 })}</button>
    <nav id="nav" class="flex-1 overflow-y-auto px-3 pb-3">${groups.map(navGroup).join("")}<p id="empty" class="hidden px-3 py-6 text-sm text-fg-muted">Tidak ada hasil.</p></nav>
    <div class="border-t border-border/70 p-3 group-data-[collapsed=true]/shell:lg:hidden">
      <a href="https://github.com/dumns/ordinara" target="_blank" rel="noreferrer" class="flex items-center gap-2 rounded-control px-3 py-2 text-xs text-fg-muted hover:bg-neutral-100">${icon({ name: "external-link", size: 14 })}<span>github.com/dumns/ordinara</span></a>
    </div>
  </aside>
  <div class="flex min-w-0 flex-1 flex-col">
    <header class="flex h-16 shrink-0 items-center gap-3 border-b border-border/70 bg-surface/80 px-4 backdrop-blur sm:px-6">
      <button id="menu" type="button" aria-label="Buka menu" class="${ctl} lg:hidden">${icon({ name: "menu", size: 18 })}</button>
      <nav aria-label="Breadcrumb" class="flex min-w-0 items-center gap-1.5 text-sm"><span id="crumb-group" class="hidden text-fg-muted sm:inline"></span>${icon({ name: "chevron-right", size: 14, class: "hidden text-fg-subtle sm:block" })}<span id="crumb-title" class="truncate font-semibold"></span></nav>
      <div class="ms-auto flex items-center gap-2">
        <select id="theme" aria-label="Tema brand" class="h-9 rounded-control border border-border bg-surface py-0 ps-3 pe-9 text-sm text-neutral-700">
          <option value="default">default</option><option value="violet">violet</option><option value="emerald">emerald</option>
        </select>
        <button id="rtl" type="button" aria-label="Alihkan arah RTL" aria-pressed="false" class="${ctl} text-xs aria-pressed:bg-primary-50 aria-pressed:text-primary-700">RTL</button>
        <button id="dark" type="button" aria-label="Alihkan mode gelap" class="${ctl}"><span class="dark:hidden">${icon({ name: "moon", size: 18 })}</span><span class="hidden dark:inline">${icon({ name: "sun", size: 18 })}</span></button>
      </div>
    </header>
    <main id="main" class="flex-1 overflow-y-auto">
      <div class="mx-auto max-w-[96rem] space-y-6 px-4 py-8 sm:px-8 lg:px-10">
        <div id="head" class="space-y-1"><h1 id="title" class="font-display text-2xl font-bold tracking-tight"></h1><p id="desc" class="max-w-2xl text-sm text-fg-muted"></p></div>
        <div id="page"></div>
      </div>
    </main>
  </div>`;

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

/* ---------- routing ---------- */
let routeToken = 0;
async function route() {
  // Hash selain "#/<halaman>" (mis. "#" dari tautan placeholder) bukan navigasi halaman: abaikan.
  if (location.hash && !location.hash.startsWith("#/")) return;
  const token = ++routeToken;
  const id = location.hash.replace(/^#\//, "") || "overview";
  const page = pages.find((p) => p.id === id) ?? pages[0]!;
  $("head").classList.toggle("hidden", page.id === "overview");
  $("title").textContent = page.title;
  $("desc").innerHTML = page.description;
  $("crumb-group").textContent = page.group;
  $("crumb-title").textContent = page.title;
  $("page").innerHTML = `<p class="py-10 text-sm text-fg-muted">Memuat…</p>`;
  const html = await page.render();
  if (token !== routeToken) return;
  $("page").innerHTML = html;
  void initLibrary($("page"));
  document.title = `${page.title} · Ordinara`;
  shell.querySelectorAll<HTMLAnchorElement>("[data-nav]").forEach((a) => {
    if (a.dataset["nav"] === page.id) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  $("main").scrollTo({ top: 0 });
  closeMenu();
}
window.addEventListener("hashchange", route);

/* ---------- mobile menu ---------- */
const openMenu = () => {
  $("sidebar").classList.remove("-translate-x-full", "rtl:translate-x-full");
  $("scrim").classList.remove("hidden");
};
function closeMenu() {
  $("sidebar").classList.add("-translate-x-full", "rtl:translate-x-full");
  $("scrim").classList.add("hidden");
}
$("menu").addEventListener("click", openMenu);
$("scrim").addEventListener("click", closeMenu);

/* ---------- controls ---------- */
const syncControls = () => {
  $("rtl").setAttribute("aria-pressed", String(state.rtl));
  ($("theme") as HTMLSelectElement).value = state.theme;
};
const update = () => {
  applyState();
  syncControls();
};
$("dark").addEventListener("click", () => ((state.dark = !state.dark), update()));
$("rtl").addEventListener("click", () => ((state.rtl = !state.rtl), update()));
$("theme").addEventListener("change", (e) => ((state.theme = (e.target as HTMLSelectElement).value), update()));
$("collapse").addEventListener("click", () => ((state.collapsed = true), update()));
$("expand").addEventListener("click", () => ((state.collapsed = false), update()));

/* ---------- search ---------- */
const search = $("search") as HTMLInputElement;
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  let any = false;
  shell.querySelectorAll<HTMLElement>("[data-nav]").forEach((a) => {
    const hit = !q || (a.dataset["search"] ?? "").includes(q);
    a.classList.toggle("hidden", !hit);
    any ||= hit;
  });
  shell.querySelectorAll<HTMLElement>("[data-group]").forEach((g) => {
    g.classList.toggle("hidden", !g.querySelector("[data-nav]:not(.hidden)"));
  });
  $("empty").classList.toggle("hidden", any);
});
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (state.collapsed) ((state.collapsed = false), update());
    openMenu();
    search.focus();
  } else if (e.key === "Escape" && document.activeElement === search) {
    search.blur();
    closeMenu();
  }
});

update();
route();
