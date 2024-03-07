import type { PlateEditor, TDescendant, TElement } from "@udecode/plate-common";
import { DOCUMENT_HEADER_KEY } from "../../plate-app/Documents/DocumentsKeys";
import { DATA_INPUT_ELEMENT } from "../../plate-app/DataInputs/DataInputKeys";
import { getNodeById } from "../../plate-app/utils/getNodeById";

const elementToProtect: string[] = [DOCUMENT_HEADER_KEY];

const withPreventHeadersModifications = (editor: PlateEditor) => {
  const { apply, insertData } = editor;

  editor.apply = (operation) => {
    if (operation.type === "remove_node") {
      const { node } = operation;

      if (elementToProtect.includes(node.type as string)) {
        // Prevent certain element/node to be deleted
        if (!node.toDelete) {
          console.log({ node, from: "deletionProtect" });

          return;
        }
      }
      if (node.type === DATA_INPUT_ELEMENT) {
        const findNode = getNodeById(editor, node.id as string);

        if (findNode) {
          const path = findNode.path;
          let element: TElement | TDescendant = editor.children[path[0]];
          if (element.type == "table") {
            console.log({ node, from: "deletionProtect" });
            return;
          }
        }
      }
    }
    if (operation.type === "insert_node") {
      const { node } = operation;
      if (elementToProtect.includes(node.type as string)) {
        node.toDelete = false;
      }
      if (node.type === DOCUMENT_HEADER_KEY) {
        if (!node.firstInsert) {
          return;
        }
      }
    }

    // Other cases
    apply(operation);
  };

  editor.insertData = (data) => {
    const d = data.getData("text/html");
    const includeDocumentHeader = d.includes("slate-document-header");
    if (includeDocumentHeader) {
      alert(
        "La copie des Titres des examens n'est pas autorisée, veuillez selectionner uniquement le contenu de l'examen et l'inserer dans un nouvel examen si vous le soubhaitez"
      );
      return;
    }
    insertData(data);
  };

  return editor;
};

export default withPreventHeadersModifications;
