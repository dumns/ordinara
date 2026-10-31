// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/components-pagination";

const meta: Meta = { title: "Components/Pagination" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultPagination: Story = { name: "Default pagination", render: () => renderLibrarySection(page.sections[0]!) };
export const PaginationWithIcons: Story = { name: "Pagination with icons", render: () => renderLibrarySection(page.sections[1]!) };
export const PreviousAndNext: Story = { name: "Previous and next", render: () => renderLibrarySection(page.sections[2]!) };
export const PreviousAndNextWithIcons: Story = { name: "Previous and next with icons", render: () => renderLibrarySection(page.sections[3]!) };
export const TableDataPagination: Story = { name: "Table data pagination", render: () => renderLibrarySection(page.sections[4]!) };
export const TablePaginationWithIcons: Story = { name: "Table pagination with icons", render: () => renderLibrarySection(page.sections[5]!) };
export const PaginationWithDropdown: Story = { name: "Pagination with dropdown", render: () => renderLibrarySection(page.sections[6]!) };
export const PaginationWithInput: Story = { name: "Pagination with input", render: () => renderLibrarySection(page.sections[7]!) };
export const InputFieldAndButton: Story = { name: "Input field and button", render: () => renderLibrarySection(page.sections[8]!) };
export const SelectInputAndButtons: Story = { name: "Select input and buttons", render: () => renderLibrarySection(page.sections[9]!) };
export const SinglePagination: Story = { name: "Single pagination", render: () => renderLibrarySection(page.sections[10]!) };
