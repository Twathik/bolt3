"use client";

import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";

export default function Webapp() {
  return (
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
  );
}
