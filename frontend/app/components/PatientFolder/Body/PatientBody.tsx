import { useBoltStore } from "@/stores/boltStore";

import { useMemo, lazy, Suspense } from "react";
import { DotLoader } from "react-spinners";
import PatientDocumentBodyEditor from "./PatientDocumentBodyEditor";

const PatientFolderBodyEditor = lazy(() => import("./PatientFolderBodyEditor"));

function PatientFolderBody() {
  const patient = useBoltStore((store) => store.patient);
  const patientView = useBoltStore((s) => s.patientView);
  const clinicalEvents = useBoltStore((s) => s.clinicalEvents);
  const renderView = useMemo(
    () =>
      patientView === "folder" ? (
        <Suspense
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          <PatientFolderBodyEditor />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-1/2 flex justify-center mt-20">
              <DotLoader />
            </div>
          }>
          <PatientDocumentBodyEditor />
        </Suspense>
      ),
    [patientView]
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
