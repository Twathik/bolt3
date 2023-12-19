import type { ComponentProps } from "react";
import { ClientOnly } from "remix-utils/client-only";
import EditorToPdf from "./EditorToPDF/EditorToPdf";
import ClinicalEventSaveEditorStateButton from "./SaveButton/ClinicalEventSaveEditorStateButton";
import type { Page } from "@react-pdf/renderer";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import EconomizerButton from "./EconomizersButton/EconomizerButton";

function TopPanel({
  size,
  clinicalEvent,
}: {
  size: ComponentProps<typeof Page>["size"];
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  return (
    <div className="flex flex-row justify-end gap-4">
      <EconomizerButton clinicalEvent={clinicalEvent} />
      <ClientOnly>{() => <EditorToPdf size={size} />}</ClientOnly>
      <ClinicalEventSaveEditorStateButton clinicalEvent={clinicalEvent} />
    </div>
  );
}

export default TopPanel;
