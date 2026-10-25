---
name: ordinara-design-system
description: Panduan membangun dan merawat design system Ordinara (Tailwind CSS, UX kompleks setara Atlassian Design System). Gunakan saat membuat/mengubah komponen, token, template, halaman dashboard, alert/flag/toast, tabel, menaikkan versi (SemVer untuk Figma), atau menjalankan git cycle (branch, commit, PR, release) di repo dumns/ordinara.
---

# Ordinara Design System

Repo: https://github.com/dumns/ordinara

## Git cycle & release flow

Jangan commit/push/merge/tag/publish tanpa diminta user. Versi mengikuti SemVer (lihat bagian Versioning); `<version>` = `X.Y.Z`.

### Branch

| Branch | Fungsi |
|---|---|
| `master` | Core point. Semua kode yang lolos review bertemu di sini. |
| `dev/<version>` | Pengembangan satu versi, mis. `dev/1.0.0`. Cabang kerja harian dibuat dari sini. |
| `release/<version>` | Stabilisasi/QA satu versi, mis. `release/1.0.0`. Hanya bugfix, bump versi, changelog. |
| `release` | Branch permanen produksi. Tersambung ke project Vercel produksi. |
| `development` | Branch permanen integrasi untuk internal/testing. Menampung `dev/<version>` yang siap dicoba. |
| `dev/vercel` | Branch permanen internal/testing. Tersambung ke project Vercel internal. |

Cabang kerja kecil: `<type>/<topik>` dari `dev/<version>` (`feat/`, `fix/`, `docs/`, `refactor/`, `chore/`), mis. `feat/alert-stack`. Commit memakai Conventional Commits, mis. `feat(alert): stack dari atas ke bawah`; tandai `!`/`BREAKING CHANGE:` bila MAJOR.

### Alur release (produksi)

`dev/<version>` → `release/<version>` → `master` → `release` → Vercel (produksi)

1. Kerja di cabang kecil, PR ke `dev/<version>` (ringkasan, level SemVer, komponen terdampak, screenshot light/dark, preview HTML & Storybook sudah diperbarui dan sinkron).
2. Fitur selesai: buat `release/<version>` dari `dev/<version>`; hanya perbaikan, bump versi (`package.json` dan Figma), dan changelog.
3. PR `release/<version>` → `master`.
4. Di `master`: `git tag v<version>` dan push tag.
5. Merge `master` → `release`; Vercel produksi deploy otomatis.
6. Publish package npm dari tag `v<version>`.

### Alur internal/testing

`dev/<version>` → `development` → `dev/vercel` (Vercel internal)

Untuk mencoba perubahan sebelum rilis. Tanpa tag dan tanpa publish npm. PR `dev/<version>` → `development`, lalu merge `development` → `dev/vercel` men-deploy project Vercel internal. Alur ini tidak melewati `master`.

### Artefak per rilis

Setiap versi rilis menghasilkan tiga hal yang harus selaras:
- **Changelog**: `CHANGELOG.md`, dikelompokkan *Breaking / Added / Changed / Fixed*, plus panduan migrasi untuk MAJOR.
- **Git tag**: `v<version>` di `master`.
- **Package npm**: versi sama dengan tag (mis. `@ordinara/*`), dipublish dari tag, bukan dari branch kerja. Versi Figma terkait dicatat di changelog.

### Aturan
- `release` hanya menerima merge dari `master`; `dev/vercel` hanya dari `development`.
- Hotfix produksi: cabang dari `release`, perbaiki, PR ke `master`, bump PATCH, tag, sinkronkan ke `release`, lalu merge balik ke `dev/<version>` aktif.

## Fondasi teknis

- **Base**: Tailwind CSS v4. Ordinara adalah design system yang berdiri sendiri: brand-nya **hanya Ordinara**. Pustaka dan sumber lain (engine komponen, font, ikon, grafik) diperlakukan sebagai plugin/dependensi internal dan **tidak disebut** di UI, preview, Storybook, dokumentasi, atau changelog. Atribusi lisensi pihak ketiga cukup di berkas notice, bukan di materi brand.
- Semua nilai visual (warna, spasi, radius, shadow, tipografi) lewat **design token** yang dipetakan ke `theme` Tailwind / CSS variables. Dilarang hardcode hex atau nilai px acak di komponen.
- Token berlapis: *primitive* (skala warna mentah) → *semantic* (`fg`, `fg-muted`, `border`, `background`, `surface`) → *component* (radius/ukuran kontrol). Komponen memakai skala dan alias ini; jangan hardcode.
- Wajib dukung **light & dark mode** lewat peta override token (lihat Acuan gaya 1:1), bukan `dark:` ad-hoc.
- Aksesibilitas: kontras WCAG AA, focus ring terlihat, navigasi keyboard, ARIA role yang benar (`role="alert"`/`status`, `aria-live`, `aria-expanded`, dll.).

## Pustaka komponen

Seluruh komponen (layout, varian, contoh) dibangun dari satu pipeline yang menghasilkan data halaman, story, dan preview dari sumber yang sama:
- **Generator**: `npm run gen:library -w @ordinara/ui` membaca sumber dokumentasi komponen (plugin, di-cache di `packages/ui/.cache`), menyesuaikannya ke brand Ordinara (teks, logo, gambar placeholder, tautan eksternal dibersihkan), lalu menghasilkan `src/library/pages/*.ts`, `src/library/registry.ts`, story Storybook per section (`apps/storybook/stories/library/*`), dan `src/library/safelist.css`. File hasil generate **jangan diedit manual**.
- **Rilis bertahap**: `packages/ui/library-manifest.json` menentukan halaman mana yang ikut versi berapa (`since`). Generator hanya membuat halaman dengan `since` <= versi paket, sehingga satu versi tidak memuat semua komponen. Untuk merilis komponen berikutnya: naikkan versi (MINOR), tambah id di manifest, jalankan generator, perbarui `TASKS.md` dan changelog. Inti 0.1.0: alerts, avatar, badge, breadcrumb, buttons, button group, card, dropdowns, list group, modal, pagination, progress, sidebar, tables, tabs, toast, tooltips, plus form (input, search, select, textarea, checkbox, radio, toggle) dan divider.
- **Gaya**: markup komponen memakai token semantik; `packages/tokens/src/compat.css` memetakan semuanya ke skala Ordinara, sehingga markup dipakai apa adanya tetapi tampil dengan warna, radius, dark mode, dan tema Ordinara. Alias `gray-*` dan `blue-*` dipetakan ke `neutral`/`primary`. Ubah tampilan lewat token, bukan dengan mengedit markup.
- **Interaktivitas**: preview dan Storybook memanggil `initLibrary(root)` dari `@ordinara/ui` setelah markup masuk DOM (mengaktifkan accordion, dropdown, modal, tabs, tooltip, serta skrip contoh seperti grafik dan tabel data).
- **Catatan teknis**: contoh modal/drawer dirender tanpa wrapper `transform` (backdrop ditempel ke `<body>`); contoh lain memakai wrapper `transform` agar elemen `fixed` tetap di dalam frame. Class yang dibuat JS saat runtime ditangani `@source` ke bundel JS plugin dan safelist.
- **Helper TS** (`button()`, `badge()`, `card()`, `frame()`) menghasilkan markup bergaya Ordinara untuk pemakaian programatik; ada di grup "Helpers".

## Arah UX: setara Atlassian Design System

Kompleksitas dan ketelitian UX mengikuti Atlassian: komponen punya state lengkap, perilaku terdefinisi, dan pola yang konsisten, bukan sekadar tampilan.

### Alert / Flag / Toast — menumpuk dari ATAS ke BAWAH
- Notifikasi muncul di **atas** dan menumpuk **ke bawah** (item terbaru di paling atas, yang lama terdorong turun). **Jangan** menumpuk dari bawah ke atas karena menutupi konten halaman.
- Layout: container `fixed`/`sticky` di top (mis. top-center atau top-right), `flex flex-col gap-*`, tidak menutupi header/aksi utama; beri batas jumlah tampil (mis. maks 3–5, sisanya antre/"+N lainnya").
- Inline alert (di dalam halaman/section) mendorong konten ke bawah, bukan menimpa.
- Varian: info, success, warning, danger, discovery/AI. Perilaku: auto-dismiss (kecuali danger/butuh aksi), tombol dismiss, aksi (primary/secondary link), hover menjeda timer, `aria-live` (`assertive` untuk error, `polite` selain itu), `prefers-reduced-motion` dihormati.
- Animasi masuk dari atas (slide/fade-down), keluar fade-up; reflow tumpukan mulus.

### Prinsip komponen
- **Label dan contoh konten harus umum (general).** Ordinara dipakai untuk berbagai platform, jadi demo, story, dan dokumentasi tidak boleh memakai istilah domain produk tertentu (mis. CV, lamaran, lowongan, HRD, tracer). Pakai kata netral seperti "Simpan", "Lanjutkan", "Judul kartu", "Aktif", "Menunggu", "Ringkasan".
- Setiap komponen mendefinisikan: anatomy, varian, size, state (default, hover, focus, active, disabled, loading, error, selected), perilaku responsif, dan do/don't.
- Pola kompleks yang diharapkan ada: tabel (sort, filter, pagination, row selection, bulk action, empty/loading/error state), form + validasi, modal/drawer, dropdown/select/combobox, tabs, breadcrumb, banner, badge/lozenge, tooltip/popover, navigasi (sidebar collapsible, topbar, search ⌘K), avatar group, timeline/activity feed, stat/metric card, chart wrapper.

## Gaya visual dari `reference/`

Tiga referensi dashboard (LMS "Enrolliq" dan hotel dashboard) menunjukkan arah visual:
- Shell: sidebar kiri terang dengan grup berlabel kecil uppercase (WORKSPACES/SUPPORT), item aktif ber-highlight lembut, badge hitung ("2 new"), user card di bawah, tombol collapse `«`; topbar dengan judul halaman, search ⌘K, toggle tema, notifikasi.
- Permukaan: kartu putih bersudut membulat besar (±12–16px), border tipis abu (tanpa shadow), latar halaman netral/gradien lembut.
- Tipografi: sans modern (Inter-like), label metrik kecil uppercase `tracking-wide`, angka besar tebal untuk KPI.
- Data: KPI strip dengan delta berwarna (hijau naik/merah turun) dalam pill, tabel bersih dengan avatar + status badge berwarna lembut (bg tint + teks pekat), chart dengan tooltip, progress bar segmen.
- Status semantik berwarna tint: Critical (merah), Needs attention/Deferred (kuning/amber), Success/Active (hijau), Info/Act now (biru), Suppressed (abu).
- Kepadatan informasi tinggi tapi lega: spasi konsisten skala 4px.

Gunakan sebagai inspirasi gaya, bukan untuk disalin piksel per piksel.

### Gaya visual Ordinara
Nilai berikut adalah identitas visual Ordinara (di `@ordinara/tokens`). Setiap komponen baru harus memakainya; jangan menambah nilai ad-hoc.

**Token**
- Font: body netral dan font display bersudut hangat untuk judul, angka, dan penanda (lewat `@ordinara/ui/fonts.css`). Semua `h1`–`h6` otomatis memakai `font-display`; tabel memakai angka rata (`tabular-nums`).
- Warna: `primary` biru (`#2361e7` di 600) untuk aksi, `secondary` oranye (`#f67e28`), `neutral` slate, plus `success`, `warning`, `danger`, `info`, semuanya 50–950. Tampilan harus **tenang dan profesional**: hindari warna neon/mencolok (mis. lime, ungu terang), gradient ramai, dan dekorasi yang tidak punya fungsi.
- Radius: `rounded-control` (xl, 0.75rem), `rounded-card` (2xl, 1rem), `rounded-check` (6px), `rounded-frame` (3xl). Teks tambahan: `text-btn-lg` (15px), `text-micro` (11px).
- Shadow: `shadow-card`, `shadow-card-lg`, `shadow-glow-primary`. z-index: dropdown 20, sticky 30, overlay 40, toast 50. Motion: `ease-out-soft`, durasi fast 150ms / normal 200ms, `animate-fade-in`, `animate-spin-slow`.
- Dark mode MEMBALIK nilai skala primitive di `.dark` / `html[data-theme="dark"]` (neutral dibalik; primary/status 50–200 dan 700–900 diganti). Karena itu pakai utilitas skala (`bg-neutral-100`, `text-primary-700`), jangan menambah `dark:` ad-hoc. Hover tombol solid memakai `hover-primary`/`hover-danger` yang tidak ikut dibalik.
- Utilitas brand: `bg-shell` (gradient radial lembut biru + oranye), `bg-brand-gradient`, `bg-brand-gradient-soft`, `scrollbar-none`.
- Ikon lewat `icon()` (regular/bold/fill).

**Ciri khas Ordinara (halus, fungsional)**
- **Font display** untuk semua `h1`–`h6`, judul, dan angka; font body netral; angka tabel rata.
- **Logo**: tiga batang naik berurutan (1 · 2 · 3) di ubin biru membulat (`logoMark()`, `logoWordmark()`).
- **Sudut membulat biasa (sirkular)**, bukan squircle: sudut squircle membuat tombol dan kartu terlihat kotak. Radius hanya lewat token (`rounded-control`, `rounded-card`, `rounded-frame`).
- **Metrik font dikoreksi** (`ascent/descent-override` di `fonts.css`) supaya teks terlihat berada di tengah vertikal tombol, badge, dan input; jangan mengakalinya dengan padding atas/bawah yang berbeda.
- Komponen dan tombol mengikuti nilai acuan di bawah **persis** (ukuran, warna, shadow, state). Jangan menambah efek tambahan pada tombol (kilau, glow, gerak angkat) atau dekorasi pada card (penanda sudut, indeks, pola latar).
- **Kontrol native** (select, dll.) dipoles lewat CSS global agar konsisten: popup `<select>` memakai `appearance: base-select` (dengan fallback), opsi terpilih berwarna `primary`. Jangan membiarkan tampilan abu bawaan OS pada listbox atau popup.
- **Efek tekan tombol hanya satu**: `scale(0.98)` lewat `transform` di `styles.css` (dengan transisi dan `will-change` saat hover/fokus/tekan). Gerakan halus teks saat hover (akibat `will-change`) disengaja dan disukai pengguna: jangan dihapus. Jangan menambah `active:scale-*` Tailwind di markup atau komponen: properti `scale`-nya tidak ikut ditransisikan sehingga melompat dan bertumpuk dengan efek global.
- Jangan memakai `primary-800` untuk latar gelap yang harus tetap gelap di dark mode (skala itu dibalik); pakai `hover-primary` atau nilai literal.

**Komponen (nilai)**
- **Button**: satu basis (`rounded-control font-semibold gap-2`, `active:scale-[0.98]`, ring-2 offset-2 saat fokus); ukuran sm `h-8 px-3 text-xs`, md `h-10 px-4 text-sm`, lg `h-12 px-6 text-btn-lg`; varian hanya warna: primary (`bg-primary-600 shadow-sm`), secondary (`bg-primary-50`), accent (oranye), outline (`border border-border bg-surface`, datar), ghost, danger, white. Loading = spinner, teks `text-transparent!`.
- **Badge**: `rounded-full px-3 py-1.5 text-xs font-medium leading-none`, tone `bg-{tone}-50 text-{tone}-700`; opsi dot, rounded-md, large, bordered.
- **Card**: `rounded-card border border-border/70 bg-surface shadow-card`; hover `shadow-card-lg`; isi `p-6`, judul `font-display text-lg font-bold`, teks `text-sm text-fg-muted`; stat card dengan ubin ikon `h-9 w-9 rounded-xl bg-primary-50`.
- **Nav item** (sidebar): `rounded-control px-3 py-2.5 text-sm font-medium text-fg-muted hover:bg-neutral-100/80`; aktif `bg-primary-50 text-primary-700`; eyebrow `text-micro font-semibold uppercase tracking-wider`; sidebar collapse jadi rail 72px.
- Input: `h-10 rounded-control border border-border px-3.5 text-sm`, fokus `ring-4 ring-primary-500/10 border-primary-400`.
- Primary punya `shadow-sm` dan card punya `shadow-card`; outline/ghost datar.

## Versioning Figma (SemVer)

Library Figma Ordinara memakai SemVer. Tentukan bump sebelum publish dan tulis di changelog/release notes.

| Level | Contoh | Kapan |
|---|---|---|
| **MAJOR** | `2.0.0` | Perubahan yang merusak: rename/hapus komponen, variant property, nama variabel/koleksi, atau perubahan yang membuat override di file konsumen ter-reset atau instance terputus. |
| **MINOR** | `1.4.0` | Penambahan komponen, variant, token, template, atau perubahan visual yang tidak merusak. |
| **PATCH** | `1.3.5` | Perbaikan bug, alignment, spacing, binding variabel yang salah, perbaikan dokumentasi. |

Aturan praktis:
- Ragu antara dua level → pilih yang lebih tinggi.
- Rename token/komponen = MAJOR, kecuali ada alias/deprecation yang menjaga konsumen tetap aman (catat sebagai deprecated dulu, hapus di MAJOR berikutnya).
- Kode (paket Tailwind/komponen) dan library Figma sebaiknya dijaga selaras; sebutkan versi Figma terkait di changelog komponen.
- Setiap rilis: ringkasan perubahan dikelompokkan *Breaking / Added / Changed / Fixed* beserta komponen terdampak dan panduan migrasi untuk MAJOR.

## Alur kerja saat menambah/mengubah komponen

1. Cek apakah komponennya sudah ada di pustaka komponen (lihat "Pustaka komponen"). Layout, varian, dan markup dipakai apa adanya; jangan menulis ulang atau mengarang varian.
2. Ubah tampilan lewat token (`tokens.css`, `compat.css`), bukan dengan mengedit markup hasil generate.
3. Implementasi semua state + light/dark + responsif + a11y.
4. Buat/perbarui **preview HTML** dan **Storybook** (lihat bagian di bawah). Tidak boleh ada komponen atau perubahan tanpa keduanya.
5. Dokumentasikan (anatomy, varian, props/class, contoh, do/don't).
6. Tentukan level SemVer dan catat di changelog.
7. Perbarui `TASKS.md` (lihat bagian di bawah).
8. Jalankan Git cycle & release flow di atas.

## TASKS.md (checklist pekerjaan)

`TASKS.md` di root repo adalah sumber kebenaran progres: daftar halaman pustaka komponen (Components, Forms, Typography, Plugins), foundation, dan infrastruktur, dengan tanggal ditambahkan/selesai, versi, status Code/HTML Preview/Storybook/Dark/A11y/Changelog.
- Centang ✅ hanya setelah dikerjakan **dan** diverifikasi. Jangan mencentang sebelum benar-benar dicek (mis. dark mode harus dilihat di browser).
- Kolom *Ditambahkan* diisi tanggal komponen **dibuat**; kosongkan selama belum dibuat. *Selesai* diisi saat semua kolom terpenuhi.
- Komponen baru yang muncul di tengah jalan wajib ditambahkan ke bagian "Helpers & tambahan" (tanggal *Ditambahkan* sesuai saat dibuat) dan dicatat di "Log perubahan daftar".
- Perbarui tabel Ringkasan dan `TASKS.md` di PR yang sama dengan perubahannya.

## Preview HTML & Storybook (wajib, harus sinkron)

Setiap komponen punya dua permukaan preview:
- **Preview HTML**: halaman HTML statis berisi markup Tailwind murni untuk semua varian, size, dan state, dalam light dan dark.
- **Storybook**: story per komponen dengan args/controls, semua varian dan state, toggle tema, dan addon a11y.

Aturan sinkronisasi:
- Keduanya memakai **sumber yang sama**: token, `tailwind.config`/CSS variables, dan class komponen yang sama. Dilarang style khusus preview atau nilai yang menyimpang dari komponen.
- Markup di HTML dan di story harus identik. Idealnya dihasilkan dari satu sumber (template/snippet bersama); bila ditulis terpisah, bandingkan manual.
- Setiap **improvement** (komponen baru, varian, state, token, perbaikan style) wajib memperbarui **kedua** preview di PR yang sama. Perubahan style tanpa pembaruan preview dianggap belum selesai.
- Cakupan minimum: semua varian, size, state (default, hover, focus, active, disabled, loading, error, selected), light/dark, dan responsif.
- Perilaku khusus (mis. alert menumpuk atas ke bawah, tabel sort/filter/pagination) harus bisa dicoba di keduanya.

Sebelum selesai/PR, verifikasi:
1. Storybook build tanpa error (`storybook build`) dan story yang berubah dibuka serta dicek.
2. Preview HTML dibuka di browser untuk light dan dark.
3. Bandingkan keduanya berdampingan: tampilan dan class harus sama.
4. Lampirkan screenshot keduanya di PR.

Jika tidak bisa menjalankan Storybook atau browser, katakan terus terang; jangan klaim sinkron tanpa verifikasi.
