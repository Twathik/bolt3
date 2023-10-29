import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";

function DeleteDefinitivelyElementButton({ patientId }: { patientId: string }) {
  const { toast } = useToast();
  const { error, trigger } = useMutation({
    operationName: "patients/emptyTrashPatient",
  });
  const [loading, setLoading] = useState(false);
  const deletePermanently = useCallback(async () => {
    setLoading(true);
    await trigger({ id: { equals: patientId } });
  }, [patientId, trigger]);

  useEffect(() => {
    if (error)
      toast({
        title: "Une erreur est survenur",
        description: "le dossier n'a pas pu être supprimé deffinitivement",
        variant: "destructive",
      });
  }, [error, toast]);
  return (
    <Button
      disabled={loading}
      onClick={deletePermanently}
      variant="ghost"
      className="h-8 w-8 p-0">
      <span className="sr-only">Supprimer</span>
      <TrashIcon className="h-4 w-4" />
    </Button>
  );
}

export default DeleteDefinitivelyElementButton;
