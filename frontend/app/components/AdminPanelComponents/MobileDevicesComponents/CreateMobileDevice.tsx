import { useCallback, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";

import { Button } from "@/ui/components/ui/button";
import CreateMobileDeviceForm from "./CreateMobileDeviceForm/CreateMobileDeviceForm";

function CreateMobileDevice() {
  const [open, setOpen] = useState(false);

  const openSheet = useCallback(() => setOpen(true), []);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          onClick={openSheet}
          className="h-10 bg-rose-700 hover:bg-rose-900">
          Créer une application mobile
        </Button>
      </SheetTrigger>

      <SheetContent className="h-full min-w-max max-w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            <CreateMobileDeviceForm setOpen={setOpen} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CreateMobileDevice;
