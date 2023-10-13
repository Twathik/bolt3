import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { Button } from "@/components/ui/button";
import { useMutation } from "@/components/wg-generated/nextjs";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import React from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";

interface LogoutDevice {
  deviceId: string;
}
function LogoutDevice({ deviceId }: LogoutDevice) {
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/resetMobileDevice",
    onSuccess: (data) => {
      toast.custom(
        <SuccessNotification
          description="L'appareil mobile a été déconnécté"
          title="Succes de l'oppération"
        />,
        { position: "bottom-center", duration: 2000 },
      );
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast.custom(
        <ErrorNotification
          description="L'appareil Mobile n'a pa pu être déconnecté"
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
            await trigger({ id: deviceId, accessToken: uuidv4() });
          }}
          description="Une reconnection sera necessaire pour pouvoir utiliser l'appareil mobile de nouveau"
          triggerButton={
            <Button
              className={classNames(
                active ? "bg-rose-50" : "",
                "flex w-full justify-start rounded-none bg-white px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100",
              )}
              disabled={isMutating}
            >
              Déconnecter l'appareil
              <span className="sr-only">, Name</span>
            </Button>
          }
        />
      )}
    </Menu.Item>
  );
}

export default LogoutDevice;
