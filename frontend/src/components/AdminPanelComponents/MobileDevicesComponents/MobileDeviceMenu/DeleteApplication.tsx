import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { Button } from "@/components/ui/button";
import { useMutation } from "@/components/wg-generated/nextjs";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import React from "react";

import toast from "react-hot-toast";

interface LogoutDevice {
  deviceId: string;
}

function DeleteApplication({ deviceId }: LogoutDevice) {
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/removeMobileDevice",
    onSuccess: (data) => {
      toast.custom(
        <SuccessNotification
          description="L'application mobile a été supprimée"
          title="Succes de l'oppération"
        />,
        { position: "bottom-center", duration: 2000 },
      );
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast.custom(
        <ErrorNotification
          description="L'application mobile n'a pas été supprimée"
          title="Echec de l'oppération"
        />,
        {
          position: "bottom-center",
          duration: 2000,
        },
      );
    },
  });
  return (
    <Menu.Item>
      {({ active }) => (
        <ConfirmationDialog
          callback={async () => {
            await trigger({ id: deviceId });
          }}
          description="L'application mobile ne serra plus accessible"
          triggerButton={
            <Button
              className={classNames(
                active ? "bg-rose-50" : "",
                "flex w-full justify-start rounded-none bg-white px-3 py-1 text-sm leading-6 text-rose-500 hover:bg-rose-100",
              )}
              disabled={isMutating}
            >
              Supprimer l'application
              <span className="sr-only">, Supprimer</span>
            </Button>
          }
        />
      )}
    </Menu.Item>
  );
}

export default DeleteApplication;
