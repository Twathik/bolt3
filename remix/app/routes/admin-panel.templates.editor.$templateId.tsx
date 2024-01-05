import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { TemplatesFetchTemplateResponseData } from "@/components/generated/models";
import DocumentTemplateEditor from "@/components/AdminPanelComponents/DocumentTemplates/DocumentTemplateEditor/DocumentTemplateEditor";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";

interface TemplatesContextInterface {
  template: TemplatesFetchTemplateResponseData["mainDb_documentTemplate"];
}
export async function loader({ params, request }: LoaderFunctionArgs) {
  const { templateId } = params;
  if (templateId === undefined || templateId === null) return null;
  try {
    const client = await createClient(request);
    const { data, error } = await client.query({
      operationName: "templates/fetchTemplate",
      input: { id: templateId },
    });
    if (error) return null;
    return { template: data?.mainDb_documentTemplate };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}
export default function Templates() {
  const { template } = useLoaderData<TemplatesContextInterface>();

  if (!template)
    return <InitialLoadingError msg="Le template n'a pas pu être réccupéré" />;

  return <DocumentTemplateEditor template={template} />;
}
