// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-card";

const meta: Meta = { title: "Components/Cards" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultCard: Story = { name: "Default card", render: () => renderLibrarySection(page.sections[0]!) };
export const CardWithButton: Story = { name: "Card with button", render: () => renderLibrarySection(page.sections[1]!) };
export const CardWithLink: Story = { name: "Card with link", render: () => renderLibrarySection(page.sections[2]!) };
export const CardWithImage: Story = { name: "Card with image", render: () => renderLibrarySection(page.sections[3]!) };
export const CardWithDescription: Story = { name: "Card with description", render: () => renderLibrarySection(page.sections[4]!) };
export const HorizontalCard: Story = { name: "Horizontal card", render: () => renderLibrarySection(page.sections[5]!) };
export const UserProfileCard: Story = { name: "User profile card", render: () => renderLibrarySection(page.sections[6]!) };
export const CardWithFormInputs: Story = { name: "Card with form inputs", render: () => renderLibrarySection(page.sections[7]!) };
export const ECommerceCard: Story = { name: "E-commerce card", render: () => renderLibrarySection(page.sections[8]!) };
export const CallToActionCard: Story = { name: "Call to action card", render: () => renderLibrarySection(page.sections[9]!) };
export const CardWithNavTabs: Story = { name: "Card with nav tabs", render: () => renderLibrarySection(page.sections[10]!) };
export const CardFullWidthTabs: Story = { name: "Card full width tabs", render: () => renderLibrarySection(page.sections[11]!) };
export const CardWithList: Story = { name: "Card with list", render: () => renderLibrarySection(page.sections[12]!) };
export const PricingCard: Story = { name: "Pricing card", render: () => renderLibrarySection(page.sections[13]!) };
export const TestimonialCard: Story = { name: "Testimonial card", render: () => renderLibrarySection(page.sections[14]!) };
export const CryptoCard: Story = { name: "Crypto card", render: () => renderLibrarySection(page.sections[15]!) };
