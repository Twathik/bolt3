import React, { useCallback } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  PatientsAdd_One_patient_to_indexInput,
  mainDb_Sexe,
  PatientsAdd_One_patient_to_indexResponse,
} from "../../../../generated/models";
import useWundergraphStore from "../../../../lib/stores/wundergraphStore";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import { TextInput, Text, useTheme, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePickerInput } from "react-native-paper-dates";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation<any>();
  const {
    colors: { error, secondaryContainer, primary, secondary },
    dark,
  } = useTheme();

  const schema = z.object(
    {
      firstName: z.string({ required_error: "champ requis" }),
      lastName: z.string({ required_error: "champ requis" }),
      ddn: z.date({
        required_error: "champ requis",
        invalid_type_error: "Valeure non valide",
      }),
      sexe: z.enum(["Homme", "Femme"], {
        invalid_type_error: "Valeure non valide",
        required_error: "chmap requis!",
      }),
    },
    { required_error: "champ requis" }
  );
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const { appAxios } = useWundergraphStore();

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = useCallback(
    async (d) => {
      const { sexe, ddn, ...rest } = d;
      const data: PatientsAdd_One_patient_to_indexInput = {
        sexe: sexe === "Homme" ? mainDb_Sexe.M : mainDb_Sexe.F,
        ddn: ddn.toDateString(),
        ...rest,
      };
      try {
        const result =
          await appAxios.post<PatientsAdd_One_patient_to_indexResponse>(
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
        render={({ field: { onChange, onBlur, value } }) => (
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
        render={({ field: { onChange, onBlur, value } }) => (
          <SelectDropdown
            defaultButtonText="Sexe"
            buttonStyle={{
              display: "flex",
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: secondaryContainer,
              borderRadius: 20,
            }}
            buttonTextStyle={{
              color: primary,
            }}
            data={["Homme", "Femme"]}
            onSelect={(selectedItem, index) => {
              setValue("sexe", selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
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
        onPress={handleSubmit(onSubmit)}>
        Valider
      </Button>
    </SafeAreaView>
  );
}

export default AddPatientFormScreen;
