"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { AppDataTable } from "@/components/GeneralComponents/DataTable/AppDataTable";
import { useMutation } from "@/components/wg-generated/nextjs";
import type { PatientsGetOnTrashPatientsResponseData } from "@/components/wg-generated/models";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function TrashTableComponent<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [rowSelection, setRowSelection] = useState({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { error, trigger } = useMutation({
    operationName: "patients/toggleSelectedTrashPatient",
  });

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenur",
        description: "le dossier n'a pas pu être supprimé deffinitivement",
        variant: "destructive",
      });
  }, [error, toast]);

  useEffect(() => {
    const selected = data.filter((_value, index) =>
      Object.keys(rowSelection).includes(index.toString())
    ) as PatientsGetOnTrashPatientsResponseData["mainDb_patients"];

    setSelectedIds(selected.map((s) => s.id));
  }, [data, rowSelection, setSelectedIds]);

  const deletePermanently = useCallback(async () => {
    if (selectedIds.length > 0) {
      setLoading(true);
      await trigger({ id: { in: selectedIds }, onTrash: true, delete: true });
      setLoading(false);
    } else {
      toast({
        title: "Selection vide",
        description:
          "Veuillez d'abord selectionner les dossier à supprimer, si vous souhaitez videz la corbeille cochez sur la case tout à fait en haut du tabelaux",
        variant: "default",
      });
    }
  }, [selectedIds, toast, trigger]);
  const restoreElement = useCallback(async () => {
    if (selectedIds.length > 0) {
      setLoading(true);
      await trigger({ id: { in: selectedIds }, onTrash: false, delete: false });
      setLoading(false);
    } else {
      toast({
        title: "Selection vide",
        description:
          "Veuillez d'abord selectionner les dossier à supprimer, si vous souhaitez videz la corbeille cochez sur la case tout à fait en haut du tabelaux",
        variant: "default",
      });
    }
  }, [selectedIds, toast, trigger]);

  return (
    <>
      <div className="flex flex-row justify-end m-2 relative mx-20 gap-4">
        <ConfirmationDialog
          triggerButton={
            <Button disabled={loading} variant="default">
              Restaurer la sélection
            </Button>
          }
          callback={restoreElement}
          showValidationButton
          titre="Restauration des élement sélectionés"
          description="Voulez vous retirer les élement sélectionés de la corbeille"
          confirmButtonTitle="restaurer"
          cancelButtonTitle="Annuler"
        />
        <ConfirmationDialog
          triggerButton={
            <Button disabled={loading} variant="destructive">
              Suppression definitive de la selection
            </Button>
          }
          callback={deletePermanently}
          showValidationButton
          titre="Supression définitive"
          description="Voulez vous supprimer définitivement les elements sélectionés"
          confirmButtonTitle="supprimer"
          cancelButtonTitle="Annuler"
        />
      </div>
      <AppDataTable
        columns={columns}
        data={data}
        setSelectedIds={setSelectedIds}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </>
  );
}
