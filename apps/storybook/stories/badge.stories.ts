import type { Meta, StoryObj } from "@storybook/html-vite";
import { badge, badgeTones, renderBadgeDemo, type BadgeProps } from "@dumns/ordinara";

const meta: Meta<BadgeProps> = {
  title: "Ordinara/Badge",
  render: (args) => badge(args),
  args: { label: "Aktif", tone: "success", dot: false, rounded: false, large: false, bordered: false },
  argTypes: {
    tone: { control: "select", options: [...badgeTones] },
  },
};
export default meta;

type Story = StoryObj<BadgeProps>;

export const Gallery: Story = { render: renderBadgeDemo };
export const Playground: Story = {};
