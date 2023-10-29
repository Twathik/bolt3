import {
  PatientsGetOnTrashPatientsResponse,
  PatientsGetOnTrashPatientsResponseData,
} from "@/components/wg-generated/models";
import { apiBaseUrl } from "@/lib/apiBaseUrl";
import { AxiosInstance } from "axios";

export async function getOnTrashFolders({
  axiosInstance,
}: {
  axiosInstance: AxiosInstance;
}): Promise<
  PatientsGetOnTrashPatientsResponseData["mainDb_patients"] | undefined
> {
  try {
    const res = await axiosInstance.get<PatientsGetOnTrashPatientsResponse>(
      `${apiBaseUrl}/operations/patients/getOnTrashPatients`,
    );
    if (res.status !== 200) throw new Error("Patient not found");

    const patient = res.data.data?.mainDb_patients;

    return patient;
  } catch (error) {
    console.log({ error });
    throw Error("deleted patients list can not be retreived");
  }
}
