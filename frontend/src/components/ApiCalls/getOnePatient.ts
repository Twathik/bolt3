import createWgClient from "@/lib/createClient";
import type { PatientsGetOnePatientInfoResponseData } from "../wg-generated/models";

const getOnePatient = async ({
  patientId,
}: {
  patientId: string;
}): Promise<
  PatientsGetOnePatientInfoResponseData["mainDb_getPatient"] | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "patients/getOnePatientInfo",
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
