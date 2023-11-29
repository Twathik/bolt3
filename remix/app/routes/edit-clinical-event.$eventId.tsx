import EditClinicalEventsRootComponent from "@/components/ClinicalEvents/EditClinicalEventsRootComponent";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import { Alert, AlertTitle, AlertDescription } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { eventId } = params;
  const client = await createClientFromCookiesAndCheckUser(request);
  try {
    const clinicalEvent = await client.query({
      operationName: "clinicalEvents/getClinicalEvent",
      input: { id: eventId || "" },
    });
    if (clinicalEvent.error) return null;
    return {
      clinicalEvent: clinicalEvent.data?.mainDb_clinicalEvent,
    };
  } catch (error) {
    return null;
  }
};

function ClinicalDiagnostic() {
  const loadedData = useLoaderData<typeof loader>();
  if (!loadedData)
    return (
      <div className="w-1/2 mx-aut">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>
            Une erreure est survenue. L'évenement clinique n'a pa pu être
            réccupéré!
          </AlertDescription>
        </Alert>
      </div>
    );

  return (
    <EditClinicalEventsRootComponent clinicalEvent={loadedData.clinicalEvent} />
  );
}

export default ClinicalDiagnostic;
