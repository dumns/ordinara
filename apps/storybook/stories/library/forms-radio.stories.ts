// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/forms-radio";

const meta: Meta = { title: "Forms/Radio" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const RadioExample: Story = { name: "Radio example", render: () => renderLibrarySection(page.sections[0]!) };
export const DisabledState: Story = { name: "Disabled state", render: () => renderLibrarySection(page.sections[1]!) };
export const RadioLink: Story = { name: "Radio link", render: () => renderLibrarySection(page.sections[2]!) };
export const HelperText: Story = { name: "Helper text", render: () => renderLibrarySection(page.sections[3]!) };
export const Bordered: Story = { name: "Bordered", render: () => renderLibrarySection(page.sections[4]!) };
export const RadioListGroup: Story = { name: "Radio list group", render: () => renderLibrarySection(page.sections[5]!) };
export const HorizontalListGroup: Story = { name: "Horizontal list group", render: () => renderLibrarySection(page.sections[6]!) };
export const RadioInDropdown: Story = { name: "Radio in dropdown", render: () => renderLibrarySection(page.sections[7]!) };
export const InlineLayout: Story = { name: "Inline layout", render: () => renderLibrarySection(page.sections[8]!) };
export const AdvancedLayout: Story = { name: "Advanced layout", render: () => renderLibrarySection(page.sections[9]!) };
export const AdvancedLayoutWithIcons: Story = { name: "Advanced layout with icons", render: () => renderLibrarySection(page.sections[10]!) };
