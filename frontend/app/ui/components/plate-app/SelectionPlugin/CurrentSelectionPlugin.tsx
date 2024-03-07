import { useEditorRef, useEditorSelection } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { DOCUMENT_HEADER_KEY } from "../Documents/DocumentsKeys";

import { useMutation } from "@/lib/wundergraph";
import { useToast } from "../../ui/use-toast";
import type { FocusedDocumentType } from "@/stores/boltStoreType";
import type { DocumentHeaderElementTypeWithId } from "../Documents/DocumentHeaderUtils";

const RootDocumentTypes = [DOCUMENT_HEADER_KEY];

function CurrentSelectionPlugin() {
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
  }, [localFocusedDocument, toast, trigger]);

  useEffect(() => {
    if (selection?.anchor.path[0]) {
      let index: number = selection.anchor.path[0];

      while (
        index > 0 &&
        !RootDocumentTypes.includes(editor.children[index]?.type)
      ) {
        index--;
      }

      setLocalFocusedDocument({
        d: editor.children[index] as DocumentHeaderElementTypeWithId,
        payload: "{}",
      });
    }
  }, [editor.children, selection]);
  return null;
}

export default CurrentSelectionPlugin;
