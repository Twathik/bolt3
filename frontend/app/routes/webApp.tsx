import AppFloatingActionButton from "@/components/GeneralComponents/FAB/AppFloatingActionButton";
// import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
import { useBoltStore } from "@/stores/boltStore";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
// import { format, getDate, getMonth, getYear, parseISO } from "date-fns";
import { useEffect } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await createClient(request);

    // const today = new Date();

    const [user] = await Promise.all([
      client.query({ operationName: "users/getUser" }),
      /* client.query({
        operationName: "consultationList/todayConsultation",
        input: {
          day: getDate(today),
          month: getMonth(today),
          year: getYear(today),
        },
      }), */
    ]);

    if (!user || user.error) return redirect("/login");

    return {
      user: user.data?.mainDb_user,
      // consultation: consultation.data?.mainDb_findFirstConsultation,
    };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}

export default function Bolt() {
  const loaderData = useLoaderData<typeof loader>();

  const setAppUser = useBoltStore((store) => store.setUser);
  /* const setPatientSpotlights = useBoltStore(
    (store) => store.setPatientsSpotlights
  );
  const setConsultationState = useBoltStore(
    (store) => store.setConsultationState
  ); */

  useEffect(() => {
    setAppUser({
      searchApiKey: loaderData?.user?.searchApiKey ?? "",
      avatarUrl: loaderData?.user?.avatarUrl ?? "",
    });
  }, [loaderData?.user?.avatarUrl, loaderData?.user?.searchApiKey, setAppUser]);

  /* useEffect(() => {
    if (loaderData?.consultation) {
      setPatientSpotlights(
        loaderData.consultation.ConsultationList.map((c) => ({
          consultationList: c,
          patientId: c.patientId,
          id: c.id,
          label: `${c.patient.lastName} ${c.patient.firstName}`,
          description: `DDN : ${format(
            parseISO(c.patient.ddn),
            "dd-MM-yyyy"
          )} - sexe: ${c.patient.sexe === "F" ? "Femme" : "Homme"}`,
        }))
      );
    }
  }, [loaderData?.consultation, setPatientSpotlights]); */

  /* useEffect(() => {
    setConsultationState({
      id: loaderData?.consultation?.id ?? null,
      allowedEventTypes: loaderData?.consultation?.allowedEventTypes ?? [],
    });
  }, [
    loaderData?.consultation?.allowedEventTypes,
    loaderData?.consultation?.id,
    setConsultationState,
  ]);

  if (!loaderData?.consultation || !loaderData.consultation) {
    return (
      <InitialLoadingError msg="Une erreur est survenue lors du chargement initial de l'application" />
    );
  } */

  return (
    <main className="min-h-screen ">
      <Outlet />
      <AppFloatingActionButton />
    </main>
  );
}
