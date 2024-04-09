import type { ELEMENT_IMAGE } from "@udecode/plate-media";
import type { DIAGNOSTIC_MENTION_KEY } from "../plate-app/Diag-plugin/diag-plugin-key";
import type { DrugMentionKey } from "../plate-app/Medic-plugin/drug-plugin-key";
import type { PRESCRIPTION_TABLE_KEY } from "../plate-app/PrescriptionTable/PrescriptionTableKey";

export type NodeCustomTypes =
  | typeof DIAGNOSTIC_MENTION_KEY
  | typeof DrugMentionKey
  | typeof PRESCRIPTION_TABLE_KEY
  | typeof ELEMENT_IMAGE;
