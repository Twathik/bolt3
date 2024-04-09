import { Button } from "@/components/ui/button";
import type { DocumentTemplatesGetDocumentTemplatesResponseData } from "@/components/wg-generated/models";
import Link from "next/link";
import React from "react";

function DownloadTemplateButton({
  documentTemplate,
}: {
  documentTemplate: DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_documentTemplates"][0];
}) {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <strong>
          <u>Telecharger les templates</u>
        </strong>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Link href={documentTemplate.eventDoxTemplate!} target="_blank">
          <Button variant="link">Page recto</Button>
        </Link>
        <Link href={documentTemplate.oddDoxTemplate!} target="_blank">
          <Button variant="link">Page verso</Button>
        </Link>
      </div>
    </div>
  );
}

export default DownloadTemplateButton;
