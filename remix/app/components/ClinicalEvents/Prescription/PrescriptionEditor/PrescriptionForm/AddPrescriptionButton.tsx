import { usePrescriptionStore } from "@/stores/prescriptionStore";
import { Button } from "@/ui/components/ui/button";
import { useCallback } from "react";
import { v4 as uuid4 } from "uuid";

function AddPrescriptionButton() {
  const addPrescription = usePrescriptionStore(
    (store) => store.addPrescription
  );
  const addPrescriptionCallback = useCallback(() => {
    addPrescription({ id: uuid4() });
  }, [addPrescription]);
  return (
    <div>
      <Button onClick={addPrescriptionCallback}>
        Ajouter une préscription
      </Button>
    </div>
  );
}

export default AddPrescriptionButton;
