import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import React from "react";
import SubscribeToFocusedClinicalEventView from "../../subscriptionsHandlers/SubscribeToFocusedClinicalEventView";

function CertificatEventComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      CertificatEventComponent
      <SubscribeToFocusedClinicalEventView patientId={patient!.id} />
    </div>
  );
}

export default CertificatEventComponent;
