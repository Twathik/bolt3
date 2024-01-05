import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import { useMutation } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function MoveToTrash() {
  const patient = useBoltStore((s) => s.patient);
  const { toast } = useToast();
  const { trigger } = useMutation({
    operationName: "patients/MovePatientFolderToTrash",
    onError: () => {
      toast({
        title: "Une erreur est survenue",
        description:
          "Le dossier du patient n'a pas été deplacé vers la corbeille",
        duration: 2000,
        variant: "destructive",
      });
    },
  });
  const [loading, setLoading] = useState(false);
  const onMoveToTrash = useCallback(async () => {
    setLoading(true);
    await trigger({ id: patient?.id || "", onTrash: true });
  }, [patient?.id, trigger]);
  const onMoveFromTrash = useCallback(async () => {
    setLoading(true);
    await trigger({ id: patient?.id || "", onTrash: false });
  }, [patient?.id, trigger]);
  useEffect(() => {
    setLoading(false);
  }, [patient]);

  return (
    <>
      {patient?.onTrash ? (
        <ConfirmationDialog
          callback={onMoveFromTrash}
          triggerButton={
            <Button variant="ghost" className="w-full">
              {loading ? (
                <BeatLoader color="#fff" size={10} />
              ) : (
                <span>Retirer de la corbeille</span>
              )}
            </Button>
          }
          confirmButtonTitle="Retirer"
          cancelButtonTitle="Annuler"
        />
      ) : (
        <ConfirmationDialog
          callback={onMoveToTrash}
          triggerButton={
            <Button variant="ghost" className="w-full text-rose-800">
              {loading ? (
                <BeatLoader color="#fff" size={10} />
              ) : (
                <span>Deplacer vers la corbeille</span>
              )}
            </Button>
          }
          confirmButtonTitle="Corbeille"
          cancelButtonTitle="Annuler"
        />
      )}
    </>
  );
}

export default MoveToTrash;
