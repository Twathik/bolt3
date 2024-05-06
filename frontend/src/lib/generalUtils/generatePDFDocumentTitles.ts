import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";

export const generatePDFDocumentTitles = ({
  eventType,
}: {
  eventType: mainDb_EventTypesValues;
}): string => {
  switch (eventType) {
    case "DIAGNOSTIC":
      return "Motif de suivi";
    case "PRESCRIPTION":
      return "Ordonnance";
    case "SONOGRAPHY":
      return "Echocardiographie trans thoracique";
    default:
      return "Unkown document type";
  }
};
