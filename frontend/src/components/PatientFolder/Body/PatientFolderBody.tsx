import React from "react";
import { cookies } from "next/headers";
import PatientFolderBodySections from "./PatientFolderBodySections";
import { PatientSSR } from "../utils/Patient_SSR";

async function PatientFolderBody({ patientId }: { patientId: string }) {
  const SSR = new PatientSSR(cookies);
  const patient = await SSR.getPatient({ patientId });

  return (
    <div className=" m-4 grid flex-1 grid-cols-2 gap-4 overflow-hidden rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6">
      {patient ? (
        <PatientFolderBodySections initialPatient={patient} />
      ) : (
        <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
          Une erreur est survenue, le dossier du patient n'a pas pu être
          réccupéré, veuillez verifier votre connexion réseau!
        </div>
      )}
    </div>
  );
}

export default PatientFolderBody;
