import { useBoltStore } from "@/stores/boltStore";
import PatientFolderBodySections from "./PatientFolderBodySections";

function PatientFolderBody() {
  const patient = useBoltStore((store) => store.patient);
  const clinicalEvents = useBoltStore((s) => s.clinicalEvents);

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
  return <PatientFolderBodySections />;
}

export default PatientFolderBody;
