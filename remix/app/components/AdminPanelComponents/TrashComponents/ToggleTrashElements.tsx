import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

function ToggleTrashElements({ patientId }: { patientId: string }) {
  const { toast } = useToast();
  const { error, trigger } = useMutation({
    operationName: "patients/toggleSelectedTrashPatient",
  });
  const [loading, setLoading] = useState(false);
  const deletePermanently = useCallback(async () => {
    setLoading(true);
    await trigger({ id: { equals: patientId }, onTrash: true, delete: true });
    setLoading(false);
  }, [patientId, trigger]);
  const restore = useCallback(async () => {
    setLoading(true);
    await trigger({ id: { equals: patientId }, onTrash: false, delete: false });
  }, [patientId, trigger]);

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenur",
        description: "le dossier n'a pas pu être supprimé deffinitivement",
        variant: "destructive",
      });
  }, [error, toast]);
  return (
    <div className="flex flex-row gap-4">
      <ConfirmationDialog
        callback={restore}
        triggerButton={
          <Button disabled={loading} variant="default" className="h-8 w-8 p-0">
            <span className="sr-only">Restaurer</span>
            {loading ? (
              <BounceLoader size={15} color="white" />
            ) : (
              <ArrowPathIcon className="h-4 w-4" />
            )}
          </Button>
        }
        titre="Restaurer l'element sélectioné"
        description="Voulez vous restaurer ce dossier, vous pourez de nouveau y apporter des modifications"
        showValidationButton
      />

      <ConfirmationDialog
        callback={deletePermanently}
        triggerButton={
          <Button
            disabled={loading}
            variant="destructive"
            className="h-8 w-8 p-0">
            <span className="sr-only">Supprimer</span>
            {loading ? (
              <BounceLoader size={15} color="white" />
            ) : (
              <TrashIcon className="h-4 w-4" />
            )}
          </Button>
        }
        titre="Supprimer definitivement l'element sélectioné"
        description="Voulez vous supprimer definitivement ce dossier, vous ne pourez plus y acceder!"
        showValidationButton
      />
    </div>
  );
}

export default ToggleTrashElements;
