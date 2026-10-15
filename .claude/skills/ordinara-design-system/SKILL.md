---
name: ordinara-design-system
description: Panduan membangun dan merawat design system Ordinara (Tailwind CSS + Flowbite, UX kompleks setara Atlassian Design System). Gunakan saat membuat/mengubah komponen, token, template, halaman dashboard, alert/flag/toast, tabel, menaikkan versi (SemVer untuk Figma), atau menjalankan git cycle (branch, commit, PR, release) di repo dumns/ordinara.
---

# Ordinara Design System

Repo: https://github.com/dumns/ordinara

## Git cycle

Satu perubahan = satu siklus. Jangan commit/push/merge/tag tanpa diminta user.

1. **Sync**: `git switch main && git pull --ff-only`.
2. **Branch**: `git switch -c <type>/<topik-singkat>` (`feat/`, `fix/`, `docs/`, `refactor/`, `chore/`), mis. `feat/alert-stack`.
3. **Kerja**: perubahan kecil dan fokus, satu komponen/token per branch.
4. **Review diri**: `git status` dan `git diff`; pastikan hanya file yang relevan.
5. **Commit**: Conventional Commits, mis. `feat(alert): stack dari atas ke bawah`. Sertakan `!`/`BREAKING CHANGE:` bila MAJOR.
6. **Push**: `git push -u origin <branch>`.
7. **Pull Request**: ke `main`, isi ringkasan, level SemVer (MAJOR/MINOR/PATCH), komponen terdampak, dan screenshot light/dark.
8. **Merge**: squash merge setelah review disetujui, lalu hapus branch.
9. **Release** (bila perlu): bump versi sesuai SemVer, `git tag vX.Y.Z`, push tag, dan perbarui changelog.

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
4. Dokumentasikan (anatomy, varian, props/class, contoh, do/don't).
5. Tentukan level SemVer dan catat di changelog.
6. Jalankan Git cycle di atas.
