"use client";
import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";

function SubscribeToModalitiesWebSocket() {
  const socket = useBoltStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN) {
      const message: WebsocketMessageInterface = {
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [] },
        subscriptionIds: [],
        destination: ["modality"],
      };
      socket.sendJsonMessage(message, true);
    }
  }, [socket, socket?.readyState]);
  return null;
}

export default SubscribeToModalitiesWebSocket;
