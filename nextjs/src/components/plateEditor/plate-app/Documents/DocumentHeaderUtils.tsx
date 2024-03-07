import type {
  PlateEditor,
  TDescendant,
  TElement,
  TText,
} from "@udecode/plate-common";
import { DOCUMENT_HEADER_KEY } from "./DocumentsKeys";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";
import scrollToLocation from "../../lib/ScrollToLocation";

export type DocumentHeaderTypes = mainDb_EventTypesValues;

export type clinicalEventDocument = Array<TElement | TDescendant | TText>;

export type DocumentHeaderElementType = {
  type: typeof DOCUMENT_HEADER_KEY;
  children: TDescendant[];
  createdAt: string;
  eventId: string;
  metaData?: { [key: string]: any };
  documentType: DocumentHeaderTypes;
  toDelete: boolean;
  firstInsert: boolean;
};
export type DocumentHeaderElementTypeWithId = DocumentHeaderElementType & {
  id: string;
};

export interface InsertDocumentHeaderInterface {
  editor: PlateEditor;
  documentType: DocumentHeaderTypes;
  addDocumentHeader: (d: DocumentHeaderElementTypeWithId) => void;
  clinicalEventId: string;
}

export const insertDocumentHeader = async ({
  editor,
  documentType,
  addDocumentHeader,
  clinicalEventId,
}: InsertDocumentHeaderInterface) => {
  const date = Date();
  const createdAt = format(date, "dd-MM-yyy");
  const id = uuid();
  const node: DocumentHeaderElementTypeWithId = {
    type: DOCUMENT_HEADER_KEY,
    children: [{ text: "" }],
    createdAt,
    eventId: clinicalEventId,
    documentType,
    id,
    toDelete: false,
    firstInsert: true,
  };
  scrollToLocation("editor-bottom");
  editor.insertNode<DocumentHeaderElementType>(node);
  addDocumentHeader(node);
};

export const generateDocumentHeaderTitle = (
  element: DocumentHeaderElementType
): string => {
  switch (element.documentType) {
    case "DIAGNOSTIC":
      return "Diagnostics du patient";
    case "HISTORY":
      return "Antécedents du patient";
    case "CLINICALEXAM":
      return "Examen clinique";
    case "ECG":
      return "Electrocardiogramme";
    case "SONOGRAPHY":
      return "Echocardiographie";
    case "BIOLOGY":
      return "Examen biologique";
    case "PRESCRIPTION":
      return "Ordonnance";
    case "CERTIFICAT":
      return "Certificat médical";
    case "MEDICAL_REPORT":
      return "Rapport médical";

    default:
      return "";
  }
};
