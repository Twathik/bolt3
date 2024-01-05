import LateralPanelCard from "@/components/GeneralComponents/AppLexical/LateralPanel/LateralPanelCard";
import { useBoltStore } from "@/stores/boltStore";
import WidgetsContainer from "@/components/GeneralComponents/AppLexical/LateralPanel/Widgets/WidgetsContainer";

function WidgetsIndex() {
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);
  const sections = useBoltStore((store) => store.editorConfiguration);

  return (
    <LateralPanelCard
      cardTitle="Widget"
      cardDescription="Veuillez choisir un widget à inserer dans l'éditeur"
      clinicalEvent={clinicalEvent!}
      cardContent={
        <>
          <WidgetsContainer sections={sections} />
        </>
      }
      cardFooter={<></>}
    />
  );
}

export default WidgetsIndex;
