import type { TDescendant, TElement } from "@udecode/plate-common";
import type { PageSize } from "@react-pdf/types";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import type { View } from "@react-pdf/renderer";

export type ElementStyle = React.ComponentProps<typeof View>["style"];

export type ListInformationType = {
  type: "disc" | "decimal";
  listStart: number;
};

export interface PdfCheckerProps {
  content: TDescendant | TElement;
  parentStyle: ElementStyle;
  listInformation?: ListInformationType | null;
  size: PageSize;
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"] | null;
  root?: boolean;
}
