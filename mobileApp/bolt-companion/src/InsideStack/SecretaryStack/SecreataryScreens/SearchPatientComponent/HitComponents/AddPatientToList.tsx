import React, { useEffect, useState } from "react";
import useConsultationStore from "../../../../../../lib/stores/consultationStore";
import { View } from "react-native";
import UnregisterPatient from "./UnregisterPatient";
import RegisterPatient from "./RegisterPatient";
import { MainSearchPatientInterface } from "../utils/mainSearchPatientInterface";

import {
  ConsultationListCheckIfRegistredInput,
  ConsultationListCheckIfRegistredResponse,
} from "../../../../../../generated/models";
import useWundergraphStore from "../../../../../../lib/stores/wundergraphStore";

function AddPatientToList({ id }: MainSearchPatientInterface) {
  const { consultationId } = useConsultationStore();
  const [loading, setLoading] = useState(true);
  const [registered, setRegistered] = useState(false);
  const { appAxios } = useWundergraphStore();
  useEffect(() => {
    const abortController = new AbortController();
    if (consultationId) {
      const checkPatient = async () => {
        try {
          const params: ConsultationListCheckIfRegistredInput = {
            consultationId,
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
            setRegistered(
              Boolean(result.data.data?.mainDb_consultationList?.id)
            );
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
    } else {
      setLoading(false);
    }
    return () => abortController.abort("Data fetching cancelled");
  }, []);
  return (
    <View>
      {!loading && (
        <View>
          {registered ? (
            <UnregisterPatient id={id} setRegistered={setRegistered} />
          ) : (
            <RegisterPatient id={id} setRegistered={setRegistered} />
          )}
        </View>
      )}
    </View>
  );
}

export default AddPatientToList;
