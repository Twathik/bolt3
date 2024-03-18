import { useEffect } from "react";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../wg-generated/models";
import { useBoltStore } from "@/stores/boltStore";

function FocusedDocumentSubscription({
  data,
}: {
  data:
    | AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"]
    | undefined;
}) {
  const setFocusedDocument = useBoltStore((s) => s.setFocusedDocument);
  useEffect(() => {
    if (data && data.type === "focusedDocument") {
      const appPayload = JSON.parse(data.appPayload);
      setFocusedDocument(appPayload);
    }
  }, [data, setFocusedDocument]);
  return null;
}

export default FocusedDocumentSubscription;
