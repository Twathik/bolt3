import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { ClinicalEventMessageInterface } from "../interfaces/ClinicalEventsMessageInterface";

function ClinicalEventsSubscription({
  message,
}: {
  message: ClinicalEventMessageInterface;
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
  }, [addClinicalEvent, message, removeClinicalEvent]);
  return null;
}

export default ClinicalEventsSubscription;
