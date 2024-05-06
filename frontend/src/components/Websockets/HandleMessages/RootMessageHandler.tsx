import React, { useMemo } from "react";
import type { WebsocketMessageInterface } from "../interfaces/WebsocketMessageInterface";
import PatientUpdateSubscription from "./Handlers/PatientUpdateSubscription";
import SecondaryDisplaySubscription from "./Handlers/SecondaryDisplaySubscription";
import MobileDevicesSubscription from "./Handlers/MobileDevicesSubscription";
import ModalitySubscription from "./Handlers/ModalitySubscription";
import DispatchUserSubscription from "./Handlers/DispatchUserSubscription";
import ClinicalEventsSubscription from "./Handlers/ClinicalEventsSubscription";
import FocusedDocumentSubscription from "./Handlers/FocusedClinicalEventSubscription";
import PrescriptionSubscription from "./Handlers/PrescriptionSubscription";
import WorkingListSubscription from "./Handlers/WorkingListSubscription";
import ConsultationListSubscription from "./Handlers/ConsultationListSubscription";
import PatientScannedDocumentsSubscription from "./Handlers/PatientScannedDocumentsSubscription";

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
      case "prescription":
        return <PrescriptionSubscription message={message} />;
      case "workingList":
        return <WorkingListSubscription message={message} />;
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
