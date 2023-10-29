import EventView from "./EventView/EventView";
import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";

function PatientFolderBodySections({
  initialPatient,
}: {
  initialPatient: PatientsGetOnePatientResponseData["mainDb_getPatient"];
}) {
  return initialPatient?.onTrash ? (
    <div className="col-span-2 m-auto flex items-center justify-center align-middle text-rose-800">
      Ce dossier n'est plus disponible, veuillez le retirer de la corbeille si
      vous souhaiter y apporter des modifications
    </div>
  ) : (
    <>
      <section className="flex max-h-fit overflow-hidden">
        <EventView />
      </section>
      <section className="">{/* <DocumentView /> */}</section>
    </>
  );
}

export default PatientFolderBodySections;
