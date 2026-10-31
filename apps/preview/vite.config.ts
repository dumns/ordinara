import { defineConfig, defaultClientConditions } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Monorepo: paket @ordinara/* dibaca dari source TypeScript (kondisi "source"), bukan dist hasil build.
  resolve: { conditions: ["source", ...defaultClientConditions] },
});
