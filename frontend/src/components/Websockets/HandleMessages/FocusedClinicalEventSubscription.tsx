import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";

function FocusedClinicalEventSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setFocusedClinicalEvent = useBoltStore(
    (store) => store.setFocusedClinicalEvent
  );
  useEffect(() => {
    if (message.type === "focused-clinical-event") {
      switch (message.payload.operation) {
        case "update":
          setFocusedClinicalEvent(message.payload.focusedClinicalEvent);
          break;

        default:
          break;
      }
    }
  }, [message, setFocusedClinicalEvent]);
  return null;
}

export default FocusedClinicalEventSubscription;
