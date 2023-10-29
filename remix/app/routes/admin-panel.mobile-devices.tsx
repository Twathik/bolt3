import MobileDevicesIndex from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevicesIndex";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";
import { createClientFromCookies } from "@/lib/wundergraph";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const client = createClientFromCookies(request);
  try {
    const getMobileDevices = await client.query({
      operationName: "mobileDevices/MobileDevicesQuery",
    });
    if (getMobileDevices.error) return null;

    return getMobileDevices.data?.mainDb_mobileDevices;
  } catch (error) {
    return null;
  }
}

export default function MobileDevices() {
  const data =
    useLoaderData<
      MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
    >();
  return <MobileDevicesIndex data={data} />;
}
