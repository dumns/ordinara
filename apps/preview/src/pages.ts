import {
  badge,
  button,
  card,
  libraryRegistry,
  foundationSections,
  renderBadgeDemo,
  renderButtonDemo,
  renderCardDemo,
  renderLibraryPage,
  renderFrameDemo,
  type IconName,
} from "@ordinara/ui";

export type PageGroup = "Overview" | "Foundation" | "Helpers" | "Components" | "Forms" | "Typography" | "Plugins";

export interface Page {
  id: string;
  group: PageGroup;
  title: string;
  description: string;
  icon: IconName;
  render: () => string | Promise<string>;
}

const foundationMeta: Record<string, { icon: IconName; description: string }> = {
  identity: { icon: "sparkles", description: "Logo, warna, tipografi, dan bentuk: ciri yang membuat Ordinara dikenali." },
  colors: { icon: "palette", description: "Skala primary, secondary, neutral, dan status (50–950), token semantic, serta gradient brand." },
  typography: { icon: "type", description: "Skala tipografi dari label micro sampai display, plus monospace." },
  shape: { icon: "shapes", description: "Radius, shadow, spacing grid 4px, dan layering z-index." },
  motion: { icon: "zap", description: "Durasi, easing, dan animasi. Dinolkan saat prefers-reduced-motion." },
  icons: { icon: "star", description: "Set ikon (regular, bold, fill). Ikon berarah dicerminkan otomatis di RTL." },
  theming: { icon: "swatch-book", description: "Tema brand lewat data-theme dan dark mode lewat .dark; keduanya bisa bersarang." },
  rtl: { icon: "languages", description: "Dukungan right-to-left dengan utilitas logis." },
};

const foundationPages: Page[] = foundationSections.map((s) => ({
  id: s.id,
  group: "Foundation",
  title: s.title,
  description: foundationMeta[s.id]?.description ?? "",
  icon: foundationMeta[s.id]?.icon ?? "star",
  render: s.render,
}));

/** Helper TS: fungsi yang menghasilkan markup (button(), badge(), card(), frame()). */
const helperPages: Page[] = [
  { id: "helpers/button", group: "Helpers", title: "button()", icon: "mouse-pointer-click", description: "Helper TS untuk tombol: 7 varian, sm/md/lg, ikon, loading.", render: renderButtonDemo },
  { id: "helpers/badge", group: "Helpers", title: "badge()", icon: "star", description: "Helper TS untuk badge: tone, titik, rounded, large, bordered.", render: renderBadgeDemo },
  { id: "helpers/card", group: "Helpers", title: "card()", icon: "layout-dashboard", description: "Helper TS untuk card dasar, stat card, dan kartu hero bergradasi.", render: renderCardDemo },
  { id: "helpers/frame", group: "Helpers", title: "frame()", icon: "panel-left-open", description: "Helper TS untuk bingkai bergaya jendela yang membungkus preview.", render: renderFrameDemo },
];

const libraryIcons: Record<string, IconName> = {
  alerts: "triangle-alert", avatar: "user", badge: "star", banner: "bell", breadcrumb: "chevron-right",
  buttons: "mouse-pointer-click", clipboard: "copy", datepicker: "calendar", drawer: "panel-left-open",
  footer: "layout-dashboard", modal: "x", navbar: "menu", sidebar: "panel-left-open", search: "search",
  "qr-code": "qr-code", tables: "chart-bar", tabs: "layout-dashboard", toast: "bell", tooltips: "info",
  "input-field": "pencil", checkbox: "check", toggle: "check", timepicker: "clock", charts: "chart-line",
};
const groupIcon: Record<string, IconName> = { Components: "shapes", Forms: "pencil", Typography: "type", Plugins: "package" };

const libraryPages: Page[] = libraryRegistry.map((e) => ({
  id: e.id,
  group: e.group,
  title: e.title,
  description: e.intro,
  icon: libraryIcons[e.id.split("/")[1] ?? ""] ?? groupIcon[e.group] ?? "shapes",
  render: async () => renderLibraryPage(await e.load()),
}));

const contentPages: Page[] = [...foundationPages, ...helperPages, ...libraryPages];

const overviewPage: Page = {
  id: "overview",
  group: "Overview",
  title: "Overview",
  description: "",
  icon: "layout-dashboard",
  render: () => {
    const stats = (g: PageGroup) => contentPages.filter((p) => p.group === g).length;
    const total = libraryRegistry.reduce((n, e) => n + e.examples, 0);
    return `<div class="space-y-8">
    <section class="space-y-5 pb-2 pt-2">
      ${badge({ label: "Ordinara · Design System v0.1.0", tone: "primary", dot: true })}
      <h2 class="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl">Tatanan yang terukur<br /><span class="text-primary-600">untuk setiap produk.</span></h2>
      <p class="max-w-2xl text-base text-fg-muted">Komponen siap pakai dengan token, dark mode, tema, dan RTL. ${libraryRegistry.length} halaman, ${total} contoh; setiap contoh punya preview HTML dan Storybook yang sinkron.</p>
      <div class="flex flex-wrap gap-3">
        <a href="#/components/buttons" class="contents">${button({ label: "Jelajahi komponen", size: "lg", iconEnd: "arrow-right" })}</a>
        <a href="#/identity" class="contents">${button({ label: "Brand identity", size: "lg", variant: "outline" })}</a>
      </div>
    </section>
    <section class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${(["Foundation", "Helpers", "Components", "Forms", "Typography", "Plugins"] as PageGroup[])
      .filter((g) => stats(g) > 0)
      .map((g) => {
        const first = contentPages.find((p) => p.group === g)!;
        return card({ title: g, description: `${stats(g)} halaman`, badgeLabel: "Bagian", link: "Buka", href: `#/${first.id}` });
      })
      .join("")}</section></div>`;
  },
};

export const pages: Page[] = [overviewPage, ...contentPages];
