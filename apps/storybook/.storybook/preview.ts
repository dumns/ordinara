import type { Preview } from "@storybook/html-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "@ordinara/ui/styles.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    (story) => {
      const wrap = document.createElement("div");
      wrap.className = "bg-surface text-text-default font-sans p-6 min-h-24";
      const out = story();
      if (typeof out === "string") wrap.innerHTML = out;
      else wrap.append(out);
      return wrap;
    },
  ],
  parameters: { layout: "fullscreen" },
};

export default preview;
