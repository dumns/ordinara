// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@dumns/ordinara";
import page from "@dumns/ordinara/library/components-tables";

const meta: Meta = { title: "Components/Table" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const DefaultTable: Story = { name: "Default table", render: () => renderLibrarySection(page.sections[0]!) };
export const StripedRows: Story = { name: "Striped rows", render: () => renderLibrarySection(page.sections[1]!) };
export const StripedColumns: Story = { name: "Striped columns", render: () => renderLibrarySection(page.sections[2]!) };
export const HoverState: Story = { name: "Hover state", render: () => renderLibrarySection(page.sections[3]!) };
export const TableHeadSortable: Story = { name: "Table head (sortable)", render: () => renderLibrarySection(page.sections[4]!) };
export const TableFoot: Story = { name: "Table foot", render: () => renderLibrarySection(page.sections[5]!) };
export const TableCaption: Story = { name: "Table caption", render: () => renderLibrarySection(page.sections[6]!) };
export const WithoutBorder: Story = { name: "Without border", render: () => renderLibrarySection(page.sections[7]!) };
export const TableWithShadow: Story = { name: "Table with shadow", render: () => renderLibrarySection(page.sections[8]!) };
export const OverflowScrolling: Story = { name: "Overflow scrolling", render: () => renderLibrarySection(page.sections[9]!) };
export const TableSearch: Story = { name: "Table search", render: () => renderLibrarySection(page.sections[10]!) };
export const TableFilter: Story = { name: "Table filter", render: () => renderLibrarySection(page.sections[11]!) };
export const TablePagination: Story = { name: "Table pagination", render: () => renderLibrarySection(page.sections[12]!) };
export const CheckboxSelection: Story = { name: "Checkbox selection", render: () => renderLibrarySection(page.sections[13]!) };
export const TableWithUsers: Story = { name: "Table with users", render: () => renderLibrarySection(page.sections[14]!) };
export const TableWithProducts: Story = { name: "Table with products", render: () => renderLibrarySection(page.sections[15]!) };
export const TableWithModal: Story = { name: "Table with modal", render: () => renderLibrarySection(page.sections[16]!) };
export const TableColors: Story = { name: "Table colors", render: () => renderLibrarySection(page.sections[17]!) };
export const StripedRowsColor: Story = { name: "Striped rows color", render: () => renderLibrarySection(page.sections[18]!) };
export const StripedColumnsColor: Story = { name: "Striped columns color", render: () => renderLibrarySection(page.sections[19]!) };
export const HoverStateX: Story = { name: "Hover state", render: () => renderLibrarySection(page.sections[20]!) };
