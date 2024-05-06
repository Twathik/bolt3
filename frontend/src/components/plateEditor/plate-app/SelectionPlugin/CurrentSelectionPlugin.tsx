import { useEditorRef, useEditorSelection } from "@udecode/plate-common";
import { useEffect, useMemo, useState } from "react";
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";
import type { DocumentHeaderElementTypeWithId } from "../Documents/DocumentHeaderUtils";
import { useBoltStore } from "@/stores/boltStore";
import { v4 as uuid } from "uuid";
import { ReadyState } from "react-use-websocket";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { RootDocumentTypes } from "@/lib/generalUtils/RootDocumentTypes";
import type { HocuspocusProvider } from "@hocuspocus/provider";
import randomColor from "randomcolor";

function CurrentSelectionPlugin({
  provider,
}: {
  provider: HocuspocusProvider;
}) {
  const selection = useEditorSelection();
  const editor = useEditorRef();
  const socket = useBoltStore((s) => s.socket);
  const patient = useBoltStore((s) => s.patient);
  const user = useBoltStore((s) => s.user);

  const color = useMemo(
    () =>
      randomColor({
        luminosity: "dark",
        alpha: 1,
        format: "hex",
      }),
    []
  );

  const [localFocusedDocument, setLocalFocusedDocument] =
    useState<FocusedClinicalEvent | null>(null);

  useEffect(() => {
    if (
      socket?.readyState === ReadyState.OPEN &&
      localFocusedDocument &&
      patient
    ) {
      let message: WebsocketMessageInterface = {
        id: uuid(),
        type: "focused-clinical-event",
        global: false,
        payload: {
          operation: "update",
          focusedClinicalEvent: localFocusedDocument,
          patient,
        },
        subscriptionIds: [patient.id],
        destination: [
          "folder",
          "document",
          "focused-clinical-event",
          "secondary-display",
        ],
      };
      socket.sendJsonMessage(message, false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localFocusedDocument?.eventId]);

  useEffect(() => {
    if (selection?.anchor.path[0]) {
      provider.setAwarenessField("user", {
        data: {
          color,
          name: `${user?.lastName} ${user?.firstName}`,
        },
        selection,
      });
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
  }, [color, editor.children, provider, selection, user]);
  return null;
}

export default CurrentSelectionPlugin;
