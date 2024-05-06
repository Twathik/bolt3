import React, { useMemo } from "react";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";
import ConsultationListSubscription from "./Handlers/ConsultationListSubscription";
import PatientScannedDocumentsSubscription from "./Handlers/PatientScannedDocumentsSubscription";

function RootMessageHandler({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const component = useMemo(() => {
    switch (message.type) {
      case "consultation-list":
        return <ConsultationListSubscription message={message} />;
      case "patientScannedDocument":
        return <PatientScannedDocumentsSubscription message={message} />;
      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);

  return component;
}

export default RootMessageHandler;
