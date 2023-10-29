import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { useMutation } from "@/components/wg-generated/nextjs";
import React, { useCallback, useMemo } from "react";
import { z } from "zod";
import CreateMobileDeviceSchema from "./CreateMobileDeviceSchema";
import { v4 as uuidv4 } from "uuid";
import { CreateMobileDeviceInputs } from "./CreateMobileDeviceInputs";
import { addMonths } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

function CreateMobileDeviceForm({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { toast } = useToast();
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/addMobileDeviceMutation",
    onSuccess: () => {
      setOpen(false);
      toast({
        description: "L'application Mobile abien été crée",
        title: "Succes de l'oppération",
        duration: 2000,
        variant: "default",
      });
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast({
        description: "L'application Mobile n'a pa pu être crée",
        title: "Echec de l'oppération",
        duration: 2000,
        variant: "default",
      });
    },
  });

  const defaultValues: z.infer<typeof CreateMobileDeviceSchema> = useMemo(
    () => ({
      expireAt: 0,
      mobileDeviceType: "SECRETARY",
    }),
    [],
  );

  const onSubmit = useCallback(
    async ({
      mobileDeviceType,
      expireAt,
    }: z.infer<typeof CreateMobileDeviceSchema>) => {
      await trigger({
        accessToken: uuidv4(),
        uuid: uuidv4(),
        expireAt: addMonths(new Date(), expireAt).toISOString(),
        mobileDeviceType: mobileDeviceType,
      });
    },
    [trigger],
  );
  return (
    <AppFormBuilder
      defaultValues={defaultValues}
      formSchema={CreateMobileDeviceSchema}
      onSubmit={onSubmit}
      loading={isMutating}
      mode="onSubmit"
      inputs={CreateMobileDeviceInputs}
    />
  );
}

export default CreateMobileDeviceForm;
