import { format, parseISO } from "date-fns";
import { useBoltStore } from "@/stores/boltStore";

function FocusedPatientInformation() {
  const patient = useBoltStore((s) => s.patient);
  console.log({ patient });
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

export default FocusedPatientInformation;
