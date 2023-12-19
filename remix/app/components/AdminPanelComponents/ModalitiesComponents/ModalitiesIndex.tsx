import type { ModalityModalitiesResponseData } from "@/components/generated/models";
import Modality from "./Modality";

function ModalitiesIndex({
  data,
}: {
  data: ModalityModalitiesResponseData["mainDb_modalities"];
}) {
  return (
    <>
      <ul className="">
        {data?.map((modality) => (
          <Modality key={modality.id} modality={modality} />
        ))}
      </ul>
    </>
  );
}

export default ModalitiesIndex;
