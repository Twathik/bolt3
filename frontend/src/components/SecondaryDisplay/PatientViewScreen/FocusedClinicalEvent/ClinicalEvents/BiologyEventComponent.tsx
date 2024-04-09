import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import React from "react";
import SubscribeToFocusedClinicalEventView from "../../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";

function BiologyEventComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      BiologyEventComponent
      <SubscribeToFocusedClinicalEventView patientId={patient!.id} />
    </div>
  );
}

export default BiologyEventComponent;
