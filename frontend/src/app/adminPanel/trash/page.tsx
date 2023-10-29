import TrashTable from "@/components/AdminPanelComponents/TrashComponents/TrashTable";
import { AdminPanelSSR } from "@/components/AdminPanelComponents/utils/AdminPanelSSR";
import { cookies } from "next/headers";
import React from "react";

async function TrashPage() {
  const SSR = new AdminPanelSSR(cookies);
  const onTrash = await SSR.getOnTrashFolders();
  return <TrashTable onTrash={onTrash} />;
}

export default TrashPage;
