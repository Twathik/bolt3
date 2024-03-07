import AppFloatingActionButton from "@/components/GeneralComponents/FAB/AppFloatingActionButton";
import React from "react";

function WebAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <AppFloatingActionButton />
    </div>
  );
}

export default WebAppLayout;
