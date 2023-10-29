import React, { useCallback } from "react";
import type { z } from "zod";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import ChangeMobileDeviceExpireDateSchema from "./ChangeMobileDeviceExpireDateSchema";
import { ChangeMobileDeviceExpireDateInputs } from "./ChangeMobileDeviceExpireDateInputs";
import { useToast } from "@/ui/components/ui/use-toast";
import { useMutation } from "@/lib/wundergraph";

function ChangeMobileDeviceExpireDateForm({
  id,
  setOpen,
}: {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/updateMobileDeviceExpiration",
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "Succes de l'oppération",
        description: "L'application Mobile abien été crée",
        duration: 2000,
        variant: "default",
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        title: "Echec de l'oppération",
        description: "L'application Mobile n'a pa pu être crée",
        duration: 2000,
        variant: "default",
      });
    },
  });

  const defaultValues: z.infer<typeof ChangeMobileDeviceExpireDateSchema> = {
    Months: 0,
  };

  const onSubmit = useCallback(
    async ({ Months }: z.infer<typeof ChangeMobileDeviceExpireDateSchema>) => {
      await trigger({
        Months,
        id,
      });
    },
    [id, trigger]
  );

  return (
    <AppFormBuilder
      defaultValues={defaultValues}
      formSchema={ChangeMobileDeviceExpireDateSchema}
      onSubmit={onSubmit}
      loading={isMutating}
      mode="onSubmit"
      inputs={ChangeMobileDeviceExpireDateInputs}
    />
  );
}

export default ChangeMobileDeviceExpireDateForm;
