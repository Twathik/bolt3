import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";

function PatientUpdateSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setPatient = useBoltStore((store) => store.setPatient);
  //const setDocumentVersion = useBoltStore((s) => s.setDocumentVersion);
  //const setFocusedPatientId = useBoltStore((s) => s.setFocusedPatientId);
  useEffect(() => {
    if (message.type === "patient") {
      switch (message.payload.operation) {
        case "update":
          //console.log({ patient: message.payload.patient });
          setPatient(message.payload.patient);
          break;

        default:
          break;
      }
    }
  }, [message, setPatient]);
  return null;
}

export default PatientUpdateSubscription;
