import { Button } from "@/ui/components/ui/button";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import { useToast } from "@/ui/components/ui/use-toast";
import { useMutation } from "@/lib/wundergraph";

interface LogoutDevice {
  deviceId: string;
}
function LogoutDevice({ deviceId }: LogoutDevice) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/resetMobileDevice",
    onSuccess: (data) => {
      toast({
        description: "L'appareil mobile a été déconnécté",
        title: "Succes de l'oppération",
        duration: 2000,
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        description: "L'appareil Mobile n'a pa pu être déconnecté",
        title: "Echec de l'oppération",
        duration: 2000,
        variant: "destructive",
      });
    },
  });
  const ConfirmationDialogCallBack = useCallback(async () => {
    await trigger({ id: deviceId, accessToken: uuidv4() });
  }, [deviceId, trigger]);
  return (
    <Menu.Item>
      {({ active }) => (
        <ConfirmationDialog
          callback={ConfirmationDialogCallBack}
          description="Une reconnection sera necessaire pour pouvoir utiliser l'appareil mobile de nouveau"
          triggerButton={
            <Button
              className={classNames(
                active ? "bg-rose-50" : "",
                "flex w-full justify-start rounded-none bg-white px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-slate-100"
              )}
              disabled={isMutating}>
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
