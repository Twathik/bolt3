import PatientFolderBody from "@/components/PatientFolder/Body/PatientFolderBody";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import type { PatientsGetOnePatientResponseData } from "@/components/generated/models";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useBoltStore } from "@/stores/boltStore";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
interface patientContextInterface {
  initialPatient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const client = await createClient(request);
  if (!params.patientId) return null;
  try {
    const { data, error } = await client.query({
      operationName: "clinicalEvents/getClinicalEvents",
      input: { patientId: params.patientId },
    });
    if (error) return null;
    return {
      clinicalEvents: data?.mainDb_clinicalEvents,
    };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
};

function PatientFolder() {
  const loaderData = useLoaderData<typeof loader>();
  const contextData = useOutletContext() as patientContextInterface;
  const patient = useBoltStore((store) => store.patient);

  if (!loaderData)
    return (
      <InitialLoadingError msg="Le dossier du patient n'a pa pu être réccupéré" />
    );

  return (
    <main className="min-h-screen">
      <div className=" m-4 grid flex-1 grid-cols-2 gap-4 overflow-hidden rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6">
        <PatientFolderBody
          patient={patient ?? contextData?.initialPatient}
          clinicalEvents={loaderData.clinicalEvents}
        />
      </div>
    </main>
  );
}

export default PatientFolder;
