import PatientFolderBody from "@/components/PatientFolder/Body/PatientBody";
import { useLoaderData, useParams } from "@remix-run/react";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useBoltStore } from "@/stores/boltStore";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
import { useEffect } from "react";
import useBoltSubscription from "@/Subscriptions/useBoltSubscription";

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
  const { patientId } = useParams();

  const setClinicalEvents = useBoltStore((store) => store.setClinicalEvents);
  useBoltSubscription({ subscriptionIds: [patientId ?? ""] });

  useEffect(() => {
    setClinicalEvents(loaderData?.clinicalEvents ?? []);
  }, [loaderData?.clinicalEvents, setClinicalEvents]);

  if (!loaderData)
    return (
      <InitialLoadingError msg="Le dossier du patient n'a pa pu être réccupéré" />
    );

  return (
    <div className="m-4 p-5 rounded-lg border-y-2 border-slate-400 shadow-xl">
      <PatientFolderBody />
    </div>
  );
}

export default PatientFolder;
