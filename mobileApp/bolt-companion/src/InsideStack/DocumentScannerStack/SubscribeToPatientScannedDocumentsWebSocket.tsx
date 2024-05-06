"use client";

import { WebsocketMessageInterface } from "@/Websockets/interfaces/WebsocketMessageInterface";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SubscribeToPatientScannedDocumentsWebSocket({
  patientId,
}: {
  patientId: string;
}) {
  const socket = useMobileBoltStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN) {
      const message: WebsocketMessageInterface = {
        id: uuid(),
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [] },
        subscriptionIds: [patientId],
        destination: ["patientScannedDocument"],
      };

      socket.sendJsonMessage(message, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket?.readyState]);
  return null;
}

export default SubscribeToPatientScannedDocumentsWebSocket;
