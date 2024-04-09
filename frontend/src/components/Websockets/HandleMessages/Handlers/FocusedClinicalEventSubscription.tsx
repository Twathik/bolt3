import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function FocusedClinicalEventSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setFocusedClinicalEvent = useBoltStore(
    (store) => store.setFocusedClinicalEvent
  );
  const secondaryDisplay = useBoltStore((s) => s.setSecondaryDisplay);
  const setPatient = useBoltStore((s) => s.setPatient);

  useEffect(() => {
    if (message.type === "focused-clinical-event") {
      switch (message.payload.operation) {
        case "update":
          secondaryDisplay({
            screenType: "patientView",
            patient: message.payload.patient,
          });
          setPatient(message.payload.patient);
          setFocusedClinicalEvent(message.payload.focusedClinicalEvent);

          break;

        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default FocusedClinicalEventSubscription;
