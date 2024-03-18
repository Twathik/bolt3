import React, { useMemo } from "react";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";
import PatientUpdateSubscription from "./PatientUpdateSubscription";
import SecondaryDisplaySubscription from "./SecondaryDisplaySubscription";
import MobileDevicesSubscription from "./MobileDevicesSubscription";
import ModalitySubscription from "./ModalitySubscription";

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

      default:
        return null;
    }
  }, [message]);

  return component;
}

export default RootMessageHandler;
