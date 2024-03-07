"use client";
import type { ModalityModalitiesResponseData } from "@/components/wg-generated/models";
import Modality from "./Modality";
import { useBoltStore } from "@/stores/boltStore";
import { useEffect } from "react";

function ModalitiesIndex({
  initialModalities,
}: {
  initialModalities: ModalityModalitiesResponseData["mainDb_modalities"];
}) {
  const modalities = useBoltStore((store) => store.modalities);
  const setModalities = useBoltStore((s) => s.setModalities);
  useEffect(() => {
    setModalities(initialModalities);
  }, [initialModalities, setModalities]);
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
