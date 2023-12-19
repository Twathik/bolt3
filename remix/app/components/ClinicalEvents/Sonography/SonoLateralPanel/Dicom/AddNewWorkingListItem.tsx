import LateralPanelCard from "@/components/GeneralComponents/AppLexical/LateralPanel/LateralPanelCard";

import type { ModalityGetSpecificModalitiesResponseData } from "@/components/generated/models";
import { useMutation } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/ui/select";
import { useToast } from "@/ui/components/ui/use-toast";
import { useCallback, useEffect, useState } from "react";

function AddNewWorkingListItem() {
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);
  const modalities = useBoltStore((store) => store.modalities);

  const [modality, setModality] =
    useState<
      ModalityGetSpecificModalitiesResponseData["mainDb_modalities"][0]
    >();
  const { error, isMutating, trigger } = useMutation({
    operationName: "WorkingLists/createOneWorkingList",
  });
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      console.log({ error });
      toast({
        title: "Une erreur est survenue",
        description: `Le patient n'apas pu être ajouté à la liste de travail de l'appareil`,
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [error, toast]);

  const onValueChange = useCallback(
    (value: string) => {
      setModality(modalities.find((m) => m.id === value));
    },
    [modalities]
  );

  const add = useCallback(async () => {
    try {
      if (clinicalEvent && modality) {
        await trigger({
          clinicalEventId: clinicalEvent.id,
          modalityId: modality.id,
          patientId: clinicalEvent.patientId,
        });
      }
    } catch (error) {}
  }, [clinicalEvent, modality, trigger]);
  return (
    <LateralPanelCard
      cardTitle="Appareil d'imagerie"
      cardDescription="Veuillez selectionner un appareil pour inscrire l'examen en cours au niveau de la liste de travail de l'examen en question"
      clinicalEvent={clinicalEvent!}
      cardContent={
        <>
          <Select onValueChange={onValueChange} disabled={isMutating}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectionner un appareil" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Appareils d'imagerie disponibles</SelectLabel>
                {modalities.map((modality) => (
                  <SelectItem key={modality.id} value={modality.id}>
                    {modality.modalityPseudo}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      }
      cardFooter={
        <Button
          onClick={add}
          disabled={isMutating || !modality}
          className="w-full">
          {modality
            ? `Envoyer vers ${modality.modalityPseudo}`
            : "selectionner un appareil"}
        </Button>
      }
    />
  );
}

export default AddNewWorkingListItem;
