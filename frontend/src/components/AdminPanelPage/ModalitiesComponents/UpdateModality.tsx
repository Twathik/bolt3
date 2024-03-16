/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ChangeMobileDeviceExpireDateForm from "./UpdateModality/UpdateModalityForm";
import type { ModalityModalitiesResponseData } from "@/components/wg-generated/models";

interface UpdateModality {
  modality: ModalityModalitiesResponseData["mainDb_modalities"][0];
}

function UpdateModality({ modality }: UpdateModality) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="h-10 bg-slate-700 hover:bg-slate-900">
          Configurer
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full min-w-max max-w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle>Modifier la configuration de l'appareil</SheetTitle>
          <SheetDescription>
            <ChangeMobileDeviceExpireDateForm
              modality={modality}
              setOpen={setOpen}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default UpdateModality;
