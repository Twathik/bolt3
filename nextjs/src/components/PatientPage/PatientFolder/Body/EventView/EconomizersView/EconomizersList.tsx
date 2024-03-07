import { useBoltStore } from "@/stores/boltStore";
import Economizer from "./Economizer";

function EconomizersList() {
  const economizers = useBoltStore((store) => store.economizers);

  return (
    <div>
      {economizers.map((e) => (
        <Economizer key={e.id} economizer={e} />
      ))}
    </div>
  );
}

export default EconomizersList;
