import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";

function PatientUpdateSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const setPatient = useBoltStore((store) => store.setPatient);
  const addToTrash = useBoltStore((s) => s.addPatientToTrash);
  const removeFromTrash = useBoltStore((s) => s.removePatientFromTrash);
  //const setDocumentVersion = useBoltStore((s) => s.setDocumentVersion);
  //const setFocusedPatientId = useBoltStore((s) => s.setFocusedPatientId);
  useEffect(() => {
    if (message.type === "patient") {
      switch (message.payload.operation) {
        case "update":
          console.log({ patient: message.payload });
          setPatient(message.payload.patient);
          break;
        case "onTrash":
          console.log({ payload: message.payload });
          if (message.payload.patient) {
            if (message.payload.trashOperation === "addToTrash")
              addToTrash(message.payload.patient);
            if (message.payload.trashOperation === "restore")
              removeFromTrash(message.payload.patient);
          }

          break;

        default:
          break;
      }
    }
  }, [addToTrash, message, removeFromTrash, setPatient]);
  return null;
}

export default PatientUpdateSubscription;
