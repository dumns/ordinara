import type { Meta, StoryObj } from "@storybook/html-vite";
import { foundationSections } from "@ordinara/ui";

const meta: Meta = { title: "Foundation" };
export default meta;

type Story = StoryObj;

const story = (render: () => string): Story => ({ render });

const byId = Object.fromEntries(foundationSections.map((s) => [s.id, s.render]));

export const Colors: Story = story(byId.colors!);
export const Typography: Story = story(byId.typography!);
export const Shape: Story = story(byId.shape!);
export const Motion: Story = story(byId.motion!);
export const Icons: Story = story(byId.icons!);
export const Theming: Story = story(byId.theming!);
export const Rtl: Story = story(byId.rtl!);
