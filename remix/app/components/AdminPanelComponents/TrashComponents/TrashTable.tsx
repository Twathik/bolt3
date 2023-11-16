import React, { useEffect, useState } from "react";
import { DataTable } from "./TrashTableComponent";
import TrashColumn from "./TrashColumn";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/generated/models";
import { useSubscription } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";

function TrashTable({
  onTrash: initialOnTrash,
}: {
  onTrash: PatientsGetOnTrashPatientsResponseData["mainDb_patients"];
}) {
  const { toast } = useToast();
  const [onTrash, setOnTrash] =
    useState<PatientsGetOnTrashPatientsResponseData["mainDb_patients"]>(
      initialOnTrash
    );

  const { data, error } = useSubscription({
    operationName: "patients/onTrashFoldersSubscription",
  });
  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenue",
        description:
          "Laliste des dossiers dans la corbeille n'a pa pu être mise à jour, veuillez rafaraichir la page",
        variant: "destructive",
        duration: 2000,
      });
  }, [error, toast]);
  useEffect(() => {
    if (data) {
      setOnTrash(data.mainDb_emptyTrashSubscription);
    }
  }, [data, setOnTrash]);
  return <DataTable columns={TrashColumn} data={onTrash} />;
}

export default TrashTable;
