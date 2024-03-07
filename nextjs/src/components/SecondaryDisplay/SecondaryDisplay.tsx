"use client";
import { useBoltStore } from "@/stores/boltStore";
import { getSelectedDisplay } from "../../lib/utils/getSecondaryDisplay";

export default function SecondaryDisplay() {
  const secondaryDisplay = useBoltStore((store) => store.secondaryDisplay);
  return getSelectedDisplay({ secondaryDisplay });
}
