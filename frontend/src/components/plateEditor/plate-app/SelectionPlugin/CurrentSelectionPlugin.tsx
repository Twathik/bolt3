import { useEditorRef, useEditorSelection } from "@udecode/plate-common";
import { useEffect, useState } from "react";
import { DOCUMENT_HEADER_KEY } from "../Documents/DocumentsKeys";
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";
import type { DocumentHeaderElementTypeWithId } from "../Documents/DocumentHeaderUtils";
import { useBoltStore } from "@/stores/boltStore";
import { v4 as uuid } from "uuid";
import { ReadyState } from "react-use-websocket";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";

const RootDocumentTypes = [DOCUMENT_HEADER_KEY];

function CurrentSelectionPlugin({ patientId }: { patientId: string }) {
  const selection = useEditorSelection();
  const editor = useEditorRef();
  const socket = useBoltStore((s) => s.socket);

  const [localFocusedDocument, setLocalFocusedDocument] =
    useState<FocusedClinicalEvent | null>(null);

  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN && localFocusedDocument) {
      let message: WebsocketMessageInterface = {
        id: uuid(),
        type: "focused-clinical-event",
        global: false,
        payload: {
          operation: "update",
          focusedClinicalEvent: localFocusedDocument,
        },
        subscriptionIds: [patientId],
        destination: ["folder", "document", "focused-clinical-event"],
      };
      socket.sendJsonMessage(message, false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localFocusedDocument?.eventId]);

  useEffect(() => {
    if (selection?.anchor.path[0]) {
      let index: number = selection.anchor.path[0];

      while (
        index > 0 &&
        !RootDocumentTypes.includes(editor.children[index]?.type)
      ) {
        index--;
      }
      const event = editor.children[index] as DocumentHeaderElementTypeWithId;
      if (editor.children[index].type === "document-header") {
        setLocalFocusedDocument({
          eventId: event.eventId,
          eventType: event.documentType,
          createdAt: event.createdAt,
        });
      } else {
        setLocalFocusedDocument(null);
      }
    }
  }, [editor.children, selection]);
  return null;
}

export default CurrentSelectionPlugin;
