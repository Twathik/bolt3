/* eslint-disable react/no-unescaped-entities */
import getOnePatient from "@/components/ApiCalls/getOnePatient";
import getPatientClinicalEvents from "@/components/ApiCalls/getPatientClinicalEvents";
import getUser from "@/components/ApiCalls/getUser";
import PatientFolderBody from "@/components/PatientPage/PatientFolder/Body/PatientBody";
import SubscribeToPatientWebSocket from "@/components/PatientPage/PatientFolder/Body/SubscribeToPatientWebSocket";
import PatientFolderHeader from "@/components/PatientPage/PatientFolder/PatientFolderHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

async function PatientPage({
  params: { patientId },
}: {
  params: { patientId: string };
}) {
  const patient = await getOnePatient({ patientId });
  const clinicalEvents = await getPatientClinicalEvents({ patientId });
  const user = await getUser();

  if (!patient || !clinicalEvents)
    return (
      <div className="w-1/2 mx-auto my-10">
        <Alert variant="destructive">
          <AlertTitle className="flex flex-row gap-3 items-end">
            <div className="text-xl">
              <FaExclamationTriangle />
            </div>
            <div>Error</div>
          </AlertTitle>
          <AlertDescription>
            Une erreur est survenue, Les données du patient n'ont pas pu être
            reccupéres
          </AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div>
      <PatientFolderHeader patient={patient} />
      {user && <PatientFolderBody patient={patient} user={user} />}
      <SubscribeToPatientWebSocket patientId={patient.id} />
    </div>
  );
}

export default PatientPage;
