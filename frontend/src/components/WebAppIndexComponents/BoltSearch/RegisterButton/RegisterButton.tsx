import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { Button } from "@/components/ui/button";

import { useMutation } from "@/components/wg-generated/nextjs";
import { QueueListIcon } from "@heroicons/react/24/outline";
import React from "react";
import toast from "react-hot-toast";

function RegisterButton({
  callBack,
  patientId,
  isLoading,
}: {
  callBack: (consultationId?: string) => Promise<void>;
  patientId: string;
  isLoading: boolean;
}) {
  const { isMutating, trigger, data } = useMutation({
    operationName: "consultationList/registerPatient",
    onError: () => {
      toast.custom(
        <ErrorNotification
          title="Une erreur est survenue"
          description="Le patient n'a pas pu être inscrit en consultation"
          closeCallback={() => {
            toast.remove();
          }}
        />,
        {
          duration: 2000,
          position: "bottom-center",
        },
      );
    },
    onSuccess: async (d) => {
      await callBack(d?.mainDb_registerPatient);
      toast.custom(
        <SuccessNotification
          title="Opération réussie"
          description="Le patient est inscrit en consultation"
          closeCallback={() => {
            toast.remove();
          }}
        />,
        { duration: 2000, position: "bottom-center" },
      );
    },
  });
  return (
    <Button
      className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-slate-200 py-4 text-sm hover:bg-slate-300"
      onClick={() => {
        trigger({ patient_id: patientId });
      }}
      disabled={isMutating || isLoading}
    >
      <QueueListIcon className="h-5 w-5 text-black" aria-hidden="true" />

      <span className="text-black">Inscrire</span>
    </Button>
  );
}

export default RegisterButton;
