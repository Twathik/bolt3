import { useEffect } from "react";
import { format } from "date-fns";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { ConsultationListTodayConsultationResponseData } from "@/generated/models";
import { baseURL } from "@/lib/CONST";

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody: "La liste des consultations du jour n'a pas pu être réccupérée!",
    button: "fermer",
  });

function useConsultationListUpdater() {
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const setConsultationPatients = useMobileBoltStore(
    (s) => s.setConsultationPatients
  );

  useEffect(() => {
    const abortController = new AbortController();

    const fetchConsultationPatients = async () => {
      try {
        const response = await appAxios.get<{
          data: ConsultationListTodayConsultationResponseData;
        }>(`${baseURL}/operations/consultationList/todayConsultation`, {
          signal: abortController.signal,
          params: {
            consultationDate: format(new Date(), "dd-MM-yyyy"),
          },
        });

        if (response.status === 200) {
          const patients = response.data.data.mainDb_consultationLists;

          setConsultationPatients(
            patients.map((p) => ({
              ddn: p.patient.ddn,
              firstName: p.patient.firstName,
              lastName: p.patient.lastName,
              id: p.patientId,
              sexe: p.patient.sexe,
            }))
          );
          //setConsultationPatients(response.data.user as appUser);
        } else {
          throw new Error("Failed to fetch today consultation");
        }
        setAppSpinnerLoading(false);
      } catch (error) {
        errorNotification();
        if (abortController.signal.aborted) {
          console.log("aborted");
        }
        setAppSpinnerLoading(false);
      }
    };

    fetchConsultationPatients();
    return () => abortController.abort("Data fetching cancelled");
  }, [appAxios, setAppSpinnerLoading, errorNotification]);

  return null;
}

export default useConsultationListUpdater;
