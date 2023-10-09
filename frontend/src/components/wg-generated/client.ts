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
	PatientsAdd_One_patient_to_indexResponse,
	PatientsAdd_One_patient_to_indexInput,
	PatientsAdd_One_patient_to_indexResponseData,
	PatientsIndex_patientsResponse,
	PatientsIndex_patientsResponseData,
	PatientsSearchPatientsResponse,
	PatientsSearchPatientsInput,
	PatientsSearchPatientsResponseData,
	UsersGetResponse,
	UsersGetInput,
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
	"github" = "github",
	"kc" = "kc",
}

export interface AuthProvider {
	id: AuthProviderId;
	login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
	applicationHash: "2f9194ec",
	baseURL: "http://api.bolt3.local",
	sdkVersion: "0.178.1",
};

export const operationMetadata: OperationMetadata = {
	Countries: {
		requiresAuthentication: false,
	},
	"patients/add_One_patient_to_index": {
		requiresAuthentication: false,
	},
	"patients/index_patients": {
		requiresAuthentication: false,
	},
	"patients/searchPatients": {
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
	"patients/searchPatients": {
		input: PatientsSearchPatientsInput;
		response: { data?: PatientsSearchPatientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
	"users/get": {
		input: UsersGetInput;
		response: { data?: UsersGetResponseData; error?: OperationErrors["users/get"] };
		requiresAuthentication: false;
		liveQuery: boolean;
	};
};

export type Mutations = {
	"patients/add_One_patient_to_index": {
		input: PatientsAdd_One_patient_to_indexInput;
		response: { data?: PatientsAdd_One_patient_to_indexResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"patients/index_patients": {
		input?: undefined;
		response: { data?: PatientsIndex_patientsResponse["data"]; error?: ClientOperationErrors };
		requiresAuthentication: false;
	};
	"users/update": {
		input: UsersUpdateInput;
		response: { data?: UsersUpdateResponseData; error?: OperationErrors["users/update"] };
		requiresAuthentication: false;
	};
};

export type Subscriptions = {
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
	"patients/searchPatients": {
		input: PatientsSearchPatientsInput;
		response: { data?: PatientsSearchPatientsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input: UsersGetInput;
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
	"patients/searchPatients": {
		input: PatientsSearchPatientsInput;
		response: { data?: PatientsSearchPatientsResponse["data"]; error?: ClientOperationErrors };
		liveQuery: true;
		requiresAuthentication: false;
	};
	"users/get": {
		input: UsersGetInput;
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
