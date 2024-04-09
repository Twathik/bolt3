import type { PlateEditor, TDescendant, TElement } from "@udecode/plate-common";
import {
  PRESCRIPTION_LIST_NUMBER_COL,
  PRESCRIPTION_TABLE_KEY,
} from "../../plate-app/PrescriptionTable/PrescriptionTableKey";
import { getNodeById } from "../getNodeById";
import { RootDocumentTypes } from "@/lib/utils/RootDocumentTypes";
import { getNodesByType } from "../getNodesByType";

const withPrescriptionListNumberOverride = (editor: PlateEditor) => {
  const { apply } = editor;

  editor.apply = (operation) => {
    if (operation.type === "insert_node") {
      const node: TDescendant = operation.node;

      if (node.type === "p") {
        const prescriptionTableIndex = (node as TElement).children?.findIndex(
          (c) => c.type === PRESCRIPTION_TABLE_KEY
        );
        if (prescriptionTableIndex !== -1) {
          const elementIndex = (
            (node as TElement).children[prescriptionTableIndex] as TElement
          ).children?.findIndex((c) => c.type === PRESCRIPTION_LIST_NUMBER_COL);
          if (elementIndex !== -1) {
            const element = (
              (node as TElement).children[prescriptionTableIndex] as TElement
            ).children[elementIndex];
            const targetNode = getNodeById(editor, element.id as string);
            if (targetNode) {
              let index: number = targetNode.path[0];
              let nodes: TDescendant[] = [];

              while (
                index > 0 &&
                !RootDocumentTypes.includes(editor.children[index]?.type)
              ) {
                nodes.push(editor.children[index]);
                index--;
              }
              const prescriptions = getNodesByType({
                nodesToCheck: nodes,
                type: PRESCRIPTION_TABLE_KEY,
              });
              (
                (node as TElement).children[prescriptionTableIndex] as TElement
              ).children[elementIndex].prescriptionNumber =
                prescriptions.length + 1;
            }
          }
        }

        apply({ ...operation, node });
        return;
      }
    }

    // Other cases
    apply(operation);
  };

  return editor;
};

export default withPrescriptionListNumberOverride;
