// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-breadcrumb";

const meta: Meta = { title: "Components/Breadcrumbs" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultBreadcrumb: Story = { name: "Default breadcrumb", render: () => renderLibrarySection(page.sections[0]!) };
export const SolidBackground: Story = { name: "Solid background", render: () => renderLibrarySection(page.sections[1]!) };
export const HeaderBreadcrumb: Story = { name: "Header breadcrumb", render: () => renderLibrarySection(page.sections[2]!) };
export const BreadcrumbWithDropdown: Story = { name: "Breadcrumb with dropdown", render: () => renderLibrarySection(page.sections[3]!) };
export const BreadcrumbWithButton: Story = { name: "Breadcrumb with button", render: () => renderLibrarySection(page.sections[4]!) };
export const BreadcrumbWithNavigation: Story = { name: "Breadcrumb with navigation", render: () => renderLibrarySection(page.sections[5]!) };
