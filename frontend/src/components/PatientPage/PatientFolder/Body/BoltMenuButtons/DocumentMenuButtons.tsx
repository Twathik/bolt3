import { Icons } from "@/components/icons";

import type { menuItemsType } from "./menuItemstype";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";

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
