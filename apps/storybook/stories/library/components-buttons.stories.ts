// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-buttons";

const meta: Meta = { title: "Components/Buttons" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultButton: Story = { name: "Default button", render: () => renderLibrarySection(page.sections[0]!) };
export const ButtonPills: Story = { name: "Button pills", render: () => renderLibrarySection(page.sections[1]!) };
export const GradientMonochrome: Story = { name: "Gradient monochrome", render: () => renderLibrarySection(page.sections[2]!) };
export const GradientDuotone: Story = { name: "Gradient duotone", render: () => renderLibrarySection(page.sections[3]!) };
export const GradientOutline: Story = { name: "Gradient outline", render: () => renderLibrarySection(page.sections[4]!) };
export const ColoredShadows: Story = { name: "Colored shadows", render: () => renderLibrarySection(page.sections[5]!) };
export const SocialButtons: Story = { name: "Social buttons", render: () => renderLibrarySection(page.sections[6]!) };
export const PaymentButtons: Story = { name: "Payment buttons", render: () => renderLibrarySection(page.sections[7]!) };
export const OutlineButtons: Story = { name: "Outline buttons", render: () => renderLibrarySection(page.sections[8]!) };
export const ButtonSizes: Story = { name: "Button sizes", render: () => renderLibrarySection(page.sections[9]!) };
export const OutlineButtonSizes: Story = { name: "Outline button sizes", render: () => renderLibrarySection(page.sections[10]!) };
export const ButtonSizesWithIcon: Story = { name: "Button sizes with icon", render: () => renderLibrarySection(page.sections[11]!) };
export const ButtonsWithIcon: Story = { name: "Buttons with icon", render: () => renderLibrarySection(page.sections[12]!) };
export const ButtonWithLabel: Story = { name: "Button with label", render: () => renderLibrarySection(page.sections[13]!) };
export const IconButtons: Story = { name: "Icon buttons", render: () => renderLibrarySection(page.sections[14]!) };
export const Loader: Story = { name: "Loader", render: () => renderLibrarySection(page.sections[15]!) };
export const Disabled: Story = { name: "Disabled", render: () => renderLibrarySection(page.sections[16]!) };
