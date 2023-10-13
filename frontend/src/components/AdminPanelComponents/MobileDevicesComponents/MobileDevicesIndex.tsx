"use client";
import React from "react";

import { useQuery } from "@/components/wg-generated/nextjs";
import { PropagateLoader } from "react-spinners";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import MobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevice";
import CreateMobileDeviceForm from "@/components/AdminPanelComponents/MobileDevicesComponents/CreateMobileDeviceForm";

function MobileDevicesIndex() {
  const { data, error, isLoading } = useQuery({
    operationName: "MobileDevicesQuery",
    liveQuery: true,
  });

    if (isLoading) {
    return (
      <div className=" flex h-96 flex-row items-center justify-center align-middle">
        <PropagateLoader color="#111827" className="flex" />
      </div>
    );
  }

  if (error) {
    return (
      <div className=" flex h-96 flex-row items-center justify-center align-middle">
        <ErrorNotification
          title="Une erreur est survenue"
          description="La liste des applications mobiles actives n'a pas pue être réccupérée"
        />
      </div>
    );
  }

  return (
    <>
      <div className="bloc flex flex-row">
        <div className="flex-1"></div>
        <div className="flex">
          <CreateMobileDeviceForm />
        </div>
      </div>
      <ul role="list" className="">
        {data?.mainDb_mobileDevices.map((mobileDevice) => (
          <MobileDevice mobileDevice={mobileDevice} />
        ))}
      </ul>
    </>
  );
}

export default MobileDevicesIndex;
