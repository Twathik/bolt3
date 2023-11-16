export const generateDocumentType = ({
  eventType,
}: {
  eventType: "DIAGNOSTIC" | "PRESCRIPTION";
}): string => {
  switch (eventType) {
    case "DIAGNOSTIC":
      return "Motif de suivi";
    case "PRESCRIPTION":
      return "Ordonnances";
    default:
      return "Unkown document type";
  }
};
