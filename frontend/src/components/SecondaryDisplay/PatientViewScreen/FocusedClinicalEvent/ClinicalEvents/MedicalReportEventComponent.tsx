import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import React from "react";
import SubscribeToFocusedClinicalEventView from "../../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";

function MedicalReportEventComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      MedicalReportEventComponent
      <SubscribeToFocusedClinicalEventView patientId={patient!.id} />
    </div>
  );
}

export default MedicalReportEventComponent;
