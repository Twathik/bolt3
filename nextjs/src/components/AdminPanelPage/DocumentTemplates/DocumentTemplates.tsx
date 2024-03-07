/* eslint-disable react/no-unescaped-entities */
import Template from "./Template";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { TemplatesGetTemplatesResponseData } from "@/components/wg-generated/models";
import { FaExclamationTriangle } from "react-icons/fa";

function DocumentTemplates({
  templates,
}: {
  templates:
    | TemplatesGetTemplatesResponseData["mainDb_documentTemplates"]
    | undefined;
}) {
  if (!templates)
    return (
      <div className="w-1/2 mx-auto my-10">
        <Alert variant="destructive">
          <span className="h-4 w-4">
            <FaExclamationTriangle />
          </span>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Une erreur est survenue, la liste des templates de documents n'a pas
            pu être réccupérée
          </AlertDescription>
        </Alert>
      </div>
    );
  return (
    <ul>
      {templates.map((template) => (
        <Template key={template.id} template={template} />
      ))}
    </ul>
  );
}

export default DocumentTemplates;
