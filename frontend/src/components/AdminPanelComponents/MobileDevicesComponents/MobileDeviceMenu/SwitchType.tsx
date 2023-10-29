import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import React, { useCallback } from "react";

interface SwitchTypeInterface {
  deviceId: string;
  mobileDeviceType: "DOCTOR" | "SECRETARY";
}
function SwitchType({ deviceId, mobileDeviceType }: SwitchTypeInterface) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/switchMobileDevice",
    onSuccess: () => {
      toast({
        description: "Le type d'application a été changé",
        title: "Succes de l'oppération",
        duration: 2000,
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        description:
          "Le type d'application n'a pas été changé, veuillez verifier que vous disposer d'une licence non utilisé pour ce type d'application",
        title: "Echec de l'oppération",
      });
    },
  });

  const confirmationDialogCallBack = useCallback(async () => {
    try {
      await trigger({
        id: deviceId,
        mobileDeviceType:
          mobileDeviceType === "DOCTOR" ? "SECRETARY" : "DOCTOR",
      });
    } catch (error) {}
  }, [deviceId, mobileDeviceType, trigger]);
  return (
    <Menu.Item>
      {({ active }) => (
        <ConfirmationDialog
          callback={confirmationDialogCallBack}
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
