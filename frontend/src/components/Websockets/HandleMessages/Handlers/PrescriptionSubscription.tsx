import { useEffect } from "react";
import { useBoltStore } from "@/stores/boltStore";
import type { PrescriptionMessageInterface } from "../../interfaces/MessagesTypes/PrescriptionMessageInterface";

function PrescriptionSubscription({
  message,
}: {
  message: PrescriptionMessageInterface;
}) {
  const addPrescription = useBoltStore((store) => store.addPrescription);
  const removePrescription = useBoltStore((store) => store.removePrescription);

  useEffect(() => {
    if (message.type === "prescription") {
      switch (message.payload.operation) {
        case "add":
          console.log({ message });
          addPrescription(message.payload.prescription);
          break;
        case "remove":
          console.log({ message });
          removePrescription(message.payload.prescription);
          break;

        default:
          break;
      }
    }
  }, [addPrescription, message, message.id, removePrescription]);
  return null;
}

export default PrescriptionSubscription;
