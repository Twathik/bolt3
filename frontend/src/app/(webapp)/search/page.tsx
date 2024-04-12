import getUser from "@/components/ApiCalls/getUser";
import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import SubscribeToBoltSearch from "@/components/WebAppIndexComponents/BoltSearch/SubscribeToBoltSearch";
import WebAppHeader from "@/components/WebAppIndexComponents/WebAppHeader/header";
import React from "react";

async function BoltSearchPage() {
  const user = await getUser();

  return (
    <main className="min-h-screen ">
      <WebAppHeader user={user} />
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
      <SubscribeToBoltSearch />
    </main>
  );
}

export default BoltSearchPage;
