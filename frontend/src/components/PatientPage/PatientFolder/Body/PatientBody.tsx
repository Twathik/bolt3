"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";

import { lazy, Suspense, useEffect } from "react";
import { DotLoader } from "react-spinners";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import type { PublicUser } from "@/components/wg-generated/client";
import getUserState from "@/components/plateEditor/lib/getUserState";
import type { PatientDocumentType } from "@/lib/interfaces/DocumentTypes";

const PatientBodyEditor = lazy(() => import("./PatientBodyEditor"));

function PatientFolderBody({
  patient,
  user,
  documentType,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
  user: PublicUser;
  documentType: PatientDocumentType;
}) {
  const clinicalEvents = useBoltStore((s) => s.clinicalEvents);

  const setUser = useBoltStore((s) => s.setUser);
  useEffect(() => {
    setUser(getUserState(user));
  }, [setUser, user]);

  if (!clinicalEvents)
    return (
      <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
        Une erreur est survenue, Les élement du dossier du patient{" "}
        {patient?.lastName} {patient?.firstName} n'ont pas pu être réccupéres
      </div>
    );
  if (patient?.deleted)
    return (
      <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
        Dossier supprimé!
      </div>
    );
  return patient ? (
    <Suspense
      fallback={
        <div className="w-full h-1/2 flex justify-center mt-20">
          <DotLoader />
        </div>
      }
    >
      <PatientBodyEditor patientId={patient.id} documentType={documentType} />
    </Suspense>
  ) : (
    <div></div>
  );
}

export default PatientFolderBody;
