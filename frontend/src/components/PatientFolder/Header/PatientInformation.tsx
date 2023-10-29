"use client";
import { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import React from "react";
import EditPatientInformation from "./MenuElement/EditPatientInformation";
import MoveToTrash from "./MenuElement/MoveToTrash";
import { format, parseISO } from "date-fns";
import useSyncPatientInformation from "../utils/CustomHooks/useSyncPatientInformations";

function PatientInformation({
  initialPatient,
}: {
  initialPatient?:
    | PatientsGetOnePatientResponseData["mainDb_getPatient"]
    | undefined
    | null;
}) {
  const { patient } = useSyncPatientInformation({ initialPatient });

  return (
    <div className="grid w-full grid-cols-6">
      {patient ? (
        <>
          <div className="col-span-3">
            <strong className="p-2">{patient.patientFullName}</strong>

            <strong className="p-2">
              {format(parseISO(patient.ddn), "dd/MM/yyyy")}
            </strong>
          </div>
          <div className="col-span-3 flex justify-end">
            <EditPatientInformation patient={patient} />
            <MoveToTrash patient={patient} />
          </div>
        </>
      ) : (
        <span className="col-span-6 mx-auto">
          Une erreur est survenue le dossier du patient n'a pas pu être
          réccupéré
        </span>
      )}
    </div>
  );
}

export default PatientInformation;
