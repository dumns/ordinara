// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-avatar";

const meta: Meta = { title: "Components/Avatar" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultAvatar: Story = { name: "Default avatar", render: () => renderLibrarySection(page.sections[0]!) };
export const Bordered: Story = { name: "Bordered", render: () => renderLibrarySection(page.sections[1]!) };
export const PlaceholderIcon: Story = { name: "Placeholder icon", render: () => renderLibrarySection(page.sections[2]!) };
export const PlaceholderInitials: Story = { name: "Placeholder initials", render: () => renderLibrarySection(page.sections[3]!) };
export const AvatarTooltip: Story = { name: "Avatar tooltip", render: () => renderLibrarySection(page.sections[4]!) };
export const DotIndicator: Story = { name: "Dot indicator", render: () => renderLibrarySection(page.sections[5]!) };
export const Stacked: Story = { name: "Stacked", render: () => renderLibrarySection(page.sections[6]!) };
export const AvatarText: Story = { name: "Avatar text", render: () => renderLibrarySection(page.sections[7]!) };
export const UserDropdown: Story = { name: "User dropdown", render: () => renderLibrarySection(page.sections[8]!) };
export const Sizes: Story = { name: "Sizes", render: () => renderLibrarySection(page.sections[9]!) };
