---
name: ordinara-design-system
description: Panduan membangun dan merawat design system Ordinara (Tailwind CSS + Flowbite, UX kompleks setara Atlassian Design System). Gunakan saat membuat/mengubah komponen, token, template, halaman dashboard, alert/flag/toast, tabel, menaikkan versi (SemVer untuk Figma), atau menjalankan git cycle (branch, commit, PR, release) di repo dumns/ordinara.
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

- **Base**: Tailwind CSS + [Flowbite](https://flowbite.com/docs/components/tables/) (pola markup, atribut `data-*`, dan JS interaksi Flowbite dipakai sebagai titik awal; tabel mengikuti Flowbite Tables).
- Semua nilai visual (warna, spasi, radius, shadow, tipografi) lewat **design token** yang dipetakan ke `theme` Tailwind / CSS variables. Dilarang hardcode hex atau nilai px acak di komponen.
- Token berlapis: *primitive* (palet mentah) → *semantic* (`surface`, `text-subtle`, `border-danger`, `bg-brand`) → *component* (opsional). Komponen hanya mengonsumsi token semantic.
- Wajib dukung **light & dark mode** (`dark:` variant / token semantic yang berganti tema).
- Aksesibilitas: kontras WCAG AA, focus ring terlihat, navigasi keyboard, ARIA role yang benar (`role="alert"`/`status`, `aria-live`, `aria-expanded`, dll.).

## Arah UX: setara Atlassian Design System

Kompleksitas dan ketelitian UX mengikuti Atlassian: komponen punya state lengkap, perilaku terdefinisi, dan pola yang konsisten, bukan sekadar tampilan.

### Alert / Flag / Toast — menumpuk dari ATAS ke BAWAH
- Notifikasi muncul di **atas** dan menumpuk **ke bawah** (item terbaru di paling atas, yang lama terdorong turun). **Jangan** menumpuk dari bawah ke atas karena menutupi konten halaman.
- Layout: container `fixed`/`sticky` di top (mis. top-center atau top-right), `flex flex-col gap-*`, tidak menutupi header/aksi utama; beri batas jumlah tampil (mis. maks 3–5, sisanya antre/"+N lainnya").
- Inline alert (di dalam halaman/section) mendorong konten ke bawah, bukan menimpa.
- Varian: info, success, warning, danger, discovery/AI. Perilaku: auto-dismiss (kecuali danger/butuh aksi), tombol dismiss, aksi (primary/secondary link), hover menjeda timer, `aria-live` (`assertive` untuk error, `polite` selain itu), `prefers-reduced-motion` dihormati.
- Animasi masuk dari atas (slide/fade-down), keluar fade-up; reflow tumpukan mulus.

### Prinsip komponen
- Setiap komponen mendefinisikan: anatomy, varian, size, state (default, hover, focus, active, disabled, loading, error, selected), perilaku responsif, dan do/don't.
- Pola kompleks yang diharapkan ada: tabel (sort, filter, pagination, row selection, bulk action, empty/loading/error state), form + validasi, modal/drawer, dropdown/select/combobox, tabs, breadcrumb, banner, badge/lozenge, tooltip/popover, navigasi (sidebar collapsible, topbar, search ⌘K), avatar group, timeline/activity feed, stat/metric card, chart wrapper.

## Gaya visual dari `reference/`

Tiga referensi dashboard (LMS "Enrolliq" dan hotel dashboard) menunjukkan arah visual:
- Shell: sidebar kiri terang dengan grup berlabel kecil uppercase (WORKSPACES/SUPPORT), item aktif ber-highlight lembut, badge hitung ("2 new"), user card di bawah, tombol collapse `«`; topbar dengan judul halaman, search ⌘K, toggle tema, notifikasi.
- Permukaan: kartu putih bersudut membulat besar (±12–16px), border tipis abu, shadow halus, latar halaman netral/gradien lembut.
- Tipografi: sans modern (Inter-like), label metrik kecil uppercase `tracking-wide`, angka besar tebal untuk KPI.
- Data: KPI strip dengan delta berwarna (hijau naik/merah turun) dalam pill, tabel bersih dengan avatar + status badge berwarna lembut (bg tint + teks pekat), chart dengan tooltip, progress bar segmen.
- Status semantik berwarna tint: Critical (merah), Needs attention/Deferred (kuning/amber), Success/Active (hijau), Info/Act now (biru), Suppressed (abu).
- Kepadatan informasi tinggi tapi lega: spasi konsisten skala 4px.

Gunakan sebagai inspirasi gaya, bukan untuk disalin piksel per piksel.

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

1. Cek apakah Flowbite sudah punya pola dasarnya; mulai dari sana, lalu sesuaikan dengan token Ordinara.
2. Definisikan/pakai token semantic; jangan nilai mentah.
3. Implementasi semua state + light/dark + responsif + a11y.
4. Buat/perbarui **preview HTML** dan **Storybook** (lihat bagian di bawah). Tidak boleh ada komponen atau perubahan tanpa keduanya.
5. Dokumentasikan (anatomy, varian, props/class, contoh, do/don't).
6. Tentukan level SemVer dan catat di changelog.
7. Jalankan Git cycle & release flow di atas.

## Preview HTML & Storybook (wajib, harus sinkron)

Setiap komponen punya dua permukaan preview:
- **Preview HTML**: halaman HTML statis berisi markup Tailwind/Flowbite murni untuk semua varian, size, dan state, dalam light dan dark.
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
