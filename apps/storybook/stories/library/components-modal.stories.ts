// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-modal";

const meta: Meta = { title: "Components/Modal" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultModal: Story = { name: "Default modal", render: () => renderLibrarySection(page.sections[0]!) };
export const StaticModal: Story = { name: "Static modal", render: () => renderLibrarySection(page.sections[1]!) };
export const PopUpModal: Story = { name: "Pop-up modal", render: () => renderLibrarySection(page.sections[2]!) };
export const FormElement: Story = { name: "Form element", render: () => renderLibrarySection(page.sections[3]!) };
export const ModalWithCRUD: Story = { name: "Modal with CRUD", render: () => renderLibrarySection(page.sections[4]!) };
export const ModalWithRadioInputs: Story = { name: "Modal with radio inputs", render: () => renderLibrarySection(page.sections[5]!) };
export const ModalWithTimeline: Story = { name: "Modal with timeline", render: () => renderLibrarySection(page.sections[6]!) };
export const ModalWithProgressBar: Story = { name: "Modal with progress bar", render: () => renderLibrarySection(page.sections[7]!) };
export const CryptoWallet: Story = { name: "Crypto wallet", render: () => renderLibrarySection(page.sections[8]!) };
export const Sizes: Story = { name: "Sizes", render: () => renderLibrarySection(page.sections[9]!) };
export const Placement: Story = { name: "Placement", render: () => renderLibrarySection(page.sections[10]!) };
