import getUser from "@/components/ApiCalls/getUser";
import ConsultationSpotlight from "@/components/SearchPage/AppSpotlight/ConsultationSpotlight";
import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import WebAppHeader from "@/components/WebAppIndexComponents/WebAppHeader/header";
import React from "react";

async function BoltSearchPage() {
  const user = await getUser();

  return (
    <main className="min-h-screen ">
      <WebAppHeader user={user} />
      <ConsultationSpotlight />
      <section className="md:workspace-min-height flex flex-col">
        <section className="grid grid-flow-row grid-cols-2 gap-4">
          <div>
            <AddPatient />
          </div>
          <div className="p-9">
            <BoltSearch user={user} />
          </div>
        </section>
      </section>
    </main>
  );
}

export default BoltSearchPage;
