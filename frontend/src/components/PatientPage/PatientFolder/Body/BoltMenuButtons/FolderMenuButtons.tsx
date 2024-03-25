import { Icons } from "@/components/icons";

import type { menuItemsType } from "./menuItemstype";
import { DOCUMENT_HEADER_KEY } from "@/components/plateEditor/plate-app/Documents/DocumentsKeys";

export const BoltFolderMenuButtons: menuItemsType[] = [
  {
    label: "Basic blocks",
    items: [
      {
        value: DOCUMENT_HEADER_KEY,
        label: "Examen clinique",
        documentType: "CLINICALEXAM",
        eventCategory: "DOCUMENT",
        description: "Examen clinique",
        icon: Icons.add,
      },
      {
        value: DOCUMENT_HEADER_KEY,
        label: "ECG",
        documentType: "ECG",
        eventCategory: "DOCUMENT",
        description: "ECG du patient",
        icon: Icons.add,
      },
      {
        value: DOCUMENT_HEADER_KEY,
        label: "ETT",
        documentType: "SONOGRAPHY",
        eventCategory: "DOCUMENT",
        description: "ETT du patient",
        icon: Icons.add,
      },
      {
        value: DOCUMENT_HEADER_KEY,
        label: "Biologie",
        documentType: "BIOLOGY",
        eventCategory: "DOCUMENT",
        description: "Examen biologique",
        icon: Icons.add,
      },
    ],
  },
];
