import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import React from "react";
import SubscribeToFocusedClinicalEventView from "../../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";

function ClinicalExamEventComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      ClinicalExamEventComponent
      <SubscribeToFocusedClinicalEventView patientId={patient!.id} />
    </div>
  );
}

export default ClinicalExamEventComponent;
