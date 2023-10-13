// Code generated by wunderctl. DO NOT EDIT.

import type function_UsersGet from "../../../wundergraph/.wundergraph/operations/users/get";
import type function_UsersSubscribe from "../../../wundergraph/.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../../wundergraph/.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";
import type { OperationErrors } from "./ts-operation-errors";
import type { GraphQLError } from "@wundergraph/sdk/client";

export interface countries_CountryFilterInput {
	code?: countries_StringQueryOperatorInput;
	continent?: countries_StringQueryOperatorInput;
	currency?: countries_StringQueryOperatorInput;
	name?: countries_StringQueryOperatorInput;
}

export interface countries_StringQueryOperatorInput {
	eq?: string;
	in?: string[];
	ne?: string;
	nin?: string[];
	regex?: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export const mainDb_MobileDeviceType = {
	DOCTOR: "DOCTOR",
	SECRETARY: "SECRETARY",
} as const;

export type mainDb_MobileDeviceTypeValues = (typeof mainDb_MobileDeviceType)[keyof typeof mainDb_MobileDeviceType];

export const mainDb_Sexe = {
	F: "F",
	M: "M",
} as const;

export type mainDb_SexeValues = (typeof mainDb_Sexe)[keyof typeof mainDb_Sexe];

export interface CountriesInput {
	filter?: countries_CountryFilterInput;
}

export interface ConsultationListCheckIfRegistredInput {
	consultationId: string;
	patientId: string;
}

export interface ConsultationListRegisterPatientInput {
	patient_id: string;
}

export interface ConsultationListTodayConsultationInput {
	day: number;
	month: number;
	year: number;
}

export interface ConsultationListUnregisterPatientInput {
	id: string;
}

export interface MobileDevicesAddMobileDeviceMutationInput {
	uuid: string;
	accessToken: string;
	expireAt: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesRegisterOneMobileDeviceInput {
	accessToken: string;
	uuid: string;
}

export interface MobileDevicesRemoveMobileDeviceInput {
	id: string;
}

export interface MobileDevicesResetMobileDeviceInput {
	id: string;
	accessToken: string;
}

export interface MobileDevicesSwitchMobileDeviceInput {
	id: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesUpdateMobileDeviceExpirationInput {
	id: string;
	Months: number;
}

export interface PatientsAdd_One_patient_to_indexInput {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsSearchPatientsInput {
	query_string: string;
	sexe: mainDb_SexeValues;
}

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface CountriesInputInternal {
	filter?: countries_CountryFilterInput;
}

export interface ConsultationListCheckIfRegistredInputInternal {
	consultationId: string;
	patientId: string;
}

export interface ConsultationListRegisterPatientInputInternal {
	patient_id: string;
}

export interface ConsultationListTodayConsultationInputInternal {
	day: number;
	month: number;
	year: number;
}

export interface ConsultationListUnregisterPatientInputInternal {
	id: string;
}

export interface MobileDevicesAddMobileDeviceMutationInputInternal {
	uuid: string;
	accessToken: string;
	expireAt: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesRegisterOneMobileDeviceInputInternal {
	accessToken: string;
	uuid: string;
}

export interface MobileDevicesRemoveMobileDeviceInputInternal {
	id: string;
}

export interface MobileDevicesResetMobileDeviceInputInternal {
	id: string;
	accessToken: string;
}

export interface MobileDevicesSwitchMobileDeviceInputInternal {
	id: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesUpdateMobileDeviceExpirationInputInternal {
	id: string;
	Months: number;
}

export interface PatientsAdd_One_patient_to_indexInputInternal {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsSearchPatientsInputInternal {
	query_string: string;
	sexe: mainDb_SexeValues;
}

export interface UsersSubscribeInputInternal {
	id: string;
}

export interface UsersUpdateInputInternal {
	id: string;
	name: string;
	bio: string;
}

export interface CountriesInputInjected {
	filter?: countries_CountryFilterInput;
}

export interface ConsultationListCheckIfRegistredInputInjected {
	consultationId: string;
	patientId: string;
}

export interface ConsultationListRegisterPatientInputInjected {
	patient_id: string;
}

export interface ConsultationListTodayConsultationInputInjected {
	day: number;
	month: number;
	year: number;
}

export interface ConsultationListUnregisterPatientInputInjected {
	id: string;
}

export interface MobileDevicesAddMobileDeviceMutationInputInjected {
	uuid: string;
	accessToken: string;
	expireAt: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesRegisterOneMobileDeviceInputInjected {
	accessToken: string;
	uuid: string;
}

export interface MobileDevicesRemoveMobileDeviceInputInjected {
	id: string;
}

export interface MobileDevicesResetMobileDeviceInputInjected {
	id: string;
	accessToken: string;
}

export interface MobileDevicesSwitchMobileDeviceInputInjected {
	id: string;
	mobileDeviceType: mainDb_MobileDeviceTypeValues;
}

export interface MobileDevicesUpdateMobileDeviceExpirationInputInjected {
	id: string;
	Months: number;
}

export interface PatientsAdd_One_patient_to_indexInputInjected {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsSearchPatientsInputInjected {
	query_string: string;
	sexe: mainDb_SexeValues;
}

export interface CountriesResponse {
	data?: CountriesResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesQueryResponse {
	data?: MobileDevicesQueryResponseData;
	errors?: GraphQLError[];
}

export interface ConsultationListCheckIfRegistredResponse {
	data?: ConsultationListCheckIfRegistredResponseData;
	errors?: GraphQLError[];
}

export interface ConsultationListRegisterPatientResponse {
	data?: ConsultationListRegisterPatientResponseData;
	errors?: GraphQLError[];
}

export interface ConsultationListTodayConsultationResponse {
	data?: ConsultationListTodayConsultationResponseData;
	errors?: GraphQLError[];
}

export interface ConsultationListUnregisterPatientResponse {
	data?: ConsultationListUnregisterPatientResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesAddMobileDeviceMutationResponse {
	data?: MobileDevicesAddMobileDeviceMutationResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesRegisterOneMobileDeviceResponse {
	data?: MobileDevicesRegisterOneMobileDeviceResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesRemoveMobileDeviceResponse {
	data?: MobileDevicesRemoveMobileDeviceResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesResetMobileDeviceResponse {
	data?: MobileDevicesResetMobileDeviceResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesSwitchMobileDeviceResponse {
	data?: MobileDevicesSwitchMobileDeviceResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesUpdateMobileDeviceExpirationResponse {
	data?: MobileDevicesUpdateMobileDeviceExpirationResponseData;
	errors?: GraphQLError[];
}

export interface PatientsAdd_One_patient_to_indexResponse {
	data?: PatientsAdd_One_patient_to_indexResponseData;
	errors?: GraphQLError[];
}

export interface PatientsIndex_patientsResponse {
	data?: PatientsIndex_patientsResponseData;
	errors?: GraphQLError[];
}

export interface PatientsSearchPatientsResponse {
	data?: PatientsSearchPatientsResponseData;
	errors?: GraphQLError[];
}

export interface UsersGetResponse {
	data?: UsersGetResponseData;
	errors?: GraphQLError[];
}

export interface UsersSubscribeResponse {
	data?: UsersSubscribeResponseData;
	errors?: GraphQLError[];
}

export interface UsersUpdateResponse {
	data?: UsersUpdateResponseData;
	errors?: GraphQLError[];
}

export interface CountriesResponseData {
	countries_countries: {
		code: string;
		name: string;
		capital?: string;
	}[];
}

export interface MobileDevicesQueryResponseData {
	mainDb_mobileDevices: {
		id: string;
		accessToken: string;
		expireAt: string;
		mobileDeviceType: "DOCTOR" | "SECRETARY";
		connected: boolean;
	}[];
}

export interface ConsultationListCheckIfRegistredResponseData {
	mainDb_consultationList?: {
		id: string;
	};
}

export interface ConsultationListRegisterPatientResponseData {
	mainDb_registerPatient: string;
}

export interface ConsultationListTodayConsultationResponseData {
	mainDb_findFirstConsultation?: {
		id: string;
	};
}

export interface ConsultationListUnregisterPatientResponseData {
	mainDb_deleteOneConsultationList?: {
		id: string;
	};
}

export interface MobileDevicesAddMobileDeviceMutationResponseData {
	mainDb_createOneMobileDevice: {
		id: string;
	};
}

export interface MobileDevicesRegisterOneMobileDeviceResponseData {
	mainDb_registerOneMobileDevice?: {
		uuid: string;
	};
}

export interface MobileDevicesRemoveMobileDeviceResponseData {
	mainDb_deleteOneMobileDevice?: {
		id: string;
	};
}

export interface MobileDevicesResetMobileDeviceResponseData {
	mainDb_updateOneMobileDevice?: {
		id: string;
	};
}

export interface MobileDevicesSwitchMobileDeviceResponseData {
	mainDb_switchMobileDevice?: boolean;
}

export interface MobileDevicesUpdateMobileDeviceExpirationResponseData {
	mainDb_changeExpirationMobileDeviceResolver?: boolean;
}

export interface PatientsAdd_One_patient_to_indexResponseData {
	mainDb_AddOnePatientToIndex: {
		id: string;
	};
}

export interface PatientsIndex_patientsResponseData {
	mainDb_indexPatients?: boolean;
}

export interface PatientsSearchPatientsResponseData {
	mainDb_searchPatientResolver: {
		firstName: string;
		lastName: string;
		sexe: "F" | "M";
		formatted_ddn: string;
		id: string;
	}[];
}

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
