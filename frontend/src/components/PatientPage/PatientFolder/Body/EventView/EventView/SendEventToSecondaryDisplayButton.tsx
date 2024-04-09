import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { Button } from "@/components/plate-ui/button";
import type { DocumentHeaderElementTypeWithId } from "@/components/plateEditor/plate-app/Documents/DocumentHeaderUtils";
import { useBoltStore } from "@/stores/boltStore";
import React, { useCallback } from "react";
import { PiCaretCircleDoubleRightThin } from "react-icons/pi";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SendEventToSecondaryDisplayButton({
  doc,
}: {
  doc: DocumentHeaderElementTypeWithId;
}) {
  const socket = useBoltStore((s) => s.socket);
  const patient = useBoltStore((s) => s.patient);
  const send = useCallback(() => {
    if (socket?.readyState === ReadyState.OPEN && patient) {
      let message: WebsocketMessageInterface = {
        id: uuid(),
        type: "focused-clinical-event",
        global: false,
        payload: {
          operation: "update",
          focusedClinicalEvent: {
            eventId: doc.eventId,
            createdAt: doc.createdAt,
            eventType: doc.documentType,
          },
          patient,
        },
        subscriptionIds: [patient?.id ?? ""],
        destination: [
          "folder",
          "document",
          "focused-clinical-event",
          "secondary-display",
        ],
      };
      socket.sendJsonMessage(message, false);
    }
  }, [doc, patient, socket]);
  return (
    <Button
      size="sm"
      variant="ghost"
      className="text-cyan-700 hover:bg-cyan-200 hover:text-cyan-800"
      onClick={send}
    >
      <PiCaretCircleDoubleRightThin />
    </Button>
  );
}

export default SendEventToSecondaryDisplayButton;
