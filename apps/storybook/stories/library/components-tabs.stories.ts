// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-tabs";

const meta: Meta = { title: "Components/Tabs" };
export default meta;

type Story = StoryObj;

export const DefaultTabs: Story = { name: "Default tabs", render: () => renderLibrarySection(page.sections[0]!) };
export const TabsWithUnderline: Story = { name: "Tabs with underline", render: () => renderLibrarySection(page.sections[1]!) };
export const TabsWithIcons: Story = { name: "Tabs with icons", render: () => renderLibrarySection(page.sections[2]!) };
export const PillsTabs: Story = { name: "Pills tabs", render: () => renderLibrarySection(page.sections[3]!) };
export const VerticalTabs: Story = { name: "Vertical tabs", render: () => renderLibrarySection(page.sections[4]!) };
export const FullWidthTabs: Story = { name: "Full width tabs", render: () => renderLibrarySection(page.sections[5]!) };
export const TabsWithIconsX: Story = { name: "Tabs with icons", render: () => renderLibrarySection(page.sections[6]!) };
export const InteractiveTabs: Story = { name: "Interactive tabs", render: () => renderLibrarySection(page.sections[7]!) };
export const ActiveTabStyle: Story = { name: "Active tab style", render: () => renderLibrarySection(page.sections[8]!) };
