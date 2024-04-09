import type { DocumentTemplatesGetDocumentTemplatesResponseData } from "@/components/wg-generated/models";
import Image from "next/image";
import React from "react";
import DownloadTemplateButton from "./DownloadTemplateButton";
import { cn } from "@/lib/utils";
import CheckDocumentTemplate from "./CheckDocumentTemplate";

function DocumentTemplate({
  documentTemplate,
}: {
  documentTemplate: DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_documentTemplates"][0];
}) {
  return (
    <div
      className={cn(
        "min-h-[270px] rounded-md shadow-lg flex flex-row items-center my-8 p-10  justify-between border-slate-300 border-[1px]"
      )}
    >
      <div className="flex flex-col gap-10">
        <CheckDocumentTemplate documentTemplate={documentTemplate} />
        <DownloadTemplateButton documentTemplate={documentTemplate} />
      </div>

      <Image
        src={documentTemplate.evenTemplateUrl}
        alt="page principale"
        height={270}
        width={210}
        className="border-slate-900 border-[1px]"
      />
      <Image
        src={documentTemplate.oddTemplateUrl}
        alt="page principale"
        height={270}
        width={210}
        className="border-slate-900 border-[1px]"
      />
    </div>
  );
}

export default DocumentTemplate;
