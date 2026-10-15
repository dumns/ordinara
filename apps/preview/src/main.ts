import "@ordinara/ui/styles.css";
import { button, buttonSizes, buttonVariants } from "@ordinara/ui";

const section = (title: string, body: string) => `
  <section class="space-y-4">
    <h2 class="text-sm font-semibold uppercase tracking-wide text-text-subtle">${title}</h2>
    <div class="rounded-card border border-border-default bg-surface p-6">${body}</div>
  </section>`;

const row = (items: string[]) => `<div class="flex flex-wrap items-center gap-3">${items.join("")}</div>`;

const app = document.getElementById("app")!;

app.innerHTML = section(
  "Button",
  `<div class="space-y-6">
    ${row(buttonVariants.map((variant) => button({ label: variant, variant })))}
    ${row(buttonSizes.map((size) => button({ label: `size ${size}`, size })))}
    ${row(buttonVariants.map((variant) => button({ label: `${variant} disabled`, variant, disabled: true })))}
  </div>`,
);

document.getElementById("theme-toggle")!.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
