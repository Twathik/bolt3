import React, { useCallback, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { TextInput, Text, useTheme, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePickerInput } from "react-native-paper-dates";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import {
  PatientsAdd_One_patient_to_indexInput,
  mainDb_Sexe,
} from "@/generated/models";
import { PatientSchema } from "./utils/PatientSchema";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";

const errorNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: "Erreur",
    textBody: "Le patient n'a pas été inscrit",
    button: "fermer",
  });
const SuccessNotification = () =>
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: "Success",
    textBody: "Le patient a été inscrit dans la base de données",
    button: "fermer",
  });

function AddPatientFormScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<BoltNavigationStackType>>();
  const {
    colors: { error, secondaryContainer, primary, secondary },
    dark,
  } = useTheme();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof PatientSchema>>({
    resolver: zodResolver(PatientSchema),
  });
  const appAxios = useMobileBoltStore((s) => s.appAxios);
  const [isFocus, setIsFocus] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof PatientSchema>> = useCallback(
    async (d) => {
      const { sexe, ddn, ...rest } = d;
      const data: PatientsAdd_One_patient_to_indexInput = {
        sexe: sexe === "Homme" ? mainDb_Sexe.M : mainDb_Sexe.F,
        ddn: ddn.toDateString(),
        ...rest,
      };
      try {
        const result = await appAxios.post(
          "/operations/patients/add_One_patient_to_index",
          data
        );

        if (result.status === 200) {
          navigation.navigate("Search");
        }
      } catch (error) {
        // console.error(error);
        errorNotification();
      }
    },
    []
  );
  return (
    <SafeAreaView className=" flex flex-col p-3">
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
        render={({ field: { onChange } }) => (
          <View className="mt-11 mb-11">
            <DatePickerInput
              locale="fr"
              label="Date de naissance"
              value={undefined}
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
      >
        Valider
      </Button>
    </SafeAreaView>
  );
}

export default AddPatientFormScreen;
