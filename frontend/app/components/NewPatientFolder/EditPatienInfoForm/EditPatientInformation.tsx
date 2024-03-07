import type AddPatientFormSchema from "@/components/WebAppIndexComponents/AddPatientForm/AddPatientFormSchema";
import { Button } from "@/ui/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";
import { format, parseISO } from "date-fns";
import { useCallback, useState } from "react";
import type { z } from "zod";
import EditPatientInfoForm from "./EditPatientInfoForm";
import { useBoltStore } from "@/stores/boltStore";

function EditPatientInformation() {
  const [open, setOpen] = useState(false);
  const patient = useBoltStore((s) => s.patient);

  const openForm = useCallback(() => {
    setOpen(true);
  }, []);
  const defaultValues: z.infer<typeof AddPatientFormSchema> = {
    firstName: patient?.firstName || "",
    lastName: patient?.lastName || "",
    sexe: patient?.sexe || "M",
    ddn: format(parseISO(patient?.ddn || ""), "dd/MM/yyyy"),
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {!patient?.onTrash && (
          <Button onClick={openForm} variant="ghost" className="w-full">
            Modifier les informations
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="min-w-[700px]">
        <SheetHeader>
          <SheetTitle>
            <div>Modifier les informations du patient : </div>
            <div>
              {patient?.lastName} {patient?.firstName}
            </div>
          </SheetTitle>
          <SheetDescription className="">
            <EditPatientInfoForm
              defaultValues={defaultValues}
              id={patient?.id || ""}
              setOpen={setOpen}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default EditPatientInformation;
