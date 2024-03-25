import React from "react";
import PatientAvatar from "./PatientFullInformationComponents/PatientAvatar";
import PatientFullInformation from "./PatientFullInformationComponents/PatientFullInformation";
import PatientScheduling from "./PatientFullInformationComponents/PatientScheduling";
import SubscribeToPatientFullInformation from "./subscriptionsHandlers/SubscribeToPatientFullInformation";

function PatientInformationComponent({ patientId }: { patientId: string }) {
  return (
    <div>
      <div className="grid grid-col-12 grid-flow-col">
        <div className="col-span-2">
          <PatientAvatar />
          <PatientFullInformation />
        </div>
        <div className="col-span-10">
          <div className="mt-14">
            <div className="text-center my-8 text-3xl">
              <strong>
                <u>Examens/documents réalisés chez le patient</u>
              </strong>
            </div>
            <PatientScheduling patientId={patientId} />
          </div>
        </div>
      </div>
      <SubscribeToPatientFullInformation patientId={patientId} />
    </div>
  );
}

export default PatientInformationComponent;
