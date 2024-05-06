import { useToast } from "@/components/ui/use-toast";
import type { PatientsGetOnePatientInfoResponseData } from "@/components/wg-generated/models";
import { useQuery } from "@/components/wg-generated/nextjs";
import getClinicalEventContentFromEditor from "@/lib/generalUtils/getClinicalEventContentFromEditor";
import { useBoltStore } from "@/stores/boltStore";
import type { TElement } from "@udecode/plate-common";
import React, { useEffect } from "react";
import SubscribeToPrescriptionsWidget from "../../../subscriptionsHandlers/SubscribeToPrescriptionsWidget";
import { getNodesByType } from "@/components/plateEditor/lib/getNodesByType";
import { DrugMentionKey } from "@/components/plateEditor/plate-app/Drug-plugin/drug-plugin-key";
import type { DrugHitInterface } from "@/lib/interfaces/DrugsInterfaces";
import PrescriptionEventComponent from "./PrescriptionEventComponent";
import CommandPanel from "../Common/CommandPanel";

function PrescriptionEventRootComponent({
  patient,
}: {
  patient: PatientsGetOnePatientInfoResponseData["mainDb_getPatient"];
}) {
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const setInitialPrescriptions = useBoltStore(
    (s) => s.setInitialPrescriptions
  );

  const { data, error } = useQuery({
    operationName: "patients/getOnePatientDocument",
    input: { patientId: patient!.id, documentType: "document" },
  });
  const { toast } = useToast();

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreure est survenue!",
        description:
          "Les donnee de la prescription n'ont pas pu etre reccupérés",
        variant: "destructive",
      });
  }, [error, toast]);

  useEffect(() => {
    if (data && focusedClinicalEvent) {
      let rowTextContent = data.mainDb_getPatient?.DocumentStore[0].textContent;
      if (rowTextContent && rowTextContent.length > 0) {
        const textContent = JSON.parse(rowTextContent) as TElement;
        const clinicalEventContent = getClinicalEventContentFromEditor({
          focusedClinicalEvent,
          textContent,
        });

        if (clinicalEventContent) {
          const DrugNodes = getNodesByType({
            nodesToCheck: clinicalEventContent,
            type: DrugMentionKey,
          }).map((d) => d.n.metadata) as DrugHitInterface[];
          setInitialPrescriptions(DrugNodes);
        }
      }
    }
  }, [data, focusedClinicalEvent, setInitialPrescriptions]);

  return (
    <div>
      <div className="flex p-4">
        <div className="w-1/4">
          <CommandPanel
            sheetTitle={`Ordonance du ${focusedClinicalEvent?.createdAt} -- Patient :${patient?.patientFullName}`}
            panelTitle={`Ordonance du ${focusedClinicalEvent?.createdAt}`}
            documentType="document"
            size="A5"
          />
        </div>
        <div className="w-3/4 shadow-xl border-[1px] border-slate-400 rounded-xl">
          <PrescriptionEventComponent />
        </div>
      </div>

      <SubscribeToPrescriptionsWidget patientId={patient!.id} />
    </div>
  );
}

export default PrescriptionEventRootComponent;
