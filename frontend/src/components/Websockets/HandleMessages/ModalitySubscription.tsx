import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";

function ModalitySubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const updateModality = useBoltStore((store) => store.updateModalities);
  useEffect(() => {
    if (message.type === "modality") {
      switch (message.payload.operation) {
        case "update":
          updateModality(message.payload.modality);
          break;

        default:
          break;
      }
    }
  }, [message, updateModality]);
  return null;
}

export default ModalitySubscription;
