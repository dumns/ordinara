import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/names.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  target: "es2022",
});
