import type { Meta, StoryObj } from "@storybook/html-vite";
import { button, buttonSizes, buttonVariants, type ButtonProps } from "@ordinara/ui";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  render: (args) => button(args),
  args: { label: "Button", variant: "primary", size: "md", disabled: false },
  argTypes: {
    variant: { control: "select", options: [...buttonVariants] },
    size: { control: "select", options: [...buttonSizes] },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () =>
    `<div class="flex flex-wrap gap-3">${buttonVariants
      .map((variant) => button({ label: variant, variant }))
      .join("")}</div>`,
};

export const Sizes: Story = {
  render: () =>
    `<div class="flex flex-wrap items-center gap-3">${buttonSizes
      .map((size) => button({ label: `size ${size}`, size }))
      .join("")}</div>`,
};

export const Disabled: Story = {
  render: () =>
    `<div class="flex flex-wrap gap-3">${buttonVariants
      .map((variant) => button({ label: `${variant} disabled`, variant, disabled: true }))
      .join("")}</div>`,
};
