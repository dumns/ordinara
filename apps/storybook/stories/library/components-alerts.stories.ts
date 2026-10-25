// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-alerts";

const meta: Meta = { title: "Components/Alerts" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultAlert: Story = { name: "Default alert", render: () => renderLibrarySection(page.sections[0]!) };
export const AlertsWithIcon: Story = { name: "Alerts with icon", render: () => renderLibrarySection(page.sections[1]!) };
export const BorderedAlerts: Story = { name: "Bordered alerts", render: () => renderLibrarySection(page.sections[2]!) };
export const AlertsWithList: Story = { name: "Alerts with list", render: () => renderLibrarySection(page.sections[3]!) };
export const Dismissing: Story = { name: "Dismissing", render: () => renderLibrarySection(page.sections[4]!) };
export const BorderAccent: Story = { name: "Border accent", render: () => renderLibrarySection(page.sections[5]!) };
export const AdditionalContent: Story = { name: "Additional content", render: () => renderLibrarySection(page.sections[6]!) };
export const AnnouncementAlerts: Story = { name: "Announcement alerts", render: () => renderLibrarySection(page.sections[7]!) };
