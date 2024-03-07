import createWgClient from "@/lib/createClient";
import type { ClinicalEventsGetClinicalEventsResponseData } from "../wg-generated/models";

const getPatientClinicalEvents = async ({
  patientId,
}: {
  patientId: string;
}): Promise<
  | ClinicalEventsGetClinicalEventsResponseData["mainDb_clinicalEvents"]
  | undefined
> => {
  try {
    const client = await createWgClient();
    const getMobileDevices = await client.query({
      operationName: "clinicalEvents/getClinicalEvents",
      input: { patientId },
    });
    if (getMobileDevices.error) throw getMobileDevices.error;
    if (!getMobileDevices.data) throw Error();
    return getMobileDevices.data.mainDb_clinicalEvents;
  } catch (error) {
    console.log({ error });
  }
};

export default getPatientClinicalEvents;
