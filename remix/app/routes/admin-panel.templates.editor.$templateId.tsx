import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import type { TemplatesFetchTemplateResponseData } from "@/components/generated/models";
import DocumentTemplateEditor from "@/components/AdminPanelComponents/DocumentTemplates/DocumentTemplateEditor/DocumentTemplateEditor";
import { Alert, AlertDescription, AlertTitle } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface TemplatesContextInterface {
  template: TemplatesFetchTemplateResponseData["mainDb_documentTemplate"];
}
export async function loader({ params, request }: LoaderFunctionArgs) {
  const { templateId } = params;
  if (templateId === undefined || templateId === null) return null;
  try {
    const client = await createClientFromCookiesAndCheckUser(request);
    const { data, error } = await client.query({
      operationName: "templates/fetchTemplate",
      input: { id: templateId },
    });
    if (error) return null;
    return { template: data?.mainDb_documentTemplate };
  } catch (error) {
    return null;
  }
}
export default function Templates() {
  const { template } = useLoaderData<TemplatesContextInterface>();
  if (!template)
    return (
      <div className="w-1/2 mx-auto">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>
            Le template n'a pas pu être réccupéré
          </AlertDescription>
        </Alert>
      </div>
    );

  return <DocumentTemplateEditor template={template} />;
}
