/**
 * Perilaku interaktif pustaka komponen.
 *
 * - `initLibrary(root)`: mengaktifkan perilaku (accordion, dropdown, modal, tabs, tooltip, dst.) lalu
 *   menjalankan skrip inisialisasi contoh. Panggil SETELAH markup masuk DOM.
 * - `runLibraryScripts(root)`: hanya skrip inisialisasi contoh (grafik, tabel data, dst.).
 */
import { initFlowbite } from "flowbite";

declare global {
  interface Window {
    ApexCharts?: unknown;
    simpleDatatables?: unknown;
  }
}

const SELECTOR = "script[data-ordinara-js]";

/** Pustaka pihak ketiga dimuat malas, hanya jika skripnya memerlukannya. */
async function ensureGlobals(code: string): Promise<void> {
  if (/ApexCharts/.test(code) && !window.ApexCharts) {
    window.ApexCharts = (await import("apexcharts")).default;
  }
  if (/simpleDatatables/.test(code) && !window.simpleDatatables) {
    window.simpleDatatables = await import("simple-datatables");
  }
}

/** Skrip contoh memakai `window.addEventListener('load', ...)`; di sini halaman sudah termuat, jadi jalankan langsung. */
function runClassic(code: string): void {
  const original = window.addEventListener.bind(window);
  window.addEventListener = ((type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => {
    if (type === "load" || type === "DOMContentLoaded") {
      queueMicrotask(() => (typeof listener === "function" ? listener(new Event(type)) : listener.handleEvent(new Event(type))));
      return;
    }
    original(type, listener, options);
  }) as typeof window.addEventListener;
  try {
    new Function(code)();
  } finally {
    window.addEventListener = original as typeof window.addEventListener;
  }
}

function runModule(code: string): void {
  const el = document.createElement("script");
  el.type = "module";
  el.textContent = code;
  document.head.append(el);
  el.remove();
}

export async function runLibraryScripts(root: ParentNode = document): Promise<void> {
  const nodes = Array.from(root.querySelectorAll<HTMLScriptElement>(SELECTOR)).filter((n) => !n.dataset["ran"]);
  for (const node of nodes) {
    node.dataset["ran"] = "1";
    const code = node.textContent ?? "";
    try {
      await ensureGlobals(code);
      if (/^\s*import\s/m.test(code)) runModule(code);
      else runClassic(code);
    } catch (error) {
      console.warn("[ordinara] skrip contoh gagal dijalankan:", error);
    }
  }
}

/** Aktifkan perilaku komponen di dalam `root`, lalu jalankan skrip contoh. */
export async function initLibrary(root: ParentNode = document): Promise<void> {
  initFlowbite();
  await runLibraryScripts(root);
}
