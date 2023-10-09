import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import React from "react";
import AddPatientFormSchema from "./AddPatientFormSchema";
import { z } from "zod";

interface ConfirmAddPatientModalInterface {
  patient: z.infer<typeof AddPatientFormSchema> | null;
  isValid: boolean;
}
function ConfirmAddPatientModal({
  patient,
  isValid,
}: ConfirmAddPatientModalInterface) {
  console.log({ patient });
  return patient ? (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="submit" className="w-full" disabled={!isValid}>
          <PaperAirplaneIcon className="mr-2 h-4 w-4" />
          Valider
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ) : (
    <div></div>
  );
}

export default ConfirmAddPatientModal;
