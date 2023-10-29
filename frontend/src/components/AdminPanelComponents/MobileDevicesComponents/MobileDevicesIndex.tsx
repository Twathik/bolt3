"use client";
import React, { useEffect } from "react";

import { useMutation, useSubscription } from "@/components/wg-generated/nextjs";
import * as reactSpinners from "react-spinners";
import ErrorNotification from "@/components/GeneralComponents/Notifications/ErrorNotification";
import MobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/MobileDevice";
import CreateMobileDevice from "@/components/AdminPanelComponents/MobileDevicesComponents/CreateMobileDevice";

function MobileDevicesIndex() {
  const {
    data: mut,
    error: mutationError,
    isMutating,
    trigger,
  } = useMutation({
    operationName: "mobileDevices/triggerGetAllMobileDevicesSubscription",
  });
  const {
    data,
    error: subscriptionError,
    isLoading,
  } = useSubscription({
    operationName: "mobileDevices/getAllDevicesSubscription",
  });
  console.log({ mut, data, isLoading });
  useEffect(() => {
    trigger();
  }, [trigger]);

  if (isMutating || isLoading) {
    return (
      <div className=" flex h-96 flex-row items-center justify-center align-middle">
        <reactSpinners.PropagateLoader color="#111827" className="flex" />
      </div>
    );
  }

  if (mutationError || subscriptionError) {
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
          <CreateMobileDevice />
        </div>
      </div>
      <ul role="list" className="">
        {data?.mainDb_getMobileDevicesList.map((mobileDevice) => (
          <MobileDevice mobileDevice={mobileDevice} />
        ))}
      </ul>
    </>
  );
}

export default MobileDevicesIndex;
