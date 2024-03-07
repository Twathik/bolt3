import { useCallback } from "react";
import RegisterButton from "./RegisterButton";
import UnregisterButton from "./UnregisterButton";
import { useQuery } from "@/lib/wundergraph";

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
  }, [mutate]);

  return data?.mainDb_consultationList?.id ? (
    <UnregisterButton listId={patientId} callBack={callBack} />
  ) : (
    <RegisterButton
      patientId={patientId}
      callBack={callBack}
      isLoading={isLoading}
    />
  );
}

export default RegisterButtonWithCheck;
