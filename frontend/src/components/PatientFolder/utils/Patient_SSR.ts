import { getPatientServerSide } from "./PatientServerSideRequests";
import { AppServerSideRequests } from "@/lib/ServerSideRequests";

export class PatientSSR extends AppServerSideRequests {
  async getPatient({ patientId }: { patientId: string }) {
    return await getPatientServerSide({
      axiosInstance: this.axiosInstance,
      patientId,
    });
  }
}
