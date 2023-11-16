import type { TemplatesGetTemplatesResponseData } from "@/components/generated/models";
import Template from "./Template";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

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
          <ExclamationTriangleIcon className="h-4 w-4" />
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
