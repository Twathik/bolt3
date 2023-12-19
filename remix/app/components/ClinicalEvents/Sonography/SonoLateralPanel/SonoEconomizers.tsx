import EconomizersList from "@/components/GeneralComponents/AppLexical/LateralPanel/Economizers/EconomizersList";
import LateralPanelCard from "@/components/GeneralComponents/AppLexical/LateralPanel/LateralPanelCard";
import { useBoltStore } from "@/stores/boltStore";

function SonoEconomizers() {
  const clinicalEvent = useBoltStore((store) => store.clinicalEvent);

  return (
    <LateralPanelCard
      cardTitle="Economiseurs"
      cardDescription="Ganez du temps en utilisant/créant des compte rendus déja préformé"
      clinicalEvent={clinicalEvent!}
      cardContent={<EconomizersList />}
      cardFooter={<></>}
    />
  );
}

export default SonoEconomizers;
