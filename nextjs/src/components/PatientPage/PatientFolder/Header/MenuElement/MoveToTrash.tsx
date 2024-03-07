import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import type { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function MoveToTrash({
  patient,
}: {
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"];
}) {
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
            <Button variant="default" className="block w-56 p-2">
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
            <Button variant="destructive" className="block w-56  p-2">
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
