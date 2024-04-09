import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import React from "react";
import SubscribeToFocusedClinicalEventView from "../../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";

function HistoryEventComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      HistoryEventComponent
      <SubscribeToFocusedClinicalEventView patientId={patient!.id} />
    </div>
  );
}

export default HistoryEventComponent;
