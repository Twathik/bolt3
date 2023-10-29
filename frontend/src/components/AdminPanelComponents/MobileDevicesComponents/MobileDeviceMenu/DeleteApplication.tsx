import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";
import { classNames } from "@/lib/utils";
import { Menu } from "@headlessui/react";
import React, { useCallback } from "react";

interface LogoutDevice {
  deviceId: string;
}

function DeleteApplication({ deviceId }: LogoutDevice) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/removeMobileDevice",
    onSuccess: (data) => {
      toast({
        description: "L'application mobile a été supprimée",
        title: "Succes de l'oppération",
        duration: 2000,
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        description: "L'application mobile n'a pas été supprimée",
        title: "Echec de l'oppération",
        duration: 2000,
        variant: "destructive",
      });
    },
  });

  const confirmDialogCallback = useCallback(async () => {
    await trigger({ id: deviceId });
  }, [deviceId, trigger]);
  return (
    <Menu.Item>
      {({ active }) => (
        <ConfirmationDialog
          callback={confirmDialogCallback}
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
