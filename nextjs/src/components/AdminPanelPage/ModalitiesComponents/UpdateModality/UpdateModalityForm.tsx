import React, { useCallback } from "react";
import type { z } from "zod";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import UpdateModalitySchema from "./UpdateModalitySchema";
import { useToast } from "@/components/ui/use-toast";

import { UpdateModalityInputs } from "./UpdateModalityInputs";
import type { ModalityModalitiesResponseData } from "@/components/wg-generated/models";
import { useMutation } from "@/components/wg-generated/nextjs";

function UpdateModalityForm({
  modality: {
    id,
    modalityPseudo,
    modalityAETitle,
    modalityIpAddress,
    modalityPort,
    modalityType,
  },
  setOpen,
}: {
  modality: ModalityModalitiesResponseData["mainDb_modalities"][0];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "Modality/updateOneModality",
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "Succes de l'oppération",
        description: "La configuration a été mise à jour",
        duration: 2000,
        variant: "default",
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        title: "Echec de l'oppération",
        description: "La configuration n'a pa pu être mise à jour",
        duration: 2000,
        variant: "default",
      });
    },
  });

  const defaultValues: z.infer<typeof UpdateModalitySchema> = {
    modalityAETitle,
    modalityPseudo: modalityPseudo ?? "",
    modalityIpAddress,
    modalityPort,
    modalityType,
  };

  const onSubmit = useCallback(
    async (modality: z.infer<typeof UpdateModalitySchema>) => {
      await trigger({
        ...modality,
        id,
      });
    },
    [id, trigger]
  );

  return (
    <AppFormBuilder
      defaultValues={defaultValues}
      formSchema={UpdateModalitySchema}
      onSubmit={onSubmit}
      loading={isMutating}
      mode="onSubmit"
      inputs={UpdateModalityInputs}
    />
  );
}

export default UpdateModalityForm;
