import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function PatientScannedDocumentsSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addPatientScannedDocument = useBoltStore(
    (store) => store.addPatientScannedDocument
  );

  const removePatientScannedDocument = useBoltStore(
    (store) => store.removePatientScannedDocument
  );
  useEffect(() => {
    if (message.type === "patientScannedDocument") {
      switch (message.payload.operation) {
        case "add":
          addPatientScannedDocument(message.payload.patientScannedDocument);
          break;
        case "remove":
          removePatientScannedDocument(
            message.payload.patientScannedDocument.id
          );
          break;

        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default PatientScannedDocumentsSubscription;
