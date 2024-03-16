import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

function useSavedDataNotifications({
  data,
  error,
  subscriptionError,
}: {
  data: any | null | undefined;
  error: any | null | undefined;
  subscriptionError: any | null | undefined;
}) {
  const { toast } = useToast();
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreure est survenue !",
        description: "Le dossier n'a pas pu être sauvegardé",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  useEffect(() => {
    if (subscriptionError) {
      toast({
        title: "Une erreure est survenue !",
        description:
          "Les modification du dossier n'ont pas pu être synchronisés",
        variant: "destructive",
      });
    }
  }, [subscriptionError, toast]);

  useEffect(() => {
    if (data) {
      toast({
        title: "Opération réussie !",
        description: "Le dossier a été enregistré",
        variant: "default",
      });
    }
  }, [data, toast]);
  return null;
}

export default useSavedDataNotifications;
