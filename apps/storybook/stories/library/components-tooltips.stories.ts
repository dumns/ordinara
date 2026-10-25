// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-tooltips";

const meta: Meta = { title: "Components/Tooltip" };
export default meta;

type Story = StoryObj;

export const DefaultTooltipExample: Story = { name: "Default tooltip example", render: () => renderLibrarySection(page.sections[0]!) };
export const TooltipStyles: Story = { name: "Tooltip styles", render: () => renderLibrarySection(page.sections[1]!) };
export const Placement: Story = { name: "Placement", render: () => renderLibrarySection(page.sections[2]!) };
export const Triggering: Story = { name: "Triggering", render: () => renderLibrarySection(page.sections[3]!) };
export const Animation: Story = { name: "Animation", render: () => renderLibrarySection(page.sections[4]!) };
export const DisableArrow: Story = { name: "Disable arrow", render: () => renderLibrarySection(page.sections[5]!) };
