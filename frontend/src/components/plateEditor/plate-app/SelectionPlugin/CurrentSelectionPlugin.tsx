import { useEditorRef, useEditorSelection } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { DOCUMENT_HEADER_KEY } from "../Documents/DocumentsKeys";
import type { FocusedDocumentType } from "@/stores/boltStoreType";
import type { DocumentHeaderElementTypeWithId } from "../Documents/DocumentHeaderUtils";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";

const RootDocumentTypes = [DOCUMENT_HEADER_KEY];

function CurrentSelectionPlugin({ patientId }: { patientId: string }) {
  const selection = useEditorSelection();
  const editor = useEditorRef();
  const { toast } = useToast();

  const { trigger } = useMutation({
    operationName: "AppSubscription/triggerAppSubscription",
  });
  const [localFocusedDocument, setLocalFocusedDocument] =
    useState<FocusedDocumentType | null>(null);

  useEffect(() => {
    let req = true;
    const updateFocusedDocument = async () => {
      try {
        await trigger({
          global: false,
          appType: "focusedDocument",
          appPayload: JSON.stringify(localFocusedDocument),
          subscriptionSpecificId: patientId,
        });
      } catch (error) {
        toast({
          title: "Erreur réseau",
          description: "La synchronisation du dossier a échoué",
          variant: "destructive",
        });
      }
    };

    if (req) updateFocusedDocument();

    return () => {
      req = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localFocusedDocument?.d.eventId, toast, trigger]);

  useEffect(() => {
    if (selection?.anchor.path[0]) {
      let index: number = selection.anchor.path[0];

      while (
        index > 0 &&
        !RootDocumentTypes.includes(editor.children[index]?.type)
      ) {
        index--;
      }
      if (editor.children[index].type === "document-header") {
        setLocalFocusedDocument({
          d: editor.children[index] as DocumentHeaderElementTypeWithId,
          payload: "{}",
        });
      } else {
        setLocalFocusedDocument(null);
      }
    }
  }, [editor.children, selection]);
  return null;
}

export default CurrentSelectionPlugin;
