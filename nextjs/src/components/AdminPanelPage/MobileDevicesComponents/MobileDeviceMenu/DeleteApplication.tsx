/* eslint-disable react/no-unescaped-entities */
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";

import { useCallback } from "react";

interface LogoutDevice {
  deviceId: string;
}

function DeleteApplication({ deviceId }: LogoutDevice) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/removeMobileDevice",
    onSuccess: () => {
      toast({
        description: "L'application mobile a été supprimée",
        title: "Succes de l'oppération",
        duration: 2000,
      });
    },
    onError: () => {
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
    <ConfirmationDialog
      callback={confirmDialogCallback}
      description="L'application mobile ne serra plus accessible"
      triggerButton={
        <Button
          variant="ghost"
          className="text-red-800 justify-start hover:bg-red-50 hover:text-red-800"
          disabled={isMutating}>
          Supprimer l'application
          <span className="sr-only">, Supprimer</span>
        </Button>
      }
    />
  );
}

export default DeleteApplication;
