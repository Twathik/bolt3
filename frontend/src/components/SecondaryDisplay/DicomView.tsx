import React from "react";
import SubscribeToPatientDicomView from "./PatientViewScreen/subscriptionsHandlers/SubscribeToPatientDicomView";
import DICOMview from "./PatientViewScreen/Dicom/DICOMview";

function DicomScreen({ patientId }: { patientId: string }) {
  return (
    <div>
      <DICOMview />
      <SubscribeToPatientDicomView patientId={patientId} />
    </div>
  );
}

export default DicomScreen;
