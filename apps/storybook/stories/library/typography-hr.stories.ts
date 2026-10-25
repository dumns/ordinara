// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/typography-hr";

const meta: Meta = { title: "Typography/Horizontal Line (HR)" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultHR: Story = { name: "Default HR", render: () => renderLibrarySection(page.sections[0]!) };
export const Trimmed: Story = { name: "Trimmed", render: () => renderLibrarySection(page.sections[1]!) };
export const IconHR: Story = { name: "Icon HR", render: () => renderLibrarySection(page.sections[2]!) };
export const HRWithText: Story = { name: "HR with text", render: () => renderLibrarySection(page.sections[3]!) };
export const HRShape: Story = { name: "HR shape", render: () => renderLibrarySection(page.sections[4]!) };
