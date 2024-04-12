import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import PatientSpotlightComponent from "./PatientSpotlight/PatientSpotlightComponent";
import useConsultationListUpdater from "../GeneralComponents/Consultation/useConsultationListUpdater";

function ConsultationButton() {
  const [open, setOpen] = useState(false);

  useConsultationListUpdater({ refreshInterval: 5000 });
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="default" className="text-white">
          Liste de consultation
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[35vw]">
        <SheetHeader>
          <SheetTitle>Gerer vôtre consultation</SheetTitle>
          <SheetDescription>
            <PatientSpotlightComponent setOpen={setOpen} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ConsultationButton;
