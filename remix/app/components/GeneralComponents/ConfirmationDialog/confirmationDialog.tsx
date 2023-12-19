import type { ReactNode } from "react";

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
} from "@/ui/components/ui/alert-dialog";

interface confirmationDialogProps {
  triggerButton: ReactNode;
  callback: () => void | Promise<void>;
  titre?: string;
  description?: ReactNode;
  confirmButtonTitle?: string;
  showValidationButton?: boolean;
  cancelButtonTitle?: string;
  disableConfirmation?: boolean;
}
function ConfirmationDialog({
  triggerButton,
  titre = "Voulez vous vraiment continuer?",
  description = <></>,
  confirmButtonTitle = "Confirmer",
  callback,
  showValidationButton = true,
  cancelButtonTitle = "Annuler",
  disableConfirmation = false,
}: confirmationDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerButton}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{titre}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelButtonTitle}</AlertDialogCancel>
          {showValidationButton && (
            <AlertDialogAction
              disabled={disableConfirmation}
              onClick={callback}>
              {confirmButtonTitle}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmationDialog;
