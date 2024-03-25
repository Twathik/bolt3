/* eslint-disable react/no-unescaped-entities */
import type { FocusedClinicalEvent } from "@/stores/boltStoreType";
import type { ReactNode } from "react";
import ETTWidget from "./widgets/ETTWidget";
import PrescriptionWidgets from "./widgets/PrescriptionWidgets";

export const getWidget = (doc: FocusedClinicalEvent): ReactNode => {
  switch (doc.eventType) {
    case "SONOGRAPHY":
      return <ETTWidget />;
    case "PRESCRIPTION":
      return <PrescriptionWidgets />;

    default:
      return <div>Aucun widget n'est retrouvé pour ce type de documents</div>;
  }
};
