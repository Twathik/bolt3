export const generateDocumentType = ({
  eventType,
}: {
  eventType: "DIAGNOSTIC" | "GENERAL_SONO" | "PRESCRIPTION";
}): string => {
  switch (eventType) {
    case "DIAGNOSTIC":
      return "Motif de suivi";
    case "PRESCRIPTION":
      return "Ordonnances";
    case "GENERAL_SONO":
      return "Echographie";
    default:
      return "Unkown document type";
  }
};
