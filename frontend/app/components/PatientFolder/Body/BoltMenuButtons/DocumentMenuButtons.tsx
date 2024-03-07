import { Icons } from "@/components/icons";
import { DOCUMENT_HEADER_KEY } from "../../../../ui/components/plate-app/Documents/DocumentsKeys";
import type { menuItemsType } from "./menuItemstype";

export const DocumentMenuButtons: menuItemsType[] = [
  {
    label: "Basic blocks",
    items: [
      {
        value: DOCUMENT_HEADER_KEY,
        label: "Ordonnance",
        documentType: "PRESCRIPTION",
        eventCategory: "DOCUMENT",
        description: "Préscription",
        icon: Icons.add,
      },
      {
        value: DOCUMENT_HEADER_KEY,
        label: "Rapport médical",
        documentType: "MEDICAL_REPORT",
        eventCategory: "DOCUMENT",
        description: "Rapport médical",
        icon: Icons.add,
      },
      {
        value: DOCUMENT_HEADER_KEY,
        label: "Certificat médical",
        documentType: "CERTIFICAT",
        eventCategory: "DOCUMENT",
        description: "Certificat médical",
        icon: Icons.add,
      },
    ],
  },
];
