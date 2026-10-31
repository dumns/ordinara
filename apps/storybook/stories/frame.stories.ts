import type { Meta, StoryObj } from "@storybook/html-vite";
import { frame, renderFrameDemo, type FrameProps } from "@ordinara/ui";

const meta: Meta<FrameProps> = {
  title: "Ordinara/Frame",
  render: (args) => frame(args),
  args: {
    title: "ordinara://v0.1/live-preview",
    tabs: ["Ringkasan", "Aktivitas", "Pengaturan"],
    activeTab: 0,
    body: `<p class="text-sm text-fg-muted">Konten frame.</p>`,
  },
};
export default meta;

type Story = StoryObj<FrameProps>;

export const Gallery: Story = { render: renderFrameDemo };
export const Playground: Story = {};
