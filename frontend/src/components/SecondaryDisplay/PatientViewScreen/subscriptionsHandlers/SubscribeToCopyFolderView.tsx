"use client";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SubscribeToCopyFolderView({ patientId }: { patientId: string }) {
  const socket = useBoltStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN && patientId) {
      const message: WebsocketMessageInterface = {
        id: uuid(),
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [patientId] },
        subscriptionIds: [],
        destination: ["secondary-display", "folder-copy", "patient-Root"],
      };
      socket.sendJsonMessage(message, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientId, socket?.readyState]);
  return null;
}

export default SubscribeToCopyFolderView;
