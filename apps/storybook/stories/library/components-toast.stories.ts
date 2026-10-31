// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-toast";

const meta: Meta = { title: "Components/Toast" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultToast: Story = { name: "Default toast", render: () => renderLibrarySection(page.sections[0]!) };
export const Colors: Story = { name: "Colors", render: () => renderLibrarySection(page.sections[1]!) };
export const SimpleToast: Story = { name: "Simple toast", render: () => renderLibrarySection(page.sections[2]!) };
export const UndoButton: Story = { name: "Undo button", render: () => renderLibrarySection(page.sections[3]!) };
export const ToastMessage: Story = { name: "Toast message", render: () => renderLibrarySection(page.sections[4]!) };
export const PushNotification: Story = { name: "Push notification", render: () => renderLibrarySection(page.sections[5]!) };
export const InteractiveToast: Story = { name: "Interactive toast", render: () => renderLibrarySection(page.sections[6]!) };
export const ToastIllustration: Story = { name: "Toast illustration", render: () => renderLibrarySection(page.sections[7]!) };
export const ToastProgressBar: Story = { name: "Toast progress bar", render: () => renderLibrarySection(page.sections[8]!) };
export const ToastDangerAlert: Story = { name: "Toast danger alert", render: () => renderLibrarySection(page.sections[9]!) };
export const ToastWarningAlert: Story = { name: "Toast warning alert", render: () => renderLibrarySection(page.sections[10]!) };
export const Positioning: Story = { name: "Positioning", render: () => renderLibrarySection(page.sections[11]!) };
