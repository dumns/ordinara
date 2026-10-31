import type { StorybookConfig } from "@storybook/html-vite";
import tailwindcss from "@tailwindcss/vite";
import { defaultClientConditions } from "vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.ts"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: "@storybook/html-vite",
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    // Monorepo: paket @ordinara/* dibaca dari source TypeScript (kondisi "source"), bukan dist hasil build.
    config.resolve = { ...config.resolve, conditions: ["source", ...defaultClientConditions] };
    return config;
  },
};

export default config;
