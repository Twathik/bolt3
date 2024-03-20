"use server";
import createWgClient from "@/lib/createClient";
import type { mainDb_PatientDocumentTypeValues } from "../wg-generated/models";

const getDocumentHeaders = async ({
  patientId,
  patientDocumentType,
}: {
  patientId: string;
  patientDocumentType: mainDb_PatientDocumentTypeValues;
}): Promise<Boolean | undefined> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "patients/getDocumentHeaders",
      input: {
        patientId,
        patientDocumentType,
      },
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_getDocumentHeaders;
  } catch (error) {
    console.log({ error });
  }
};

export default getDocumentHeaders;
