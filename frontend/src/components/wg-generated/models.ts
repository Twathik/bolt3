// Code generated by wunderctl. DO NOT EDIT.

import type function_UsersGet from "../../../.wundergraph/operations/users/get";
import type function_UsersSubscribe from "../../../.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../../.wundergraph/operations/users/update";
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

export const mainDb_Sexe = {
	F: "F",
	M: "M",
} as const;

export type mainDb_SexeValues = (typeof mainDb_Sexe)[keyof typeof mainDb_Sexe];

export interface CountriesInput {
	filter?: countries_CountryFilterInput;
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

export type UsersGetInput = ExtractInput<typeof function_UsersGet>;

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface CountriesInputInternal {
	filter?: countries_CountryFilterInput;
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

export interface UsersGetInputInternal {
	id: string;
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
