import React from "react";
import SubscribeToFocusedDocumentView from "./subscriptionsHandlers/SubscribeToFocusedClinicalEventView";
import FocusedClinicalEventComponent from "./FocusedClinicalEvent/FocusedClinicalEventComponent";

function FocusedClinicalEventRootComponent({
  patientId,
}: {
  patientId: string;
}) {
  return (
    <div>
      <FocusedClinicalEventComponent />
      <SubscribeToFocusedDocumentView patientId={patientId} />
    </div>
  );
}

export default FocusedClinicalEventRootComponent;
