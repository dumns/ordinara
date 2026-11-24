import { defineConfig } from "tsup";

// Bundel ESM + tipe. Halaman pustaka (src/library/pages) jadi entry sendiri agar bisa di-import terpisah
// (`@dumns/ordinara/library/<halaman>`) dan dimuat lazy oleh registry.
export default defineConfig({
  entry: ["src/index.ts", "src/library/pages/*.ts"],
  format: ["esm"],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  target: "es2022",
  tsconfig: "tsconfig.build.json",
});
