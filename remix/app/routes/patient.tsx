import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import BottomPatientNavBar from "@/components/PatientFolder/BottomNavbar/BottomPatientNavBar";
import PatientHeaderBar from "@/components/PatientFolder/Header/PatientHeaderBar";
import createClient from "@/lib/createClient";
import { useBoltStore } from "@/stores/boltStore";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  let client = await createClient(request);

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
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}

function PatientLayout() {
  const loadedData = useLoaderData<typeof loader>();

  const patient = useBoltStore((store) => store.patient);

  if (!loadedData)
    return (
      <InitialLoadingError msg="Le dossier du patient n'a pa pu être réccupéré" />
    );

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
