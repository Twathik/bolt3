import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function ClinicalEventsSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addClinicalEvent = useBoltStore((store) => store.addClinicalEvent);

  const removeClinicalEvent = useBoltStore(
    (store) => store.removeClinicalEvent
  );
  useEffect(() => {
    if (message.type === "clinicalEvent") {
      switch (message.payload.operation) {
        case "add":
          addClinicalEvent(message.payload.clinicalEvent);
          break;
        case "remove":
          removeClinicalEvent(message.payload.clinicalEvent);
          break;

        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default ClinicalEventsSubscription;
