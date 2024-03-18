/* eslint-disable react/no-unescaped-entities */
import SubscribeToTrashWebSocket from "@/components/AdminPanelPage/TrashComponents/SubscribeToTrashWebSocket";
import TrashTableRootComponent from "@/components/AdminPanelPage/TrashComponents/TrashTableRootComponent";
import getOnTrashPatients from "@/components/ApiCalls/getOnTrashPatient";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

async function TrashPage() {
  const onTrash = await getOnTrashPatients();

  if (!onTrash)
    return (
      <div className="w-1/2 mx-auto my-10">
        <Alert variant="destructive">
          <AlertTitle className="flex flex-row gap-3 items-end">
            <div className="text-xl">
              <FaExclamationTriangle />
            </div>
            <div>Error</div>
          </AlertTitle>
          <AlertDescription>
            Une erreur est survenue, les élements de la corbeille n'ont pas pu
            être réccupérés
          </AlertDescription>
        </Alert>
      </div>
    );
  return (
    <Card>
      <CardHeader>
        <CardTitle>Géstion de la corbeille</CardTitle>
        <CardDescription>
          Supprimer définitivement / restaurer les dossier mis dans la corbeille
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TrashTableRootComponent onTrash={onTrash} />
      </CardContent>
      <SubscribeToTrashWebSocket />
    </Card>
  );
}

export default TrashPage;
