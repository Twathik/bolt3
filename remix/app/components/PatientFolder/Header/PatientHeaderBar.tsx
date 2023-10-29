import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";
import PatientInformation from "./PatientInformation";

function PatientHeaderBar({
  patient,
}: {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
}) {
  return (
    <div className="mx-auto my-2 flex h-20 w-[70%] items-center justify-center rounded-md border-y-2 border-slate-500 bg-gray-50 px-6 py-2 shadow-xl">
      <PatientInformation patient={patient} />
    </div>
  );
}

export default PatientHeaderBar;
