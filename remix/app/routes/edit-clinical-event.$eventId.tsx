import EditClinicalEventsRootComponent from "@/components/ClinicalEvents/EditClinicalEventsRootComponent";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const { eventId } = params;
  const client = await createClient(request);
  try {
    const [clinicalEvent, user] = await Promise.all([
      client.query({
        operationName: "clinicalEvents/getClinicalEventWithConfiguration",
        input: { id: eventId || "" },
      }),
      client.fetchUser({ revalidate: true }),
    ]);

    if (clinicalEvent.error || !clinicalEvent.data) return null;

    const {
      getModalities,
      WorkingList,
      getConfigurationFile,
      getEconomizers,
      ...event
    } = clinicalEvent.data.mainDb_clinicalEvent!;

    return {
      clinicalEvent: event,
      modalities: getModalities,
      workingLists: WorkingList,
      editorConfigurationFiles: getConfigurationFile,
      economizers: getEconomizers,
      user,
    };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
};

function ClinicalDiagnostic() {
  const loadedData = useLoaderData<typeof loader>();

  if (
    !loadedData ||
    !loadedData.clinicalEvent ||
    !loadedData.modalities ||
    !loadedData.workingLists ||
    !loadedData.editorConfigurationFiles ||
    !loadedData.economizers ||
    !loadedData.user
  )
    return (
      <InitialLoadingError msg="Une erreure est survenue. L'évenement clinique n'a pa pu être réccupéré!" />
    );

  return (
    <main className="min-h-screen">
      <EditClinicalEventsRootComponent
        clinicalEvent={loadedData.clinicalEvent}
        modalities={loadedData.modalities}
        workingLists={loadedData.workingLists}
        editorConfigurationFiles={loadedData.editorConfigurationFiles}
        economizers={loadedData.economizers}
        user={{
          searchApiKey: loadedData.user.customClaims?.searchApiKey ?? "",
          avatarUrl: loadedData.user.customClaims?.avatarUrl ?? "",
        }}
      />
    </main>
  );
}

export default ClinicalDiagnostic;
