import { useEffect } from "react";

import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";

function PatientScannedDocumentsSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addPatientScannedDocument = useMobileBoltStore(
    (store) => store.addPatientScannedDocument
  );

  const removePatientScannedDocument = useMobileBoltStore(
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
