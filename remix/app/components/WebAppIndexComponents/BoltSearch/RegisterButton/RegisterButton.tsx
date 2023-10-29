import { useMutation } from "@/lib/wundergraph";
import { Button } from "@/ui/components/ui/button";
import { useToast } from "@/ui/components/ui/use-toast";
import { QueueListIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";

function RegisterButton({
  callBack,
  patientId,
  isLoading,
}: {
  callBack: (consultationId?: string) => Promise<void>;
  patientId: string;
  isLoading: boolean;
}) {
  const { toast } = useToast();
  const { isMutating, trigger } = useMutation({
    operationName: "consultationList/registerPatient",
    onError: () => {
      toast({
        title: "Une erreur est survenue",
        description: "Le patient n'a pas pu être inscrit en consultation",
        duration: 2000,
        variant: "destructive",
      });
    },
    onSuccess: async (d) => {
      await callBack(d?.mainDb_registerPatient);
      toast({
        title: "Opération réussie",
        description: "Le patient est inscrit en consultation",
        duration: 2000,
        variant: "destructive",
      });
    },
  });
  const register = useCallback(() => {
    trigger({ patient_id: patientId });
  }, [patientId, trigger]);
  return (
    <Button
      className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-slate-200 py-4 text-sm hover:bg-slate-300"
      onClick={register}
      disabled={isMutating || isLoading}>
      <>
        <QueueListIcon className="h-5 w-5 text-black" aria-hidden="true" />
        <span className="text-black">Inscrire</span>
      </>
    </Button>
  );
}

export default RegisterButton;
