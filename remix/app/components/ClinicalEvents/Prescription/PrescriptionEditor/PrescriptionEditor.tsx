import CommonPlugins from "@/components/GeneralComponents/AppLexical/CommonPlugins";
import PrescriptionsPlugin from "./PrescriptionPlugin/PrescriptionPlugin";
import {
  INSERT_PRESCRIPTION_LAYOUT_COMMAND,
  PrescriptionLayoutPlugin,
} from "./PrescriptionLayout/PrescriptionLayoutPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import TopPanel from "@/components/GeneralComponents/AppLexical/TopPanel/TopPanel";
import { useCallback } from "react";
import { useBoltStore } from "@/stores/boltStore";
import { Button } from "@/ui/components/ui/button";

export default function PrescriptionEditor(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);
  const onClick = useCallback(() => {
    editor.dispatchCommand(INSERT_PRESCRIPTION_LAYOUT_COMMAND, null);
  }, [editor]);
  return (
    <>
      <TopPanel
        clinicalEvent={clinicalEvent!}
        size="A5"
        localButtons={[
          <Button
            key="addPrescriptionButton"
            onClick={onClick}
            className="bg-teal-900 hover:bg-teal-700">
            Ajouter une prescription
          </Button>,
        ]}
      />
      <CommonPlugins />
      <PrescriptionsPlugin />
      <PrescriptionLayoutPlugin />
    </>
  );
}
