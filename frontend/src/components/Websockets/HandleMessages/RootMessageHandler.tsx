import React, { useMemo } from "react";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";
import PatientUpdateSubscription from "./PatientUpdateSubscription";
import SecondaryDisplaySubscription from "./SecondaryDisplaySubscription";
import MobileDevicesSubscription from "./MobileDevicesSubscription";
import ModalitySubscription from "./ModalitySubscription";
import DispatchUserSubscription from "./DispatchUserSubscription";
import ClinicalEventsSubscription from "./ClinicalEventsSubscription";
import FocusedDocumentSubscription from "./FocusedClinicalEventSubscription";

function RootMessageHandler({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const component = useMemo(() => {
    switch (message.type) {
      case "patient":
        return <PatientUpdateSubscription message={message} />;
      case "secondaryDisplay":
        return <SecondaryDisplaySubscription message={message} />;
      case "mobileDevice":
        return <MobileDevicesSubscription message={message} />;
      case "modality":
        return <ModalitySubscription message={message} />;
      case "subscribedUsers":
        return <DispatchUserSubscription message={message} />;
      case "clinicalEvent":
        return <ClinicalEventsSubscription message={message} />;
      case "focused-clinical-event":
        return <FocusedDocumentSubscription message={message} />;

      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);

  return component;
}

export default RootMessageHandler;
