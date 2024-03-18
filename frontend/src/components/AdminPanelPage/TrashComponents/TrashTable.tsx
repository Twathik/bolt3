"use client";
import TrashTableComponent from "./TrashTableComponent";
import TrashColumn from "./TrashColumn";
import { useBoltStore } from "@/stores/boltStore";

function TrashTable() {
  const onTrash = useBoltStore((s) => s.onTrash);

  return <TrashTableComponent columns={TrashColumn} data={onTrash} />;
}

export default TrashTable;
