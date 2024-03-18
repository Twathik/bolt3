/* eslint-disable react/no-unescaped-entities */

import AdminPanel from "@/components/AdminPanelPage/AdminPanel";
import GoBackButton from "@/components/AdminPanelPage/GoBackButton";
import React from "react";

function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <GoBackButton />
      <AdminPanel>{children}</AdminPanel>
    </div>
  );
}

export default SettingsLayout;
