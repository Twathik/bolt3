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
import type { ReactNode } from "react";

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
      <AlertDialogContent className="z-[100000]">
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
