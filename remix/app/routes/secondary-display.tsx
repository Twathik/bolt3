import { getSelectedDisplay } from "@/components/SecondaryDisplay/utils";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "@/components/generated/models";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import { useSubscription } from "@/lib/wundergraph";
import { useToast } from "@/ui/components/ui/use-toast";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useEffect, useState } from "react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await createClientFromCookiesAndCheckUser(request);
  return {};
};

export default function SecondaryDisplay() {
  const [payload, setPayload] = useState<
    AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
  >({
    appPayload: JSON.stringify({
      displayType: "main",
      id: "",
      payload: "",
    }),
    messageId: "",
    type: "secondaryDisplay",
  });
  const { toast } = useToast();
  const { data, error } = useSubscription({
    operationName: "AppSubscription/globalSubscription",
  });

  useEffect(() => {
    if (data) {
      if (data.mainDb_appSubscription.type === "secondaryDisplay") {
        setPayload(data.mainDb_appSubscription);
      }
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      toast({
        title: "Une erreur est survenue",
        description:
          "Une erreur reseau est survenu, veuiller rafraichir la page et reesayer",
        variant: "destructive",
      });
    }
  }, [error, toast]);
  return getSelectedDisplay({ payload });
}
