/* eslint-disable react/no-unescaped-entities */
import { classNames } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import React, { useCallback, useMemo, useState } from "react";
import LogoutDevice from "./MobileDeviceMenu/LogoutDevice";
import SwitchType from "./MobileDeviceMenu/SwitchType";
import DeleteApplication from "./MobileDeviceMenu/DeleteApplication";
import { Button } from "@/components/ui/button";
import MobileDeviceQrCode from "./MobileDeviceMenu/MobileDeviceQrCode";
import ChangeMobileDeviceExpireDate from "./ChangeMobileDeviceExpireDate";
import type { MobileDevicesMobileDevicesQueryResponseData } from "@/components/wg-generated/models";
import ConfirmationDialog from "@/components/GeneralComponents/ConfirmationDialog/ConfirmationDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";

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
  const [open, setOpen] = useState(false);

  return (
    <li
      key={id}
      className="m-5 flex items-center justify-between gap-x-6 rounded-sm border-l-2 border-solid border-slate-400 bg-slate-50 p-5 py-5 shadow-lg"
    >
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
            )}
          >
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
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="default" size="default" className="rounded-full">
              <span className="text-lg">
                <BsThreeDotsVertical />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px]">
            <DropdownMenuLabel>Paramètres</DropdownMenuLabel>
            <DropdownMenuGroup className="flex flex-col">
              <ConfirmationDialog
                callback={callBack}
                cancelButtonTitle="Fermer"
                showValidationButton={false}
                titre="Veuillez scaner le QR code au niveau de l'application mobile ( Bolt companion )"
                description={<MobileDeviceQrCode token={accessToken} />}
                triggerButton={
                  <Button variant="ghost" className="justify-start">
                    Connecter un appareil
                    <span className="sr-only"> Connecter </span>
                  </Button>
                }
              />
              <LogoutDevice deviceId={id} />
              <ChangeMobileDeviceExpireDate id={id} />
              <SwitchType deviceId={id} mobileDeviceType={mobileDeviceType} />
              <DeleteApplication deviceId={id} />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

export default MobileDevice;
