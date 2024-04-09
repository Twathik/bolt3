import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCallback, useEffect, useState } from "react";
import EventView from "./EventView/EventView";
import WidgetView from "./WidgetsView/WidgetView";
import EconomizersView from "./EconomizersView/EconomizersView";
import DicomView from "./DicomView/DicomView";
import { useBoltStore } from "@/stores/boltStore";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@/components/wg-generated/nextjs";

type tabs = "Folder" | "widgets" | "economizers" | "dicom";

function EventLateralPanel() {
  const [tab, setTab] = useState<tabs>("Folder");
  const focusedClinicalEvent = useBoltStore((s) => s.focusedClinicalEvent);
  const setEconomizers = useBoltStore((s) => s.setEconomizers);
  const setModalities = useBoltStore((s) => s.setModalities);
  const { toast } = useToast();
  const { data, isLoading, mutate } = useQuery({
    operationName: "clinicalEvents/getClinicalEventWithConfiguration",
    input: { id: focusedClinicalEvent?.eventId ?? "" },
    enabled: true,
    onError: (e) => {
      toast({
        title: "Erreur reseau !",
        description: "Le dossier n'a pas pu être synchronisé",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    let req = true;
    const getNewConfig = async () => {
      try {
        const d = await mutate(data, { revalidate: true });

        if (d?.mainDb_clinicalEvent) {
          const { getEconomizers, getModalities } = d?.mainDb_clinicalEvent;
          setEconomizers(getEconomizers);
          setModalities(getModalities);
        } else {
          setEconomizers([]);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    if (req) {
      getNewConfig();
    }
    return () => {
      req = false;
    };
  }, [data, mutate, focusedClinicalEvent, setEconomizers, setModalities]);

  const onChangeTab = useCallback(
    (value: string) => {
      setTab(value as tabs);
    },
    [setTab]
  );
  /* 
  useEffect(() => {
    setTab("widgets");
  }, [focusedDocument]); */
  return (
    <Tabs
      value={tab}
      onValueChange={onChangeTab}
      className=" w-[25vw] sticky left-0 top-10 shadow-lg rounded-md overflow-auto h-[84vh] mx-2 my-2 border-zinc-200 border-[1px] p-1"
    >
      <TabsList className="m-2 mx-auto">
        <TabsTrigger value="Folder">Dossier</TabsTrigger>
        {!isLoading && (
          <>
            <TabsTrigger value="widgets">Widgets</TabsTrigger>
            <TabsTrigger value="economizers">Economiseurs</TabsTrigger>
            <TabsTrigger value="dicom">Imagerie</TabsTrigger>
          </>
        )}
      </TabsList>
      <TabsContent value="Folder">
        <EventView />
      </TabsContent>
      <TabsContent value="widgets">
        <WidgetView />
      </TabsContent>
      <TabsContent value="economizers">
        <EconomizersView />
      </TabsContent>
      <TabsContent value="dicom">
        <DicomView />
      </TabsContent>
    </Tabs>
  );
}

export default EventLateralPanel;
