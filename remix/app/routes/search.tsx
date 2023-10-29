import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import WebAppHeader from "@/components/WebAppIndexComponents/WebAppHeader/header";
import type { PublicUser } from "@/components/generated/client";
import { createClientFromCookies } from "@/lib/wundergraph";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDate, getMonth, getYear } from "date-fns";

interface searchPageSSRInterface {
  user: PublicUser;
  consultationId: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = createClientFromCookies(request);
    const userPromise = client.fetchUser();
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
    return {
      user,
      consultationId,
    };
  } catch (error) {
    return null;
  }
}

export default function WebbAppSearch() {
  const ssr = useLoaderData<searchPageSSRInterface>();
  return (
    <main className="min-h-screen ">
      <WebAppHeader user={ssr.user} />
      <section className="md:workspace-min-height flex flex-col">
        <section className="grid grid-flow-row grid-cols-2 gap-4">
          <div>
            <AddPatient consultationId={ssr.consultationId} />
          </div>
          <div className="p-9">
            <BoltSearch />
          </div>
        </section>
      </section>
    </main>
  );
}
