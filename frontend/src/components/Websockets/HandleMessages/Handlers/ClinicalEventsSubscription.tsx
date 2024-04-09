import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { ClinicalEventMessageInterface } from "../../interfaces/MessagesTypes/ClinicalEventsMessageInterface";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default ClinicalEventsSubscription;
