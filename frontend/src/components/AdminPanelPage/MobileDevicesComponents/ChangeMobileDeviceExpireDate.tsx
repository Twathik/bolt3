/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ChangeMobileDeviceExpireDateForm from "./ChangeMobileExpirationDateForm/ChangeMobileDeviceExpireDateForm";

interface ChangeMobileDeviceExpireDateInterface {
  id: string;
}

function ChangeMobileDeviceExpireDate({
  id,
}: ChangeMobileDeviceExpireDateInterface) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="justify-start" variant="ghost">
          Modifier la date d'expiration
        </Button>
      </SheetTrigger>
      <SheetContent className="h-full min-w-max max-w-full" side="right">
        <SheetHeader>
          <SheetTitle>Cette action est irreverssible?</SheetTitle>
          <SheetDescription>
            <ChangeMobileDeviceExpireDateForm id={id} setOpen={setOpen} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ChangeMobileDeviceExpireDate;
