import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { Button } from "@/components/ui/button";
import { useMutation } from "@/components/wg-generated/nextjs";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import React from "react";
import toast from "react-hot-toast";

interface SwitchTypeInterface {
  deviceId: string;
  mobileDeviceType: "DOCTOR" | "SECRETARY";
}
function SwitchType({ deviceId, mobileDeviceType }: SwitchTypeInterface) {
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/switchMobileDevice",
    onSuccess: () => {
      toast.custom(
        <SuccessNotification
          description="Le type d'application a été changé"
          title="Succes de l'oppération"
        />,
        { position: "bottom-center", duration: 2000 },
      );
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast.custom(
        <ErrorNotification
          description="Le type d'application n'a pas été changé, veuillez verifier que vous disposer d'une licence non utilisé pour ce type d'application"
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
            try {
              await trigger({
                id: deviceId,
                mobileDeviceType:
                  mobileDeviceType === "DOCTOR" ? "SECRETARY" : "DOCTOR",
              });
            } catch (error) {}
          }}
          description="L'apllication sera automatiquement modifié au niveau de l'appareil mobile"
          triggerButton={
            <Button
              className={classNames(
                active ? "bg-rose-50" : "",
                "flex w-full justify-start rounded-none bg-white px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100",
              )}
              disabled={isMutating}
            >
              Changer de type<span className="sr-only"> Changer</span>
            </Button>
          }
        />
      )}
    </Menu.Item>
  );
}

export default SwitchType;
