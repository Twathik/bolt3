import ModalitiesIndex from "@/components/AdminPanelComponents/ModalitiesComponents/ModalitiesIndex";
import InitialLoadingError from "@/components/GeneralComponents/InitialLoadingError/InitialLoadingError";
import createClient from "@/lib/createClient";
import { useBoltStore } from "@/stores/boltStore";
import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const client = await createClient(request);
  try {
    const modalities = await client.query({
      operationName: "Modality/modalities",
    });
    if (!modalities) return null;
    return modalities.data?.mainDb_modalities;
  } catch (error) {
    if ((error as any).code === "NoUserError") throw redirect("/login");
    return null;
  }
}

export default function Modalities() {
  const data = useLoaderData<typeof loader>();
  const setModalities = useBoltStore((store) => store.setModalities);
  useEffect(() => {
    if (data) setModalities(data);
  }, [data, setModalities]);

  if (!data)
    return (
      <InitialLoadingError msg="La liste des appareils d'imagerie disponibles n'a pas pu être réccupérée!" />
    );
  return <ModalitiesIndex />;
}
