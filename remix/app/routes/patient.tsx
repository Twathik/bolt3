import BottomPatientNavBar from "@/components/PatientFolder/BottomNavbar/BottomPatientNavBar";
import PatientHeaderBar from "@/components/PatientFolder/Header/PatientHeaderBar";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import { useSubscription } from "@/lib/wundergraph";
import { useBoltStore } from "@/stores/boltStore";
import { useToast } from "@/ui/components/ui/use-toast";
import { type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  let client = await createClientFromCookiesAndCheckUser(request);

  const patientId = params.patientId;
  if (!patientId) return null;
  try {
    const { data, error } = await client.query({
      operationName: "patients/getOnePatient",
      input: { patientId },
    });

    if (error || !data) return null;

    return { initialPatient: data.mainDb_getPatient };
  } catch (error) {
    return null;
  }
}

function PatientLayout() {
  const loadedData = useLoaderData<typeof loader>();
  const setPatient = useBoltStore((store) => store.setPatient);
  const patient = useBoltStore((store) => store.patient);
  const { toast } = useToast();
  const { data, error } = useSubscription({
    operationName: "patients/getUpdatedPatientSubscription",
    input: { id: loadedData?.initialPatient?.id || "" },
  });

  useEffect(() => {
    if (loadedData?.initialPatient?.deleted == false) {
      setPatient(loadedData?.initialPatient);
    }
  }, [loadedData?.initialPatient, setPatient]);

  useEffect(() => {
    if (data) {
      setPatient(data.mainDb_getUpdatedPatient);
    }
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
        <PatientHeaderBar patient={patient ?? loadedData?.initialPatient} />
        <Outlet
          context={{ initialPatient: patient ?? loadedData?.initialPatient }}
        />
        <BottomPatientNavBar patient={patient ?? loadedData?.initialPatient} />
      </div>
    </main>
  );
}

export default PatientLayout;
