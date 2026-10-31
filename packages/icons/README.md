# @dumns/ordinara-icons

Ikon Ordinara lewat class: `ori` + `ori-nama`. Ukuran mengikuti `font-size`, warna mengikuti `color`.

```html
<i class="ori ori-smiley"></i>
<i class="ori-bold ori-smiley"></i>
<i class="ori-fill ori-smiley text-primary-600 text-2xl"></i>
```

Dua jalur dengan nama class yang sama:

| Jalur | Impor | Isi | Ukuran |
| --- | --- | --- | --- |
| CSS mask | `@dumns/ordinara-icons/mask.css` (atau `mask/base.css` + `mask/regular.css`) | ikon di `icon-set.json` (220) | ~31 kB gzip per bobot |
| Font | `@dumns/ordinara-icons/font.css` | seluruh ikon (1.512) | woff2 ~127 kB per bobot, dimuat saat dipakai |

Daftar nama yang tersedia di jalur mask: `@dumns/ordinara-icons/names` (`oriNames`).

## Build

```bash
npm run build:mask   # src/mask/*.css, src/names.ts (di-commit)
npm run build:font   # dist/font/* (tidak di-commit; juga diperlukan sebelum publish)
```

Menambah ikon ke jalur mask: tambahkan nama ke `icon-set.json`, lalu `npm run build:mask`.
Codepoint font disimpan di `codepoints.json` supaya stabil antar versi.
