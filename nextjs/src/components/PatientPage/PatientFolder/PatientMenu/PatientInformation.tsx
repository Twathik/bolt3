import { format, parseISO } from "date-fns";
import type { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";

function PatientInformation({
  patient,
}: {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"];
}) {
  return (
    <div>
      <strong className="p-2 text-white">{patient?.patientFullName}</strong>
      <strong className="p-2 text-white">
        {patient?.ddn && format(parseISO(patient.ddn), "dd/MM/yyyy")}
      </strong>
    </div>
  );
}

export default PatientInformation;
