"use client";
/* eslint-disable react/no-unescaped-entities */
import { useBoltStore } from "@/stores/boltStore";

import { useMemo, lazy, Suspense, useEffect } from "react";
import { DotLoader } from "react-spinners";
import PatientDocumentBodyEditor from "./PatientDocumentBodyEditor";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import type { PublicUser } from "@/components/wg-generated/client";
import getUserState from "@/components/plateEditor/lib/getUserState";

const PatientFolderBodyEditor = lazy(() => import("./PatientFolderBodyEditor"));

function PatientFolderBody({
  patient,
  user,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
  user: PublicUser;
}) {
  const patientView = useBoltStore((s) => s.patientView);
  const clinicalEvents = useBoltStore((s) => s.clinicalEvents);

  const setUser = useBoltStore((s) => s.setUser);
  useEffect(() => {
    setUser(getUserState(user));
  }, [setUser, user]);

  const renderView = useMemo(
    () =>
      patient ? (
        patientView === "folder" ? (
          <Suspense
            fallback={
              <div className="w-full h-1/2 flex justify-center mt-20">
                <DotLoader />
              </div>
            }>
            <PatientFolderBodyEditor
              patientId={patient.id}
              clinicalData={patient.clinicalData}
            />
          </Suspense>
        ) : (
          <Suspense
            fallback={
              <div className="w-full h-1/2 flex justify-center mt-20">
                <DotLoader />
              </div>
            }>
            <PatientDocumentBodyEditor
              patientId={patient.id}
              documentData={patient.documentData}
            />
          </Suspense>
        )
      ) : (
        <div></div>
      ),
    [patient, patientView]
  );

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
  return renderView;
}

export default PatientFolderBody;
