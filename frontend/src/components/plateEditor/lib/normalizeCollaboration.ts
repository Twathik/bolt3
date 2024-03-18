import { insertNodes, isEditor, type PlateEditor } from "@udecode/plate-common";
import { v4 as uuid } from "uuid";

const normalizeCollaboration = (editor: PlateEditor) => {
  const { normalizeNode } = editor;
  editor.normalizeNode = (entry) => {
    const [node] = entry;
    if (!isEditor(node) || (node?.children as Array<any>)?.length > 0) {
      return normalizeNode(entry);
    }

    insertNodes(
      editor,
      {
        type: "p",
        children: [{ text: "" }],
        id: uuid(),
      },
      { at: [0] }
    );
  };

  return editor;
};

export default normalizeCollaboration;
