"use server";
import type { PatientsGetOnePatientResponseData } from "@/components/wg-generated/models";
import createWgClient from "@/lib/createClient";
import type { SecondaryDisplayInterface } from "@/lib/interfaces/GlobalSubscriptionInterfaces";

const sendPatientToSecondaryDisplay = async (
  patient: PatientsGetOnePatientResponseData["mainDb_getPatient"]
): Promise<void> => {
  try {
    const client = await createWgClient();

    if (patient) {
      const { clinicalData, documentData, ...rest } = patient;
      const appPayload: SecondaryDisplayInterface = {
        displayType: "patientView",
        payload: JSON.stringify(rest),
        id: "",
      };
      await client.mutate({
        operationName: "AppSubscription/triggerAppSubscription",
        input: {
          appType: "secondaryDisplay",
          appPayload: JSON.stringify(appPayload),
          global: false,
        },
      });
    }
  } catch (error) {
    console.log({ error });
  }
};

export default sendPatientToSecondaryDisplay;
