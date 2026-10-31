// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-list-group";

const meta: Meta = { title: "Components/List Group" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultListGroup: Story = { name: "Default list group", render: () => renderLibrarySection(page.sections[0]!) };
export const ListGroupWithLinks: Story = { name: "List group with links", render: () => renderLibrarySection(page.sections[1]!) };
export const ListGroupWithButtons: Story = { name: "List group with buttons", render: () => renderLibrarySection(page.sections[2]!) };
export const ListGroupWithIcons: Story = { name: "List group with icons", render: () => renderLibrarySection(page.sections[3]!) };
export const FeaturesListGroup: Story = { name: "Features list group", render: () => renderLibrarySection(page.sections[4]!) };
export const StatisticListWithDivider: Story = { name: "Statistic list with divider", render: () => renderLibrarySection(page.sections[5]!) };
export const ListWithAvatarsAndCTA: Story = { name: "List with avatars and CTA", render: () => renderLibrarySection(page.sections[6]!) };
