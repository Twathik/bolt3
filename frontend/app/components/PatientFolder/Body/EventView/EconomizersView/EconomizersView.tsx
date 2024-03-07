import { useBoltStore } from "@/stores/boltStore";
import EconomizerButton from "./EconomizersButtons/CreateEconomizerButton/CreateEconomizerButton";
import EconomizersList from "./EconomizersList";

function EconomizersView() {
  const focusedDocument = useBoltStore((s) => s.focusedDocument);
  if (!focusedDocument) return <div>Veuillez selectionner un document</div>;
  return (
    <div className="w-full shadow-lg rounded-md border-slate-500 border-[1px] mb-5">
      <div className="flex flex-row justify-end min-h-12 p-2">
        <EconomizerButton />
      </div>

      <EconomizersList />
    </div>
  );
}

export default EconomizersView;
