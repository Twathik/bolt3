import { format, parseISO } from "date-fns";
import { useBoltStore } from "@/stores/boltStore";

function PatientInformation() {
  const patient = useBoltStore((s) => s.patient);
  return (
    <div>
      {patient ? (
        <>
          <strong className="p-2 text-white">{patient?.patientFullName}</strong>
          <strong className="p-2 text-white">
            {patient?.ddn && format(parseISO(patient.ddn), "dd/MM/yyyy")}
          </strong>
        </>
      ) : (
        <strong className="text-white justify-self-auto">Chargement ...</strong>
      )}
    </div>
  );
}

export default PatientInformation;
