import React, { useCallback, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { z } from "zod";
import { PatientSchema } from "../SecretaryStack/SecreataryScreens/utils/PatientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConsultationPatient } from "@/lib/stores/mobileBoltStoresType";
import { getDate, getDay, getMonth, getYear, parseISO } from "date-fns";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import { PatientsUpdateOnePatientInput, mainDb_Sexe } from "@/generated/models";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import { Dropdown } from "react-native-element-dropdown";

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody: "Les donnees du patient n'ont pas ete modifiees",
    button: "fermer",
  });
const SuccessNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: "Success",
    textBody: "Les donnees du patient ont bien ete modifiees",
    button: "fermer",
  });

function EditPatientForm({ patient }: { patient: ConsultationPatient }) {
  const {
    colors: { error, secondary },
    dark,
  } = useTheme();

  const getParsedDate = useCallback(() => {
    const date = patient.ddn.split("-").map((d) => parseInt(d, 10));

    return new Date(date[0], date[1] - 1, date[2], 12, 0);
  }, [patient.ddn]);

  const {
    control,
    handleSubmit,

    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof PatientSchema>>({
    resolver: zodResolver(PatientSchema),
    defaultValues: {
      ddn: getParsedDate(),
      firstName: patient.firstName,
      lastName: patient.lastName,
      sexe: patient.sexe === "F" ? "Femme" : "Homme",
    },
  });
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const [isFocus, setIsFocus] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof PatientSchema>> = useCallback(
    async (d) => {
      const { sexe, ddn, ...rest } = d;
      const data: PatientsUpdateOnePatientInput = {
        id: patient.id,
        sexe: sexe === "Homme" ? mainDb_Sexe.M : mainDb_Sexe.F,
        ddn: ddn.toISOString(),
        ...rest,
      };
      try {
        const result = await appAxios.post(
          "/operations/patients/mobileUpdateOnePatient",
          data
        );

        if (result.status === 200) {
          SuccessNotification();
        }
      } catch (error) {
        errorNotification();
      }
    },
    []
  );

  return (
    <View className="m-10">
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="my-5"
            placeholder="Nom"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && (
        <Text style={{ color: error }}>{errors.lastName.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="my-5 "
            placeholder="Prénom"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && (
        <Text style={{ color: error }}>{errors.firstName.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className="mt-11 mb-11">
            <DatePickerInput
              locale="fr"
              label="Date de naissance"
              value={value}
              onChange={onChange}
              inputMode="start"
            />
          </View>
        )}
        name="ddn"
      />
      {errors.ddn && <Text style={{ color: error }}>{errors.ddn.message}</Text>}
      <Controller
        control={control}
        render={({ field: { value } }) => (
          <View style={{ backgroundColor: "white", padding: 16 }}>
            {value || isFocus ? (
              <Text
                style={[
                  {
                    position: "absolute",
                    backgroundColor: "white",
                    left: 22,
                    top: 8,
                    zIndex: 999,
                    paddingHorizontal: 8,
                    fontSize: 14,
                  },
                  isFocus && { color: "blue" },
                ]}
              >
                Dropdown label
              </Text>
            ) : null}
            <Dropdown
              style={[
                {
                  height: 50,
                  borderColor: "gray",
                  borderWidth: 0.5,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                },
                isFocus && { borderColor: "blue" },
              ]}
              placeholderStyle={{ fontSize: 16 }}
              selectedTextStyle={{ fontSize: 16 }}
              inputSearchStyle={{ height: 40, fontSize: 16 }}
              data={[
                { label: "Homme", value: "Home" },
                { label: "Femme", value: "Femme" },
              ]}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue("sexe", item.value as "Homme" | "Femme");
                setIsFocus(false);
              }}
            />
          </View>
        )}
        name="sexe"
      />
      {errors.sexe && (
        <Text style={{ color: error }}>{errors.sexe.message}</Text>
      )}

      <Button
        mode="elevated"
        icon="form-select"
        buttonColor={secondary}
        textColor={dark ? "#000" : "#fff"}
        onPress={handleSubmit(onSubmit)}
        className="m-8"
      >
        Valider
      </Button>
    </View>
  );
}

export default EditPatientForm;
