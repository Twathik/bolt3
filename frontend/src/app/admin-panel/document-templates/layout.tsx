import SubscribeToMobileDevicesWebSocket from "@/components/AdminPanelPage/MobileDevicesComponents/SubscribeToMobileDevicesWebSocket";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

async function DocumentTemplateLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des Templates des documents</CardTitle>
        <CardDescription>
          Modifier / creer les templates de documents
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <SubscribeToMobileDevicesWebSocket />
    </Card>
  );
}

export default DocumentTemplateLayoutPage;
