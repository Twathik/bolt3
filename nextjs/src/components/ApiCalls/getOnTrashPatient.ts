import createWgClient from "@/lib/createClient";
import type { PatientsGetOnTrashPatientsResponseData } from "../wg-generated/models";

const getOnTrashPatients = async (): Promise<
  PatientsGetOnTrashPatientsResponseData["mainDb_patients"] | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "patients/getOnTrashPatients",
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_patients;
  } catch (error) {
    console.log({ error });
  }
};
export default getOnTrashPatients;
