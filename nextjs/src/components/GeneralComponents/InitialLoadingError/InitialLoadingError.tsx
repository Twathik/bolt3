import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaExclamationTriangle } from "react-icons/fa";

function InitialLoadingError({ msg }: { msg: string }) {
  return (
    <div className="w-1/2 mx-auto">
      <Alert variant="destructive">
        <span className="h-4 w-4">
          <FaExclamationTriangle />
        </span>
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>{msg}</AlertDescription>
      </Alert>
    </div>
  );
}

export default InitialLoadingError;
