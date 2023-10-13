import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { useMutation } from "@/components/wg-generated/nextjs";
import useConsultationStore from "@/store/consultationStore";
import { QueueListIcon } from "@heroicons/react/24/outline";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import RegisterButton from "./RegisterButton";

function RegisterButtonWithoutCheck({ patientId }: { patientId: string }) {
  const { setConsultationId } = useConsultationStore();
  const callBack = useCallback(async (consultationId?: string) => {
    setConsultationId(consultationId ?? null);
  }, []);
  console.log("without");

  return (
    <RegisterButton
      patientId={patientId}
      callBack={callBack}
      isLoading={false}
    />
  );
}

export default RegisterButtonWithoutCheck;
