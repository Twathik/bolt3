import Modality from "./Modality";
import { useBoltStore } from "@/stores/boltStore";

function ModalitiesIndex() {
  const modalities = useBoltStore((store) => store.modalities);
  return (
    <>
      <ul className="">
        {modalities?.map((modality) => (
          <Modality key={modality.id} modality={modality} />
        ))}
      </ul>
    </>
  );
}

export default ModalitiesIndex;
