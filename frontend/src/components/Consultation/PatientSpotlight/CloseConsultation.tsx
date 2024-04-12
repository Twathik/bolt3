import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useBoltStore } from "@/stores/boltStore";
import type { PatientSpotlight } from "@/stores/boltStoreType";
import { useCallback, useEffect } from "react";

function CloseConsultation({
  patientSpotlight,
}: {
  patientSpotlight: PatientSpotlight;
}) {
  const { error, isMutating, trigger, data } = useMutation({
    operationName: "consultationList/closeConsultation",
  });
  const { toast } = useToast();

  const removePatientSpotlight = useBoltStore(
    (store) => store.removePatientSpotlight
  );
  const setDisplayedList = useBoltStore((store) => store.setDisplayedList);

  useEffect(() => {
    if (data) {
      removePatientSpotlight(patientSpotlight);
      setDisplayedList(5);
    }
  }, [data, patientSpotlight, removePatientSpotlight, setDisplayedList, toast]);

  useEffect(() => {
    if (error) {
      // closeSpotlight();
      toast({
        title: "Echec de l'opération",
        description: "Le dossier de consultation n'a pas pu être fermé!",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  const onClose = useCallback(async () => {
    try {
      await trigger({ id: patientSpotlight.id });
    } catch (error) {}
  }, [patientSpotlight.id, trigger]);
  return (
    <ConfirmationDialog
      disableConfirmation={isMutating}
      triggerButton={<Badge variant="destructive">Fermer</Badge>}
      callback={onClose}
      cancelButtonTitle="Annuler"
      confirmButtonTitle="Fermer le dossier"
      titre="Fermer le dossier de consultation"
      description="Ne fermer le dossier que si la consultation est achevée"
      showValidationButton
    />
  );
}

export default CloseConsultation;
