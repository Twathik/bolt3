import useBoltSubscription from "@/Subscriptions/useBoltSubscription";
import AppSpotlight from "@/components/GeneralComponents/ConsultationSpotlight/ConsultationSpotlight";
import AppFloatingActionButton from "@/components/GeneralComponents/FAB/AppFloatingActionButton";
import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import WebAppHeader from "@/components/WebAppIndexComponents/WebAppHeader/header";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    await createClientFromCookiesAndCheckUser(request);
    return {};
  } catch (error) {
    throw redirect("/login");
  }
}

export default function WebbAppSearch() {
  useBoltSubscription({ subscriptionIds: [""] });
  return (
    <main className="min-h-screen ">
      <WebAppHeader />
      <AppSpotlight />
      <section className="md:workspace-min-height flex flex-col">
        <section className="grid grid-flow-row grid-cols-2 gap-4">
          <div>
            <AddPatient />
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
