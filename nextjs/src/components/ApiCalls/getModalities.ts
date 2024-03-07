import createWgClient from "@/lib/createClient";
import type { ModalityModalitiesResponseData } from "../wg-generated/models";

const getModalities = async (): Promise<
  ModalityModalitiesResponseData["mainDb_modalities"] | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "Modality/modalities",
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_modalities;
  } catch (error) {
    console.log({ error });
  }
};

export default getModalities;
