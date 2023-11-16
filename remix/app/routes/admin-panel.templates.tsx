import { Alert, AlertTitle, AlertDescription } from "@/ui/components/ui/alert";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import createClientFromCookiesAndCheckUser from "@/lib/checkUser.server";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await createClientFromCookiesAndCheckUser(request);
    const { data, error } = await client.query({
      operationName: "templates/getTemplates",
    });
    if (error) return null;
    return { templates: data?.mainDb_documentTemplates };
  } catch (error) {
    return null;
  }
}
export default function Templates() {
  const loadedData = useLoaderData<typeof loader>();
  if (!loadedData)
    return (
      <div className="w-1/2 mx-auto">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>
            La liste des templates n'a pas pu être réccupérée
          </AlertDescription>
        </Alert>
      </div>
    );
  return <Outlet context={{ templates: loadedData.templates }} />;
}
