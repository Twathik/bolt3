import type { ReactNode } from "react";

import MainSecondaryScreen from "./MainSecondaryScreen";
import DICOMscreen from "./DICOMscreen";
import type { AppSubscriptionGlobalSubscriptionResponseData } from "../generated/models";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";

export const getSelectedDisplay = ({
  payload,
}: {
  payload: AppSubscriptionGlobalSubscriptionResponseData["mainDb_appSubscription"];
}): ReactNode => {
  const app = JSON.parse(payload.appPayload) as SecondaryDisplayInterface;
  switch (app.displayType) {
    case "main":
      return <MainSecondaryScreen />;
    case "dicom":
      return <DICOMscreen payload={app} />;
    default:
      break;
  }
};
