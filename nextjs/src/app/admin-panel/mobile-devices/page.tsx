import MobileDevicesRootComponent from "@/components/AdminPanelPage/MobileDevicesComponents/MobileDevicesRootComponent";
import getMobileDevices from "@/components/ApiCalls/getMobileDevices";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

async function MobileDevicesPage() {
  const data = await getMobileDevices();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des appareils mobiles</CardTitle>
        <CardDescription>Gérer vos applications mobiles</CardDescription>
      </CardHeader>
      <CardContent>
        <MobileDevicesRootComponent data={data} />
      </CardContent>
    </Card>
  );
}

export default MobileDevicesPage;
