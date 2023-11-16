import PatientFolderBodySections from "./PatientFolderBodySections";
import type {
  ClinicalEventsGetClinicalEventsResponseData,
  PatientsGetOnePatientResponseData,
} from "@/components/generated/models";

function PatientFolderBody({
  patient,
  clinicalEvents,
}: {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
  clinicalEvents:
    | ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"]
    | null
    | undefined;
}) {
  if (!patient)
    return (
      <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
        Une erreur est survenue, le dossier du patient n'a pas pu être
        réccupéré, veuillez verifier votre connexion réseau!
      </div>
    );
  if (!clinicalEvents)
    return (
      <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
        Une erreur est survenue, Les élement du dossier du patient{" "}
        {patient.lastName} {patient.firstName} n'ont pas pu être réccupéres
      </div>
    );
  if (patient.deleted)
    return (
      <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
        Dossier supprimé!
      </div>
    );
  return (
    <PatientFolderBodySections
      initialPatient={patient}
      clinicalEvents={clinicalEvents}
    />
  );
}

export default PatientFolderBody;
