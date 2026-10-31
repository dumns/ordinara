// GENERATED oleh scripts/gen-library.mjs. Jangan edit manual.
import type { Meta, StoryObj } from "@storybook/html-vite";
import { renderLibraryPage, renderLibrarySection } from "@ordinara/ui";
import page from "@ordinara/ui/library/forms-textarea";

const meta: Meta = { title: "Forms/Textarea" };
export default meta;

type Story = StoryObj;

export const Gallery: Story = { name: "Gallery", render: () => renderLibraryPage(page) };
export const TextareaExample: Story = { name: "Textarea example", render: () => renderLibrarySection(page.sections[0]!) };
export const WYSIWYGEditor: Story = { name: "WYSIWYG Editor", render: () => renderLibrarySection(page.sections[1]!) };
export const CommentBox: Story = { name: "Comment box", render: () => renderLibrarySection(page.sections[2]!) };
export const ChatroomInput: Story = { name: "Chatroom input", render: () => renderLibrarySection(page.sections[3]!) };
