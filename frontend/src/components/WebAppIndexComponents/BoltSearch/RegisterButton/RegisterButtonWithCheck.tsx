import { useQuery } from "@/components/wg-generated/nextjs";
import React, { useCallback } from "react";
import RegisterButton from "./RegisterButton";
import UnregisterButton from "./UnregisterButton";

function RegisterButtonWithCheck({
  consultationId,
  patientId,
}: {
  consultationId: string;
  patientId: string;
}) {
  const { data, isLoading, mutate } = useQuery({
    operationName: "consultationList/checkIfRegistred",
    input: { consultationId, patientId },
  });

  const callBack = useCallback(async () => {
    await mutate();
  }, []);

  return data?.mainDb_consultationList?.id ? (
    <UnregisterButton
      listId={data.mainDb_consultationList.id}
      callBack={callBack}
    />
  ) : (
    <RegisterButton
      patientId={patientId}
      callBack={callBack}
      isLoading={isLoading}
    />
  );
}

export default RegisterButtonWithCheck;
