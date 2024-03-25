"use client";

import type { WebsocketMessageInterface } from "@/components/Websockets/interfaces/WebsocketMessageInterface";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";
import { v4 as uuid } from "uuid";

function SubscribeToSecondaryDisplayWebSocket() {
  const socket = useBoltStore((s) => s.socket);
  useEffect(() => {
    if (socket?.readyState === ReadyState.OPEN) {
      const message: WebsocketMessageInterface = {
        id: uuid(),
        type: "subscribe",
        global: false,
        payload: { operation: "subscribeTo", SubscribeTo: [] },
        subscriptionIds: [],
        destination: ["secondary-display"],
      };

      socket.sendJsonMessage(message, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket?.readyState]);
  return null;
}

export default SubscribeToSecondaryDisplayWebSocket;
