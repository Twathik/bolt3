import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import PDFrootComponent from "./PDFrootComponent";
import type { mainDb_PatientDocumentTypeValues } from "@/components/wg-generated/models";
import type { PageSize } from "@react-pdf/types";

function CommandPanel({
  sheetTitle,
  panelTitle,
  documentType,
  size,
}: {
  sheetTitle: string;
  panelTitle: string;
  documentType: mainDb_PatientDocumentTypeValues;
  size: PageSize;
}) {
  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <div className="text-center text-2xl font-bold underline">
        {panelTitle}
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Imprimer</Button>
          </SheetTrigger>
          <SheetContent className="h-full" side="bottom">
            <SheetHeader>
              <SheetTitle>{sheetTitle}</SheetTitle>
              <SheetDescription>
                <PDFrootComponent documentType={documentType} size={size} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default CommandPanel;
