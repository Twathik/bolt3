import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";

import { useCallback } from "react";

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
    onError: () => {
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
    <ConfirmationDialog
      callback={confirmationDialogCallBack}
      description="L'apllication sera automatiquement modifié au niveau de l'appareil mobile"
      triggerButton={
        <Button className="justify-start" variant="ghost" disabled={isMutating}>
          Changer de type<span className="sr-only"> Changer</span>
        </Button>
      }
    />
  );
}

export default SwitchType;
