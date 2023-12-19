import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/ui/components/ui/tabs";
import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import { getLateralPanelCardWidgets } from "./utils";
import { useEffect, useMemo } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useToast } from "@/ui/components/ui/use-toast";
import { INSERT_DATA_IN_TABLE } from "../DataTablesCommands";
import { useSubscription } from "@/lib/wundergraph";

export default function LateralPanelRootComponent({
  clinicalEvent,
}: {
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}) {
  const [editor] = useLexicalComposerContext();
  const { toast } = useToast();

  const { data, error } = useSubscription({
    operationName: "DataTable/insertDataSubscription",
    input: { clinicalEventId: clinicalEvent!.id },
    resetOnMount: true,
  });

  useEffect(() => {
    if (data) {
      editor.dispatchCommand(
        INSERT_DATA_IN_TABLE,
        data.mainDb_insertDataSubscription
      );
    }
  }, [data, editor]);

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur reseau est survenue",
        description: "Veuillez rafraichir la page",
        variant: "destructive",
      });
  }, [error, toast]);
  const getLateralPanel = useMemo(
    () => getLateralPanelCardWidgets({ clinicalEvent }),
    [clinicalEvent]
  );
  return (
    <div className="m-1 p-2">
      <Tabs defaultValue="widgets" className="w-full ">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="widgets">Widgets</TabsTrigger>
          <TabsTrigger value="economizer">Economiseurs</TabsTrigger>
          <TabsTrigger value="dicom">Imagerie</TabsTrigger>
        </TabsList>
        <TabsContent value="widgets" className="">
          {getLateralPanel.widget}
        </TabsContent>
        <TabsContent value="economizer">
          {getLateralPanel.economizer}
        </TabsContent>
        <TabsContent value="dicom">{getLateralPanel.dicom}</TabsContent>
      </Tabs>
    </div>
  );
}
