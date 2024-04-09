import type { TDescendant } from "@udecode/plate-common";
import { v4 as uuid } from "uuid";
import type { PageSize } from "@react-pdf/types";

import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import ContentChecker from "./ContentChecker";

const PdfConverter = ({
  content,
  size,
  patient,
}: {
  content: TDescendant[];
  size: PageSize;
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"] | null;
}) => {
  return content?.map((c) => (
    <ContentChecker
      key={uuid()}
      content={c}
      parentStyle={{}}
      size={size}
      patient={patient}
      root
    />
  ));
};

export default PdfConverter;
