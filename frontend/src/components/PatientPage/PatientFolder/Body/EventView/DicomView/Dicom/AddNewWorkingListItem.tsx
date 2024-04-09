/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import type { ModalityGetSpecificModalitiesResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";
import { useBoltStore } from "@/stores/boltStore";
import { useCallback, useEffect, useMemo, useState } from "react";

function AddNewWorkingListItem() {
  const focusedClinicalEvent = useBoltStore(
    (store) => store.focusedClinicalEvent
  );
  const modalities = useBoltStore((store) => store.modalities);
  const patient = useBoltStore((s) => s.patient);

  const [modality, setModality] =
    useState<
      ModalityGetSpecificModalitiesResponseData["mainDb_modalities"][0]
    >();
  const { error, isMutating, trigger, data } = useMutation({
    operationName: "WorkingLists/createOneWorkingList",
  });
  const { toast } = useToast();

  const renderModalities = useMemo(() => {
    return modalities.map((modality) => {
      return (
        <SelectItem key={modality.id} value={modality.id}>
          {modality.modalityPseudo}
        </SelectItem>
      );
    });
  }, [modalities]);

  useEffect(() => {
    if (error) {
      console.log({ error });
      toast({
        title: "Une erreur est survenue",
        description: `Le patient n'a pas pu être ajouté à la liste de travail de l'appareil`,
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [error, toast]);
  useEffect(() => {
    if (data) {
      toast({
        title: "Operation rèussie",
        description: `Le patient a été enregistrer au niveau de la liste de travail de l'appareil selèectioné`,
        variant: "default",
        duration: 2000,
      });
    }
  }, [data, toast]);

  const onValueChange = useCallback(
    (value: string) => {
      setModality(modalities.find((m) => m.id === value));
    },
    [modalities]
  );

  const add = useCallback(async () => {
    try {
      if (focusedClinicalEvent && modality && patient) {
        await trigger({
          clinicalEventId: focusedClinicalEvent.eventId,
          modalityId: modality.id,
          patientId: patient.id,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  }, [focusedClinicalEvent, modality, patient, trigger]);
  return (
    <div className="min-h-[17vh] flex flex-col justify-between">
      <div className="underline font-bold">
        Insrire le patient dans une liste de travail
      </div>
      <Select onValueChange={onValueChange} disabled={isMutating}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selectionner un appareil" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Appareils d'imagerie disponibles</SelectLabel>
            {renderModalities}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        onClick={add}
        disabled={isMutating || !modality}
        className="w-full"
      >
        {modality
          ? `Envoyer vers ${modality.modalityPseudo}`
          : "selectionner un appareil"}
      </Button>
    </div>
  );
}

export default AddNewWorkingListItem;
