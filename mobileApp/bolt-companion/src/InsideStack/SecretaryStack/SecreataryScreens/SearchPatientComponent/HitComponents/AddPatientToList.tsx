import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MainSearchPatientInterface } from "../utils/mainSearchPatientInterface";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import UnregisterPatient from "./UnregisterPatient";
import RegisterPatient from "./RegisterPatient";

function AddPatientToList({ id }: MainSearchPatientInterface) {
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const ConsultationPatients = useMobileBoltStore(
    (s) => s.consultationPatients
  );
  const [checkConsultation, setCheckConsultation] = useState(false);
  useEffect(() => {
    const check = ConsultationPatients.findIndex((p) => p.id === id);
    setCheckConsultation(check !== -1);
  }, [ConsultationPatients, setCheckConsultation]);
  /* useEffect(() => {
    const abortController = new AbortController();

    const checkPatient = async () => {
      try {
        const params: ConsultationListCheckIfRegistredInput = {
          consultationDate: format(new Date(), "dd-MM-yyyy"),
          patientId: id,
        };
        const result =
          await appAxios.get<ConsultationListCheckIfRegistredResponse>(
            "/operations/consultationList/checkIfRegistred",
            {
              signal: abortController.signal,
              params,
            }
          );

        if (result.status === 200) {
          setRegistered(Boolean(result.data.data?.mainDb_checkIfRegistered));
        }
        setLoading(false);
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("aborted");
        }
        // console.error(error);
        setLoading(false);
      }
    };

    checkPatient();

    return () => abortController.abort("Data fetching cancelled");
  }, []); */
  return (
    <View>
      {checkConsultation ? (
        <UnregisterPatient id={id} setRegistered={setRegistered} />
      ) : (
        <RegisterPatient id={id} setRegistered={setRegistered} />
      )}
    </View>
  );
}

export default AddPatientToList;
