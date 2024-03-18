import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";

export const generateDocumentType = ({
  eventType,
}: {
  eventType: mainDb_EventTypesValues;
}): string => {
  switch (eventType) {
    case "DIAGNOSTIC":
      return "Motif de suivi";
    case "PRESCRIPTION":
      return "Ordonnances";
    case "SONOGRAPHY":
      return "Echographie";
    default:
      return "Unkown document type";
  }
};
