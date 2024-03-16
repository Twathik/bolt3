import type { FocusedDocumentType } from "@/stores/boltStoreType";
import type { PlateEditor, Value } from "@udecode/plate-common";
import type { clinicalEventDocument } from "../plate-app/Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "../plate-app/Documents/DocumentsKeys";

const getDocumentNodes = ({
  editor,
  focusedDocument,
}: {
  editor: PlateEditor<Value>;
  focusedDocument: FocusedDocumentType;
}): clinicalEventDocument => {
  const nodes: clinicalEventDocument = [];
  let focusedDocumentIndex = editor.children.findIndex(
    (d) => d.id === focusedDocument?.d.id
  );

  if (focusedDocumentIndex !== -1) {
    editor.children[focusedDocumentIndex].children.forEach((c) =>
      nodes.push(c)
    );
    focusedDocumentIndex++;
    let i = 0;
    while (
      editor.children[focusedDocumentIndex] !== undefined &&
      editor.children[focusedDocumentIndex].type !== DOCUMENT_HEADER_KEY &&
      i < 1000
    ) {
      const element = editor.children[focusedDocumentIndex];

      nodes.push(element);
      focusedDocumentIndex++;
    }
  }
  return nodes;
};

export default getDocumentNodes;
