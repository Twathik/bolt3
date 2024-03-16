import { format, parseISO } from "date-fns";
import { useBoltStore } from "@/stores/boltStore";

function PatientInformation() {
  const patient = useBoltStore((s) => s.patient);
  return (
    <div>
      <strong className="p-2 text-white">
        {patient?.lastName} {patient?.firstName}
      </strong>
      <strong className="p-2 text-white">
        {patient?.ddn && format(parseISO(patient.ddn), "dd/MM/yyyy")}
      </strong>
    </div>
  );
}

export default PatientInformation;
