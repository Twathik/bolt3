import type {
	ClientConfig,
	CreateClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
	OperationRequestOptions,
	SubscriptionRequestOptions,
	SubscriptionEventHandler,
	FetchUserRequestOptions,
	UploadValidationOptions,
	QueryRequestOptions,
	MutationRequestOptions,
	ClientOperationErrors,
	ExtractProfileName,
	ExtractMeta,
	GraphQLError,
} from "@wundergraph/sdk/client";
import { Client } from "@wundergraph/sdk/client";
import type { OperationErrors } from "./ts-operation-errors";

import type { PublicCustomClaims } from "./claims";
import type {
	CountriesResponse,
	CountriesInput,
	CountriesResponseData,
	DataTableGetDataTableConfigurationsResponse,
	DataTableGetDataTableConfigurationsInput,
	DataTableGetDataTableConfigurationsResponseData,
	DataTableInsertDataSubscriptionResponse,
	DataTableInsertDataSubscriptionInput,
	DataTableInsertDataSubscriptionResponseData,
	DataTableTriggerInsertDataSubscriptionResponse,
	DataTableTriggerInsertDataSubscriptionInput,
	DataTableTriggerInsertDataSubscriptionResponseData,
	DocumentTemplatesGetDocumentTemplatesResponse,
	DocumentTemplatesGetDocumentTemplatesResponseData,
	DocumentTemplatesGetDocumentTemplatesSettingsResponse,
	DocumentTemplatesGetDocumentTemplatesSettingsResponseData,
	DocumentTemplatesSaveDocumentTemplateSettingsResponse,
	DocumentTemplatesSaveDocumentTemplateSettingsInput,
	DocumentTemplatesSaveDocumentTemplateSettingsResponseData,
	DrugsIndexDrugsResponse,
	DrugsIndexDrugsResponseData,
	EconomizersCreateEconomizerResponse,
	EconomizersCreateEconomizerInput,
	EconomizersCreateEconomizerResponseData,
	EconomizersDeleteEconomizerResponse,
	EconomizersDeleteEconomizerInput,
	EconomizersDeleteEconomizerResponseData,
	EconomizersEconomizerTemplateResponse,
	EconomizersEconomizerTemplateInput,
	EconomizersEconomizerTemplateResponseData,
	EconomizersEconomizersResponse,
	EconomizersEconomizersInput,
	EconomizersEconomizersResponseData,
	EconomizersUpdateEconomizerResponse,
	EconomizersUpdateEconomizerInput,
	EconomizersUpdateEconomizerResponseData,
	ModalityGetOneModalityResponse,
	ModalityGetOneModalityInput,
	ModalityGetOneModalityResponseData,
	ModalityGetSpecificModalitiesResponse,
	ModalityGetSpecificModalitiesInput,
	ModalityGetSpecificModalitiesResponseData,
	ModalityModalitiesResponse,
	ModalityModalitiesResponseData,
	ModalitySwitchModalityResponse,
	ModalitySwitchModalityInput,
	ModalitySwitchModalityResponseData,
	ModalityUpdateOneModalityResponse,
	ModalityUpdateOneModalityInput,
	ModalityUpdateOneModalityResponseData,
	WorkingListsCreateOneWorkingListResponse,
	WorkingListsCreateOneWorkingListInput,
	WorkingListsCreateOneWorkingListResponseData,
	WorkingListsDeleteOneWorkingListResponse,
	WorkingListsDeleteOneWorkingListInput,
	WorkingListsDeleteOneWorkingListResponseData,
	WorkingListsLinkWorkingListResponse,
	WorkingListsLinkWorkingListInput,
	WorkingListsLinkWorkingListResponseData,
	WorkingListsPatientWorkingListsResponse,
	WorkingListsPatientWorkingListsInput,
	WorkingListsPatientWorkingListsResponseData,
	WorkingListsToggleLockWorkingListResponse,
	WorkingListsToggleLockWorkingListInput,
	WorkingListsToggleLockWorkingListResponseData,
	WorkingListsWorkingListsResponse,
	WorkingListsWorkingListsInput,
	WorkingListsWorkingListsResponseData,
	ClinicalDiagnosticsIndexClinicalDiagnosticResponse,
	ClinicalDiagnosticsIndexClinicalDiagnosticResponseData,
	ClinicalEventsCreateOneClinicalEventResponse,
	ClinicalEventsCreateOneClinicalEventInput,
	ClinicalEventsCreateOneClinicalEventResponseData,
	ClinicalEventsDeleteOneClinicalEventResponse,
	ClinicalEventsDeleteOneClinicalEventInput,
	ClinicalEventsDeleteOneClinicalEventResponseData,
	ClinicalEventsGetClinicalEventResponse,
	ClinicalEventsGetClinicalEventInput,
	ClinicalEventsGetClinicalEventResponseData,
	ClinicalEventsGetClinicalEventWithConfigurationResponse,
	ClinicalEventsGetClinicalEventWithConfigurationInput,
	ClinicalEventsGetClinicalEventWithConfigurationResponseData,
	ClinicalEventsGetClinicalEventsResponse,
	ClinicalEventsGetClinicalEventsInput,
	ClinicalEventsGetClinicalEventsResponseData,
	ConsultationListCheckIfRegistredResponse,
	ConsultationListCheckIfRegistredInput,
	ConsultationListCheckIfRegistredResponseData,
	ConsultationListCloseConsultationResponse,
	ConsultationListCloseConsultationInput,
	ConsultationListCloseConsultationResponseData,
	ConsultationListRegisterPatientResponse,
	ConsultationListRegisterPatientInput,
	ConsultationListRegisterPatientResponseData,
	ConsultationListTodayConsultationResponse,
	ConsultationListTodayConsultationInput,
	ConsultationListTodayConsultationResponseData,
	ConsultationListToggleActivePatientResponse,
	ConsultationListToggleActivePatientInput,
	ConsultationListToggleActivePatientResponseData,
	ConsultationListUnregisterPatientResponse,
	ConsultationListUnregisterPatientInput,
	ConsultationListUnregisterPatientResponseData,
	MobileDevicesMobileDevicesQueryResponse,
	MobileDevicesMobileDevicesQueryResponseData,
	MobileDevicesAddMobileDeviceMutationResponse,
	MobileDevicesAddMobileDeviceMutationInput,
	MobileDevicesAddMobileDeviceMutationResponseData,
	MobileDevicesRegisterOneMobileDeviceResponse,
	MobileDevicesRegisterOneMobileDeviceInput,
	MobileDevicesRegisterOneMobileDeviceResponseData,
	MobileDevicesRemoveMobileDeviceResponse,
	MobileDevicesRemoveMobileDeviceInput,
	MobileDevicesRemoveMobileDeviceResponseData,
	MobileDevicesResetMobileDeviceResponse,
	MobileDevicesResetMobileDeviceInput,
	MobileDevicesResetMobileDeviceResponseData,
	MobileDevicesSwitchMobileDeviceResponse,
	MobileDevicesSwitchMobileDeviceInput,
	MobileDevicesSwitchMobileDeviceResponseData,
	MobileDevicesUpdateMobileDeviceExpirationResponse,
	MobileDevicesUpdateMobileDeviceExpirationInput,
	MobileDevicesUpdateMobileDeviceExpirationResponseData,
	PatientsMovePatientFolderToTrashResponse,
	PatientsMovePatientFolderToTrashInput,
	PatientsMovePatientFolderToTrashResponseData,
	PatientsAdd_One_patient_to_indexResponse,
	PatientsAdd_One_patient_to_indexInput,
	PatientsAdd_One_patient_to_indexResponseData,
	PatientsGetDocumentHeadersResponse,
	PatientsGetDocumentHeadersInput,
	PatientsGetDocumentHeadersResponseData,
	PatientsGetOnTrashPatientsResponse,
	PatientsGetOnTrashPatientsResponseData,
	PatientsGetOnePatientResponse,
	PatientsGetOnePatientInput,
	PatientsGetOnePatientResponseData,
	PatientsGetOnePatientDocumentResponse,
	PatientsGetOnePatientDocumentInput,
	PatientsGetOnePatientDocumentResponseData,
	PatientsGetOnePatientInfoResponse,
	PatientsGetOnePatientInfoInput,
	PatientsGetOnePatientInfoResponseData,
	PatientsIndex_patientsResponse,
	PatientsIndex_patientsResponseData,
	PatientsToggleSelectedTrashPatientResponse,
	PatientsToggleSelectedTrashPatientInput,
	PatientsToggleSelectedTrashPatientResponseData,
	PatientsUpdateOnePatientResponse,
	PatientsUpdateOnePatientInput,
	PatientsUpdateOnePatientResponseData,
	UsersGetUserResponse,
	UsersGetUserResponseData,
	WorkingListsLinkExamResponse,
	WorkingListsLinkExamInput,
	WorkingListsLinkExamResponseData,
	WorkingListsRefreshLinkExamResponse,
	WorkingListsRefreshLinkExamInput,
	WorkingListsRefreshLinkExamResponseData,
	UsersGetResponse,
	UsersGetResponseData,
	UsersSubscribeResponse,
	UsersSubscribeInput,
	UsersSubscribeResponseData,
	UsersUpdateResponse,
	UsersUpdateInput,
	UsersUpdateResponseData,
} from "./models";
export type UserRole = "admin" | "user";

export const WUNDERGRAPH_S3_ENABLED = true;
export const WUNDERGRAPH_AUTH_ENABLED = true;

export interface UploadResponse {
	key: string;
}

export interface LocalMinioAvatarMetadata {
	uuid: string;
}

export interface LocalMinioGalleryMetadata {
	postId: string;
	position: number;
}

export interface LocalMinioDocumentTemplateMetadata {
	uuid: string;
	face: string;
}

type S3Providers = {
	localMinio: {
		hasProfiles: true;
		profiles: {
			avatar: LocalMinioAvatarMetadata;
			coverPicture: object;
			gallery: LocalMinioGalleryMetadata;
			documentTemplate: LocalMinioDocumentTemplateMetadata;
		};
	};
};

const S3UploadProviderData: { [provider: string]: { [profile: string]: UploadValidationOptions } } = {
	localMinio: {
		avatar: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 10485760,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/png", "image/jpeg"],
			allowedFileExtensions: ["png", "jpg"],
		},
		coverPicture: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 10485760,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/*"],
			allowedFileExtensions: ["png", "jpg"],
		},
		gallery: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: -1,
			maxAllowedFiles: -1,
		},
		documentTemplate: {
			requireAuthentication: true,
			maxAllowedUploadSizeBytes: 20971520,
			maxAllowedFiles: 1,
			allowedMimeTypes: ["image/png", "image/jpeg"],
			allowedFileExtensions: ["png", "jpg"],
		},
	},
};

export enum AuthProviderId {
	"kc" = "kc",
}

export interface AuthProvider {
	id: AuthProviderId;
	login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
	applicationHash: "d8215210",
	baseURL: "http://api.bolt3.local",
	sdkVersion: "0.181.5",
};

export const operationMetadata: OperationMetadata = {
	Countries: {
		requiresAuthentication: true,
	},
	"DataTable/getDataTableConfigurations": {
		requiresAuthentication: true,
	},
	"DataTable/insertDataSubscription": {
		requiresAuthentication: true,
	},
	"DataTable/triggerInsertDataSubscription": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/getDocumentTemplates": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/getDocumentTemplatesSettings": {
		requiresAuthentication: true,
	},
	"DocumentTemplates/saveDocumentTemplateSettings": {
		requiresAuthentication: true,
	},
	"Drugs/indexDrugs": {
		requiresAuthentication: true,
	},
	"Economizers/createEconomizer": {
		requiresAuthentication: true,
	},
	"Economizers/deleteEconomizer": {
		requiresAuthentication: true,
	},
	"Economizers/economizerTemplate": {
		requiresAuthentication: true,
	},
	"Economizers/economizers": {
		requiresAuthentication: true,
	},
	"Economizers/updateEconomizer": {
		requiresAuthentication: true,
	},
	"Modality/getOneModality": {
		requiresAuthentication: true,
	},
	"Modality/getSpecificModalities": {
		requiresAuthentication: true,
	},
	"Modality/modalities": {
		requiresAuthentication: true,
	},
	"Modality/switchModality": {
		requiresAuthentication: true,
	},
	"Modality/updateOneModality": {
		requiresAuthentication: true,
	},
	"WorkingLists/createOneWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/deleteOneWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/linkWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/patientWorkingLists": {
		requiresAuthentication: true,
	},
	"WorkingLists/toggleLockWorkingList": {
		requiresAuthentication: true,
	},
	"WorkingLists/workingLists": {
		requiresAuthentication: true,
	},
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		requiresAuthentication: true,
	},
	"clinicalEvents/createOneClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/deleteOneClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEventWithConfiguration": {
		requiresAuthentication: true,
	},
	"clinicalEvents/getClinicalEvents": {
		requiresAuthentication: true,
	},
	"consultationList/checkIfRegistred": {
		requiresAuthentication: true,
	},
	"consultationList/closeConsultation": {
		requiresAuthentication: true,
	},
	"consultationList/registerPatient": {
		requiresAuthentication: true,
	},
	"consultationList/todayConsultation": {
		requiresAuthentication: true,
	},
	"consultationList/toggleActivePatient": {
		requiresAuthentication: true,
	},
	"consultationList/unregisterPatient": {
		requiresAuthentication: true,
	},
	"mobileDevices/MobileDevicesQuery": {
		requiresAuthentication: true,
	},
	"mobileDevices/addMobileDeviceMutation": {
		requiresAuthentication: true,
	},
	"mobileDevices/registerOneMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/removeMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/resetMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/switchMobileDevice": {
		requiresAuthentication: true,
	},
	"mobileDevices/updateMobileDeviceExpiration": {
		requiresAuthentication: true,
	},
	"patients/MovePatientFolderToTrash": {
		requiresAuthentication: true,
	},
	"patients/add_One_patient_to_index": {
		requiresAuthentication: true,
	},
	"patients/getDocumentHeaders": {
		requiresAuthentication: true,
	},
	"patients/getOnTrashPatients": {
		requiresAuthentication: true,
	},
	"patients/getOnePatient": {
		requiresAuthentication: true,
	},
	"patients/getOnePatientDocument": {
		requiresAuthentication: true,
	},
	"patients/getOnePatientInfo": {
		requiresAuthentication: true,
	},
	"patients/index_patients": {
		requiresAuthentication: true,
	},
	"patients/toggleSelectedTrashPatient": {
		requiresAuthentication: true,
	},
	"patients/updateOnePatient": {
		requiresAuthentication: true,
	},
	"users/getUser": {
		requiresAuthentication: true,
	},
	"WorkingLists/linkExam": {
		requiresAuthentication: true,
	},
	"WorkingLists/refreshLinkExam": {
		requiresAuthentication: true,
	},
	"users/get": {
		requiresAuthentication: true,
	},
	"users/subscribe": {
		requiresAuthentication: true,
	},
	"users/update": {
		requiresAuthentication: true,
	},
};

export type PublicUser = User<UserRole, PublicCustomClaims>;

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations["queries"], string>,
		Input extends Operations["queries"][OperationName]["input"] = Operations["queries"][OperationName]["input"],
		Response extends Operations["queries"][OperationName]["response"] = Operations["queries"][OperationName]["response"]
	>(options: OperationName extends string ? QueryRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	mutate<
		OperationName extends Extract<keyof Operations["mutations"], string>,
		Input extends Operations["mutations"][OperationName]["input"] = Operations["mutations"][OperationName]["input"],
		Response extends Operations["mutations"][OperationName]["response"] = Operations["mutations"][OperationName]["response"]
	>(options: OperationName extends string ? MutationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Response["data"], Response["error"]>(options);
	}

	subscribe<
		OperationName extends Extract<keyof Operations["subscriptions"], string>,
		Input extends Operations["subscriptions"][OperationName]["input"] = Operations["subscriptions"][OperationName]["input"],
		Response extends Operations["subscriptions"][OperationName]["response"] = Operations["subscriptions"][OperationName]["response"]
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb?: SubscriptionEventHandler<Response["data"], Response["error"]>
	) {
		return super.subscribe<OperationRequestOptions, Response["data"], Response["error"]>(options, cb);
	}
	public async uploadFiles<
		ProviderName extends Extract<keyof S3Providers, string>,
		ProfileName extends ExtractProfileName<S3Providers[ProviderName]["profiles"]> = ExtractProfileName<
			S3Providers[ProviderName]["profiles"]
		>,
		Meta extends ExtractMeta<S3Providers[ProviderName]["profiles"], ProfileName> = ExtractMeta<
			S3Providers[ProviderName]["profiles"],
			ProfileName
		>
	>(config: UploadRequestOptions<ProviderName, ProfileName, Meta>) {
		const profile = config.profile ? S3UploadProviderData[config.provider][config.profile as string] : undefined;
		return super.uploadFiles(config, profile);
	}
	public login(authProviderID: Operations["authProvider"], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends PublicUser = PublicUser>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
	return new WunderGraphClient({
		...defaultClientConfig,
		...config,
		operationMetadata,
		csrfEnabled: true,
	});
};

export type Queries = {
	Countries: {
		input: CountriesInput;
		response: { data?: CountriesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DataTable/getDataTableConfigurations": {
		input: DataTableGetDataTableConfigurationsInput;
		response: { data?: DataTableGetDataTableConfigurationsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/getDocumentTemplates": {
		input?: undefined;
		response: { data?: DocumentTemplatesGetDocumentTemplatesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/getDocumentTemplatesSettings": {
		input?: undefined;
		response: { data?: DocumentTemplatesGetDocumentTemplatesSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/economizerTemplate": {
		input: EconomizersEconomizerTemplateInput;
		response: { data?: EconomizersEconomizerTemplateResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/economizers": {
		input: EconomizersEconomizersInput;
		response: { data?: EconomizersEconomizersResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/getOneModality": {
		input: ModalityGetOneModalityInput;
		response: { data?: ModalityGetOneModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/getSpecificModalities": {
		input: ModalityGetSpecificModalitiesInput;
		response: { data?: ModalityGetSpecificModalitiesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/modalities": {
		input?: undefined;
		response: { data?: ModalityModalitiesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/patientWorkingLists": {
		input: WorkingListsPatientWorkingListsInput;
		response: { data?: WorkingListsPatientWorkingListsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/workingLists": {
		input: WorkingListsWorkingListsInput;
		response: { data?: WorkingListsWorkingListsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEvent": {
		input: ClinicalEventsGetClinicalEventInput;
		response: { data?: ClinicalEventsGetClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEventWithConfiguration": {
		input: ClinicalEventsGetClinicalEventWithConfigurationInput;
		response: { data?: ClinicalEventsGetClinicalEventWithConfigurationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/getClinicalEvents": {
		input: ClinicalEventsGetClinicalEventsInput;
		response: { data?: ClinicalEventsGetClinicalEventsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/checkIfRegistred": {
		input: ConsultationListCheckIfRegistredInput;
		response: { data?: ConsultationListCheckIfRegistredResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/todayConsultation": {
		input: ConsultationListTodayConsultationInput;
		response: { data?: ConsultationListTodayConsultationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/MobileDevicesQuery": {
		input?: undefined;
		response: { data?: MobileDevicesMobileDevicesQueryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getDocumentHeaders": {
		input: PatientsGetDocumentHeadersInput;
		response: { data?: PatientsGetDocumentHeadersResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnTrashPatients": {
		input?: undefined;
		response: { data?: PatientsGetOnTrashPatientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatient": {
		input: PatientsGetOnePatientInput;
		response: { data?: PatientsGetOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatientDocument": {
		input: PatientsGetOnePatientDocumentInput;
		response: { data?: PatientsGetOnePatientDocumentResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/getOnePatientInfo": {
		input: PatientsGetOnePatientInfoInput;
		response: { data?: PatientsGetOnePatientInfoResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/getUser": {
		input?: undefined;
		response: { data?: UsersGetUserResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponseData; error?: OperationErrors["WorkingLists/linkExam"] };
		requiresAuthentication: true;
		liveQuery: boolean;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
		requiresAuthentication: true;
		liveQuery: boolean;
	};
};

export type Mutations = {
	"DataTable/triggerInsertDataSubscription": {
		input: DataTableTriggerInsertDataSubscriptionInput;
		response: { data?: DataTableTriggerInsertDataSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"DocumentTemplates/saveDocumentTemplateSettings": {
		input: DocumentTemplatesSaveDocumentTemplateSettingsInput;
		response: { data?: DocumentTemplatesSaveDocumentTemplateSettingsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Drugs/indexDrugs": {
		input?: undefined;
		response: { data?: DrugsIndexDrugsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/createEconomizer": {
		input: EconomizersCreateEconomizerInput;
		response: { data?: EconomizersCreateEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/deleteEconomizer": {
		input: EconomizersDeleteEconomizerInput;
		response: { data?: EconomizersDeleteEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Economizers/updateEconomizer": {
		input: EconomizersUpdateEconomizerInput;
		response: { data?: EconomizersUpdateEconomizerResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/switchModality": {
		input: ModalitySwitchModalityInput;
		response: { data?: ModalitySwitchModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"Modality/updateOneModality": {
		input: ModalityUpdateOneModalityInput;
		response: { data?: ModalityUpdateOneModalityResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/createOneWorkingList": {
		input: WorkingListsCreateOneWorkingListInput;
		response: { data?: WorkingListsCreateOneWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/deleteOneWorkingList": {
		input: WorkingListsDeleteOneWorkingListInput;
		response: { data?: WorkingListsDeleteOneWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/linkWorkingList": {
		input: WorkingListsLinkWorkingListInput;
		response: { data?: WorkingListsLinkWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/toggleLockWorkingList": {
		input: WorkingListsToggleLockWorkingListInput;
		response: { data?: WorkingListsToggleLockWorkingListResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		input?: undefined;
		response: { data?: ClinicalDiagnosticsIndexClinicalDiagnosticResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/createOneClinicalEvent": {
		input: ClinicalEventsCreateOneClinicalEventInput;
		response: { data?: ClinicalEventsCreateOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/deleteOneClinicalEvent": {
		input: ClinicalEventsDeleteOneClinicalEventInput;
		response: { data?: ClinicalEventsDeleteOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/closeConsultation": {
		input: ConsultationListCloseConsultationInput;
		response: { data?: ConsultationListCloseConsultationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/registerPatient": {
		input: ConsultationListRegisterPatientInput;
		response: { data?: ConsultationListRegisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/toggleActivePatient": {
		input: ConsultationListToggleActivePatientInput;
		response: { data?: ConsultationListToggleActivePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"consultationList/unregisterPatient": {
		input: ConsultationListUnregisterPatientInput;
		response: { data?: ConsultationListUnregisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/addMobileDeviceMutation": {
		input: MobileDevicesAddMobileDeviceMutationInput;
		response: { data?: MobileDevicesAddMobileDeviceMutationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/registerOneMobileDevice": {
		input: MobileDevicesRegisterOneMobileDeviceInput;
		response: { data?: MobileDevicesRegisterOneMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/removeMobileDevice": {
		input: MobileDevicesRemoveMobileDeviceInput;
		response: { data?: MobileDevicesRemoveMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/resetMobileDevice": {
		input: MobileDevicesResetMobileDeviceInput;
		response: { data?: MobileDevicesResetMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/switchMobileDevice": {
		input: MobileDevicesSwitchMobileDeviceInput;
		response: { data?: MobileDevicesSwitchMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"mobileDevices/updateMobileDeviceExpiration": {
		input: MobileDevicesUpdateMobileDeviceExpirationInput;
		response: { data?: MobileDevicesUpdateMobileDeviceExpirationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/MovePatientFolderToTrash": {
		input: PatientsMovePatientFolderToTrashInput;
		response: { data?: PatientsMovePatientFolderToTrashResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/add_One_patient_to_index": {
		input: PatientsAdd_One_patient_to_indexInput;
		response: { data?: PatientsAdd_One_patient_to_indexResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/index_patients": {
		input?: undefined;
		response: { data?: PatientsIndex_patientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/toggleSelectedTrashPatient": {
		input: PatientsToggleSelectedTrashPatientInput;
		response: { data?: PatientsToggleSelectedTrashPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"patients/updateOnePatient": {
		input: PatientsUpdateOnePatientInput;
		response: { data?: PatientsUpdateOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"WorkingLists/refreshLinkExam": {
		input: WorkingListsRefreshLinkExamInput;
		response: {
			data?: WorkingListsRefreshLinkExamResponseData;
			error?: OperationErrors["WorkingLists/refreshLinkExam"];
		};
		requiresAuthentication: true;
	};
	"users/update": {
		input: UsersUpdateInput;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
		requiresAuthentication: true;
	};
};

export type Subscriptions = {
	"DataTable/insertDataSubscription": {
		input: DataTableInsertDataSubscriptionInput;
		response: { data?: DataTableInsertDataSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"users/subscribe": {
		input: UsersSubscribeInput;
		response: { data?: UsersSubscribeResponseData; error?: OperationErrors["users/subscribe"] };
		requiresAuthentication: true;
	};
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
};

export type LiveQueries = {
	"WorkingLists/linkExam": {
		input: WorkingListsLinkExamInput;
		response: { data?: WorkingListsLinkExamResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: true;
	};
};

export interface Operations
	extends OperationsDefinition<
		Queries,
		Mutations,
		Subscriptions,
		LiveQueries,
		UserRole,
		S3Providers,
		keyof typeof AuthProviderId
	> {}
