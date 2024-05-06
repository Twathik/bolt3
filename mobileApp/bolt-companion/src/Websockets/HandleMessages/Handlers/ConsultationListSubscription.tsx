import { WebsocketMessageInterface } from "@/Websockets/interfaces/WebsocketMessageInterface";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { useEffect } from "react";

function ConsultationListSubscription({
  message,
}: {
  message: WebsocketMessageInterface;
}) {
  const addConsultationPatient = useMobileBoltStore(
    (store) => store.addConsultationPatient
  );

  const removeConsultationPatient = useMobileBoltStore(
    (store) => store.removeConsultationPatient
  );
  const updateConsultationPatient = useMobileBoltStore(
    (store) => store.updateConsultationPatient
  );

  useEffect(() => {
    if (message.type === "consultation-list") {
      const {
        consultationList: {
          patient: { ddn, firstName, lastName, sexe },
        },
        patientId,
      } = message.payload.consultationList;
      const patient = {
        ddn,
        firstName,
        lastName,
        sexe,
        id: patientId,
      };

      switch (message.payload.operation) {
        case "add":
          addConsultationPatient(patient);
          break;
        case "remove":
          removeConsultationPatient(patient);
          break;
        case "update":
          updateConsultationPatient(patient);
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);
  return null;
}

export default ConsultationListSubscription;
