import type { Meta, StoryObj } from "@storybook/html-vite";
import { badgeTones, card, renderCardDemo, type CardProps } from "@ordinara/ui";

const meta: Meta<CardProps> = {
  title: "Ordinara/Card",
  render: (args) => `<div class="max-w-sm">${card(args)}</div>`,
  args: {
    title: "Basic Card",
    description: "Kontainer default untuk mengelompokkan konten - border tipis, sudut membulat, dan shadow lembut.",
    hoverable: false,
  },
  argTypes: {
    badgeTone: { control: "select", options: [...badgeTones] },
  },
};
export default meta;

type Story = StoryObj<CardProps>;

export const Playground: Story = {};
export const WithButton: Story = { args: { title: "Lengkapi pengaturan", buttonLabel: "Lanjutkan" } };
export const WithLink: Story = { args: { title: "Panduan penggunaan", link: "Baca selengkapnya", badgeLabel: "Panduan", hoverable: true } };
export const Gallery: Story = { render: renderCardDemo };
