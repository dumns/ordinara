# Ordinara

Design system berbasis Tailwind CSS v4: token, pustaka komponen, preview HTML, dan Storybook.
Tampilan profesional dan tenang, dengan palet biru `#2361e7`, aksen oranye, netral slate, dan font display Bricolage Grotesque.

## Isi repo

```
apps/
  preview/      Preview HTML (Vite, app shell, router hash)
  storybook/    Storybook 10 (html-vite)
packages/
  tokens/       @dumns/ordinara-tokens  - skala warna, semantic, tema, radius, shadow, animasi
  icons/        @dumns/ordinara-icons   - ikon lewat class `ori ori-nama` (CSS mask atau font)
  ui/           @dumns/ordinara      - CSS, font, helper komponen, pustaka komponen
scripts/        Skrip repo (laporan ukuran, dll.)
CHANGELOG.md    Riwayat rilis
TASKS.md        Checklist komponen (dicentang hanya setelah terverifikasi)
RUN.md          Cara menjalankan proyek
```

## Mulai cepat

```bash
npm install
npm run dev:preview     # http://localhost:5173
npm run dev:storybook   # http://localhost:6006
```

Detail lengkap ada di [RUN.md](RUN.md).

## Memasang paket

Paket terbit di GitHub Packages (bagian **Packages** repo ini): `@dumns/ordinara` (komponen dan style), `@dumns/ordinara-tokens`, dan `@dumns/ordinara-icons`. Tambahkan ke `.npmrc` proyekmu (token dengan scope `read:packages`):

```
@dumns:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<token>
```

```bash
npm install @dumns/ordinara
```

```ts
import "@dumns/ordinara/fonts.css";
import "@dumns/ordinara/styles.css";
import "@dumns/ordinara-icons/mask.css";
import { button } from "@dumns/ordinara";
```

## Prinsip

- **Satu merek: Ordinara.** Tidak ada penyebutan pustaka lain di UI maupun dokumentasi.
- **Tiap komponen punya preview HTML dan story Storybook** yang sinkron dalam gaya dan perilaku.
- **Rilis bertahap.** Versi 0.1.0 hanya berisi komponen inti; sisanya menyusul di versi berikutnya.
- **Label demo bersifat umum**, karena design system ini dipakai lintas platform.
- **Mode gelap dan tema** (`violet`, `emerald`) didukung lewat token, bukan override per komponen.

## Token

Skala primitif `primary`, `secondary`, `neutral`, `success`, `warning`, `danger`, `info` (50-950),
ditambah alias semantik `background`, `surface`, `fg`, `fg-muted`, `fg-subtle`, `border`, `ring`.
Mode gelap membalik skala primitif di bawah `.dark` atau `html[data-theme="dark"]`; tema merek lewat `data-theme`.

## Komponen

- **Helper TS:** `button()`, `badge()`, `card()`, `statCard()`, `heroCard()`, `frame()`, `icon()`, `logoMark()`, `logoWordmark()`.
- **Pustaka komponen:** halaman contoh (alerts, avatar, badge, breadcrumb, buttons, button group, card, dropdowns,
  list group, modal, pagination, progress, sidebar, tables, tabs, toast, tooltips) dan form (input, search,
  select, textarea, checkbox, radio, toggle), plus tipografi (hr). Daftar tahapnya ada di
  `packages/ui/library-manifest.json`.

## Alur git dan rilis

| Tujuan | Alur |
| --- | --- |
| Rilis | `dev/<v>` -> `release/<v>` -> `master` -> `release` -> Vercel |
| Internal / uji | `dev/<v>` -> `development` -> `dev/vercel` |

Setiap rilis menghasilkan changelog, tag, dan paket npm. Penomoran mengikuti SemVer
(MAJOR untuk perubahan yang merusak, MINOR untuk fitur baru yang kompatibel, PATCH untuk perbaikan).
Folder `reference/` tidak pernah di-commit.

## Persyaratan

Node.js 22 atau lebih baru, npm 10 atau lebih baru.
