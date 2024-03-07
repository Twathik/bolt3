import TrashTable from "@/components/AdminPanelComponents/TrashComponents/TrashTable";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const client = await createClient(request);
    const { data, error } = await client.query({
      operationName: "patients/getOnTrashPatients",
    });
    if (error) return null;
    return data?.mainDb_patients;
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}
export default function Trash() {
  const onTrash = useLoaderData<typeof loader>();
  if (!onTrash)
    return (
      <InitialLoadingError msg="La liste des dossier de la corbeille n'a pas pu être réccupérée" />
    );

  return <TrashTable onTrash={onTrash} />;
}
