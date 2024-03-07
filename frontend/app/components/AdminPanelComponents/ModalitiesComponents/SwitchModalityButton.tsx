import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import type { ModalityModalitiesResponseData } from "@/components/generated/models";
import { classNames } from "@/lib/utils";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function SwitchModalityButton({
  modality: { enabled, id },
}: {
  modality: ModalityModalitiesResponseData["mainDb_modalities"][0];
}) {
  const [locallyEnabled, setLocallyEnabled] = useState(enabled);
  const { data, error, isMutating, trigger } = useMutation({
    operationName: "Modality/switchModality",
  });
  const { toast } = useToast();

  const switchModality = useCallback(async () => {
    await trigger({ id, enabled: !locallyEnabled });
  }, [id, locallyEnabled, trigger]);

  useEffect(() => {
    if (data) {
      if (data.mainDb_updateOneModality) {
        setLocallyEnabled((locallyEnabled) => !locallyEnabled);
      }
    }
  }, [data]);

  useEffect(() => {
    if (error)
      toast({
        variant: "destructive",
        description: "Une erreur est survenue",
        title: "Echec de l'oppération",
        duration: 2000,
      });
  }, [error, toast]);
  return (
    <ConfirmationDialog
      callback={switchModality}
      cancelButtonTitle="Fermer"
      showValidationButton={true}
      titre="Confirmation requise"
      description={`Voullez vous vraiment ${
        locallyEnabled ? "desactiver" : "activer"
      } cet appareil ?`}
      triggerButton={
        <Button
          disabled={isMutating}
          className={classNames(
            "hidden rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm sm:block text-white",
            locallyEnabled
              ? "bg-rose-900 hover:bg-rose-600"
              : "bg-slate-700 hover:bg-slate-500"
          )}>
          {locallyEnabled ? "Desactiver l'appareil" : "Activer l'appareil"}{" "}
          {isMutating && <ClipLoader size={10} color="white" />}
        </Button>
      }
    />
  );
}

export default SwitchModalityButton;
