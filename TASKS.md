# Ordinara — Task & Checklist

Dokumen ini adalah sumber kebenaran progres pekerjaan. **Wajib diperbarui di PR yang sama** dengan perubahannya.

## Aturan pakai

- Centang (✅) hanya setelah dikerjakan **dan** diverifikasi (bukan sekadar ditulis).
- **Rilis bertahap**: satu versi hanya memuat komponen yang dijadwalkan di `packages/ui/library-manifest.json` (kolom *Versi*). Versi saat ini: **0.1.0** (komponen inti). Komponen lain menyusul di versi berikutnya (MINOR).
- Halaman pustaka di-generate (`npm run gen:library -w @ordinara/ui`); jangan diedit manual. Komponen baru di luar pustaka ditambahkan ke bagian 7.
- Kolom *Code*: data/markup di `@ordinara/ui`. *HTML Preview*: halaman `apps/preview`. *Storybook*: story di `apps/storybook`. Ketiganya berasal dari satu sumber.
- Untuk halaman pustaka, ✅ Code/HTML/Storybook berarti **lolos penyapuan otomatis** (semua contoh ter-render, interaksi aktif, tanpa error konsol, tanpa teks/aset brand lain).
- *Dark*: tampil benar di light & dark (diperiksa per halaman). *A11y*: kontras AA, keyboard, ARIA, addon a11y Storybook bersih. *Changelog*: tercakup di `CHANGELOG.md` untuk versi terkait.
- *Ditambahkan*: tanggal komponen **dibuat** (kosong selama belum dibuat). *Selesai*: tanggal semua kolom terpenuhi.
- Format tanggal `YYYY-MM-DD`. ⬜ = belum, ✅ = selesai.

## Ringkasan

| Bagian | Total | Masuk versi 0.1.0 | Selesai |
|---|---|---|---|
| Infrastruktur & rilis | 20 | - | 12 |
| Foundation | 12 | - | 11 |
| Components | 44 | 17 | 0 |
| Forms | 13 | 7 | 0 |
| Typography | 9 | 1 | 0 |
| Plugins | 4 | 0 | 0 |
| Helpers & tambahan | 5 | - | 0 |
| Improvement sebelum rilis 0.1.0 | 9 | - | 0 |

> "Selesai" menunggu audit a11y dan pemeriksaan dark per halaman. Angka diperbarui manual.

## 1. Infrastruktur & rilis

| # | Item | Ditambahkan | Selesai | Status | Catatan |
|---|---|---|---|---|---|
| 1 | Monorepo npm workspaces | 2026-10-15 | 2026-10-15 | ✅ |  |
| 2 | Storybook terpasang & build lolos | 2026-10-15 | 2026-10-15 | ✅ | Story per section dari pustaka + foundation + helper |
| 3 | Preview HTML terpasang & build lolos | 2026-10-15 | 2026-10-15 | ✅ | App shell dengan sidebar, topbar, routing hash |
| 4 | Satu sumber markup untuk Storybook & preview | 2026-10-15 | 2026-10-15 | ✅ | Data halaman + fungsi render bersama |
| 5 | CHANGELOG.md awal | 2026-10-15 | 2026-10-15 | ✅ |  |
| 6 | Generator pustaka komponen (halaman + story + registry) | 2026-10-15 | 2026-10-15 | ✅ | `npm run gen:library -w @ordinara/ui` |
| 7 | Rilis bertahap lewat manifest versi | 2026-10-15 | 2026-10-15 | ✅ | `packages/ui/library-manifest.json` (since per halaman) |
| 8 | Jembatan token komponen -> token Ordinara | 2026-10-15 | 2026-10-15 | ✅ | `packages/tokens/src/compat.css` |
| 9 | Berkas notice lisensi pihak ketiga |  |  | ➖ | Dilewati: pengembang sama. Notice ikon tetap ada di `packages/icons/NOTICE` |
| 10 | Build package npm (dist + types) | 2026-10-25 | 2026-10-25 | ✅ | tsup (ESM + d.ts). Kondisi `source` di exports: monorepo memakai source, konsumen memakai dist. Diuji dari tarball ke proyek Vite + Tailwind terpisah. `npm run build:packages`, `npm run pack:check` |
| 11 | Changesets / otomasi changelog + tag + publish |  |  | ⬜ |  |
| 12 | Vercel project produksi (branch produksi) | 2026-10-25 |  | ⬜ | Project `ordinara` dan `ordinara-storybook` dibuat kosong, domain `ordinara.vercel.app` dan `ordinara-storybook.vercel.app` dicadangkan. Deploy menunggu branch produksi |
| 13 | Vercel project internal (branch `dev/vercel`) | 2026-10-25 | 2026-10-25 | ✅ | `ordinara-dev` (preview) dan `ordinara-storybook-dev` (Storybook). Ignored Build Step: hanya `dev/vercel` yang membangun. Production Branch diatur di dashboard |
| 14 | Branch permanen `development` dan `dev/vercel` | 2026-10-25 | 2026-10-25 | ✅ |  |
| 15 | CI (typecheck, build storybook & preview) |  |  | ⬜ |  |
| 16 | Lint + format |  |  | ⬜ |  |
| 17 | Visual regression / a11y test |  |  | ⬜ |  |
| 18 | Library Figma + versi selaras |  |  | ⬜ |  |
| 19 | Branch produksi (nama dipilih nanti; `release` bentrok dengan `release/<v>`) |  |  | ⬜ | Dibuat saat siap rilis |
| 20 | AGENTS.md dan CLAUDE.md di repo | 2026-10-25 | 2026-10-25 | ✅ | Aturan untuk agen AI; `CLAUDE.md` mengimpor `AGENTS.md` |

## 2. Foundation

| # | Item | Ditambahkan | Selesai | Status | Catatan |
|---|---|---|---|---|---|
| 1 | Design tokens (primitive + semantic) | 2026-10-15 | 2026-10-15 | ✅ | Primitive `@theme static` + alias `@theme inline`; dark membalik skala primitive (`.dark` / `data-theme=dark`) |
| 2 | Dark mode | 2026-10-15 | 2026-10-15 | ✅ | Diverifikasi di preview & Storybook (light/dark, bersarang). Pakai token, hindari `dark:` |
| 3 | Configuration (Tailwind + plugin komponen) | 2026-10-15 | 2026-10-15 | ✅ | Tailwind v4 CSS-first; `@source` bundel JS plugin + safelist class plugin |
| 4 | Brand identity (logo, tipografi, bentuk) | 2026-10-15 | 2026-10-15 | ✅ | Logo 3 batang berurutan, font display dengan metrik vertikal terkoreksi. Halaman Brand identity di Storybook + preview. Tampilan sengaja tenang dan profesional |
| 5 | Colors / palette status (info, success, warning, danger) | 2026-10-15 | 2026-10-15 | ✅ | Skala primary (biru), secondary (oranye), neutral (slate), success/warning/danger/info 50–950. Kontras AA belum diaudit |
| 6 | Typography scale | 2026-10-15 | 2026-10-15 | ✅ | Font Ordinara (opsional via `fonts.css`) + skala default Tailwind + `text-btn-lg`, `text-micro` |
| 7 | Spacing, radius, shadow scale | 2026-10-15 | 2026-10-15 | ✅ | Grid 4px; radius control/card/check/frame; shadow card/card-lg/glow-primary; z-index dropdown 20 / sticky 30 / overlay 40 / toast 50 |
| 8 | Theming (multi-tema) | 2026-10-15 | 2026-10-15 | ✅ | `data-theme`: default, violet, emerald (menimpa skala primary; light+dark, bersarang) |
| 9 | Icons | 2026-10-15 | 2026-10-15 | ✅ | Set ikon terkurasi via `gen:icons` (regular/bold/fill); ikon berarah flip di RTL |
| 10 | RTL | 2026-10-15 | 2026-10-15 | ✅ | Diverifikasi `dir=rtl` di preview & Storybook; aturan utilitas logis |
| 11 | Optimization (purge/bundle size) | 2026-10-15 | 2026-10-15 | ✅ | `npm run size` dengan budget CSS 60 kB gzip |
| 12 | Motion tokens (+ prefers-reduced-motion) | 2026-10-15 |  | ⬜ | Durasi/easing/animasi ada; reduced-motion belum diuji di browser |
| 13 | Icon classes `ori` (CSS mask + font) | 2026-10-25 | 2026-10-25 | ✅ | `@ordinara/icons`: `ori ori-nama`, `ori-bold`, `ori-fill`. Mask: 220 ikon (~31 kB gzip per bobot, build `build:mask`). Font: 1.512 ikon, woff2 ~127 kB per bobot (build `build:font`, tidak di-commit). Render kedua jalur identik; halaman Icons memuat katalog, cari, dan salin class |

## 3. Components

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Accordion |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 2 | Alerts | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ✅ | ⬜ | ✅ | 8 section, 8 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 3 | Avatar | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 10 section, 10 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 4 | Badges | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 17 section, 17 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 5 | Sticky Banner |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (5 section, 5 contoh tersedia) |
| 6 | Bottom Navigation |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (8 section, 8 contoh tersedia) |
| 7 | Breadcrumbs | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 6 section, 6 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 8 | Buttons | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 17 section, 17 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 9 | Button Group | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 13 section, 13 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 10 | Cards | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 16 section, 16 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 11 | Carousel |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (4 section, 4 contoh tersedia) |
| 12 | Chat Bubble |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (18 section, 18 contoh tersedia) |
| 13 | Copy to Clipboard |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (9 section, 9 contoh tersedia) |
| 14 | Datepicker |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (10 section, 10 contoh tersedia) |
| 15 | Device Mockups |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (8 section, 8 contoh tersedia) |
| 16 | Drawer (offcanvas) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (13 section, 13 contoh tersedia) |
| 17 | Dropdown | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 27 section, 27 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 18 | Footer |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (5 section, 5 contoh tersedia) |
| 19 | Forms |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (15 section, 15 contoh tersedia) |
| 20 | Gallery (Masonry) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 21 | Indicators |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (9 section, 9 contoh tersedia) |
| 22 | Jumbotron |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (6 section, 6 contoh tersedia) |
| 23 | KBD (Keyboard) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 24 | List Group | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 7 section, 7 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 25 | Mega Menu |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (5 section, 5 contoh tersedia) |
| 26 | Modal | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ✅ | ⬜ | ✅ | 11 section, 11 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 27 | Navbar |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (12 section, 12 contoh tersedia) |
| 28 | Pagination | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 11 section, 11 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 29 | Popover |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (12 section, 12 contoh tersedia) |
| 30 | Progress Bar | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 5 section, 5 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 31 | QR Code Generator |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 32 | Rating |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (8 section, 8 contoh tersedia) |
| 33 | Sidebar | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 7 section, 7 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 34 | Skeleton |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (8 section, 8 contoh tersedia) |
| 35 | Speed Dial |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (14 section, 14 contoh tersedia) |
| 36 | Spinner |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 37 | Stepper |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 38 | Table | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ✅ | ⬜ | ✅ | 21 section, 21 contoh; render + interaksi lolos penyapuan, tanpa error konsol (satu peringatan konsol bawaan contoh: crud-modal) |
| 39 | Tabs | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 9 section, 9 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 40 | Timeline |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (5 section, 5 contoh tersedia) |
| 41 | Toast | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 12 section, 12 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 42 | Tooltip | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 6 section, 6 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 43 | Typography |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (0 section, 0 contoh tersedia) |
| 44 | Video |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |

## 4. Forms

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Input Field | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 8 section, 8 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 2 | File Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (6 section, 6 contoh tersedia) |
| 3 | Search Input | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 6 section, 6 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 4 | Number Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (13 section, 13 contoh tersedia) |
| 5 | Phone Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 6 | Select | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 7 section, 7 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 7 | Textarea | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 4 section, 4 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 8 | Timepicker |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (10 section, 10 contoh tersedia) |
| 9 | Checkbox | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 13 section, 13 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 10 | Radio | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 11 section, 11 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 11 | Toggle | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 9 section, 9 contoh; render + interaksi lolos penyapuan, tanpa error konsol |
| 12 | Range Slider |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (6 section, 6 contoh tersedia) |
| 13 | Floating Label |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (6 section, 6 contoh tersedia) |

## 5. Typography

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Headings |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (15 section, 15 contoh tersedia) |
| 2 | Paragraphs |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (15 section, 15 contoh tersedia) |
| 3 | Blockquote |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (12 section, 12 contoh tersedia) |
| 4 | Images |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (16 section, 16 contoh tersedia) |
| 5 | Lists |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (11 section, 11 contoh tersedia) |
| 6 | Links |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (8 section, 8 contoh tersedia) |
| 7 | Text |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (21 section, 21 contoh tersedia) |
| 8 | Text Decoration |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (0 section, 0 contoh tersedia) |
| 9 | Horizontal Line (HR) | 2026-10-15 |  | 0.1.0 | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | 5 section, 5 contoh; render + interaksi lolos penyapuan, tanpa error konsol |

## 6. Plugins

Charts memakai pustaka grafik, Datatables memakai pustaka tabel data. Wysiwyg memuat editor dari CDN saat runtime (butuh internet).

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Charts |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (15 section, 15 contoh tersedia) |
| 2 | Datatables |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (7 section, 7 contoh tersedia) |
| 3 | Datepicker |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (0 section, 0 contoh tersedia) |
| 4 | WYSIWYG Text Editor |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Belum dijadwalkan (10 section, 10 contoh tersedia) |

## 7. Helpers & tambahan

Helper TS (fungsi yang menghasilkan markup) dan komponen tambahan yang muncul di tengah jalan. Tambahkan baris baru di sini.

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | button() | 2026-10-15 |  |  | ✅ | ✅ | ✅ | ✅ | ⬜ | ✅ | 7 varian, sm/md/lg, ikon, loading. Dark diverifikasi. Sisa: a11y |
| 2 | badge() | 2026-10-15 |  |  | ✅ | ✅ | ✅ | ✅ | ⬜ | ✅ | 7 tone; dot, rounded, large, bordered. Dark diverifikasi. Sisa: a11y |
| 3 | card() / statCard() / heroCard() | 2026-10-15 |  |  | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | Card dasar, stat card, hero gradient. Sisa: dark, a11y |
| 4 | frame() | 2026-10-15 |  |  | ✅ | ✅ | ✅ | ⬜ | ⬜ | ✅ | Tiga titik, judul mono, tab pill. Sisa: dark, a11y |
| 5 | Alert Stack (Flag) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Wajib: menumpuk atas → bawah, batas jumlah, auto-dismiss, aria-live |

## 8. Improvement sebelum rilis 0.1.0

Syarat rilis 0.1.0 yang masih terbuka. Centang hanya setelah diverifikasi.

| # | Item | Ditambahkan | Selesai | Status | Catatan |
|---|---|---|---|---|---|
| 1 | Pemeriksaan dark mode per halaman (25 halaman) | 2026-10-25 |  | ⬜ | Kolom Dark di tabel komponen |
| 2 | Audit a11y (25 halaman) | 2026-10-25 |  | ⬜ | Kolom A11y di tabel komponen |
| 3 | Tinjauan visual halaman tersisa | 2026-10-25 |  | ⬜ | Search Input, Textarea, Modal, Progress, List Group, Tabs, Toast, Tooltips, HR; Sidebar, Tables, Dropdowns baru slice pertama |
| 4 | Keputusan tabel: search dan sortir | 2026-10-25 |  | ⬜ | Halaman Datatables, skrip perilaku, atau terima statis dan dokumentasikan |
| 5 | Perbaiki galat konsol `crud-modal` di contoh Table with modal | 2026-10-25 |  | ⬜ | Contoh memanggil modal yang didefinisikan di contoh lain |
| 6 | Breadcrumb dengan dropdown di mobile | 2026-10-25 |  | ⬜ | Sekarang bisa digeser; ringkas jadi ikon |
| 7 | Warna toggle "Colors" diselaraskan dengan palet Ordinara | 2026-10-25 |  | ⬜ | Saat ini warna bawaan contoh |
| 8 | CI (typecheck, build) dan lint + format | 2026-10-25 |  | ⬜ | Lihat Infrastruktur #15 dan #16 |
| 9 | Branch produksi, `release/0.1.0`, deploy produksi, tag, GitHub release, publish npm | 2026-10-25 |  | ⬜ | Hanya atas perintah |

## Log perubahan daftar

| Tanggal | Perubahan |
|---|---|
| 2026-10-15 | Daftar awal dibuat (Components, Forms, Typography, Plugins). |
| 2026-10-15 | Foundation dikerjakan; preview HTML diubah menjadi app shell dengan sidebar. |
| 2026-10-15 | Token dan helper ditulis ulang sebagai identitas visual Ordinara. |
| 2026-10-15 | Identitas Ordinara ditambahkan: logo, font display, halaman Brand identity. |
| 2026-10-15 | Pustaka komponen di-generate (70 halaman tersedia) dengan rilis bertahap lewat manifest; v0.1.0 memuat 25 halaman inti. Brand disatukan menjadi Ordinara. |
| 2026-10-25 | Paket `@ordinara/icons` ditambahkan: class `ori` lewat CSS mask dan font, katalog di halaman Icons. |
| 2026-10-15 | Perbaikan: tautan placeholder tidak lagi ke Overview; contoh sidebar/navbar dikurung bingkai; select/dropdown di-style; aset dan deskripsi hasil generator dibersihkan. |
| 2026-10-25 | Perbaikan form: checkbox, radio, toggle (mati), dan border input/textarea/select lebih terlihat. |
| 2026-10-25 | Storybook: Gallery di urutan pertama untuk 25 komponen pustaka dan 4 story tulis-tangan (Badge, Button, Card, Frame). |
| 2026-10-25 | Preview: area konten dilebarkan dan sidebar menjadi teks tanpa ikon. |
| 2026-10-25 | Perbaikan layar sempit (uji di perangkat): baris membungkus, badge/tombol/toggle tidak penyok, tooltip tidak terpotong, tombol form jadi ikon, pagination membungkus, contoh lebar bisa digeser. |
| 2026-10-25 | Perbaikan drawer: contoh di atas backdrop dan di bawah menu aplikasi (sempat regresi z-index, sudah diperbaiki). |
| 2026-10-25 | Masih terbuka: search/sort tabel, galat konsol modal di Table, Breadcrumb dropdown di mobile, warna toggle Colors, peninjauan visual halaman tersisa dan dark mode. |
| 2026-10-25 | Build paket npm (tokens, icons, ui) dengan dist + types, diuji dari tarball; AGENTS.md dan CLAUDE.md ditambahkan; status Vercel dan branch permanen diperbarui; bagian "Improvement sebelum rilis 0.1.0" ditambahkan. |
| 2026-10-31 | Rilis 0.1.0: CHANGELOG diberi tanggal, branch release/0.1.0, merge ke master, branch produksi, tag v0.1.0. |
