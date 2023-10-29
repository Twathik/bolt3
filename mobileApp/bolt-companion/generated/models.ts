// Code generated by wunderctl. DO NOT EDIT.

import type function_PatientsSearch_patients from "../../../wundergraph/.wundergraph/operations/patients/search_patients";
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

export interface mainDb_StringFilter {
	contains?: string;
	endsWith?: string;
	equals?: string;
	gt?: string;
	gte?: string;
	in?: string[];
	lt?: string;
	lte?: string;
	mode?: mainDb_QueryModeValues;
	not?: mainDb_NestedStringFilter;
	notIn?: string[];
	startsWith?: string;
}

export interface mainDb_NestedStringFilter {
	contains?: string;
	endsWith?: string;
	equals?: string;
	gt?: string;
	gte?: string;
	in?: string[];
	lt?: string;
	lte?: string;
	not?: mainDb_NestedStringFilter;
	notIn?: string[];
	startsWith?: string;
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

export const mainDb_QueryMode = {
	default: "default",
	insensitive: "insensitive",
} as const;

export type mainDb_QueryModeValues = (typeof mainDb_QueryMode)[keyof typeof mainDb_QueryMode];

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
	consultationId: string;
	patientId: string;
}

export interface GlobalCloseAllTabsMutationInput {
	message: string;
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

export interface PatientsMovePatientFolderToTrashInput {
	id: string;
	onTrash: boolean;
}

export interface PatientsAdd_One_patient_to_indexInput {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsEmptyTrashPatientInput {
	id: mainDb_StringFilter;
}

export interface PatientsGetOnePatientInput {
	patientId: string;
}

export interface PatientsGetUpdatedPatientSubscriptionInput {
	id: string;
}

export interface PatientsUpdateOnePatientInput {
	id: string;
	firstName: string;
	lastName: string;
	sexe: mainDb_SexeValues;
	ddn: string;
	address?: string;
	nTel?: string;
}

export type PatientsSearch_patientsInput = ExtractInput<typeof function_PatientsSearch_patients>;

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
	consultationId: string;
	patientId: string;
}

export interface GlobalCloseAllTabsMutationInputInternal {
	message: string;
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

export interface PatientsMovePatientFolderToTrashInputInternal {
	id: string;
	onTrash: boolean;
}

export interface PatientsAdd_One_patient_to_indexInputInternal {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsEmptyTrashPatientInputInternal {
	id: mainDb_StringFilter;
}

export interface PatientsGetOnePatientInputInternal {
	patientId: string;
}

export interface PatientsGetUpdatedPatientSubscriptionInputInternal {
	id: string;
}

export interface PatientsUpdateOnePatientInputInternal {
	id: string;
	firstName: string;
	lastName: string;
	sexe: mainDb_SexeValues;
	ddn: string;
	address?: string;
	nTel?: string;
}

export interface PatientsSearch_patientsInputInternal {
	query_string: string;
	limit_hits?: JSONValue;
	page?: JSONValue;
	per_page?: JSONValue;
	sexe?: JSONValue;
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
	consultationId: string;
	patientId: string;
}

export interface GlobalCloseAllTabsMutationInputInjected {
	message: string;
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

export interface PatientsMovePatientFolderToTrashInputInjected {
	id: string;
	onTrash: boolean;
}

export interface PatientsAdd_One_patient_to_indexInputInjected {
	firstName: string;
	lastName: string;
	ddn: string;
	sexe: mainDb_SexeValues;
}

export interface PatientsEmptyTrashPatientInputInjected {
	id: mainDb_StringFilter;
}

export interface PatientsGetOnePatientInputInjected {
	patientId: string;
}

export interface PatientsGetUpdatedPatientSubscriptionInputInjected {
	id: string;
}

export interface PatientsUpdateOnePatientInputInjected {
	id: string;
	firstName: string;
	lastName: string;
	sexe: mainDb_SexeValues;
	ddn: string;
	address?: string;
	nTel?: string;
}

export interface CountriesResponse {
	data?: CountriesResponseData;
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

export interface GlobalCloseAllTabsMutationResponse {
	data?: GlobalCloseAllTabsMutationResponseData;
	errors?: GraphQLError[];
}

export interface GlobalCloseAllTabsSubscriptionResponse {
	data?: GlobalCloseAllTabsSubscriptionResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesMobileDevicesQueryResponse {
	data?: MobileDevicesMobileDevicesQueryResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesAddMobileDeviceMutationResponse {
	data?: MobileDevicesAddMobileDeviceMutationResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesGetAllDevicesSubscriptionResponse {
	data?: MobileDevicesGetAllDevicesSubscriptionResponseData;
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

export interface MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponse {
	data?: MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponseData;
	errors?: GraphQLError[];
}

export interface MobileDevicesUpdateMobileDeviceExpirationResponse {
	data?: MobileDevicesUpdateMobileDeviceExpirationResponseData;
	errors?: GraphQLError[];
}

export interface PatientsMovePatientFolderToTrashResponse {
	data?: PatientsMovePatientFolderToTrashResponseData;
	errors?: GraphQLError[];
}

export interface PatientsAdd_One_patient_to_indexResponse {
	data?: PatientsAdd_One_patient_to_indexResponseData;
	errors?: GraphQLError[];
}

export interface PatientsEmptyTrashPatientResponse {
	data?: PatientsEmptyTrashPatientResponseData;
	errors?: GraphQLError[];
}

export interface PatientsGetOnTrashPatientsResponse {
	data?: PatientsGetOnTrashPatientsResponseData;
	errors?: GraphQLError[];
}

export interface PatientsGetOnePatientResponse {
	data?: PatientsGetOnePatientResponseData;
	errors?: GraphQLError[];
}

export interface PatientsGetUpdatedPatientSubscriptionResponse {
	data?: PatientsGetUpdatedPatientSubscriptionResponseData;
	errors?: GraphQLError[];
}

export interface PatientsIndex_patientsResponse {
	data?: PatientsIndex_patientsResponseData;
	errors?: GraphQLError[];
}

export interface PatientsOnTrashFoldersSubscriptionResponse {
	data?: PatientsOnTrashFoldersSubscriptionResponseData;
	errors?: GraphQLError[];
}

export interface PatientsUpdateOnePatientResponse {
	data?: PatientsUpdateOnePatientResponseData;
	errors?: GraphQLError[];
}

export interface PatientsSearch_patientsResponse {
	data?: PatientsSearch_patientsResponseData;
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

export interface GlobalCloseAllTabsMutationResponseData {
	mainDb_closeAllTabs: boolean;
}

export interface GlobalCloseAllTabsSubscriptionResponseData {
	mainDb_closeAllTabs: {
		message: string;
	};
}

export interface MobileDevicesMobileDevicesQueryResponseData {
	mainDb_mobileDevices: {
		id: string;
		accessToken: string;
		connected: boolean;
		expireAt: string;
		mobileDeviceType: "DOCTOR" | "SECRETARY";
		uuid: string;
	}[];
}

export interface MobileDevicesAddMobileDeviceMutationResponseData {
	mainDb_createOneMobileDevice: {
		id: string;
	};
}

export interface MobileDevicesGetAllDevicesSubscriptionResponseData {
	mainDb_getMobileDevicesList: {
		id: string;
		accessToken: string;
		connected: boolean;
		expireAt: string;
		mobileDeviceType: "DOCTOR" | "SECRETARY";
		uuid: string;
	}[];
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

export interface MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponseData {
	mainDb_triggerGetAllMobileDevicesSubscription: boolean;
}

export interface MobileDevicesUpdateMobileDeviceExpirationResponseData {
	mainDb_changeExpirationMobileDeviceResolver?: boolean;
}

export interface PatientsMovePatientFolderToTrashResponseData {
	mainDb_movePatientFolderToTrash?: {
		id: string;
	};
}

export interface PatientsAdd_One_patient_to_indexResponseData {
	mainDb_AddOnePatientToIndex: {
		id: string;
	};
}

export interface PatientsEmptyTrashPatientResponseData {
	mainDb_emptyTrashMutation: {
		count: number;
	};
}

export interface PatientsGetOnTrashPatientsResponseData {
	mainDb_patients: {
		id: string;
		patientFullName: string;
		sexe: "F" | "M";
		updated: string;
	}[];
}

export interface PatientsGetOnePatientResponseData {
	mainDb_getPatient?: {
		id: string;
		firstName: string;
		lastName: string;
		sexe: "F" | "M";
		ddn: string;
		deleted: boolean;
		onTrash: boolean;
		patientFullName: string;
		informationsConfirmed: boolean;
		nTel?: string;
	};
}

export interface PatientsGetUpdatedPatientSubscriptionResponseData {
	mainDb_getUpdatedPatient: {
		id: string;
		firstName: string;
		lastName: string;
		sexe: "F" | "M";
		ddn: string;
		deleted: boolean;
		onTrash: boolean;
		patientFullName: string;
		informationsConfirmed: boolean;
		nTel?: string;
	};
}

export interface PatientsIndex_patientsResponseData {
	mainDb_indexPatients?: boolean;
}

export interface PatientsOnTrashFoldersSubscriptionResponseData {
	mainDb_emptyTrashSubscription: {
		id: string;
		patientFullName: string;
		sexe: "F" | "M";
		updated: string;
	}[];
}

export interface PatientsUpdateOnePatientResponseData {
	mainDb_updateOnePatient?: {
		id: string;
	};
}

export type PatientsSearch_patientsResponseData = ExtractResponse<typeof function_PatientsSearch_patients>;

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
