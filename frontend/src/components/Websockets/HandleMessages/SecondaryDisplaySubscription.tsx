import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";

function SecondaryDisplaySubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setSecondaryDisplay = useBoltStore(
    (store) => store.setSecondaryDisplay
  );
  const setPatient = useBoltStore((s) => s.setPatient);
  useEffect(() => {
    if (message.type === "secondaryDisplay") {
      switch (message.payload.screenType) {
        case "mainScreen":
          setSecondaryDisplay({ screenType: "mainScreen" });
          break;
        case "patientView":
          setSecondaryDisplay({
            screenType: "patientView",
            patient: message.payload.patient,
          });
          setPatient(message.payload.patient);
          break;
        default:
          break;
      }
    }
  }, [message, setPatient, setSecondaryDisplay]);
  return null;
}

export default SecondaryDisplaySubscription;
