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
      return "ETT";
    case "ECG":
      return "ECG";
    case "BIOLOGY":
      return "Bilan biologique";
    default:
      return "Unkown document type";
  }
};
