# Ordinara: aturan untuk agen AI

Baca ini dulu, lalu `.claude/skills/ordinara-design-system/SKILL.md` (panduan lengkap: token, gaya visual, komponen, rilis) dan `RUN.md` (perintah). Daftar pekerjaan ada di `TASKS.md`, riwayat di `CHANGELOG.md`.

## Merek dan isi
- Satu merek: **Ordinara**. Jangan menyebut pustaka atau merek lain di UI, dokumentasi, atau commit. Sumber lain dianggap plugin internal.
- Label demo bersifat **umum** (bukan konteks lamaran/CV/tracer), karena design system ini dipakai lintas platform.
- Tampilan tenang dan profesional: tanpa warna neon, tanpa dekorasi yang tidak berfungsi, tombol dan card persis gaya acuan (flat, border, bayangan sangat tipis), font display Bricolage Grotesque untuk judul.

## Git (wajib)
- **Commit, push, dan merge hanya atas perintah.** Persetujuan sebelumnya tidak berlaku untuk tindakan berikutnya.
- Pesan commit **satu baris** (`feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`), tanpa deskripsi, tanpa co-author atau "Generated with".
- Stage per path, bukan `git add -A`. Folder `reference/` tidak pernah di-commit.
- Jangan commit di `master`. Merge dengan `--no-ff`. Jangan `--force` kecuali diminta.
- Alur rilis: `dev/<v>` → `release/<v>` → `master` → branch produksi → Vercel. Alur internal: `dev/<v>` → `development` → `dev/vercel`. Branch produksi belum dibuat (nama `release` bentrok dengan `release/<v>`).
- Setiap rilis: changelog + tag + GitHub release + paket npm, hanya atas perintah.

## Komponen
- Setiap komponen punya **preview HTML dan Storybook yang sinkron** (satu sumber render). Story **Gallery** selalu di urutan pertama.
- Halaman pustaka di `packages/ui/src/library/pages/*`, `registry.ts`, `safelist.css`, dan story di `apps/storybook/stories/library/` adalah **hasil generator**. Jangan edit manual; ubah `packages/ui/scripts/gen-library.mjs` lalu jalankan `npm run gen:library -w @dumns/ordinara` dari root repo.
- Rilis bertahap: `packages/ui/library-manifest.json` (`since`) menentukan halaman per versi. Versi 0.1.0 hanya komponen inti.
- Style lewat token (`neutral-*`, `primary-*`, `fg`, `border`), bukan `dark:` ad-hoc. Dark mode membalik skala primitive.
- Layar sempit (320 sampai 390px) harus rapi: baris membungkus, tidak ada elemen terpotong atau penyok, tombol berikon di form menjadi ikon saja.

## Mencatat dan memverifikasi
- Setiap perbaikan atau bug dicatat di `CHANGELOG.md` (Fixed; yang belum selesai ke Known issues) **dan** tabel "Log perubahan daftar" di `TASKS.md`, dalam commit yang sama. Regresi dari perbaikan sebelumnya ikut dicatat.
- Centang di `TASKS.md` hanya setelah terverifikasi. Tanggal "Ditambahkan" hanya diisi bila komponen sudah dibuat.
- Sebelum menyatakan selesai: `npx tsc -b`, `npm run build`, dan lihat hasilnya di browser (desktop dan mobile). Jangan melapor "selesai" dari build saja.

## Paket npm
- Tiga paket di GitHub Packages (scope harus sama dengan pemilik repo, `@dumns`): `@dumns/ordinara` (komponen dan style), `@dumns/ordinara-tokens` (CSS), `@dumns/ordinara-icons` (ikon `ori`). Kondisi `source` di `exports` membuat monorepo (preview, Storybook, `tsc`) memakai source TypeScript; konsumen luar memakai `dist`.
- Terbit otomatis lewat `.github/workflows/publish.yml` setiap push ke branch `production` (versi yang sudah terbit dilewati). Tidak perlu akun npm atau OTP; token bawaan Actions.
- Build lokal: `npm run build:packages` (icons dulu, lalu paket utama). Font ikon (`packages/icons/dist/font`) tidak di-commit. Cek isi tarball dengan `npm run pack:check`. `CHANGELOG.md` repo ikut masuk tarball lewat hook `prepack`.

## Jebakan di Windows
- Heredoc dan `sed` di shell memakan backslash (merusak regex dan path). Tulis skrip atau file yang berisi backslash dengan tool Write/Edit, bukan heredoc.
- Git Bash mengubah argumen berawalan `/` menjadi path Windows; pakai `MSYS_NO_PATHCONV=1` untuk panggilan API.
- Jalankan generator dari root repo, bukan dari dalam `pages/` (error `EBUSY`).
