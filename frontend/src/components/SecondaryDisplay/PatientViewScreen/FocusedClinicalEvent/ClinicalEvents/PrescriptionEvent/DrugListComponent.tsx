import { useBoltStore } from "@/stores/boltStore";
import React, { useMemo } from "react";
import Drug from "./Drug";
import _ from "lodash";

function DrugListComponent() {
  const prescriptions = useBoltStore((s) => s.prescriptions);

  const renderPrescriptions = useMemo(
    () =>
      _.uniqBy(prescriptions, "id").map((drug) => (
        <Drug key={drug.id} drug={drug} />
      )),
    [prescriptions]
  );
  return <div className="">{renderPrescriptions}</div>;
}

export default DrugListComponent;
