export const generateDocumentType = ({
  eventType,
}: {
  eventType: "CLINICAL_VISIT" | "GENERAL_SONO" | "PRESCRIPTION";
}): string => {
  switch (eventType) {
    case "CLINICAL_VISIT":
      return "Motif de suivi";
    case "PRESCRIPTION":
      return "Ordonnances";
    case "GENERAL_SONO":
      return "Echographie";
    default:
      return "Unkown document type";
  }
};
