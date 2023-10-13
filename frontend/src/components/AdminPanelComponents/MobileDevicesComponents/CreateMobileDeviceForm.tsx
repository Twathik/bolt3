import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useMutation } from "@/components/wg-generated/nextjs";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import CreateMobileDeviceSchema from "./CreateMobileDeviceSchema";
import { z } from "zod";
import toast from "react-hot-toast";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import { v4 as uuidv4 } from "uuid";
import { addMonths, format } from "date-fns";
import { Button } from "@/components/ui/button";

function CreateMobileDeviceForm() {
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/addMobileDeviceMutation",
    onSuccess: () => {
      toast.custom(
        <SuccessNotification
          description="L'application Mobile abien été crée"
          title="Succes de l'oppération"
        />,
        { position: "bottom-center", duration: 2000 },
      );
    },
    onError: (error) => {
      console.dir({ error }, { depth: 5, colors: true });
      toast.custom(
        <ErrorNotification
          description="L'application Mobile n'a pa pu être crée"
          title="Echec de l'oppération"
        />,
        {
          position: "bottom-center",
          duration: 2000,
        },
      );
    },
  });

  const defaultValues: z.infer<typeof CreateMobileDeviceSchema> = {
    expireAt: 0,
    mobileDeviceType: "SECRETARY",
  };

  async function onSubmit(values: z.infer<typeof CreateMobileDeviceSchema>) {
    await trigger({
      accessToken: uuidv4(),
      uuid: uuidv4(),
      expireAt: format(addMonths(new Date(), values.expireAt), "yyyy-MM-dd"),
      mobileDeviceType: values.mobileDeviceType,
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-10 bg-rose-700 hover:bg-rose-900">
          Créer une application mobile
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full min-w-max max-w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            <AppFormBuilder
              defaultValues={defaultValues}
              formSchema={CreateMobileDeviceSchema}
              onSubmit={onSubmit}
              loading={isMutating}
              mode="onSubmit"
              inputs={[
                {
                  type: "select",
                  name: "mobileDeviceType",
                  label: "Type d'application",
                  placeholder: "Secretariat ou pour médecin",
                  options: [
                    { value: "DOCTOR", label: "Medecin" },
                    { value: "SECRETARY", label: "Secrétariat" },
                  ],
                },
                {
                  type: "number",
                  label: "Delais d'expiration en mois",
                  name: "expireAt",
                  placeholder: "",
                },
              ]}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CreateMobileDeviceForm;
