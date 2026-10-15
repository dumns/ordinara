// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-progress";

const meta: Meta = { title: "Components/Progress Bar" };
export default meta;

type Story = StoryObj;

export const DefaultProgressBar: Story = { name: "Default progress bar", render: () => renderLibrarySection(page.sections[0]!) };
export const Sizes: Story = { name: "Sizes", render: () => renderLibrarySection(page.sections[1]!) };
export const WithLabelInside: Story = { name: "With label inside", render: () => renderLibrarySection(page.sections[2]!) };
export const WithLabelOutside: Story = { name: "With label outside", render: () => renderLibrarySection(page.sections[3]!) };
export const Colors: Story = { name: "Colors", render: () => renderLibrarySection(page.sections[4]!) };
