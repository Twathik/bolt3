import DocumentTemplatesComponent from "@/components/AdminPanelPage/DocumentTemplates/DocumentTemplatesComponent";
import getDocumentTemplates from "@/components/ApiCalls/getDocumentTemplates";
import React from "react";

async function DefaultDocumentTemplatePage() {
  const documentTemplates = await getDocumentTemplates();

  return (
    <DocumentTemplatesComponent
      documentTemplates={documentTemplates?.documents}
      settings={documentTemplates?.settings}
      settingsId={documentTemplates?.settingsId ?? ""}
    />
  );
}

export default DefaultDocumentTemplatePage;
