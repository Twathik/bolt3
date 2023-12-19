import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function InitialLoadingError({ msg }: { msg: string }) {
  return (
    <div className="w-1/2 mx-auto">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Erreur</AlertTitle>
        <AlertDescription>{msg}</AlertDescription>
      </Alert>
    </div>
  );
}

export default InitialLoadingError;
