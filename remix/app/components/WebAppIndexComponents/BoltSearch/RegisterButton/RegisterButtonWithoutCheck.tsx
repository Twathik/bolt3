import { useCallback } from "react";
import RegisterButton from "./RegisterButton";
import { useBoltStore } from "@/stores/boltStore";

function RegisterButtonWithoutCheck({ patientId }: { patientId: string }) {
  const setConsultationId = useBoltStore((store) => store.setConsultationId);
  const callBack = useCallback(
    async (consultationId?: string) => {
      setConsultationId(consultationId ?? null);
    },
    [setConsultationId]
  );

  return (
    <RegisterButton
      patientId={patientId}
      callBack={callBack}
      isLoading={false}
    />
  );
}

export default RegisterButtonWithoutCheck;
