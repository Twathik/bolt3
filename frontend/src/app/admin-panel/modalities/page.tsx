/* eslint-disable react/no-unescaped-entities */
import ModalitiesIndex from "@/components/AdminPanelPage/ModalitiesComponents/ModalitiesIndex";
import SubscribeToModalitiesWebSocket from "@/components/AdminPanelPage/ModalitiesComponents/SubscribeToModalitiesWebSocket";
import getModalities from "@/components/ApiCalls/getModalities";
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

async function ModalitiesPage() {
  const initialModalities = await getModalities();

  if (!initialModalities)
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
            Une erreur est survenue, la liste des appareils disponibles n'a pas
            pu être réccupérée
          </AlertDescription>
        </Alert>
      </div>
    );
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des appareils d'imagerie</CardTitle>
        <CardDescription>Gérer vos appareils d'imagerie</CardDescription>
      </CardHeader>
      <CardContent>
        <ModalitiesIndex initialModalities={initialModalities} />
      </CardContent>
      <SubscribeToModalitiesWebSocket />
    </Card>
  );
}

export default ModalitiesPage;
