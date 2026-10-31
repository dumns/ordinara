// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/forms-toggle";

const meta: Meta = { title: "Forms/Toggle" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const ToggleExample: Story = { name: "Toggle example", render: () => renderLibrarySection(page.sections[0]!) };
export const CheckedState: Story = { name: "Checked state", render: () => renderLibrarySection(page.sections[1]!) };
export const DisabledState: Story = { name: "Disabled state", render: () => renderLibrarySection(page.sections[2]!) };
export const DoubleLabels: Story = { name: "Double labels", render: () => renderLibrarySection(page.sections[3]!) };
export const ToggleWithIcons: Story = { name: "Toggle with icons", render: () => renderLibrarySection(page.sections[4]!) };
export const ToggleCard: Story = { name: "Toggle card", render: () => renderLibrarySection(page.sections[5]!) };
export const ToggleCardWithIcon: Story = { name: "Toggle card with icon", render: () => renderLibrarySection(page.sections[6]!) };
export const Colors: Story = { name: "Colors", render: () => renderLibrarySection(page.sections[7]!) };
export const Sizes: Story = { name: "Sizes", render: () => renderLibrarySection(page.sections[8]!) };
