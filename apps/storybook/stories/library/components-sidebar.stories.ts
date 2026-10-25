// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-sidebar";

const meta: Meta = { title: "Components/Sidebar" };
export default meta;

type Story = StoryObj;

export const DefaultSidebar: Story = { name: "Default sidebar", render: () => renderLibrarySection(page.sections[0]!) };
export const MultiLevelMenu: Story = { name: "Multi-level menu", render: () => renderLibrarySection(page.sections[1]!) };
export const ContentSeparator: Story = { name: "Content separator", render: () => renderLibrarySection(page.sections[2]!) };
export const CTAButton: Story = { name: "CTA button", render: () => renderLibrarySection(page.sections[3]!) };
export const LogoBranding: Story = { name: "Logo branding", render: () => renderLibrarySection(page.sections[4]!) };
export const SidebarWithNavbar: Story = { name: "Sidebar with navbar", render: () => renderLibrarySection(page.sections[5]!) };
export const OffCanvasSidebar: Story = { name: "Off-canvas sidebar", render: () => renderLibrarySection(page.sections[6]!) };
