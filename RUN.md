# Menjalankan Ordinara

Semua perintah dijalankan dari root repo (`ordinara/`).

## 1. Persyaratan

- Node.js 22+ (`node -v`)
- npm 10+

## 2. Instal

```bash
npm install
```

Ini memasang semua workspace (`packages/*`, `apps/*`) sekaligus.

## 3. Jalankan

| Tujuan | Perintah | Alamat |
| --- | --- | --- |
| Preview HTML | `npm run dev:preview` | http://localhost:5173 |
| Storybook | `npm run dev:storybook` | http://localhost:6006 |

Keduanya mendukung hot reload. Perubahan di `packages/ui` dan `packages/tokens` langsung terlihat di kedua aplikasi.

## 4. Build dan cek

```bash
npm run build            # build preview + storybook
npm run build:preview    # hasil di apps/preview/dist
npm run build:storybook  # hasil di apps/storybook/storybook-static
npm run typecheck        # tsc -b
npm run size             # laporan ukuran bundle (budget 60 kB gzip)
```

Untuk melihat hasil build preview secara lokal:

```bash
npm run preview -w @ordinara/preview
```

## 5. Generator (jalankan dari root repo)

Dijalankan dari `packages/ui`:

```bash
npm run gen:icons -w @ordinara/ui     # ikon Phosphor -> icons.generated.ts
npm run gen:library -w @ordinara/ui   # halaman pustaka, registry, story, safelist.css
```

Catatan:

- `gen:library` mengambil dokumen sumber ke `packages/ui/.cache/library-docs` (di-gitignore), jadi butuh koneksi internet pada run pertama.
- Hasilnya menimpa `packages/ui/src/library/pages/*`, `registry.ts`, `safelist.css`, dan story di `apps/storybook/stories/library/`. Jangan edit file-file itu manual; ubah generatornya.
- Jalankan dari root repo, bukan dari dalam folder `pages/`. Di Windows folder yang sedang dipakai shell membuat penghapusan gagal (`EBUSY`).
- Tahap rilis diatur oleh `packages/ui/library-manifest.json` (field `since`).

## 6. Struktur alur kerja komponen baru

1. Tambah komponen/helper di `packages/ui/src`.
2. Tambah halaman di `apps/preview/src/pages.ts`.
3. Tambah story di `apps/storybook/stories/`. Gaya dan perilaku harus sama dengan preview.
4. Perbarui `CHANGELOG.md` dan `TASKS.md` (centang hanya setelah diverifikasi).

## 7. Masalah umum

| Gejala | Penyebab / solusi |
| --- | --- |
| Port 5173 atau 6006 sudah dipakai | Hentikan proses lama, atau jalankan dengan port lain: `npm run dev:preview -- --port 5180` |
| Komponen Datatables tampil tanpa gaya | Jalankan ulang `npm run gen:library -w @ordinara/ui` agar `safelist.css` terbentuk |
| Perubahan CSS tidak muncul di build | Hapus `apps/preview/dist` lalu `npm run build` |
| `EBUSY` saat generator jalan | Pindah shell ke root repo, lalu ulangi |
