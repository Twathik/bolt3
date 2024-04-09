import { useBoltStore } from "@/stores/boltStore";
import React, { useMemo } from "react";
import Drug from "./Drug";

function DrugListComponent() {
  const prescriptions = useBoltStore((s) => s.prescriptions);

  const renderPrescriptions = useMemo(
    () => prescriptions.map((drug) => <Drug key={drug.id} drug={drug} />),
    [prescriptions]
  );
  return <div className="">{renderPrescriptions}</div>;
}

export default DrugListComponent;
