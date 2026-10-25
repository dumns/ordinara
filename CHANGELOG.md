# Changelog

Format mengikuti [Keep a Changelog](https://keepachangelog.com/) dan SemVer (lihat skill `ordinara-design-system`).
Kelompok: **Breaking / Added / Changed / Fixed**.

Rilis dilakukan bertahap: setiap versi hanya memuat komponen yang dijadwalkan untuk versi itu (`packages/ui/library-manifest.json`).

## [Unreleased] — 0.1.0 (komponen inti)

### Added
- **Identitas Ordinara**: logo (tiga batang berurutan di ubin membulat), font display untuk semua heading, koreksi metrik font agar teks seimbang secara vertikal, favicon, dan halaman dokumentasi **Brand identity** (Storybook + preview). Palet tetap biru profesional dan neutral slate.
- **Pustaka komponen inti (25 halaman, 266 contoh)** dengan layout dan varian lengkap, masing-masing dengan story Storybook per section dan preview HTML:
  - Components: Alerts, Avatar, Badge, Breadcrumb, Buttons, Button Group, Card, Dropdowns, List Group, Modal, Pagination, Progress, Sidebar, Tables, Tabs, Toast, Tooltips.
  - Forms: Input Field, Search Input, Select, Textarea, Checkbox, Radio, Toggle.
  - Typography: Divider (HR).
- Pipeline pembuatan pustaka (`npm run gen:library -w @ordinara/ui`) dan rilis bertahap lewat `library-manifest.json`. Komponen yang belum dijadwalkan tidak ikut di-generate maupun di-commit.
- Perilaku interaktif lewat `initLibrary(root)` (accordion, dropdown, modal, tabs, tooltip, dst.).
- Jembatan token komponen (`@ordinara/tokens/compat.css`): token semantik komponen dipetakan ke skala Ordinara; dark mode dan tema ikut bekerja.
- Foundation (`@ordinara/tokens`): skala warna primary/secondary/neutral/success/warning/danger/info (50–950), semantic (`background`, `surface`, `fg`, `fg-muted`, `fg-subtle`, `border`, `ring`), radius (`control`, `card`, `check`, `frame`), tipografi (`text-btn-lg`, `text-micro`), shadow (`card`, `card-lg`, `glow-primary`), z-index, motion (`ease-out-soft`, `fade-in`, `spin-slow`, `flag-in/out`), reduced-motion.
- Font Ordinara (opsional via `@ordinara/ui/fonts.css`) dan set ikon (regular/bold/fill) lewat `icon()`.
- Dark mode (`.dark` atau `data-theme="dark"`) dengan membalik skala primitive; tema brand `data-theme` (violet, emerald); dukungan RTL.
- Utilitas brand: `bg-shell`, `bg-brand-gradient`, `bg-brand-gradient-soft`, `scrollbar-none`.
- Varian tombol "secondary" dan kartu pada pustaka disesuaikan ke nilai acuan (tint primary, bayangan lembut).
- Helper TS: `button()`, `badge()`, `card()`, `statCard()`, `heroCard()`, `frame()`.
- Halaman dokumentasi Foundation di Storybook dan preview HTML (satu sumber render).
- Preview HTML berbentuk app shell: sidebar collapsible + pencarian ⌘K, topbar breadcrumb, pemilih tema, toggle dark/RTL, routing hash.
- `npm run size`: laporan dan budget ukuran CSS (60 kB gzip).

### Changed
- Efek tekan tombol dibuat mulus: satu transisi `scale(0.98)` (menggantikan dua efek bertumpuk) dan tombol dipromosikan ke layer kompositor saat hover/fokus/tekan sehingga teks tidak melompat di akhir transisi.
- Font body dideklarasikan lokal dengan koreksi metrik vertikal agar teks seimbang di tengah tombol, badge, dan input; sudut squircle dihapus.
- Radius mengikuti skala komponen (`rounded-sm` 6px, `rounded-lg` 16px, `rounded-base` 12px) agar layout contoh identik.
- Alias semantic lama (`surface-sunken`, `text-default`, `accent`, `*-subtle`, dst.) dihapus; pakai skala (`neutral-*`, `primary-*`) atau token `fg`, `border`, `background`.
- `styles.css` hanya memindai source Ordinara dan bundel JS plugin (tidak seluruh paket plugin).

### Fixed
- Tautan placeholder (`href="#"`) pada contoh komponen tidak lagi berpindah ke halaman Overview: klik tidak melakukan navigasi, dan router preview mengabaikan hash selain `#/<halaman>`.
- Contoh sidebar/navbar yang memakai posisi `fixed` dan atribut drawer sekarang dikurung di dalam bingkai contohnya, tidak lagi menimpa sidebar preview. Hanya contoh modal yang dirender tanpa pengurungan.
- Select: dropdown `<select>` biasa kini memakai popup yang di-style penuh (kartu membulat, bayangan, opsi lega, opsi terpilih berwarna primary dengan centang) lewat `appearance: base-select` (browser lama jatuh ke tampilan bawaan); listbox (`multiple`/`size`) memakai opsi lega dengan warna terpilih primary, bukan abu bawaan OS.
