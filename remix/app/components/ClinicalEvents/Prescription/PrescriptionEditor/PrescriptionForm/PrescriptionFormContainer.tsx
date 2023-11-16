import { usePrescriptionStore } from "@/stores/prescriptionStore";
import { useMemo } from "react";
import PrescriptionForm from "./PrescriptionForm";

function PrescriptionFormContainer() {
  const prescriptions = usePrescriptionStore((state) => state.prescriptions);
  const renderPrescriptions = useMemo(
    () =>
      prescriptions.map((prescription) => (
        <PrescriptionForm key={prescription.id} prescription={prescription} />
      )),
    [prescriptions]
  );
  return <div>{renderPrescriptions}</div>;
}

export default PrescriptionFormContainer;
