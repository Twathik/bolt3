import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await createClient(request);
    const { data, error } = await client.query({
      operationName: "templates/getTemplates",
    });
    if (error) return null;
    return { templates: data?.mainDb_documentTemplates };
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}
export default function Templates() {
  const loadedData = useLoaderData<typeof loader>();
  if (!loadedData)
    return (
      <InitialLoadingError msg="La liste des templates n'a pas pu être réccupérée" />
    );

  return <Outlet context={{ templates: loadedData.templates }} />;
}
