import AppFloatingActionButton from "@/components/GeneralComponents/FAB/AppFloatingActionButton";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import WebAppHeader from "@/components/WebAppIndexComponents/WebAppHeader/header";
import type { UsersGetUserResponseData } from "@/components/generated/models";
import createClient from "@/lib/createClient";
import { useBoltStore } from "@/stores/boltStore";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDate, getMonth, getYear } from "date-fns";
import { useEffect } from "react";

interface searchPageSSRInterface {
  user: UsersGetUserResponseData["mainDb_user"];
  consultationId: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await createClient(request);

    const userPromise = client.query({ operationName: "users/getUser" });
    const today = new Date();
    let consultationId: string | null = null;
    const consultationPromise = client.query({
      operationName: "consultationList/todayConsultation",
      input: {
        day: getDate(today),
        month: getMonth(today),
        year: getYear(today),
      },
    });
    const [user, consultation] = await Promise.all([
      userPromise,
      consultationPromise,
    ]);

    if (consultation.data?.mainDb_findFirstConsultation)
      consultationId = consultation.data.mainDb_findFirstConsultation.id;
    console.log({ user });
    if (!user || user.error) return redirect("/login");

    return {
      user: user.data?.mainDb_user,
      consultationId,
    };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}

export default function WebbAppSearch() {
  const { consultationId, user } = useLoaderData<searchPageSSRInterface>();

  const setAppUser = useBoltStore((store) => store.setUser);
  useEffect(() => {
    setAppUser({
      searchApiKey: user?.searchApiKey ?? "",
      avatarUrl: user?.avatarUrl ?? "",
    });
  }, [setAppUser, user?.avatarUrl, user?.searchApiKey]);
  if (!user)
    return (
      <InitialLoadingError msg="Une erreur est survenue lors du chargement initial de l'application" />
    );
  return (
    <main className="min-h-screen ">
      <WebAppHeader user={user} />
      <section className="md:workspace-min-height flex flex-col">
        <section className="grid grid-flow-row grid-cols-2 gap-4">
          <div>
            <AddPatient consultationId={consultationId} />
          </div>
          <div className="p-9">
            <BoltSearch />
          </div>
        </section>
      </section>
      <AppFloatingActionButton />
    </main>
  );
}
