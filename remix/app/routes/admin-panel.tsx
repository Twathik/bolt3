import AdminPanelSell from "@/components/AdminPanelComponents/AdminPanelSell";
import { Outlet } from "@remix-run/react";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await createClientFromCookiesAndCheckUser(request);
  return {};
};

export default function AdminPanel() {
  return (
    <AdminPanelSell>
      <Outlet />
    </AdminPanelSell>
  );
}
