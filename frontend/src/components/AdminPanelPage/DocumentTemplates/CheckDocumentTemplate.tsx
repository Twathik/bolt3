import PdfComponent from "@/components/GeneralComponents/PDFcomponent/PdfComponent";
import { Button } from "@/components/plate-ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { DocumentTemplatesGetDocumentTemplatesResponseData } from "@/components/wg-generated/models";
import { getDocumentPaddings } from "@/lib/generalUtils/getDocumentSettings";
import React from "react";

function CheckDocumentTemplate({
  documentTemplate,
}: {
  documentTemplate: DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_documentTemplates"][0];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Apercu {documentTemplate.templateName}</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="w-[100vw] h-[100vh]">
        <SheetHeader>
          <SheetTitle>
            Apercu du template {documentTemplate.templateName}
          </SheetTitle>
          <SheetDescription>
            <PdfComponent
              content={{
                clinicalEventContent: [
                  { type: "p", children: [{ text: "" }] },
                  { type: "page-break", children: [{ text: "" }] },
                  { type: "p", children: [{ text: "" }] },
                ],
                settings: {
                  paddings: getDocumentPaddings({ size: "A4", settings: null }),
                  urls: {
                    evenUrl: documentTemplate.evenTemplateUrl,
                    oddUrl: documentTemplate.oddTemplateUrl,
                  },
                },
              }}
              size="A4"
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default CheckDocumentTemplate;
