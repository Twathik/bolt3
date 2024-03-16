"use client";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";

function SubscribeToPatientWebSocket({ patientId }: { patientId: string }) {
  const socket = useBoltStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN) {
      const message: WebsocketMessageInterface = {
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [patientId] },
        subscriptionIds: [],
        destination: ["folder"],
      };
      socket.sendJsonMessage(message, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientId, socket?.readyState]);
  return null;
}

export default SubscribeToPatientWebSocket;
