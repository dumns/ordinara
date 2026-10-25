// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/forms-select";

const meta: Meta = { title: "Forms/Select" };
export default meta;

type Story = StoryObj;

export const SelectInputExample: Story = { name: "Select input example", render: () => renderLibrarySection(page.sections[0]!) };
export const MultipleOptions: Story = { name: "Multiple options", render: () => renderLibrarySection(page.sections[1]!) };
export const SizeAttribute: Story = { name: "Size attribute", render: () => renderLibrarySection(page.sections[2]!) };
export const DisabledState: Story = { name: "Disabled state", render: () => renderLibrarySection(page.sections[3]!) };
export const UnderlineSelect: Story = { name: "Underline select", render: () => renderLibrarySection(page.sections[4]!) };
export const SelectWithDropdown: Story = { name: "Select with dropdown", render: () => renderLibrarySection(page.sections[5]!) };
export const Sizes: Story = { name: "Sizes", render: () => renderLibrarySection(page.sections[6]!) };
