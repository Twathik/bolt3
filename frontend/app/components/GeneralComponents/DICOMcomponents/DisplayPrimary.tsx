import type { WorkingListsWorkingListsResponseData } from "@/components/generated/models";
import { Button } from "@/ui/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";
import { FaCircleArrowDown } from "react-icons/fa6";
import Iframe from "react-iframe";

import { orthancViewerBaseUrl } from "./utils";

function DisplayPrimary({
  workingList,
}: {
  workingList: WorkingListsWorkingListsResponseData["mainDb_workingLists"][0];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link">
          <span className="w-4 h-4">
            <FaCircleArrowDown />
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-full">
        <SheetHeader>
          <SheetTitle>Consulter l'examen</SheetTitle>
          <SheetDescription>
            Examen du patient : {workingList.patient.patientFullName}
          </SheetDescription>
        </SheetHeader>
        <div className="flex justify-center">
          <Iframe
            url={orthancViewerBaseUrl + workingList.linkId}
            id="dcm-viewer"
            className="w-full h-[85vh] mt-5"
            display="block"
            position="relative"
          />
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-red-900 hover:bg-rose-700 text-white">
              Fermer
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default DisplayPrimary;
