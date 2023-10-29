"use client";

import AppFloatingActionButton from "@/components/GeneralComponents/FAB/AppFloatingActionButton";
import AddPatient from "@/components/WebAppIndexComponents/AddPatientForm";
import BoltSearch from "@/components/WebAppIndexComponents/BoltSearch/BoltSearch";
import { useSubscription } from "@/components/wg-generated/nextjs";
import useTabsStore from "@/stores/tabsStore";
import { useEffect } from "react";

export default function Webapp() {
  const { data } = useSubscription({
    operationName: "global/closeAllTabsSubscription",
  });
  const { closeTabs } = useTabsStore();

  useEffect(() => {
    if (data) closeTabs();
  }, [data]);

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
