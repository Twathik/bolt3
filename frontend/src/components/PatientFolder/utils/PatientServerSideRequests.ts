import {
  PatientsGetOnePatientResponse,
  PatientsGetOnePatientResponseData,
} from "@/components/wg-generated/models";
import { apiBaseUrl } from "@/lib/apiBaseUrl";
import { AxiosInstance } from "axios";

export async function getPatientServerSide({
  patientId,
  axiosInstance,
}: {
  patientId: string;
  axiosInstance: AxiosInstance;
}): Promise<PatientsGetOnePatientResponseData["mainDb_getPatient"] | null> {
  try {
    const res = await axiosInstance.get<PatientsGetOnePatientResponse>(
      `${apiBaseUrl}/operations/patients/getOnePatient`,
      { params: { patientId } },
    );
    if (res.status !== 200) throw new Error("Patient not found");

    const patient = res.data.data?.mainDb_getPatient;

    return patient;
  } catch (error) {
    // console.log({ error: error.message });
    return null;
  }
}
