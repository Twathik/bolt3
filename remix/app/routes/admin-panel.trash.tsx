import TrashTable from "@/components/AdminPanelComponents/TrashComponents/TrashTable";
import { createClientFromCookies } from "@/lib/wundergraph";
import { Alert, AlertTitle, AlertDescription } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = createClientFromCookies(request);
    const { data, error } = await client.query({
      operationName: "patients/getOnTrashPatients",
    });
    if (error) return null;
    return data?.mainDb_patients;
  } catch (error) {
    return null;
  }
}
export default function Trash() {
  const onTrash = useLoaderData<typeof loader>();
  if (!onTrash)
    return (
      <div className="w-1/2 mx-auto">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>
            La liste des dossier de la corbeille n'a pas pu être réccupérée
          </AlertDescription>
        </Alert>
      </div>
    );
  return <TrashTable onTrash={onTrash} />;
}
