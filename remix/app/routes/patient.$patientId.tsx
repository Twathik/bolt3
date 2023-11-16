import PatientFolderBody from "@/components/PatientFolder/Body/PatientFolderBody";
import usePatientStore from "@/stores/patientStore";
import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import type {
  ClinicalEventsGetClinicalEventsResponseData,
  PatientsGetOnePatientResponseData,
} from "@/components/generated/models";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useSubscription } from "@/lib/wundergraph";
import { useEffect, useState } from "react";
import { useToast } from "@/ui/components/ui/use-toast";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
interface patientContextInterface {
  initialPatient: PatientsGetOnePatientResponseData["mainDb_getPatient"] | null;
}

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const client = await createClientFromCookiesAndCheckUser(request);
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
    return null;
  }
};

function PatientFolder() {
  const { patientId } = useParams();
  const loaderData = useLoaderData<typeof loader>();
  const contextData = useOutletContext() as patientContextInterface;
  const { patient } = usePatientStore();
  const { toast } = useToast();
  const [clinicalEvents, setClinicalEvents] = useState<
    ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"] | null
  >(null);

  const { data, error } = useSubscription({
    operationName: "clinicalEvents/updateClinicalEventsSubscription",
    input: { patientId: patientId! },
  });

  useEffect(() => {
    if (data) {
      setClinicalEvents(data.mainDb_updateClinicalEventsSubscription);
    }
  }, [data, setClinicalEvents]);

  useEffect(() => {
    if (error)
      toast({
        title: "Erreur reseau",
        description:
          error?.message ||
          "Les élements du dossier n'ont pas pu être réccupérés",
        duration: 2000,
        variant: "destructive",
      });
  }, [error, toast]);

  return (
    <div className=" m-4 grid flex-1 grid-cols-2 gap-4 overflow-hidden rounded-lg border-y-2 border-slate-400 px-4 py-5 shadow-xl sm:p-6">
      <PatientFolderBody
        patient={patient ?? contextData?.initialPatient}
        clinicalEvents={clinicalEvents ?? loaderData?.clinicalEvents}
      />
    </div>
  );
}

export default PatientFolder;
