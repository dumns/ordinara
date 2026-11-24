// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/forms-input-field";

const meta: Meta = { title: "Forms/Input Field" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const InputFields: Story = { name: "Input fields", render: () => renderLibrarySection(page.sections[0]!) };
export const InputSizes: Story = { name: "Input sizes", render: () => renderLibrarySection(page.sections[1]!) };
export const DisabledState: Story = { name: "Disabled state", render: () => renderLibrarySection(page.sections[2]!) };
export const Validation: Story = { name: "Validation", render: () => renderLibrarySection(page.sections[3]!) };
export const InputGroup: Story = { name: "Input group", render: () => renderLibrarySection(page.sections[4]!) };
export const HelperText: Story = { name: "Helper text", render: () => renderLibrarySection(page.sections[5]!) };
export const SearchInput: Story = { name: "Search input", render: () => renderLibrarySection(page.sections[6]!) };
export const DropdownInput: Story = { name: "Dropdown input", render: () => renderLibrarySection(page.sections[7]!) };
