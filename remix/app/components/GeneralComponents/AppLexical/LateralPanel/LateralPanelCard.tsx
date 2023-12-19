import type { ClinicalEventsGetClinicalEventResponseData } from "@/components/generated/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card";

import type { ReactNode } from "react";

interface LateralPanelCardInterface {
  cardTitle: string;
  cardDescription: string;
  cardContent: ReactNode;
  cardFooter: ReactNode;
  clinicalEvent: ClinicalEventsGetClinicalEventResponseData["mainDb_clinicalEvent"];
}

function LateralPanelCard({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  clinicalEvent,
}: LateralPanelCardInterface) {
  return (
    <Card className="m-4 rounded-lg border-y-2 border-x-0 border-slate-400 px-4 py-5 shadow-xl sm:p-6 relative">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">{cardContent}</CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}

export default LateralPanelCard;
