import type { PlateEditor } from "@udecode/plate-common";

export const insertEmptyParagraphNode = (editor: PlateEditor) => {
  editor.insertNode({
    type: "p",
    children: [{ text: "" }],
  });
};
