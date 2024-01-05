import PatientFolderBody from "@/components/PatientFolder/Body/PatientFolderBody";
import { useLoaderData } from "@remix-run/react";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useBoltStore } from "@/stores/boltStore";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
import { useEffect } from "react";

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

  const setClinicalEvents = useBoltStore((store) => store.setClinicalEvents);

  useEffect(() => {
    setClinicalEvents(loaderData?.clinicalEvents ?? []);
  }, [loaderData?.clinicalEvents, setClinicalEvents]);

  if (!loaderData)
    return (
      <InitialLoadingError msg="Le dossier du patient n'a pa pu être réccupéré" />
    );

  return (
    <div className=" m-4 grid flex-1 grid-cols-2 gap-4 overflow-hidden rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6">
      <PatientFolderBody />
    </div>
  );
}

export default PatientFolder;
