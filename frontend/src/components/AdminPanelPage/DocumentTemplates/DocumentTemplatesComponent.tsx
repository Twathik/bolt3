"use client";
import type { DocumentTemplatesGetDocumentTemplatesResponseData } from "@/components/wg-generated/models";

import React, { useMemo } from "react";
import DocumentTemplate from "./DocumentTemplate";
import CustomizeButton from "./CustomizeDocumentTemplate/CustomizeDocumentTemplateButton";
import type { RawDocumentSettingsInterface } from "@/lib/generalUtils/getDocumentSettings";

function DocumentTemplatesComponent({
  documentTemplates,
  settings,
  settingsId,
}: {
  documentTemplates:
    | DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_documentTemplates"]
    | undefined;
  settings:
    | DocumentTemplatesGetDocumentTemplatesResponseData["mainDb_settings"]
    | undefined;
  settingsId: string;
}) {
  const rawSettings: RawDocumentSettingsInterface = useMemo(
    () =>
      settings && settings[0].documentTemplateConfiguration
        ? JSON.parse(settings && settings[0].documentTemplateConfiguration)
        : {
            paddings: {
              A4paddingTop: 15,
              A4paddingBottom: 20,
              A4paddingLeft: 10,
              A4paddingRight: 10,
              A5paddingTop: 15,
              A5paddingBottom: 20,
              A5paddingLeft: 10,
              A5paddingRight: 10,
            },
            urls: {
              evenUrl: "/Templates/cardiologist-template-1-with-header.jpg",
              oddUrl: "/Templates/cardiologist-template-1-no-header.jpg",
            },
          },
    [settings]
  );
  return (
    <div>
      <div className="text-center text-3xl m-5">
        <strong>
          <u>Presonnalisez votre template</u>
        </strong>
      </div>
      <div className="flex flex-row justify-center gap-9">
        <CustomizeButton
          settings={rawSettings}
          settingsId={settingsId}
          title="Template format A4"
          sheetTitle="Personalisez votre template au format A4"
          size="A4"
        />
        <CustomizeButton
          settings={rawSettings}
          settingsId={settingsId}
          title="Template format A5"
          sheetTitle="Personalisez votre template au format A5"
          size="A5"
        />
      </div>
      <div>
        <div className="text-center text-3xl m-10">
          <strong>
            <u>Examples de templates</u>
          </strong>
        </div>
        {documentTemplates?.map((documentTemplate) => (
          <DocumentTemplate
            key={documentTemplate.id}
            documentTemplate={documentTemplate}
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentTemplatesComponent;
