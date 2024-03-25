"use client";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import type { mainDb_PatientDocumentTypeValues } from "@/components/wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SubscribeToPatientWebSocket({
  patientId,
  documentType,
}: {
  patientId: string;
  documentType: mainDb_PatientDocumentTypeValues;
}) {
  const socket = useBoltStore((s) => s.socket);
  const user = useBoltStore((s) => s.user);

  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN && user) {
      let message: WebsocketMessageInterface = {
        id: uuid(),
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [patientId] },
        subscriptionIds: [],
        destination: [documentType],
      };
      socket.sendJsonMessage(message, false);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientId, socket?.readyState, user]);
  return null;
}

export default SubscribeToPatientWebSocket;
