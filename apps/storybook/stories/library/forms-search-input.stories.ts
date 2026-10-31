// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/forms-search-input";

const meta: Meta = { title: "Forms/Search Input" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const SearchBarExample: Story = { name: "Search bar example", render: () => renderLibrarySection(page.sections[0]!) };
export const SearchWithDropdown: Story = { name: "Search with dropdown", render: () => renderLibrarySection(page.sections[1]!) };
export const SimpleSearchInput: Story = { name: "Simple search input", render: () => renderLibrarySection(page.sections[2]!) };
export const LocationSearch: Story = { name: "Location search", render: () => renderLibrarySection(page.sections[3]!) };
export const VoiceSearch: Story = { name: "Voice search", render: () => renderLibrarySection(page.sections[4]!) };
export const AdvancedSearchInput: Story = { name: "Advanced search input", render: () => renderLibrarySection(page.sections[5]!) };
