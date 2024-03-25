import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { getNodeById } from "@/components/plateEditor/lib/getNodeById";
import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";
import { Button } from "@/components/ui/button";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useBoltStore } from "@/stores/boltStore";
import type { Value } from "@udecode/plate-common";
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
  const { trigger, isMutating } = useMutation({
    operationName: "clinicalEvents/deleteOneClinicalEvent",
  });
  const deleteDocument = useCallback(async () => {
    const findDocPath = getNodeById(editor, doc.id);
    if (findDocPath) {
      editor.setSelection({ anchor: { path: findDocPath.path, offset: 0 } });
      const index = findDocPath.path[0];
      const saveBeforeDelete: Value = [];
      saveBeforeDelete.push(editor.children[index]);
      editor.children[index].toDelete = true;
      editor.delete({ at: findDocPath.path });
      let i = 0;
      while (
        editor.children[index] !== undefined &&
        editor.children[index]?.type !== DOCUMENT_HEADER_KEY &&
        i < 5000
      ) {
        saveBeforeDelete.push(editor.children[index]);
        editor.children[index].toDelete = true;
        editor.delete({ at: findDocPath.path });
        i++;
      }

      removeDocumentHeader(doc);

      await trigger({
        id: doc.eventId,
        deletedReport: JSON.stringify(saveBeforeDelete),
      });
    }
  }, [doc, editor, removeDocumentHeader, trigger]);

  if (doc.documentType === "DIAGNOSTIC" || doc.documentType === "HISTORY")
    return (
      <Button
        size="sm"
        variant="ghost"
        disabled
        className="text-red-700 hover:bg-red-200 hover:text-red-800"
      >
        <MdOutlineDeleteSweep />
      </Button>
    );
  return (
    <ConfirmationDialog
      triggerButton={
        <Button
          size="sm"
          variant="ghost"
          className="text-red-700 hover:bg-red-200 hover:text-red-800"
          disabled={isMutating}
        >
          <MdOutlineDeleteSweep />
        </Button>
      }
      callback={deleteDocument}
      confirmButtonTitle="Supprimer"
      cancelButtonTitle="Annuler"
      titre="Voulez vous vraiment supprimer les données de cet examen?"
      description="Attention cette action est irreversible"
      disableConfirmation={isMutating}
      showValidationButton
    />
  );
}

export default DeleteDocumentButton;
