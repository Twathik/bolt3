import MobileDevicesRootComponent from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevicesRootComponent";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";
import createClient from "@/lib/createClient";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const client = await createClient(request);
  try {
    const getMobileDevices = await client.query({
      operationName: "mobileDevices/MobileDevicesQuery",
    });
    if (getMobileDevices.error) return null;

    return getMobileDevices.data?.mainDb_mobileDevices;
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}

export default function MobileDevices() {
  const data =
    useLoaderData<
      MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"]
    >();
  if (!data)
    return (
      <InitialLoadingError msg="La liste des appareils mobiles n'a pas pu être réccupérée" />
    );
  return <MobileDevicesRootComponent data={data} />;
}
