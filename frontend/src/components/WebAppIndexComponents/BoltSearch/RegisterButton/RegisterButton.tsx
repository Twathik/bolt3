import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { HiQueueList } from "react-icons/hi2";
import { useCallback } from "react";
import { useMutation } from "@/components/wg-generated/nextjs";

function RegisterButton({ patientId }: { patientId: string }) {
  const { toast } = useToast();
  const { isMutating, trigger } = useMutation({
    operationName: "consultationList/registerPatient",
    onError: (e) => {
      toast({
        title: "Une erreur est survenue",
        description: "Le patient n'a pas pu être inscrit de la consultation",
        duration: 2000,
        variant: "destructive",
      });
    },
    onSuccess: async (_d) => {
      toast({
        title: "Opération réussie",
        description: "Le patient est inscrit en consultation",
        duration: 2000,
        variant: "default",
      });
    },
  });
  const register = useCallback(async () => {
    try {
      await trigger({ patientId });
    } catch (error) {
      console.log({ error });
    }
  }, [patientId, trigger]);
  return (
    <Button
      className="font-semiboldntext-black relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border  border-transparent bg-slate-200 py-4 text-sm hover:bg-slate-300"
      onClick={register}
      disabled={isMutating}
    >
      <>
        <span className="h-5 w-5 text-black" aria-hidden="true">
          <HiQueueList />
        </span>
        <span className="text-black">Inscrire</span>
      </>
    </Button>
  );
}

export default RegisterButton;
