import type { Preview } from "@storybook/html-vite";
import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-themes";
import { initLibrary } from "@dumns/ordinara";
import "@dumns/ordinara/fonts.css";
import "@dumns/ordinara/styles.css";
import "@dumns/ordinara-icons/mask.css";

const preview: Preview = {
  globalTypes: {
    direction: {
      description: "Arah teks (RTL)",
      toolbar: {
        title: "Direction",
        icon: "transfer",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { direction: "ltr" },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
    withThemeByDataAttribute({
      themes: { default: "", violet: "violet", emerald: "emerald" },
      defaultTheme: "default",
      attributeName: "data-theme",
    }),
    (story, context) => {
      const wrap = document.createElement("div");
      wrap.dir = (context.globals["direction"] as string) ?? "ltr";
      wrap.className = "bg-background text-fg font-sans p-6 min-h-24";
      const out = story();
      if (typeof out === "string") wrap.innerHTML = out;
      else wrap.append(out);
      // Aktifkan perilaku komponen (accordion, dropdown, modal, dst.) setelah story masuk DOM.
      requestAnimationFrame(() => void initLibrary(wrap));
      return wrap;
    },
  ],
  parameters: { layout: "fullscreen" },
};

export default preview;
