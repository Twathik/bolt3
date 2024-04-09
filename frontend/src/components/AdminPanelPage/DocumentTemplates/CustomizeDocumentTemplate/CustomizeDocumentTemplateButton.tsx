import { Button } from "@/components/plate-ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { RawDocumentSettingsInterface } from "@/lib/utils/getDocumentSettings";
import React, { useState } from "react";
import CustomizeDocumentTemplateSettingsComponent from "./CustomizeDocumentTemplateSettingsComponent";
import PDFDocumentTemplatePreviewComponent from "./PDFDocumentTemplatePreviewComponent";

function CustomizeDocumentTemplateButton({
  settings: initialSettings,
  settingsId,
  title,
  sheetTitle,
  size,
}: {
  settings: RawDocumentSettingsInterface;
  settingsId: string;
  title: string;
  sheetTitle: string;
  size: "A4" | "A5";
}) {
  const [rawSettings, setSettings] = useState(initialSettings);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="bg-amber-400 hover:bg-amber-300 text-slate-700 text-lg"
        >
          {title}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="w-[100vw] h-[100vh]">
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
          <SheetDescription>
            <div className="flex flex-row">
              <div className="w-[30vw]">
                <CustomizeDocumentTemplateSettingsComponent
                  rawSettings={rawSettings}
                  setSettings={setSettings}
                  size={size}
                  settingsId={settingsId}
                />
              </div>
              <div className="w-[70vw]">
                <PDFDocumentTemplatePreviewComponent
                  rawSettings={rawSettings}
                  size={size}
                />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CustomizeDocumentTemplateButton;
