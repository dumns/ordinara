// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-button-group";

const meta: Meta = { title: "Components/Button Group" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultExample: Story = { name: "Default example", render: () => renderLibrarySection(page.sections[0]!) };
export const ButtonGroupInfo: Story = { name: "Button group info", render: () => renderLibrarySection(page.sections[1]!) };
export const ButtonGroupIconAction: Story = { name: "Button group icon action", render: () => renderLibrarySection(page.sections[2]!) };
export const ButtonGroupIcons: Story = { name: "Button group icons", render: () => renderLibrarySection(page.sections[3]!) };
export const ButtonGroupDropdown: Story = { name: "Button group dropdown", render: () => renderLibrarySection(page.sections[4]!) };
export const ButtonGroupBadge: Story = { name: "Button group badge", render: () => renderLibrarySection(page.sections[5]!) };
export const QRCodeButtonGroup: Story = { name: "QR code button group", render: () => renderLibrarySection(page.sections[6]!) };
export const PaginationButtonGroup: Story = { name: "Pagination button group", render: () => renderLibrarySection(page.sections[7]!) };
export const VerticalButtonGroups: Story = { name: "Vertical button groups", render: () => renderLibrarySection(page.sections[8]!) };
export const ButtonGroupWithColors: Story = { name: "Button group with colors", render: () => renderLibrarySection(page.sections[9]!) };
export const ButtonGroupAsLinks: Story = { name: "Button group as links", render: () => renderLibrarySection(page.sections[10]!) };
export const GroupButtonsWithIcons: Story = { name: "Group buttons with icons", render: () => renderLibrarySection(page.sections[11]!) };
export const ButtonGroupOutline: Story = { name: "Button group outline", render: () => renderLibrarySection(page.sections[12]!) };
