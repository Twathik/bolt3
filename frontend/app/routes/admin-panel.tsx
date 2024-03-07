import AdminPanelSell from "@/components/AdminPanelComponents/AdminPanelSell";
import { Outlet } from "@remix-run/react";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import useBoltSubscription from "@/Subscriptions/useBoltSubscription";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await createClientFromCookiesAndCheckUser(request);
  return {};
};

export default function AdminPanel() {
  useBoltSubscription({ subscriptionIds: [""] });
  return (
    <main className="min-h-screen">
      <AdminPanelSell>
        <Outlet />
      </AdminPanelSell>
    </main>
  );
}
