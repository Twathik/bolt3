import AdminPanelSell from "@/components/AdminPanelComponents/AdminPanelSell";
import { Outlet } from "@remix-run/react";

export default function AdminPanel() {
  return (
    <AdminPanelSell>
      <Outlet />
    </AdminPanelSell>
  );
}
