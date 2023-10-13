import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import SuccessNotification from "@/components/GeneralComponents/Notifications/SuccessNotification";
import { useMutation } from "@/components/wg-generated/nextjs";
import React from "react";
import toast from "react-hot-toast";
import ChangeMobileDeviceExpireDateSchema from "./ChangeMobileDeviceExpireDateSchema";
import { z } from "zod";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppFormBuilder from "@/components/GeneralComponents/FormBuilder/AppFormRoot/AppFormBuilder";
import { Button } from "@/components/ui/button";

interface ChangeMobileDeviceExpireDateInterface {
  id: string;
}

function ChangeMobileDeviceExpireDate({
  id,
}: ChangeMobileDeviceExpireDateInterface) {
  const { trigger, isMutating } = useMutation({
    operationName: "mobileDevices/updateMobileDeviceExpiration",
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

  const defaultValues: z.infer<typeof ChangeMobileDeviceExpireDateSchema> = {
    Months: 0,
  };

  async function onSubmit({
    Months,
  }: z.infer<typeof ChangeMobileDeviceExpireDateSchema>) {
    await trigger({
      Months,
      id,
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-10 bg-slate-700 hover:bg-slate-900">
          Modifier la date d'expiration
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full min-w-max max-w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle>Cette action est irreverssible?</SheetTitle>
          <SheetDescription>
            <AppFormBuilder
              defaultValues={defaultValues}
              formSchema={ChangeMobileDeviceExpireDateSchema}
              onSubmit={onSubmit}
              loading={isMutating}
              mode="onSubmit"
              inputs={[
                {
                  type: "number",
                  name: "Months",
                  label: "Nombre de mois à rajouter",
                  placeholder: "exp 12 mois pour une année de licence",
                },
              ]}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ChangeMobileDeviceExpireDate;
