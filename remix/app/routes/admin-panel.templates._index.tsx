import type { LoaderFunctionArgs } from "@remix-run/node";
import { useOutletContext } from "@remix-run/react";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";
import DocumentTemplates from "@/components/AdminPanelComponents/DocumentTemplates/DocumentTemplates";
import type { TemplatesGetTemplatesResponseData } from "@/components/generated/models";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";

interface TemplatesContextInterface {
  templates: TemplatesGetTemplatesResponseData["mainDb_documentTemplates"];
}
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    await createClientFromCookiesAndCheckUser(request);
    return {};
  } catch (error) {
    return null;
  }
}
export default function Templates() {
  const loadedData = useOutletContext<TemplatesContextInterface>();
  if (!loadedData)
    return (
      <InitialLoadingError msg="La liste des templates n'a pas pu être réccupérée!" />
    );
  return <DocumentTemplates templates={loadedData.templates} />;
}
