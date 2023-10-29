import useConsultationStore from "@/stores/consultationStore";
import React, { useCallback } from "react";
import RegisterButton from "./RegisterButton";

function RegisterButtonWithoutCheck({ patientId }: { patientId: string }) {
  const { setConsultationId } = useConsultationStore();
  const callBack = useCallback(
    async (consultationId?: string) => {
      setConsultationId(consultationId ?? null);
    },
    [setConsultationId],
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
