import type { Meta, StoryObj } from "@storybook/html-vite";
import { button, buttonSizes, buttonVariants, iconNames, renderButtonDemo, type ButtonProps } from "@ordinara/ui";

const meta: Meta<ButtonProps> = {
  title: "Ordinara/Button",
  render: (args) => button(args),
  args: { label: "Tambah Data", variant: "primary", size: "md", disabled: false, loading: false, iconStart: "plus" },
  argTypes: {
    variant: { control: "select", options: [...buttonVariants] },
    size: { control: "select", options: [...buttonSizes] },
    iconStart: { control: "select", options: [undefined, ...iconNames] },
    iconEnd: { control: "select", options: [undefined, ...iconNames] },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = {};
export const WithIconEnd: Story = { args: { label: "Pilih paket", iconStart: undefined, iconEnd: "arrow-right" } };
export const Outline: Story = { args: { label: "Bantuan", variant: "outline", iconStart: "circle-help" } };
export const Loading: Story = { args: { label: "Memuat…", loading: true, iconStart: undefined } };
export const Gallery: Story = { render: renderButtonDemo };
