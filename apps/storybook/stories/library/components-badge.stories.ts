// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-badge";

const meta: Meta = { title: "Components/Badges" };
export default meta;

type Story = StoryObj;

export const DefaultBadges: Story = { name: "Default badges", render: () => renderLibrarySection(page.sections[0]!) };
export const BorderedBadges: Story = { name: "Bordered badges", render: () => renderLibrarySection(page.sections[1]!) };
export const LargeBadges: Story = { name: "Large badges", render: () => renderLibrarySection(page.sections[2]!) };
export const LargeBorderedBadges: Story = { name: "Large bordered badges", render: () => renderLibrarySection(page.sections[3]!) };
export const PillBadges: Story = { name: "Pill badges", render: () => renderLibrarySection(page.sections[4]!) };
export const PillBorderedBadges: Story = { name: "Pill bordered badges", render: () => renderLibrarySection(page.sections[5]!) };
export const BadgesAsLinks: Story = { name: "Badges as links", render: () => renderLibrarySection(page.sections[6]!) };
export const BadgesWithIcon: Story = { name: "Badges with icon", render: () => renderLibrarySection(page.sections[7]!) };
export const LargeBadgesWithIcon: Story = { name: "Large badges with icon", render: () => renderLibrarySection(page.sections[8]!) };
export const BadgesWithOnlyIcon: Story = { name: "Badges with only icon", render: () => renderLibrarySection(page.sections[9]!) };
export const LargeBadgesWithOnlyIcon: Story = { name: "Large badges with only icon", render: () => renderLibrarySection(page.sections[10]!) };
export const BadgesWithDot: Story = { name: "Badges with dot", render: () => renderLibrarySection(page.sections[11]!) };
export const BadgesWithSVGLoader: Story = { name: "Badges with SVG loader", render: () => renderLibrarySection(page.sections[12]!) };
export const DismissibleBadgesChips: Story = { name: "Dismissible badges (chips)", render: () => renderLibrarySection(page.sections[13]!) };
export const ChipsWithAvatar: Story = { name: "Chips with avatar", render: () => renderLibrarySection(page.sections[14]!) };
export const NotificationBadge: Story = { name: "Notification badge", render: () => renderLibrarySection(page.sections[15]!) };
export const ButtonWithBadge: Story = { name: "Button with badge", render: () => renderLibrarySection(page.sections[16]!) };
