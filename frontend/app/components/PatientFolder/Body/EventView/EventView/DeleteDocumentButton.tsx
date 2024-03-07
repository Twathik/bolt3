import { useBoltStore } from "@/stores/boltStore";
import type { DocumentHeaderElementTypeWithId } from "@/ui/components/plate-app/Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "@/ui/components/plate-app/Documents/DocumentsKeys";
import { getNodeById } from "@/ui/components/plate-app/utils/getNodeById";
import { Button } from "@/ui/components/ui/button";
import { useEditorRef } from "@udecode/plate-common";
import React, { useCallback } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

function DeleteDocumentButton({
  doc,
}: {
  doc: DocumentHeaderElementTypeWithId;
}) {
  const editor = useEditorRef();
  const removeDocumentHeader = useBoltStore((s) => s.removeDocumentHeader);
  const deleteDocument = useCallback(() => {
    const findDocPath = getNodeById(editor, doc.id);
    if (findDocPath) {
      editor.setSelection({ anchor: { path: findDocPath.path, offset: 0 } });
      const index = findDocPath.path[0];
      console.log({ el: editor.children[index] });
      editor.children[index].toDelete = true;
      editor.delete({ at: findDocPath.path });
      let i = 0;
      while (
        editor.children[index] !== undefined &&
        editor.children[index]?.type !== DOCUMENT_HEADER_KEY &&
        i < 5000
      ) {
        editor.children[index].toDelete = true;
        editor.delete({ at: findDocPath.path });
        i++;
      }

      removeDocumentHeader(doc);
    }
  }, [doc, editor, removeDocumentHeader]);

  if (doc.documentType === "DIAGNOSTICS" || doc.documentType === "HISTORY")
    return (
      <Button
        size="sm"
        variant="ghost"
        disabled
        className="text-red-700 hover:bg-red-200 hover:text-red-800">
        <MdOutlineDeleteSweep />
      </Button>
    );
  return (
    <Button
      size="sm"
      variant="ghost"
      className="text-red-700 hover:bg-red-200 hover:text-red-800"
      onClick={deleteDocument}>
      <MdOutlineDeleteSweep />
    </Button>
  );
}

export default DeleteDocumentButton;
