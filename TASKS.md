# Ordinara — Task & Checklist

Dokumen ini adalah sumber kebenaran progres pekerjaan. **Wajib diperbarui di PR yang sama** dengan perubahannya.

## Aturan pakai

- Centang (✅) hanya setelah dikerjakan **dan** diverifikasi (bukan sekadar ditulis).
- Komponen baru yang muncul di tengah jalan **harus** ditambahkan ke tabel (bagian "Tambahan di luar Flowbite") lengkap dengan tanggal ditambahkan.
- Kolom *Code*: komponen di `@ordinara/ui`. *HTML Preview*: halaman `apps/preview`. *Storybook*: story di `apps/storybook`. Ketiganya harus sinkron (satu sumber markup/style).
- *Dark*: tampil benar di light & dark. *A11y*: kontras AA, keyboard, ARIA, addon a11y Storybook bersih.
- *Changelog*: entri sudah ditulis di `CHANGELOG.md` untuk versi terkait (level SemVer ditentukan: MAJOR/MINOR/PATCH).
- *Versi*: versi rilis tempat komponen pertama kali masuk. Kosong = belum masuk rilis.
- *Ditambahkan*: tanggal komponen **dibuat** (kosong selama belum dibuat). *Selesai*: tanggal semua kolom terpenuhi.
- Format tanggal `YYYY-MM-DD`. ⬜ = belum, ✅ = selesai.

Sumber daftar komponen: https://flowbite.com/docs/components/ (Components, Forms, Typography, Plugins, Customize) dan https://flowbite.com/docs/components/tables/.

## Ringkasan

| Bagian | Total | Selesai |
|---|---|---|
| Infrastruktur & rilis | 14 | 4 |
| Foundation (Customize) | 11 | 1 |
| Components | 44 | 0 |
| Forms | 13 | 0 |
| Typography | 8 | 0 |
| Plugins | 3 | 0 |
| Tables (varian) | 17 | 0 |
| Tambahan di luar Flowbite | 1 | 0 |

> Angka ringkasan diperbarui manual saat mencentang.

## 1. Infrastruktur & rilis

| # | Item | Ditambahkan | Selesai | Status | Catatan |
|---|---|---|---|---|---|
| 1 | Monorepo npm workspaces | 2026-10-15 | 2026-10-15 | ✅ |  |
| 2 | Storybook terpasang & build lolos | 2026-10-15 | 2026-10-15 | ✅ |  |
| 3 | Preview HTML terpasang & build lolos | 2026-10-15 | 2026-10-15 | ✅ |  |
| 4 | Satu sumber markup untuk Storybook & preview | 2026-10-15 | 2026-10-15 | ✅ |  |
| 5 | CHANGELOG.md awal |  |  | ⬜ |  |
| 6 | Build package npm (dist + types) |  |  | ⬜ |  |
| 7 | Changesets / otomasi changelog + tag + publish |  |  | ⬜ |  |
| 8 | Vercel project produksi (branch `release`) |  |  | ⬜ |  |
| 9 | Vercel project internal (branch `dev/vercel`) |  |  | ⬜ |  |
| 10 | Branch permanen `development`, `release`, `dev/vercel` |  |  | ⬜ |  |
| 11 | CI (typecheck, build storybook & preview) |  |  | ⬜ |  |
| 12 | Lint + format |  |  | ⬜ |  |
| 13 | Visual regression / a11y test |  |  | ⬜ |  |
| 14 | Library Figma + versi selaras |  |  | ⬜ |  |

## 2. Foundation (Customize)

| # | Item | Ditambahkan | Selesai | Status | Catatan |
|---|---|---|---|---|---|
| 1 | Design tokens (primitive + semantic) | 2026-10-15 |  | ⬜ | Awal ada di @ordinara/tokens; belum lengkap |
| 2 | Dark mode | 2026-10-15 |  | ⬜ | Class `.dark` + token semantic ada; belum diverifikasi di browser |
| 3 | Configuration (Tailwind + Flowbite) | 2026-10-15 | 2026-10-15 | ✅ | Tailwind v4 CSS-first + plugin Flowbite |
| 4 | Colors / palette status (info, success, warning, danger) |  |  | ⬜ |  |
| 5 | Typography scale |  |  | ⬜ |  |
| 6 | Spacing, radius, shadow scale |  |  | ⬜ |  |
| 7 | Theming (multi-tema) |  |  | ⬜ |  |
| 8 | Icons |  |  | ⬜ |  |
| 9 | RTL |  |  | ⬜ |  |
| 10 | Optimization (purge/bundle size) |  |  | ⬜ |  |
| 11 | Motion tokens (+ prefers-reduced-motion) |  |  | ⬜ |  |

## 3. Components

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Accordion |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 2 | Alerts |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Inline alert (mendorong konten ke bawah). Lihat juga Alert Stack. |
| 3 | Avatar |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Termasuk avatar group |
| 4 | Badge |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Termasuk lozenge/status pill |
| 5 | Banner |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 6 | Bottom Navigation |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 7 | Breadcrumb |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 8 | Buttons | 2026-10-15 |  |  | ✅ | ✅ | ✅ | ⬜ | ⬜ | ⬜ | Seed: code, preview, story ✅. Sisa: verifikasi dark di browser, a11y, state & ikon, changelog |
| 9 | Button Group |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 10 | Card |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 11 | Carousel |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 12 | Chat Bubble |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 13 | Clipboard |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 14 | Datepicker |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 15 | Device Mockups |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 16 | Drawer |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 17 | Dropdowns |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 18 | Footer |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 19 | Forms |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Pola layout form + validasi (rujuk bagian Forms) |
| 20 | Gallery |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 21 | Indicators |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 22 | Jumbotron |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 23 | KBD |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 24 | List Group |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 25 | Mega Menu |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 26 | Modal |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 27 | Navbar |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 28 | Pagination |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 29 | Popover |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 30 | Progress |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Termasuk progress segmen |
| 31 | Rating |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 32 | Sidebar |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Collapsible, grup berlabel, badge hitung |
| 33 | Skeleton |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 34 | Speed Dial |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 35 | Spinner |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 36 | Stepper |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 37 | Tables |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Rincian varian di bagian Tables |
| 38 | Tabs |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 39 | Timeline |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Dipakai activity feed |
| 40 | Toast |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Menumpuk atas → bawah; lihat Alert Stack |
| 41 | Tooltips |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 42 | Typography |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Rujuk bagian Typography |
| 43 | QR Code |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 44 | Video |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |

## 4. Forms

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Input Field |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 2 | File Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 3 | Search Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 4 | Number Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 5 | Phone Input |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 6 | Select |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 7 | Textarea |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 8 | Timepicker |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 9 | Checkbox |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 10 | Radio |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 11 | Toggle |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 12 | Range |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 13 | Floating Label |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |

## 5. Typography

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Headings |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 2 | Paragraphs |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 3 | Blockquote |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 4 | Images |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 5 | Lists |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 6 | Links |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 7 | Text |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 8 | HR |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |

## 6. Plugins

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Charts |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Wrapper chart + tooltip, ikuti skill dataviz |
| 2 | Datatables |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Berbasis Tables |
| 3 | WYSIWYG |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |

## 7. Tables — varian

Mengacu ke https://flowbite.com/docs/components/tables/. Dasar: komponen **Tables** di bagian 3; tambahan Ordinara: sort, filter, pagination, row selection, bulk action, empty/loading/error state.

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Default table |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 2 | Striped rows |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 3 | Striped columns |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 4 | Hover state |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 5 | Table head (sortable) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 6 | Table foot |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 7 | Table caption |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 8 | Without border |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 9 | Table with shadow |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 10 | Overflow scrolling |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 11 | Table search |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 12 | Table filter |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 13 | Table pagination |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 14 | Checkbox selection |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 15 | Table with users |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 16 | Table with products |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |
| 17 | Table with modal |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |  |

## 8. Tambahan di luar Flowbite

Komponen yang muncul di tengah jalan. Tambahkan baris baru di sini.

| # | Komponen | Ditambahkan | Selesai | Versi | Code | HTML Preview | Storybook | Dark | A11y | Changelog | Catatan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Alert Stack (Flag) |  |  |  | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | Wajib: menumpuk atas → bawah, batas jumlah, auto-dismiss, aria-live |

## Log perubahan daftar

| Tanggal | Perubahan |
|---|---|
| 2026-10-15 | Daftar awal dibuat dari Flowbite (Components, Forms, Typography, Plugins, Tables). Button seed selesai. |
