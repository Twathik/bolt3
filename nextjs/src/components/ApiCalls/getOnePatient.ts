import createWgClient from "@/lib/createClient";
import type { PatientsGetOnePatientResponseData } from "../wg-generated/models";

const getOnePatient = async ({
  patientId,
}: {
  patientId: string;
}): Promise<
  PatientsGetOnePatientResponseData["mainDb_getPatient"] | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "patients/getOnePatient",
      input: { patientId },
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_getPatient;
  } catch (error) {
    console.log({ error });
  }
};

export default getOnePatient;
