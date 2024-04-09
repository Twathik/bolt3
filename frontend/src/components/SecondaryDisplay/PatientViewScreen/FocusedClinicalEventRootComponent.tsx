import React from "react";
import FocusedClinicalEventComponent from "./FocusedClinicalEvent/FocusedClinicalEventComponent";

function FocusedClinicalEventRootComponent({
  patientId,
}: {
  patientId: string;
}) {
  return (
    <div>
      <FocusedClinicalEventComponent />
    </div>
  );
}

export default FocusedClinicalEventRootComponent;
