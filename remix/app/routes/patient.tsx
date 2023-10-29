import BottomPatientNavBar from "@/components/PatientFolder/BottomNavbar/BottomPatientNavBar";
import PatientHeaderBar from "@/components/PatientFolder/Header/PatientHeaderBar";
import { createClientFromCookies, useSubscription } from "@/lib/wundergraph";
import usePatientStore from "@/stores/patientStore";
import { useToast } from "@/ui/components/ui/use-toast";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const patientId = params.patientId;
  if (!patientId) return null;
  try {
    const client = createClientFromCookies(request);
    const { data, error } = await client.query({
      operationName: "patients/getOnePatient",
      input: { patientId },
    });
    console.log({ data, error });
    if (error || !data) return null;

    return data.mainDb_getPatient;
  } catch (error) {
    return null;
  }
}

function PatientLayout() {
  const initialPatient = useLoaderData<typeof loader>();
  const { setPatient, patient } = usePatientStore();
  const { toast } = useToast();
  const { data, error } = useSubscription({
    operationName: "patients/getUpdatedPatientSubscription",
    input: { id: initialPatient?.id || "" },
  });

  useEffect(() => {
    setPatient(initialPatient);
  }, [initialPatient, setPatient]);

  useEffect(() => {
    if (data) setPatient(data?.mainDb_getUpdatedPatient);
  }, [data, setPatient]);

  useEffect(() => {
    if (error)
      toast({
        title: "Erreur reseau",
        description: error?.message || "Le dossier n'a pas pu être réccupéré",
        duration: 2000,
        variant: "destructive",
      });
  }, [error, toast]);

  return (
    <main className="h-screen overflow-auto">
      <div className="flex h-full flex-col bg-white ">
        <PatientHeaderBar patient={patient} />
        <Outlet />
        <BottomPatientNavBar patient={patient} />
      </div>
    </main>
  );
}

export default PatientLayout;
