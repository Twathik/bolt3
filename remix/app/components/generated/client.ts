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
	DrugsIndexDrugsResponse,
	DrugsIndexDrugsResponseData,
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
	ClinicalEventsGetClinicalEventsResponse,
	ClinicalEventsGetClinicalEventsInput,
	ClinicalEventsGetClinicalEventsResponseData,
	ClinicalEventsMoveOnTrashClinicalEventResponse,
	ClinicalEventsMoveOnTrashClinicalEventInput,
	ClinicalEventsMoveOnTrashClinicalEventResponseData,
	ClinicalEventsUpdateClinicalEventReportResponse,
	ClinicalEventsUpdateClinicalEventReportInput,
	ClinicalEventsUpdateClinicalEventReportResponseData,
	ClinicalEventsUpdateClinicalEventsSubscriptionResponse,
	ClinicalEventsUpdateClinicalEventsSubscriptionInput,
	ClinicalEventsUpdateClinicalEventsSubscriptionResponseData,
	ConsultationListCheckIfRegistredResponse,
	ConsultationListCheckIfRegistredInput,
	ConsultationListCheckIfRegistredResponseData,
	ConsultationListRegisterPatientResponse,
	ConsultationListRegisterPatientInput,
	ConsultationListRegisterPatientResponseData,
	ConsultationListTodayConsultationResponse,
	ConsultationListTodayConsultationInput,
	ConsultationListTodayConsultationResponseData,
	ConsultationListUnregisterPatientResponse,
	ConsultationListUnregisterPatientInput,
	ConsultationListUnregisterPatientResponseData,
	GlobalCloseAllTabsMutationResponse,
	GlobalCloseAllTabsMutationInput,
	GlobalCloseAllTabsMutationResponseData,
	GlobalCloseAllTabsSubscriptionResponse,
	GlobalCloseAllTabsSubscriptionResponseData,
	MobileDevicesMobileDevicesQueryResponse,
	MobileDevicesMobileDevicesQueryResponseData,
	MobileDevicesAddMobileDeviceMutationResponse,
	MobileDevicesAddMobileDeviceMutationInput,
	MobileDevicesAddMobileDeviceMutationResponseData,
	MobileDevicesGetAllDevicesSubscriptionResponse,
	MobileDevicesGetAllDevicesSubscriptionResponseData,
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
	MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponse,
	MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponseData,
	MobileDevicesUpdateMobileDeviceExpirationResponse,
	MobileDevicesUpdateMobileDeviceExpirationInput,
	MobileDevicesUpdateMobileDeviceExpirationResponseData,
	PatientsMovePatientFolderToTrashResponse,
	PatientsMovePatientFolderToTrashInput,
	PatientsMovePatientFolderToTrashResponseData,
	PatientsAdd_One_patient_to_indexResponse,
	PatientsAdd_One_patient_to_indexInput,
	PatientsAdd_One_patient_to_indexResponseData,
	PatientsEmptyTrashResponse,
	PatientsEmptyTrashResponseData,
	PatientsGetOnTrashPatientsResponse,
	PatientsGetOnTrashPatientsResponseData,
	PatientsGetOnePatientResponse,
	PatientsGetOnePatientInput,
	PatientsGetOnePatientResponseData,
	PatientsGetUpdatedPatientSubscriptionResponse,
	PatientsGetUpdatedPatientSubscriptionInput,
	PatientsGetUpdatedPatientSubscriptionResponseData,
	PatientsIndex_patientsResponse,
	PatientsIndex_patientsResponseData,
	PatientsOnTrashFoldersSubscriptionResponse,
	PatientsOnTrashFoldersSubscriptionResponseData,
	PatientsToggleSelectedTrashPatientResponse,
	PatientsToggleSelectedTrashPatientInput,
	PatientsToggleSelectedTrashPatientResponseData,
	PatientsUpdateOnePatientResponse,
	PatientsUpdateOnePatientInput,
	PatientsUpdateOnePatientResponseData,
	TemplatesFetchTemplateResponse,
	TemplatesFetchTemplateInput,
	TemplatesFetchTemplateResponseData,
	TemplatesGetTemplatesResponse,
	TemplatesGetTemplatesResponseData,
	TemplatesUpdateTemplateResponse,
	TemplatesUpdateTemplateInput,
	TemplatesUpdateTemplateResponseData,
	AbbreviationsSearchAbreviationResponse,
	AbbreviationsSearchAbreviationInput,
	AbbreviationsSearchAbreviationResponseData,
	DrugsSearchDrugsResponse,
	DrugsSearchDrugsInput,
	DrugsSearchDrugsResponseData,
	ClinicalDiagnosticsSearchClinicalDiagnosticsResponse,
	ClinicalDiagnosticsSearchClinicalDiagnosticsInput,
	ClinicalDiagnosticsSearchClinicalDiagnosticsResponseData,
	PatientsSearch_patientsResponse,
	PatientsSearch_patientsInput,
	PatientsSearch_patientsResponseData,
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

type S3Providers = {
	localMinio: {
		hasProfiles: true;
		profiles: {
			avatar: LocalMinioAvatarMetadata;
			coverPicture: object;
			gallery: LocalMinioGalleryMetadata;
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
	applicationHash: "20db8a2f",
	baseURL: "http://api.bolt3.local",
	sdkVersion: "0.179.2",
};

export const operationMetadata: OperationMetadata = {
	Countries: {
		requiresAuthentication: false,
	},
	"Drugs/indexDrugs": {
		requiresAuthentication: false,
	},
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		requiresAuthentication: false,
	},
	"clinicalEvents/createOneClinicalEvent": {
		requiresAuthentication: true,
	},
	"clinicalEvents/deleteOneClinicalEvent": {
		requiresAuthentication: false,
	},
	"clinicalEvents/getClinicalEvent": {
		requiresAuthentication: false,
	},
	"clinicalEvents/getClinicalEvents": {
		requiresAuthentication: false,
	},
	"clinicalEvents/moveOnTrashClinicalEvent": {
		requiresAuthentication: false,
	},
	"clinicalEvents/updateClinicalEventReport": {
		requiresAuthentication: false,
	},
	"clinicalEvents/updateClinicalEventsSubscription": {
		requiresAuthentication: false,
	},
	"consultationList/checkIfRegistred": {
		requiresAuthentication: false,
	},
	"consultationList/registerPatient": {
		requiresAuthentication: false,
	},
	"consultationList/todayConsultation": {
		requiresAuthentication: false,
	},
	"consultationList/unregisterPatient": {
		requiresAuthentication: false,
	},
	"global/closeAllTabsMutation": {
		requiresAuthentication: false,
	},
	"global/closeAllTabsSubscription": {
		requiresAuthentication: false,
	},
	"mobileDevices/MobileDevicesQuery": {
		requiresAuthentication: false,
	},
	"mobileDevices/addMobileDeviceMutation": {
		requiresAuthentication: false,
	},
	"mobileDevices/getAllDevicesSubscription": {
		requiresAuthentication: false,
	},
	"mobileDevices/registerOneMobileDevice": {
		requiresAuthentication: false,
	},
	"mobileDevices/removeMobileDevice": {
		requiresAuthentication: false,
	},
	"mobileDevices/resetMobileDevice": {
		requiresAuthentication: false,
	},
	"mobileDevices/switchMobileDevice": {
		requiresAuthentication: false,
	},
	"mobileDevices/triggerGetAllMobileDevicesSubscription": {
		requiresAuthentication: false,
	},
	"mobileDevices/updateMobileDeviceExpiration": {
		requiresAuthentication: false,
	},
	"patients/MovePatientFolderToTrash": {
		requiresAuthentication: false,
	},
	"patients/add_One_patient_to_index": {
		requiresAuthentication: false,
	},
	"patients/emptyTrash": {
		requiresAuthentication: false,
	},
	"patients/getOnTrashPatients": {
		requiresAuthentication: false,
	},
	"patients/getOnePatient": {
		requiresAuthentication: false,
	},
	"patients/getUpdatedPatientSubscription": {
		requiresAuthentication: false,
	},
	"patients/index_patients": {
		requiresAuthentication: false,
	},
	"patients/onTrashFoldersSubscription": {
		requiresAuthentication: false,
	},
	"patients/toggleSelectedTrashPatient": {
		requiresAuthentication: false,
	},
	"patients/updateOnePatient": {
		requiresAuthentication: false,
	},
	"templates/fetchTemplate": {
		requiresAuthentication: false,
	},
	"templates/getTemplates": {
		requiresAuthentication: false,
	},
	"templates/updateTemplate": {
		requiresAuthentication: false,
	},
	"Abbreviations/searchAbreviation": {
		requiresAuthentication: false,
	},
	"Drugs/searchDrugs": {
		requiresAuthentication: false,
	},
	"clinicalDiagnostics/searchClinicalDiagnostics": {
		requiresAuthentication: false,
	},
	"patients/search_patients": {
		requiresAuthentication: false,
	},
	"users/get": {
		requiresAuthentication: false,
	},
	"users/subscribe": {
		requiresAuthentication: false,
	},
	"users/update": {
		requiresAuthentication: false,
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
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"clinicalEvents/getClinicalEvent": {
		input: ClinicalEventsGetClinicalEventInput;
		response: { data?: ClinicalEventsGetClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"clinicalEvents/getClinicalEvents": {
		input: ClinicalEventsGetClinicalEventsInput;
		response: { data?: ClinicalEventsGetClinicalEventsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"consultationList/checkIfRegistred": {
		input: ConsultationListCheckIfRegistredInput;
		response: { data?: ConsultationListCheckIfRegistredResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"consultationList/todayConsultation": {
		input: ConsultationListTodayConsultationInput;
		response: { data?: ConsultationListTodayConsultationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"mobileDevices/MobileDevicesQuery": {
		input?: undefined;
		response: { data?: MobileDevicesMobileDevicesQueryResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"patients/getOnTrashPatients": {
		input?: undefined;
		response: { data?: PatientsGetOnTrashPatientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"patients/getOnePatient": {
		input: PatientsGetOnePatientInput;
		response: { data?: PatientsGetOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"templates/fetchTemplate": {
		input: TemplatesFetchTemplateInput;
		response: { data?: TemplatesFetchTemplateResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"templates/getTemplates": {
		input?: undefined;
		response: { data?: TemplatesGetTemplatesResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
};

export type Mutations = {
	"Drugs/indexDrugs": {
		input?: undefined;
		response: { data?: DrugsIndexDrugsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"clinicalDiagnostics/indexClinicalDiagnostic": {
		input?: undefined;
		response: { data?: ClinicalDiagnosticsIndexClinicalDiagnosticResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"clinicalEvents/createOneClinicalEvent": {
		input: ClinicalEventsCreateOneClinicalEventInput;
		response: { data?: ClinicalEventsCreateOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: true;
	};
	"clinicalEvents/deleteOneClinicalEvent": {
		input: ClinicalEventsDeleteOneClinicalEventInput;
		response: { data?: ClinicalEventsDeleteOneClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"clinicalEvents/moveOnTrashClinicalEvent": {
		input: ClinicalEventsMoveOnTrashClinicalEventInput;
		response: { data?: ClinicalEventsMoveOnTrashClinicalEventResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"clinicalEvents/updateClinicalEventReport": {
		input: ClinicalEventsUpdateClinicalEventReportInput;
		response: { data?: ClinicalEventsUpdateClinicalEventReportResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"consultationList/registerPatient": {
		input: ConsultationListRegisterPatientInput;
		response: { data?: ConsultationListRegisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"consultationList/unregisterPatient": {
		input: ConsultationListUnregisterPatientInput;
		response: { data?: ConsultationListUnregisterPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"global/closeAllTabsMutation": {
		input: GlobalCloseAllTabsMutationInput;
		response: { data?: GlobalCloseAllTabsMutationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/addMobileDeviceMutation": {
		input: MobileDevicesAddMobileDeviceMutationInput;
		response: { data?: MobileDevicesAddMobileDeviceMutationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/registerOneMobileDevice": {
		input: MobileDevicesRegisterOneMobileDeviceInput;
		response: { data?: MobileDevicesRegisterOneMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/removeMobileDevice": {
		input: MobileDevicesRemoveMobileDeviceInput;
		response: { data?: MobileDevicesRemoveMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/resetMobileDevice": {
		input: MobileDevicesResetMobileDeviceInput;
		response: { data?: MobileDevicesResetMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/switchMobileDevice": {
		input: MobileDevicesSwitchMobileDeviceInput;
		response: { data?: MobileDevicesSwitchMobileDeviceResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/triggerGetAllMobileDevicesSubscription": {
		input?: undefined;
		response: {
			data?: MobileDevicesTriggerGetAllMobileDevicesSubscriptionResponse["data"];
			error?: ClientOperationErrors;
		};
		requiresAuthentication: false;
	};
	"mobileDevices/updateMobileDeviceExpiration": {
		input: MobileDevicesUpdateMobileDeviceExpirationInput;
		response: { data?: MobileDevicesUpdateMobileDeviceExpirationResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/MovePatientFolderToTrash": {
		input: PatientsMovePatientFolderToTrashInput;
		response: { data?: PatientsMovePatientFolderToTrashResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/add_One_patient_to_index": {
		input: PatientsAdd_One_patient_to_indexInput;
		response: { data?: PatientsAdd_One_patient_to_indexResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/emptyTrash": {
		input?: undefined;
		response: { data?: PatientsEmptyTrashResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/index_patients": {
		input?: undefined;
		response: { data?: PatientsIndex_patientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/toggleSelectedTrashPatient": {
		input: PatientsToggleSelectedTrashPatientInput;
		response: { data?: PatientsToggleSelectedTrashPatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/updateOnePatient": {
		input: PatientsUpdateOnePatientInput;
		response: { data?: PatientsUpdateOnePatientResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"templates/updateTemplate": {
		input: TemplatesUpdateTemplateInput;
		response: { data?: TemplatesUpdateTemplateResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"Abbreviations/searchAbreviation": {
		input: AbbreviationsSearchAbreviationInput;
		response: {
			data?: AbbreviationsSearchAbreviationResponseData;
			error?: OperationErrors["Abbreviations/searchAbreviation"];
		};
		requiresAuthentication: false;
	};
	"Drugs/searchDrugs": {
		input: DrugsSearchDrugsInput;
		response: { data?: DrugsSearchDrugsResponseData; error?: OperationErrors["Drugs/searchDrugs"] };
		requiresAuthentication: false;
	};
	"clinicalDiagnostics/searchClinicalDiagnostics": {
		input: ClinicalDiagnosticsSearchClinicalDiagnosticsInput;
		response: {
			data?: ClinicalDiagnosticsSearchClinicalDiagnosticsResponseData;
			error?: OperationErrors["clinicalDiagnostics/searchClinicalDiagnostics"];
		};
		requiresAuthentication: false;
	};
	"patients/search_patients": {
		input: PatientsSearch_patientsInput;
		response: { data?: PatientsSearch_patientsResponseData; error?: OperationErrors["patients/search_patients"] };
		requiresAuthentication: false;
	};
	"users/update": {
		input: UsersUpdateInput;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
		requiresAuthentication: false;
	};
};

export type Subscriptions = {
	"clinicalEvents/updateClinicalEventsSubscription": {
		input: ClinicalEventsUpdateClinicalEventsSubscriptionInput;
		response: { data?: ClinicalEventsUpdateClinicalEventsSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"global/closeAllTabsSubscription": {
		input?: undefined;
		response: { data?: GlobalCloseAllTabsSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"mobileDevices/getAllDevicesSubscription": {
		input?: undefined;
		response: { data?: MobileDevicesGetAllDevicesSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/getUpdatedPatientSubscription": {
		input: PatientsGetUpdatedPatientSubscriptionInput;
		response: { data?: PatientsGetUpdatedPatientSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/onTrashFoldersSubscription": {
		input?: undefined;
		response: { data?: PatientsOnTrashFoldersSubscriptionResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"users/subscribe": {
		input: UsersSubscribeInput;
		response: { data?: UsersSubscribeResponseData; error?: OperationErrors["users/subscribe"] };
		requiresAuthentication: false;
	};
	Countries: {
		input: CountriesInput;
		response: { data?: CountriesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"clinicalEvents/getClinicalEvent": {
		input: ClinicalEventsGetClinicalEventInput;
		response: { data?: ClinicalEventsGetClinicalEventResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"clinicalEvents/getClinicalEvents": {
		input: ClinicalEventsGetClinicalEventsInput;
		response: { data?: ClinicalEventsGetClinicalEventsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"consultationList/checkIfRegistred": {
		input: ConsultationListCheckIfRegistredInput;
		response: { data?: ConsultationListCheckIfRegistredResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"consultationList/todayConsultation": {
		input: ConsultationListTodayConsultationInput;
		response: { data?: ConsultationListTodayConsultationResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"mobileDevices/MobileDevicesQuery": {
		input?: undefined;
		response: { data?: MobileDevicesMobileDevicesQueryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"patients/getOnTrashPatients": {
		input?: undefined;
		response: { data?: PatientsGetOnTrashPatientsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"patients/getOnePatient": {
		input: PatientsGetOnePatientInput;
		response: { data?: PatientsGetOnePatientResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"templates/fetchTemplate": {
		input: TemplatesFetchTemplateInput;
		response: { data?: TemplatesFetchTemplateResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"templates/getTemplates": {
		input?: undefined;
		response: { data?: TemplatesGetTemplatesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
};

export type LiveQueries = {
	Countries: {
		input: CountriesInput;
		response: { data?: CountriesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"clinicalEvents/getClinicalEvent": {
		input: ClinicalEventsGetClinicalEventInput;
		response: { data?: ClinicalEventsGetClinicalEventResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"clinicalEvents/getClinicalEvents": {
		input: ClinicalEventsGetClinicalEventsInput;
		response: { data?: ClinicalEventsGetClinicalEventsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"consultationList/checkIfRegistred": {
		input: ConsultationListCheckIfRegistredInput;
		response: { data?: ConsultationListCheckIfRegistredResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"consultationList/todayConsultation": {
		input: ConsultationListTodayConsultationInput;
		response: { data?: ConsultationListTodayConsultationResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"mobileDevices/MobileDevicesQuery": {
		input?: undefined;
		response: { data?: MobileDevicesMobileDevicesQueryResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"patients/getOnTrashPatients": {
		input?: undefined;
		response: { data?: PatientsGetOnTrashPatientsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"patients/getOnePatient": {
		input: PatientsGetOnePatientInput;
		response: { data?: PatientsGetOnePatientResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"templates/fetchTemplate": {
		input: TemplatesFetchTemplateInput;
		response: { data?: TemplatesFetchTemplateResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"templates/getTemplates": {
		input?: undefined;
		response: { data?: TemplatesGetTemplatesResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input?: undefined;
		response: { data?: UsersGetResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
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
