import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { WebsocketMessageInterface } from "../../interfaces/WebsocketMessageInterface";

function ConsultationListSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addPatientSpotlight = useBoltStore(
    (store) => store.addPatientSpotlight
  );

  const removePatientSpotlight = useBoltStore(
    (store) => store.removePatientSpotlight
  );
  const updatePatientSpotlight = useBoltStore(
    (store) => store.updatePatientSpotlight
  );

  useEffect(() => {
    if (message.type === "consultation-list") {
      switch (message.payload.operation) {
        case "add":
          addPatientSpotlight(message.payload.consultationList);
          break;
        case "remove":
          removePatientSpotlight(message.payload.consultationList);
          break;
        case "update":
          updatePatientSpotlight(message.payload.consultationList);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default ConsultationListSubscription;
