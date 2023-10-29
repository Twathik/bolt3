import { classNames } from "@/lib/utils";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { format, parseISO } from "date-fns";
import React, { Fragment, useCallback, useMemo } from "react";
import LogoutDevice from "./MobileDeviceMenu/LogoutDevice";
import SwitchType from "./MobileDeviceMenu/SwitchType";
import DeleteApplication from "./MobileDeviceMenu/DeleteApplication";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/confirmationDialog";
import { Button } from "@/ui/components/ui/button";
import MobileDeviceQrCode from "./MobileDeviceMenu/MobileDeviceQrCode";
import ChangeMobileDeviceExpireDate from "./ChangeMobileDeviceExpireDate";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/generated/models";

interface MobileDeviceInterface {
  mobileDevice: MobileDevicesMobileDevicesQueryResponseData["mainDb_mobileDevices"][0];
}
function MobileDevice({
  mobileDevice: { id, accessToken, expireAt, mobileDeviceType, connected },
}: MobileDeviceInterface) {
  const birthDate = useMemo(
    () => format(parseISO(expireAt), "dd / MM / yyyy"),
    [expireAt]
  );
  const callBack = useCallback(() => {}, []);

  return (
    <li
      key={id}
      className="m-5 flex items-center justify-between gap-x-6 rounded-sm border-l-2 border-solid border-slate-400 bg-slate-50 p-5 py-5 shadow-lg">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {mobileDeviceType === "DOCTOR"
              ? "Application d'assistance pour le médecin ( Bolt3 companion )"
              : "Application de géstion du secrétariat ( Bolt3 Secretary )"}
          </p>
          <p
            className={classNames(
              "mt-0.5 whitespace-nowrap rounded-md border-2 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset",
              connected
                ? "border-green-500 text-green-500"
                : "border-rose-700 text-rose-700"
            )}>
            {connected ? "active" : "déconnecté"}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">
            Date d'expiration
            <time dateTime={expireAt} className="ml-2 font-bold">
              {birthDate}
            </time>
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <ChangeMobileDeviceExpireDate id={id} />

        <ConfirmationDialog
          callback={callBack}
          cancelButtonTitle="Fermer"
          showValidationButton={false}
          titre="Veuillez scaner le QR code au niveau de l'application mobile ( Bolt companion )"
          description={<MobileDeviceQrCode token={accessToken} />}
          triggerButton={
            <Button className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
              Connecter un appareil<span className="sr-only"> Connecter </span>
            </Button>
          }
        />
        <Menu as="div" className="relative flex-none">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="bloc absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <LogoutDevice deviceId={id} />
              <SwitchType deviceId={id} mobileDeviceType={mobileDeviceType} />
              <DeleteApplication deviceId={id} />
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </li>
  );
}

export default MobileDevice;
