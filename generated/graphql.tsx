import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Date: any;
	DateTime: string;
	GenericScalar: any;
	JSONString: any;
	Metadata: any;
	PositiveDecimal: any;
	UUID: any;
	Upload: any;
	WeightScalar: any;
	_Any: any;
};

/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountAddressCreate = {
	readonly __typename?: 'AccountAddressCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance for which the address was created. */
	readonly user?: Maybe<User>;
};

/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressDelete = {
	readonly __typename?: 'AccountAddressDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance for which the address was deleted. */
	readonly user?: Maybe<User>;
};

/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
export type AccountAddressUpdate = {
	readonly __typename?: 'AccountAddressUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user object for which the address was edited. */
	readonly user?: Maybe<User>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountDelete = {
	readonly __typename?: 'AccountDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	readonly user?: Maybe<User>;
};

export type AccountError = {
	readonly __typename?: 'AccountError';
	/** A type of address that causes the error. */
	readonly addressType?: Maybe<AddressTypeEnum>;
	/** The error code. */
	readonly code: AccountErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AccountErrorCode {
	AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
	ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
	ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
	ChannelInactive = 'CHANNEL_INACTIVE',
	DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
	DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
	DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
	DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
	DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
	DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Inactive = 'INACTIVE',
	Invalid = 'INVALID',
	InvalidCredentials = 'INVALID_CREDENTIALS',
	InvalidPassword = 'INVALID_PASSWORD',
	JwtDecodeError = 'JWT_DECODE_ERROR',
	JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
	JwtInvalidToken = 'JWT_INVALID_TOKEN',
	JwtMissingToken = 'JWT_MISSING_TOKEN',
	JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
	LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
	MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
	NotFound = 'NOT_FOUND',
	OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
	OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
	OutOfScopeUser = 'OUT_OF_SCOPE_USER',
	PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
	PasswordTooCommon = 'PASSWORD_TOO_COMMON',
	PasswordTooShort = 'PASSWORD_TOO_SHORT',
	PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type AccountInput = {
	/** Billing address of the customer. */
	readonly defaultBillingAddress?: InputMaybe<AddressInput>;
	/** Shipping address of the customer. */
	readonly defaultShippingAddress?: InputMaybe<AddressInput>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User language code. */
	readonly languageCode?: InputMaybe<LanguageCodeEnum>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
};

/** Register a new user. */
export type AccountRegister = {
	readonly __typename?: 'AccountRegister';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** Informs whether users need to confirm their email address. */
	readonly requiresConfirmation?: Maybe<Scalars['Boolean']>;
	readonly user?: Maybe<User>;
};

export type AccountRegisterInput = {
	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** The email address of the user. */
	readonly email: Scalars['String'];
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User language code. */
	readonly languageCode?: InputMaybe<LanguageCodeEnum>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** User public metadata. */
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** Password. */
	readonly password: Scalars['String'];
	/** Base of frontend URL that will be needed to create confirmation URL. */
	readonly redirectUrl?: InputMaybe<Scalars['String']>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountRequestDeletion = {
	readonly __typename?: 'AccountRequestDeletion';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountSetDefaultAddress = {
	readonly __typename?: 'AccountSetDefaultAddress';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** An updated user instance. */
	readonly user?: Maybe<User>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type AccountUpdate = {
	readonly __typename?: 'AccountUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	readonly user?: Maybe<User>;
};

/** Represents user address data. */
export type Address = Node & {
	readonly __typename?: 'Address';
	readonly city: Scalars['String'];
	readonly cityArea: Scalars['String'];
	readonly companyName: Scalars['String'];
	/** Shop's default country. */
	readonly country: CountryDisplay;
	readonly countryArea: Scalars['String'];
	readonly firstName: Scalars['String'];
	readonly id: Scalars['ID'];
	/** Address is user's default billing address. */
	readonly isDefaultBillingAddress?: Maybe<Scalars['Boolean']>;
	/** Address is user's default shipping address. */
	readonly isDefaultShippingAddress?: Maybe<Scalars['Boolean']>;
	readonly lastName: Scalars['String'];
	readonly phone?: Maybe<Scalars['String']>;
	readonly postalCode: Scalars['String'];
	readonly streetAddress1: Scalars['String'];
	readonly streetAddress2: Scalars['String'];
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressCreate = {
	readonly __typename?: 'AddressCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance for which the address was created. */
	readonly user?: Maybe<User>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressDelete = {
	readonly __typename?: 'AddressDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance for which the address was deleted. */
	readonly user?: Maybe<User>;
};

export type AddressInput = {
	/** City. */
	readonly city?: InputMaybe<Scalars['String']>;
	/** District. */
	readonly cityArea?: InputMaybe<Scalars['String']>;
	/** Company or organization. */
	readonly companyName?: InputMaybe<Scalars['String']>;
	/** Country. */
	readonly country?: InputMaybe<CountryCode>;
	/** State or province. */
	readonly countryArea?: InputMaybe<Scalars['String']>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** Phone number. */
	readonly phone?: InputMaybe<Scalars['String']>;
	/** Postal code. */
	readonly postalCode?: InputMaybe<Scalars['String']>;
	/** Address. */
	readonly streetAddress1?: InputMaybe<Scalars['String']>;
	/** Address. */
	readonly streetAddress2?: InputMaybe<Scalars['String']>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressSetDefault = {
	readonly __typename?: 'AddressSetDefault';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** An updated user instance. */
	readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum AddressTypeEnum {
	Billing = 'BILLING',
	Shipping = 'SHIPPING',
}

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type AddressUpdate = {
	readonly __typename?: 'AddressUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly address?: Maybe<Address>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user object for which the address was edited. */
	readonly user?: Maybe<User>;
};

export type AddressValidationData = {
	readonly __typename?: 'AddressValidationData';
	readonly addressFormat: Scalars['String'];
	readonly addressLatinFormat: Scalars['String'];
	readonly allowedFields: ReadonlyArray<Scalars['String']>;
	readonly cityAreaChoices: ReadonlyArray<ChoiceValue>;
	readonly cityAreaType: Scalars['String'];
	readonly cityChoices: ReadonlyArray<ChoiceValue>;
	readonly cityType: Scalars['String'];
	readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
	readonly countryAreaType: Scalars['String'];
	readonly countryCode: Scalars['String'];
	readonly countryName: Scalars['String'];
	readonly postalCodeExamples: ReadonlyArray<Scalars['String']>;
	readonly postalCodeMatchers: ReadonlyArray<Scalars['String']>;
	readonly postalCodePrefix: Scalars['String'];
	readonly postalCodeType: Scalars['String'];
	readonly requiredFields: ReadonlyArray<Scalars['String']>;
	readonly upperFields: ReadonlyArray<Scalars['String']>;
};

/** Represents allocation. */
export type Allocation = Node & {
	readonly __typename?: 'Allocation';
	readonly id: Scalars['ID'];
	/**
	 * Quantity allocated for orders.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly quantity: Scalars['Int'];
	/**
	 * The warehouse were items were allocated.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly warehouse: Warehouse;
};

/** Represents app data. */
export type App = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'App';
		/** Description of this app. */
		readonly aboutApp?: Maybe<Scalars['String']>;
		/** JWT token used to authenticate by thridparty app. */
		readonly accessToken?: Maybe<Scalars['String']>;
		/** Url to iframe with the app. */
		readonly appUrl?: Maybe<Scalars['String']>;
		/** Url to iframe with the configuration for the app. */
		readonly configurationUrl?: Maybe<Scalars['String']>;
		/** The date and time when the app was created. */
		readonly created?: Maybe<Scalars['DateTime']>;
		/** Description of the data privacy defined for this app. */
		readonly dataPrivacy?: Maybe<Scalars['String']>;
		/** Url to details about the privacy policy on the app owner page. */
		readonly dataPrivacyUrl?: Maybe<Scalars['String']>;
		/**
		 * App's dashboard extensions.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly extensions: ReadonlyArray<AppExtension>;
		/** Homepage of the app. */
		readonly homepageUrl?: Maybe<Scalars['String']>;
		readonly id: Scalars['ID'];
		/** Determine if app will be set active or not. */
		readonly isActive?: Maybe<Scalars['Boolean']>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** Name of the app. */
		readonly name?: Maybe<Scalars['String']>;
		/** List of the app's permissions. */
		readonly permissions?: Maybe<ReadonlyArray<Permission>>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Support page for the app. */
		readonly supportUrl?: Maybe<Scalars['String']>;
		/**
		 * Last 4 characters of the tokens.
		 *
		 * Requires one of the following permissions: MANAGE_APPS, OWNER.
		 */
		readonly tokens?: Maybe<ReadonlyArray<AppToken>>;
		/** Type of the app. */
		readonly type?: Maybe<AppTypeEnum>;
		/** Version number of the app. */
		readonly version?: Maybe<Scalars['String']>;
		/**
		 * List of webhooks assigned to this app.
		 *
		 * Requires one of the following permissions: MANAGE_APPS, OWNER.
		 */
		readonly webhooks?: Maybe<ReadonlyArray<Webhook>>;
	};

/** Represents app data. */
export type AppMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents app data. */
export type AppMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents app data. */
export type AppPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents app data. */
export type AppPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppActivate = {
	readonly __typename?: 'AppActivate';
	readonly app?: Maybe<App>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
};

export type AppCountableConnection = {
	readonly __typename?: 'AppCountableConnection';
	readonly edges: ReadonlyArray<AppCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type AppCountableEdge = {
	readonly __typename?: 'AppCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: App;
};

/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppCreate = {
	readonly __typename?: 'AppCreate';
	readonly app?: Maybe<App>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	/** The newly created authentication token. */
	readonly authToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeactivate = {
	readonly __typename?: 'AppDeactivate';
	readonly app?: Maybe<App>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDelete = {
	readonly __typename?: 'AppDelete';
	readonly app?: Maybe<App>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppDeleteFailedInstallation = {
	readonly __typename?: 'AppDeleteFailedInstallation';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly appInstallation?: Maybe<AppInstallation>;
	readonly errors: ReadonlyArray<AppError>;
};

export type AppDeleted = Event & {
	readonly __typename?: 'AppDeleted';
	/**
	 * The application the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly app?: Maybe<App>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type AppError = {
	readonly __typename?: 'AppError';
	/** The error code. */
	readonly code: AppErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of permissions which causes the error. */
	readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
};

/** An enumeration. */
export enum AppErrorCode {
	Forbidden = 'FORBIDDEN',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
	InvalidPermission = 'INVALID_PERMISSION',
	InvalidStatus = 'INVALID_STATUS',
	InvalidUrlFormat = 'INVALID_URL_FORMAT',
	ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
	NotFound = 'NOT_FOUND',
	OutOfScopeApp = 'OUT_OF_SCOPE_APP',
	OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

/** Represents app data. */
export type AppExtension = Node & {
	readonly __typename?: 'AppExtension';
	/** JWT token used to authenticate by thridparty app extension. */
	readonly accessToken?: Maybe<Scalars['String']>;
	readonly app: App;
	readonly id: Scalars['ID'];
	/** Label of the extension to show in the dashboard. */
	readonly label: Scalars['String'];
	/** Place where given extension will be mounted. */
	readonly mount: AppExtensionMountEnum;
	/** List of the app extension's permissions. */
	readonly permissions: ReadonlyArray<Permission>;
	/** Type of way how app extension will be opened. */
	readonly target: AppExtensionTargetEnum;
	/** URL of a view where extension's iframe is placed. */
	readonly url: Scalars['String'];
};

export type AppExtensionCountableConnection = {
	readonly __typename?: 'AppExtensionCountableConnection';
	readonly edges: ReadonlyArray<AppExtensionCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type AppExtensionCountableEdge = {
	readonly __typename?: 'AppExtensionCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: AppExtension;
};

export type AppExtensionFilterInput = {
	readonly mount?: InputMaybe<ReadonlyArray<AppExtensionMountEnum>>;
	readonly target?: InputMaybe<AppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export enum AppExtensionMountEnum {
	NavigationCatalog = 'NAVIGATION_CATALOG',
	NavigationCustomers = 'NAVIGATION_CUSTOMERS',
	NavigationDiscounts = 'NAVIGATION_DISCOUNTS',
	NavigationOrders = 'NAVIGATION_ORDERS',
	NavigationPages = 'NAVIGATION_PAGES',
	NavigationTranslations = 'NAVIGATION_TRANSLATIONS',
	OrderDetailsMoreActions = 'ORDER_DETAILS_MORE_ACTIONS',
	OrderOverviewCreate = 'ORDER_OVERVIEW_CREATE',
	OrderOverviewMoreActions = 'ORDER_OVERVIEW_MORE_ACTIONS',
	ProductDetailsMoreActions = 'PRODUCT_DETAILS_MORE_ACTIONS',
	ProductOverviewCreate = 'PRODUCT_OVERVIEW_CREATE',
	ProductOverviewMoreActions = 'PRODUCT_OVERVIEW_MORE_ACTIONS',
}

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export enum AppExtensionTargetEnum {
	AppPage = 'APP_PAGE',
	Popup = 'POPUP',
}

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppFetchManifest = {
	readonly __typename?: 'AppFetchManifest';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
	readonly manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
	/** Name of the app. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of permission code names to assign to this app. */
	readonly permissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type AppInstall = {
	readonly __typename?: 'AppInstall';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly appInstallation?: Maybe<AppInstallation>;
	readonly errors: ReadonlyArray<AppError>;
};

export type AppInstallInput = {
	/** Determine if app will be set active or not. */
	readonly activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
	/** Name of the app to install. */
	readonly appName?: InputMaybe<Scalars['String']>;
	/** Url to app's manifest in JSON format. */
	readonly manifestUrl?: InputMaybe<Scalars['String']>;
	/** List of permission code names to assign to this app. */
	readonly permissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type AppInstallation = Job &
	Node & {
		readonly __typename?: 'AppInstallation';
		readonly appName: Scalars['String'];
		/** Created date time of job in ISO 8601 format. */
		readonly createdAt: Scalars['DateTime'];
		readonly id: Scalars['ID'];
		readonly manifestUrl: Scalars['String'];
		/** Job message. */
		readonly message?: Maybe<Scalars['String']>;
		/** Job status. */
		readonly status: JobStatusEnum;
		/** Date time of job last update in ISO 8601 format. */
		readonly updatedAt: Scalars['DateTime'];
	};

export type AppInstalled = Event & {
	readonly __typename?: 'AppInstalled';
	/**
	 * The application the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly app?: Maybe<App>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type AppManifestExtension = {
	readonly __typename?: 'AppManifestExtension';
	/** Label of the extension to show in the dashboard. */
	readonly label: Scalars['String'];
	/** Place where given extension will be mounted. */
	readonly mount: AppExtensionMountEnum;
	/** List of the app extension's permissions. */
	readonly permissions: ReadonlyArray<Permission>;
	/** Type of way how app extension will be opened. */
	readonly target: AppExtensionTargetEnum;
	/** URL of a view where extension's iframe is placed. */
	readonly url: Scalars['String'];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppRetryInstall = {
	readonly __typename?: 'AppRetryInstall';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly appInstallation?: Maybe<AppInstallation>;
	readonly errors: ReadonlyArray<AppError>;
};

export enum AppSortField {
	/** Sort apps by creation date. */
	CreationDate = 'CREATION_DATE',
	/** Sort apps by name. */
	Name = 'NAME',
}

export type AppSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort apps by the selected field. */
	readonly field: AppSortField;
};

export type AppStatusChanged = Event & {
	readonly __typename?: 'AppStatusChanged';
	/**
	 * The application the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly app?: Maybe<App>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Represents token data. */
export type AppToken = Node & {
	readonly __typename?: 'AppToken';
	/** Last 4 characters of the token. */
	readonly authToken?: Maybe<Scalars['String']>;
	readonly id: Scalars['ID'];
	/** Name of the authenticated token. */
	readonly name?: Maybe<Scalars['String']>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenCreate = {
	readonly __typename?: 'AppTokenCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly appToken?: Maybe<AppToken>;
	/** The newly created authentication token. */
	readonly authToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AppError>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppTokenDelete = {
	readonly __typename?: 'AppTokenDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly appToken?: Maybe<AppToken>;
	readonly errors: ReadonlyArray<AppError>;
};

export type AppTokenInput = {
	/** ID of app. */
	readonly app: Scalars['ID'];
	/** Name of the token. */
	readonly name?: InputMaybe<Scalars['String']>;
};

/** Verify provided app token. */
export type AppTokenVerify = {
	readonly __typename?: 'AppTokenVerify';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
	/** Determine if token is valid or not. */
	readonly valid: Scalars['Boolean'];
};

/** Enum determining type of your App. */
export enum AppTypeEnum {
	/** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
	Local = 'LOCAL',
	/** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
	Thirdparty = 'THIRDPARTY',
}

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type AppUpdate = {
	readonly __typename?: 'AppUpdate';
	readonly app?: Maybe<App>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly appErrors: ReadonlyArray<AppError>;
	readonly errors: ReadonlyArray<AppError>;
};

export type AppUpdated = Event & {
	readonly __typename?: 'AppUpdated';
	/**
	 * The application the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly app?: Maybe<App>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AreaUnitsEnum {
	SqCm = 'SQ_CM',
	SqFt = 'SQ_FT',
	SqInch = 'SQ_INCH',
	SqKm = 'SQ_KM',
	SqM = 'SQ_M',
	SqYd = 'SQ_YD',
}

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type AssignNavigation = {
	readonly __typename?: 'AssignNavigation';
	readonly errors: ReadonlyArray<MenuError>;
	/** Assigned navigation menu. */
	readonly menu?: Maybe<Menu>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type AssignedVariantAttribute = {
	readonly __typename?: 'AssignedVariantAttribute';
	/** Attribute assigned to variant. */
	readonly attribute: Attribute;
	/** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
	readonly variantSelection: Scalars['Boolean'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Attribute';
		/** Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly availableInGrid: Scalars['Boolean'];
		/** List of attribute's values. */
		readonly choices?: Maybe<AttributeValueCountableConnection>;
		/** The entity type which can be used as a reference. */
		readonly entityType?: Maybe<AttributeEntityTypeEnum>;
		/** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly filterableInDashboard: Scalars['Boolean'];
		/** Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly filterableInStorefront: Scalars['Boolean'];
		readonly id: Scalars['ID'];
		/** The input type to use for entering attribute values in the dashboard. */
		readonly inputType?: Maybe<AttributeInputTypeEnum>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** Name of an attribute displayed in the interface. */
		readonly name?: Maybe<Scalars['String']>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly productTypes: ProductTypeCountableConnection;
		readonly productVariantTypes: ProductTypeCountableConnection;
		/** Internal representation of an attribute name. */
		readonly slug?: Maybe<Scalars['String']>;
		/** The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly storefrontSearchPosition: Scalars['Int'];
		/** Returns translated attribute fields for the given language code. */
		readonly translation?: Maybe<AttributeTranslation>;
		/** The attribute type. */
		readonly type?: Maybe<AttributeTypeEnum>;
		/** The unit of attribute values. */
		readonly unit?: Maybe<MeasurementUnitsEnum>;
		/** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly valueRequired: Scalars['Boolean'];
		/** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
		readonly visibleInStorefront: Scalars['Boolean'];
		/** Flag indicating that attribute has predefined choices. */
		readonly withChoices: Scalars['Boolean'];
	};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AttributeValueFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<AttributeChoicesSortingInput>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldArgs = {
	key: Scalars['String'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeBulkDelete = {
	readonly __typename?: 'AttributeBulkDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<AttributeError>;
};

export enum AttributeChoicesSortField {
	/** Sort attribute choice by name. */
	Name = 'NAME',
	/** Sort attribute choice by slug. */
	Slug = 'SLUG',
}

export type AttributeChoicesSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort attribute choices by the selected field. */
	readonly field: AttributeChoicesSortField;
};

export type AttributeCountableConnection = {
	readonly __typename?: 'AttributeCountableConnection';
	readonly edges: ReadonlyArray<AttributeCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeCountableEdge = {
	readonly __typename?: 'AttributeCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Attribute;
};

/** Creates an attribute. */
export type AttributeCreate = {
	readonly __typename?: 'AttributeCreate';
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeCreateInput = {
	/** Whether the attribute can be displayed in the admin product list. */
	readonly availableInGrid?: InputMaybe<Scalars['Boolean']>;
	/** The entity type which can be used as a reference. */
	readonly entityType?: InputMaybe<AttributeEntityTypeEnum>;
	/** Whether the attribute can be filtered in dashboard. */
	readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
	/** Whether the attribute can be filtered in storefront. */
	readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
	/** The input type to use for entering attribute values in the dashboard. */
	readonly inputType?: InputMaybe<AttributeInputTypeEnum>;
	/** Whether the attribute is for variants only. */
	readonly isVariantOnly?: InputMaybe<Scalars['Boolean']>;
	/** Name of an attribute displayed in the interface. */
	readonly name: Scalars['String'];
	/** Internal representation of an attribute name. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** The position of the attribute in the storefront navigation (0 by default). */
	readonly storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
	/** The attribute type. */
	readonly type: AttributeTypeEnum;
	/** The unit of attribute values. */
	readonly unit?: InputMaybe<MeasurementUnitsEnum>;
	/** Whether the attribute requires values to be passed or not. */
	readonly valueRequired?: InputMaybe<Scalars['Boolean']>;
	/** List of attribute's values. */
	readonly values?: InputMaybe<ReadonlyArray<AttributeValueCreateInput>>;
	/** Whether the attribute should be visible or not in storefront. */
	readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeDelete = {
	readonly __typename?: 'AttributeDelete';
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly errors: ReadonlyArray<AttributeError>;
};

/** An enumeration. */
export enum AttributeEntityTypeEnum {
	Page = 'PAGE',
	Product = 'PRODUCT',
}

export type AttributeError = {
	readonly __typename?: 'AttributeError';
	/** The error code. */
	readonly code: AttributeErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum AttributeErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type AttributeFilterInput = {
	readonly availableInGrid?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Specifies the channel by which the data should be filtered.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
	readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly inCategory?: InputMaybe<Scalars['ID']>;
	readonly inCollection?: InputMaybe<Scalars['ID']>;
	readonly isVariantOnly?: InputMaybe<Scalars['Boolean']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly type?: InputMaybe<AttributeTypeEnum>;
	readonly valueRequired?: InputMaybe<Scalars['Boolean']>;
	readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

export type AttributeInput = {
	/** The boolean value of the attribute. */
	readonly boolean?: InputMaybe<Scalars['Boolean']>;
	/** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
	readonly date?: InputMaybe<DateRangeInput>;
	/** The date/time range that the returned values should be in. */
	readonly dateTime?: InputMaybe<DateTimeRangeInput>;
	/** Internal representation of an attribute name. */
	readonly slug: Scalars['String'];
	/** Internal representation of a value (unique per attribute). */
	readonly values?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/** The range that the returned values should be in. */
	readonly valuesRange?: InputMaybe<IntRangeInput>;
};

/** An enumeration. */
export enum AttributeInputTypeEnum {
	Boolean = 'BOOLEAN',
	Date = 'DATE',
	DateTime = 'DATE_TIME',
	Dropdown = 'DROPDOWN',
	File = 'FILE',
	Multiselect = 'MULTISELECT',
	Numeric = 'NUMERIC',
	Reference = 'REFERENCE',
	RichText = 'RICH_TEXT',
	Swatch = 'SWATCH',
}

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeReorderValues = {
	readonly __typename?: 'AttributeReorderValues';
	/** Attribute from which values are reordered. */
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export enum AttributeSortField {
	/** Sort attributes based on whether they can be displayed or not in a product grid. */
	AvailableInGrid = 'AVAILABLE_IN_GRID',
	/** Sort attributes by the filterable in dashboard flag */
	FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
	/** Sort attributes by the filterable in storefront flag */
	FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
	/** Sort attributes by the variant only flag */
	IsVariantOnly = 'IS_VARIANT_ONLY',
	/** Sort attributes by name */
	Name = 'NAME',
	/** Sort attributes by slug */
	Slug = 'SLUG',
	/** Sort attributes by their position in storefront */
	StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
	/** Sort attributes by the value required flag */
	ValueRequired = 'VALUE_REQUIRED',
	/** Sort attributes by visibility in the storefront */
	VisibleInStorefront = 'VISIBLE_IN_STOREFRONT',
}

export type AttributeSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort attributes by the selected field. */
	readonly field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
	readonly __typename?: 'AttributeTranslatableContent';
	/**
	 * Custom attribute of a product.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly attribute?: Maybe<Attribute>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/** Returns translated attribute fields for the given language code. */
	readonly translation?: Maybe<AttributeTranslation>;
};

export type AttributeTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeTranslate = {
	readonly __typename?: 'AttributeTranslate';
	readonly attribute?: Maybe<Attribute>;
	readonly errors: ReadonlyArray<TranslationError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type AttributeTranslation = Node & {
	readonly __typename?: 'AttributeTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name: Scalars['String'];
};

/** An enumeration. */
export enum AttributeTypeEnum {
	PageType = 'PAGE_TYPE',
	ProductType = 'PRODUCT_TYPE',
}

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeUpdate = {
	readonly __typename?: 'AttributeUpdate';
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeUpdateInput = {
	/** New values to be created for this attribute. */
	readonly addValues?: InputMaybe<ReadonlyArray<AttributeValueUpdateInput>>;
	/** Whether the attribute can be displayed in the admin product list. */
	readonly availableInGrid?: InputMaybe<Scalars['Boolean']>;
	/** Whether the attribute can be filtered in dashboard. */
	readonly filterableInDashboard?: InputMaybe<Scalars['Boolean']>;
	/** Whether the attribute can be filtered in storefront. */
	readonly filterableInStorefront?: InputMaybe<Scalars['Boolean']>;
	/** Whether the attribute is for variants only. */
	readonly isVariantOnly?: InputMaybe<Scalars['Boolean']>;
	/** Name of an attribute displayed in the interface. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** IDs of values to be removed from this attribute. */
	readonly removeValues?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Internal representation of an attribute name. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** The position of the attribute in the storefront navigation (0 by default). */
	readonly storefrontSearchPosition?: InputMaybe<Scalars['Int']>;
	/** The unit of attribute values. */
	readonly unit?: InputMaybe<MeasurementUnitsEnum>;
	/** Whether the attribute requires values to be passed or not. */
	readonly valueRequired?: InputMaybe<Scalars['Boolean']>;
	/** Whether the attribute should be visible or not in storefront. */
	readonly visibleInStorefront?: InputMaybe<Scalars['Boolean']>;
};

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
	readonly __typename?: 'AttributeValue';
	/** Represents the boolean value of the attribute value. */
	readonly boolean?: Maybe<Scalars['Boolean']>;
	/** Represents the date value of the attribute value. */
	readonly date?: Maybe<Scalars['Date']>;
	/** Represents the date/time value of the attribute value. */
	readonly dateTime?: Maybe<Scalars['DateTime']>;
	/** Represents file URL and content type (if attribute value is a file). */
	readonly file?: Maybe<File>;
	readonly id: Scalars['ID'];
	/** The input type to use for entering attribute values in the dashboard. */
	readonly inputType?: Maybe<AttributeInputTypeEnum>;
	/** Name of a value displayed in the interface. */
	readonly name?: Maybe<Scalars['String']>;
	/** The ID of the attribute reference. */
	readonly reference?: Maybe<Scalars['ID']>;
	/**
	 * Represents the text of the attribute value, includes formatting.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: Maybe<Scalars['JSONString']>;
	/** Internal representation of a value (unique per attribute). */
	readonly slug?: Maybe<Scalars['String']>;
	/** Returns translated attribute value fields for the given language code. */
	readonly translation?: Maybe<AttributeValueTranslation>;
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	readonly value?: Maybe<Scalars['String']>;
};

/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueBulkDelete = {
	readonly __typename?: 'AttributeValueBulkDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueCountableConnection = {
	readonly __typename?: 'AttributeValueCountableConnection';
	readonly edges: ReadonlyArray<AttributeValueCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type AttributeValueCountableEdge = {
	readonly __typename?: 'AttributeValueCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: AttributeValue;
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type AttributeValueCreate = {
	readonly __typename?: 'AttributeValueCreate';
	/** The updated attribute. */
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly attributeValue?: Maybe<AttributeValue>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueCreateInput = {
	/** File content type. */
	readonly contentType?: InputMaybe<Scalars['String']>;
	/** URL of the file attribute. Every time, a new value is created. */
	readonly fileUrl?: InputMaybe<Scalars['String']>;
	/** Name of a value displayed in the interface. */
	readonly name: Scalars['String'];
	/**
	 * Represents the text of the attribute value, includes formatting.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: InputMaybe<Scalars['JSONString']>;
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	readonly value?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueDelete = {
	readonly __typename?: 'AttributeValueDelete';
	/** The updated attribute. */
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly attributeValue?: Maybe<AttributeValue>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueFilterInput = {
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type AttributeValueInput = {
	/** Represents the boolean value of the attribute value. */
	readonly boolean?: InputMaybe<Scalars['Boolean']>;
	/** File content type. */
	readonly contentType?: InputMaybe<Scalars['String']>;
	/** Represents the date value of the attribute value. */
	readonly date?: InputMaybe<Scalars['Date']>;
	/** Represents the date/time value of the attribute value. */
	readonly dateTime?: InputMaybe<Scalars['DateTime']>;
	/** URL of the file attribute. Every time, a new value is created. */
	readonly file?: InputMaybe<Scalars['String']>;
	/** ID of the selected attribute. */
	readonly id?: InputMaybe<Scalars['ID']>;
	/** List of entity IDs that will be used as references. */
	readonly references?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Text content in JSON format. */
	readonly richText?: InputMaybe<Scalars['JSONString']>;
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	readonly values?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type AttributeValueTranslatableContent = Node & {
	readonly __typename?: 'AttributeValueTranslatableContent';
	/**
	 * Represents a value of an attribute.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly attributeValue?: Maybe<AttributeValue>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/**
	 * Attribute value.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: Maybe<Scalars['JSONString']>;
	/** Returns translated attribute value fields for the given language code. */
	readonly translation?: Maybe<AttributeValueTranslation>;
};

export type AttributeValueTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type AttributeValueTranslate = {
	readonly __typename?: 'AttributeValueTranslate';
	readonly attributeValue?: Maybe<AttributeValue>;
	readonly errors: ReadonlyArray<TranslationError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type AttributeValueTranslation = Node & {
	readonly __typename?: 'AttributeValueTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name: Scalars['String'];
	/**
	 * Attribute value.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: Maybe<Scalars['JSONString']>;
};

export type AttributeValueTranslationInput = {
	readonly name?: InputMaybe<Scalars['String']>;
	/**
	 * Translated text.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: InputMaybe<Scalars['JSONString']>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type AttributeValueUpdate = {
	readonly __typename?: 'AttributeValueUpdate';
	/** The updated attribute. */
	readonly attribute?: Maybe<Attribute>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly attributeErrors: ReadonlyArray<AttributeError>;
	readonly attributeValue?: Maybe<AttributeValue>;
	readonly errors: ReadonlyArray<AttributeError>;
};

export type AttributeValueUpdateInput = {
	/** File content type. */
	readonly contentType?: InputMaybe<Scalars['String']>;
	/** URL of the file attribute. Every time, a new value is created. */
	readonly fileUrl?: InputMaybe<Scalars['String']>;
	/** Name of a value displayed in the interface. */
	readonly name?: InputMaybe<Scalars['String']>;
	/**
	 * Represents the text of the attribute value, includes formatting.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly richText?: InputMaybe<Scalars['JSONString']>;
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	readonly value?: InputMaybe<Scalars['String']>;
};

export type BulkAttributeValueInput = {
	/** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
	readonly boolean?: InputMaybe<Scalars['Boolean']>;
	/** ID of the selected attribute. */
	readonly id?: InputMaybe<Scalars['ID']>;
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	readonly values?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type BulkProductError = {
	readonly __typename?: 'BulkProductError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of channel IDs which causes the error. */
	readonly channels?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ProductErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** Index of an input list item that caused the error. */
	readonly index?: Maybe<Scalars['Int']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of warehouse IDs which causes the error. */
	readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

export type BulkStockError = {
	readonly __typename?: 'BulkStockError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ProductErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** Index of an input list item that caused the error. */
	readonly index?: Maybe<Scalars['Int']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

export type CardInput = {
	/** Payment method nonce, a token returned by the appropriate provider's SDK. */
	readonly code: Scalars['String'];
	/** Card security code. */
	readonly cvc?: InputMaybe<Scalars['String']>;
	/** Information about currency and amount. */
	readonly money: MoneyInput;
};

export type CatalogueInput = {
	/** Categories related to the discount. */
	readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Collections related to the discount. */
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Products related to the discount. */
	readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Product variant related to the discount.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Category';
		/** List of ancestors of the category. */
		readonly ancestors?: Maybe<CategoryCountableConnection>;
		readonly backgroundImage?: Maybe<Image>;
		/** List of children of the category. */
		readonly children?: Maybe<CategoryCountableConnection>;
		/**
		 * Description of the category.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly description?: Maybe<Scalars['JSONString']>;
		/**
		 * Description of the category.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
		 */
		readonly descriptionJson?: Maybe<Scalars['JSONString']>;
		readonly id: Scalars['ID'];
		readonly level: Scalars['Int'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		readonly parent?: Maybe<Category>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
		readonly products?: Maybe<ProductCountableConnection>;
		readonly seoDescription?: Maybe<Scalars['String']>;
		readonly seoTitle?: Maybe<Scalars['String']>;
		readonly slug: Scalars['String'];
		/** Returns translated category fields for the given language code. */
		readonly translation?: Maybe<CategoryTranslation>;
	};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryBulkDelete = {
	readonly __typename?: 'CategoryBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type CategoryCountableConnection = {
	readonly __typename?: 'CategoryCountableConnection';
	readonly edges: ReadonlyArray<CategoryCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryCountableEdge = {
	readonly __typename?: 'CategoryCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Category;
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryCreate = {
	readonly __typename?: 'CategoryCreate';
	readonly category?: Maybe<Category>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type CategoryCreated = Event & {
	readonly __typename?: 'CategoryCreated';
	/**
	 * The category the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryDelete = {
	readonly __typename?: 'CategoryDelete';
	readonly category?: Maybe<Category>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type CategoryDeleted = Event & {
	readonly __typename?: 'CategoryDeleted';
	/**
	 * The category the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type CategoryFilterInput = {
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type CategoryInput = {
	/** Background image file. */
	readonly backgroundImage?: InputMaybe<Scalars['Upload']>;
	/** Alt text for a product media. */
	readonly backgroundImageAlt?: InputMaybe<Scalars['String']>;
	/**
	 * Category description.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Category name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Category slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export enum CategorySortField {
	/** Sort categories by name. */
	Name = 'NAME',
	/** Sort categories by product count. */
	ProductCount = 'PRODUCT_COUNT',
	/** Sort categories by subcategory count. */
	SubcategoryCount = 'SUBCATEGORY_COUNT',
}

export type CategorySortingInput = {
	/**
	 * Specifies the channel in which to sort the data.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort categories by the selected field. */
	readonly field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
	readonly __typename?: 'CategoryTranslatableContent';
	/**
	 * Represents a single category of products.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly category?: Maybe<Category>;
	/**
	 * Description of the category.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Description of the category.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
	/** Returns translated category fields for the given language code. */
	readonly translation?: Maybe<CategoryTranslation>;
};

export type CategoryTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CategoryTranslate = {
	readonly __typename?: 'CategoryTranslate';
	readonly category?: Maybe<Category>;
	readonly errors: ReadonlyArray<TranslationError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type CategoryTranslation = Node & {
	readonly __typename?: 'CategoryTranslation';
	/**
	 * Translated description of the category.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Translated description of the category.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CategoryUpdate = {
	readonly __typename?: 'CategoryUpdate';
	readonly category?: Maybe<Category>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type CategoryUpdated = Event & {
	readonly __typename?: 'CategoryUpdated';
	/**
	 * The category the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Represents channel. */
export type Channel = Node & {
	readonly __typename?: 'Channel';
	readonly currencyCode: Scalars['String'];
	/**
	 * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly defaultCountry: CountryDisplay;
	/**
	 * Whether a channel has associated orders.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly hasOrders: Scalars['Boolean'];
	readonly id: Scalars['ID'];
	readonly isActive: Scalars['Boolean'];
	readonly name: Scalars['String'];
	readonly slug: Scalars['String'];
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelActivate = {
	readonly __typename?: 'ChannelActivate';
	/** Activated channel. */
	readonly channel?: Maybe<Channel>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly channelErrors: ReadonlyArray<ChannelError>;
	readonly errors: ReadonlyArray<ChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelCreate = {
	readonly __typename?: 'ChannelCreate';
	readonly channel?: Maybe<Channel>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly channelErrors: ReadonlyArray<ChannelError>;
	readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelCreateInput = {
	/** List of shipping zones to assign to the channel. */
	readonly addShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Currency of the channel. */
	readonly currencyCode: Scalars['String'];
	/**
	 * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly defaultCountry: CountryCode;
	/** isActive flag. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** Name of the channel. */
	readonly name: Scalars['String'];
	/** Slug of the channel. */
	readonly slug: Scalars['String'];
};

export type ChannelCreated = Event & {
	readonly __typename?: 'ChannelCreated';
	/**
	 * The channel the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly channel?: Maybe<Channel>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDeactivate = {
	readonly __typename?: 'ChannelDeactivate';
	/** Deactivated channel. */
	readonly channel?: Maybe<Channel>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly channelErrors: ReadonlyArray<ChannelError>;
	readonly errors: ReadonlyArray<ChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelDelete = {
	readonly __typename?: 'ChannelDelete';
	readonly channel?: Maybe<Channel>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly channelErrors: ReadonlyArray<ChannelError>;
	readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelDeleteInput = {
	/** ID of channel to migrate orders from origin channel. */
	readonly channelId: Scalars['ID'];
};

export type ChannelDeleted = Event & {
	readonly __typename?: 'ChannelDeleted';
	/**
	 * The channel the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly channel?: Maybe<Channel>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ChannelError = {
	readonly __typename?: 'ChannelError';
	/** The error code. */
	readonly code: ChannelErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of shipping zone IDs which causes the error. */
	readonly shippingZones?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum ChannelErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
	ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type ChannelStatusChanged = Event & {
	readonly __typename?: 'ChannelStatusChanged';
	/**
	 * The channel the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly channel?: Maybe<Channel>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type ChannelUpdate = {
	readonly __typename?: 'ChannelUpdate';
	readonly channel?: Maybe<Channel>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly channelErrors: ReadonlyArray<ChannelError>;
	readonly errors: ReadonlyArray<ChannelError>;
};

export type ChannelUpdateInput = {
	/** List of shipping zones to assign to the channel. */
	readonly addShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly defaultCountry?: InputMaybe<CountryCode>;
	/** isActive flag. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** Name of the channel. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of shipping zones to unassign from the channel. */
	readonly removeShippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Slug of the channel. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export type ChannelUpdated = Event & {
	readonly __typename?: 'ChannelUpdated';
	/**
	 * The channel the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly channel?: Maybe<Channel>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Checkout object. */
export type Checkout = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Checkout';
		/**
		 * Collection points that can be used for this order.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly availableCollectionPoints: ReadonlyArray<Warehouse>;
		/** List of available payment gateways. */
		readonly availablePaymentGateways: ReadonlyArray<PaymentGateway>;
		/**
		 * Shipping methods that can be used with this checkout.
		 * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
		 */
		readonly availableShippingMethods: ReadonlyArray<ShippingMethod>;
		readonly billingAddress?: Maybe<Address>;
		readonly channel: Channel;
		readonly created: Scalars['DateTime'];
		/**
		 * The delivery method selected for this checkout.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly deliveryMethod?: Maybe<DeliveryMethod>;
		readonly discount?: Maybe<Money>;
		readonly discountName?: Maybe<Scalars['String']>;
		/** Email of a customer. */
		readonly email?: Maybe<Scalars['String']>;
		/** List of gift cards associated with this checkout. */
		readonly giftCards: ReadonlyArray<GiftCard>;
		readonly id: Scalars['ID'];
		/** Returns True, if checkout requires shipping. */
		readonly isShippingRequired: Scalars['Boolean'];
		/** Checkout language code. */
		readonly languageCode: LanguageCodeEnum;
		readonly lastChange: Scalars['DateTime'];
		/** A list of checkout lines, each containing information about an item in the checkout. */
		readonly lines: ReadonlyArray<CheckoutLine>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly note: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** The number of items purchased. */
		readonly quantity: Scalars['Int'];
		readonly shippingAddress?: Maybe<Address>;
		/**
		 * The shipping method related with checkout.
		 * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
		 */
		readonly shippingMethod?: Maybe<ShippingMethod>;
		/** Shipping methods that can be used with this checkout. */
		readonly shippingMethods: ReadonlyArray<ShippingMethod>;
		/** The price of the shipping, with all the taxes included. */
		readonly shippingPrice: TaxedMoney;
		/**
		 * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
		 *
		 * Added in Saleor 3.1.
		 */
		readonly stockReservationExpires?: Maybe<Scalars['DateTime']>;
		/** The price of the checkout before shipping, with taxes included. */
		readonly subtotalPrice: TaxedMoney;
		/** The checkout's token. */
		readonly token: Scalars['UUID'];
		/** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
		readonly totalPrice: TaxedMoney;
		/**
		 * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
		 *
		 * Added in Saleor 3.4.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly transactions?: Maybe<ReadonlyArray<TransactionItem>>;
		readonly translatedDiscountName?: Maybe<Scalars['String']>;
		readonly user?: Maybe<User>;
		readonly voucherCode?: Maybe<Scalars['String']>;
	};

/** Checkout object. */
export type CheckoutMetafieldArgs = {
	key: Scalars['String'];
};

/** Checkout object. */
export type CheckoutMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Checkout object. */
export type CheckoutPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Checkout object. */
export type CheckoutPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
	readonly __typename?: 'CheckoutAddPromoCode';
	/** The checkout with the added gift card or voucher. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
	readonly __typename?: 'CheckoutBillingAddressUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
	readonly __typename?: 'CheckoutComplete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	/** Confirmation data used to process additional authorization steps. */
	readonly confirmationData?: Maybe<Scalars['JSONString']>;
	/** Set to true if payment needs to be confirmed before checkout is complete. */
	readonly confirmationNeeded: Scalars['Boolean'];
	readonly errors: ReadonlyArray<CheckoutError>;
	/** Placed order. */
	readonly order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
	readonly __typename?: 'CheckoutCountableConnection';
	readonly edges: ReadonlyArray<CheckoutCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutCountableEdge = {
	readonly __typename?: 'CheckoutCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Checkout;
};

/** Create a new checkout. */
export type CheckoutCreate = {
	readonly __typename?: 'CheckoutCreate';
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	/**
	 * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
	 * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
	 */
	readonly created?: Maybe<Scalars['Boolean']>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutCreateInput = {
	/** Billing address of the customer. */
	readonly billingAddress?: InputMaybe<AddressInput>;
	/** Slug of a channel in which to create a checkout. */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** The customer's email address. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Checkout language code. */
	readonly languageCode?: InputMaybe<LanguageCodeEnum>;
	/** A list of checkout lines, each containing information about an item in the checkout. */
	readonly lines: ReadonlyArray<CheckoutLineInput>;
	/** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
	readonly shippingAddress?: InputMaybe<AddressInput>;
};

export type CheckoutCreated = Event & {
	readonly __typename?: 'CheckoutCreated';
	/**
	 * The checkout the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly checkout?: Maybe<Checkout>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerAttach = {
	readonly __typename?: 'CheckoutCustomerAttach';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 */
export type CheckoutCustomerDetach = {
	readonly __typename?: 'CheckoutCustomerDetach';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type CheckoutDeliveryMethodUpdate = {
	readonly __typename?: 'CheckoutDeliveryMethodUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
	readonly __typename?: 'CheckoutEmailUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutError = {
	readonly __typename?: 'CheckoutError';
	/** A type of address that causes the error. */
	readonly addressType?: Maybe<AddressTypeEnum>;
	/** The error code. */
	readonly code: CheckoutErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** List of line Ids which cause the error. */
	readonly lines?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of varint IDs which causes the error. */
	readonly variants?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum CheckoutErrorCode {
	BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
	ChannelInactive = 'CHANNEL_INACTIVE',
	CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
	DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
	EmailNotSet = 'EMAIL_NOT_SET',
	GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
	GraphqlError = 'GRAPHQL_ERROR',
	InsufficientStock = 'INSUFFICIENT_STOCK',
	Invalid = 'INVALID',
	InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
	MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
	NotFound = 'NOT_FOUND',
	NoLines = 'NO_LINES',
	PaymentError = 'PAYMENT_ERROR',
	ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
	ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
	QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
	Required = 'REQUIRED',
	ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
	ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
	ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
	ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
	TaxError = 'TAX_ERROR',
	UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
	Unique = 'UNIQUE',
	VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
	ZeroQuantity = 'ZERO_QUANTITY',
}

export type CheckoutFilterInput = {
	readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly created?: InputMaybe<DateRangeInput>;
	readonly customer?: InputMaybe<Scalars['String']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
	readonly __typename?: 'CheckoutLanguageCodeUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
	readonly __typename?: 'CheckoutLine';
	readonly id: Scalars['ID'];
	readonly quantity: Scalars['Int'];
	/** Indicates whether the item need to be delivered. */
	readonly requiresShipping: Scalars['Boolean'];
	/** The sum of the checkout line price, taxes and discounts. */
	readonly totalPrice: TaxedMoney;
	/** The sum of the checkout line price, without discounts. */
	readonly undiscountedTotalPrice: Money;
	/** The unit price of the checkout line, without discounts. */
	readonly undiscountedUnitPrice: Money;
	/** The unit price of the checkout line, with taxes and discounts. */
	readonly unitPrice: TaxedMoney;
	readonly variant: ProductVariant;
};

export type CheckoutLineCountableConnection = {
	readonly __typename?: 'CheckoutLineCountableConnection';
	readonly edges: ReadonlyArray<CheckoutLineCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CheckoutLineCountableEdge = {
	readonly __typename?: 'CheckoutLineCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: CheckoutLine;
};

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
	readonly __typename?: 'CheckoutLineDelete';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

export type CheckoutLineInput = {
	/**
	 * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly price?: InputMaybe<Scalars['PositiveDecimal']>;
	/** The number of items purchased. */
	readonly quantity: Scalars['Int'];
	/** ID of the product variant. */
	readonly variantId: Scalars['ID'];
};

export type CheckoutLineUpdateInput = {
	/**
	 * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly price?: InputMaybe<Scalars['PositiveDecimal']>;
	/** The number of items purchased. Optional for apps, required for any other users. */
	readonly quantity?: InputMaybe<Scalars['Int']>;
	/** ID of the product variant. */
	readonly variantId: Scalars['ID'];
};

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
	readonly __typename?: 'CheckoutLinesAdd';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
	readonly __typename?: 'CheckoutLinesDelete';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
	readonly __typename?: 'CheckoutLinesUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
	readonly __typename?: 'CheckoutPaymentCreate';
	/** Related checkout object. */
	readonly checkout?: Maybe<Checkout>;
	readonly errors: ReadonlyArray<PaymentError>;
	/** A newly created payment. */
	readonly payment?: Maybe<Payment>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
	readonly __typename?: 'CheckoutRemovePromoCode';
	/** The checkout with the removed gift card or voucher. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
	readonly __typename?: 'CheckoutShippingAddressUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

/** Updates the shipping method of the checkout. */
export type CheckoutShippingMethodUpdate = {
	readonly __typename?: 'CheckoutShippingMethodUpdate';
	/** An updated checkout. */
	readonly checkout?: Maybe<Checkout>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly checkoutErrors: ReadonlyArray<CheckoutError>;
	readonly errors: ReadonlyArray<CheckoutError>;
};

export enum CheckoutSortField {
	/** Sort checkouts by creation date. */
	CreationDate = 'CREATION_DATE',
	/** Sort checkouts by customer. */
	Customer = 'CUSTOMER',
	/** Sort checkouts by payment. */
	Payment = 'PAYMENT',
}

export type CheckoutSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort checkouts by the selected field. */
	readonly field: CheckoutSortField;
};

export type CheckoutUpdated = Event & {
	readonly __typename?: 'CheckoutUpdated';
	/**
	 * The checkout the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly checkout?: Maybe<Checkout>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ChoiceValue = {
	readonly __typename?: 'ChoiceValue';
	readonly raw?: Maybe<Scalars['String']>;
	readonly verbose?: Maybe<Scalars['String']>;
};

/** Represents a collection of products. */
export type Collection = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Collection';
		readonly backgroundImage?: Maybe<Image>;
		/** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
		readonly channel?: Maybe<Scalars['String']>;
		/**
		 * List of channels in which the collection is available.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly channelListings?: Maybe<ReadonlyArray<CollectionChannelListing>>;
		/**
		 * Description of the collection.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly description?: Maybe<Scalars['JSONString']>;
		/**
		 * Description of the collection.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
		 */
		readonly descriptionJson?: Maybe<Scalars['JSONString']>;
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** List of products in this collection. */
		readonly products?: Maybe<ProductCountableConnection>;
		readonly seoDescription?: Maybe<Scalars['String']>;
		readonly seoTitle?: Maybe<Scalars['String']>;
		readonly slug: Scalars['String'];
		/** Returns translated collection fields for the given language code. */
		readonly translation?: Maybe<CollectionTranslation>;
	};

/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

/** Represents a collection of products. */
export type CollectionMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a collection of products. */
export type CollectionMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a collection of products. */
export type CollectionPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a collection of products. */
export type CollectionPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a collection of products. */
export type CollectionProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ProductFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<ProductOrder>;
};

/** Represents a collection of products. */
export type CollectionTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionAddProducts = {
	readonly __typename?: 'CollectionAddProducts';
	/** Collection to which products will be added. */
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionBulkDelete = {
	readonly __typename?: 'CollectionBulkDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<CollectionError>;
};

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
	readonly __typename?: 'CollectionChannelListing';
	readonly channel: Channel;
	readonly id: Scalars['ID'];
	readonly isPublished: Scalars['Boolean'];
	/** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
	readonly publicationDate?: Maybe<Scalars['Date']>;
	/**
	 * The collection publication date.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionChannelListingError = {
	readonly __typename?: 'CollectionChannelListingError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of channels IDs which causes the error. */
	readonly channels?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ProductErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionChannelListingUpdate = {
	readonly __typename?: 'CollectionChannelListingUpdate';
	/** An updated collection instance. */
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionChannelListingErrors: ReadonlyArray<CollectionChannelListingError>;
	readonly errors: ReadonlyArray<CollectionChannelListingError>;
};

export type CollectionChannelListingUpdateInput = {
	/** List of channels to which the collection should be assigned. */
	readonly addChannels?: InputMaybe<
		ReadonlyArray<PublishableChannelListingInput>
	>;
	/** List of channels from which the collection should be unassigned. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export type CollectionCountableConnection = {
	readonly __typename?: 'CollectionCountableConnection';
	readonly edges: ReadonlyArray<CollectionCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CollectionCountableEdge = {
	readonly __typename?: 'CollectionCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Collection;
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionCreate = {
	readonly __typename?: 'CollectionCreate';
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

export type CollectionCreateInput = {
	/** Background image file. */
	readonly backgroundImage?: InputMaybe<Scalars['Upload']>;
	/** Alt text for an image. */
	readonly backgroundImageAlt?: InputMaybe<Scalars['String']>;
	/**
	 * Description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Informs whether a collection is published. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/** Name of the collection. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of products to be added to the collection. */
	readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	readonly publicationDate?: InputMaybe<Scalars['Date']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Slug of the collection. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export type CollectionCreated = Event & {
	readonly __typename?: 'CollectionCreated';
	/**
	 * The collection the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly collection?: Maybe<Collection>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type CollectionCreatedCollectionArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionDelete = {
	readonly __typename?: 'CollectionDelete';
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

export type CollectionDeleted = Event & {
	readonly __typename?: 'CollectionDeleted';
	/**
	 * The collection the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly collection?: Maybe<Collection>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type CollectionDeletedCollectionArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type CollectionError = {
	readonly __typename?: 'CollectionError';
	/** The error code. */
	readonly code: CollectionErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of products IDs which causes the error. */
	readonly products?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum CollectionErrorCode {
	CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type CollectionFilterInput = {
	/**
	 * Specifies the channel by which the data should be filtered.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly published?: InputMaybe<CollectionPublished>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type CollectionInput = {
	/** Background image file. */
	readonly backgroundImage?: InputMaybe<Scalars['Upload']>;
	/** Alt text for an image. */
	readonly backgroundImageAlt?: InputMaybe<Scalars['String']>;
	/**
	 * Description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Informs whether a collection is published. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/** Name of the collection. */
	readonly name?: InputMaybe<Scalars['String']>;
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	readonly publicationDate?: InputMaybe<Scalars['Date']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Slug of the collection. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export enum CollectionPublished {
	Hidden = 'HIDDEN',
	Published = 'PUBLISHED',
}

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionRemoveProducts = {
	readonly __typename?: 'CollectionRemoveProducts';
	/** Collection from which products will be removed. */
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionReorderProducts = {
	readonly __typename?: 'CollectionReorderProducts';
	/** Collection from which products are reordered. */
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

export enum CollectionSortField {
	/**
	 * Sort collections by availability.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Availability = 'AVAILABILITY',
	/** Sort collections by name. */
	Name = 'NAME',
	/** Sort collections by product count. */
	ProductCount = 'PRODUCT_COUNT',
	/**
	 * Sort collections by publication date.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	PublicationDate = 'PUBLICATION_DATE',
	/**
	 * Sort collections by publication date.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	PublishedAt = 'PUBLISHED_AT',
}

export type CollectionSortingInput = {
	/**
	 * Specifies the channel in which to sort the data.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort collections by the selected field. */
	readonly field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
	readonly __typename?: 'CollectionTranslatableContent';
	/**
	 * Represents a collection of products.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly collection?: Maybe<Collection>;
	/**
	 * Description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
	/** Returns translated collection fields for the given language code. */
	readonly translation?: Maybe<CollectionTranslation>;
};

export type CollectionTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type CollectionTranslate = {
	readonly __typename?: 'CollectionTranslate';
	readonly collection?: Maybe<Collection>;
	readonly errors: ReadonlyArray<TranslationError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type CollectionTranslation = Node & {
	readonly __typename?: 'CollectionTranslation';
	/**
	 * Translated description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Translated description of the collection.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type CollectionUpdate = {
	readonly __typename?: 'CollectionUpdate';
	readonly collection?: Maybe<Collection>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly collectionErrors: ReadonlyArray<CollectionError>;
	readonly errors: ReadonlyArray<CollectionError>;
};

export type CollectionUpdated = Event & {
	readonly __typename?: 'CollectionUpdated';
	/**
	 * The collection the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly collection?: Maybe<Collection>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type CollectionUpdatedCollectionArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
	readonly __typename?: 'ConfigurationItem';
	/** Help text for the field. */
	readonly helpText?: Maybe<Scalars['String']>;
	/** Label for the field. */
	readonly label?: Maybe<Scalars['String']>;
	/** Name of the field. */
	readonly name: Scalars['String'];
	/** Type of the field. */
	readonly type?: Maybe<ConfigurationTypeFieldEnum>;
	/** Current value of the field. */
	readonly value?: Maybe<Scalars['String']>;
};

export type ConfigurationItemInput = {
	/** Name of the field to update. */
	readonly name: Scalars['String'];
	/** Value of the given field to update. */
	readonly value?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
	Boolean = 'BOOLEAN',
	Multiline = 'MULTILINE',
	Output = 'OUTPUT',
	Password = 'PASSWORD',
	Secret = 'SECRET',
	Secretmultiline = 'SECRETMULTILINE',
	String = 'STRING',
}

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
	readonly __typename?: 'ConfirmAccount';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** An activated user account. */
	readonly user?: Maybe<User>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type ConfirmEmailChange = {
	readonly __typename?: 'ConfirmEmailChange';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance with a new email. */
	readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum CountryCode {
	Ad = 'AD',
	Ae = 'AE',
	Af = 'AF',
	Ag = 'AG',
	Ai = 'AI',
	Al = 'AL',
	Am = 'AM',
	Ao = 'AO',
	Aq = 'AQ',
	Ar = 'AR',
	As = 'AS',
	At = 'AT',
	Au = 'AU',
	Aw = 'AW',
	Ax = 'AX',
	Az = 'AZ',
	Ba = 'BA',
	Bb = 'BB',
	Bd = 'BD',
	Be = 'BE',
	Bf = 'BF',
	Bg = 'BG',
	Bh = 'BH',
	Bi = 'BI',
	Bj = 'BJ',
	Bl = 'BL',
	Bm = 'BM',
	Bn = 'BN',
	Bo = 'BO',
	Bq = 'BQ',
	Br = 'BR',
	Bs = 'BS',
	Bt = 'BT',
	Bv = 'BV',
	Bw = 'BW',
	By = 'BY',
	Bz = 'BZ',
	Ca = 'CA',
	Cc = 'CC',
	Cd = 'CD',
	Cf = 'CF',
	Cg = 'CG',
	Ch = 'CH',
	Ci = 'CI',
	Ck = 'CK',
	Cl = 'CL',
	Cm = 'CM',
	Cn = 'CN',
	Co = 'CO',
	Cr = 'CR',
	Cu = 'CU',
	Cv = 'CV',
	Cw = 'CW',
	Cx = 'CX',
	Cy = 'CY',
	Cz = 'CZ',
	De = 'DE',
	Dj = 'DJ',
	Dk = 'DK',
	Dm = 'DM',
	Do = 'DO',
	Dz = 'DZ',
	Ec = 'EC',
	Ee = 'EE',
	Eg = 'EG',
	Eh = 'EH',
	Er = 'ER',
	Es = 'ES',
	Et = 'ET',
	Eu = 'EU',
	Fi = 'FI',
	Fj = 'FJ',
	Fk = 'FK',
	Fm = 'FM',
	Fo = 'FO',
	Fr = 'FR',
	Ga = 'GA',
	Gb = 'GB',
	Gd = 'GD',
	Ge = 'GE',
	Gf = 'GF',
	Gg = 'GG',
	Gh = 'GH',
	Gi = 'GI',
	Gl = 'GL',
	Gm = 'GM',
	Gn = 'GN',
	Gp = 'GP',
	Gq = 'GQ',
	Gr = 'GR',
	Gs = 'GS',
	Gt = 'GT',
	Gu = 'GU',
	Gw = 'GW',
	Gy = 'GY',
	Hk = 'HK',
	Hm = 'HM',
	Hn = 'HN',
	Hr = 'HR',
	Ht = 'HT',
	Hu = 'HU',
	Id = 'ID',
	Ie = 'IE',
	Il = 'IL',
	Im = 'IM',
	In = 'IN',
	Io = 'IO',
	Iq = 'IQ',
	Ir = 'IR',
	Is = 'IS',
	It = 'IT',
	Je = 'JE',
	Jm = 'JM',
	Jo = 'JO',
	Jp = 'JP',
	Ke = 'KE',
	Kg = 'KG',
	Kh = 'KH',
	Ki = 'KI',
	Km = 'KM',
	Kn = 'KN',
	Kp = 'KP',
	Kr = 'KR',
	Kw = 'KW',
	Ky = 'KY',
	Kz = 'KZ',
	La = 'LA',
	Lb = 'LB',
	Lc = 'LC',
	Li = 'LI',
	Lk = 'LK',
	Lr = 'LR',
	Ls = 'LS',
	Lt = 'LT',
	Lu = 'LU',
	Lv = 'LV',
	Ly = 'LY',
	Ma = 'MA',
	Mc = 'MC',
	Md = 'MD',
	Me = 'ME',
	Mf = 'MF',
	Mg = 'MG',
	Mh = 'MH',
	Mk = 'MK',
	Ml = 'ML',
	Mm = 'MM',
	Mn = 'MN',
	Mo = 'MO',
	Mp = 'MP',
	Mq = 'MQ',
	Mr = 'MR',
	Ms = 'MS',
	Mt = 'MT',
	Mu = 'MU',
	Mv = 'MV',
	Mw = 'MW',
	Mx = 'MX',
	My = 'MY',
	Mz = 'MZ',
	Na = 'NA',
	Nc = 'NC',
	Ne = 'NE',
	Nf = 'NF',
	Ng = 'NG',
	Ni = 'NI',
	Nl = 'NL',
	No = 'NO',
	Np = 'NP',
	Nr = 'NR',
	Nu = 'NU',
	Nz = 'NZ',
	Om = 'OM',
	Pa = 'PA',
	Pe = 'PE',
	Pf = 'PF',
	Pg = 'PG',
	Ph = 'PH',
	Pk = 'PK',
	Pl = 'PL',
	Pm = 'PM',
	Pn = 'PN',
	Pr = 'PR',
	Ps = 'PS',
	Pt = 'PT',
	Pw = 'PW',
	Py = 'PY',
	Qa = 'QA',
	Re = 'RE',
	Ro = 'RO',
	Rs = 'RS',
	Ru = 'RU',
	Rw = 'RW',
	Sa = 'SA',
	Sb = 'SB',
	Sc = 'SC',
	Sd = 'SD',
	Se = 'SE',
	Sg = 'SG',
	Sh = 'SH',
	Si = 'SI',
	Sj = 'SJ',
	Sk = 'SK',
	Sl = 'SL',
	Sm = 'SM',
	Sn = 'SN',
	So = 'SO',
	Sr = 'SR',
	Ss = 'SS',
	St = 'ST',
	Sv = 'SV',
	Sx = 'SX',
	Sy = 'SY',
	Sz = 'SZ',
	Tc = 'TC',
	Td = 'TD',
	Tf = 'TF',
	Tg = 'TG',
	Th = 'TH',
	Tj = 'TJ',
	Tk = 'TK',
	Tl = 'TL',
	Tm = 'TM',
	Tn = 'TN',
	To = 'TO',
	Tr = 'TR',
	Tt = 'TT',
	Tv = 'TV',
	Tw = 'TW',
	Tz = 'TZ',
	Ua = 'UA',
	Ug = 'UG',
	Um = 'UM',
	Us = 'US',
	Uy = 'UY',
	Uz = 'UZ',
	Va = 'VA',
	Vc = 'VC',
	Ve = 'VE',
	Vg = 'VG',
	Vi = 'VI',
	Vn = 'VN',
	Vu = 'VU',
	Wf = 'WF',
	Ws = 'WS',
	Ye = 'YE',
	Yt = 'YT',
	Za = 'ZA',
	Zm = 'ZM',
	Zw = 'ZW',
}

export type CountryDisplay = {
	readonly __typename?: 'CountryDisplay';
	/** Country code. */
	readonly code: Scalars['String'];
	/** Country name. */
	readonly country: Scalars['String'];
	/** Country tax. */
	readonly vat?: Maybe<Vat>;
};

export type CountryFilterInput = {
	/** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
	readonly attachedToShippingZones?: InputMaybe<Scalars['Boolean']>;
};

/** Create JWT token. */
export type CreateToken = {
	readonly __typename?: 'CreateToken';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** CSRF token required to re-generate access token. */
	readonly csrfToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AccountError>;
	/** JWT refresh token, required to re-generate access token. */
	readonly refreshToken?: Maybe<Scalars['String']>;
	/** JWT token, required to authenticate. */
	readonly token?: Maybe<Scalars['String']>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

export type CreditCard = {
	readonly __typename?: 'CreditCard';
	/** Card brand. */
	readonly brand: Scalars['String'];
	/** Two-digit number representing the card’s expiration month. */
	readonly expMonth?: Maybe<Scalars['Int']>;
	/** Four-digit number representing the card’s expiration year. */
	readonly expYear?: Maybe<Scalars['Int']>;
	/** First 4 digits of the card number. */
	readonly firstDigits?: Maybe<Scalars['String']>;
	/** Last 4 digits of the card number. */
	readonly lastDigits: Scalars['String'];
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerBulkDelete = {
	readonly __typename?: 'CustomerBulkDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<AccountError>;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerCreate = {
	readonly __typename?: 'CustomerCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	readonly user?: Maybe<User>;
};

export type CustomerCreated = Event & {
	readonly __typename?: 'CustomerCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The user the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly user?: Maybe<User>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerDelete = {
	readonly __typename?: 'CustomerDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	readonly user?: Maybe<User>;
};

/** History log of the customer. */
export type CustomerEvent = Node & {
	readonly __typename?: 'CustomerEvent';
	/** App that performed the action. */
	readonly app?: Maybe<App>;
	/** Number of objects concerned by the event. */
	readonly count?: Maybe<Scalars['Int']>;
	/** Date when event happened at in ISO 8601 format. */
	readonly date?: Maybe<Scalars['DateTime']>;
	readonly id: Scalars['ID'];
	/** Content of the event. */
	readonly message?: Maybe<Scalars['String']>;
	/** The concerned order. */
	readonly order?: Maybe<Order>;
	/** The concerned order line. */
	readonly orderLine?: Maybe<OrderLine>;
	/** Customer event type. */
	readonly type?: Maybe<CustomerEventsEnum>;
	/** User who performed the action. */
	readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum CustomerEventsEnum {
	AccountCreated = 'ACCOUNT_CREATED',
	CustomerDeleted = 'CUSTOMER_DELETED',
	DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
	EmailAssigned = 'EMAIL_ASSIGNED',
	EmailChanged = 'EMAIL_CHANGED',
	EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
	NameAssigned = 'NAME_ASSIGNED',
	NoteAdded = 'NOTE_ADDED',
	NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
	PasswordChanged = 'PASSWORD_CHANGED',
	PasswordReset = 'PASSWORD_RESET',
	PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
	PlacedOrder = 'PLACED_ORDER',
}

export type CustomerFilterInput = {
	readonly dateJoined?: InputMaybe<DateRangeInput>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly numberOfOrders?: InputMaybe<IntRangeInput>;
	readonly placedOrders?: InputMaybe<DateRangeInput>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type CustomerInput = {
	/** Billing address of the customer. */
	readonly defaultBillingAddress?: InputMaybe<AddressInput>;
	/** Shipping address of the customer. */
	readonly defaultShippingAddress?: InputMaybe<AddressInput>;
	/** The unique email address of the user. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User account is active. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** User language code. */
	readonly languageCode?: InputMaybe<LanguageCodeEnum>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** A note about the user. */
	readonly note?: InputMaybe<Scalars['String']>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type CustomerUpdate = {
	readonly __typename?: 'CustomerUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	readonly user?: Maybe<User>;
};

export type CustomerUpdated = Event & {
	readonly __typename?: 'CustomerUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The user the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly user?: Maybe<User>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type DateRangeInput = {
	/** Start date. */
	readonly gte?: InputMaybe<Scalars['Date']>;
	/** End date. */
	readonly lte?: InputMaybe<Scalars['Date']>;
};

export type DateTimeRangeInput = {
	/** Start date. */
	readonly gte?: InputMaybe<Scalars['DateTime']>;
	/** End date. */
	readonly lte?: InputMaybe<Scalars['DateTime']>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type DeactivateAllUserTokens = {
	readonly __typename?: 'DeactivateAllUserTokens';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type DeleteMetadata = {
	readonly __typename?: 'DeleteMetadata';
	readonly errors: ReadonlyArray<MetadataError>;
	readonly item?: Maybe<ObjectWithMetadata>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type DeletePrivateMetadata = {
	readonly __typename?: 'DeletePrivateMetadata';
	readonly errors: ReadonlyArray<MetadataError>;
	readonly item?: Maybe<ObjectWithMetadata>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type DeliveryMethod = ShippingMethod | Warehouse;

export type DigitalContent = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'DigitalContent';
		readonly automaticFulfillment: Scalars['Boolean'];
		readonly contentFile: Scalars['String'];
		readonly id: Scalars['ID'];
		readonly maxDownloads?: Maybe<Scalars['Int']>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Product variant assigned to digital content. */
		readonly productVariant: ProductVariant;
		readonly urlValidDays?: Maybe<Scalars['Int']>;
		/** List of URLs for the digital variant. */
		readonly urls?: Maybe<ReadonlyArray<DigitalContentUrl>>;
		readonly useDefaultSettings: Scalars['Boolean'];
	};

export type DigitalContentMetafieldArgs = {
	key: Scalars['String'];
};

export type DigitalContentMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type DigitalContentPrivateMetafieldArgs = {
	key: Scalars['String'];
};

export type DigitalContentPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type DigitalContentCountableConnection = {
	readonly __typename?: 'DigitalContentCountableConnection';
	readonly edges: ReadonlyArray<DigitalContentCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type DigitalContentCountableEdge = {
	readonly __typename?: 'DigitalContentCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: DigitalContent;
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentCreate = {
	readonly __typename?: 'DigitalContentCreate';
	readonly content?: Maybe<DigitalContent>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly variant?: Maybe<ProductVariant>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentDelete = {
	readonly __typename?: 'DigitalContentDelete';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
	/** Overwrite default automatic_fulfillment setting for variant. */
	readonly automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
	/** Determines how many times a download link can be accessed by a customer. */
	readonly maxDownloads?: InputMaybe<Scalars['Int']>;
	/** Determines for how many days a download link is active since it was generated. */
	readonly urlValidDays?: InputMaybe<Scalars['Int']>;
	/** Use default digital content settings for this product. */
	readonly useDefaultSettings: Scalars['Boolean'];
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUpdate = {
	readonly __typename?: 'DigitalContentUpdate';
	readonly content?: Maybe<DigitalContent>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
	/** Overwrite default automatic_fulfillment setting for variant. */
	readonly automaticFulfillment?: InputMaybe<Scalars['Boolean']>;
	/** Represents an file in a multipart request. */
	readonly contentFile: Scalars['Upload'];
	/** Determines how many times a download link can be accessed by a customer. */
	readonly maxDownloads?: InputMaybe<Scalars['Int']>;
	/** Determines for how many days a download link is active since it was generated. */
	readonly urlValidDays?: InputMaybe<Scalars['Int']>;
	/** Use default digital content settings for this product. */
	readonly useDefaultSettings: Scalars['Boolean'];
};

export type DigitalContentUrl = Node & {
	readonly __typename?: 'DigitalContentUrl';
	readonly content: DigitalContent;
	readonly created: Scalars['DateTime'];
	readonly downloadNum: Scalars['Int'];
	readonly id: Scalars['ID'];
	/** UUID of digital content. */
	readonly token: Scalars['UUID'];
	/** URL for digital content. */
	readonly url?: Maybe<Scalars['String']>;
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type DigitalContentUrlCreate = {
	readonly __typename?: 'DigitalContentUrlCreate';
	readonly digitalContentUrl?: Maybe<DigitalContentUrl>;
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type DigitalContentUrlCreateInput = {
	/** Digital content ID which URL will belong to. */
	readonly content: Scalars['ID'];
};

export type DiscountError = {
	readonly __typename?: 'DiscountError';
	/** List of channels IDs which causes the error. */
	readonly channels?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: DiscountErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of products IDs which causes the error. */
	readonly products?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum DiscountErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export enum DiscountStatusEnum {
	Active = 'ACTIVE',
	Expired = 'EXPIRED',
	Scheduled = 'SCHEDULED',
}

export enum DiscountValueTypeEnum {
	Fixed = 'FIXED',
	Percentage = 'PERCENTAGE',
}

/** An enumeration. */
export enum DistanceUnitsEnum {
	Cm = 'CM',
	Ft = 'FT',
	Inch = 'INCH',
	Km = 'KM',
	M = 'M',
	Yd = 'YD',
}

/** Represents shop's domain. */
export type Domain = {
	readonly __typename?: 'Domain';
	/** The host name of the domain. */
	readonly host: Scalars['String'];
	/** Inform if SSL is enabled. */
	readonly sslEnabled: Scalars['Boolean'];
	/** Shop's absolute URL. */
	readonly url: Scalars['String'];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderBulkDelete = {
	readonly __typename?: 'DraftOrderBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<OrderError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderComplete = {
	readonly __typename?: 'DraftOrderComplete';
	readonly errors: ReadonlyArray<OrderError>;
	/** Completed order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderCreate = {
	readonly __typename?: 'DraftOrderCreate';
	readonly errors: ReadonlyArray<OrderError>;
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type DraftOrderCreateInput = {
	/** Billing address of the customer. */
	readonly billingAddress?: InputMaybe<AddressInput>;
	/** ID of the channel associated with the order. */
	readonly channelId?: InputMaybe<Scalars['ID']>;
	/** A note from a customer. Visible by customers in the order summary. */
	readonly customerNote?: InputMaybe<Scalars['String']>;
	/** Discount amount for the order. */
	readonly discount?: InputMaybe<Scalars['PositiveDecimal']>;
	/** Variant line input consisting of variant ID and quantity of products. */
	readonly lines?: InputMaybe<ReadonlyArray<OrderLineCreateInput>>;
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	readonly redirectUrl?: InputMaybe<Scalars['String']>;
	/** Shipping address of the customer. */
	readonly shippingAddress?: InputMaybe<AddressInput>;
	/** ID of a selected shipping method. */
	readonly shippingMethod?: InputMaybe<Scalars['ID']>;
	/** Customer associated with the draft order. */
	readonly user?: InputMaybe<Scalars['ID']>;
	/** Email address of the customer. */
	readonly userEmail?: InputMaybe<Scalars['String']>;
	/** ID of the voucher associated with the order. */
	readonly voucher?: InputMaybe<Scalars['ID']>;
};

export type DraftOrderCreated = Event & {
	readonly __typename?: 'DraftOrderCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderDelete = {
	readonly __typename?: 'DraftOrderDelete';
	readonly errors: ReadonlyArray<OrderError>;
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type DraftOrderDeleted = Event & {
	readonly __typename?: 'DraftOrderDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type DraftOrderInput = {
	/** Billing address of the customer. */
	readonly billingAddress?: InputMaybe<AddressInput>;
	/** ID of the channel associated with the order. */
	readonly channelId?: InputMaybe<Scalars['ID']>;
	/** A note from a customer. Visible by customers in the order summary. */
	readonly customerNote?: InputMaybe<Scalars['String']>;
	/** Discount amount for the order. */
	readonly discount?: InputMaybe<Scalars['PositiveDecimal']>;
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	readonly redirectUrl?: InputMaybe<Scalars['String']>;
	/** Shipping address of the customer. */
	readonly shippingAddress?: InputMaybe<AddressInput>;
	/** ID of a selected shipping method. */
	readonly shippingMethod?: InputMaybe<Scalars['ID']>;
	/** Customer associated with the draft order. */
	readonly user?: InputMaybe<Scalars['ID']>;
	/** Email address of the customer. */
	readonly userEmail?: InputMaybe<Scalars['String']>;
	/** ID of the voucher associated with the order. */
	readonly voucher?: InputMaybe<Scalars['ID']>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderLinesBulkDelete = {
	readonly __typename?: 'DraftOrderLinesBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<OrderError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type DraftOrderUpdate = {
	readonly __typename?: 'DraftOrderUpdate';
	readonly errors: ReadonlyArray<OrderError>;
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type DraftOrderUpdated = Event & {
	readonly __typename?: 'DraftOrderUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type Event = {
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Event delivery. */
export type EventDelivery = Node & {
	readonly __typename?: 'EventDelivery';
	/** Event delivery attempts. */
	readonly attempts?: Maybe<EventDeliveryAttemptCountableConnection>;
	readonly createdAt: Scalars['DateTime'];
	/** Webhook event type. */
	readonly eventType: WebhookEventTypeEnum;
	readonly id: Scalars['ID'];
	/** Event payload. */
	readonly payload?: Maybe<Scalars['String']>;
	/** Event delivery status. */
	readonly status: EventDeliveryStatusEnum;
};

/** Event delivery. */
export type EventDeliveryAttemptsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<EventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type EventDeliveryAttempt = Node & {
	readonly __typename?: 'EventDeliveryAttempt';
	/** Event delivery creation date and time. */
	readonly createdAt: Scalars['DateTime'];
	/** Delivery attempt duration. */
	readonly duration?: Maybe<Scalars['Float']>;
	readonly id: Scalars['ID'];
	/** Request headers for delivery attempt. */
	readonly requestHeaders?: Maybe<Scalars['String']>;
	/** Delivery attempt response content. */
	readonly response?: Maybe<Scalars['String']>;
	/** Response headers for delivery attempt. */
	readonly responseHeaders?: Maybe<Scalars['String']>;
	/** Delivery attempt response status code. */
	readonly responseStatusCode?: Maybe<Scalars['Int']>;
	/** Event delivery status. */
	readonly status: EventDeliveryStatusEnum;
	/** Task id for delivery attempt. */
	readonly taskId?: Maybe<Scalars['String']>;
};

export type EventDeliveryAttemptCountableConnection = {
	readonly __typename?: 'EventDeliveryAttemptCountableConnection';
	readonly edges: ReadonlyArray<EventDeliveryAttemptCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryAttemptCountableEdge = {
	readonly __typename?: 'EventDeliveryAttemptCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: EventDeliveryAttempt;
};

export enum EventDeliveryAttemptSortField {
	/** Sort event delivery attempts by created at. */
	CreatedAt = 'CREATED_AT',
}

export type EventDeliveryAttemptSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort attempts by the selected field. */
	readonly field: EventDeliveryAttemptSortField;
};

export type EventDeliveryCountableConnection = {
	readonly __typename?: 'EventDeliveryCountableConnection';
	readonly edges: ReadonlyArray<EventDeliveryCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type EventDeliveryCountableEdge = {
	readonly __typename?: 'EventDeliveryCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: EventDelivery;
};

export type EventDeliveryFilterInput = {
	readonly eventType?: InputMaybe<WebhookEventTypeEnum>;
	readonly status?: InputMaybe<EventDeliveryStatusEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type EventDeliveryRetry = {
	readonly __typename?: 'EventDeliveryRetry';
	/** Event delivery. */
	readonly delivery?: Maybe<EventDelivery>;
	readonly errors: ReadonlyArray<WebhookError>;
};

export enum EventDeliverySortField {
	/** Sort event deliveries by created at. */
	CreatedAt = 'CREATED_AT',
}

export type EventDeliverySortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort deliveries by the selected field. */
	readonly field: EventDeliverySortField;
};

export enum EventDeliveryStatusEnum {
	Failed = 'FAILED',
	Pending = 'PENDING',
	Success = 'SUCCESS',
}

export type ExportError = {
	readonly __typename?: 'ExportError';
	/** The error code. */
	readonly code: ExportErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ExportErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
}

/** History log of export file. */
export type ExportEvent = Node & {
	readonly __typename?: 'ExportEvent';
	/** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
	readonly app?: Maybe<App>;
	/** Date when event happened at in ISO 8601 format. */
	readonly date: Scalars['DateTime'];
	/** The ID of the object. */
	readonly id: Scalars['ID'];
	/** Content of the event. */
	readonly message: Scalars['String'];
	/** Export event type. */
	readonly type: ExportEventsEnum;
	/** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
	readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum ExportEventsEnum {
	ExportedFileSent = 'EXPORTED_FILE_SENT',
	ExportDeleted = 'EXPORT_DELETED',
	ExportFailed = 'EXPORT_FAILED',
	ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
	ExportPending = 'EXPORT_PENDING',
	ExportSuccess = 'EXPORT_SUCCESS',
}

/** Represents a job data of exported file. */
export type ExportFile = Job &
	Node & {
		readonly __typename?: 'ExportFile';
		readonly app?: Maybe<App>;
		/** Created date time of job in ISO 8601 format. */
		readonly createdAt: Scalars['DateTime'];
		/** List of events associated with the export. */
		readonly events?: Maybe<ReadonlyArray<ExportEvent>>;
		readonly id: Scalars['ID'];
		/** Job message. */
		readonly message?: Maybe<Scalars['String']>;
		/** Job status. */
		readonly status: JobStatusEnum;
		/** Date time of job last update in ISO 8601 format. */
		readonly updatedAt: Scalars['DateTime'];
		/** The URL of field to download. */
		readonly url?: Maybe<Scalars['String']>;
		readonly user?: Maybe<User>;
	};

export type ExportFileCountableConnection = {
	readonly __typename?: 'ExportFileCountableConnection';
	readonly edges: ReadonlyArray<ExportFileCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ExportFileCountableEdge = {
	readonly __typename?: 'ExportFileCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: ExportFile;
};

export type ExportFileFilterInput = {
	readonly app?: InputMaybe<Scalars['String']>;
	readonly createdAt?: InputMaybe<DateTimeRangeInput>;
	readonly status?: InputMaybe<JobStatusEnum>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
	readonly user?: InputMaybe<Scalars['String']>;
};

export enum ExportFileSortField {
	CreatedAt = 'CREATED_AT',
	LastModifiedAt = 'LAST_MODIFIED_AT',
	Status = 'STATUS',
	UpdatedAt = 'UPDATED_AT',
}

export type ExportFileSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort export file by the selected field. */
	readonly field: ExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type ExportGiftCards = {
	readonly __typename?: 'ExportGiftCards';
	readonly errors: ReadonlyArray<ExportError>;
	/** The newly created export file job which is responsible for export data. */
	readonly exportFile?: Maybe<ExportFile>;
};

export type ExportGiftCardsInput = {
	/** Type of exported file. */
	readonly fileType: FileTypesEnum;
	/** Filtering options for gift cards. */
	readonly filter?: InputMaybe<GiftCardFilterInput>;
	/** List of gift cards IDs to export. */
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Determine which gift cards should be exported. */
	readonly scope: ExportScope;
};

export type ExportInfoInput = {
	/** List of attribute ids witch should be exported. */
	readonly attributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of channels ids which should be exported. */
	readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of product fields witch should be exported. */
	readonly fields?: InputMaybe<ReadonlyArray<ProductFieldEnum>>;
	/** List of warehouse ids witch should be exported. */
	readonly warehouses?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ExportProducts = {
	readonly __typename?: 'ExportProducts';
	readonly errors: ReadonlyArray<ExportError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly exportErrors: ReadonlyArray<ExportError>;
	/** The newly created export file job which is responsible for export data. */
	readonly exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
	/** Input with info about fields which should be exported. */
	readonly exportInfo?: InputMaybe<ExportInfoInput>;
	/** Type of exported file. */
	readonly fileType: FileTypesEnum;
	/** Filtering options for products. */
	readonly filter?: InputMaybe<ProductFilterInput>;
	/** List of products IDs to export. */
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Determine which products should be exported. */
	readonly scope: ExportScope;
};

export enum ExportScope {
	/** Export all products. */
	All = 'ALL',
	/** Export the filtered products. */
	Filter = 'FILTER',
	/** Export products with given ids. */
	Ids = 'IDS',
}

export type ExternalAuthentication = {
	readonly __typename?: 'ExternalAuthentication';
	/** ID of external authentication plugin. */
	readonly id: Scalars['String'];
	/** Name of external authentication plugin. */
	readonly name?: Maybe<Scalars['String']>;
};

/** Prepare external authentication url for user by custom plugin. */
export type ExternalAuthenticationUrl = {
	readonly __typename?: 'ExternalAuthenticationUrl';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** The data returned by authentication plugin. */
	readonly authenticationData?: Maybe<Scalars['JSONString']>;
	readonly errors: ReadonlyArray<AccountError>;
};

/** Logout user by custom plugin. */
export type ExternalLogout = {
	readonly __typename?: 'ExternalLogout';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** The data returned by authentication plugin. */
	readonly logoutData?: Maybe<Scalars['JSONString']>;
};

export type ExternalNotificationError = {
	readonly __typename?: 'ExternalNotificationError';
	/** The error code. */
	readonly code: ExternalNotificationErrorCodes;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ExternalNotificationErrorCodes {
	ChannelInactive = 'CHANNEL_INACTIVE',
	InvalidModelType = 'INVALID_MODEL_TYPE',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
}

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type ExternalNotificationTrigger = {
	readonly __typename?: 'ExternalNotificationTrigger';
	readonly errors: ReadonlyArray<ExternalNotificationError>;
};

export type ExternalNotificationTriggerInput = {
	/** External event type. This field is passed to a plugin as an event type. */
	readonly externalEventType: Scalars['String'];
	/** Additional payload that will be merged with the one based on the bussines object ID. */
	readonly extraPayload?: InputMaybe<Scalars['JSONString']>;
	/** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
	readonly ids: ReadonlyArray<Scalars['ID']>;
};

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
	readonly __typename?: 'ExternalObtainAccessTokens';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** CSRF token required to re-generate external access token. */
	readonly csrfToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AccountError>;
	/** The refresh token, required to re-generate external access token. */
	readonly refreshToken?: Maybe<Scalars['String']>;
	/** The token, required to authenticate. */
	readonly token?: Maybe<Scalars['String']>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
	readonly __typename?: 'ExternalRefresh';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** CSRF token required to re-generate external access token. */
	readonly csrfToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AccountError>;
	/** The refresh token, required to re-generate external access token. */
	readonly refreshToken?: Maybe<Scalars['String']>;
	/** The token, required to authenticate. */
	readonly token?: Maybe<Scalars['String']>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
	readonly __typename?: 'ExternalVerify';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** Determine if authentication data is valid or not. */
	readonly isValid: Scalars['Boolean'];
	/** User assigned to data. */
	readonly user?: Maybe<User>;
	/** External data. */
	readonly verifyData?: Maybe<Scalars['JSONString']>;
};

export type File = {
	readonly __typename?: 'File';
	/** Content type of the file. */
	readonly contentType?: Maybe<Scalars['String']>;
	/** The URL of the file. */
	readonly url: Scalars['String'];
};

/** An enumeration. */
export enum FileTypesEnum {
	Csv = 'CSV',
	Xlsx = 'XLSX',
}

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type FileUpload = {
	readonly __typename?: 'FileUpload';
	readonly errors: ReadonlyArray<UploadError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly uploadErrors: ReadonlyArray<UploadError>;
	readonly uploadedFile?: Maybe<File>;
};

/** Represents order fulfillment. */
export type Fulfillment = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Fulfillment';
		readonly created: Scalars['DateTime'];
		readonly fulfillmentOrder: Scalars['Int'];
		readonly id: Scalars['ID'];
		/** List of lines for the fulfillment. */
		readonly lines?: Maybe<ReadonlyArray<FulfillmentLine>>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly status: FulfillmentStatus;
		/** User-friendly fulfillment status. */
		readonly statusDisplay?: Maybe<Scalars['String']>;
		readonly trackingNumber: Scalars['String'];
		/** Warehouse from fulfillment was fulfilled. */
		readonly warehouse?: Maybe<Warehouse>;
	};

/** Represents order fulfillment. */
export type FulfillmentMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents order fulfillment. */
export type FulfillmentMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents order fulfillment. */
export type FulfillmentPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentApprove = {
	readonly __typename?: 'FulfillmentApprove';
	readonly errors: ReadonlyArray<OrderError>;
	/** An approved fulfillment. */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Order which fulfillment was approved. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentCancel = {
	readonly __typename?: 'FulfillmentCancel';
	readonly errors: ReadonlyArray<OrderError>;
	/** A canceled fulfillment. */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Order which fulfillment was cancelled. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type FulfillmentCancelInput = {
	/** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
	readonly warehouseId?: InputMaybe<Scalars['ID']>;
};

export type FulfillmentCanceled = Event & {
	readonly __typename?: 'FulfillmentCanceled';
	/**
	 * The fulfillment the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the fulfillment belongs to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type FulfillmentCreated = Event & {
	readonly __typename?: 'FulfillmentCreated';
	/**
	 * The fulfillment the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the fulfillment belongs to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
	readonly __typename?: 'FulfillmentLine';
	readonly id: Scalars['ID'];
	readonly orderLine?: Maybe<OrderLine>;
	readonly quantity: Scalars['Int'];
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentRefundProducts = {
	readonly __typename?: 'FulfillmentRefundProducts';
	readonly errors: ReadonlyArray<OrderError>;
	/** A refunded fulfillment. */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Order which fulfillment was refunded. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentReturnProducts = {
	readonly __typename?: 'FulfillmentReturnProducts';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which fulfillment was returned. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	/** A replace fulfillment. */
	readonly replaceFulfillment?: Maybe<Fulfillment>;
	/** A draft order which was created for products with replace flag. */
	readonly replaceOrder?: Maybe<Order>;
	/** A return fulfillment. */
	readonly returnFulfillment?: Maybe<Fulfillment>;
};

/** An enumeration. */
export enum FulfillmentStatus {
	Canceled = 'CANCELED',
	Fulfilled = 'FULFILLED',
	Refunded = 'REFUNDED',
	RefundedAndReturned = 'REFUNDED_AND_RETURNED',
	Replaced = 'REPLACED',
	Returned = 'RETURNED',
	WaitingForApproval = 'WAITING_FOR_APPROVAL',
}

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type FulfillmentUpdateTracking = {
	readonly __typename?: 'FulfillmentUpdateTracking';
	readonly errors: ReadonlyArray<OrderError>;
	/** A fulfillment with updated tracking. */
	readonly fulfillment?: Maybe<Fulfillment>;
	/** Order for which fulfillment was updated. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
	/** If true, send an email notification to the customer. */
	readonly notifyCustomer?: InputMaybe<Scalars['Boolean']>;
	/** Fulfillment tracking number. */
	readonly trackingNumber?: InputMaybe<Scalars['String']>;
};

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
	readonly __typename?: 'GatewayConfigLine';
	/** Gateway config key. */
	readonly field: Scalars['String'];
	/** Gateway config value for key. */
	readonly value?: Maybe<Scalars['String']>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'GiftCard';
		/**
		 * App which created the gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 *
		 * Requires one of the following permissions: MANAGE_APPS, OWNER.
		 */
		readonly app?: Maybe<App>;
		/**
		 * Slug of the channel where the gift card was bought.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly boughtInChannel?: Maybe<Scalars['String']>;
		/** Gift card code. Can be fetched by a staff member with MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
		readonly code: Scalars['String'];
		readonly created: Scalars['DateTime'];
		/**
		 * The user who bought or issued a gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly createdBy?: Maybe<User>;
		/**
		 * Email address of the user who bought or issued gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 *
		 * Requires one of the following permissions: MANAGE_USERS, OWNER.
		 */
		readonly createdByEmail?: Maybe<Scalars['String']>;
		readonly currentBalance?: Maybe<Money>;
		/** Code in format which allows displaying in a user interface. */
		readonly displayCode: Scalars['String'];
		/**
		 * End date of gift card.
		 * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
		 */
		readonly endDate?: Maybe<Scalars['DateTime']>;
		/**
		 * List of events associated with the gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 *
		 * Requires one of the following permissions: MANAGE_GIFT_CARD.
		 */
		readonly events: ReadonlyArray<GiftCardEvent>;
		readonly expiryDate?: Maybe<Scalars['Date']>;
		readonly id: Scalars['ID'];
		readonly initialBalance?: Maybe<Money>;
		readonly isActive: Scalars['Boolean'];
		/** Last 4 characters of gift card code. */
		readonly last4CodeChars: Scalars['String'];
		readonly lastUsedOn?: Maybe<Scalars['DateTime']>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/**
		 * Related gift card product.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly product?: Maybe<Product>;
		/**
		 * Start date of gift card.
		 * @deprecated This field will be removed in Saleor 4.0.
		 */
		readonly startDate?: Maybe<Scalars['DateTime']>;
		/**
		 * The gift card tag.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 *
		 * Requires one of the following permissions: MANAGE_GIFT_CARD.
		 */
		readonly tags: ReadonlyArray<GiftCardTag>;
		/**
		 * The customer who used a gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly usedBy?: Maybe<User>;
		/**
		 * Email address of the customer who used a gift card.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly usedByEmail?: Maybe<Scalars['String']>;
		/**
		 * The customer who bought a gift card.
		 * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
		 */
		readonly user?: Maybe<User>;
	};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardEventsArgs = {
	filter?: InputMaybe<GiftCardEventFilterInput>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldArgs = {
	key: Scalars['String'];
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCardPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardActivate = {
	readonly __typename?: 'GiftCardActivate';
	readonly errors: ReadonlyArray<GiftCardError>;
	/** Activated gift card. */
	readonly giftCard?: Maybe<GiftCard>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardAddNote = {
	readonly __typename?: 'GiftCardAddNote';
	readonly errors: ReadonlyArray<GiftCardError>;
	/** Gift card note created. */
	readonly event?: Maybe<GiftCardEvent>;
	/** Gift card with the note added. */
	readonly giftCard?: Maybe<GiftCard>;
};

export type GiftCardAddNoteInput = {
	/** Note message. */
	readonly message: Scalars['String'];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkActivate = {
	readonly __typename?: 'GiftCardBulkActivate';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<GiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkCreate = {
	readonly __typename?: 'GiftCardBulkCreate';
	/** Returns how many objects were created. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<GiftCardError>;
	/** List of created gift cards. */
	readonly giftCards: ReadonlyArray<GiftCard>;
};

export type GiftCardBulkCreateInput = {
	/** Balance of the gift card. */
	readonly balance: PriceInput;
	/** The number of cards to issue. */
	readonly count: Scalars['Int'];
	/** The gift card expiry date. */
	readonly expiryDate?: InputMaybe<Scalars['Date']>;
	/** Determine if gift card is active. */
	readonly isActive: Scalars['Boolean'];
	/** The gift card tags. */
	readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDeactivate = {
	readonly __typename?: 'GiftCardBulkDeactivate';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<GiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardBulkDelete = {
	readonly __typename?: 'GiftCardBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<GiftCardError>;
};

export type GiftCardCountableConnection = {
	readonly __typename?: 'GiftCardCountableConnection';
	readonly edges: ReadonlyArray<GiftCardCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardCountableEdge = {
	readonly __typename?: 'GiftCardCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: GiftCard;
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardCreate = {
	readonly __typename?: 'GiftCardCreate';
	readonly errors: ReadonlyArray<GiftCardError>;
	readonly giftCard?: Maybe<GiftCard>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

export type GiftCardCreateInput = {
	/**
	 * The gift card tags to add.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly addTags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/** Balance of the gift card. */
	readonly balance: PriceInput;
	/**
	 * Slug of a channel from which the email should be sent.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/**
	 * Code to use the gift card.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
	 */
	readonly code?: InputMaybe<Scalars['String']>;
	/**
	 * End date of the gift card in ISO 8601 format.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
	 */
	readonly endDate?: InputMaybe<Scalars['Date']>;
	/**
	 * The gift card expiry date.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly expiryDate?: InputMaybe<Scalars['Date']>;
	/**
	 * Determine if gift card is active.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly isActive: Scalars['Boolean'];
	/**
	 * The gift card note from the staff member.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly note?: InputMaybe<Scalars['String']>;
	/**
	 * Start date of the gift card in ISO 8601 format.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	readonly startDate?: InputMaybe<Scalars['Date']>;
	/** Email of the customer to whom gift card will be sent. */
	readonly userEmail?: InputMaybe<Scalars['String']>;
};

export type GiftCardCreated = Event & {
	readonly __typename?: 'GiftCardCreated';
	/**
	 * The gift card the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly giftCard?: Maybe<GiftCard>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDeactivate = {
	readonly __typename?: 'GiftCardDeactivate';
	readonly errors: ReadonlyArray<GiftCardError>;
	/** Deactivated gift card. */
	readonly giftCard?: Maybe<GiftCard>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardDelete = {
	readonly __typename?: 'GiftCardDelete';
	readonly errors: ReadonlyArray<GiftCardError>;
	readonly giftCard?: Maybe<GiftCard>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

export type GiftCardDeleted = Event & {
	readonly __typename?: 'GiftCardDeleted';
	/**
	 * The gift card the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly giftCard?: Maybe<GiftCard>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type GiftCardError = {
	readonly __typename?: 'GiftCardError';
	/** The error code. */
	readonly code: GiftCardErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of tag values that cause the error. */
	readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** An enumeration. */
export enum GiftCardErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	ExpiredGiftCard = 'EXPIRED_GIFT_CARD',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardEvent = Node & {
	readonly __typename?: 'GiftCardEvent';
	/** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
	readonly app?: Maybe<App>;
	/** The gift card balance. */
	readonly balance?: Maybe<GiftCardEventBalance>;
	/** Date when event happened at in ISO 8601 format. */
	readonly date?: Maybe<Scalars['DateTime']>;
	/** Email of the customer. */
	readonly email?: Maybe<Scalars['String']>;
	/** The gift card expiry date. */
	readonly expiryDate?: Maybe<Scalars['Date']>;
	readonly id: Scalars['ID'];
	/** Content of the event. */
	readonly message?: Maybe<Scalars['String']>;
	/** Previous gift card expiry date. */
	readonly oldExpiryDate?: Maybe<Scalars['Date']>;
	/** The list of old gift card tags. */
	readonly oldTags?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The order ID where gift card was used or bought. */
	readonly orderId?: Maybe<Scalars['ID']>;
	/** User-friendly number of an order where gift card was used or bought. */
	readonly orderNumber?: Maybe<Scalars['String']>;
	/** The list of gift card tags. */
	readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** Gift card event type. */
	readonly type?: Maybe<GiftCardEventsEnum>;
	/** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
	readonly user?: Maybe<User>;
};

export type GiftCardEventBalance = {
	readonly __typename?: 'GiftCardEventBalance';
	/** Current balance of the gift card. */
	readonly currentBalance: Money;
	/** Initial balance of the gift card. */
	readonly initialBalance?: Maybe<Money>;
	/** Previous current balance of the gift card. */
	readonly oldCurrentBalance?: Maybe<Money>;
	/** Previous initial balance of the gift card. */
	readonly oldInitialBalance?: Maybe<Money>;
};

export type GiftCardEventFilterInput = {
	readonly orders?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly type?: InputMaybe<GiftCardEventsEnum>;
};

/** An enumeration. */
export enum GiftCardEventsEnum {
	Activated = 'ACTIVATED',
	BalanceReset = 'BALANCE_RESET',
	Bought = 'BOUGHT',
	Deactivated = 'DEACTIVATED',
	ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
	Issued = 'ISSUED',
	NoteAdded = 'NOTE_ADDED',
	Resent = 'RESENT',
	SentToCustomer = 'SENT_TO_CUSTOMER',
	TagsUpdated = 'TAGS_UPDATED',
	Updated = 'UPDATED',
	UsedInOrder = 'USED_IN_ORDER',
}

export type GiftCardFilterInput = {
	readonly code?: InputMaybe<Scalars['String']>;
	readonly currency?: InputMaybe<Scalars['String']>;
	readonly currentBalance?: InputMaybe<PriceRangeInput>;
	readonly initialBalance?: InputMaybe<PriceRangeInput>;
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	readonly used?: InputMaybe<Scalars['Boolean']>;
	readonly usedBy?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardResend = {
	readonly __typename?: 'GiftCardResend';
	readonly errors: ReadonlyArray<GiftCardError>;
	/** Gift card which has been sent. */
	readonly giftCard?: Maybe<GiftCard>;
};

export type GiftCardResendInput = {
	/** Slug of a channel from which the email should be sent. */
	readonly channel: Scalars['String'];
	/** Email to which gift card should be send. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** ID of a gift card to resend. */
	readonly id: Scalars['ID'];
};

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
	readonly __typename?: 'GiftCardSettings';
	/** The gift card expiry period settings. */
	readonly expiryPeriod?: Maybe<TimePeriod>;
	/** The gift card expiry type settings. */
	readonly expiryType: GiftCardSettingsExpiryTypeEnum;
};

export type GiftCardSettingsError = {
	readonly __typename?: 'GiftCardSettingsError';
	/** The error code. */
	readonly code: GiftCardSettingsErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum GiftCardSettingsErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	Required = 'REQUIRED',
}

/** An enumeration. */
export enum GiftCardSettingsExpiryTypeEnum {
	ExpiryPeriod = 'EXPIRY_PERIOD',
	NeverExpire = 'NEVER_EXPIRE',
}

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardSettingsUpdate = {
	readonly __typename?: 'GiftCardSettingsUpdate';
	readonly errors: ReadonlyArray<GiftCardSettingsError>;
	/** Gift card settings. */
	readonly giftCardSettings?: Maybe<GiftCardSettings>;
};

export type GiftCardSettingsUpdateInput = {
	/** Defines gift card expiry period. */
	readonly expiryPeriod?: InputMaybe<TimePeriodInputType>;
	/** Defines gift card default expiry settings. */
	readonly expiryType?: InputMaybe<GiftCardSettingsExpiryTypeEnum>;
};

export enum GiftCardSortField {
	/** Sort orders by current balance. */
	CurrentBalance = 'CURRENT_BALANCE',
	/** Sort orders by product. */
	Product = 'PRODUCT',
	/** Sort orders by used by. */
	UsedBy = 'USED_BY',
}

export type GiftCardSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort gift cards by the selected field. */
	readonly field: GiftCardSortField;
};

export type GiftCardStatusChanged = Event & {
	readonly __typename?: 'GiftCardStatusChanged';
	/**
	 * The gift card the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly giftCard?: Maybe<GiftCard>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type GiftCardTag = Node & {
	readonly __typename?: 'GiftCardTag';
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
};

export type GiftCardTagCountableConnection = {
	readonly __typename?: 'GiftCardTagCountableConnection';
	readonly edges: ReadonlyArray<GiftCardTagCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type GiftCardTagCountableEdge = {
	readonly __typename?: 'GiftCardTagCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: GiftCardTag;
};

export type GiftCardTagFilterInput = {
	readonly search?: InputMaybe<Scalars['String']>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type GiftCardUpdate = {
	readonly __typename?: 'GiftCardUpdate';
	readonly errors: ReadonlyArray<GiftCardError>;
	readonly giftCard?: Maybe<GiftCard>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly giftCardErrors: ReadonlyArray<GiftCardError>;
};

export type GiftCardUpdateInput = {
	/**
	 * The gift card tags to add.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly addTags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/**
	 * The gift card balance amount.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly balanceAmount?: InputMaybe<Scalars['PositiveDecimal']>;
	/**
	 * End date of the gift card in ISO 8601 format.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
	 */
	readonly endDate?: InputMaybe<Scalars['Date']>;
	/**
	 * The gift card expiry date.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly expiryDate?: InputMaybe<Scalars['Date']>;
	/**
	 * The gift card tags to remove.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly removeTags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/**
	 * Start date of the gift card in ISO 8601 format.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	readonly startDate?: InputMaybe<Scalars['Date']>;
};

export type GiftCardUpdated = Event & {
	readonly __typename?: 'GiftCardUpdated';
	/**
	 * The gift card the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly giftCard?: Maybe<GiftCard>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Represents permission group data. */
export type Group = Node & {
	readonly __typename?: 'Group';
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/** List of group permissions */
	readonly permissions?: Maybe<ReadonlyArray<Permission>>;
	/** True, if the currently authenticated user has rights to manage a group. */
	readonly userCanManage: Scalars['Boolean'];
	/**
	 * List of group users
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly users?: Maybe<ReadonlyArray<User>>;
};

export type GroupCountableConnection = {
	readonly __typename?: 'GroupCountableConnection';
	readonly edges: ReadonlyArray<GroupCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type GroupCountableEdge = {
	readonly __typename?: 'GroupCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Group;
};

/** Represents an image. */
export type Image = {
	readonly __typename?: 'Image';
	/** Alt text for an image. */
	readonly alt?: Maybe<Scalars['String']>;
	/** The URL of the image. */
	readonly url: Scalars['String'];
};

export type IntRangeInput = {
	/** Value greater than or equal to. */
	readonly gte?: InputMaybe<Scalars['Int']>;
	/** Value less than or equal to. */
	readonly lte?: InputMaybe<Scalars['Int']>;
};

/** Represents an Invoice. */
export type Invoice = Job &
	Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Invoice';
		readonly createdAt: Scalars['DateTime'];
		readonly externalUrl?: Maybe<Scalars['String']>;
		/** The ID of the object. */
		readonly id: Scalars['ID'];
		readonly message?: Maybe<Scalars['String']>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly number?: Maybe<Scalars['String']>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Job status. */
		readonly status: JobStatusEnum;
		readonly updatedAt: Scalars['DateTime'];
		/** URL to download an invoice. */
		readonly url?: Maybe<Scalars['String']>;
	};

/** Represents an Invoice. */
export type InvoiceMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an Invoice. */
export type InvoiceMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents an Invoice. */
export type InvoicePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an Invoice. */
export type InvoicePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceCreate = {
	readonly __typename?: 'InvoiceCreate';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type InvoiceCreateInput = {
	/** Invoice number. */
	readonly number: Scalars['String'];
	/** URL of an invoice to download. */
	readonly url: Scalars['String'];
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceDelete = {
	readonly __typename?: 'InvoiceDelete';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type InvoiceDeleted = Event & {
	readonly __typename?: 'InvoiceDeleted';
	/**
	 * The invoice the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly invoice?: Maybe<Invoice>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type InvoiceError = {
	readonly __typename?: 'InvoiceError';
	/** The error code. */
	readonly code: InvoiceErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum InvoiceErrorCode {
	EmailNotSet = 'EMAIL_NOT_SET',
	InvalidStatus = 'INVALID_STATUS',
	NotFound = 'NOT_FOUND',
	NotReady = 'NOT_READY',
	NoInvoicePlugin = 'NO_INVOICE_PLUGIN',
	NumberNotSet = 'NUMBER_NOT_SET',
	Required = 'REQUIRED',
	UrlNotSet = 'URL_NOT_SET',
}

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequest = {
	readonly __typename?: 'InvoiceRequest';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
	/** Order related to an invoice. */
	readonly order?: Maybe<Order>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceRequestDelete = {
	readonly __typename?: 'InvoiceRequestDelete';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type InvoiceRequested = Event & {
	readonly __typename?: 'InvoiceRequested';
	/**
	 * The invoice the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly invoice?: Maybe<Invoice>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceSendNotification = {
	readonly __typename?: 'InvoiceSendNotification';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type InvoiceSent = Event & {
	readonly __typename?: 'InvoiceSent';
	/**
	 * The invoice the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly invoice?: Maybe<Invoice>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type InvoiceUpdate = {
	readonly __typename?: 'InvoiceUpdate';
	readonly errors: ReadonlyArray<InvoiceError>;
	readonly invoice?: Maybe<Invoice>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly invoiceErrors: ReadonlyArray<InvoiceError>;
};

export type IssuingPrincipal = App | User;

export type Job = {
	/** Created date time of job in ISO 8601 format. */
	readonly createdAt: Scalars['DateTime'];
	/** Job message. */
	readonly message?: Maybe<Scalars['String']>;
	/** Job status. */
	readonly status: JobStatusEnum;
	/** Date time of job last update in ISO 8601 format. */
	readonly updatedAt: Scalars['DateTime'];
};

/** An enumeration. */
export enum JobStatusEnum {
	Deleted = 'DELETED',
	Failed = 'FAILED',
	Pending = 'PENDING',
	Success = 'SUCCESS',
}

/** An enumeration. */
export enum LanguageCodeEnum {
	Af = 'AF',
	AfNa = 'AF_NA',
	AfZa = 'AF_ZA',
	Agq = 'AGQ',
	AgqCm = 'AGQ_CM',
	Ak = 'AK',
	AkGh = 'AK_GH',
	Am = 'AM',
	AmEt = 'AM_ET',
	Ar = 'AR',
	ArAe = 'AR_AE',
	ArBh = 'AR_BH',
	ArDj = 'AR_DJ',
	ArDz = 'AR_DZ',
	ArEg = 'AR_EG',
	ArEh = 'AR_EH',
	ArEr = 'AR_ER',
	ArIl = 'AR_IL',
	ArIq = 'AR_IQ',
	ArJo = 'AR_JO',
	ArKm = 'AR_KM',
	ArKw = 'AR_KW',
	ArLb = 'AR_LB',
	ArLy = 'AR_LY',
	ArMa = 'AR_MA',
	ArMr = 'AR_MR',
	ArOm = 'AR_OM',
	ArPs = 'AR_PS',
	ArQa = 'AR_QA',
	ArSa = 'AR_SA',
	ArSd = 'AR_SD',
	ArSo = 'AR_SO',
	ArSs = 'AR_SS',
	ArSy = 'AR_SY',
	ArTd = 'AR_TD',
	ArTn = 'AR_TN',
	ArYe = 'AR_YE',
	As = 'AS',
	Asa = 'ASA',
	AsaTz = 'ASA_TZ',
	Ast = 'AST',
	AstEs = 'AST_ES',
	AsIn = 'AS_IN',
	Az = 'AZ',
	AzCyrl = 'AZ_CYRL',
	AzCyrlAz = 'AZ_CYRL_AZ',
	AzLatn = 'AZ_LATN',
	AzLatnAz = 'AZ_LATN_AZ',
	Bas = 'BAS',
	BasCm = 'BAS_CM',
	Be = 'BE',
	Bem = 'BEM',
	BemZm = 'BEM_ZM',
	Bez = 'BEZ',
	BezTz = 'BEZ_TZ',
	BeBy = 'BE_BY',
	Bg = 'BG',
	BgBg = 'BG_BG',
	Bm = 'BM',
	BmMl = 'BM_ML',
	Bn = 'BN',
	BnBd = 'BN_BD',
	BnIn = 'BN_IN',
	Bo = 'BO',
	BoCn = 'BO_CN',
	BoIn = 'BO_IN',
	Br = 'BR',
	Brx = 'BRX',
	BrxIn = 'BRX_IN',
	BrFr = 'BR_FR',
	Bs = 'BS',
	BsCyrl = 'BS_CYRL',
	BsCyrlBa = 'BS_CYRL_BA',
	BsLatn = 'BS_LATN',
	BsLatnBa = 'BS_LATN_BA',
	Ca = 'CA',
	CaAd = 'CA_AD',
	CaEs = 'CA_ES',
	CaEsValencia = 'CA_ES_VALENCIA',
	CaFr = 'CA_FR',
	CaIt = 'CA_IT',
	Ccp = 'CCP',
	CcpBd = 'CCP_BD',
	CcpIn = 'CCP_IN',
	Ce = 'CE',
	Ceb = 'CEB',
	CebPh = 'CEB_PH',
	CeRu = 'CE_RU',
	Cgg = 'CGG',
	CggUg = 'CGG_UG',
	Chr = 'CHR',
	ChrUs = 'CHR_US',
	Ckb = 'CKB',
	CkbIq = 'CKB_IQ',
	CkbIr = 'CKB_IR',
	Cs = 'CS',
	CsCz = 'CS_CZ',
	Cu = 'CU',
	CuRu = 'CU_RU',
	Cy = 'CY',
	CyGb = 'CY_GB',
	Da = 'DA',
	Dav = 'DAV',
	DavKe = 'DAV_KE',
	DaDk = 'DA_DK',
	DaGl = 'DA_GL',
	De = 'DE',
	DeAt = 'DE_AT',
	DeBe = 'DE_BE',
	DeCh = 'DE_CH',
	DeDe = 'DE_DE',
	DeIt = 'DE_IT',
	DeLi = 'DE_LI',
	DeLu = 'DE_LU',
	Dje = 'DJE',
	DjeNe = 'DJE_NE',
	Dsb = 'DSB',
	DsbDe = 'DSB_DE',
	Dua = 'DUA',
	DuaCm = 'DUA_CM',
	Dyo = 'DYO',
	DyoSn = 'DYO_SN',
	Dz = 'DZ',
	DzBt = 'DZ_BT',
	Ebu = 'EBU',
	EbuKe = 'EBU_KE',
	Ee = 'EE',
	EeGh = 'EE_GH',
	EeTg = 'EE_TG',
	El = 'EL',
	ElCy = 'EL_CY',
	ElGr = 'EL_GR',
	En = 'EN',
	EnAe = 'EN_AE',
	EnAg = 'EN_AG',
	EnAi = 'EN_AI',
	EnAs = 'EN_AS',
	EnAt = 'EN_AT',
	EnAu = 'EN_AU',
	EnBb = 'EN_BB',
	EnBe = 'EN_BE',
	EnBi = 'EN_BI',
	EnBm = 'EN_BM',
	EnBs = 'EN_BS',
	EnBw = 'EN_BW',
	EnBz = 'EN_BZ',
	EnCa = 'EN_CA',
	EnCc = 'EN_CC',
	EnCh = 'EN_CH',
	EnCk = 'EN_CK',
	EnCm = 'EN_CM',
	EnCx = 'EN_CX',
	EnCy = 'EN_CY',
	EnDe = 'EN_DE',
	EnDg = 'EN_DG',
	EnDk = 'EN_DK',
	EnDm = 'EN_DM',
	EnEr = 'EN_ER',
	EnFi = 'EN_FI',
	EnFj = 'EN_FJ',
	EnFk = 'EN_FK',
	EnFm = 'EN_FM',
	EnGb = 'EN_GB',
	EnGd = 'EN_GD',
	EnGg = 'EN_GG',
	EnGh = 'EN_GH',
	EnGi = 'EN_GI',
	EnGm = 'EN_GM',
	EnGu = 'EN_GU',
	EnGy = 'EN_GY',
	EnHk = 'EN_HK',
	EnIe = 'EN_IE',
	EnIl = 'EN_IL',
	EnIm = 'EN_IM',
	EnIn = 'EN_IN',
	EnIo = 'EN_IO',
	EnJe = 'EN_JE',
	EnJm = 'EN_JM',
	EnKe = 'EN_KE',
	EnKi = 'EN_KI',
	EnKn = 'EN_KN',
	EnKy = 'EN_KY',
	EnLc = 'EN_LC',
	EnLr = 'EN_LR',
	EnLs = 'EN_LS',
	EnMg = 'EN_MG',
	EnMh = 'EN_MH',
	EnMo = 'EN_MO',
	EnMp = 'EN_MP',
	EnMs = 'EN_MS',
	EnMt = 'EN_MT',
	EnMu = 'EN_MU',
	EnMw = 'EN_MW',
	EnMy = 'EN_MY',
	EnNa = 'EN_NA',
	EnNf = 'EN_NF',
	EnNg = 'EN_NG',
	EnNl = 'EN_NL',
	EnNr = 'EN_NR',
	EnNu = 'EN_NU',
	EnNz = 'EN_NZ',
	EnPg = 'EN_PG',
	EnPh = 'EN_PH',
	EnPk = 'EN_PK',
	EnPn = 'EN_PN',
	EnPr = 'EN_PR',
	EnPw = 'EN_PW',
	EnRw = 'EN_RW',
	EnSb = 'EN_SB',
	EnSc = 'EN_SC',
	EnSd = 'EN_SD',
	EnSe = 'EN_SE',
	EnSg = 'EN_SG',
	EnSh = 'EN_SH',
	EnSi = 'EN_SI',
	EnSl = 'EN_SL',
	EnSs = 'EN_SS',
	EnSx = 'EN_SX',
	EnSz = 'EN_SZ',
	EnTc = 'EN_TC',
	EnTk = 'EN_TK',
	EnTo = 'EN_TO',
	EnTt = 'EN_TT',
	EnTv = 'EN_TV',
	EnTz = 'EN_TZ',
	EnUg = 'EN_UG',
	EnUm = 'EN_UM',
	EnUs = 'EN_US',
	EnVc = 'EN_VC',
	EnVg = 'EN_VG',
	EnVi = 'EN_VI',
	EnVu = 'EN_VU',
	EnWs = 'EN_WS',
	EnZa = 'EN_ZA',
	EnZm = 'EN_ZM',
	EnZw = 'EN_ZW',
	Eo = 'EO',
	Es = 'ES',
	EsAr = 'ES_AR',
	EsBo = 'ES_BO',
	EsBr = 'ES_BR',
	EsBz = 'ES_BZ',
	EsCl = 'ES_CL',
	EsCo = 'ES_CO',
	EsCr = 'ES_CR',
	EsCu = 'ES_CU',
	EsDo = 'ES_DO',
	EsEa = 'ES_EA',
	EsEc = 'ES_EC',
	EsEs = 'ES_ES',
	EsGq = 'ES_GQ',
	EsGt = 'ES_GT',
	EsHn = 'ES_HN',
	EsIc = 'ES_IC',
	EsMx = 'ES_MX',
	EsNi = 'ES_NI',
	EsPa = 'ES_PA',
	EsPe = 'ES_PE',
	EsPh = 'ES_PH',
	EsPr = 'ES_PR',
	EsPy = 'ES_PY',
	EsSv = 'ES_SV',
	EsUs = 'ES_US',
	EsUy = 'ES_UY',
	EsVe = 'ES_VE',
	Et = 'ET',
	EtEe = 'ET_EE',
	Eu = 'EU',
	EuEs = 'EU_ES',
	Ewo = 'EWO',
	EwoCm = 'EWO_CM',
	Fa = 'FA',
	FaAf = 'FA_AF',
	FaIr = 'FA_IR',
	Ff = 'FF',
	FfAdlm = 'FF_ADLM',
	FfAdlmBf = 'FF_ADLM_BF',
	FfAdlmCm = 'FF_ADLM_CM',
	FfAdlmGh = 'FF_ADLM_GH',
	FfAdlmGm = 'FF_ADLM_GM',
	FfAdlmGn = 'FF_ADLM_GN',
	FfAdlmGw = 'FF_ADLM_GW',
	FfAdlmLr = 'FF_ADLM_LR',
	FfAdlmMr = 'FF_ADLM_MR',
	FfAdlmNe = 'FF_ADLM_NE',
	FfAdlmNg = 'FF_ADLM_NG',
	FfAdlmSl = 'FF_ADLM_SL',
	FfAdlmSn = 'FF_ADLM_SN',
	FfLatn = 'FF_LATN',
	FfLatnBf = 'FF_LATN_BF',
	FfLatnCm = 'FF_LATN_CM',
	FfLatnGh = 'FF_LATN_GH',
	FfLatnGm = 'FF_LATN_GM',
	FfLatnGn = 'FF_LATN_GN',
	FfLatnGw = 'FF_LATN_GW',
	FfLatnLr = 'FF_LATN_LR',
	FfLatnMr = 'FF_LATN_MR',
	FfLatnNe = 'FF_LATN_NE',
	FfLatnNg = 'FF_LATN_NG',
	FfLatnSl = 'FF_LATN_SL',
	FfLatnSn = 'FF_LATN_SN',
	Fi = 'FI',
	Fil = 'FIL',
	FilPh = 'FIL_PH',
	FiFi = 'FI_FI',
	Fo = 'FO',
	FoDk = 'FO_DK',
	FoFo = 'FO_FO',
	Fr = 'FR',
	FrBe = 'FR_BE',
	FrBf = 'FR_BF',
	FrBi = 'FR_BI',
	FrBj = 'FR_BJ',
	FrBl = 'FR_BL',
	FrCa = 'FR_CA',
	FrCd = 'FR_CD',
	FrCf = 'FR_CF',
	FrCg = 'FR_CG',
	FrCh = 'FR_CH',
	FrCi = 'FR_CI',
	FrCm = 'FR_CM',
	FrDj = 'FR_DJ',
	FrDz = 'FR_DZ',
	FrFr = 'FR_FR',
	FrGa = 'FR_GA',
	FrGf = 'FR_GF',
	FrGn = 'FR_GN',
	FrGp = 'FR_GP',
	FrGq = 'FR_GQ',
	FrHt = 'FR_HT',
	FrKm = 'FR_KM',
	FrLu = 'FR_LU',
	FrMa = 'FR_MA',
	FrMc = 'FR_MC',
	FrMf = 'FR_MF',
	FrMg = 'FR_MG',
	FrMl = 'FR_ML',
	FrMq = 'FR_MQ',
	FrMr = 'FR_MR',
	FrMu = 'FR_MU',
	FrNc = 'FR_NC',
	FrNe = 'FR_NE',
	FrPf = 'FR_PF',
	FrPm = 'FR_PM',
	FrRe = 'FR_RE',
	FrRw = 'FR_RW',
	FrSc = 'FR_SC',
	FrSn = 'FR_SN',
	FrSy = 'FR_SY',
	FrTd = 'FR_TD',
	FrTg = 'FR_TG',
	FrTn = 'FR_TN',
	FrVu = 'FR_VU',
	FrWf = 'FR_WF',
	FrYt = 'FR_YT',
	Fur = 'FUR',
	FurIt = 'FUR_IT',
	Fy = 'FY',
	FyNl = 'FY_NL',
	Ga = 'GA',
	GaGb = 'GA_GB',
	GaIe = 'GA_IE',
	Gd = 'GD',
	GdGb = 'GD_GB',
	Gl = 'GL',
	GlEs = 'GL_ES',
	Gsw = 'GSW',
	GswCh = 'GSW_CH',
	GswFr = 'GSW_FR',
	GswLi = 'GSW_LI',
	Gu = 'GU',
	Guz = 'GUZ',
	GuzKe = 'GUZ_KE',
	GuIn = 'GU_IN',
	Gv = 'GV',
	GvIm = 'GV_IM',
	Ha = 'HA',
	Haw = 'HAW',
	HawUs = 'HAW_US',
	HaGh = 'HA_GH',
	HaNe = 'HA_NE',
	HaNg = 'HA_NG',
	He = 'HE',
	HeIl = 'HE_IL',
	Hi = 'HI',
	HiIn = 'HI_IN',
	Hr = 'HR',
	HrBa = 'HR_BA',
	HrHr = 'HR_HR',
	Hsb = 'HSB',
	HsbDe = 'HSB_DE',
	Hu = 'HU',
	HuHu = 'HU_HU',
	Hy = 'HY',
	HyAm = 'HY_AM',
	Ia = 'IA',
	Id = 'ID',
	IdId = 'ID_ID',
	Ig = 'IG',
	IgNg = 'IG_NG',
	Ii = 'II',
	IiCn = 'II_CN',
	Is = 'IS',
	IsIs = 'IS_IS',
	It = 'IT',
	ItCh = 'IT_CH',
	ItIt = 'IT_IT',
	ItSm = 'IT_SM',
	ItVa = 'IT_VA',
	Ja = 'JA',
	JaJp = 'JA_JP',
	Jgo = 'JGO',
	JgoCm = 'JGO_CM',
	Jmc = 'JMC',
	JmcTz = 'JMC_TZ',
	Jv = 'JV',
	JvId = 'JV_ID',
	Ka = 'KA',
	Kab = 'KAB',
	KabDz = 'KAB_DZ',
	Kam = 'KAM',
	KamKe = 'KAM_KE',
	KaGe = 'KA_GE',
	Kde = 'KDE',
	KdeTz = 'KDE_TZ',
	Kea = 'KEA',
	KeaCv = 'KEA_CV',
	Khq = 'KHQ',
	KhqMl = 'KHQ_ML',
	Ki = 'KI',
	KiKe = 'KI_KE',
	Kk = 'KK',
	Kkj = 'KKJ',
	KkjCm = 'KKJ_CM',
	KkKz = 'KK_KZ',
	Kl = 'KL',
	Kln = 'KLN',
	KlnKe = 'KLN_KE',
	KlGl = 'KL_GL',
	Km = 'KM',
	KmKh = 'KM_KH',
	Kn = 'KN',
	KnIn = 'KN_IN',
	Ko = 'KO',
	Kok = 'KOK',
	KokIn = 'KOK_IN',
	KoKp = 'KO_KP',
	KoKr = 'KO_KR',
	Ks = 'KS',
	Ksb = 'KSB',
	KsbTz = 'KSB_TZ',
	Ksf = 'KSF',
	KsfCm = 'KSF_CM',
	Ksh = 'KSH',
	KshDe = 'KSH_DE',
	KsArab = 'KS_ARAB',
	KsArabIn = 'KS_ARAB_IN',
	Ku = 'KU',
	KuTr = 'KU_TR',
	Kw = 'KW',
	KwGb = 'KW_GB',
	Ky = 'KY',
	KyKg = 'KY_KG',
	Lag = 'LAG',
	LagTz = 'LAG_TZ',
	Lb = 'LB',
	LbLu = 'LB_LU',
	Lg = 'LG',
	LgUg = 'LG_UG',
	Lkt = 'LKT',
	LktUs = 'LKT_US',
	Ln = 'LN',
	LnAo = 'LN_AO',
	LnCd = 'LN_CD',
	LnCf = 'LN_CF',
	LnCg = 'LN_CG',
	Lo = 'LO',
	LoLa = 'LO_LA',
	Lrc = 'LRC',
	LrcIq = 'LRC_IQ',
	LrcIr = 'LRC_IR',
	Lt = 'LT',
	LtLt = 'LT_LT',
	Lu = 'LU',
	Luo = 'LUO',
	LuoKe = 'LUO_KE',
	Luy = 'LUY',
	LuyKe = 'LUY_KE',
	LuCd = 'LU_CD',
	Lv = 'LV',
	LvLv = 'LV_LV',
	Mai = 'MAI',
	MaiIn = 'MAI_IN',
	Mas = 'MAS',
	MasKe = 'MAS_KE',
	MasTz = 'MAS_TZ',
	Mer = 'MER',
	MerKe = 'MER_KE',
	Mfe = 'MFE',
	MfeMu = 'MFE_MU',
	Mg = 'MG',
	Mgh = 'MGH',
	MghMz = 'MGH_MZ',
	Mgo = 'MGO',
	MgoCm = 'MGO_CM',
	MgMg = 'MG_MG',
	Mi = 'MI',
	MiNz = 'MI_NZ',
	Mk = 'MK',
	MkMk = 'MK_MK',
	Ml = 'ML',
	MlIn = 'ML_IN',
	Mn = 'MN',
	Mni = 'MNI',
	MniBeng = 'MNI_BENG',
	MniBengIn = 'MNI_BENG_IN',
	MnMn = 'MN_MN',
	Mr = 'MR',
	MrIn = 'MR_IN',
	Ms = 'MS',
	MsBn = 'MS_BN',
	MsId = 'MS_ID',
	MsMy = 'MS_MY',
	MsSg = 'MS_SG',
	Mt = 'MT',
	MtMt = 'MT_MT',
	Mua = 'MUA',
	MuaCm = 'MUA_CM',
	My = 'MY',
	MyMm = 'MY_MM',
	Mzn = 'MZN',
	MznIr = 'MZN_IR',
	Naq = 'NAQ',
	NaqNa = 'NAQ_NA',
	Nb = 'NB',
	NbNo = 'NB_NO',
	NbSj = 'NB_SJ',
	Nd = 'ND',
	Nds = 'NDS',
	NdsDe = 'NDS_DE',
	NdsNl = 'NDS_NL',
	NdZw = 'ND_ZW',
	Ne = 'NE',
	NeIn = 'NE_IN',
	NeNp = 'NE_NP',
	Nl = 'NL',
	NlAw = 'NL_AW',
	NlBe = 'NL_BE',
	NlBq = 'NL_BQ',
	NlCw = 'NL_CW',
	NlNl = 'NL_NL',
	NlSr = 'NL_SR',
	NlSx = 'NL_SX',
	Nmg = 'NMG',
	NmgCm = 'NMG_CM',
	Nn = 'NN',
	Nnh = 'NNH',
	NnhCm = 'NNH_CM',
	NnNo = 'NN_NO',
	Nus = 'NUS',
	NusSs = 'NUS_SS',
	Nyn = 'NYN',
	NynUg = 'NYN_UG',
	Om = 'OM',
	OmEt = 'OM_ET',
	OmKe = 'OM_KE',
	Or = 'OR',
	OrIn = 'OR_IN',
	Os = 'OS',
	OsGe = 'OS_GE',
	OsRu = 'OS_RU',
	Pa = 'PA',
	PaArab = 'PA_ARAB',
	PaArabPk = 'PA_ARAB_PK',
	PaGuru = 'PA_GURU',
	PaGuruIn = 'PA_GURU_IN',
	Pcm = 'PCM',
	PcmNg = 'PCM_NG',
	Pl = 'PL',
	PlPl = 'PL_PL',
	Prg = 'PRG',
	Ps = 'PS',
	PsAf = 'PS_AF',
	PsPk = 'PS_PK',
	Pt = 'PT',
	PtAo = 'PT_AO',
	PtBr = 'PT_BR',
	PtCh = 'PT_CH',
	PtCv = 'PT_CV',
	PtGq = 'PT_GQ',
	PtGw = 'PT_GW',
	PtLu = 'PT_LU',
	PtMo = 'PT_MO',
	PtMz = 'PT_MZ',
	PtPt = 'PT_PT',
	PtSt = 'PT_ST',
	PtTl = 'PT_TL',
	Qu = 'QU',
	QuBo = 'QU_BO',
	QuEc = 'QU_EC',
	QuPe = 'QU_PE',
	Rm = 'RM',
	RmCh = 'RM_CH',
	Rn = 'RN',
	RnBi = 'RN_BI',
	Ro = 'RO',
	Rof = 'ROF',
	RofTz = 'ROF_TZ',
	RoMd = 'RO_MD',
	RoRo = 'RO_RO',
	Ru = 'RU',
	RuBy = 'RU_BY',
	RuKg = 'RU_KG',
	RuKz = 'RU_KZ',
	RuMd = 'RU_MD',
	RuRu = 'RU_RU',
	RuUa = 'RU_UA',
	Rw = 'RW',
	Rwk = 'RWK',
	RwkTz = 'RWK_TZ',
	RwRw = 'RW_RW',
	Sah = 'SAH',
	SahRu = 'SAH_RU',
	Saq = 'SAQ',
	SaqKe = 'SAQ_KE',
	Sat = 'SAT',
	SatOlck = 'SAT_OLCK',
	SatOlckIn = 'SAT_OLCK_IN',
	Sbp = 'SBP',
	SbpTz = 'SBP_TZ',
	Sd = 'SD',
	SdArab = 'SD_ARAB',
	SdArabPk = 'SD_ARAB_PK',
	SdDeva = 'SD_DEVA',
	SdDevaIn = 'SD_DEVA_IN',
	Se = 'SE',
	Seh = 'SEH',
	SehMz = 'SEH_MZ',
	Ses = 'SES',
	SesMl = 'SES_ML',
	SeFi = 'SE_FI',
	SeNo = 'SE_NO',
	SeSe = 'SE_SE',
	Sg = 'SG',
	SgCf = 'SG_CF',
	Shi = 'SHI',
	ShiLatn = 'SHI_LATN',
	ShiLatnMa = 'SHI_LATN_MA',
	ShiTfng = 'SHI_TFNG',
	ShiTfngMa = 'SHI_TFNG_MA',
	Si = 'SI',
	SiLk = 'SI_LK',
	Sk = 'SK',
	SkSk = 'SK_SK',
	Sl = 'SL',
	SlSi = 'SL_SI',
	Smn = 'SMN',
	SmnFi = 'SMN_FI',
	Sn = 'SN',
	SnZw = 'SN_ZW',
	So = 'SO',
	SoDj = 'SO_DJ',
	SoEt = 'SO_ET',
	SoKe = 'SO_KE',
	SoSo = 'SO_SO',
	Sq = 'SQ',
	SqAl = 'SQ_AL',
	SqMk = 'SQ_MK',
	SqXk = 'SQ_XK',
	Sr = 'SR',
	SrCyrl = 'SR_CYRL',
	SrCyrlBa = 'SR_CYRL_BA',
	SrCyrlMe = 'SR_CYRL_ME',
	SrCyrlRs = 'SR_CYRL_RS',
	SrCyrlXk = 'SR_CYRL_XK',
	SrLatn = 'SR_LATN',
	SrLatnBa = 'SR_LATN_BA',
	SrLatnMe = 'SR_LATN_ME',
	SrLatnRs = 'SR_LATN_RS',
	SrLatnXk = 'SR_LATN_XK',
	Su = 'SU',
	SuLatn = 'SU_LATN',
	SuLatnId = 'SU_LATN_ID',
	Sv = 'SV',
	SvAx = 'SV_AX',
	SvFi = 'SV_FI',
	SvSe = 'SV_SE',
	Sw = 'SW',
	SwCd = 'SW_CD',
	SwKe = 'SW_KE',
	SwTz = 'SW_TZ',
	SwUg = 'SW_UG',
	Ta = 'TA',
	TaIn = 'TA_IN',
	TaLk = 'TA_LK',
	TaMy = 'TA_MY',
	TaSg = 'TA_SG',
	Te = 'TE',
	Teo = 'TEO',
	TeoKe = 'TEO_KE',
	TeoUg = 'TEO_UG',
	TeIn = 'TE_IN',
	Tg = 'TG',
	TgTj = 'TG_TJ',
	Th = 'TH',
	ThTh = 'TH_TH',
	Ti = 'TI',
	TiEr = 'TI_ER',
	TiEt = 'TI_ET',
	Tk = 'TK',
	TkTm = 'TK_TM',
	To = 'TO',
	ToTo = 'TO_TO',
	Tr = 'TR',
	TrCy = 'TR_CY',
	TrTr = 'TR_TR',
	Tt = 'TT',
	TtRu = 'TT_RU',
	Twq = 'TWQ',
	TwqNe = 'TWQ_NE',
	Tzm = 'TZM',
	TzmMa = 'TZM_MA',
	Ug = 'UG',
	UgCn = 'UG_CN',
	Uk = 'UK',
	UkUa = 'UK_UA',
	Ur = 'UR',
	UrIn = 'UR_IN',
	UrPk = 'UR_PK',
	Uz = 'UZ',
	UzArab = 'UZ_ARAB',
	UzArabAf = 'UZ_ARAB_AF',
	UzCyrl = 'UZ_CYRL',
	UzCyrlUz = 'UZ_CYRL_UZ',
	UzLatn = 'UZ_LATN',
	UzLatnUz = 'UZ_LATN_UZ',
	Vai = 'VAI',
	VaiLatn = 'VAI_LATN',
	VaiLatnLr = 'VAI_LATN_LR',
	VaiVaii = 'VAI_VAII',
	VaiVaiiLr = 'VAI_VAII_LR',
	Vi = 'VI',
	ViVn = 'VI_VN',
	Vo = 'VO',
	Vun = 'VUN',
	VunTz = 'VUN_TZ',
	Wae = 'WAE',
	WaeCh = 'WAE_CH',
	Wo = 'WO',
	WoSn = 'WO_SN',
	Xh = 'XH',
	XhZa = 'XH_ZA',
	Xog = 'XOG',
	XogUg = 'XOG_UG',
	Yav = 'YAV',
	YavCm = 'YAV_CM',
	Yi = 'YI',
	Yo = 'YO',
	YoBj = 'YO_BJ',
	YoNg = 'YO_NG',
	Yue = 'YUE',
	YueHans = 'YUE_HANS',
	YueHansCn = 'YUE_HANS_CN',
	YueHant = 'YUE_HANT',
	YueHantHk = 'YUE_HANT_HK',
	Zgh = 'ZGH',
	ZghMa = 'ZGH_MA',
	Zh = 'ZH',
	ZhHans = 'ZH_HANS',
	ZhHansCn = 'ZH_HANS_CN',
	ZhHansHk = 'ZH_HANS_HK',
	ZhHansMo = 'ZH_HANS_MO',
	ZhHansSg = 'ZH_HANS_SG',
	ZhHant = 'ZH_HANT',
	ZhHantHk = 'ZH_HANT_HK',
	ZhHantMo = 'ZH_HANT_MO',
	ZhHantTw = 'ZH_HANT_TW',
	Zu = 'ZU',
	ZuZa = 'ZU_ZA',
}

export type LanguageDisplay = {
	readonly __typename?: 'LanguageDisplay';
	/** ISO 639 representation of the language name. */
	readonly code: LanguageCodeEnum;
	/** Full name of the language. */
	readonly language: Scalars['String'];
};

export type LimitInfo = {
	readonly __typename?: 'LimitInfo';
	/** Defines the allowed maximum resource usage, null means unlimited. */
	readonly allowedUsage: Limits;
	/** Defines the current resource usage. */
	readonly currentUsage: Limits;
};

export type Limits = {
	readonly __typename?: 'Limits';
	readonly channels?: Maybe<Scalars['Int']>;
	readonly orders?: Maybe<Scalars['Int']>;
	readonly productVariants?: Maybe<Scalars['Int']>;
	readonly staffUsers?: Maybe<Scalars['Int']>;
	readonly warehouses?: Maybe<Scalars['Int']>;
};

/** The manifest definition. */
export type Manifest = {
	readonly __typename?: 'Manifest';
	readonly about?: Maybe<Scalars['String']>;
	readonly appUrl?: Maybe<Scalars['String']>;
	readonly configurationUrl?: Maybe<Scalars['String']>;
	readonly dataPrivacy?: Maybe<Scalars['String']>;
	readonly dataPrivacyUrl?: Maybe<Scalars['String']>;
	readonly extensions: ReadonlyArray<AppManifestExtension>;
	readonly homepageUrl?: Maybe<Scalars['String']>;
	readonly identifier: Scalars['String'];
	readonly name: Scalars['String'];
	readonly permissions?: Maybe<ReadonlyArray<Permission>>;
	readonly supportUrl?: Maybe<Scalars['String']>;
	readonly tokenTargetUrl?: Maybe<Scalars['String']>;
	readonly version: Scalars['String'];
};

export type Margin = {
	readonly __typename?: 'Margin';
	readonly start?: Maybe<Scalars['Int']>;
	readonly stop?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum MeasurementUnitsEnum {
	AcreFt = 'ACRE_FT',
	AcreIn = 'ACRE_IN',
	Cm = 'CM',
	CubicCentimeter = 'CUBIC_CENTIMETER',
	CubicDecimeter = 'CUBIC_DECIMETER',
	CubicFoot = 'CUBIC_FOOT',
	CubicInch = 'CUBIC_INCH',
	CubicMeter = 'CUBIC_METER',
	CubicMillimeter = 'CUBIC_MILLIMETER',
	CubicYard = 'CUBIC_YARD',
	FlOz = 'FL_OZ',
	Ft = 'FT',
	G = 'G',
	Inch = 'INCH',
	Kg = 'KG',
	Km = 'KM',
	Lb = 'LB',
	Liter = 'LITER',
	M = 'M',
	Oz = 'OZ',
	Pint = 'PINT',
	Qt = 'QT',
	SqCm = 'SQ_CM',
	SqFt = 'SQ_FT',
	SqInch = 'SQ_INCH',
	SqKm = 'SQ_KM',
	SqM = 'SQ_M',
	SqYd = 'SQ_YD',
	Tonne = 'TONNE',
	Yd = 'YD',
}

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Menu';
		readonly id: Scalars['ID'];
		readonly items?: Maybe<ReadonlyArray<MenuItem>>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly slug: Scalars['String'];
	};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type MenuPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuBulkDelete = {
	readonly __typename?: 'MenuBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<MenuError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuCountableConnection = {
	readonly __typename?: 'MenuCountableConnection';
	readonly edges: ReadonlyArray<MenuCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type MenuCountableEdge = {
	readonly __typename?: 'MenuCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Menu;
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuCreate = {
	readonly __typename?: 'MenuCreate';
	readonly errors: ReadonlyArray<MenuError>;
	readonly menu?: Maybe<Menu>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuCreateInput = {
	/** List of menu items. */
	readonly items?: InputMaybe<ReadonlyArray<MenuItemInput>>;
	/** Name of the menu. */
	readonly name: Scalars['String'];
	/** Slug of the menu. Will be generated if not provided. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export type MenuCreated = Event & {
	readonly __typename?: 'MenuCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menu?: Maybe<Menu>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuCreatedMenuArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuDelete = {
	readonly __typename?: 'MenuDelete';
	readonly errors: ReadonlyArray<MenuError>;
	readonly menu?: Maybe<Menu>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuDeleted = Event & {
	readonly __typename?: 'MenuDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menu?: Maybe<Menu>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuDeletedMenuArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type MenuError = {
	readonly __typename?: 'MenuError';
	/** The error code. */
	readonly code: MenuErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum MenuErrorCode {
	CannotAssignNode = 'CANNOT_ASSIGN_NODE',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	InvalidMenuItem = 'INVALID_MENU_ITEM',
	NotFound = 'NOT_FOUND',
	NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
	Required = 'REQUIRED',
	TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
	Unique = 'UNIQUE',
}

export type MenuFilterInput = {
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly slug?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type MenuInput = {
	/** Name of the menu. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Slug of the menu. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'MenuItem';
		readonly category?: Maybe<Category>;
		readonly children?: Maybe<ReadonlyArray<MenuItem>>;
		/** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
		readonly collection?: Maybe<Collection>;
		readonly id: Scalars['ID'];
		readonly level: Scalars['Int'];
		readonly menu: Menu;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
		readonly page?: Maybe<Page>;
		readonly parent?: Maybe<MenuItem>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Returns translated menu item fields for the given language code. */
		readonly translation?: Maybe<MenuItemTranslation>;
		/** URL to the menu item. */
		readonly url?: Maybe<Scalars['String']>;
	};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemBulkDelete = {
	readonly __typename?: 'MenuItemBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<MenuError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuItemCountableConnection = {
	readonly __typename?: 'MenuItemCountableConnection';
	readonly edges: ReadonlyArray<MenuItemCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type MenuItemCountableEdge = {
	readonly __typename?: 'MenuItemCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: MenuItem;
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemCreate = {
	readonly __typename?: 'MenuItemCreate';
	readonly errors: ReadonlyArray<MenuError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
	readonly menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
	/** Category to which item points. */
	readonly category?: InputMaybe<Scalars['ID']>;
	/** Collection to which item points. */
	readonly collection?: InputMaybe<Scalars['ID']>;
	/** Menu to which item belongs. */
	readonly menu: Scalars['ID'];
	/** Name of the menu item. */
	readonly name: Scalars['String'];
	/** Page to which item points. */
	readonly page?: InputMaybe<Scalars['ID']>;
	/** ID of the parent menu. If empty, menu will be top level menu. */
	readonly parent?: InputMaybe<Scalars['ID']>;
	/** URL of the pointed item. */
	readonly url?: InputMaybe<Scalars['String']>;
};

export type MenuItemCreated = Event & {
	readonly __typename?: 'MenuItemCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu item the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menuItem?: Maybe<MenuItem>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuItemCreatedMenuItemArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemDelete = {
	readonly __typename?: 'MenuItemDelete';
	readonly errors: ReadonlyArray<MenuError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
	readonly menuItem?: Maybe<MenuItem>;
};

export type MenuItemDeleted = Event & {
	readonly __typename?: 'MenuItemDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu item the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menuItem?: Maybe<MenuItem>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuItemDeletedMenuItemArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type MenuItemFilterInput = {
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type MenuItemInput = {
	/** Category to which item points. */
	readonly category?: InputMaybe<Scalars['ID']>;
	/** Collection to which item points. */
	readonly collection?: InputMaybe<Scalars['ID']>;
	/** Name of the menu item. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Page to which item points. */
	readonly page?: InputMaybe<Scalars['ID']>;
	/** URL of the pointed item. */
	readonly url?: InputMaybe<Scalars['String']>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemMove = {
	readonly __typename?: 'MenuItemMove';
	readonly errors: ReadonlyArray<MenuError>;
	/** Assigned menu to move within. */
	readonly menu?: Maybe<Menu>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuItemMoveInput = {
	/** The menu item ID to move. */
	readonly itemId: Scalars['ID'];
	/** ID of the parent menu. If empty, menu will be top level menu. */
	readonly parentId?: InputMaybe<Scalars['ID']>;
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	readonly sortOrder?: InputMaybe<Scalars['Int']>;
};

export type MenuItemSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort menu items by the selected field. */
	readonly field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
	readonly __typename?: 'MenuItemTranslatableContent';
	readonly id: Scalars['ID'];
	/**
	 * Represents a single item of the related menu. Can store categories, collection or pages.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly menuItem?: Maybe<MenuItem>;
	readonly name: Scalars['String'];
	/** Returns translated menu item fields for the given language code. */
	readonly translation?: Maybe<MenuItemTranslation>;
};

export type MenuItemTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type MenuItemTranslate = {
	readonly __typename?: 'MenuItemTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly menuItem?: Maybe<MenuItem>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type MenuItemTranslation = Node & {
	readonly __typename?: 'MenuItemTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name: Scalars['String'];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuItemUpdate = {
	readonly __typename?: 'MenuItemUpdate';
	readonly errors: ReadonlyArray<MenuError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
	readonly menuItem?: Maybe<MenuItem>;
};

export type MenuItemUpdated = Event & {
	readonly __typename?: 'MenuItemUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu item the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menuItem?: Maybe<MenuItem>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuItemUpdatedMenuItemArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export enum MenuItemsSortField {
	/** Sort menu items by name. */
	Name = 'NAME',
}

export enum MenuSortField {
	/** Sort menus by items count. */
	ItemsCount = 'ITEMS_COUNT',
	/** Sort menus by name. */
	Name = 'NAME',
}

export type MenuSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort menus by the selected field. */
	readonly field: MenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 */
export type MenuUpdate = {
	readonly __typename?: 'MenuUpdate';
	readonly errors: ReadonlyArray<MenuError>;
	readonly menu?: Maybe<Menu>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly menuErrors: ReadonlyArray<MenuError>;
};

export type MenuUpdated = Event & {
	readonly __typename?: 'MenuUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The menu the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly menu?: Maybe<Menu>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type MenuUpdatedMenuArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type MetadataError = {
	readonly __typename?: 'MetadataError';
	/** The error code. */
	readonly code: MetadataErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum MetadataErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	NotUpdated = 'NOT_UPDATED',
	Required = 'REQUIRED',
}

export type MetadataFilter = {
	/** Key of a metadata item. */
	readonly key: Scalars['String'];
	/** Value of a metadata item. */
	readonly value?: InputMaybe<Scalars['String']>;
};

export type MetadataInput = {
	/** Key of a metadata item. */
	readonly key: Scalars['String'];
	/** Value of a metadata item. */
	readonly value: Scalars['String'];
};

export type MetadataItem = {
	readonly __typename?: 'MetadataItem';
	/** Key of a metadata item. */
	readonly key: Scalars['String'];
	/** Value of a metadata item. */
	readonly value: Scalars['String'];
};

/** Represents amount of money in specific currency. */
export type Money = {
	readonly __typename?: 'Money';
	/** Amount of money. */
	readonly amount: Scalars['Float'];
	/** Currency code. */
	readonly currency: Scalars['String'];
};

export type MoneyInput = {
	/** Amount of money. */
	readonly amount: Scalars['PositiveDecimal'];
	/** Currency code. */
	readonly currency: Scalars['String'];
};

/** Represents a range of amounts of money. */
export type MoneyRange = {
	readonly __typename?: 'MoneyRange';
	/** Lower bound of a price range. */
	readonly start?: Maybe<Money>;
	/** Upper bound of a price range. */
	readonly stop?: Maybe<Money>;
};

export type MoveProductInput = {
	/** The ID of the product to move. */
	readonly productId: Scalars['ID'];
	/** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	readonly sortOrder?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
	readonly __typename?: 'Mutation';
	/**
	 * Create a new address for the customer.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly accountAddressCreate?: Maybe<AccountAddressCreate>;
	/** Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
	readonly accountAddressDelete?: Maybe<AccountAddressDelete>;
	/** Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER. */
	readonly accountAddressUpdate?: Maybe<AccountAddressUpdate>;
	/**
	 * Remove user account.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly accountDelete?: Maybe<AccountDelete>;
	/** Register a new user. */
	readonly accountRegister?: Maybe<AccountRegister>;
	/**
	 * Sends an email with the account removal link for the logged-in user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly accountRequestDeletion?: Maybe<AccountRequestDeletion>;
	/**
	 * Sets a default address for the authenticated user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
	/**
	 * Updates the account of the logged-in user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly accountUpdate?: Maybe<AccountUpdate>;
	/**
	 * Creates user address.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly addressCreate?: Maybe<AddressCreate>;
	/**
	 * Deletes an address.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly addressDelete?: Maybe<AddressDelete>;
	/**
	 * Sets a default address for the given user.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly addressSetDefault?: Maybe<AddressSetDefault>;
	/**
	 * Updates an address.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly addressUpdate?: Maybe<AddressUpdate>;
	/**
	 * Activate the app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appActivate?: Maybe<AppActivate>;
	/** Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
	readonly appCreate?: Maybe<AppCreate>;
	/**
	 * Deactivate the app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appDeactivate?: Maybe<AppDeactivate>;
	/**
	 * Deletes an app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appDelete?: Maybe<AppDelete>;
	/**
	 * Delete failed installation.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
	/**
	 * Fetch and validate manifest.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appFetchManifest?: Maybe<AppFetchManifest>;
	/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
	readonly appInstall?: Maybe<AppInstall>;
	/**
	 * Retry failed installation of new app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appRetryInstall?: Maybe<AppRetryInstall>;
	/**
	 * Creates a new token.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appTokenCreate?: Maybe<AppTokenCreate>;
	/**
	 * Deletes an authentication token assigned to app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appTokenDelete?: Maybe<AppTokenDelete>;
	/** Verify provided app token. */
	readonly appTokenVerify?: Maybe<AppTokenVerify>;
	/**
	 * Updates an existing app.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appUpdate?: Maybe<AppUpdate>;
	/**
	 * Assigns storefront's navigation menus.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
	 */
	readonly assignNavigation?: Maybe<AssignNavigation>;
	/**
	 * Add shipping zone to given warehouse.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
	/**
	 * Deletes attributes.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeBulkDelete?: Maybe<AttributeBulkDelete>;
	/** Creates an attribute. */
	readonly attributeCreate?: Maybe<AttributeCreate>;
	/**
	 * Deletes an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeDelete?: Maybe<AttributeDelete>;
	/**
	 * Reorder the values of an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeReorderValues?: Maybe<AttributeReorderValues>;
	/**
	 * Creates/updates translations for an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly attributeTranslate?: Maybe<AttributeTranslate>;
	/**
	 * Updates attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeUpdate?: Maybe<AttributeUpdate>;
	/**
	 * Deletes values of attributes.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
	/**
	 * Creates a value for an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly attributeValueCreate?: Maybe<AttributeValueCreate>;
	/**
	 * Deletes a value of an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeValueDelete?: Maybe<AttributeValueDelete>;
	/**
	 * Creates/updates translations for an attribute value.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly attributeValueTranslate?: Maybe<AttributeValueTranslate>;
	/**
	 * Updates value of an attribute.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly attributeValueUpdate?: Maybe<AttributeValueUpdate>;
	/**
	 * Deletes categories.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly categoryBulkDelete?: Maybe<CategoryBulkDelete>;
	/**
	 * Creates a new category.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly categoryCreate?: Maybe<CategoryCreate>;
	/**
	 * Deletes a category.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly categoryDelete?: Maybe<CategoryDelete>;
	/**
	 * Creates/updates translations for a category.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly categoryTranslate?: Maybe<CategoryTranslate>;
	/**
	 * Updates a category.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly categoryUpdate?: Maybe<CategoryUpdate>;
	/**
	 * Activate a channel.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly channelActivate?: Maybe<ChannelActivate>;
	/**
	 * Creates new channel.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly channelCreate?: Maybe<ChannelCreate>;
	/**
	 * Deactivate a channel.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly channelDeactivate?: Maybe<ChannelDeactivate>;
	/**
	 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly channelDelete?: Maybe<ChannelDelete>;
	/**
	 * Update a channel.
	 *
	 * Requires one of the following permissions: MANAGE_CHANNELS.
	 */
	readonly channelUpdate?: Maybe<ChannelUpdate>;
	/** Adds a gift card or a voucher to a checkout. */
	readonly checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
	/** Update billing address in the existing checkout. */
	readonly checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
	/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
	readonly checkoutComplete?: Maybe<CheckoutComplete>;
	/** Create a new checkout. */
	readonly checkoutCreate?: Maybe<CheckoutCreate>;
	/**
	 * Sets the customer as the owner of the checkout.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
	 */
	readonly checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
	/**
	 * Removes the user assigned as the owner of the checkout.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
	 */
	readonly checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
	/**
	 * Updates the delivery method (shipping method or pick up point) of the checkout.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>;
	/** Updates email address in the existing checkout object. */
	readonly checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
	/** Update language code in the existing checkout. */
	readonly checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>;
	/**
	 * Deletes a CheckoutLine.
	 * @deprecated DEPRECATED: Will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
	 */
	readonly checkoutLineDelete?: Maybe<CheckoutLineDelete>;
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
	readonly checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
	/** Deletes checkout lines. */
	readonly checkoutLinesDelete?: Maybe<CheckoutLinesDelete>;
	/** Updates checkout line in the existing checkout. */
	readonly checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
	/** Create a new payment for given checkout. */
	readonly checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
	/** Remove a gift card or a voucher from a checkout. */
	readonly checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
	/** Update shipping address in the existing checkout. */
	readonly checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
	/**
	 * Updates the shipping method of the checkout.
	 * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
	 */
	readonly checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
	/**
	 * Adds products to a collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionAddProducts?: Maybe<CollectionAddProducts>;
	/**
	 * Deletes collections.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionBulkDelete?: Maybe<CollectionBulkDelete>;
	/**
	 * Manage collection's availability in channels.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>;
	/**
	 * Creates a new collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionCreate?: Maybe<CollectionCreate>;
	/**
	 * Deletes a collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionDelete?: Maybe<CollectionDelete>;
	/**
	 * Remove products from a collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
	/**
	 * Reorder the products of a collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionReorderProducts?: Maybe<CollectionReorderProducts>;
	/**
	 * Creates/updates translations for a collection.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly collectionTranslate?: Maybe<CollectionTranslate>;
	/**
	 * Updates a collection.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly collectionUpdate?: Maybe<CollectionUpdate>;
	/** Confirm user account with token sent by email during registration. */
	readonly confirmAccount?: Maybe<ConfirmAccount>;
	/**
	 * Confirm the email change of the logged-in user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly confirmEmailChange?: Maybe<ConfirmEmailChange>;
	/**
	 * Creates new warehouse.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly createWarehouse?: Maybe<WarehouseCreate>;
	/**
	 * Deletes customers.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly customerBulkDelete?: Maybe<CustomerBulkDelete>;
	/**
	 * Creates a new customer.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly customerCreate?: Maybe<CustomerCreate>;
	/**
	 * Deletes a customer.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly customerDelete?: Maybe<CustomerDelete>;
	/**
	 * Updates an existing customer.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly customerUpdate?: Maybe<CustomerUpdate>;
	/** Delete metadata of an object. To use it, you need to have access to the modified object. */
	readonly deleteMetadata?: Maybe<DeleteMetadata>;
	/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
	readonly deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
	/**
	 * Deletes selected warehouse.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly deleteWarehouse?: Maybe<WarehouseDelete>;
	/**
	 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContentCreate?: Maybe<DigitalContentCreate>;
	/**
	 * Remove digital content assigned to given variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContentDelete?: Maybe<DigitalContentDelete>;
	/**
	 * Update digital content.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContentUpdate?: Maybe<DigitalContentUpdate>;
	/**
	 * Generate new URL to digital content.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
	/**
	 * Deletes draft orders.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
	/**
	 * Completes creating an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrderComplete?: Maybe<DraftOrderComplete>;
	/**
	 * Creates a new draft order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrderCreate?: Maybe<DraftOrderCreate>;
	/**
	 * Deletes a draft order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrderDelete?: Maybe<DraftOrderDelete>;
	/**
	 * Deletes order lines.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 * @deprecated This field will be removed in Saleor 4.0.
	 */
	readonly draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
	/**
	 * Updates a draft order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrderUpdate?: Maybe<DraftOrderUpdate>;
	/**
	 * Retries event delivery.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly eventDeliveryRetry?: Maybe<EventDeliveryRetry>;
	/**
	 * Export gift cards to csv file.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly exportGiftCards?: Maybe<ExportGiftCards>;
	/**
	 * Export products to csv file.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly exportProducts?: Maybe<ExportProducts>;
	/** Prepare external authentication url for user by custom plugin. */
	readonly externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>;
	/** Logout user by custom plugin. */
	readonly externalLogout?: Maybe<ExternalLogout>;
	/**
	 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>;
	/** Obtain external access tokens for user by custom plugin. */
	readonly externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>;
	/** Refresh user's access by custom plugin. */
	readonly externalRefresh?: Maybe<ExternalRefresh>;
	/** Verify external authentication data by plugin. */
	readonly externalVerify?: Maybe<ExternalVerify>;
	/**
	 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
	 *
	 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
	 */
	readonly fileUpload?: Maybe<FileUpload>;
	/**
	 * Activate a gift card.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardActivate?: Maybe<GiftCardActivate>;
	/**
	 * Adds note to the gift card.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardAddNote?: Maybe<GiftCardAddNote>;
	/**
	 * Activate gift cards.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardBulkActivate?: Maybe<GiftCardBulkActivate>;
	/**
	 * Create gift cards.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardBulkCreate?: Maybe<GiftCardBulkCreate>;
	/**
	 * Deactivate gift cards.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>;
	/**
	 * Delete gift cards.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardBulkDelete?: Maybe<GiftCardBulkDelete>;
	/**
	 * Creates a new gift card.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardCreate?: Maybe<GiftCardCreate>;
	/**
	 * Deactivate a gift card.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardDeactivate?: Maybe<GiftCardDeactivate>;
	/**
	 * Delete gift card.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardDelete?: Maybe<GiftCardDelete>;
	/**
	 * Resend a gift card.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardResend?: Maybe<GiftCardResend>;
	/**
	 * Update gift card settings.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>;
	/**
	 * Update a gift card.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardUpdate?: Maybe<GiftCardUpdate>;
	/**
	 * Creates a ready to send invoice.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceCreate?: Maybe<InvoiceCreate>;
	/**
	 * Deletes an invoice.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceDelete?: Maybe<InvoiceDelete>;
	/**
	 * Request an invoice for the order using plugin.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceRequest?: Maybe<InvoiceRequest>;
	/**
	 * Requests deletion of an invoice.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
	/**
	 * Send an invoice notification to the customer.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceSendNotification?: Maybe<InvoiceSendNotification>;
	/**
	 * Updates an invoice.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly invoiceUpdate?: Maybe<InvoiceUpdate>;
	/**
	 * Deletes menus.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuBulkDelete?: Maybe<MenuBulkDelete>;
	/**
	 * Creates a new Menu.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuCreate?: Maybe<MenuCreate>;
	/**
	 * Deletes a menu.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuDelete?: Maybe<MenuDelete>;
	/**
	 * Deletes menu items.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
	/**
	 * Creates a new menu item.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuItemCreate?: Maybe<MenuItemCreate>;
	/**
	 * Deletes a menu item.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuItemDelete?: Maybe<MenuItemDelete>;
	/**
	 * Moves items of menus.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuItemMove?: Maybe<MenuItemMove>;
	/**
	 * Creates/updates translations for a menu item.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly menuItemTranslate?: Maybe<MenuItemTranslate>;
	/**
	 * Updates a menu item.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuItemUpdate?: Maybe<MenuItemUpdate>;
	/**
	 * Updates a menu.
	 *
	 * Requires one of the following permissions: MANAGE_MENUS.
	 */
	readonly menuUpdate?: Maybe<MenuUpdate>;
	/**
	 * Adds note to the order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderAddNote?: Maybe<OrderAddNote>;
	/**
	 * Cancels orders.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderBulkCancel?: Maybe<OrderBulkCancel>;
	/**
	 * Cancel an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderCancel?: Maybe<OrderCancel>;
	/**
	 * Capture an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderCapture?: Maybe<OrderCapture>;
	/**
	 * Confirms an unconfirmed order by changing status to unfulfilled.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderConfirm?: Maybe<OrderConfirm>;
	/**
	 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly orderCreateFromCheckout?: Maybe<OrderCreateFromCheckout>;
	/**
	 * Adds discount to the order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderDiscountAdd?: Maybe<OrderDiscountAdd>;
	/**
	 * Remove discount from the order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderDiscountDelete?: Maybe<OrderDiscountDelete>;
	/**
	 * Update discount for the order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderDiscountUpdate?: Maybe<OrderDiscountUpdate>;
	/**
	 * Creates new fulfillments for an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfill?: Maybe<OrderFulfill>;
	/**
	 * Approve existing fulfillment.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfillmentApprove?: Maybe<FulfillmentApprove>;
	/**
	 * Cancels existing fulfillment and optionally restocks items.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
	/**
	 * Refund products.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>;
	/**
	 * Return products.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>;
	/**
	 * Updates a fulfillment for an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
	/**
	 * Deletes an order line from an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderLineDelete?: Maybe<OrderLineDelete>;
	/**
	 * Remove discount applied to the order line.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>;
	/**
	 * Update discount for the order line.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>;
	/**
	 * Updates an order line of an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderLineUpdate?: Maybe<OrderLineUpdate>;
	/**
	 * Create order lines for an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderLinesCreate?: Maybe<OrderLinesCreate>;
	/**
	 * Mark order as manually paid.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
	/**
	 * Refund an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderRefund?: Maybe<OrderRefund>;
	/**
	 * Update shop order settings.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderSettingsUpdate?: Maybe<OrderSettingsUpdate>;
	/**
	 * Updates an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderUpdate?: Maybe<OrderUpdate>;
	/**
	 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderUpdateShipping?: Maybe<OrderUpdateShipping>;
	/**
	 * Void an order.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderVoid?: Maybe<OrderVoid>;
	/**
	 * Assign attributes to a given page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageAttributeAssign?: Maybe<PageAttributeAssign>;
	/**
	 * Unassign attributes from a given page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageAttributeUnassign?: Maybe<PageAttributeUnassign>;
	/**
	 * Deletes pages.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageBulkDelete?: Maybe<PageBulkDelete>;
	/**
	 * Publish pages.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageBulkPublish?: Maybe<PageBulkPublish>;
	/**
	 * Creates a new page.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageCreate?: Maybe<PageCreate>;
	/**
	 * Deletes a page.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageDelete?: Maybe<PageDelete>;
	/**
	 * Reorder page attribute values.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>;
	/**
	 * Creates/updates translations for a page.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly pageTranslate?: Maybe<PageTranslate>;
	/**
	 * Delete page types.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>;
	/**
	 * Create a new page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageTypeCreate?: Maybe<PageTypeCreate>;
	/**
	 * Delete a page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageTypeDelete?: Maybe<PageTypeDelete>;
	/**
	 * Reorder the attributes of a page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>;
	/**
	 * Update page type.
	 *
	 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
	 */
	readonly pageTypeUpdate?: Maybe<PageTypeUpdate>;
	/**
	 * Updates an existing page.
	 *
	 * Requires one of the following permissions: MANAGE_PAGES.
	 */
	readonly pageUpdate?: Maybe<PageUpdate>;
	/**
	 * Change the password of the logged in user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly passwordChange?: Maybe<PasswordChange>;
	/**
	 * Captures the authorized payment amount.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly paymentCapture?: Maybe<PaymentCapture>;
	/** Check payment balance. */
	readonly paymentCheckBalance?: Maybe<PaymentCheckBalance>;
	/** Initializes payment process when it is required by gateway. */
	readonly paymentInitialize?: Maybe<PaymentInitialize>;
	/**
	 * Refunds the captured payment amount.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly paymentRefund?: Maybe<PaymentRefund>;
	/**
	 * Voids the authorized payment.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly paymentVoid?: Maybe<PaymentVoid>;
	/**
	 * Create new permission group.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly permissionGroupCreate?: Maybe<PermissionGroupCreate>;
	/**
	 * Delete permission group.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly permissionGroupDelete?: Maybe<PermissionGroupDelete>;
	/**
	 * Update permission group.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
	/**
	 * Update plugin configuration.
	 *
	 * Requires one of the following permissions: MANAGE_PLUGINS.
	 */
	readonly pluginUpdate?: Maybe<PluginUpdate>;
	/**
	 * Assign attributes to a given product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productAttributeAssign?: Maybe<ProductAttributeAssign>;
	/**
	 * Update attributes assigned to product variant for given product type.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>;
	/**
	 * Un-assign attributes from a given product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productAttributeUnassign?: Maybe<ProductAttributeUnassign>;
	/**
	 * Deletes products.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productBulkDelete?: Maybe<ProductBulkDelete>;
	/**
	 * Manage product's availability in channels.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>;
	/**
	 * Creates a new product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productCreate?: Maybe<ProductCreate>;
	/**
	 * Deletes a product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productDelete?: Maybe<ProductDelete>;
	/**
	 * Deletes product media.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>;
	/**
	 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productMediaCreate?: Maybe<ProductMediaCreate>;
	/**
	 * Deletes a product media.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productMediaDelete?: Maybe<ProductMediaDelete>;
	/**
	 * Changes ordering of the product media.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productMediaReorder?: Maybe<ProductMediaReorder>;
	/**
	 * Updates a product media.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productMediaUpdate?: Maybe<ProductMediaUpdate>;
	/**
	 * Reorder product attribute values.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>;
	/**
	 * Creates/updates translations for a product.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly productTranslate?: Maybe<ProductTranslate>;
	/**
	 * Deletes product types.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
	/**
	 * Creates a new product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productTypeCreate?: Maybe<ProductTypeCreate>;
	/**
	 * Deletes a product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productTypeDelete?: Maybe<ProductTypeDelete>;
	/**
	 * Reorder the attributes of a product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
	/**
	 * Updates an existing product type.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
	 */
	readonly productTypeUpdate?: Maybe<ProductTypeUpdate>;
	/**
	 * Updates an existing product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productUpdate?: Maybe<ProductUpdate>;
	/**
	 * Creates product variants for a given product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
	/**
	 * Deletes product variants.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
	/**
	 * Manage product variant prices in channels.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>;
	/**
	 * Creates a new variant for a product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantCreate?: Maybe<ProductVariantCreate>;
	/**
	 * Deletes a product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantDelete?: Maybe<ProductVariantDelete>;
	/**
	 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>;
	/**
	 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantReorder?: Maybe<ProductVariantReorder>;
	/**
	 * Reorder product variant attribute values.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>;
	/**
	 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
	/**
	 * Creates stocks for product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
	/**
	 * Delete stocks from product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
	/**
	 * Update stocks for product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
	/**
	 * Creates/updates translations for a product variant.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly productVariantTranslate?: Maybe<ProductVariantTranslate>;
	/**
	 * Updates an existing variant for product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly productVariantUpdate?: Maybe<ProductVariantUpdate>;
	/**
	 * Request email change of the logged in user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly requestEmailChange?: Maybe<RequestEmailChange>;
	/** Sends an email with the account password modification link. */
	readonly requestPasswordReset?: Maybe<RequestPasswordReset>;
	/**
	 * Deletes sales.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleBulkDelete?: Maybe<SaleBulkDelete>;
	/**
	 * Adds products, categories, collections to a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
	/**
	 * Removes products, categories, collections from a sale.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
	/**
	 * Manage sale's availability in channels.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>;
	/**
	 * Creates a new sale.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleCreate?: Maybe<SaleCreate>;
	/**
	 * Deletes a sale.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleDelete?: Maybe<SaleDelete>;
	/**
	 * Creates/updates translations for a sale.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly saleTranslate?: Maybe<SaleTranslate>;
	/**
	 * Updates a sale.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly saleUpdate?: Maybe<SaleUpdate>;
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
	readonly setPassword?: Maybe<SetPassword>;
	/**
	 * Manage shipping method's availability in channels.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>;
	/**
	 * Deletes shipping prices.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
	/**
	 * Creates a new shipping price.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceCreate?: Maybe<ShippingPriceCreate>;
	/**
	 * Deletes a shipping price.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceDelete?: Maybe<ShippingPriceDelete>;
	/**
	 * Exclude products from shipping price.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>;
	/**
	 * Remove product from excluded list for shipping price.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>;
	/**
	 * Creates/updates translations for a shipping method.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
	/**
	 * Updates a new shipping price.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
	/**
	 * Deletes shipping zones.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
	/**
	 * Creates a new shipping zone.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZoneCreate?: Maybe<ShippingZoneCreate>;
	/**
	 * Deletes a shipping zone.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZoneDelete?: Maybe<ShippingZoneDelete>;
	/**
	 * Updates a new shipping zone.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
	/**
	 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly shopAddressUpdate?: Maybe<ShopAddressUpdate>;
	/**
	 * Updates site domain of the shop.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly shopDomainUpdate?: Maybe<ShopDomainUpdate>;
	/**
	 * Fetch tax rates.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
	/**
	 * Creates/updates translations for shop settings.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
	/**
	 * Updates shop settings.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
	/**
	 * Deletes staff users.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly staffBulkDelete?: Maybe<StaffBulkDelete>;
	/**
	 * Creates a new staff user.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly staffCreate?: Maybe<StaffCreate>;
	/**
	 * Deletes a staff user.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly staffDelete?: Maybe<StaffDelete>;
	/**
	 * Creates a new staff notification recipient.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
	/**
	 * Delete staff notification recipient.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
	/**
	 * Updates a staff notification recipient.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
	/**
	 * Updates an existing staff user.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly staffUpdate?: Maybe<StaffUpdate>;
	/** Create JWT token. */
	readonly tokenCreate?: Maybe<CreateToken>;
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
	readonly tokenRefresh?: Maybe<RefreshToken>;
	/** Verify JWT token. */
	readonly tokenVerify?: Maybe<VerifyToken>;
	/**
	 * Deactivate all JWT tokens of the currently authenticated user.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_USER.
	 */
	readonly tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
	/**
	 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly transactionCreate?: Maybe<TransactionCreate>;
	/**
	 * Request an action for payment transaction.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: HANDLE_PAYMENTS, MANAGE_ORDERS.
	 */
	readonly transactionRequestAction?: Maybe<TransactionRequestAction>;
	/**
	 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly transactionUpdate?: Maybe<TransactionUpdate>;
	/**
	 * Remove shipping zone from given warehouse.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
	/** Updates metadata of an object. To use it, you need to have access to the modified object. */
	readonly updateMetadata?: Maybe<UpdateMetadata>;
	/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
	readonly updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
	/**
	 * Updates given warehouse.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly updateWarehouse?: Maybe<WarehouseUpdate>;
	/**
	 * Deletes a user avatar. Only for staff members.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
	 */
	readonly userAvatarDelete?: Maybe<UserAvatarDelete>;
	/**
	 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
	 */
	readonly userAvatarUpdate?: Maybe<UserAvatarUpdate>;
	/**
	 * Activate or deactivate users.
	 *
	 * Requires one of the following permissions: MANAGE_USERS.
	 */
	readonly userBulkSetActive?: Maybe<UserBulkSetActive>;
	/**
	 * Assign an media to a product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly variantMediaAssign?: Maybe<VariantMediaAssign>;
	/**
	 * Unassign an media from a product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly variantMediaUnassign?: Maybe<VariantMediaUnassign>;
	/**
	 * Deletes vouchers.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherBulkDelete?: Maybe<VoucherBulkDelete>;
	/**
	 * Adds products, categories, collections to a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
	/**
	 * Removes products, categories, collections from a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
	/**
	 * Manage voucher's availability in channels.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>;
	/**
	 * Creates a new voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherCreate?: Maybe<VoucherCreate>;
	/**
	 * Deletes a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherDelete?: Maybe<VoucherDelete>;
	/**
	 * Creates/updates translations for a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly voucherTranslate?: Maybe<VoucherTranslate>;
	/**
	 * Updates a voucher.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucherUpdate?: Maybe<VoucherUpdate>;
	/**
	 * Creates a new webhook subscription.
	 *
	 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
	 */
	readonly webhookCreate?: Maybe<WebhookCreate>;
	/**
	 * Deletes a webhook subscription.
	 *
	 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
	 */
	readonly webhookDelete?: Maybe<WebhookDelete>;
	/**
	 * Updates a webhook subscription.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly webhookUpdate?: Maybe<WebhookUpdate>;
};

export type MutationAccountAddressCreateArgs = {
	input: AddressInput;
	type?: InputMaybe<AddressTypeEnum>;
};

export type MutationAccountAddressDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAccountAddressUpdateArgs = {
	id: Scalars['ID'];
	input: AddressInput;
};

export type MutationAccountDeleteArgs = {
	token: Scalars['String'];
};

export type MutationAccountRegisterArgs = {
	input: AccountRegisterInput;
};

export type MutationAccountRequestDeletionArgs = {
	channel?: InputMaybe<Scalars['String']>;
	redirectUrl: Scalars['String'];
};

export type MutationAccountSetDefaultAddressArgs = {
	id: Scalars['ID'];
	type: AddressTypeEnum;
};

export type MutationAccountUpdateArgs = {
	input: AccountInput;
};

export type MutationAddressCreateArgs = {
	input: AddressInput;
	userId: Scalars['ID'];
};

export type MutationAddressDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAddressSetDefaultArgs = {
	addressId: Scalars['ID'];
	type: AddressTypeEnum;
	userId: Scalars['ID'];
};

export type MutationAddressUpdateArgs = {
	id: Scalars['ID'];
	input: AddressInput;
};

export type MutationAppActivateArgs = {
	id: Scalars['ID'];
};

export type MutationAppCreateArgs = {
	input: AppInput;
};

export type MutationAppDeactivateArgs = {
	id: Scalars['ID'];
};

export type MutationAppDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAppDeleteFailedInstallationArgs = {
	id: Scalars['ID'];
};

export type MutationAppFetchManifestArgs = {
	manifestUrl: Scalars['String'];
};

export type MutationAppInstallArgs = {
	input: AppInstallInput;
};

export type MutationAppRetryInstallArgs = {
	activateAfterInstallation?: InputMaybe<Scalars['Boolean']>;
	id: Scalars['ID'];
};

export type MutationAppTokenCreateArgs = {
	input: AppTokenInput;
};

export type MutationAppTokenDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAppTokenVerifyArgs = {
	token: Scalars['String'];
};

export type MutationAppUpdateArgs = {
	id: Scalars['ID'];
	input: AppInput;
};

export type MutationAssignNavigationArgs = {
	menu?: InputMaybe<Scalars['ID']>;
	navigationType: NavigationType;
};

export type MutationAssignWarehouseShippingZoneArgs = {
	id: Scalars['ID'];
	shippingZoneIds: ReadonlyArray<Scalars['ID']>;
};

export type MutationAttributeBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationAttributeCreateArgs = {
	input: AttributeCreateInput;
};

export type MutationAttributeDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAttributeReorderValuesArgs = {
	attributeId: Scalars['ID'];
	moves: ReadonlyArray<ReorderInput>;
};

export type MutationAttributeTranslateArgs = {
	id: Scalars['ID'];
	input: NameTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationAttributeUpdateArgs = {
	id: Scalars['ID'];
	input: AttributeUpdateInput;
};

export type MutationAttributeValueBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationAttributeValueCreateArgs = {
	attribute: Scalars['ID'];
	input: AttributeValueCreateInput;
};

export type MutationAttributeValueDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationAttributeValueTranslateArgs = {
	id: Scalars['ID'];
	input: AttributeValueTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationAttributeValueUpdateArgs = {
	id: Scalars['ID'];
	input: AttributeValueUpdateInput;
};

export type MutationCategoryBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationCategoryCreateArgs = {
	input: CategoryInput;
	parent?: InputMaybe<Scalars['ID']>;
};

export type MutationCategoryDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationCategoryTranslateArgs = {
	id: Scalars['ID'];
	input: TranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationCategoryUpdateArgs = {
	id: Scalars['ID'];
	input: CategoryInput;
};

export type MutationChannelActivateArgs = {
	id: Scalars['ID'];
};

export type MutationChannelCreateArgs = {
	input: ChannelCreateInput;
};

export type MutationChannelDeactivateArgs = {
	id: Scalars['ID'];
};

export type MutationChannelDeleteArgs = {
	id: Scalars['ID'];
	input?: InputMaybe<ChannelDeleteInput>;
};

export type MutationChannelUpdateArgs = {
	id: Scalars['ID'];
	input: ChannelUpdateInput;
};

export type MutationCheckoutAddPromoCodeArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	promoCode: Scalars['String'];
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutBillingAddressUpdateArgs = {
	billingAddress: AddressInput;
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutCompleteArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	paymentData?: InputMaybe<Scalars['JSONString']>;
	redirectUrl?: InputMaybe<Scalars['String']>;
	storeSource?: InputMaybe<Scalars['Boolean']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutCreateArgs = {
	input: CheckoutCreateInput;
};

export type MutationCheckoutCustomerAttachArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	customerId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutCustomerDetachArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutDeliveryMethodUpdateArgs = {
	deliveryMethodId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutEmailUpdateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	email: Scalars['String'];
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutLanguageCodeUpdateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	languageCode: LanguageCodeEnum;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutLineDeleteArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	lineId?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutLinesAddArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	lines: ReadonlyArray<CheckoutLineInput>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutLinesDeleteArgs = {
	id?: InputMaybe<Scalars['ID']>;
	linesIds: ReadonlyArray<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutLinesUpdateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	lines: ReadonlyArray<CheckoutLineUpdateInput>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutPaymentCreateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	input: PaymentInput;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutRemovePromoCodeArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	promoCode?: InputMaybe<Scalars['String']>;
	promoCodeId?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutShippingAddressUpdateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	shippingAddress: AddressInput;
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCheckoutShippingMethodUpdateArgs = {
	checkoutId?: InputMaybe<Scalars['ID']>;
	id?: InputMaybe<Scalars['ID']>;
	shippingMethodId: Scalars['ID'];
	token?: InputMaybe<Scalars['UUID']>;
};

export type MutationCollectionAddProductsArgs = {
	collectionId: Scalars['ID'];
	products: ReadonlyArray<Scalars['ID']>;
};

export type MutationCollectionBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationCollectionChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: CollectionChannelListingUpdateInput;
};

export type MutationCollectionCreateArgs = {
	input: CollectionCreateInput;
};

export type MutationCollectionDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationCollectionRemoveProductsArgs = {
	collectionId: Scalars['ID'];
	products: ReadonlyArray<Scalars['ID']>;
};

export type MutationCollectionReorderProductsArgs = {
	collectionId: Scalars['ID'];
	moves: ReadonlyArray<MoveProductInput>;
};

export type MutationCollectionTranslateArgs = {
	id: Scalars['ID'];
	input: TranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationCollectionUpdateArgs = {
	id: Scalars['ID'];
	input: CollectionInput;
};

export type MutationConfirmAccountArgs = {
	email: Scalars['String'];
	token: Scalars['String'];
};

export type MutationConfirmEmailChangeArgs = {
	channel?: InputMaybe<Scalars['String']>;
	token: Scalars['String'];
};

export type MutationCreateWarehouseArgs = {
	input: WarehouseCreateInput;
};

export type MutationCustomerBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationCustomerCreateArgs = {
	input: UserCreateInput;
};

export type MutationCustomerDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationCustomerUpdateArgs = {
	id: Scalars['ID'];
	input: CustomerInput;
};

export type MutationDeleteMetadataArgs = {
	id: Scalars['ID'];
	keys: ReadonlyArray<Scalars['String']>;
};

export type MutationDeletePrivateMetadataArgs = {
	id: Scalars['ID'];
	keys: ReadonlyArray<Scalars['String']>;
};

export type MutationDeleteWarehouseArgs = {
	id: Scalars['ID'];
};

export type MutationDigitalContentCreateArgs = {
	input: DigitalContentUploadInput;
	variantId: Scalars['ID'];
};

export type MutationDigitalContentDeleteArgs = {
	variantId: Scalars['ID'];
};

export type MutationDigitalContentUpdateArgs = {
	input: DigitalContentInput;
	variantId: Scalars['ID'];
};

export type MutationDigitalContentUrlCreateArgs = {
	input: DigitalContentUrlCreateInput;
};

export type MutationDraftOrderBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationDraftOrderCompleteArgs = {
	id: Scalars['ID'];
};

export type MutationDraftOrderCreateArgs = {
	input: DraftOrderCreateInput;
};

export type MutationDraftOrderDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationDraftOrderLinesBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationDraftOrderUpdateArgs = {
	id: Scalars['ID'];
	input: DraftOrderInput;
};

export type MutationEventDeliveryRetryArgs = {
	id: Scalars['ID'];
};

export type MutationExportGiftCardsArgs = {
	input: ExportGiftCardsInput;
};

export type MutationExportProductsArgs = {
	input: ExportProductsInput;
};

export type MutationExternalAuthenticationUrlArgs = {
	input: Scalars['JSONString'];
	pluginId: Scalars['String'];
};

export type MutationExternalLogoutArgs = {
	input: Scalars['JSONString'];
	pluginId: Scalars['String'];
};

export type MutationExternalNotificationTriggerArgs = {
	channel: Scalars['String'];
	input: ExternalNotificationTriggerInput;
	pluginId?: InputMaybe<Scalars['String']>;
};

export type MutationExternalObtainAccessTokensArgs = {
	input: Scalars['JSONString'];
	pluginId: Scalars['String'];
};

export type MutationExternalRefreshArgs = {
	input: Scalars['JSONString'];
	pluginId: Scalars['String'];
};

export type MutationExternalVerifyArgs = {
	input: Scalars['JSONString'];
	pluginId: Scalars['String'];
};

export type MutationFileUploadArgs = {
	file: Scalars['Upload'];
};

export type MutationGiftCardActivateArgs = {
	id: Scalars['ID'];
};

export type MutationGiftCardAddNoteArgs = {
	id: Scalars['ID'];
	input: GiftCardAddNoteInput;
};

export type MutationGiftCardBulkActivateArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationGiftCardBulkCreateArgs = {
	input: GiftCardBulkCreateInput;
};

export type MutationGiftCardBulkDeactivateArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationGiftCardBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationGiftCardCreateArgs = {
	input: GiftCardCreateInput;
};

export type MutationGiftCardDeactivateArgs = {
	id: Scalars['ID'];
};

export type MutationGiftCardDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationGiftCardResendArgs = {
	input: GiftCardResendInput;
};

export type MutationGiftCardSettingsUpdateArgs = {
	input: GiftCardSettingsUpdateInput;
};

export type MutationGiftCardUpdateArgs = {
	id: Scalars['ID'];
	input: GiftCardUpdateInput;
};

export type MutationInvoiceCreateArgs = {
	input: InvoiceCreateInput;
	orderId: Scalars['ID'];
};

export type MutationInvoiceDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationInvoiceRequestArgs = {
	number?: InputMaybe<Scalars['String']>;
	orderId: Scalars['ID'];
};

export type MutationInvoiceRequestDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationInvoiceSendNotificationArgs = {
	id: Scalars['ID'];
};

export type MutationInvoiceUpdateArgs = {
	id: Scalars['ID'];
	input: UpdateInvoiceInput;
};

export type MutationMenuBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationMenuCreateArgs = {
	input: MenuCreateInput;
};

export type MutationMenuDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationMenuItemBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationMenuItemCreateArgs = {
	input: MenuItemCreateInput;
};

export type MutationMenuItemDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationMenuItemMoveArgs = {
	menu: Scalars['ID'];
	moves: ReadonlyArray<MenuItemMoveInput>;
};

export type MutationMenuItemTranslateArgs = {
	id: Scalars['ID'];
	input: NameTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationMenuItemUpdateArgs = {
	id: Scalars['ID'];
	input: MenuItemInput;
};

export type MutationMenuUpdateArgs = {
	id: Scalars['ID'];
	input: MenuInput;
};

export type MutationOrderAddNoteArgs = {
	input: OrderAddNoteInput;
	order: Scalars['ID'];
};

export type MutationOrderBulkCancelArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationOrderCancelArgs = {
	id: Scalars['ID'];
};

export type MutationOrderCaptureArgs = {
	amount: Scalars['PositiveDecimal'];
	id: Scalars['ID'];
};

export type MutationOrderConfirmArgs = {
	id: Scalars['ID'];
};

export type MutationOrderCreateFromCheckoutArgs = {
	id: Scalars['ID'];
	removeCheckout?: InputMaybe<Scalars['Boolean']>;
};

export type MutationOrderDiscountAddArgs = {
	input: OrderDiscountCommonInput;
	orderId: Scalars['ID'];
};

export type MutationOrderDiscountDeleteArgs = {
	discountId: Scalars['ID'];
};

export type MutationOrderDiscountUpdateArgs = {
	discountId: Scalars['ID'];
	input: OrderDiscountCommonInput;
};

export type MutationOrderFulfillArgs = {
	input: OrderFulfillInput;
	order?: InputMaybe<Scalars['ID']>;
};

export type MutationOrderFulfillmentApproveArgs = {
	allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
	id: Scalars['ID'];
	notifyCustomer: Scalars['Boolean'];
};

export type MutationOrderFulfillmentCancelArgs = {
	id: Scalars['ID'];
	input?: InputMaybe<FulfillmentCancelInput>;
};

export type MutationOrderFulfillmentRefundProductsArgs = {
	input: OrderRefundProductsInput;
	order: Scalars['ID'];
};

export type MutationOrderFulfillmentReturnProductsArgs = {
	input: OrderReturnProductsInput;
	order: Scalars['ID'];
};

export type MutationOrderFulfillmentUpdateTrackingArgs = {
	id: Scalars['ID'];
	input: FulfillmentUpdateTrackingInput;
};

export type MutationOrderLineDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationOrderLineDiscountRemoveArgs = {
	orderLineId: Scalars['ID'];
};

export type MutationOrderLineDiscountUpdateArgs = {
	input: OrderDiscountCommonInput;
	orderLineId: Scalars['ID'];
};

export type MutationOrderLineUpdateArgs = {
	id: Scalars['ID'];
	input: OrderLineInput;
};

export type MutationOrderLinesCreateArgs = {
	id: Scalars['ID'];
	input: ReadonlyArray<OrderLineCreateInput>;
};

export type MutationOrderMarkAsPaidArgs = {
	id: Scalars['ID'];
	transactionReference?: InputMaybe<Scalars['String']>;
};

export type MutationOrderRefundArgs = {
	amount: Scalars['PositiveDecimal'];
	id: Scalars['ID'];
};

export type MutationOrderSettingsUpdateArgs = {
	input: OrderSettingsUpdateInput;
};

export type MutationOrderUpdateArgs = {
	id: Scalars['ID'];
	input: OrderUpdateInput;
};

export type MutationOrderUpdateShippingArgs = {
	input: OrderUpdateShippingInput;
	order: Scalars['ID'];
};

export type MutationOrderVoidArgs = {
	id: Scalars['ID'];
};

export type MutationPageAttributeAssignArgs = {
	attributeIds: ReadonlyArray<Scalars['ID']>;
	pageTypeId: Scalars['ID'];
};

export type MutationPageAttributeUnassignArgs = {
	attributeIds: ReadonlyArray<Scalars['ID']>;
	pageTypeId: Scalars['ID'];
};

export type MutationPageBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationPageBulkPublishArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
	isPublished: Scalars['Boolean'];
};

export type MutationPageCreateArgs = {
	input: PageCreateInput;
};

export type MutationPageDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationPageReorderAttributeValuesArgs = {
	attributeId: Scalars['ID'];
	moves: ReadonlyArray<ReorderInput>;
	pageId: Scalars['ID'];
};

export type MutationPageTranslateArgs = {
	id: Scalars['ID'];
	input: PageTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationPageTypeBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationPageTypeCreateArgs = {
	input: PageTypeCreateInput;
};

export type MutationPageTypeDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationPageTypeReorderAttributesArgs = {
	moves: ReadonlyArray<ReorderInput>;
	pageTypeId: Scalars['ID'];
};

export type MutationPageTypeUpdateArgs = {
	id?: InputMaybe<Scalars['ID']>;
	input: PageTypeUpdateInput;
};

export type MutationPageUpdateArgs = {
	id: Scalars['ID'];
	input: PageInput;
};

export type MutationPasswordChangeArgs = {
	newPassword: Scalars['String'];
	oldPassword: Scalars['String'];
};

export type MutationPaymentCaptureArgs = {
	amount?: InputMaybe<Scalars['PositiveDecimal']>;
	paymentId: Scalars['ID'];
};

export type MutationPaymentCheckBalanceArgs = {
	input: PaymentCheckBalanceInput;
};

export type MutationPaymentInitializeArgs = {
	channel?: InputMaybe<Scalars['String']>;
	gateway: Scalars['String'];
	paymentData?: InputMaybe<Scalars['JSONString']>;
};

export type MutationPaymentRefundArgs = {
	amount?: InputMaybe<Scalars['PositiveDecimal']>;
	paymentId: Scalars['ID'];
};

export type MutationPaymentVoidArgs = {
	paymentId: Scalars['ID'];
};

export type MutationPermissionGroupCreateArgs = {
	input: PermissionGroupCreateInput;
};

export type MutationPermissionGroupDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationPermissionGroupUpdateArgs = {
	id: Scalars['ID'];
	input: PermissionGroupUpdateInput;
};

export type MutationPluginUpdateArgs = {
	channelId?: InputMaybe<Scalars['ID']>;
	id: Scalars['ID'];
	input: PluginUpdateInput;
};

export type MutationProductAttributeAssignArgs = {
	operations: ReadonlyArray<ProductAttributeAssignInput>;
	productTypeId: Scalars['ID'];
};

export type MutationProductAttributeAssignmentUpdateArgs = {
	operations: ReadonlyArray<ProductAttributeAssignmentUpdateInput>;
	productTypeId: Scalars['ID'];
};

export type MutationProductAttributeUnassignArgs = {
	attributeIds: ReadonlyArray<Scalars['ID']>;
	productTypeId: Scalars['ID'];
};

export type MutationProductBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationProductChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: ProductChannelListingUpdateInput;
};

export type MutationProductCreateArgs = {
	input: ProductCreateInput;
};

export type MutationProductDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationProductMediaBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationProductMediaCreateArgs = {
	input: ProductMediaCreateInput;
};

export type MutationProductMediaDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationProductMediaReorderArgs = {
	mediaIds: ReadonlyArray<Scalars['ID']>;
	productId: Scalars['ID'];
};

export type MutationProductMediaUpdateArgs = {
	id: Scalars['ID'];
	input: ProductMediaUpdateInput;
};

export type MutationProductReorderAttributeValuesArgs = {
	attributeId: Scalars['ID'];
	moves: ReadonlyArray<ReorderInput>;
	productId: Scalars['ID'];
};

export type MutationProductTranslateArgs = {
	id: Scalars['ID'];
	input: TranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationProductTypeBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationProductTypeCreateArgs = {
	input: ProductTypeInput;
};

export type MutationProductTypeDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationProductTypeReorderAttributesArgs = {
	moves: ReadonlyArray<ReorderInput>;
	productTypeId: Scalars['ID'];
	type: ProductAttributeType;
};

export type MutationProductTypeUpdateArgs = {
	id: Scalars['ID'];
	input: ProductTypeInput;
};

export type MutationProductUpdateArgs = {
	id: Scalars['ID'];
	input: ProductInput;
};

export type MutationProductVariantBulkCreateArgs = {
	product: Scalars['ID'];
	variants: ReadonlyArray<ProductVariantBulkCreateInput>;
};

export type MutationProductVariantBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationProductVariantChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: ReadonlyArray<ProductVariantChannelListingAddInput>;
};

export type MutationProductVariantCreateArgs = {
	input: ProductVariantCreateInput;
};

export type MutationProductVariantDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationProductVariantPreorderDeactivateArgs = {
	id: Scalars['ID'];
};

export type MutationProductVariantReorderArgs = {
	moves: ReadonlyArray<ReorderInput>;
	productId: Scalars['ID'];
};

export type MutationProductVariantReorderAttributeValuesArgs = {
	attributeId: Scalars['ID'];
	moves: ReadonlyArray<ReorderInput>;
	variantId: Scalars['ID'];
};

export type MutationProductVariantSetDefaultArgs = {
	productId: Scalars['ID'];
	variantId: Scalars['ID'];
};

export type MutationProductVariantStocksCreateArgs = {
	stocks: ReadonlyArray<StockInput>;
	variantId: Scalars['ID'];
};

export type MutationProductVariantStocksDeleteArgs = {
	variantId: Scalars['ID'];
	warehouseIds?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export type MutationProductVariantStocksUpdateArgs = {
	stocks: ReadonlyArray<StockInput>;
	variantId: Scalars['ID'];
};

export type MutationProductVariantTranslateArgs = {
	id: Scalars['ID'];
	input: NameTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationProductVariantUpdateArgs = {
	id: Scalars['ID'];
	input: ProductVariantInput;
};

export type MutationRequestEmailChangeArgs = {
	channel?: InputMaybe<Scalars['String']>;
	newEmail: Scalars['String'];
	password: Scalars['String'];
	redirectUrl: Scalars['String'];
};

export type MutationRequestPasswordResetArgs = {
	channel?: InputMaybe<Scalars['String']>;
	email: Scalars['String'];
	redirectUrl: Scalars['String'];
};

export type MutationSaleBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationSaleCataloguesAddArgs = {
	id: Scalars['ID'];
	input: CatalogueInput;
};

export type MutationSaleCataloguesRemoveArgs = {
	id: Scalars['ID'];
	input: CatalogueInput;
};

export type MutationSaleChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: SaleChannelListingInput;
};

export type MutationSaleCreateArgs = {
	input: SaleInput;
};

export type MutationSaleDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationSaleTranslateArgs = {
	id: Scalars['ID'];
	input: NameTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationSaleUpdateArgs = {
	id: Scalars['ID'];
	input: SaleInput;
};

export type MutationSetPasswordArgs = {
	email: Scalars['String'];
	password: Scalars['String'];
	token: Scalars['String'];
};

export type MutationShippingMethodChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: ShippingMethodChannelListingInput;
};

export type MutationShippingPriceBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationShippingPriceCreateArgs = {
	input: ShippingPriceInput;
};

export type MutationShippingPriceDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationShippingPriceExcludeProductsArgs = {
	id: Scalars['ID'];
	input: ShippingPriceExcludeProductsInput;
};

export type MutationShippingPriceRemoveProductFromExcludeArgs = {
	id: Scalars['ID'];
	products: ReadonlyArray<Scalars['ID']>;
};

export type MutationShippingPriceTranslateArgs = {
	id: Scalars['ID'];
	input: ShippingPriceTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationShippingPriceUpdateArgs = {
	id: Scalars['ID'];
	input: ShippingPriceInput;
};

export type MutationShippingZoneBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationShippingZoneCreateArgs = {
	input: ShippingZoneCreateInput;
};

export type MutationShippingZoneDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationShippingZoneUpdateArgs = {
	id: Scalars['ID'];
	input: ShippingZoneUpdateInput;
};

export type MutationShopAddressUpdateArgs = {
	input?: InputMaybe<AddressInput>;
};

export type MutationShopDomainUpdateArgs = {
	input?: InputMaybe<SiteDomainInput>;
};

export type MutationShopSettingsTranslateArgs = {
	input: ShopSettingsTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationShopSettingsUpdateArgs = {
	input: ShopSettingsInput;
};

export type MutationStaffBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationStaffCreateArgs = {
	input: StaffCreateInput;
};

export type MutationStaffDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationStaffNotificationRecipientCreateArgs = {
	input: StaffNotificationRecipientInput;
};

export type MutationStaffNotificationRecipientDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationStaffNotificationRecipientUpdateArgs = {
	id: Scalars['ID'];
	input: StaffNotificationRecipientInput;
};

export type MutationStaffUpdateArgs = {
	id: Scalars['ID'];
	input: StaffUpdateInput;
};

export type MutationTokenCreateArgs = {
	email: Scalars['String'];
	password: Scalars['String'];
};

export type MutationTokenRefreshArgs = {
	csrfToken?: InputMaybe<Scalars['String']>;
	refreshToken?: InputMaybe<Scalars['String']>;
};

export type MutationTokenVerifyArgs = {
	token: Scalars['String'];
};

export type MutationTransactionCreateArgs = {
	id: Scalars['ID'];
	transaction: TransactionCreateInput;
	transactionEvent?: InputMaybe<TransactionEventInput>;
};

export type MutationTransactionRequestActionArgs = {
	actionType: TransactionActionEnum;
	amount?: InputMaybe<Scalars['PositiveDecimal']>;
	id: Scalars['ID'];
};

export type MutationTransactionUpdateArgs = {
	id: Scalars['ID'];
	transaction?: InputMaybe<TransactionUpdateInput>;
	transactionEvent?: InputMaybe<TransactionEventInput>;
};

export type MutationUnassignWarehouseShippingZoneArgs = {
	id: Scalars['ID'];
	shippingZoneIds: ReadonlyArray<Scalars['ID']>;
};

export type MutationUpdateMetadataArgs = {
	id: Scalars['ID'];
	input: ReadonlyArray<MetadataInput>;
};

export type MutationUpdatePrivateMetadataArgs = {
	id: Scalars['ID'];
	input: ReadonlyArray<MetadataInput>;
};

export type MutationUpdateWarehouseArgs = {
	id: Scalars['ID'];
	input: WarehouseUpdateInput;
};

export type MutationUserAvatarUpdateArgs = {
	image: Scalars['Upload'];
};

export type MutationUserBulkSetActiveArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
	isActive: Scalars['Boolean'];
};

export type MutationVariantMediaAssignArgs = {
	mediaId: Scalars['ID'];
	variantId: Scalars['ID'];
};

export type MutationVariantMediaUnassignArgs = {
	mediaId: Scalars['ID'];
	variantId: Scalars['ID'];
};

export type MutationVoucherBulkDeleteArgs = {
	ids: ReadonlyArray<Scalars['ID']>;
};

export type MutationVoucherCataloguesAddArgs = {
	id: Scalars['ID'];
	input: CatalogueInput;
};

export type MutationVoucherCataloguesRemoveArgs = {
	id: Scalars['ID'];
	input: CatalogueInput;
};

export type MutationVoucherChannelListingUpdateArgs = {
	id: Scalars['ID'];
	input: VoucherChannelListingInput;
};

export type MutationVoucherCreateArgs = {
	input: VoucherInput;
};

export type MutationVoucherDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationVoucherTranslateArgs = {
	id: Scalars['ID'];
	input: NameTranslationInput;
	languageCode: LanguageCodeEnum;
};

export type MutationVoucherUpdateArgs = {
	id: Scalars['ID'];
	input: VoucherInput;
};

export type MutationWebhookCreateArgs = {
	input: WebhookCreateInput;
};

export type MutationWebhookDeleteArgs = {
	id: Scalars['ID'];
};

export type MutationWebhookUpdateArgs = {
	id: Scalars['ID'];
	input: WebhookUpdateInput;
};

export type NameTranslationInput = {
	readonly name?: InputMaybe<Scalars['String']>;
};

export enum NavigationType {
	/** Main storefront navigation. */
	Main = 'MAIN',
	/** Secondary storefront navigation. */
	Secondary = 'SECONDARY',
}

/** An object with an ID */
export type Node = {
	/** The ID of the object. */
	readonly id: Scalars['ID'];
};

export type ObjectWithMetadata = {
	/** List of public metadata items. Can be accessed without permissions. */
	readonly metadata: ReadonlyArray<MetadataItem>;
	/**
	 * A single key from public metadata.
	 *
	 * Tip: Use GraphQL aliases to fetch multiple keys.
	 *
	 * Added in Saleor 3.3.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly metafield?: Maybe<Scalars['String']>;
	/**
	 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
	 *
	 * Added in Saleor 3.3.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly metafields?: Maybe<Scalars['Metadata']>;
	/** List of private metadata items. Requires staff permissions to access. */
	readonly privateMetadata: ReadonlyArray<MetadataItem>;
	/**
	 * A single key from private metadata. Requires staff permissions to access.
	 *
	 * Tip: Use GraphQL aliases to fetch multiple keys.
	 *
	 * Added in Saleor 3.3.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly privateMetafield?: Maybe<Scalars['String']>;
	/**
	 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
	 *
	 * Added in Saleor 3.3.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly privateMetafields?: Maybe<Scalars['Metadata']>;
};

export type ObjectWithMetadataMetafieldArgs = {
	key: Scalars['String'];
};

export type ObjectWithMetadataMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export type ObjectWithMetadataPrivateMetafieldArgs = {
	key: Scalars['String'];
};

export type ObjectWithMetadataPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents an order in the shop. */
export type Order = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Order';
		/** List of actions that can be performed in the current state of an order. */
		readonly actions: ReadonlyArray<OrderAction>;
		/**
		 * The authorize status of the order.
		 *
		 * Added in Saleor 3.4.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly authorizeStatus: OrderAuthorizeStatusEnum;
		/**
		 * Collection points that can be used for this order.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly availableCollectionPoints: ReadonlyArray<Warehouse>;
		/**
		 * Shipping methods that can be used with this order.
		 * @deprecated Use `shippingMethods`, this field will be removed in 4.0
		 */
		readonly availableShippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
		/** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
		readonly billingAddress?: Maybe<Address>;
		/** Informs whether a draft order can be finalized(turned into a regular order). */
		readonly canFinalize: Scalars['Boolean'];
		readonly channel: Channel;
		/**
		 * The charge status of the order.
		 *
		 * Added in Saleor 3.4.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly chargeStatus: OrderChargeStatusEnum;
		readonly collectionPointName?: Maybe<Scalars['String']>;
		readonly created: Scalars['DateTime'];
		readonly customerNote: Scalars['String'];
		/**
		 * The delivery method selected for this checkout.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly deliveryMethod?: Maybe<DeliveryMethod>;
		/**
		 * Returns applied discount.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
		 */
		readonly discount?: Maybe<Money>;
		/**
		 * Discount name.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
		 */
		readonly discountName?: Maybe<Scalars['String']>;
		/** List of all discounts assigned to the order. */
		readonly discounts: ReadonlyArray<OrderDiscount>;
		readonly displayGrossPrices: Scalars['Boolean'];
		/** List of errors that occurred during order validation. */
		readonly errors: ReadonlyArray<OrderError>;
		/**
		 * List of events associated with the order.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly events: ReadonlyArray<OrderEvent>;
		/** List of shipments for the order. */
		readonly fulfillments: ReadonlyArray<Fulfillment>;
		/** List of user gift cards. */
		readonly giftCards: ReadonlyArray<GiftCard>;
		readonly id: Scalars['ID'];
		/** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
		readonly invoices: ReadonlyArray<Invoice>;
		/** Informs if an order is fully paid. */
		readonly isPaid: Scalars['Boolean'];
		/** Returns True, if order requires shipping. */
		readonly isShippingRequired: Scalars['Boolean'];
		/** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
		readonly languageCode: Scalars['String'];
		/** Order language code. */
		readonly languageCodeEnum: LanguageCodeEnum;
		/** List of order lines. */
		readonly lines: ReadonlyArray<OrderLine>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** User-friendly number of an order. */
		readonly number: Scalars['String'];
		/** The order origin. */
		readonly origin: OrderOriginEnum;
		/** The ID of the order that was the base for this order. */
		readonly original?: Maybe<Scalars['ID']>;
		/** Internal payment status. */
		readonly paymentStatus: PaymentChargeStatusEnum;
		/** User-friendly payment status. */
		readonly paymentStatusDisplay: Scalars['String'];
		/** List of payments for the order. */
		readonly payments: ReadonlyArray<Payment>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly redirectUrl?: Maybe<Scalars['String']>;
		/** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
		readonly shippingAddress?: Maybe<Address>;
		/**
		 * Shipping method for this order.
		 * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
		 */
		readonly shippingMethod?: Maybe<ShippingMethod>;
		readonly shippingMethodName?: Maybe<Scalars['String']>;
		/** Shipping methods related to this order. */
		readonly shippingMethods: ReadonlyArray<ShippingMethod>;
		/** Total price of shipping. */
		readonly shippingPrice: TaxedMoney;
		readonly shippingTaxRate: Scalars['Float'];
		readonly status: OrderStatus;
		/** User-friendly order status. */
		readonly statusDisplay: Scalars['String'];
		/** The sum of line prices not including shipping. */
		readonly subtotal: TaxedMoney;
		/** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
		readonly token: Scalars['String'];
		/** Total amount of the order. */
		readonly total: TaxedMoney;
		/** Amount authorized for the order. */
		readonly totalAuthorized: Money;
		/** The difference between the paid and the order total amount. */
		readonly totalBalance: Money;
		/** Amount captured by payment. */
		readonly totalCaptured: Money;
		readonly trackingClientId: Scalars['String'];
		/**
		 * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
		 *
		 * Added in Saleor 3.4.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly transactions: ReadonlyArray<TransactionItem>;
		/**
		 * Translated discount name.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
		 */
		readonly translatedDiscountName?: Maybe<Scalars['String']>;
		/** Undiscounted total amount of the order. */
		readonly undiscountedTotal: TaxedMoney;
		readonly updatedAt: Scalars['DateTime'];
		/** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, OWNER. */
		readonly user?: Maybe<User>;
		/** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
		readonly userEmail?: Maybe<Scalars['String']>;
		readonly voucher?: Maybe<Voucher>;
		readonly weight: Weight;
	};

/** Represents an order in the shop. */
export type OrderMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an order in the shop. */
export type OrderMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents an order in the shop. */
export type OrderPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an order in the shop. */
export type OrderPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export enum OrderAction {
	/** Represents the capture action. */
	Capture = 'CAPTURE',
	/** Represents a mark-as-paid action. */
	MarkAsPaid = 'MARK_AS_PAID',
	/** Represents a refund action. */
	Refund = 'REFUND',
	/** Represents a void action. */
	Void = 'VOID',
}

/**
 * Adds note to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderAddNote = {
	readonly __typename?: 'OrderAddNote';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order note created. */
	readonly event?: Maybe<OrderEvent>;
	/** Order with the note added. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderAddNoteInput = {
	/** Note message. */
	readonly message: Scalars['String'];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the order.total.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the order.total
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized or charged don't cover fully the order's
 *     total
 *     FULL - the funds that are authorized or charged fully cover the order's total
 *
 */
export enum OrderAuthorizeStatusEnum {
	Full = 'FULL',
	None = 'NONE',
	Partial = 'PARTIAL',
}

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderBulkCancel = {
	readonly __typename?: 'OrderBulkCancel';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<OrderError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCancel = {
	readonly __typename?: 'OrderCancel';
	readonly errors: ReadonlyArray<OrderError>;
	/** Canceled order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderCancelled = Event & {
	readonly __typename?: 'OrderCancelled';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderCapture = {
	readonly __typename?: 'OrderCapture';
	readonly errors: ReadonlyArray<OrderError>;
	/** Captured order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     We treat the order as overcharged when the charged amount is bigger that order.total
 *     We treat the order as fully charged when the charged amount is equal to order.total.
 *     We treat the order as partially charged when the charged amount covers only part of
 *     the order.total
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the order's total
 *     FULL - the funds that are charged fully cover the order's total
 *     OVERCHARGED - the charged funds are bigger than order's total
 *
 */
export enum OrderChargeStatusEnum {
	Full = 'FULL',
	None = 'NONE',
	Overcharged = 'OVERCHARGED',
	Partial = 'PARTIAL',
}

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderConfirm = {
	readonly __typename?: 'OrderConfirm';
	readonly errors: ReadonlyArray<OrderError>;
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderConfirmed = Event & {
	readonly __typename?: 'OrderConfirmed';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type OrderCountableConnection = {
	readonly __typename?: 'OrderCountableConnection';
	readonly edges: ReadonlyArray<OrderCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type OrderCountableEdge = {
	readonly __typename?: 'OrderCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Order;
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type OrderCreateFromCheckout = {
	readonly __typename?: 'OrderCreateFromCheckout';
	readonly errors: ReadonlyArray<OrderCreateFromCheckoutError>;
	/** Placed order. */
	readonly order?: Maybe<Order>;
};

export type OrderCreateFromCheckoutError = {
	readonly __typename?: 'OrderCreateFromCheckoutError';
	/** The error code. */
	readonly code: OrderCreateFromCheckoutErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** List of line Ids which cause the error. */
	readonly lines?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of variant IDs which causes the error. */
	readonly variants?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum OrderCreateFromCheckoutErrorCode {
	BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
	ChannelInactive = 'CHANNEL_INACTIVE',
	CheckoutNotFound = 'CHECKOUT_NOT_FOUND',
	EmailNotSet = 'EMAIL_NOT_SET',
	GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
	GraphqlError = 'GRAPHQL_ERROR',
	InsufficientStock = 'INSUFFICIENT_STOCK',
	InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
	NoLines = 'NO_LINES',
	ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
	ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
	TaxError = 'TAX_ERROR',
	UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
	VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
}

export type OrderCreated = Event & {
	readonly __typename?: 'OrderCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export enum OrderDirection {
	/** Specifies an ascending sort order. */
	Asc = 'ASC',
	/** Specifies a descending sort order. */
	Desc = 'DESC',
}

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
	readonly __typename?: 'OrderDiscount';
	/** Returns amount of discount. */
	readonly amount: Money;
	readonly id: Scalars['ID'];
	readonly name?: Maybe<Scalars['String']>;
	/**
	 * Explanation for the applied discount.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly reason?: Maybe<Scalars['String']>;
	readonly translatedName?: Maybe<Scalars['String']>;
	readonly type: OrderDiscountType;
	/** Value of the discount. Can store fixed value or percent value */
	readonly value: Scalars['PositiveDecimal'];
	/** Type of the discount: fixed or percent */
	readonly valueType: DiscountValueTypeEnum;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountAdd = {
	readonly __typename?: 'OrderDiscountAdd';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which has been discounted. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderDiscountCommonInput = {
	/** Explanation for the applied discount. */
	readonly reason?: InputMaybe<Scalars['String']>;
	/** Value of the discount. Can store fixed value or percent value */
	readonly value: Scalars['PositiveDecimal'];
	/** Type of the discount: fixed or percent */
	readonly valueType: DiscountValueTypeEnum;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountDelete = {
	readonly __typename?: 'OrderDiscountDelete';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which has removed discount. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/** An enumeration. */
export enum OrderDiscountType {
	Manual = 'MANUAL',
	Voucher = 'VOUCHER',
}

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderDiscountUpdate = {
	readonly __typename?: 'OrderDiscountUpdate';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which has been discounted. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderDraftFilterInput = {
	readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly created?: InputMaybe<DateRangeInput>;
	readonly customer?: InputMaybe<Scalars['String']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type OrderError = {
	readonly __typename?: 'OrderError';
	/** A type of address that causes the error. */
	readonly addressType?: Maybe<AddressTypeEnum>;
	/** The error code. */
	readonly code: OrderErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of order line IDs that cause the error. */
	readonly orderLines?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of product variants that are associated with the error */
	readonly variants?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** Warehouse ID which causes the error. */
	readonly warehouse?: Maybe<Scalars['ID']>;
};

/** An enumeration. */
export enum OrderErrorCode {
	BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
	CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
	CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
	CannotDelete = 'CANNOT_DELETE',
	CannotDiscount = 'CANNOT_DISCOUNT',
	CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
	CannotRefund = 'CANNOT_REFUND',
	CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
	ChannelInactive = 'CHANNEL_INACTIVE',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	FulfillOrderLine = 'FULFILL_ORDER_LINE',
	GiftCardLine = 'GIFT_CARD_LINE',
	GraphqlError = 'GRAPHQL_ERROR',
	InsufficientStock = 'INSUFFICIENT_STOCK',
	Invalid = 'INVALID',
	InvalidQuantity = 'INVALID_QUANTITY',
	MissingTransactionActionRequestWebhook = 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK',
	NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
	NotEditable = 'NOT_EDITABLE',
	NotFound = 'NOT_FOUND',
	OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
	PaymentError = 'PAYMENT_ERROR',
	PaymentMissing = 'PAYMENT_MISSING',
	ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
	ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
	Required = 'REQUIRED',
	ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
	ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
	TaxError = 'TAX_ERROR',
	Unique = 'UNIQUE',
	VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
	ZeroQuantity = 'ZERO_QUANTITY',
}

/** History log of the order. */
export type OrderEvent = Node & {
	readonly __typename?: 'OrderEvent';
	/** Amount of money. */
	readonly amount?: Maybe<Scalars['Float']>;
	/** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
	readonly app?: Maybe<App>;
	/** Composed ID of the Fulfillment. */
	readonly composedId?: Maybe<Scalars['String']>;
	/** Date when event happened at in ISO 8601 format. */
	readonly date?: Maybe<Scalars['DateTime']>;
	/** The discount applied to the order. */
	readonly discount?: Maybe<OrderEventDiscountObject>;
	/** Email of the customer. */
	readonly email?: Maybe<Scalars['String']>;
	/** Type of an email sent to the customer. */
	readonly emailType?: Maybe<OrderEventsEmailsEnum>;
	/** The lines fulfilled. */
	readonly fulfilledItems?: Maybe<ReadonlyArray<FulfillmentLine>>;
	readonly id: Scalars['ID'];
	/** Number of an invoice related to the order. */
	readonly invoiceNumber?: Maybe<Scalars['String']>;
	/** The concerned lines. */
	readonly lines?: Maybe<ReadonlyArray<OrderEventOrderLineObject>>;
	/** Content of the event. */
	readonly message?: Maybe<Scalars['String']>;
	/** User-friendly number of an order. */
	readonly orderNumber?: Maybe<Scalars['String']>;
	/** List of oversold lines names. */
	readonly oversoldItems?: Maybe<ReadonlyArray<Scalars['String']>>;
	/** The payment gateway of the payment. */
	readonly paymentGateway?: Maybe<Scalars['String']>;
	/** The payment reference from the payment provider. */
	readonly paymentId?: Maybe<Scalars['String']>;
	/** Number of items. */
	readonly quantity?: Maybe<Scalars['Int']>;
	/** The reference of payment's transaction. */
	readonly reference?: Maybe<Scalars['String']>;
	/** The order which is related to this order. */
	readonly relatedOrder?: Maybe<Order>;
	/** Define if shipping costs were included to the refund. */
	readonly shippingCostsIncluded?: Maybe<Scalars['Boolean']>;
	/** The status of payment's transaction. */
	readonly status?: Maybe<TransactionStatus>;
	/** The transaction reference of captured payment. */
	readonly transactionReference?: Maybe<Scalars['String']>;
	/** Order event type. */
	readonly type?: Maybe<OrderEventsEnum>;
	/** User who performed the action. */
	readonly user?: Maybe<User>;
	/** The warehouse were items were restocked. */
	readonly warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
	readonly __typename?: 'OrderEventCountableConnection';
	readonly edges: ReadonlyArray<OrderEventCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type OrderEventCountableEdge = {
	readonly __typename?: 'OrderEventCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: OrderEvent;
};

export type OrderEventDiscountObject = {
	readonly __typename?: 'OrderEventDiscountObject';
	/** Returns amount of discount. */
	readonly amount?: Maybe<Money>;
	/** Returns amount of discount. */
	readonly oldAmount?: Maybe<Money>;
	/** Value of the discount. Can store fixed value or percent value. */
	readonly oldValue?: Maybe<Scalars['PositiveDecimal']>;
	/** Type of the discount: fixed or percent. */
	readonly oldValueType?: Maybe<DiscountValueTypeEnum>;
	/** Explanation for the applied discount. */
	readonly reason?: Maybe<Scalars['String']>;
	/** Value of the discount. Can store fixed value or percent value. */
	readonly value: Scalars['PositiveDecimal'];
	/** Type of the discount: fixed or percent. */
	readonly valueType: DiscountValueTypeEnum;
};

export type OrderEventOrderLineObject = {
	readonly __typename?: 'OrderEventOrderLineObject';
	/** The discount applied to the order line. */
	readonly discount?: Maybe<OrderEventDiscountObject>;
	/** The variant name. */
	readonly itemName?: Maybe<Scalars['String']>;
	/** The order line. */
	readonly orderLine?: Maybe<OrderLine>;
	/** The variant quantity. */
	readonly quantity?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum OrderEventsEmailsEnum {
	Confirmed = 'CONFIRMED',
	DigitalLinks = 'DIGITAL_LINKS',
	FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
	OrderCancel = 'ORDER_CANCEL',
	OrderConfirmation = 'ORDER_CONFIRMATION',
	OrderRefund = 'ORDER_REFUND',
	PaymentConfirmation = 'PAYMENT_CONFIRMATION',
	ShippingConfirmation = 'SHIPPING_CONFIRMATION',
	TrackingUpdated = 'TRACKING_UPDATED',
}

/** An enumeration. */
export enum OrderEventsEnum {
	AddedProducts = 'ADDED_PRODUCTS',
	Canceled = 'CANCELED',
	Confirmed = 'CONFIRMED',
	DraftCreated = 'DRAFT_CREATED',
	DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
	EmailSent = 'EMAIL_SENT',
	ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
	FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
	FulfillmentCanceled = 'FULFILLMENT_CANCELED',
	FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
	FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
	FulfillmentReplaced = 'FULFILLMENT_REPLACED',
	FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
	FulfillmentReturned = 'FULFILLMENT_RETURNED',
	InvoiceGenerated = 'INVOICE_GENERATED',
	InvoiceRequested = 'INVOICE_REQUESTED',
	InvoiceSent = 'INVOICE_SENT',
	InvoiceUpdated = 'INVOICE_UPDATED',
	NoteAdded = 'NOTE_ADDED',
	OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
	OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
	OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
	OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
	OrderFullyPaid = 'ORDER_FULLY_PAID',
	OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
	OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
	OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
	OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
	OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
	OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
	Other = 'OTHER',
	OversoldItems = 'OVERSOLD_ITEMS',
	PaymentAuthorized = 'PAYMENT_AUTHORIZED',
	PaymentCaptured = 'PAYMENT_CAPTURED',
	PaymentFailed = 'PAYMENT_FAILED',
	PaymentRefunded = 'PAYMENT_REFUNDED',
	PaymentVoided = 'PAYMENT_VOIDED',
	Placed = 'PLACED',
	PlacedFromDraft = 'PLACED_FROM_DRAFT',
	RemovedProducts = 'REMOVED_PRODUCTS',
	TrackingUpdated = 'TRACKING_UPDATED',
	TransactionCaptureRequested = 'TRANSACTION_CAPTURE_REQUESTED',
	TransactionEvent = 'TRANSACTION_EVENT',
	TransactionRefundRequested = 'TRANSACTION_REFUND_REQUESTED',
	TransactionVoidRequested = 'TRANSACTION_VOID_REQUESTED',
	UpdatedAddress = 'UPDATED_ADDRESS',
}

export type OrderFilterInput = {
	readonly authorizeStatus?: InputMaybe<
		ReadonlyArray<OrderAuthorizeStatusEnum>
	>;
	readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly chargeStatus?: InputMaybe<ReadonlyArray<OrderChargeStatusEnum>>;
	readonly created?: InputMaybe<DateRangeInput>;
	readonly customer?: InputMaybe<Scalars['String']>;
	readonly giftCardBought?: InputMaybe<Scalars['Boolean']>;
	readonly giftCardUsed?: InputMaybe<Scalars['Boolean']>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly isClickAndCollect?: InputMaybe<Scalars['Boolean']>;
	readonly isPreorder?: InputMaybe<Scalars['Boolean']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly numbers?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	readonly paymentStatus?: InputMaybe<ReadonlyArray<PaymentChargeStatusEnum>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly status?: InputMaybe<ReadonlyArray<OrderStatusFilter>>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderFulfill = {
	readonly __typename?: 'OrderFulfill';
	readonly errors: ReadonlyArray<OrderError>;
	/** List of created fulfillments. */
	readonly fulfillments?: Maybe<ReadonlyArray<Fulfillment>>;
	/** Fulfilled order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderFulfillInput = {
	/** If true, then allow proceed fulfillment when stock is exceeded. */
	readonly allowStockToBeExceeded?: InputMaybe<Scalars['Boolean']>;
	/** List of items informing how to fulfill the order. */
	readonly lines: ReadonlyArray<OrderFulfillLineInput>;
	/** If true, send an email notification to the customer. */
	readonly notifyCustomer?: InputMaybe<Scalars['Boolean']>;
};

export type OrderFulfillLineInput = {
	/** The ID of the order line. */
	readonly orderLineId?: InputMaybe<Scalars['ID']>;
	/** List of stock items to create. */
	readonly stocks: ReadonlyArray<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
	/** The number of line items to be fulfilled from given warehouse. */
	readonly quantity: Scalars['Int'];
	/** ID of the warehouse from which the item will be fulfilled. */
	readonly warehouse: Scalars['ID'];
};

export type OrderFulfilled = Event & {
	readonly __typename?: 'OrderFulfilled';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type OrderFullyPaid = Event & {
	readonly __typename?: 'OrderFullyPaid';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/** Represents order line of particular order. */
export type OrderLine = Node & {
	readonly __typename?: 'OrderLine';
	/**
	 * List of allocations across warehouses.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly allocations?: Maybe<ReadonlyArray<Allocation>>;
	readonly digitalContentUrl?: Maybe<DigitalContentUrl>;
	readonly id: Scalars['ID'];
	readonly isShippingRequired: Scalars['Boolean'];
	readonly productName: Scalars['String'];
	readonly productSku?: Maybe<Scalars['String']>;
	readonly productVariantId?: Maybe<Scalars['String']>;
	readonly quantity: Scalars['Int'];
	readonly quantityFulfilled: Scalars['Int'];
	/**
	 * A quantity of items remaining to be fulfilled.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly quantityToFulfill: Scalars['Int'];
	readonly taxRate: Scalars['Float'];
	/** The main thumbnail for the ordered product. */
	readonly thumbnail?: Maybe<Image>;
	/** Price of the order line. */
	readonly totalPrice: TaxedMoney;
	/** Product name in the customer's language */
	readonly translatedProductName: Scalars['String'];
	/** Variant name in the customer's language */
	readonly translatedVariantName: Scalars['String'];
	/** Price of the single item in the order line without applied an order line discount. */
	readonly undiscountedUnitPrice: TaxedMoney;
	/** The discount applied to the single order line. */
	readonly unitDiscount: Money;
	readonly unitDiscountReason?: Maybe<Scalars['String']>;
	/** Type of the discount: fixed or percent */
	readonly unitDiscountType?: Maybe<DiscountValueTypeEnum>;
	/** Value of the discount. Can store fixed value or percent value */
	readonly unitDiscountValue: Scalars['PositiveDecimal'];
	/** Price of the single item in the order line. */
	readonly unitPrice: TaxedMoney;
	/** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly variant?: Maybe<ProductVariant>;
	readonly variantName: Scalars['String'];
};

/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

export type OrderLineCreateInput = {
	/** Number of variant items ordered. */
	readonly quantity: Scalars['Int'];
	/** Product variant ID. */
	readonly variantId: Scalars['ID'];
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDelete = {
	readonly __typename?: 'OrderLineDelete';
	readonly errors: ReadonlyArray<OrderError>;
	/** A related order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	/** An order line that was deleted. */
	readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountRemove = {
	readonly __typename?: 'OrderLineDiscountRemove';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which is related to line which has removed discount. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	/** Order line which has removed discount. */
	readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineDiscountUpdate = {
	readonly __typename?: 'OrderLineDiscountUpdate';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order which is related to the discounted line. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	/** Order line which has been discounted. */
	readonly orderLine?: Maybe<OrderLine>;
};

export type OrderLineInput = {
	/** Number of variant items ordered. */
	readonly quantity: Scalars['Int'];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLineUpdate = {
	readonly __typename?: 'OrderLineUpdate';
	readonly errors: ReadonlyArray<OrderError>;
	/** Related order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	readonly orderLine?: Maybe<OrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderLinesCreate = {
	readonly __typename?: 'OrderLinesCreate';
	readonly errors: ReadonlyArray<OrderError>;
	/** Related order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
	/** List of added order lines. */
	readonly orderLines?: Maybe<ReadonlyArray<OrderLine>>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderMarkAsPaid = {
	readonly __typename?: 'OrderMarkAsPaid';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order marked as paid. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/** An enumeration. */
export enum OrderOriginEnum {
	Checkout = 'CHECKOUT',
	Draft = 'DRAFT',
	Reissue = 'REISSUE',
}

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderRefund = {
	readonly __typename?: 'OrderRefund';
	readonly errors: ReadonlyArray<OrderError>;
	/** A refunded order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderRefundFulfillmentLineInput = {
	/** The ID of the fulfillment line to refund. */
	readonly fulfillmentLineId: Scalars['ID'];
	/** The number of items to be refunded. */
	readonly quantity: Scalars['Int'];
};

export type OrderRefundLineInput = {
	/** The ID of the order line to refund. */
	readonly orderLineId: Scalars['ID'];
	/** The number of items to be refunded. */
	readonly quantity: Scalars['Int'];
};

export type OrderRefundProductsInput = {
	/** The total amount of refund when the value is provided manually. */
	readonly amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
	/** List of fulfilled lines to refund. */
	readonly fulfillmentLines?: InputMaybe<
		ReadonlyArray<OrderRefundFulfillmentLineInput>
	>;
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	readonly includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
	/** List of unfulfilled lines to refund. */
	readonly orderLines?: InputMaybe<ReadonlyArray<OrderRefundLineInput>>;
};

export type OrderReturnFulfillmentLineInput = {
	/** The ID of the fulfillment line to return. */
	readonly fulfillmentLineId: Scalars['ID'];
	/** The number of items to be returned. */
	readonly quantity: Scalars['Int'];
	/** Determines, if the line should be added to replace order. */
	readonly replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnLineInput = {
	/** The ID of the order line to return. */
	readonly orderLineId: Scalars['ID'];
	/** The number of items to be returned. */
	readonly quantity: Scalars['Int'];
	/** Determines, if the line should be added to replace order. */
	readonly replace?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnProductsInput = {
	/** The total amount of refund when the value is provided manually. */
	readonly amountToRefund?: InputMaybe<Scalars['PositiveDecimal']>;
	/** List of fulfilled lines to return. */
	readonly fulfillmentLines?: InputMaybe<
		ReadonlyArray<OrderReturnFulfillmentLineInput>
	>;
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	readonly includeShippingCosts?: InputMaybe<Scalars['Boolean']>;
	/** List of unfulfilled lines to return. */
	readonly orderLines?: InputMaybe<ReadonlyArray<OrderReturnLineInput>>;
	/** If true, Saleor will call refund action for all lines. */
	readonly refund?: InputMaybe<Scalars['Boolean']>;
};

/** Order related settings from site settings. */
export type OrderSettings = {
	readonly __typename?: 'OrderSettings';
	readonly automaticallyConfirmAllNewOrders: Scalars['Boolean'];
	readonly automaticallyFulfillNonShippableGiftCard: Scalars['Boolean'];
};

export type OrderSettingsError = {
	readonly __typename?: 'OrderSettingsError';
	/** The error code. */
	readonly code: OrderSettingsErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum OrderSettingsErrorCode {
	Invalid = 'INVALID',
}

/**
 * Update shop order settings.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderSettingsUpdate = {
	readonly __typename?: 'OrderSettingsUpdate';
	readonly errors: ReadonlyArray<OrderSettingsError>;
	/** Order settings. */
	readonly orderSettings?: Maybe<OrderSettings>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderSettingsErrors: ReadonlyArray<OrderSettingsError>;
};

export type OrderSettingsUpdateInput = {
	/** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
	readonly automaticallyConfirmAllNewOrders?: InputMaybe<Scalars['Boolean']>;
	/** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
	readonly automaticallyFulfillNonShippableGiftCard?: InputMaybe<
		Scalars['Boolean']
	>;
};

export enum OrderSortField {
	/**
	 * Sort orders by creation date.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	CreatedAt = 'CREATED_AT',
	/**
	 * Sort orders by creation date.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	CreationDate = 'CREATION_DATE',
	/** Sort orders by customer. */
	Customer = 'CUSTOMER',
	/** Sort orders by fulfillment status. */
	FulfillmentStatus = 'FULFILLMENT_STATUS',
	/** Sort orders by last modified at. */
	LastModifiedAt = 'LAST_MODIFIED_AT',
	/** Sort orders by number. */
	Number = 'NUMBER',
	/** Sort orders by payment. */
	Payment = 'PAYMENT',
}

export type OrderSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort orders by the selected field. */
	readonly field: OrderSortField;
};

/** An enumeration. */
export enum OrderStatus {
	Canceled = 'CANCELED',
	Draft = 'DRAFT',
	Fulfilled = 'FULFILLED',
	PartiallyFulfilled = 'PARTIALLY_FULFILLED',
	PartiallyReturned = 'PARTIALLY_RETURNED',
	Returned = 'RETURNED',
	Unconfirmed = 'UNCONFIRMED',
	Unfulfilled = 'UNFULFILLED',
}

export enum OrderStatusFilter {
	Canceled = 'CANCELED',
	Fulfilled = 'FULFILLED',
	PartiallyFulfilled = 'PARTIALLY_FULFILLED',
	ReadyToCapture = 'READY_TO_CAPTURE',
	ReadyToFulfill = 'READY_TO_FULFILL',
	Unconfirmed = 'UNCONFIRMED',
	Unfulfilled = 'UNFULFILLED',
}

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdate = {
	readonly __typename?: 'OrderUpdate';
	readonly errors: ReadonlyArray<OrderError>;
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderUpdateInput = {
	/** Billing address of the customer. */
	readonly billingAddress?: InputMaybe<AddressInput>;
	/** Shipping address of the customer. */
	readonly shippingAddress?: InputMaybe<AddressInput>;
	/** Email address of the customer. */
	readonly userEmail?: InputMaybe<Scalars['String']>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderUpdateShipping = {
	readonly __typename?: 'OrderUpdateShipping';
	readonly errors: ReadonlyArray<OrderError>;
	/** Order with updated shipping method. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

export type OrderUpdateShippingInput = {
	/** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
	readonly shippingMethod?: InputMaybe<Scalars['ID']>;
};

export type OrderUpdated = Event & {
	readonly __typename?: 'OrderUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The order the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly order?: Maybe<Order>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type OrderVoid = {
	readonly __typename?: 'OrderVoid';
	readonly errors: ReadonlyArray<OrderError>;
	/** A voided order. */
	readonly order?: Maybe<Order>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly orderErrors: ReadonlyArray<OrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Page';
		/** List of attributes assigned to this product. */
		readonly attributes: ReadonlyArray<SelectedAttribute>;
		/**
		 * Content of the page.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly content?: Maybe<Scalars['JSONString']>;
		/**
		 * Content of the page.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
		 */
		readonly contentJson: Scalars['JSONString'];
		readonly created: Scalars['DateTime'];
		readonly id: Scalars['ID'];
		readonly isPublished: Scalars['Boolean'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly pageType: PageType;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
		readonly publicationDate?: Maybe<Scalars['Date']>;
		/**
		 * The page publication date.
		 *
		 * Added in Saleor 3.3.
		 */
		readonly publishedAt?: Maybe<Scalars['DateTime']>;
		readonly seoDescription?: Maybe<Scalars['String']>;
		readonly seoTitle?: Maybe<Scalars['String']>;
		readonly slug: Scalars['String'];
		readonly title: Scalars['String'];
		/** Returns translated page fields for the given language code. */
		readonly translation?: Maybe<PageTranslation>;
	};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldArgs = {
	key: Scalars['String'];
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PagePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeAssign = {
	readonly __typename?: 'PageAttributeAssign';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	/** The updated page type. */
	readonly pageType?: Maybe<PageType>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageAttributeUnassign = {
	readonly __typename?: 'PageAttributeUnassign';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	/** The updated page type. */
	readonly pageType?: Maybe<PageType>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkDelete = {
	readonly __typename?: 'PageBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageBulkPublish = {
	readonly __typename?: 'PageBulkPublish';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageCountableConnection = {
	readonly __typename?: 'PageCountableConnection';
	readonly edges: ReadonlyArray<PageCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type PageCountableEdge = {
	readonly __typename?: 'PageCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Page;
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageCreate = {
	readonly __typename?: 'PageCreate';
	readonly errors: ReadonlyArray<PageError>;
	readonly page?: Maybe<Page>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageCreateInput = {
	/** List of attributes. */
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
	/**
	 * Page content.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly content?: InputMaybe<Scalars['JSONString']>;
	/** Determines if page is visible in the storefront. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/** ID of the page type that page belongs to. */
	readonly pageType: Scalars['ID'];
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
	 */
	readonly publicationDate?: InputMaybe<Scalars['String']>;
	/**
	 * Publication date time. ISO 8601 standard.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Page internal name. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** Page title. */
	readonly title?: InputMaybe<Scalars['String']>;
};

export type PageCreated = Event & {
	readonly __typename?: 'PageCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The page the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly page?: Maybe<Page>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageDelete = {
	readonly __typename?: 'PageDelete';
	readonly errors: ReadonlyArray<PageError>;
	readonly page?: Maybe<Page>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageDeleted = Event & {
	readonly __typename?: 'PageDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The page the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly page?: Maybe<Page>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type PageError = {
	readonly __typename?: 'PageError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: PageErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum PageErrorCode {
	AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type PageFilterInput = {
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly pageTypes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
	readonly __typename?: 'PageInfo';
	/** When paginating forwards, the cursor to continue. */
	readonly endCursor?: Maybe<Scalars['String']>;
	/** When paginating forwards, are there more items? */
	readonly hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	readonly hasPreviousPage: Scalars['Boolean'];
	/** When paginating backwards, the cursor to continue. */
	readonly startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
	/** List of attributes. */
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
	/**
	 * Page content.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly content?: InputMaybe<Scalars['JSONString']>;
	/** Determines if page is visible in the storefront. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
	 */
	readonly publicationDate?: InputMaybe<Scalars['String']>;
	/**
	 * Publication date time. ISO 8601 standard.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Page internal name. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** Page title. */
	readonly title?: InputMaybe<Scalars['String']>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageReorderAttributeValues = {
	readonly __typename?: 'PageReorderAttributeValues';
	readonly errors: ReadonlyArray<PageError>;
	/** Page from which attribute values are reordered. */
	readonly page?: Maybe<Page>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export enum PageSortField {
	/** Sort pages by creation date. */
	CreationDate = 'CREATION_DATE',
	/**
	 * Sort pages by publication date.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	PublicationDate = 'PUBLICATION_DATE',
	/**
	 * Sort pages by publication date.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0.
	 */
	PublishedAt = 'PUBLISHED_AT',
	/** Sort pages by slug. */
	Slug = 'SLUG',
	/** Sort pages by title. */
	Title = 'TITLE',
	/** Sort pages by visibility. */
	Visibility = 'VISIBILITY',
}

export type PageSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort pages by the selected field. */
	readonly field: PageSortField;
};

export type PageTranslatableContent = Node & {
	readonly __typename?: 'PageTranslatableContent';
	/** List of page content attribute values that can be translated. */
	readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
	/**
	 * Content of the page.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly content?: Maybe<Scalars['JSONString']>;
	/**
	 * Content of the page.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
	 */
	readonly contentJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/**
	 * A static page that can be manually added by a shop operator through the dashboard.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly page?: Maybe<Page>;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
	readonly title: Scalars['String'];
	/** Returns translated page fields for the given language code. */
	readonly translation?: Maybe<PageTranslation>;
};

export type PageTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type PageTranslate = {
	readonly __typename?: 'PageTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly page?: Maybe<PageTranslatableContent>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type PageTranslation = Node & {
	readonly __typename?: 'PageTranslation';
	/**
	 * Translated content of the page.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly content?: Maybe<Scalars['JSONString']>;
	/**
	 * Translated description of the page.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
	 */
	readonly contentJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
	readonly title?: Maybe<Scalars['String']>;
};

export type PageTranslationInput = {
	/**
	 * Translated page content.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly content?: InputMaybe<Scalars['JSONString']>;
	readonly seoDescription?: InputMaybe<Scalars['String']>;
	readonly seoTitle?: InputMaybe<Scalars['String']>;
	readonly title?: InputMaybe<Scalars['String']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'PageType';
		/** Page attributes of that page type. */
		readonly attributes?: Maybe<ReadonlyArray<Attribute>>;
		/**
		 * Attributes that can be assigned to the page type.
		 *
		 * Requires one of the following permissions: MANAGE_PAGES.
		 */
		readonly availableAttributes?: Maybe<AttributeCountableConnection>;
		/**
		 * Whether page type has pages assigned.
		 *
		 * Requires one of the following permissions: MANAGE_PAGES.
		 */
		readonly hasPages?: Maybe<Scalars['Boolean']>;
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly slug: Scalars['String'];
	};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AttributeFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeBulkDelete = {
	readonly __typename?: 'PageTypeBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageTypeCountableConnection = {
	readonly __typename?: 'PageTypeCountableConnection';
	readonly edges: ReadonlyArray<PageTypeCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type PageTypeCountableEdge = {
	readonly __typename?: 'PageTypeCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: PageType;
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeCreate = {
	readonly __typename?: 'PageTypeCreate';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	readonly pageType?: Maybe<PageType>;
};

export type PageTypeCreateInput = {
	/** List of attribute IDs to be assigned to the page type. */
	readonly addAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Name of the page type. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Page type slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeDelete = {
	readonly __typename?: 'PageTypeDelete';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	readonly pageType?: Maybe<PageType>;
};

export type PageTypeFilterInput = {
	readonly search?: InputMaybe<Scalars['String']>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeReorderAttributes = {
	readonly __typename?: 'PageTypeReorderAttributes';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	/** Page type from which attributes are reordered. */
	readonly pageType?: Maybe<PageType>;
};

export enum PageTypeSortField {
	/** Sort page types by name. */
	Name = 'NAME',
	/** Sort page types by slug. */
	Slug = 'SLUG',
}

export type PageTypeSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort page types by the selected field. */
	readonly field: PageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type PageTypeUpdate = {
	readonly __typename?: 'PageTypeUpdate';
	readonly errors: ReadonlyArray<PageError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
	readonly pageType?: Maybe<PageType>;
};

export type PageTypeUpdateInput = {
	/** List of attribute IDs to be assigned to the page type. */
	readonly addAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Name of the page type. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of attribute IDs to be assigned to the page type. */
	readonly removeAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Page type slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type PageUpdate = {
	readonly __typename?: 'PageUpdate';
	readonly errors: ReadonlyArray<PageError>;
	readonly page?: Maybe<Page>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pageErrors: ReadonlyArray<PageError>;
};

export type PageUpdated = Event & {
	readonly __typename?: 'PageUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The page the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly page?: Maybe<Page>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type PasswordChange = {
	readonly __typename?: 'PasswordChange';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance with a new password. */
	readonly user?: Maybe<User>;
};

/** Represents a payment of a given type. */
export type Payment = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Payment';
		/**
		 * List of actions that can be performed in the current state of a payment.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly actions: ReadonlyArray<OrderAction>;
		/**
		 * Maximum amount of money that can be captured.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly availableCaptureAmount?: Maybe<Money>;
		/**
		 * Maximum amount of money that can be refunded.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly availableRefundAmount?: Maybe<Money>;
		/** Total amount captured for this payment. */
		readonly capturedAmount?: Maybe<Money>;
		/** Internal payment status. */
		readonly chargeStatus: PaymentChargeStatusEnum;
		readonly checkout?: Maybe<Checkout>;
		readonly created: Scalars['DateTime'];
		/** The details of the card used for this payment. */
		readonly creditCard?: Maybe<CreditCard>;
		/**
		 * IP address of the user who created the payment.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly customerIpAddress?: Maybe<Scalars['String']>;
		readonly gateway: Scalars['String'];
		readonly id: Scalars['ID'];
		readonly isActive: Scalars['Boolean'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly modified: Scalars['DateTime'];
		readonly order?: Maybe<Order>;
		readonly paymentMethodType: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly token: Scalars['String'];
		/** Total amount of the payment. */
		readonly total?: Maybe<Money>;
		/**
		 * List of all transactions within this payment.
		 *
		 * Requires one of the following permissions: MANAGE_ORDERS.
		 */
		readonly transactions?: Maybe<ReadonlyArray<Transaction>>;
	};

/** Represents a payment of a given type. */
export type PaymentMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a payment of a given type. */
export type PaymentMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a payment of a given type. */
export type PaymentPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentCapture = {
	readonly __typename?: 'PaymentCapture';
	readonly errors: ReadonlyArray<PaymentError>;
	/** Updated payment. */
	readonly payment?: Maybe<Payment>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** An enumeration. */
export enum PaymentChargeStatusEnum {
	Cancelled = 'CANCELLED',
	FullyCharged = 'FULLY_CHARGED',
	FullyRefunded = 'FULLY_REFUNDED',
	NotCharged = 'NOT_CHARGED',
	PartiallyCharged = 'PARTIALLY_CHARGED',
	PartiallyRefunded = 'PARTIALLY_REFUNDED',
	Pending = 'PENDING',
	Refused = 'REFUSED',
}

/** Check payment balance. */
export type PaymentCheckBalance = {
	readonly __typename?: 'PaymentCheckBalance';
	/** Response from the gateway. */
	readonly data?: Maybe<Scalars['JSONString']>;
	readonly errors: ReadonlyArray<PaymentError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

export type PaymentCheckBalanceInput = {
	/** Information about card. */
	readonly card: CardInput;
	/** Slug of a channel for which the data should be returned. */
	readonly channel: Scalars['String'];
	/** An ID of a payment gateway to check. */
	readonly gatewayId: Scalars['String'];
	/** Payment method name. */
	readonly method: Scalars['String'];
};

export type PaymentCountableConnection = {
	readonly __typename?: 'PaymentCountableConnection';
	readonly edges: ReadonlyArray<PaymentCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type PaymentCountableEdge = {
	readonly __typename?: 'PaymentCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Payment;
};

export type PaymentError = {
	readonly __typename?: 'PaymentError';
	/** The error code. */
	readonly code: PaymentErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of varint IDs which causes the error. */
	readonly variants?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum PaymentErrorCode {
	BalanceCheckError = 'BALANCE_CHECK_ERROR',
	BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
	ChannelInactive = 'CHANNEL_INACTIVE',
	CheckoutEmailNotSet = 'CHECKOUT_EMAIL_NOT_SET',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
	NotFound = 'NOT_FOUND',
	NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
	NoCheckoutLines = 'NO_CHECKOUT_LINES',
	PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
	PaymentError = 'PAYMENT_ERROR',
	Required = 'REQUIRED',
	ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
	ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
	UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
	Unique = 'UNIQUE',
}

export type PaymentFilterInput = {
	readonly checkouts?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
	readonly __typename?: 'PaymentGateway';
	/** Payment gateway client configuration. */
	readonly config: ReadonlyArray<GatewayConfigLine>;
	/** Payment gateway supported currencies. */
	readonly currencies: ReadonlyArray<Scalars['String']>;
	/** Payment gateway ID. */
	readonly id: Scalars['ID'];
	/** Payment gateway name. */
	readonly name: Scalars['String'];
};

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
	readonly __typename?: 'PaymentInitialize';
	readonly errors: ReadonlyArray<PaymentError>;
	readonly initializedPayment?: Maybe<PaymentInitialized>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
	readonly __typename?: 'PaymentInitialized';
	/** Initialized data by gateway. */
	readonly data?: Maybe<Scalars['JSONString']>;
	/** ID of a payment gateway. */
	readonly gateway: Scalars['String'];
	/** Payment gateway name. */
	readonly name: Scalars['String'];
};

export type PaymentInput = {
	/** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
	readonly amount?: InputMaybe<Scalars['PositiveDecimal']>;
	/** A gateway to use with that payment. */
	readonly gateway: Scalars['String'];
	/**
	 * User public metadata.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
	readonly returnUrl?: InputMaybe<Scalars['String']>;
	/**
	 * Payment store type.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly storePaymentMethod?: InputMaybe<StorePaymentMethodEnum>;
	/** Client-side generated payment token, representing customer's billing data in a secure manner. */
	readonly token?: InputMaybe<Scalars['String']>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentRefund = {
	readonly __typename?: 'PaymentRefund';
	readonly errors: ReadonlyArray<PaymentError>;
	/** Updated payment. */
	readonly payment?: Maybe<Payment>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
	readonly __typename?: 'PaymentSource';
	/** Stored credit card details if available. */
	readonly creditCardInfo?: Maybe<CreditCard>;
	/** Payment gateway name. */
	readonly gateway: Scalars['String'];
	/**
	 * List of public metadata items.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Can be accessed without permissions.
	 */
	readonly metadata: ReadonlyArray<MetadataItem>;
	/** ID of stored payment method. */
	readonly paymentMethodId?: Maybe<Scalars['String']>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type PaymentVoid = {
	readonly __typename?: 'PaymentVoid';
	readonly errors: ReadonlyArray<PaymentError>;
	/** Updated payment. */
	readonly payment?: Maybe<Payment>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly paymentErrors: ReadonlyArray<PaymentError>;
};

/** Represents a permission object in a friendly form. */
export type Permission = {
	readonly __typename?: 'Permission';
	/** Internal code for permission. */
	readonly code: PermissionEnum;
	/** Describe action(s) allowed to do by permission. */
	readonly name: Scalars['String'];
};

/** An enumeration. */
export enum PermissionEnum {
	HandleCheckouts = 'HANDLE_CHECKOUTS',
	HandlePayments = 'HANDLE_PAYMENTS',
	ImpersonateUser = 'IMPERSONATE_USER',
	ManageApps = 'MANAGE_APPS',
	ManageChannels = 'MANAGE_CHANNELS',
	ManageCheckouts = 'MANAGE_CHECKOUTS',
	ManageDiscounts = 'MANAGE_DISCOUNTS',
	ManageGiftCard = 'MANAGE_GIFT_CARD',
	ManageMenus = 'MANAGE_MENUS',
	ManageObservability = 'MANAGE_OBSERVABILITY',
	ManageOrders = 'MANAGE_ORDERS',
	ManagePages = 'MANAGE_PAGES',
	ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
	ManagePlugins = 'MANAGE_PLUGINS',
	ManageProducts = 'MANAGE_PRODUCTS',
	ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
	ManageSettings = 'MANAGE_SETTINGS',
	ManageShipping = 'MANAGE_SHIPPING',
	ManageStaff = 'MANAGE_STAFF',
	ManageTranslations = 'MANAGE_TRANSLATIONS',
	ManageUsers = 'MANAGE_USERS',
}

/**
 * Create new permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupCreate = {
	readonly __typename?: 'PermissionGroupCreate';
	readonly errors: ReadonlyArray<PermissionGroupError>;
	readonly group?: Maybe<Group>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
	/** List of permission code names to assign to this group. */
	readonly addPermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
	/** List of users to assign to this group. */
	readonly addUsers?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Group name. */
	readonly name: Scalars['String'];
};

/**
 * Delete permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupDelete = {
	readonly __typename?: 'PermissionGroupDelete';
	readonly errors: ReadonlyArray<PermissionGroupError>;
	readonly group?: Maybe<Group>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

export type PermissionGroupError = {
	readonly __typename?: 'PermissionGroupError';
	/** The error code. */
	readonly code: PermissionGroupErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of permissions which causes the error. */
	readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
	/** List of user IDs which causes the error. */
	readonly users?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum PermissionGroupErrorCode {
	AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
	CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
	OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
	OutOfScopeUser = 'OUT_OF_SCOPE_USER',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type PermissionGroupFilterInput = {
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export enum PermissionGroupSortField {
	/** Sort permission group accounts by name. */
	Name = 'NAME',
}

export type PermissionGroupSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort permission group by the selected field. */
	readonly field: PermissionGroupSortField;
};

/**
 * Update permission group.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type PermissionGroupUpdate = {
	readonly __typename?: 'PermissionGroupUpdate';
	readonly errors: ReadonlyArray<PermissionGroupError>;
	readonly group?: Maybe<Group>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly permissionGroupErrors: ReadonlyArray<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
	/** List of permission code names to assign to this group. */
	readonly addPermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
	/** List of users to assign to this group. */
	readonly addUsers?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Group name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of permission code names to unassign from this group. */
	readonly removePermissions?: InputMaybe<ReadonlyArray<PermissionEnum>>;
	/** List of users to unassign from this group. */
	readonly removeUsers?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/** Plugin. */
export type Plugin = {
	readonly __typename?: 'Plugin';
	/** Channel-specific plugin configuration. */
	readonly channelConfigurations: ReadonlyArray<PluginConfiguration>;
	/** Description of the plugin. */
	readonly description: Scalars['String'];
	/** Global configuration of the plugin (not channel-specific). */
	readonly globalConfiguration?: Maybe<PluginConfiguration>;
	/** Identifier of the plugin. */
	readonly id: Scalars['ID'];
	/** Name of the plugin. */
	readonly name: Scalars['String'];
};

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
	readonly __typename?: 'PluginConfiguration';
	/** Determines if plugin is active or not. */
	readonly active: Scalars['Boolean'];
	/** The channel to which the plugin configuration is assigned to. */
	readonly channel?: Maybe<Channel>;
	/** Configuration of the plugin. */
	readonly configuration?: Maybe<ReadonlyArray<ConfigurationItem>>;
};

export enum PluginConfigurationType {
	Global = 'GLOBAL',
	PerChannel = 'PER_CHANNEL',
}

export type PluginCountableConnection = {
	readonly __typename?: 'PluginCountableConnection';
	readonly edges: ReadonlyArray<PluginCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type PluginCountableEdge = {
	readonly __typename?: 'PluginCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Plugin;
};

export type PluginError = {
	readonly __typename?: 'PluginError';
	/** The error code. */
	readonly code: PluginErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum PluginErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type PluginFilterInput = {
	readonly search?: InputMaybe<Scalars['String']>;
	readonly statusInChannels?: InputMaybe<PluginStatusInChannelsInput>;
	readonly type?: InputMaybe<PluginConfigurationType>;
};

export enum PluginSortField {
	IsActive = 'IS_ACTIVE',
	Name = 'NAME',
}

export type PluginSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort plugins by the selected field. */
	readonly field: PluginSortField;
};

export type PluginStatusInChannelsInput = {
	readonly active: Scalars['Boolean'];
	readonly channels: ReadonlyArray<Scalars['ID']>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type PluginUpdate = {
	readonly __typename?: 'PluginUpdate';
	readonly errors: ReadonlyArray<PluginError>;
	readonly plugin?: Maybe<Plugin>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly pluginsErrors: ReadonlyArray<PluginError>;
};

export type PluginUpdateInput = {
	/** Indicates whether the plugin should be enabled. */
	readonly active?: InputMaybe<Scalars['Boolean']>;
	/** Configuration of the plugin. */
	readonly configuration?: InputMaybe<ReadonlyArray<ConfigurationItemInput>>;
};

/** An enumeration. */
export enum PostalCodeRuleInclusionTypeEnum {
	Exclude = 'EXCLUDE',
	Include = 'INCLUDE',
}

/** Represents preorder settings for product variant. */
export type PreorderData = {
	readonly __typename?: 'PreorderData';
	/** Preorder end date. */
	readonly endDate?: Maybe<Scalars['DateTime']>;
	/**
	 * Total number of sold product variant during preorder.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly globalSoldUnits: Scalars['Int'];
	/**
	 * The global preorder threshold for product variant.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly globalThreshold?: Maybe<Scalars['Int']>;
};

export type PreorderSettingsInput = {
	/** The end date for preorder. */
	readonly endDate?: InputMaybe<Scalars['DateTime']>;
	/** The global threshold for preorder variant. */
	readonly globalThreshold?: InputMaybe<Scalars['Int']>;
};

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
	readonly __typename?: 'PreorderThreshold';
	/** Preorder threshold for product variant in this channel. */
	readonly quantity?: Maybe<Scalars['Int']>;
	/** Number of sold product variant in this channel. */
	readonly soldUnits: Scalars['Int'];
};

export type PriceInput = {
	/** Amount of money. */
	readonly amount: Scalars['PositiveDecimal'];
	/** Currency code. */
	readonly currency: Scalars['String'];
};

export type PriceRangeInput = {
	/** Price greater than or equal to. */
	readonly gte?: InputMaybe<Scalars['Float']>;
	/** Price less than or equal to. */
	readonly lte?: InputMaybe<Scalars['Float']>;
};

/** Represents an individual item for sale in the storefront. */
export type Product = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Product';
		/** List of attributes assigned to this product. */
		readonly attributes: ReadonlyArray<SelectedAttribute>;
		/**
		 * Date when product is available for purchase.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
		 */
		readonly availableForPurchase?: Maybe<Scalars['Date']>;
		/** Date when product is available for purchase. */
		readonly availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
		readonly category?: Maybe<Category>;
		/** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
		readonly channel?: Maybe<Scalars['String']>;
		/**
		 * List of availability in channels for the product.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly channelListings?: Maybe<ReadonlyArray<ProductChannelListing>>;
		readonly chargeTaxes: Scalars['Boolean'];
		/** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
		readonly collections?: Maybe<ReadonlyArray<Collection>>;
		readonly created: Scalars['DateTime'];
		readonly defaultVariant?: Maybe<ProductVariant>;
		/**
		 * Description of the product.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly description?: Maybe<Scalars['JSONString']>;
		/**
		 * Description of the product.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
		 */
		readonly descriptionJson?: Maybe<Scalars['JSONString']>;
		readonly id: Scalars['ID'];
		/**
		 * Get a single product image by ID.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
		 */
		readonly imageById?: Maybe<ProductImage>;
		/**
		 * List of images for the product.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
		 */
		readonly images?: Maybe<ReadonlyArray<ProductImage>>;
		/** Whether the product is in stock and visible or not. */
		readonly isAvailable?: Maybe<Scalars['Boolean']>;
		/** Whether the product is available for purchase. */
		readonly isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
		/** List of media for the product. */
		readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
		/** Get a single product media by ID. */
		readonly mediaById?: Maybe<ProductMedia>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
		readonly pricing?: Maybe<ProductPricingInfo>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly productType: ProductType;
		readonly rating?: Maybe<Scalars['Float']>;
		readonly seoDescription?: Maybe<Scalars['String']>;
		readonly seoTitle?: Maybe<Scalars['String']>;
		readonly slug: Scalars['String'];
		/** A type of tax. Assigned by enabled tax gateway */
		readonly taxType?: Maybe<TaxType>;
		/** The main thumbnail for a product. */
		readonly thumbnail?: Maybe<Image>;
		/** Returns translated product fields for the given language code. */
		readonly translation?: Maybe<ProductTranslation>;
		readonly updatedAt: Scalars['DateTime'];
		/** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
		readonly variants?: Maybe<ReadonlyArray<ProductVariant>>;
		readonly weight?: Maybe<Weight>;
	};

/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
	address?: InputMaybe<AddressInput>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an individual item for sale in the storefront. */
export type ProductMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
	address?: InputMaybe<AddressInput>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents an individual item for sale in the storefront. */
export type ProductPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssign = {
	readonly __typename?: 'ProductAttributeAssign';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	/** The updated product type. */
	readonly productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignInput = {
	/** The ID of the attribute to assign. */
	readonly id: Scalars['ID'];
	/** The attribute type to be assigned as. */
	readonly type: ProductAttributeType;
	/**
	 * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
	 *
	 * Added in Saleor 3.1.
	 */
	readonly variantSelection?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeAssignmentUpdate = {
	readonly __typename?: 'ProductAttributeAssignmentUpdate';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	/** The updated product type. */
	readonly productType?: Maybe<ProductType>;
};

export type ProductAttributeAssignmentUpdateInput = {
	/** The ID of the attribute to assign. */
	readonly id: Scalars['ID'];
	/**
	 * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
	 *
	 * Added in Saleor 3.1.
	 */
	readonly variantSelection: Scalars['Boolean'];
};

export enum ProductAttributeType {
	Product = 'PRODUCT',
	Variant = 'VARIANT',
}

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductAttributeUnassign = {
	readonly __typename?: 'ProductAttributeUnassign';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	/** The updated product type. */
	readonly productType?: Maybe<ProductType>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductBulkDelete = {
	readonly __typename?: 'ProductBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
	readonly __typename?: 'ProductChannelListing';
	/** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
	readonly availableForPurchase?: Maybe<Scalars['Date']>;
	/**
	 * The product available for purchase date time.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly availableForPurchaseAt?: Maybe<Scalars['DateTime']>;
	readonly channel: Channel;
	/** The price of the cheapest variant (including discounts). */
	readonly discountedPrice?: Maybe<Money>;
	readonly id: Scalars['ID'];
	/** Whether the product is available for purchase. */
	readonly isAvailableForPurchase?: Maybe<Scalars['Boolean']>;
	readonly isPublished: Scalars['Boolean'];
	/**
	 * Range of margin percentage value.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly margin?: Maybe<Margin>;
	/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
	readonly pricing?: Maybe<ProductPricingInfo>;
	/** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
	readonly publicationDate?: Maybe<Scalars['Date']>;
	/**
	 * The product publication date time.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: Maybe<Scalars['DateTime']>;
	/**
	 * Purchase cost of product.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly purchaseCost?: Maybe<MoneyRange>;
	readonly visibleInListings: Scalars['Boolean'];
};

/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
	address?: InputMaybe<AddressInput>;
};

export type ProductChannelListingAddInput = {
	/** List of variants to which the channel should be assigned. */
	readonly addVariants?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly availableForPurchaseAt?: InputMaybe<Scalars['DateTime']>;
	/**
	 * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
	 */
	readonly availableForPurchaseDate?: InputMaybe<Scalars['Date']>;
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** Determine if product should be available for purchase. */
	readonly isAvailableForPurchase?: InputMaybe<Scalars['Boolean']>;
	/** Determines if object is visible to customers. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
	 */
	readonly publicationDate?: InputMaybe<Scalars['Date']>;
	/**
	 * Publication date time. ISO 8601 standard.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** List of variants from which the channel should be unassigned. */
	readonly removeVariants?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Determines if product is visible in product listings (doesn't apply to product collections). */
	readonly visibleInListings?: InputMaybe<Scalars['Boolean']>;
};

export type ProductChannelListingError = {
	readonly __typename?: 'ProductChannelListingError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of channels IDs which causes the error. */
	readonly channels?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ProductErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** List of variants IDs which causes the error. */
	readonly variants?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductChannelListingUpdate = {
	readonly __typename?: 'ProductChannelListingUpdate';
	readonly errors: ReadonlyArray<ProductChannelListingError>;
	/** An updated product instance. */
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productChannelListingErrors: ReadonlyArray<ProductChannelListingError>;
};

export type ProductChannelListingUpdateInput = {
	/** List of channels from which the product should be unassigned. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of channels to which the product should be assigned or updated. */
	readonly updateChannels?: InputMaybe<
		ReadonlyArray<ProductChannelListingAddInput>
	>;
};

export type ProductCountableConnection = {
	readonly __typename?: 'ProductCountableConnection';
	readonly edges: ReadonlyArray<ProductCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ProductCountableEdge = {
	readonly __typename?: 'ProductCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Product;
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductCreate = {
	readonly __typename?: 'ProductCreate';
	readonly errors: ReadonlyArray<ProductError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductCreateInput = {
	/** List of attributes. */
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
	/** ID of the product's category. */
	readonly category?: InputMaybe<Scalars['ID']>;
	/** Determine if taxes are being charged for the product. */
	readonly chargeTaxes?: InputMaybe<Scalars['Boolean']>;
	/** List of IDs of collections that the product belongs to. */
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Product description.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Product name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** ID of the type that product belongs to. */
	readonly productType: Scalars['ID'];
	/** Defines the product rating value. */
	readonly rating?: InputMaybe<Scalars['Float']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Product slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** Tax rate for enabled tax gateway. */
	readonly taxCode?: InputMaybe<Scalars['String']>;
	/** Weight of the Product. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductCreated = Event & {
	readonly __typename?: 'ProductCreated';
	/**
	 * The category of the product.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly product?: Maybe<Product>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductCreatedProductArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductDelete = {
	readonly __typename?: 'ProductDelete';
	readonly errors: ReadonlyArray<ProductError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductDeleted = Event & {
	readonly __typename?: 'ProductDeleted';
	/**
	 * The category of the product.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly product?: Maybe<Product>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductDeletedProductArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ProductError = {
	readonly __typename?: 'ProductError';
	/** List of attributes IDs which causes the error. */
	readonly attributes?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ProductErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of attribute values IDs which causes the error. */
	readonly values?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum ProductErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
	AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
	AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
	CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	MediaAlreadyAssigned = 'MEDIA_ALREADY_ASSIGNED',
	NotFound = 'NOT_FOUND',
	NotProductsImage = 'NOT_PRODUCTS_IMAGE',
	NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
	PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED',
	ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
	ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
	UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
	VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT',
}

export enum ProductFieldEnum {
	Category = 'CATEGORY',
	ChargeTaxes = 'CHARGE_TAXES',
	Collections = 'COLLECTIONS',
	Description = 'DESCRIPTION',
	Name = 'NAME',
	ProductMedia = 'PRODUCT_MEDIA',
	ProductType = 'PRODUCT_TYPE',
	ProductWeight = 'PRODUCT_WEIGHT',
	VariantId = 'VARIANT_ID',
	VariantMedia = 'VARIANT_MEDIA',
	VariantSku = 'VARIANT_SKU',
	VariantWeight = 'VARIANT_WEIGHT',
}

export type ProductFilterInput = {
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeInput>>;
	readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Specifies the channel by which the data should be filtered.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly giftCard?: InputMaybe<Scalars['Boolean']>;
	readonly hasCategory?: InputMaybe<Scalars['Boolean']>;
	readonly hasPreorderedVariants?: InputMaybe<Scalars['Boolean']>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly minimalPrice?: InputMaybe<PriceRangeInput>;
	readonly price?: InputMaybe<PriceRangeInput>;
	readonly productTypes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly stockAvailability?: InputMaybe<StockAvailability>;
	readonly stocks?: InputMaybe<ProductStockFilterInput>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

/** Represents a product image. */
export type ProductImage = {
	readonly __typename?: 'ProductImage';
	/** The alt text of the image. */
	readonly alt?: Maybe<Scalars['String']>;
	/** The ID of the image. */
	readonly id: Scalars['ID'];
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	readonly sortOrder?: Maybe<Scalars['Int']>;
	/** The URL of the image. */
	readonly url: Scalars['String'];
};

/** Represents a product image. */
export type ProductImageUrlArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

export type ProductInput = {
	/** List of attributes. */
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
	/** ID of the product's category. */
	readonly category?: InputMaybe<Scalars['ID']>;
	/** Determine if taxes are being charged for the product. */
	readonly chargeTaxes?: InputMaybe<Scalars['Boolean']>;
	/** List of IDs of collections that the product belongs to. */
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/**
	 * Product description.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Product name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Defines the product rating value. */
	readonly rating?: InputMaybe<Scalars['Float']>;
	/** Search engine optimization fields. */
	readonly seo?: InputMaybe<SeoInput>;
	/** Product slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** Tax rate for enabled tax gateway. */
	readonly taxCode?: InputMaybe<Scalars['String']>;
	/** Weight of the Product. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

/** Represents a product media. */
export type ProductMedia = Node & {
	readonly __typename?: 'ProductMedia';
	readonly alt: Scalars['String'];
	readonly id: Scalars['ID'];
	readonly oembedData: Scalars['JSONString'];
	readonly sortOrder?: Maybe<Scalars['Int']>;
	readonly type: ProductMediaType;
	/** The URL of the media. */
	readonly url: Scalars['String'];
};

/** Represents a product media. */
export type ProductMediaUrlArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaBulkDelete = {
	readonly __typename?: 'ProductMediaBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaCreate = {
	readonly __typename?: 'ProductMediaCreate';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ProductMedia>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductMediaCreateInput = {
	/** Alt text for a product media. */
	readonly alt?: InputMaybe<Scalars['String']>;
	/** Represents an image file in a multipart request. */
	readonly image?: InputMaybe<Scalars['Upload']>;
	/** Represents an URL to an external media. */
	readonly mediaUrl?: InputMaybe<Scalars['String']>;
	/** ID of an product. */
	readonly product: Scalars['ID'];
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaDelete = {
	readonly __typename?: 'ProductMediaDelete';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ProductMedia>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaReorder = {
	readonly __typename?: 'ProductMediaReorder';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/** An enumeration. */
export enum ProductMediaType {
	Image = 'IMAGE',
	Video = 'VIDEO',
}

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductMediaUpdate = {
	readonly __typename?: 'ProductMediaUpdate';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ProductMedia>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductMediaUpdateInput = {
	/** Alt text for a product media. */
	readonly alt?: InputMaybe<Scalars['String']>;
};

export type ProductOrder = {
	/**
	 * Sort product by the selected attribute's values.
	 * Note: this doesn't take translations into account yet.
	 */
	readonly attributeId?: InputMaybe<Scalars['ID']>;
	/**
	 * Specifies the channel in which to sort the data.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort products by the selected field. */
	readonly field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
	/**
	 * Sort products by collection. Note: This option is available only for the `Collection.products` query.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Collection = 'COLLECTION',
	/** Sort products by update date. */
	Date = 'DATE',
	/** Sort products by update date. */
	LastModified = 'LAST_MODIFIED',
	/** Sort products by update date. */
	LastModifiedAt = 'LAST_MODIFIED_AT',
	/**
	 * Sort products by a minimal price of a product's variant.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	MinimalPrice = 'MINIMAL_PRICE',
	/** Sort products by name. */
	Name = 'NAME',
	/**
	 * Sort products by price.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Price = 'PRICE',
	/**
	 * Sort products by publication date.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	PublicationDate = 'PUBLICATION_DATE',
	/**
	 * Sort products by publication status.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Published = 'PUBLISHED',
	/**
	 * Sort products by publication date.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	PublishedAt = 'PUBLISHED_AT',
	/** Sort products by rank. Note: This option is available only with the `search` filter. */
	Rank = 'RANK',
	/** Sort products by rating. */
	Rating = 'RATING',
	/** Sort products by type. */
	Type = 'TYPE',
}

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
	readonly __typename?: 'ProductPricingInfo';
	/** The discount amount if in sale (null otherwise). */
	readonly discount?: Maybe<TaxedMoney>;
	/** The discount amount in the local currency. */
	readonly discountLocalCurrency?: Maybe<TaxedMoney>;
	/** Whether it is in sale or not. */
	readonly onSale?: Maybe<Scalars['Boolean']>;
	/** The discounted price range of the product variants. */
	readonly priceRange?: Maybe<TaxedMoneyRange>;
	/** The discounted price range of the product variants in the local currency. */
	readonly priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
	/** The undiscounted price range of the product variants. */
	readonly priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductReorderAttributeValues = {
	readonly __typename?: 'ProductReorderAttributeValues';
	readonly errors: ReadonlyArray<ProductError>;
	/** Product from which attribute values are reordered. */
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductStockFilterInput = {
	readonly quantity?: InputMaybe<IntRangeInput>;
	readonly warehouseIds?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export type ProductTranslatableContent = Node & {
	readonly __typename?: 'ProductTranslatableContent';
	/** List of product attribute values that can be translated. */
	readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
	/**
	 * Description of the product.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Description of the product.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/**
	 * Represents an individual item for sale in the storefront.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly product?: Maybe<Product>;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
	/** Returns translated product fields for the given language code. */
	readonly translation?: Maybe<ProductTranslation>;
};

export type ProductTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductTranslate = {
	readonly __typename?: 'ProductTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ProductTranslation = Node & {
	readonly __typename?: 'ProductTranslation';
	/**
	 * Translated description of the product.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	/**
	 * Translated description of the product.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
	 */
	readonly descriptionJson?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
	readonly seoDescription?: Maybe<Scalars['String']>;
	readonly seoTitle?: Maybe<Scalars['String']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'ProductType';
		/**
		 * Variant attributes of that product type with attached variant selection.
		 *
		 * Added in Saleor 3.1.
		 */
		readonly assignedVariantAttributes?: Maybe<
			ReadonlyArray<AssignedVariantAttribute>
		>;
		/**
		 * List of attributes which can be assigned to this product type.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly availableAttributes?: Maybe<AttributeCountableConnection>;
		readonly hasVariants: Scalars['Boolean'];
		readonly id: Scalars['ID'];
		readonly isDigital: Scalars['Boolean'];
		readonly isShippingRequired: Scalars['Boolean'];
		/** The product type kind. */
		readonly kind: ProductTypeKindEnum;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Product attributes of that product type. */
		readonly productAttributes?: Maybe<ReadonlyArray<Attribute>>;
		/**
		 * List of products of this type.
		 * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
		 */
		readonly products?: Maybe<ProductCountableConnection>;
		readonly slug: Scalars['String'];
		/** A type of tax. Assigned by enabled tax gateway */
		readonly taxType?: Maybe<TaxType>;
		/**
		 * Variant attributes of that product type.
		 * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
		 */
		readonly variantAttributes?: Maybe<ReadonlyArray<Attribute>>;
		readonly weight?: Maybe<Weight>;
	};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
	variantSelection?: InputMaybe<VariantAttributeScope>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AttributeFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
	variantSelection?: InputMaybe<VariantAttributeScope>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeBulkDelete = {
	readonly __typename?: 'ProductTypeBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export enum ProductTypeConfigurable {
	Configurable = 'CONFIGURABLE',
	Simple = 'SIMPLE',
}

export type ProductTypeCountableConnection = {
	readonly __typename?: 'ProductTypeCountableConnection';
	readonly edges: ReadonlyArray<ProductTypeCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ProductTypeCountableEdge = {
	readonly __typename?: 'ProductTypeCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: ProductType;
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeCreate = {
	readonly __typename?: 'ProductTypeCreate';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productType?: Maybe<ProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeDelete = {
	readonly __typename?: 'ProductTypeDelete';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
	Digital = 'DIGITAL',
	Shippable = 'SHIPPABLE',
}

export type ProductTypeFilterInput = {
	readonly configurable?: InputMaybe<ProductTypeConfigurable>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly kind?: InputMaybe<ProductTypeKindEnum>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly productType?: InputMaybe<ProductTypeEnum>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type ProductTypeInput = {
	/** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
	readonly hasVariants?: InputMaybe<Scalars['Boolean']>;
	/** Determines if products are digital. */
	readonly isDigital?: InputMaybe<Scalars['Boolean']>;
	/** Determines if shipping is required for products of this variant. */
	readonly isShippingRequired?: InputMaybe<Scalars['Boolean']>;
	/** The product type kind. */
	readonly kind?: InputMaybe<ProductTypeKindEnum>;
	/** Name of the product type. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of attributes shared among all product variants. */
	readonly productAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Product type slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
	/** Tax rate for enabled tax gateway. */
	readonly taxCode?: InputMaybe<Scalars['String']>;
	/** List of attributes used to distinguish between different variants of a product. */
	readonly variantAttributes?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Weight of the ProductType items. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

/** An enumeration. */
export enum ProductTypeKindEnum {
	GiftCard = 'GIFT_CARD',
	Normal = 'NORMAL',
}

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeReorderAttributes = {
	readonly __typename?: 'ProductTypeReorderAttributes';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	/** Product type from which attributes are reordered. */
	readonly productType?: Maybe<ProductType>;
};

export enum ProductTypeSortField {
	/** Sort products by type. */
	Digital = 'DIGITAL',
	/** Sort products by name. */
	Name = 'NAME',
	/** Sort products by shipping. */
	ShippingRequired = 'SHIPPING_REQUIRED',
}

export type ProductTypeSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort product types by the selected field. */
	readonly field: ProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type ProductTypeUpdate = {
	readonly __typename?: 'ProductTypeUpdate';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productType?: Maybe<ProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductUpdate = {
	readonly __typename?: 'ProductUpdate';
	readonly errors: ReadonlyArray<ProductError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export type ProductUpdated = Event & {
	readonly __typename?: 'ProductUpdated';
	/**
	 * The category of the product.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly category?: Maybe<Category>;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly product?: Maybe<Product>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductUpdatedProductArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'ProductVariant';
		/** List of attributes assigned to this variant. */
		readonly attributes: ReadonlyArray<SelectedAttribute>;
		/** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
		readonly channel?: Maybe<Scalars['String']>;
		/**
		 * List of price information in channels for the product.
		 *
		 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
		 */
		readonly channelListings?: Maybe<
			ReadonlyArray<ProductVariantChannelListing>
		>;
		readonly created: Scalars['DateTime'];
		/**
		 * Digital content for the product variant.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly digitalContent?: Maybe<DigitalContent>;
		readonly id: Scalars['ID'];
		/**
		 * List of images for the product variant.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
		 */
		readonly images?: Maybe<ReadonlyArray<ProductImage>>;
		/** Gross margin percentage value. */
		readonly margin?: Maybe<Scalars['Int']>;
		/** List of media for the product variant. */
		readonly media?: Maybe<ReadonlyArray<ProductMedia>>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/**
		 * Preorder data for product variant.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly preorder?: Maybe<PreorderData>;
		/** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
		readonly pricing?: Maybe<VariantPricingInfo>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly product: Product;
		/** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
		readonly quantityAvailable?: Maybe<Scalars['Int']>;
		readonly quantityLimitPerCustomer?: Maybe<Scalars['Int']>;
		/**
		 * Total quantity ordered.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly quantityOrdered?: Maybe<Scalars['Int']>;
		/**
		 * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS.
		 */
		readonly revenue?: Maybe<TaxedMoney>;
		readonly sku?: Maybe<Scalars['String']>;
		/**
		 * Stocks for the product variant.
		 *
		 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
		 */
		readonly stocks?: Maybe<ReadonlyArray<Stock>>;
		readonly trackInventory: Scalars['Boolean'];
		/** Returns translated product variant fields for the given language code. */
		readonly translation?: Maybe<ProductVariantTranslation>;
		readonly updatedAt: Scalars['DateTime'];
		readonly weight?: Maybe<Weight>;
	};

/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
	variantSelection?: InputMaybe<VariantAttributeScope>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
	address?: InputMaybe<AddressInput>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
	address?: InputMaybe<AddressInput>;
	countryCode?: InputMaybe<CountryCode>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
	period?: InputMaybe<ReportingPeriod>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
	address?: InputMaybe<AddressInput>;
	countryCode?: InputMaybe<CountryCode>;
};

/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

export type ProductVariantBackInStock = Event & {
	readonly __typename?: 'ProductVariantBackInStock';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product variant the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * Look up a warehouse.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly warehouse?: Maybe<Warehouse>;
};

export type ProductVariantBackInStockProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkCreate = {
	readonly __typename?: 'ProductVariantBulkCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly bulkProductErrors: ReadonlyArray<BulkProductError>;
	/** Returns how many objects were created. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<BulkProductError>;
	/** List of the created variants. */
	readonly productVariants: ReadonlyArray<ProductVariant>;
};

export type ProductVariantBulkCreateInput = {
	/** List of attributes specific to this variant. */
	readonly attributes: ReadonlyArray<BulkAttributeValueInput>;
	/** List of prices assigned to channels. */
	readonly channelListings?: InputMaybe<
		ReadonlyArray<ProductVariantChannelListingAddInput>
	>;
	/**
	 * Determines if variant is in preorder.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly preorder?: InputMaybe<PreorderSettingsInput>;
	/**
	 * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
	/** Stock keeping unit. */
	readonly sku?: InputMaybe<Scalars['String']>;
	/** Stocks of a product available for sale. */
	readonly stocks?: InputMaybe<ReadonlyArray<StockInput>>;
	/** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
	readonly trackInventory?: InputMaybe<Scalars['Boolean']>;
	/** Weight of the Product Variant. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantBulkDelete = {
	readonly __typename?: 'ProductVariantBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
	readonly __typename?: 'ProductVariantChannelListing';
	readonly channel: Channel;
	/** Cost price of the variant. */
	readonly costPrice?: Maybe<Money>;
	readonly id: Scalars['ID'];
	/**
	 * Gross margin percentage value.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly margin?: Maybe<Scalars['Int']>;
	/**
	 * Preorder variant data.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly preorderThreshold?: Maybe<PreorderThreshold>;
	readonly price?: Maybe<Money>;
};

export type ProductVariantChannelListingAddInput = {
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** Cost price of the variant in channel. */
	readonly costPrice?: InputMaybe<Scalars['PositiveDecimal']>;
	/**
	 * The threshold for preorder variant in channel.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly preorderThreshold?: InputMaybe<Scalars['Int']>;
	/** Price of the particular variant in channel. */
	readonly price: Scalars['PositiveDecimal'];
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantChannelListingUpdate = {
	readonly __typename?: 'ProductVariantChannelListingUpdate';
	readonly errors: ReadonlyArray<ProductChannelListingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productChannelListingErrors: ReadonlyArray<ProductChannelListingError>;
	/** An updated product variant instance. */
	readonly variant?: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
	readonly __typename?: 'ProductVariantCountableConnection';
	readonly edges: ReadonlyArray<ProductVariantCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ProductVariantCountableEdge = {
	readonly __typename?: 'ProductVariantCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: ProductVariant;
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantCreate = {
	readonly __typename?: 'ProductVariantCreate';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
	/** List of attributes specific to this variant. */
	readonly attributes: ReadonlyArray<AttributeValueInput>;
	/**
	 * Determines if variant is in preorder.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly preorder?: InputMaybe<PreorderSettingsInput>;
	/** Product ID of which type is the variant. */
	readonly product: Scalars['ID'];
	/**
	 * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
	/** Stock keeping unit. */
	readonly sku?: InputMaybe<Scalars['String']>;
	/** Stocks of a product available for sale. */
	readonly stocks?: InputMaybe<ReadonlyArray<StockInput>>;
	/** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
	readonly trackInventory?: InputMaybe<Scalars['Boolean']>;
	/** Weight of the Product Variant. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantCreated = Event & {
	readonly __typename?: 'ProductVariantCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product variant the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductVariantCreatedProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantDelete = {
	readonly __typename?: 'ProductVariantDelete';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantDeleted = Event & {
	readonly __typename?: 'ProductVariantDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product variant the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductVariantDeletedProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ProductVariantFilterInput = {
	readonly isPreorder?: InputMaybe<Scalars['Boolean']>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly sku?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type ProductVariantInput = {
	/** List of attributes specific to this variant. */
	readonly attributes?: InputMaybe<ReadonlyArray<AttributeValueInput>>;
	/**
	 * Determines if variant is in preorder.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly preorder?: InputMaybe<PreorderSettingsInput>;
	/**
	 * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly quantityLimitPerCustomer?: InputMaybe<Scalars['Int']>;
	/** Stock keeping unit. */
	readonly sku?: InputMaybe<Scalars['String']>;
	/** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
	readonly trackInventory?: InputMaybe<Scalars['Boolean']>;
	/** Weight of the Product Variant. */
	readonly weight?: InputMaybe<Scalars['WeightScalar']>;
};

export type ProductVariantOutOfStock = Event & {
	readonly __typename?: 'ProductVariantOutOfStock';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product variant the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * Look up a warehouse.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly warehouse?: Maybe<Warehouse>;
};

export type ProductVariantOutOfStockProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantPreorderDeactivate = {
	readonly __typename?: 'ProductVariantPreorderDeactivate';
	readonly errors: ReadonlyArray<ProductError>;
	/** Product variant with ended preorder. */
	readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorder = {
	readonly __typename?: 'ProductVariantReorder';
	readonly errors: ReadonlyArray<ProductError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantReorderAttributeValues = {
	readonly __typename?: 'ProductVariantReorderAttributeValues';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	/** Product variant from which attribute values are reordered. */
	readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantSetDefault = {
	readonly __typename?: 'ProductVariantSetDefault';
	readonly errors: ReadonlyArray<ProductError>;
	readonly product?: Maybe<Product>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
};

export enum ProductVariantSortField {
	/** Sort products variants by last modified at. */
	LastModifiedAt = 'LAST_MODIFIED_AT',
}

export type ProductVariantSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort productVariants by the selected field. */
	readonly field: ProductVariantSortField;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksCreate = {
	readonly __typename?: 'ProductVariantStocksCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly bulkStockErrors: ReadonlyArray<BulkStockError>;
	readonly errors: ReadonlyArray<BulkStockError>;
	/** Updated product variant. */
	readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksDelete = {
	readonly __typename?: 'ProductVariantStocksDelete';
	readonly errors: ReadonlyArray<StockError>;
	/** Updated product variant. */
	readonly productVariant?: Maybe<ProductVariant>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly stockErrors: ReadonlyArray<StockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantStocksUpdate = {
	readonly __typename?: 'ProductVariantStocksUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly bulkStockErrors: ReadonlyArray<BulkStockError>;
	readonly errors: ReadonlyArray<BulkStockError>;
	/** Updated product variant. */
	readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslatableContent = Node & {
	readonly __typename?: 'ProductVariantTranslatableContent';
	/** List of product variant attribute values that can be translated. */
	readonly attributeValues: ReadonlyArray<AttributeValueTranslatableContent>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/**
	 * Represents a version of a product such as different size or color.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** Returns translated product variant fields for the given language code. */
	readonly translation?: Maybe<ProductVariantTranslation>;
};

export type ProductVariantTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ProductVariantTranslate = {
	readonly __typename?: 'ProductVariantTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly productVariant?: Maybe<ProductVariant>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ProductVariantTranslation = Node & {
	readonly __typename?: 'ProductVariantTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name: Scalars['String'];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ProductVariantUpdate = {
	readonly __typename?: 'ProductVariantUpdate';
	readonly errors: ReadonlyArray<ProductError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdated = Event & {
	readonly __typename?: 'ProductVariantUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/**
	 * The product variant the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly productVariant?: Maybe<ProductVariant>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ProductVariantUpdatedProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type PublishableChannelListingInput = {
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** Determines if object is visible to customers. */
	readonly isPublished?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Publication date. ISO 8601 standard.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
	 */
	readonly publicationDate?: InputMaybe<Scalars['Date']>;
	/**
	 * Publication date time. ISO 8601 standard.
	 *
	 * Added in Saleor 3.3.
	 */
	readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Query = {
	readonly __typename?: 'Query';
	readonly _entities?: Maybe<ReadonlyArray<Maybe<_Entity>>>;
	readonly _service?: Maybe<_Service>;
	/** Look up an address by ID. */
	readonly address?: Maybe<Address>;
	/** Returns address validation rules. */
	readonly addressValidationRules?: Maybe<AddressValidationData>;
	/**
	 * Look up an app by ID. If ID is not provided, return the currently authenticated app.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
	 */
	readonly app?: Maybe<App>;
	/**
	 * Look up an app extension by ID.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
	 */
	readonly appExtension?: Maybe<AppExtension>;
	/**
	 * List of all extensions.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
	 */
	readonly appExtensions?: Maybe<AppExtensionCountableConnection>;
	/**
	 * List of the apps.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
	 */
	readonly apps?: Maybe<AppCountableConnection>;
	/**
	 * List of all apps installations
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 */
	readonly appsInstallations: ReadonlyArray<AppInstallation>;
	/** Look up an attribute by ID. */
	readonly attribute?: Maybe<Attribute>;
	/** List of the shop's attributes. */
	readonly attributes?: Maybe<AttributeCountableConnection>;
	/** List of the shop's categories. */
	readonly categories?: Maybe<CategoryCountableConnection>;
	/** Look up a category by ID or slug. */
	readonly category?: Maybe<Category>;
	/**
	 * Look up a channel by ID.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
	 */
	readonly channel?: Maybe<Channel>;
	/**
	 * List of all channels.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
	 */
	readonly channels?: Maybe<ReadonlyArray<Channel>>;
	/** Look up a checkout by token and slug of channel. */
	readonly checkout?: Maybe<Checkout>;
	/**
	 * List of checkout lines.
	 *
	 * Requires one of the following permissions: MANAGE_CHECKOUTS.
	 */
	readonly checkoutLines?: Maybe<CheckoutLineCountableConnection>;
	/**
	 * List of checkouts.
	 *
	 * Requires one of the following permissions: MANAGE_CHECKOUTS.
	 */
	readonly checkouts?: Maybe<CheckoutCountableConnection>;
	/** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly collection?: Maybe<Collection>;
	/** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly collections?: Maybe<CollectionCountableConnection>;
	/**
	 * List of the shop's customers.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
	 */
	readonly customers?: Maybe<UserCountableConnection>;
	/**
	 * Look up digital content by ID.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContent?: Maybe<DigitalContent>;
	/**
	 * List of digital content.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly digitalContents?: Maybe<DigitalContentCountableConnection>;
	/**
	 * List of draft orders.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly draftOrders?: Maybe<OrderCountableConnection>;
	/**
	 * Look up a export file by ID.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly exportFile?: Maybe<ExportFile>;
	/**
	 * List of export files.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly exportFiles?: Maybe<ExportFileCountableConnection>;
	/**
	 * Look up a gift card by ID.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCard?: Maybe<GiftCard>;
	/**
	 * List of gift card currencies.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardCurrencies: ReadonlyArray<Scalars['String']>;
	/**
	 * Gift card related settings from site settings.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardSettings: GiftCardSettings;
	/**
	 * List of gift card tags.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCardTags?: Maybe<GiftCardTagCountableConnection>;
	/**
	 * List of gift cards.
	 *
	 * Requires one of the following permissions: MANAGE_GIFT_CARD.
	 */
	readonly giftCards?: Maybe<GiftCardCountableConnection>;
	/**
	 * List of activity events to display on homepage (at the moment it only contains order-events).
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly homepageEvents?: Maybe<OrderEventCountableConnection>;
	/** Return the currently authenticated user. */
	readonly me?: Maybe<User>;
	/** Look up a navigation menu by ID or name. */
	readonly menu?: Maybe<Menu>;
	/** Look up a menu item by ID. */
	readonly menuItem?: Maybe<MenuItem>;
	/** List of the storefronts's menu items. */
	readonly menuItems?: Maybe<MenuItemCountableConnection>;
	/** List of the storefront's menus. */
	readonly menus?: Maybe<MenuCountableConnection>;
	/** Look up an order by ID. */
	readonly order?: Maybe<Order>;
	/**
	 * Look up an order by token.
	 * @deprecated This field will be removed in Saleor 4.0.
	 */
	readonly orderByToken?: Maybe<Order>;
	/**
	 * Order related settings from site settings.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orderSettings?: Maybe<OrderSettings>;
	/**
	 * List of orders.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly orders?: Maybe<OrderCountableConnection>;
	/**
	 * Return the total sales amount from a specific period.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly ordersTotal?: Maybe<TaxedMoney>;
	/** Look up a page by ID or slug. */
	readonly page?: Maybe<Page>;
	/** Look up a page type by ID. */
	readonly pageType?: Maybe<PageType>;
	/** List of the page types. */
	readonly pageTypes?: Maybe<PageTypeCountableConnection>;
	/** List of the shop's pages. */
	readonly pages?: Maybe<PageCountableConnection>;
	/**
	 * Look up a payment by ID.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly payment?: Maybe<Payment>;
	/**
	 * List of payments.
	 *
	 * Requires one of the following permissions: MANAGE_ORDERS.
	 */
	readonly payments?: Maybe<PaymentCountableConnection>;
	/**
	 * Look up permission group by ID.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly permissionGroup?: Maybe<Group>;
	/**
	 * List of permission groups.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly permissionGroups?: Maybe<GroupCountableConnection>;
	/**
	 * Look up a plugin by ID.
	 *
	 * Requires one of the following permissions: MANAGE_PLUGINS.
	 */
	readonly plugin?: Maybe<Plugin>;
	/**
	 * List of plugins.
	 *
	 * Requires one of the following permissions: MANAGE_PLUGINS.
	 */
	readonly plugins?: Maybe<PluginCountableConnection>;
	/** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly product?: Maybe<Product>;
	/** Look up a product type by ID. */
	readonly productType?: Maybe<ProductType>;
	/** List of the shop's product types. */
	readonly productTypes?: Maybe<ProductTypeCountableConnection>;
	/** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly productVariant?: Maybe<ProductVariant>;
	/** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly productVariants?: Maybe<ProductVariantCountableConnection>;
	/** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
	readonly products?: Maybe<ProductCountableConnection>;
	/**
	 * List of top selling products.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly reportProductSales?: Maybe<ProductVariantCountableConnection>;
	/**
	 * Look up a sale by ID.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly sale?: Maybe<Sale>;
	/**
	 * List of the shop's sales.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly sales?: Maybe<SaleCountableConnection>;
	/**
	 * Look up a shipping zone by ID.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/**
	 * List of the shop's shipping zones.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 */
	readonly shippingZones?: Maybe<ShippingZoneCountableConnection>;
	/** Return information about the shop. */
	readonly shop: Shop;
	/**
	 * List of the shop's staff users.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF.
	 */
	readonly staffUsers?: Maybe<UserCountableConnection>;
	/**
	 * Look up a stock by ID
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly stock?: Maybe<Stock>;
	/**
	 * List of stocks.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS.
	 */
	readonly stocks?: Maybe<StockCountableConnection>;
	/** List of all tax rates available from tax gateway. */
	readonly taxTypes?: Maybe<ReadonlyArray<TaxType>>;
	/**
	 * Lookup a translatable item by ID.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly translation?: Maybe<TranslatableItem>;
	/**
	 * Returns a list of all translatable items of a given kind.
	 *
	 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
	 */
	readonly translations?: Maybe<TranslatableItemConnection>;
	/**
	 * Look up a user by ID or email address.
	 *
	 * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
	 */
	readonly user?: Maybe<User>;
	/**
	 * Look up a voucher by ID.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly voucher?: Maybe<Voucher>;
	/**
	 * List of the shop's vouchers.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 */
	readonly vouchers?: Maybe<VoucherCountableConnection>;
	/**
	 * Look up a warehouse by ID.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
	 */
	readonly warehouse?: Maybe<Warehouse>;
	/**
	 * List of warehouses.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
	 */
	readonly warehouses?: Maybe<WarehouseCountableConnection>;
	/** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
	readonly webhook?: Maybe<Webhook>;
	/**
	 * List of all available webhook events.
	 *
	 * Requires one of the following permissions: MANAGE_APPS.
	 * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
	 */
	readonly webhookEvents?: Maybe<ReadonlyArray<WebhookEvent>>;
	/** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
	readonly webhookSamplePayload?: Maybe<Scalars['JSONString']>;
};

export type Query_EntitiesArgs = {
	representations?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['_Any']>>>;
};

export type QueryAddressArgs = {
	id: Scalars['ID'];
};

export type QueryAddressValidationRulesArgs = {
	city?: InputMaybe<Scalars['String']>;
	cityArea?: InputMaybe<Scalars['String']>;
	countryArea?: InputMaybe<Scalars['String']>;
	countryCode: CountryCode;
};

export type QueryAppArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryAppExtensionArgs = {
	id: Scalars['ID'];
};

export type QueryAppExtensionsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AppExtensionFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryAppsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AppFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<AppSortingInput>;
};

export type QueryAttributeArgs = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryAttributesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<AttributeFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<AttributeSortingInput>;
};

export type QueryCategoriesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<CategoryFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	level?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<CategorySortingInput>;
};

export type QueryCategoryArgs = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryChannelArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryCheckoutArgs = {
	id?: InputMaybe<Scalars['ID']>;
	token?: InputMaybe<Scalars['UUID']>;
};

export type QueryCheckoutLinesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryCheckoutsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<CheckoutFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<CheckoutSortingInput>;
};

export type QueryCollectionArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryCollectionsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<CollectionFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<CollectionSortingInput>;
};

export type QueryCustomersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<CustomerFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<UserSortingInput>;
};

export type QueryDigitalContentArgs = {
	id: Scalars['ID'];
};

export type QueryDigitalContentsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryDraftOrdersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<OrderDraftFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<OrderSortingInput>;
};

export type QueryExportFileArgs = {
	id: Scalars['ID'];
};

export type QueryExportFilesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ExportFileFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<ExportFileSortingInput>;
};

export type QueryGiftCardArgs = {
	id: Scalars['ID'];
};

export type QueryGiftCardTagsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<GiftCardTagFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryGiftCardsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<GiftCardFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<GiftCardSortingInput>;
};

export type QueryHomepageEventsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryMenuArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	name?: InputMaybe<Scalars['String']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryMenuItemArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
};

export type QueryMenuItemsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<MenuItemFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<MenuItemSortingInput>;
};

export type QueryMenusArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<MenuFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<MenuSortingInput>;
};

export type QueryOrderArgs = {
	id: Scalars['ID'];
};

export type QueryOrderByTokenArgs = {
	token: Scalars['UUID'];
};

export type QueryOrdersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<OrderFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<OrderSortingInput>;
};

export type QueryOrdersTotalArgs = {
	channel?: InputMaybe<Scalars['String']>;
	period?: InputMaybe<ReportingPeriod>;
};

export type QueryPageArgs = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryPageTypeArgs = {
	id: Scalars['ID'];
};

export type QueryPageTypesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<PageTypeFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<PageTypeSortingInput>;
};

export type QueryPagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<PageFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<PageSortingInput>;
};

export type QueryPaymentArgs = {
	id: Scalars['ID'];
};

export type QueryPaymentsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<PaymentFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryPermissionGroupArgs = {
	id: Scalars['ID'];
};

export type QueryPermissionGroupsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<PermissionGroupFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<PermissionGroupSortingInput>;
};

export type QueryPluginArgs = {
	id: Scalars['ID'];
};

export type QueryPluginsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<PluginFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<PluginSortingInput>;
};

export type QueryProductArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryProductTypeArgs = {
	id: Scalars['ID'];
};

export type QueryProductTypesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ProductTypeFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<ProductTypeSortingInput>;
};

export type QueryProductVariantArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	sku?: InputMaybe<Scalars['String']>;
};

export type QueryProductVariantsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ProductVariantFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<ProductVariantSortingInput>;
};

export type QueryProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ProductFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<ProductOrder>;
};

export type QueryReportProductSalesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel: Scalars['String'];
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	period: ReportingPeriod;
};

export type QuerySaleArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
};

export type QuerySalesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<SaleFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	query?: InputMaybe<Scalars['String']>;
	sortBy?: InputMaybe<SaleSortingInput>;
};

export type QueryShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
};

export type QueryShippingZonesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<ShippingZoneFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryStaffUsersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<StaffUserInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<UserSortingInput>;
};

export type QueryStockArgs = {
	id: Scalars['ID'];
};

export type QueryStocksArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<StockFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryTranslationArgs = {
	id: Scalars['ID'];
	kind: TranslatableKinds;
};

export type QueryTranslationsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	kind: TranslatableKinds;
	last?: InputMaybe<Scalars['Int']>;
};

export type QueryUserArgs = {
	email?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryVoucherArgs = {
	channel?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
};

export type QueryVouchersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	channel?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<VoucherFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	query?: InputMaybe<Scalars['String']>;
	sortBy?: InputMaybe<VoucherSortingInput>;
};

export type QueryWarehouseArgs = {
	id: Scalars['ID'];
};

export type QueryWarehousesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<WarehouseFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<WarehouseSortingInput>;
};

export type QueryWebhookArgs = {
	id: Scalars['ID'];
};

export type QueryWebhookSamplePayloadArgs = {
	eventType: WebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
	readonly __typename?: 'ReducedRate';
	/** Reduced VAT rate in percent. */
	readonly rate: Scalars['Float'];
	/** A type of goods. */
	readonly rateType: Scalars['String'];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
	readonly __typename?: 'RefreshToken';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** JWT token, required to authenticate. */
	readonly token?: Maybe<Scalars['String']>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

export type ReorderInput = {
	/** The ID of the item to move. */
	readonly id: Scalars['ID'];
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	readonly sortOrder?: InputMaybe<Scalars['Int']>;
};

export enum ReportingPeriod {
	ThisMonth = 'THIS_MONTH',
	Today = 'TODAY',
}

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type RequestEmailChange = {
	readonly __typename?: 'RequestEmailChange';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
	readonly __typename?: 'RequestPasswordReset';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Sale';
		/** List of categories this sale applies to. */
		readonly categories?: Maybe<CategoryCountableConnection>;
		/**
		 * List of channels available for the sale.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly channelListings?: Maybe<ReadonlyArray<SaleChannelListing>>;
		/**
		 * List of collections this sale applies to.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly collections?: Maybe<CollectionCountableConnection>;
		readonly created: Scalars['DateTime'];
		/** Currency code for sale. */
		readonly currency?: Maybe<Scalars['String']>;
		/** Sale value. */
		readonly discountValue?: Maybe<Scalars['Float']>;
		readonly endDate?: Maybe<Scalars['DateTime']>;
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/**
		 * List of products this sale applies to.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly products?: Maybe<ProductCountableConnection>;
		readonly startDate: Scalars['DateTime'];
		/** Returns translated sale fields for the given language code. */
		readonly translation?: Maybe<SaleTranslation>;
		readonly type: SaleType;
		readonly updatedAt: Scalars['DateTime'];
		/**
		 * List of product variants this sale applies to.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly variants?: Maybe<ProductVariantCountableConnection>;
	};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldArgs = {
	key: Scalars['String'];
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SalePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleAddCatalogues = {
	readonly __typename?: 'SaleAddCatalogues';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** Sale of which catalogue IDs will be modified. */
	readonly sale?: Maybe<Sale>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleBulkDelete = {
	readonly __typename?: 'SaleBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
};

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
	readonly __typename?: 'SaleChannelListing';
	readonly channel: Channel;
	readonly currency: Scalars['String'];
	readonly discountValue: Scalars['Float'];
	readonly id: Scalars['ID'];
};

export type SaleChannelListingAddInput = {
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** The value of the discount. */
	readonly discountValue: Scalars['PositiveDecimal'];
};

export type SaleChannelListingInput = {
	/** List of channels to which the sale should be assigned. */
	readonly addChannels?: InputMaybe<ReadonlyArray<SaleChannelListingAddInput>>;
	/** List of channels from which the sale should be unassigned. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Manage sale's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleChannelListingUpdate = {
	readonly __typename?: 'SaleChannelListingUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** An updated sale instance. */
	readonly sale?: Maybe<Sale>;
};

export type SaleCountableConnection = {
	readonly __typename?: 'SaleCountableConnection';
	readonly edges: ReadonlyArray<SaleCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type SaleCountableEdge = {
	readonly __typename?: 'SaleCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Sale;
};

/**
 * Creates a new sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleCreate = {
	readonly __typename?: 'SaleCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly sale?: Maybe<Sale>;
};

export type SaleCreated = Event & {
	readonly __typename?: 'SaleCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The sale the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly sale?: Maybe<Sale>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type SaleCreatedSaleArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleDelete = {
	readonly __typename?: 'SaleDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly sale?: Maybe<Sale>;
};

export type SaleDeleted = Event & {
	readonly __typename?: 'SaleDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The sale the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly sale?: Maybe<Sale>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type SaleDeletedSaleArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type SaleFilterInput = {
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly saleType?: InputMaybe<DiscountValueTypeEnum>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly started?: InputMaybe<DateTimeRangeInput>;
	readonly status?: InputMaybe<ReadonlyArray<DiscountStatusEnum>>;
	readonly updatedAt?: InputMaybe<DateTimeRangeInput>;
};

export type SaleInput = {
	/** Categories related to the discount. */
	readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Collections related to the discount. */
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** End date of the voucher in ISO 8601 format. */
	readonly endDate?: InputMaybe<Scalars['DateTime']>;
	/** Voucher name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Products related to the discount. */
	readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Start date of the voucher in ISO 8601 format. */
	readonly startDate?: InputMaybe<Scalars['DateTime']>;
	/** Fixed or percentage. */
	readonly type?: InputMaybe<DiscountValueTypeEnum>;
	/** Value of the voucher. */
	readonly value?: InputMaybe<Scalars['PositiveDecimal']>;
	readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleRemoveCatalogues = {
	readonly __typename?: 'SaleRemoveCatalogues';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** Sale of which catalogue IDs will be modified. */
	readonly sale?: Maybe<Sale>;
};

export enum SaleSortField {
	/** Sort sales by created at. */
	CreatedAt = 'CREATED_AT',
	/** Sort sales by end date. */
	EndDate = 'END_DATE',
	/** Sort sales by last modified at. */
	LastModifiedAt = 'LAST_MODIFIED_AT',
	/** Sort sales by name. */
	Name = 'NAME',
	/** Sort sales by start date. */
	StartDate = 'START_DATE',
	/** Sort sales by type. */
	Type = 'TYPE',
	/**
	 * Sort sales by value.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Value = 'VALUE',
}

export type SaleSortingInput = {
	/**
	 * Specifies the channel in which to sort the data.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort sales by the selected field. */
	readonly field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
	readonly __typename?: 'SaleTranslatableContent';
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/**
	 * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly sale?: Maybe<Sale>;
	/** Returns translated sale fields for the given language code. */
	readonly translation?: Maybe<SaleTranslation>;
};

export type SaleTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type SaleTranslate = {
	readonly __typename?: 'SaleTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly sale?: Maybe<Sale>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type SaleTranslation = Node & {
	readonly __typename?: 'SaleTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
};

export enum SaleType {
	Fixed = 'FIXED',
	Percentage = 'PERCENTAGE',
}

/**
 * Updates a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type SaleUpdate = {
	readonly __typename?: 'SaleUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly sale?: Maybe<Sale>;
};

export type SaleUpdated = Event & {
	readonly __typename?: 'SaleUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The sale the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly sale?: Maybe<Sale>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type SaleUpdatedSaleArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents a custom attribute. */
export type SelectedAttribute = {
	readonly __typename?: 'SelectedAttribute';
	/** Name of an attribute displayed in the interface. */
	readonly attribute: Attribute;
	/** Values of an attribute. */
	readonly values: ReadonlyArray<AttributeValue>;
};

export type SeoInput = {
	/** SEO description. */
	readonly description?: InputMaybe<Scalars['String']>;
	/** SEO title. */
	readonly title?: InputMaybe<Scalars['String']>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
	readonly __typename?: 'SetPassword';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** CSRF token required to re-generate access token. */
	readonly csrfToken?: Maybe<Scalars['String']>;
	readonly errors: ReadonlyArray<AccountError>;
	/** JWT refresh token, required to re-generate access token. */
	readonly refreshToken?: Maybe<Scalars['String']>;
	/** JWT token, required to authenticate. */
	readonly token?: Maybe<Scalars['String']>;
	/** A user instance. */
	readonly user?: Maybe<User>;
};

export type ShippingError = {
	readonly __typename?: 'ShippingError';
	/** List of channels IDs which causes the error. */
	readonly channels?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error code. */
	readonly code: ShippingErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of warehouse IDs which causes the error. */
	readonly warehouses?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

/** An enumeration. */
export enum ShippingErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	MaxLessThanMin = 'MAX_LESS_THAN_MIN',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethod = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'ShippingMethod';
		/** Describes if this shipping method is active and can be selected. */
		readonly active: Scalars['Boolean'];
		/**
		 * Shipping method description.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly description?: Maybe<Scalars['JSONString']>;
		/** Unique ID of ShippingMethod available for Order. */
		readonly id: Scalars['ID'];
		/** Maximum delivery days for this shipping method. */
		readonly maximumDeliveryDays?: Maybe<Scalars['Int']>;
		/** Maximum order price for this shipping method. */
		readonly maximumOrderPrice?: Maybe<Money>;
		/**
		 * Maximum order weight for this shipping method.
		 * @deprecated This field will be removed in Saleor 4.0.
		 */
		readonly maximumOrderWeight?: Maybe<Weight>;
		/** Message connected to this shipping method. */
		readonly message?: Maybe<Scalars['String']>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** Minimum delivery days for this shipping method. */
		readonly minimumDeliveryDays?: Maybe<Scalars['Int']>;
		/** Minimal order price for this shipping method. */
		readonly minimumOrderPrice?: Maybe<Money>;
		/**
		 * Minimum order weight for this shipping method.
		 * @deprecated This field will be removed in Saleor 4.0.
		 */
		readonly minimumOrderWeight?: Maybe<Weight>;
		/** Shipping method name. */
		readonly name: Scalars['String'];
		/** The price of selected shipping method. */
		readonly price: Money;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Returns translated shipping method fields for the given language code. */
		readonly translation?: Maybe<ShippingMethodTranslation>;
		/**
		 * Type of the shipping method.
		 * @deprecated This field will be removed in Saleor 4.0.
		 */
		readonly type?: Maybe<ShippingMethodTypeEnum>;
	};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldArgs = {
	key: Scalars['String'];
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type ShippingMethodTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
	readonly __typename?: 'ShippingMethodChannelListing';
	readonly channel: Channel;
	readonly id: Scalars['ID'];
	readonly maximumOrderPrice?: Maybe<Money>;
	readonly minimumOrderPrice?: Maybe<Money>;
	readonly price?: Maybe<Money>;
};

export type ShippingMethodChannelListingAddInput = {
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** Maximum order price to use this shipping method. */
	readonly maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
	/** Minimum order price to use this shipping method. */
	readonly minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']>;
	/** Shipping price of the shipping method in this channel. */
	readonly price?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type ShippingMethodChannelListingInput = {
	/** List of channels to which the shipping method should be assigned. */
	readonly addChannels?: InputMaybe<
		ReadonlyArray<ShippingMethodChannelListingAddInput>
	>;
	/** List of channels from which the shipping method should be unassigned. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingMethodChannelListingUpdate = {
	readonly __typename?: 'ShippingMethodChannelListingUpdate';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	/** An updated shipping method instance. */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
	readonly __typename?: 'ShippingMethodPostalCodeRule';
	/** End address range. */
	readonly end?: Maybe<Scalars['String']>;
	/** The ID of the object. */
	readonly id: Scalars['ID'];
	/** Inclusion type of the postal code rule. */
	readonly inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>;
	/** Start address range. */
	readonly start?: Maybe<Scalars['String']>;
};

export type ShippingMethodTranslatableContent = Node & {
	readonly __typename?: 'ShippingMethodTranslatableContent';
	/**
	 * Description of the shipping method.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	readonly name: Scalars['String'];
	/**
	 * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
	 *
	 * Requires one of the following permissions: MANAGE_SHIPPING.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/** Returns translated shipping method fields for the given language code. */
	readonly translation?: Maybe<ShippingMethodTranslation>;
};

export type ShippingMethodTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
	readonly __typename?: 'ShippingMethodTranslation';
	/**
	 * Translated description of the shipping method.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: Maybe<Scalars['JSONString']>;
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodType = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'ShippingMethodType';
		/**
		 * List of channels available for the method.
		 *
		 * Requires one of the following permissions: MANAGE_SHIPPING.
		 */
		readonly channelListings?: Maybe<
			ReadonlyArray<ShippingMethodChannelListing>
		>;
		/**
		 * Shipping method description.
		 *
		 * Rich text format. For reference see https://editorjs.io/
		 */
		readonly description?: Maybe<Scalars['JSONString']>;
		/**
		 * List of excluded products for the shipping method.
		 *
		 * Requires one of the following permissions: MANAGE_SHIPPING.
		 */
		readonly excludedProducts?: Maybe<ProductCountableConnection>;
		/** Shipping method ID. */
		readonly id: Scalars['ID'];
		/** Maximum number of days for delivery. */
		readonly maximumDeliveryDays?: Maybe<Scalars['Int']>;
		/** The price of the cheapest variant (including discounts). */
		readonly maximumOrderPrice?: Maybe<Money>;
		/** Maximum order weight to use this shipping method. */
		readonly maximumOrderWeight?: Maybe<Weight>;
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/** Minimal number of days for delivery. */
		readonly minimumDeliveryDays?: Maybe<Scalars['Int']>;
		/** The price of the cheapest variant (including discounts). */
		readonly minimumOrderPrice?: Maybe<Money>;
		/** Minimum order weight to use this shipping method. */
		readonly minimumOrderWeight?: Maybe<Weight>;
		/** Shipping method name. */
		readonly name: Scalars['String'];
		/** Postal code ranges rule of exclusion or inclusion of the shipping method. */
		readonly postalCodeRules?: Maybe<
			ReadonlyArray<ShippingMethodPostalCodeRule>
		>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Returns translated shipping method fields for the given language code. */
		readonly translation?: Maybe<ShippingMethodTranslation>;
		/** Type of the shipping method. */
		readonly type?: Maybe<ShippingMethodTypeEnum>;
	};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeExcludedProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldArgs = {
	key: Scalars['String'];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTypeTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/** An enumeration. */
export enum ShippingMethodTypeEnum {
	Price = 'PRICE',
	Weight = 'WEIGHT',
}

export type ShippingPostalCodeRulesCreateInputRange = {
	/** End range of the postal code. */
	readonly end?: InputMaybe<Scalars['String']>;
	/** Start range of the postal code. */
	readonly start: Scalars['String'];
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceBulkDelete = {
	readonly __typename?: 'ShippingPriceBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceCreate = {
	readonly __typename?: 'ShippingPriceCreate';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/** A shipping zone to which the shipping method belongs. */
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceCreated = Event & {
	readonly __typename?: 'ShippingPriceCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping method the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/**
	 * The shipping zone the shipping method belongs to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingPriceCreatedShippingMethodArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceCreatedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceDelete = {
	readonly __typename?: 'ShippingPriceDelete';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	/** A shipping method to delete. */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/** A shipping zone to which the shipping method belongs. */
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceDeleted = Event & {
	readonly __typename?: 'ShippingPriceDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping method the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/**
	 * The shipping zone the shipping method belongs to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingPriceDeletedShippingMethodArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceDeletedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceExcludeProducts = {
	readonly __typename?: 'ShippingPriceExcludeProducts';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	/** A shipping method with new list of excluded products. */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
};

export type ShippingPriceExcludeProductsInput = {
	/** List of products which will be excluded. */
	readonly products: ReadonlyArray<Scalars['ID']>;
};

export type ShippingPriceInput = {
	/** Postal code rules to add. */
	readonly addPostalCodeRules?: InputMaybe<
		ReadonlyArray<ShippingPostalCodeRulesCreateInputRange>
	>;
	/** Postal code rules to delete. */
	readonly deletePostalCodeRules?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Shipping method description. */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	/** Inclusion type for currently assigned postal code rules. */
	readonly inclusionType?: InputMaybe<PostalCodeRuleInclusionTypeEnum>;
	/** Maximum number of days for delivery. */
	readonly maximumDeliveryDays?: InputMaybe<Scalars['Int']>;
	/** Maximum order weight to use this shipping method. */
	readonly maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
	/** Minimal number of days for delivery. */
	readonly minimumDeliveryDays?: InputMaybe<Scalars['Int']>;
	/** Minimum order weight to use this shipping method. */
	readonly minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']>;
	/** Name of the shipping method. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Shipping zone this method belongs to. */
	readonly shippingZone?: InputMaybe<Scalars['ID']>;
	/** Shipping type: price or weight based. */
	readonly type?: InputMaybe<ShippingMethodTypeEnum>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceRemoveProductFromExclude = {
	readonly __typename?: 'ShippingPriceRemoveProductFromExclude';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	/** A shipping method with new list of excluded products. */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShippingPriceTranslate = {
	readonly __typename?: 'ShippingPriceTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ShippingPriceTranslationInput = {
	/**
	 * Translated shipping method description.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	readonly name?: InputMaybe<Scalars['String']>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingPriceUpdate = {
	readonly __typename?: 'ShippingPriceUpdate';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/** A shipping zone to which the shipping method belongs. */
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceUpdated = Event & {
	readonly __typename?: 'ShippingPriceUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping method the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingMethod?: Maybe<ShippingMethodType>;
	/**
	 * The shipping zone the shipping method belongs to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingPriceUpdatedShippingMethodArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ShippingPriceUpdatedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'ShippingZone';
		/** List of channels for shipping zone. */
		readonly channels: ReadonlyArray<Channel>;
		/** List of countries available for the method. */
		readonly countries: ReadonlyArray<CountryDisplay>;
		readonly default: Scalars['Boolean'];
		/** Description of a shipping zone. */
		readonly description?: Maybe<Scalars['String']>;
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** Lowest and highest prices for the shipping. */
		readonly priceRange?: Maybe<MoneyRange>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** List of shipping methods available for orders shipped to countries within this shipping zone. */
		readonly shippingMethods?: Maybe<ReadonlyArray<ShippingMethodType>>;
		/** List of warehouses for shipping zone. */
		readonly warehouses: ReadonlyArray<Warehouse>;
	};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZoneMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZonePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneBulkDelete = {
	readonly __typename?: 'ShippingZoneBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
};

export type ShippingZoneCountableConnection = {
	readonly __typename?: 'ShippingZoneCountableConnection';
	readonly edges: ReadonlyArray<ShippingZoneCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCountableEdge = {
	readonly __typename?: 'ShippingZoneCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: ShippingZone;
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneCreate = {
	readonly __typename?: 'ShippingZoneCreate';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
	/** List of channels to assign to the shipping zone. */
	readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of warehouses to assign to a shipping zone */
	readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of countries in this shipping zone. */
	readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/** Default shipping zone will be used for countries not covered by other zones. */
	readonly default?: InputMaybe<Scalars['Boolean']>;
	/** Description of the shipping zone. */
	readonly description?: InputMaybe<Scalars['String']>;
	/** Shipping zone's name. Visible only to the staff. */
	readonly name?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneCreated = Event & {
	readonly __typename?: 'ShippingZoneCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping zone the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingZoneCreatedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneDelete = {
	readonly __typename?: 'ShippingZoneDelete';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneDeleted = Event & {
	readonly __typename?: 'ShippingZoneDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping zone the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingZoneDeletedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneFilterInput = {
	readonly channels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type ShippingZoneUpdate = {
	readonly __typename?: 'ShippingZoneUpdate';
	readonly errors: ReadonlyArray<ShippingError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shippingErrors: ReadonlyArray<ShippingError>;
	readonly shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
	/** List of channels to assign to the shipping zone. */
	readonly addChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of warehouses to assign to a shipping zone */
	readonly addWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of countries in this shipping zone. */
	readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/** Default shipping zone will be used for countries not covered by other zones. */
	readonly default?: InputMaybe<Scalars['Boolean']>;
	/** Description of the shipping zone. */
	readonly description?: InputMaybe<Scalars['String']>;
	/** Shipping zone's name. Visible only to the staff. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** List of channels to unassign from the shipping zone. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** List of warehouses to unassign from a shipping zone */
	readonly removeWarehouses?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export type ShippingZoneUpdated = Event & {
	readonly __typename?: 'ShippingZoneUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The shipping zone the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly shippingZone?: Maybe<ShippingZone>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type ShippingZoneUpdatedShippingZoneArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
	readonly __typename?: 'Shop';
	/**
	 * Enable automatic fulfillment for all digital products.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>;
	/** List of available external authentications. */
	readonly availableExternalAuthentications: ReadonlyArray<ExternalAuthentication>;
	/** List of available payment gateways. */
	readonly availablePaymentGateways: ReadonlyArray<PaymentGateway>;
	/** Shipping methods that are available for the shop. */
	readonly availableShippingMethods?: Maybe<ReadonlyArray<ShippingMethod>>;
	/**
	 * List of all currencies supported by shop's channels.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
	 */
	readonly channelCurrencies: ReadonlyArray<Scalars['String']>;
	/** Charge taxes on shipping. */
	readonly chargeTaxesOnShipping: Scalars['Boolean'];
	/** Company address. */
	readonly companyAddress?: Maybe<Address>;
	/** List of countries available in the shop. */
	readonly countries: ReadonlyArray<CountryDisplay>;
	/** URL of a view where customers can set their password. */
	readonly customerSetPasswordUrl?: Maybe<Scalars['String']>;
	/** Shop's default country. */
	readonly defaultCountry?: Maybe<CountryDisplay>;
	/**
	 * Default number of max downloads per digital content URL.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>;
	/**
	 * Default number of days which digital content URL will be valid.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>;
	/**
	 * Default shop's email sender's address.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly defaultMailSenderAddress?: Maybe<Scalars['String']>;
	/**
	 * Default shop's email sender's name.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly defaultMailSenderName?: Maybe<Scalars['String']>;
	/** Default weight unit. */
	readonly defaultWeightUnit?: Maybe<WeightUnitsEnum>;
	/** Shop's description. */
	readonly description?: Maybe<Scalars['String']>;
	/** Display prices with tax in store. */
	readonly displayGrossPrices: Scalars['Boolean'];
	/** Shop's domain data. */
	readonly domain: Domain;
	/**
	 * Allow to approve fulfillments which are unpaid.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly fulfillmentAllowUnpaid: Scalars['Boolean'];
	/**
	 * Automatically approve all new fulfillments.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly fulfillmentAutoApprove: Scalars['Boolean'];
	/** Header text. */
	readonly headerText?: Maybe<Scalars['String']>;
	/** Include taxes in prices. */
	readonly includeTaxesInPrices: Scalars['Boolean'];
	/** List of the shops's supported languages. */
	readonly languages: ReadonlyArray<LanguageDisplay>;
	/**
	 * Default number of maximum line quantity in single checkout (per single checkout line).
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly limitQuantityPerCheckout?: Maybe<Scalars['Int']>;
	/**
	 * Resource limitations and current usage if any set for a shop
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
	 */
	readonly limits: LimitInfo;
	/** Shop's name. */
	readonly name: Scalars['String'];
	/** List of available permissions. */
	readonly permissions: ReadonlyArray<Permission>;
	/** List of possible phone prefixes. */
	readonly phonePrefixes: ReadonlyArray<Scalars['String']>;
	/**
	 * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>;
	/**
	 * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>;
	/**
	 * List of staff notification recipients.
	 *
	 * Requires one of the following permissions: MANAGE_SETTINGS.
	 */
	readonly staffNotificationRecipients?: Maybe<
		ReadonlyArray<StaffNotificationRecipient>
	>;
	/** Enable inventory tracking. */
	readonly trackInventoryByDefault?: Maybe<Scalars['Boolean']>;
	/** Returns translated shop fields for the given language code. */
	readonly translation?: Maybe<ShopTranslation>;
	/**
	 * Saleor API version.
	 *
	 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
	 */
	readonly version: Scalars['String'];
};

/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
	channel?: InputMaybe<Scalars['String']>;
	currency?: InputMaybe<Scalars['String']>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
	address?: InputMaybe<AddressInput>;
	channel: Scalars['String'];
};

/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
	filter?: InputMaybe<CountryFilterInput>;
	languageCode?: InputMaybe<LanguageCodeEnum>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopAddressUpdate = {
	readonly __typename?: 'ShopAddressUpdate';
	readonly errors: ReadonlyArray<ShopError>;
	/** Updated shop. */
	readonly shop?: Maybe<Shop>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopDomainUpdate = {
	readonly __typename?: 'ShopDomainUpdate';
	readonly errors: ReadonlyArray<ShopError>;
	/** Updated shop. */
	readonly shop?: Maybe<Shop>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopError = {
	readonly __typename?: 'ShopError';
	/** The error code. */
	readonly code: ShopErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ShopErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopFetchTaxRates = {
	readonly __typename?: 'ShopFetchTaxRates';
	readonly errors: ReadonlyArray<ShopError>;
	/** Updated shop. */
	readonly shop?: Maybe<Shop>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopSettingsInput = {
	/** Enable automatic fulfillment for all digital products. */
	readonly automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']>;
	/** Charge taxes on shipping. */
	readonly chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']>;
	/** URL of a view where customers can set their password. */
	readonly customerSetPasswordUrl?: InputMaybe<Scalars['String']>;
	/** Default number of max downloads per digital content URL. */
	readonly defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']>;
	/** Default number of days which digital content URL will be valid. */
	readonly defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']>;
	/** Default email sender's address. */
	readonly defaultMailSenderAddress?: InputMaybe<Scalars['String']>;
	/** Default email sender's name. */
	readonly defaultMailSenderName?: InputMaybe<Scalars['String']>;
	/** Default weight unit. */
	readonly defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
	/** SEO description. */
	readonly description?: InputMaybe<Scalars['String']>;
	/** Display prices with tax in store. */
	readonly displayGrossPrices?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Enable ability to approve fulfillments which are unpaid.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly fulfillmentAllowUnpaid?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Enable automatic approval of all new fulfillments.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly fulfillmentAutoApprove?: InputMaybe<Scalars['Boolean']>;
	/** Header text. */
	readonly headerText?: InputMaybe<Scalars['String']>;
	/** Include taxes in prices. */
	readonly includeTaxesInPrices?: InputMaybe<Scalars['Boolean']>;
	/**
	 * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly limitQuantityPerCheckout?: InputMaybe<Scalars['Int']>;
	/**
	 * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly reserveStockDurationAnonymousUser?: InputMaybe<Scalars['Int']>;
	/**
	 * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars['Int']>;
	/** Enable inventory tracking. */
	readonly trackInventoryByDefault?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ShopSettingsTranslate = {
	readonly __typename?: 'ShopSettingsTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	/** Updated shop settings. */
	readonly shop?: Maybe<Shop>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
};

export type ShopSettingsTranslationInput = {
	readonly description?: InputMaybe<Scalars['String']>;
	readonly headerText?: InputMaybe<Scalars['String']>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type ShopSettingsUpdate = {
	readonly __typename?: 'ShopSettingsUpdate';
	readonly errors: ReadonlyArray<ShopError>;
	/** Updated shop. */
	readonly shop?: Maybe<Shop>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
};

export type ShopTranslation = Node & {
	readonly __typename?: 'ShopTranslation';
	readonly description: Scalars['String'];
	readonly headerText: Scalars['String'];
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
};

export type SiteDomainInput = {
	/** Domain name for shop. */
	readonly domain?: InputMaybe<Scalars['String']>;
	/** Shop site name. */
	readonly name?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes staff users.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffBulkDelete = {
	readonly __typename?: 'StaffBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<StaffError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly staffErrors: ReadonlyArray<StaffError>;
};

/**
 * Creates a new staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffCreate = {
	readonly __typename?: 'StaffCreate';
	readonly errors: ReadonlyArray<StaffError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly staffErrors: ReadonlyArray<StaffError>;
	readonly user?: Maybe<User>;
};

export type StaffCreateInput = {
	/** List of permission group IDs to which user should be assigned. */
	readonly addGroups?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** The unique email address of the user. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User account is active. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** A note about the user. */
	readonly note?: InputMaybe<Scalars['String']>;
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	readonly redirectUrl?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffDelete = {
	readonly __typename?: 'StaffDelete';
	readonly errors: ReadonlyArray<StaffError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly staffErrors: ReadonlyArray<StaffError>;
	readonly user?: Maybe<User>;
};

export type StaffError = {
	readonly __typename?: 'StaffError';
	/** A type of address that causes the error. */
	readonly addressType?: Maybe<AddressTypeEnum>;
	/** The error code. */
	readonly code: AccountErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** List of permission group IDs which cause the error. */
	readonly groups?: Maybe<ReadonlyArray<Scalars['ID']>>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
	/** List of permissions which causes the error. */
	readonly permissions?: Maybe<ReadonlyArray<PermissionEnum>>;
	/** List of user IDs which causes the error. */
	readonly users?: Maybe<ReadonlyArray<Scalars['ID']>>;
};

export enum StaffMemberStatus {
	/** User account has been activated. */
	Active = 'ACTIVE',
	/** User account has not been activated yet. */
	Deactivated = 'DEACTIVATED',
}

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
	readonly __typename?: 'StaffNotificationRecipient';
	/** Determines if a notification active. */
	readonly active?: Maybe<Scalars['Boolean']>;
	/** Returns email address of a user subscribed to email notifications. */
	readonly email?: Maybe<Scalars['String']>;
	readonly id: Scalars['ID'];
	/** Returns a user subscribed to email notifications. */
	readonly user?: Maybe<User>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientCreate = {
	readonly __typename?: 'StaffNotificationRecipientCreate';
	readonly errors: ReadonlyArray<ShopError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
	readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientDelete = {
	readonly __typename?: 'StaffNotificationRecipientDelete';
	readonly errors: ReadonlyArray<ShopError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
	readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
	/** Determines if a notification active. */
	readonly active?: InputMaybe<Scalars['Boolean']>;
	/** Email address of a user subscribed to email notifications. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** The ID of the user subscribed to email notifications.. */
	readonly user?: InputMaybe<Scalars['ID']>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type StaffNotificationRecipientUpdate = {
	readonly __typename?: 'StaffNotificationRecipientUpdate';
	readonly errors: ReadonlyArray<ShopError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly shopErrors: ReadonlyArray<ShopError>;
	readonly staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

/**
 * Updates an existing staff user.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 */
export type StaffUpdate = {
	readonly __typename?: 'StaffUpdate';
	readonly errors: ReadonlyArray<StaffError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly staffErrors: ReadonlyArray<StaffError>;
	readonly user?: Maybe<User>;
};

export type StaffUpdateInput = {
	/** List of permission group IDs to which user should be assigned. */
	readonly addGroups?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** The unique email address of the user. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User account is active. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** A note about the user. */
	readonly note?: InputMaybe<Scalars['String']>;
	/** List of permission group IDs from which user should be unassigned. */
	readonly removeGroups?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

export type StaffUserInput = {
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly status?: InputMaybe<StaffMemberStatus>;
};

/** Represents stock. */
export type Stock = Node & {
	readonly __typename?: 'Stock';
	readonly id: Scalars['ID'];
	readonly productVariant: ProductVariant;
	/**
	 * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly quantity: Scalars['Int'];
	/**
	 * Quantity allocated for orders.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly quantityAllocated: Scalars['Int'];
	/**
	 * Quantity reserved for checkouts.
	 *
	 * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
	 */
	readonly quantityReserved: Scalars['Int'];
	readonly warehouse: Warehouse;
};

export enum StockAvailability {
	InStock = 'IN_STOCK',
	OutOfStock = 'OUT_OF_STOCK',
}

export type StockCountableConnection = {
	readonly __typename?: 'StockCountableConnection';
	readonly edges: ReadonlyArray<StockCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type StockCountableEdge = {
	readonly __typename?: 'StockCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Stock;
};

export type StockError = {
	readonly __typename?: 'StockError';
	/** The error code. */
	readonly code: StockErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum StockErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type StockFilterInput = {
	readonly quantity?: InputMaybe<Scalars['Float']>;
	readonly search?: InputMaybe<Scalars['String']>;
};

export type StockInput = {
	/** Quantity of items available for sell. */
	readonly quantity: Scalars['Int'];
	/** Warehouse in which stock is located. */
	readonly warehouse: Scalars['ID'];
};

/** Enum representing the type of a payment storage in a gateway. */
export enum StorePaymentMethodEnum {
	/** Storage is disabled. The payment is not stored. */
	None = 'NONE',
	/** Off session storage type. The payment is stored to be reused even if the customer is absent. */
	OffSession = 'OFF_SESSION',
	/** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
	OnSession = 'ON_SESSION',
}

export type Subscription = {
	readonly __typename?: 'Subscription';
	/**
	 * Look up subscription event.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly event?: Maybe<Event>;
};

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
	readonly __typename?: 'TaxType';
	/** Description of the tax type. */
	readonly description?: Maybe<Scalars['String']>;
	/** External tax code used to identify given tax group. */
	readonly taxCode?: Maybe<Scalars['String']>;
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
	readonly __typename?: 'TaxedMoney';
	/** Currency code. */
	readonly currency: Scalars['String'];
	/** Amount of money including taxes. */
	readonly gross: Money;
	/** Amount of money without taxes. */
	readonly net: Money;
	/** Amount of taxes. */
	readonly tax: Money;
};

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
	readonly __typename?: 'TaxedMoneyRange';
	/** Lower bound of a price range. */
	readonly start?: Maybe<TaxedMoney>;
	/** Upper bound of a price range. */
	readonly stop?: Maybe<TaxedMoney>;
};

export type TimePeriod = {
	readonly __typename?: 'TimePeriod';
	/** The length of the period. */
	readonly amount: Scalars['Int'];
	/** The type of the period. */
	readonly type: TimePeriodTypeEnum;
};

export type TimePeriodInputType = {
	/** The length of the period. */
	readonly amount: Scalars['Int'];
	/** The type of the period. */
	readonly type: TimePeriodTypeEnum;
};

/** An enumeration. */
export enum TimePeriodTypeEnum {
	Day = 'DAY',
	Month = 'MONTH',
	Week = 'WEEK',
	Year = 'YEAR',
}

/** An object representing a single payment. */
export type Transaction = Node & {
	readonly __typename?: 'Transaction';
	/** Total amount of the transaction. */
	readonly amount?: Maybe<Money>;
	readonly created: Scalars['DateTime'];
	readonly error?: Maybe<Scalars['String']>;
	readonly gatewayResponse: Scalars['JSONString'];
	readonly id: Scalars['ID'];
	readonly isSuccess: Scalars['Boolean'];
	readonly kind: TransactionKind;
	readonly payment: Payment;
	readonly token: Scalars['String'];
};

export type TransactionAction = {
	readonly __typename?: 'TransactionAction';
	/** Determines the action type. */
	readonly actionType: TransactionActionEnum;
	/** Transaction request amount. Null when action type is VOID. */
	readonly amount?: Maybe<Scalars['PositiveDecimal']>;
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     VOID - Represents a void action.
 *
 */
export enum TransactionActionEnum {
	Charge = 'CHARGE',
	Refund = 'REFUND',
	Void = 'VOID',
}

export type TransactionActionRequest = Event & {
	readonly __typename?: 'TransactionActionRequest';
	/**
	 * Requested action data.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly action: TransactionAction;
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * Look up a transaction.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly transaction?: Maybe<TransactionItem>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

/**
 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionCreate = {
	readonly __typename?: 'TransactionCreate';
	readonly errors: ReadonlyArray<TransactionCreateError>;
	readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionCreateError = {
	readonly __typename?: 'TransactionCreateError';
	/** The error code. */
	readonly code: TransactionCreateErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum TransactionCreateErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	IncorrectCurrency = 'INCORRECT_CURRENCY',
	Invalid = 'INVALID',
	MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
	NotFound = 'NOT_FOUND',
}

export type TransactionCreateInput = {
	/** Amount authorized by this transaction. */
	readonly amountAuthorized?: InputMaybe<MoneyInput>;
	/** Amount charged by this transaction. */
	readonly amountCharged?: InputMaybe<MoneyInput>;
	/** Amount refunded by this transaction. */
	readonly amountRefunded?: InputMaybe<MoneyInput>;
	/** Amount voided by this transaction. */
	readonly amountVoided?: InputMaybe<MoneyInput>;
	/** List of all possible actions for the transaction */
	readonly availableActions?: InputMaybe<ReadonlyArray<TransactionActionEnum>>;
	/** Payment public metadata. */
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** Payment private metadata. */
	readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** Reference of the transaction. */
	readonly reference?: InputMaybe<Scalars['String']>;
	/** Status of the transaction. */
	readonly status: Scalars['String'];
	/** Payment type used for this transaction. */
	readonly type: Scalars['String'];
};

/** Represents transaction's event. */
export type TransactionEvent = Node & {
	readonly __typename?: 'TransactionEvent';
	readonly createdAt: Scalars['DateTime'];
	/** The ID of the object. */
	readonly id: Scalars['ID'];
	/** Name of the transaction's event. */
	readonly name?: Maybe<Scalars['String']>;
	/** Reference of transaction's event. */
	readonly reference: Scalars['String'];
	/** Status of transaction's event. */
	readonly status: TransactionStatus;
};

export type TransactionEventInput = {
	/** Name of the transaction. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Reference of the transaction. */
	readonly reference?: InputMaybe<Scalars['String']>;
	/** Current status of the payment transaction. */
	readonly status: TransactionStatus;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItem = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'TransactionItem';
		/** List of actions that can be performed in the current state of a payment. */
		readonly actions: ReadonlyArray<TransactionActionEnum>;
		/** Total amount authorized for this payment. */
		readonly authorizedAmount: Money;
		/** Total amount charged for this payment. */
		readonly chargedAmount: Money;
		readonly createdAt: Scalars['DateTime'];
		/** List of all transaction's events. */
		readonly events: ReadonlyArray<TransactionEvent>;
		/** The ID of the object. */
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly modifiedAt: Scalars['DateTime'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** Reference of transaction. */
		readonly reference: Scalars['String'];
		/** Total amount refunded for this payment. */
		readonly refundedAmount: Money;
		/** Status of transaction. */
		readonly status: Scalars['String'];
		/** Type of transaction. */
		readonly type: Scalars['String'];
		/** Total amount voided for this payment. */
		readonly voidedAmount: Money;
	};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldArgs = {
	key: Scalars['String'];
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionItemPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** An enumeration. */
export enum TransactionKind {
	ActionToConfirm = 'ACTION_TO_CONFIRM',
	Auth = 'AUTH',
	Cancel = 'CANCEL',
	Capture = 'CAPTURE',
	Confirm = 'CONFIRM',
	External = 'EXTERNAL',
	Pending = 'PENDING',
	Refund = 'REFUND',
	RefundOngoing = 'REFUND_ONGOING',
	Void = 'VOID',
}

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS, MANAGE_ORDERS.
 */
export type TransactionRequestAction = {
	readonly __typename?: 'TransactionRequestAction';
	readonly errors: ReadonlyArray<TransactionRequestActionError>;
	readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionRequestActionError = {
	readonly __typename?: 'TransactionRequestActionError';
	/** The error code. */
	readonly code: TransactionRequestActionErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum TransactionRequestActionErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	MissingTransactionActionRequestWebhook = 'MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK',
	NotFound = 'NOT_FOUND',
}

/** An enumeration. */
export enum TransactionStatus {
	Failure = 'FAILURE',
	Pending = 'PENDING',
	Success = 'SUCCESS',
}

/**
 * Create transaction for checkout or order. Requires the following permissions: AUTHENTICATED_APP and HANDLE_PAYMENTS.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type TransactionUpdate = {
	readonly __typename?: 'TransactionUpdate';
	readonly errors: ReadonlyArray<TransactionUpdateError>;
	readonly transaction?: Maybe<TransactionItem>;
};

export type TransactionUpdateError = {
	readonly __typename?: 'TransactionUpdateError';
	/** The error code. */
	readonly code: TransactionUpdateErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum TransactionUpdateErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	IncorrectCurrency = 'INCORRECT_CURRENCY',
	Invalid = 'INVALID',
	MetadataKeyRequired = 'METADATA_KEY_REQUIRED',
	NotFound = 'NOT_FOUND',
}

export type TransactionUpdateInput = {
	/** Amount authorized by this transaction. */
	readonly amountAuthorized?: InputMaybe<MoneyInput>;
	/** Amount charged by this transaction. */
	readonly amountCharged?: InputMaybe<MoneyInput>;
	/** Amount refunded by this transaction. */
	readonly amountRefunded?: InputMaybe<MoneyInput>;
	/** Amount voided by this transaction. */
	readonly amountVoided?: InputMaybe<MoneyInput>;
	/** List of all possible actions for the transaction */
	readonly availableActions?: InputMaybe<ReadonlyArray<TransactionActionEnum>>;
	/** Payment public metadata. */
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** Payment private metadata. */
	readonly privateMetadata?: InputMaybe<ReadonlyArray<MetadataInput>>;
	/** Reference of the transaction. */
	readonly reference?: InputMaybe<Scalars['String']>;
	/** Status of the transaction. */
	readonly status?: InputMaybe<Scalars['String']>;
	/** Payment type used for this transaction. */
	readonly type?: InputMaybe<Scalars['String']>;
};

export type TranslatableItem =
	| AttributeTranslatableContent
	| AttributeValueTranslatableContent
	| CategoryTranslatableContent
	| CollectionTranslatableContent
	| MenuItemTranslatableContent
	| PageTranslatableContent
	| ProductTranslatableContent
	| ProductVariantTranslatableContent
	| SaleTranslatableContent
	| ShippingMethodTranslatableContent
	| VoucherTranslatableContent;

export type TranslatableItemConnection = {
	readonly __typename?: 'TranslatableItemConnection';
	readonly edges: ReadonlyArray<TranslatableItemEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type TranslatableItemEdge = {
	readonly __typename?: 'TranslatableItemEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: TranslatableItem;
};

export enum TranslatableKinds {
	Attribute = 'ATTRIBUTE',
	AttributeValue = 'ATTRIBUTE_VALUE',
	Category = 'CATEGORY',
	Collection = 'COLLECTION',
	MenuItem = 'MENU_ITEM',
	Page = 'PAGE',
	Product = 'PRODUCT',
	Sale = 'SALE',
	ShippingMethod = 'SHIPPING_METHOD',
	Variant = 'VARIANT',
	Voucher = 'VOUCHER',
}

export type TranslationCreated = Event & {
	readonly __typename?: 'TranslationCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The translation the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly translation?: Maybe<TranslationTypes>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type TranslationError = {
	readonly __typename?: 'TranslationError';
	/** The error code. */
	readonly code: TranslationErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum TranslationErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
}

export type TranslationInput = {
	/**
	 * Translated description.
	 *
	 * Rich text format. For reference see https://editorjs.io/
	 */
	readonly description?: InputMaybe<Scalars['JSONString']>;
	readonly name?: InputMaybe<Scalars['String']>;
	readonly seoDescription?: InputMaybe<Scalars['String']>;
	readonly seoTitle?: InputMaybe<Scalars['String']>;
};

export type TranslationTypes =
	| AttributeTranslation
	| AttributeValueTranslation
	| CategoryTranslation
	| CollectionTranslation
	| MenuItemTranslation
	| PageTranslation
	| ProductTranslation
	| ProductVariantTranslation
	| SaleTranslation
	| ShippingMethodTranslation
	| VoucherTranslation;

export type TranslationUpdated = Event & {
	readonly __typename?: 'TranslationUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/**
	 * The translation the event relates to.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly translation?: Maybe<TranslationTypes>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
};

export type UpdateInvoiceInput = {
	/** Invoice number */
	readonly number?: InputMaybe<Scalars['String']>;
	/** URL of an invoice to download. */
	readonly url?: InputMaybe<Scalars['String']>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type UpdateMetadata = {
	readonly __typename?: 'UpdateMetadata';
	readonly errors: ReadonlyArray<MetadataError>;
	readonly item?: Maybe<ObjectWithMetadata>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly metadataErrors: ReadonlyArray<MetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type UpdatePrivateMetadata = {
	readonly __typename?: 'UpdatePrivateMetadata';
	readonly errors: ReadonlyArray<MetadataError>;
	readonly item?: Maybe<ObjectWithMetadata>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly metadataErrors: ReadonlyArray<MetadataError>;
};

export type UploadError = {
	readonly __typename?: 'UploadError';
	/** The error code. */
	readonly code: UploadErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum UploadErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
}

/** Represents user data. */
export type User = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'User';
		/** List of all user's addresses. */
		readonly addresses?: Maybe<ReadonlyArray<Address>>;
		readonly avatar?: Maybe<Image>;
		/**
		 * Returns the last open checkout of this user.
		 * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
		 */
		readonly checkout?: Maybe<Checkout>;
		/** Returns the checkout ID's assigned to this user. */
		readonly checkoutIds?: Maybe<ReadonlyArray<Scalars['ID']>>;
		/**
		 * Returns the checkout UUID's assigned to this user.
		 * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
		 */
		readonly checkoutTokens?: Maybe<ReadonlyArray<Scalars['UUID']>>;
		readonly dateJoined: Scalars['DateTime'];
		readonly defaultBillingAddress?: Maybe<Address>;
		readonly defaultShippingAddress?: Maybe<Address>;
		/** List of user's permission groups which user can manage. */
		readonly editableGroups?: Maybe<ReadonlyArray<Group>>;
		readonly email: Scalars['String'];
		/**
		 * List of events associated with the user.
		 *
		 * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
		 */
		readonly events?: Maybe<ReadonlyArray<CustomerEvent>>;
		readonly firstName: Scalars['String'];
		/** List of the user gift cards. */
		readonly giftCards?: Maybe<GiftCardCountableConnection>;
		readonly id: Scalars['ID'];
		readonly isActive: Scalars['Boolean'];
		readonly isStaff: Scalars['Boolean'];
		/** User language code. */
		readonly languageCode: LanguageCodeEnum;
		readonly lastLogin?: Maybe<Scalars['DateTime']>;
		readonly lastName: Scalars['String'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		/**
		 * A note about the customer.
		 *
		 * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
		 */
		readonly note?: Maybe<Scalars['String']>;
		/** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
		readonly orders?: Maybe<OrderCountableConnection>;
		/** List of user's permission groups. */
		readonly permissionGroups?: Maybe<ReadonlyArray<Group>>;
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/** List of stored payment sources. */
		readonly storedPaymentSources?: Maybe<ReadonlyArray<PaymentSource>>;
		readonly updatedAt: Scalars['DateTime'];
		/** List of user's permissions. */
		readonly userPermissions?: Maybe<ReadonlyArray<UserPermission>>;
	};

/** Represents user data. */
export type UserAvatarArgs = {
	size?: InputMaybe<Scalars['Int']>;
};

/** Represents user data. */
export type UserCheckoutIdsArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents user data. */
export type UserCheckoutTokensArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents user data. */
export type UserGiftCardsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents user data. */
export type UserMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents user data. */
export type UserMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents user data. */
export type UserOrdersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Represents user data. */
export type UserPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents user data. */
export type UserPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarDelete = {
	readonly __typename?: 'UserAvatarDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** An updated user instance. */
	readonly user?: Maybe<User>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type UserAvatarUpdate = {
	readonly __typename?: 'UserAvatarUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** An updated user instance. */
	readonly user?: Maybe<User>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type UserBulkSetActive = {
	readonly __typename?: 'UserBulkSetActive';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	readonly errors: ReadonlyArray<AccountError>;
};

export type UserCountableConnection = {
	readonly __typename?: 'UserCountableConnection';
	readonly edges: ReadonlyArray<UserCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type UserCountableEdge = {
	readonly __typename?: 'UserCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: User;
};

export type UserCreateInput = {
	/** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Billing address of the customer. */
	readonly defaultBillingAddress?: InputMaybe<AddressInput>;
	/** Shipping address of the customer. */
	readonly defaultShippingAddress?: InputMaybe<AddressInput>;
	/** The unique email address of the user. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Given name. */
	readonly firstName?: InputMaybe<Scalars['String']>;
	/** User account is active. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** User language code. */
	readonly languageCode?: InputMaybe<LanguageCodeEnum>;
	/** Family name. */
	readonly lastName?: InputMaybe<Scalars['String']>;
	/** A note about the user. */
	readonly note?: InputMaybe<Scalars['String']>;
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	readonly redirectUrl?: InputMaybe<Scalars['String']>;
};

export type UserPermission = {
	readonly __typename?: 'UserPermission';
	/** Internal code for permission. */
	readonly code: PermissionEnum;
	/** Describe action(s) allowed to do by permission. */
	readonly name: Scalars['String'];
	/** List of user permission groups which contains this permission. */
	readonly sourcePermissionGroups?: Maybe<ReadonlyArray<Group>>;
};

export type UserPermissionSourcePermissionGroupsArgs = {
	userId: Scalars['ID'];
};

export enum UserSortField {
	/** Sort users by created at. */
	CreatedAt = 'CREATED_AT',
	/** Sort users by email. */
	Email = 'EMAIL',
	/** Sort users by first name. */
	FirstName = 'FIRST_NAME',
	/** Sort users by last modified at. */
	LastModifiedAt = 'LAST_MODIFIED_AT',
	/** Sort users by last name. */
	LastName = 'LAST_NAME',
	/** Sort users by order count. */
	OrderCount = 'ORDER_COUNT',
}

export type UserSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort users by the selected field. */
	readonly field: UserSortField;
};

/** Represents a VAT rate for a country. */
export type Vat = {
	readonly __typename?: 'VAT';
	/** Country code. */
	readonly countryCode: Scalars['String'];
	/** Country's VAT rate exceptions for specific types of goods. */
	readonly reducedRates: ReadonlyArray<ReducedRate>;
	/** Standard VAT rate in percent. */
	readonly standardRate?: Maybe<Scalars['Float']>;
};

export enum VariantAttributeScope {
	All = 'ALL',
	NotVariantSelection = 'NOT_VARIANT_SELECTION',
	VariantSelection = 'VARIANT_SELECTION',
}

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaAssign = {
	readonly __typename?: 'VariantMediaAssign';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ProductMedia>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productVariant?: Maybe<ProductVariant>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type VariantMediaUnassign = {
	readonly __typename?: 'VariantMediaUnassign';
	readonly errors: ReadonlyArray<ProductError>;
	readonly media?: Maybe<ProductMedia>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly productErrors: ReadonlyArray<ProductError>;
	readonly productVariant?: Maybe<ProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
	readonly __typename?: 'VariantPricingInfo';
	/** The discount amount if in sale (null otherwise). */
	readonly discount?: Maybe<TaxedMoney>;
	/** The discount amount in the local currency. */
	readonly discountLocalCurrency?: Maybe<TaxedMoney>;
	/** Whether it is in sale or not. */
	readonly onSale?: Maybe<Scalars['Boolean']>;
	/** The price, with any discount subtracted. */
	readonly price?: Maybe<TaxedMoney>;
	/** The discounted price in the local currency. */
	readonly priceLocalCurrency?: Maybe<TaxedMoney>;
	/** The price without any discount. */
	readonly priceUndiscounted?: Maybe<TaxedMoney>;
};

/** Verify JWT token. */
export type VerifyToken = {
	readonly __typename?: 'VerifyToken';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly accountErrors: ReadonlyArray<AccountError>;
	readonly errors: ReadonlyArray<AccountError>;
	/** Determine if token is valid or not. */
	readonly isValid: Scalars['Boolean'];
	/** JWT payload. */
	readonly payload?: Maybe<Scalars['GenericScalar']>;
	/** User assigned to token. */
	readonly user?: Maybe<User>;
};

/** An enumeration. */
export enum VolumeUnitsEnum {
	AcreFt = 'ACRE_FT',
	AcreIn = 'ACRE_IN',
	CubicCentimeter = 'CUBIC_CENTIMETER',
	CubicDecimeter = 'CUBIC_DECIMETER',
	CubicFoot = 'CUBIC_FOOT',
	CubicInch = 'CUBIC_INCH',
	CubicMeter = 'CUBIC_METER',
	CubicMillimeter = 'CUBIC_MILLIMETER',
	CubicYard = 'CUBIC_YARD',
	FlOz = 'FL_OZ',
	Liter = 'LITER',
	Pint = 'PINT',
	Qt = 'QT',
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Voucher';
		readonly applyOncePerCustomer: Scalars['Boolean'];
		readonly applyOncePerOrder: Scalars['Boolean'];
		/** List of categories this voucher applies to. */
		readonly categories?: Maybe<CategoryCountableConnection>;
		/**
		 * List of availability in channels for the voucher.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly channelListings?: Maybe<ReadonlyArray<VoucherChannelListing>>;
		readonly code: Scalars['String'];
		/**
		 * List of collections this voucher applies to.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly collections?: Maybe<CollectionCountableConnection>;
		/** List of countries available for the shipping voucher. */
		readonly countries?: Maybe<ReadonlyArray<CountryDisplay>>;
		/** Currency code for voucher. */
		readonly currency?: Maybe<Scalars['String']>;
		/** Voucher value. */
		readonly discountValue?: Maybe<Scalars['Float']>;
		/** Determines a type of discount for voucher - value or percentage */
		readonly discountValueType: DiscountValueTypeEnum;
		readonly endDate?: Maybe<Scalars['DateTime']>;
		readonly id: Scalars['ID'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly minCheckoutItemsQuantity?: Maybe<Scalars['Int']>;
		/** Minimum order value to apply voucher. */
		readonly minSpent?: Maybe<Money>;
		readonly name?: Maybe<Scalars['String']>;
		readonly onlyForStaff: Scalars['Boolean'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		/**
		 * List of products this voucher applies to.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly products?: Maybe<ProductCountableConnection>;
		readonly startDate: Scalars['DateTime'];
		/** Returns translated voucher fields for the given language code. */
		readonly translation?: Maybe<VoucherTranslation>;
		/** Determines a type of voucher. */
		readonly type: VoucherTypeEnum;
		readonly usageLimit?: Maybe<Scalars['Int']>;
		readonly used: Scalars['Int'];
		/**
		 * List of product variants this voucher applies to.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Requires one of the following permissions: MANAGE_DISCOUNTS.
		 */
		readonly variants?: Maybe<ProductVariantCountableConnection>;
	};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldArgs = {
	key: Scalars['String'];
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherPrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherAddCatalogues = {
	readonly __typename?: 'VoucherAddCatalogues';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** Voucher of which catalogue IDs will be modified. */
	readonly voucher?: Maybe<Voucher>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherBulkDelete = {
	readonly __typename?: 'VoucherBulkDelete';
	/** Returns how many objects were affected. */
	readonly count: Scalars['Int'];
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
};

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
	readonly __typename?: 'VoucherChannelListing';
	readonly channel: Channel;
	readonly currency: Scalars['String'];
	readonly discountValue: Scalars['Float'];
	readonly id: Scalars['ID'];
	readonly minSpent?: Maybe<Money>;
};

export type VoucherChannelListingAddInput = {
	/** ID of a channel. */
	readonly channelId: Scalars['ID'];
	/** Value of the voucher. */
	readonly discountValue?: InputMaybe<Scalars['PositiveDecimal']>;
	/** Min purchase amount required to apply the voucher. */
	readonly minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']>;
};

export type VoucherChannelListingInput = {
	/** List of channels to which the voucher should be assigned. */
	readonly addChannels?: InputMaybe<
		ReadonlyArray<VoucherChannelListingAddInput>
	>;
	/** List of channels from which the voucher should be unassigned. */
	readonly removeChannels?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherChannelListingUpdate = {
	readonly __typename?: 'VoucherChannelListingUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** An updated voucher instance. */
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherCountableConnection = {
	readonly __typename?: 'VoucherCountableConnection';
	readonly edges: ReadonlyArray<VoucherCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type VoucherCountableEdge = {
	readonly __typename?: 'VoucherCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Voucher;
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherCreate = {
	readonly __typename?: 'VoucherCreate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherCreated = Event & {
	readonly __typename?: 'VoucherCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The voucher the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherCreatedVoucherArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherDelete = {
	readonly __typename?: 'VoucherDelete';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherDeleted = Event & {
	readonly __typename?: 'VoucherDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The voucher the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherDeletedVoucherArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

export enum VoucherDiscountType {
	Fixed = 'FIXED',
	Percentage = 'PERCENTAGE',
	Shipping = 'SHIPPING',
}

export type VoucherFilterInput = {
	readonly discountType?: InputMaybe<ReadonlyArray<VoucherDiscountType>>;
	readonly metadata?: InputMaybe<ReadonlyArray<MetadataFilter>>;
	readonly search?: InputMaybe<Scalars['String']>;
	readonly started?: InputMaybe<DateTimeRangeInput>;
	readonly status?: InputMaybe<ReadonlyArray<DiscountStatusEnum>>;
	readonly timesUsed?: InputMaybe<IntRangeInput>;
};

export type VoucherInput = {
	/** Voucher should be applied once per customer. */
	readonly applyOncePerCustomer?: InputMaybe<Scalars['Boolean']>;
	/** Voucher should be applied to the cheapest item or entire order. */
	readonly applyOncePerOrder?: InputMaybe<Scalars['Boolean']>;
	/** Categories discounted by the voucher. */
	readonly categories?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Code to use the voucher. */
	readonly code?: InputMaybe<Scalars['String']>;
	/** Collections discounted by the voucher. */
	readonly collections?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Country codes that can be used with the shipping voucher. */
	readonly countries?: InputMaybe<ReadonlyArray<Scalars['String']>>;
	/** Choices: fixed or percentage. */
	readonly discountValueType?: InputMaybe<DiscountValueTypeEnum>;
	/** End date of the voucher in ISO 8601 format. */
	readonly endDate?: InputMaybe<Scalars['DateTime']>;
	/** Minimal quantity of checkout items required to apply the voucher. */
	readonly minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']>;
	/** Voucher name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Voucher can be used only by staff user. */
	readonly onlyForStaff?: InputMaybe<Scalars['Boolean']>;
	/** Products discounted by the voucher. */
	readonly products?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Start date of the voucher in ISO 8601 format. */
	readonly startDate?: InputMaybe<Scalars['DateTime']>;
	/** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
	readonly type?: InputMaybe<VoucherTypeEnum>;
	/** Limit number of times this voucher can be used in total. */
	readonly usageLimit?: InputMaybe<Scalars['Int']>;
	/**
	 * Variants discounted by the voucher.
	 *
	 * Added in Saleor 3.1.
	 */
	readonly variants?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherRemoveCatalogues = {
	readonly __typename?: 'VoucherRemoveCatalogues';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	/** Voucher of which catalogue IDs will be modified. */
	readonly voucher?: Maybe<Voucher>;
};

export enum VoucherSortField {
	/** Sort vouchers by code. */
	Code = 'CODE',
	/** Sort vouchers by end date. */
	EndDate = 'END_DATE',
	/**
	 * Sort vouchers by minimum spent amount.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
	/** Sort vouchers by start date. */
	StartDate = 'START_DATE',
	/** Sort vouchers by type. */
	Type = 'TYPE',
	/** Sort vouchers by usage limit. */
	UsageLimit = 'USAGE_LIMIT',
	/**
	 * Sort vouchers by value.
	 *
	 * This option requires a channel filter to work as the values can vary between channels.
	 */
	Value = 'VALUE',
}

export type VoucherSortingInput = {
	/**
	 * Specifies the channel in which to sort the data.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
	 */
	readonly channel?: InputMaybe<Scalars['String']>;
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort vouchers by the selected field. */
	readonly field: VoucherSortField;
};

export type VoucherTranslatableContent = Node & {
	readonly __typename?: 'VoucherTranslatableContent';
	readonly id: Scalars['ID'];
	readonly name?: Maybe<Scalars['String']>;
	/** Returns translated voucher fields for the given language code. */
	readonly translation?: Maybe<VoucherTranslation>;
	/**
	 * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
	 *
	 * Requires one of the following permissions: MANAGE_DISCOUNTS.
	 * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
	 */
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherTranslatableContentTranslationArgs = {
	languageCode: LanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type VoucherTranslate = {
	readonly __typename?: 'VoucherTranslate';
	readonly errors: ReadonlyArray<TranslationError>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly translationErrors: ReadonlyArray<TranslationError>;
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
	readonly __typename?: 'VoucherTranslation';
	readonly id: Scalars['ID'];
	/** Translation language. */
	readonly language: LanguageDisplay;
	readonly name?: Maybe<Scalars['String']>;
};

export enum VoucherTypeEnum {
	EntireOrder = 'ENTIRE_ORDER',
	Shipping = 'SHIPPING',
	SpecificProduct = 'SPECIFIC_PRODUCT',
}

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type VoucherUpdate = {
	readonly __typename?: 'VoucherUpdate';
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly discountErrors: ReadonlyArray<DiscountError>;
	readonly errors: ReadonlyArray<DiscountError>;
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherUpdated = Event & {
	readonly __typename?: 'VoucherUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The voucher the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly voucher?: Maybe<Voucher>;
};

export type VoucherUpdatedVoucherArgs = {
	channel?: InputMaybe<Scalars['String']>;
};

/** Represents warehouse. */
export type Warehouse = Node &
	ObjectWithMetadata & {
		readonly __typename?: 'Warehouse';
		readonly address: Address;
		/**
		 * Click and collect options: local, all or disabled.
		 *
		 * Added in Saleor 3.1.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly clickAndCollectOption: WarehouseClickAndCollectOptionEnum;
		/**
		 * Warehouse company name.
		 * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
		 */
		readonly companyName: Scalars['String'];
		readonly email: Scalars['String'];
		readonly id: Scalars['ID'];
		readonly isPrivate: Scalars['Boolean'];
		/** List of public metadata items. Can be accessed without permissions. */
		readonly metadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from public metadata.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafield?: Maybe<Scalars['String']>;
		/**
		 * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly metafields?: Maybe<Scalars['Metadata']>;
		readonly name: Scalars['String'];
		/** List of private metadata items. Requires staff permissions to access. */
		readonly privateMetadata: ReadonlyArray<MetadataItem>;
		/**
		 * A single key from private metadata. Requires staff permissions to access.
		 *
		 * Tip: Use GraphQL aliases to fetch multiple keys.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafield?: Maybe<Scalars['String']>;
		/**
		 * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
		 *
		 * Added in Saleor 3.3.
		 *
		 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
		 */
		readonly privateMetafields?: Maybe<Scalars['Metadata']>;
		readonly shippingZones: ShippingZoneCountableConnection;
		readonly slug: Scalars['String'];
	};

/** Represents warehouse. */
export type WarehouseMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents warehouse. */
export type WarehouseMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents warehouse. */
export type WarehousePrivateMetafieldArgs = {
	key: Scalars['String'];
};

/** Represents warehouse. */
export type WarehousePrivateMetafieldsArgs = {
	keys?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
};

/** An enumeration. */
export enum WarehouseClickAndCollectOptionEnum {
	All = 'ALL',
	Disabled = 'DISABLED',
	Local = 'LOCAL',
}

export type WarehouseCountableConnection = {
	readonly __typename?: 'WarehouseCountableConnection';
	readonly edges: ReadonlyArray<WarehouseCountableEdge>;
	/** Pagination data for this connection. */
	readonly pageInfo: PageInfo;
	/** A total count of items in the collection. */
	readonly totalCount?: Maybe<Scalars['Int']>;
};

export type WarehouseCountableEdge = {
	readonly __typename?: 'WarehouseCountableEdge';
	/** A cursor for use in pagination. */
	readonly cursor: Scalars['String'];
	/** The item at the end of the edge. */
	readonly node: Warehouse;
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseCreate = {
	readonly __typename?: 'WarehouseCreate';
	readonly errors: ReadonlyArray<WarehouseError>;
	readonly warehouse?: Maybe<Warehouse>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export type WarehouseCreateInput = {
	/** Address of the warehouse. */
	readonly address: AddressInput;
	/** The email address of the warehouse. */
	readonly email?: InputMaybe<Scalars['String']>;
	/** Warehouse name. */
	readonly name: Scalars['String'];
	/** Shipping zones supported by the warehouse. */
	readonly shippingZones?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	/** Warehouse slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export type WarehouseCreated = Event & {
	readonly __typename?: 'WarehouseCreated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The warehouse the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly warehouse?: Maybe<Warehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseDelete = {
	readonly __typename?: 'WarehouseDelete';
	readonly errors: ReadonlyArray<WarehouseError>;
	readonly warehouse?: Maybe<Warehouse>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export type WarehouseDeleted = Event & {
	readonly __typename?: 'WarehouseDeleted';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The warehouse the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly warehouse?: Maybe<Warehouse>;
};

export type WarehouseError = {
	readonly __typename?: 'WarehouseError';
	/** The error code. */
	readonly code: WarehouseErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum WarehouseErrorCode {
	AlreadyExists = 'ALREADY_EXISTS',
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

export type WarehouseFilterInput = {
	readonly clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
	readonly ids?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
	readonly isPrivate?: InputMaybe<Scalars['Boolean']>;
	readonly search?: InputMaybe<Scalars['String']>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneAssign = {
	readonly __typename?: 'WarehouseShippingZoneAssign';
	readonly errors: ReadonlyArray<WarehouseError>;
	readonly warehouse?: Maybe<Warehouse>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseShippingZoneUnassign = {
	readonly __typename?: 'WarehouseShippingZoneUnassign';
	readonly errors: ReadonlyArray<WarehouseError>;
	readonly warehouse?: Maybe<Warehouse>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export enum WarehouseSortField {
	/** Sort warehouses by name. */
	Name = 'NAME',
}

export type WarehouseSortingInput = {
	/** Specifies the direction in which to sort products. */
	readonly direction: OrderDirection;
	/** Sort warehouses by the selected field. */
	readonly field: WarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type WarehouseUpdate = {
	readonly __typename?: 'WarehouseUpdate';
	readonly errors: ReadonlyArray<WarehouseError>;
	readonly warehouse?: Maybe<Warehouse>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly warehouseErrors: ReadonlyArray<WarehouseError>;
};

export type WarehouseUpdateInput = {
	/** Address of the warehouse. */
	readonly address?: InputMaybe<AddressInput>;
	/**
	 * Click and collect options: local, all or disabled.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly clickAndCollectOption?: InputMaybe<WarehouseClickAndCollectOptionEnum>;
	/** The email address of the warehouse. */
	readonly email?: InputMaybe<Scalars['String']>;
	/**
	 * Visibility of warehouse stocks.
	 *
	 * Added in Saleor 3.1.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly isPrivate?: InputMaybe<Scalars['Boolean']>;
	/** Warehouse name. */
	readonly name?: InputMaybe<Scalars['String']>;
	/** Warehouse slug. */
	readonly slug?: InputMaybe<Scalars['String']>;
};

export type WarehouseUpdated = Event & {
	readonly __typename?: 'WarehouseUpdated';
	/** Time of the event. */
	readonly issuedAt?: Maybe<Scalars['DateTime']>;
	/** The user or application that triggered the event. */
	readonly issuingPrincipal?: Maybe<IssuingPrincipal>;
	/** The application receiving the webhook. */
	readonly recipient?: Maybe<App>;
	/** Saleor version that triggered the event. */
	readonly version?: Maybe<Scalars['String']>;
	/**
	 * The warehouse the event relates to.
	 *
	 * Added in Saleor 3.4.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly warehouse?: Maybe<Warehouse>;
};

/** Webhook. */
export type Webhook = Node & {
	readonly __typename?: 'Webhook';
	readonly app: App;
	/** List of asynchronous webhook events. */
	readonly asyncEvents: ReadonlyArray<WebhookEventAsync>;
	/** Event deliveries. */
	readonly eventDeliveries?: Maybe<EventDeliveryCountableConnection>;
	/**
	 * List of webhook events.
	 * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
	 */
	readonly events: ReadonlyArray<WebhookEvent>;
	readonly id: Scalars['ID'];
	/** Informs if webhook is activated. */
	readonly isActive: Scalars['Boolean'];
	readonly name: Scalars['String'];
	/** Used to create a hash signature with each payload. */
	readonly secretKey?: Maybe<Scalars['String']>;
	/** Used to define payloads for specific events. */
	readonly subscriptionQuery?: Maybe<Scalars['String']>;
	/** List of synchronous webhook events. */
	readonly syncEvents: ReadonlyArray<WebhookEventSync>;
	/** Target URL for webhook. */
	readonly targetUrl: Scalars['String'];
};

/** Webhook. */
export type WebhookEventDeliveriesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	filter?: InputMaybe<EventDeliveryFilterInput>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	sortBy?: InputMaybe<EventDeliverySortingInput>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookCreate = {
	readonly __typename?: 'WebhookCreate';
	readonly errors: ReadonlyArray<WebhookError>;
	readonly webhook?: Maybe<Webhook>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly webhookErrors: ReadonlyArray<WebhookError>;
};

export type WebhookCreateInput = {
	/** ID of the app to which webhook belongs. */
	readonly app?: InputMaybe<Scalars['ID']>;
	/** The asynchronous events that webhook wants to subscribe. */
	readonly asyncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeAsyncEnum>>;
	/**
	 * The events that webhook wants to subscribe.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
	 */
	readonly events?: InputMaybe<ReadonlyArray<WebhookEventTypeEnum>>;
	/** Determine if webhook will be set active or not. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** The name of the webhook. */
	readonly name?: InputMaybe<Scalars['String']>;
	/**
	 * Subscription query used to define a webhook payload.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly query?: InputMaybe<Scalars['String']>;
	/** The secret key used to create a hash signature with each payload. */
	readonly secretKey?: InputMaybe<Scalars['String']>;
	/** The synchronous events that webhook wants to subscribe. */
	readonly syncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeSyncEnum>>;
	/** The url to receive the payload. */
	readonly targetUrl?: InputMaybe<Scalars['String']>;
};

/**
 * Deletes a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type WebhookDelete = {
	readonly __typename?: 'WebhookDelete';
	readonly errors: ReadonlyArray<WebhookError>;
	readonly webhook?: Maybe<Webhook>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly webhookErrors: ReadonlyArray<WebhookError>;
};

export type WebhookError = {
	readonly __typename?: 'WebhookError';
	/** The error code. */
	readonly code: WebhookErrorCode;
	/** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
	readonly field?: Maybe<Scalars['String']>;
	/** The error message. */
	readonly message?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum WebhookErrorCode {
	GraphqlError = 'GRAPHQL_ERROR',
	Invalid = 'INVALID',
	NotFound = 'NOT_FOUND',
	Required = 'REQUIRED',
	Unique = 'UNIQUE',
}

/** Webhook event. */
export type WebhookEvent = {
	readonly __typename?: 'WebhookEvent';
	/** Internal name of the event type. */
	readonly eventType: WebhookEventTypeEnum;
	/** Display name of the event. */
	readonly name: Scalars['String'];
};

/** Asynchronous webhook event. */
export type WebhookEventAsync = {
	readonly __typename?: 'WebhookEventAsync';
	/** Internal name of the event type. */
	readonly eventType: WebhookEventTypeAsyncEnum;
	/** Display name of the event. */
	readonly name: Scalars['String'];
};

/** Synchronous webhook event. */
export type WebhookEventSync = {
	readonly __typename?: 'WebhookEventSync';
	/** Internal name of the event type. */
	readonly eventType: WebhookEventTypeSyncEnum;
	/** Display name of the event. */
	readonly name: Scalars['String'];
};

/** Enum determining type of webhook. */
export enum WebhookEventTypeAsyncEnum {
	/** All the events. */
	AnyEvents = 'ANY_EVENTS',
	/** An app deleted. */
	AppDeleted = 'APP_DELETED',
	/** A new app installed. */
	AppInstalled = 'APP_INSTALLED',
	/** An app status is changed. */
	AppStatusChanged = 'APP_STATUS_CHANGED',
	/** An app updated. */
	AppUpdated = 'APP_UPDATED',
	/** A new category created. */
	CategoryCreated = 'CATEGORY_CREATED',
	/** A category is deleted. */
	CategoryDeleted = 'CATEGORY_DELETED',
	/** A category is updated. */
	CategoryUpdated = 'CATEGORY_UPDATED',
	/** A new channel created. */
	ChannelCreated = 'CHANNEL_CREATED',
	/** A channel is deleted. */
	ChannelDeleted = 'CHANNEL_DELETED',
	/** A channel status is changed. */
	ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
	/** A channel is updated. */
	ChannelUpdated = 'CHANNEL_UPDATED',
	/** A new checkout is created. */
	CheckoutCreated = 'CHECKOUT_CREATED',
	/** A checkout is updated. It also triggers all updates related to the checkout. */
	CheckoutUpdated = 'CHECKOUT_UPDATED',
	/** A new collection is created. */
	CollectionCreated = 'COLLECTION_CREATED',
	/** A collection is deleted. */
	CollectionDeleted = 'COLLECTION_DELETED',
	/** A collection is updated. */
	CollectionUpdated = 'COLLECTION_UPDATED',
	/** A new customer account is created. */
	CustomerCreated = 'CUSTOMER_CREATED',
	/** A customer account is updated. */
	CustomerUpdated = 'CUSTOMER_UPDATED',
	DraftOrderCreated = 'DRAFT_ORDER_CREATED',
	DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
	DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
	/** A fulfillment is cancelled. */
	FulfillmentCanceled = 'FULFILLMENT_CANCELED',
	/** A new fulfillment is created. */
	FulfillmentCreated = 'FULFILLMENT_CREATED',
	/** A new gift card created. */
	GiftCardCreated = 'GIFT_CARD_CREATED',
	/** A gift card is deleted. */
	GiftCardDeleted = 'GIFT_CARD_DELETED',
	/** A gift card status is changed. */
	GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
	/** A gift card is updated. */
	GiftCardUpdated = 'GIFT_CARD_UPDATED',
	/** An invoice is deleted. */
	InvoiceDeleted = 'INVOICE_DELETED',
	/** An invoice for order requested. */
	InvoiceRequested = 'INVOICE_REQUESTED',
	/** Invoice has been sent. */
	InvoiceSent = 'INVOICE_SENT',
	/** A new menu created. */
	MenuCreated = 'MENU_CREATED',
	/** A menu is deleted. */
	MenuDeleted = 'MENU_DELETED',
	/** A new menu item created. */
	MenuItemCreated = 'MENU_ITEM_CREATED',
	/** A menu item is deleted. */
	MenuItemDeleted = 'MENU_ITEM_DELETED',
	/** A menu item is updated. */
	MenuItemUpdated = 'MENU_ITEM_UPDATED',
	/** A menu is updated. */
	MenuUpdated = 'MENU_UPDATED',
	/** User notification triggered. */
	NotifyUser = 'NOTIFY_USER',
	/** An observability event is created. */
	Observability = 'OBSERVABILITY',
	/** An order is cancelled. */
	OrderCancelled = 'ORDER_CANCELLED',
	/** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
	OrderConfirmed = 'ORDER_CONFIRMED',
	/** A new order is placed. */
	OrderCreated = 'ORDER_CREATED',
	/** An order is fulfilled. */
	OrderFulfilled = 'ORDER_FULFILLED',
	/** Payment is made and an order is fully paid. */
	OrderFullyPaid = 'ORDER_FULLY_PAID',
	/** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
	OrderUpdated = 'ORDER_UPDATED',
	/** A new page is created. */
	PageCreated = 'PAGE_CREATED',
	/** A page is deleted. */
	PageDeleted = 'PAGE_DELETED',
	/** A page is updated. */
	PageUpdated = 'PAGE_UPDATED',
	/** A new product is created. */
	ProductCreated = 'PRODUCT_CREATED',
	/** A product is deleted. */
	ProductDeleted = 'PRODUCT_DELETED',
	/** A product is updated. */
	ProductUpdated = 'PRODUCT_UPDATED',
	ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
	/** A new product variant is created. */
	ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
	/** A product variant is deleted. */
	ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
	ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
	/** A product variant is updated. */
	ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
	SaleCreated = 'SALE_CREATED',
	SaleDeleted = 'SALE_DELETED',
	SaleUpdated = 'SALE_UPDATED',
	/** A new shipping price is created. */
	ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
	/** A shipping price is deleted. */
	ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
	/** A shipping price is updated. */
	ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
	/** A new shipping zone is created. */
	ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
	/** A shipping zone is deleted. */
	ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
	/** A shipping zone is updated. */
	ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
	TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
	TranslationCreated = 'TRANSLATION_CREATED',
	TranslationUpdated = 'TRANSLATION_UPDATED',
	/** A new voucher created. */
	VoucherCreated = 'VOUCHER_CREATED',
	/** A voucher is deleted. */
	VoucherDeleted = 'VOUCHER_DELETED',
	/** A voucher is updated. */
	VoucherUpdated = 'VOUCHER_UPDATED',
	/** A new warehouse created. */
	WarehouseCreated = 'WAREHOUSE_CREATED',
	/** A warehouse is deleted. */
	WarehouseDeleted = 'WAREHOUSE_DELETED',
	/** A warehouse is updated. */
	WarehouseUpdated = 'WAREHOUSE_UPDATED',
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeEnum {
	/** All the events. */
	AnyEvents = 'ANY_EVENTS',
	/** An app deleted. */
	AppDeleted = 'APP_DELETED',
	/** A new app installed. */
	AppInstalled = 'APP_INSTALLED',
	/** An app status is changed. */
	AppStatusChanged = 'APP_STATUS_CHANGED',
	/** An app updated. */
	AppUpdated = 'APP_UPDATED',
	/** A new category created. */
	CategoryCreated = 'CATEGORY_CREATED',
	/** A category is deleted. */
	CategoryDeleted = 'CATEGORY_DELETED',
	/** A category is updated. */
	CategoryUpdated = 'CATEGORY_UPDATED',
	/** A new channel created. */
	ChannelCreated = 'CHANNEL_CREATED',
	/** A channel is deleted. */
	ChannelDeleted = 'CHANNEL_DELETED',
	/** A channel status is changed. */
	ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
	/** A channel is updated. */
	ChannelUpdated = 'CHANNEL_UPDATED',
	/** A new checkout is created. */
	CheckoutCreated = 'CHECKOUT_CREATED',
	CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
	/** A checkout is updated. It also triggers all updates related to the checkout. */
	CheckoutUpdated = 'CHECKOUT_UPDATED',
	/** A new collection is created. */
	CollectionCreated = 'COLLECTION_CREATED',
	/** A collection is deleted. */
	CollectionDeleted = 'COLLECTION_DELETED',
	/** A collection is updated. */
	CollectionUpdated = 'COLLECTION_UPDATED',
	/** A new customer account is created. */
	CustomerCreated = 'CUSTOMER_CREATED',
	/** A customer account is updated. */
	CustomerUpdated = 'CUSTOMER_UPDATED',
	DraftOrderCreated = 'DRAFT_ORDER_CREATED',
	DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
	DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
	/** A fulfillment is cancelled. */
	FulfillmentCanceled = 'FULFILLMENT_CANCELED',
	/** A new fulfillment is created. */
	FulfillmentCreated = 'FULFILLMENT_CREATED',
	/** A new gift card created. */
	GiftCardCreated = 'GIFT_CARD_CREATED',
	/** A gift card is deleted. */
	GiftCardDeleted = 'GIFT_CARD_DELETED',
	/** A gift card status is changed. */
	GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
	/** A gift card is updated. */
	GiftCardUpdated = 'GIFT_CARD_UPDATED',
	/** An invoice is deleted. */
	InvoiceDeleted = 'INVOICE_DELETED',
	/** An invoice for order requested. */
	InvoiceRequested = 'INVOICE_REQUESTED',
	/** Invoice has been sent. */
	InvoiceSent = 'INVOICE_SENT',
	/** A new menu created. */
	MenuCreated = 'MENU_CREATED',
	/** A menu is deleted. */
	MenuDeleted = 'MENU_DELETED',
	/** A new menu item created. */
	MenuItemCreated = 'MENU_ITEM_CREATED',
	/** A menu item is deleted. */
	MenuItemDeleted = 'MENU_ITEM_DELETED',
	/** A menu item is updated. */
	MenuItemUpdated = 'MENU_ITEM_UPDATED',
	/** A menu is updated. */
	MenuUpdated = 'MENU_UPDATED',
	/** User notification triggered. */
	NotifyUser = 'NOTIFY_USER',
	/** An observability event is created. */
	Observability = 'OBSERVABILITY',
	/** An order is cancelled. */
	OrderCancelled = 'ORDER_CANCELLED',
	/** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
	OrderConfirmed = 'ORDER_CONFIRMED',
	/** A new order is placed. */
	OrderCreated = 'ORDER_CREATED',
	OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
	/** An order is fulfilled. */
	OrderFulfilled = 'ORDER_FULFILLED',
	/** Payment is made and an order is fully paid. */
	OrderFullyPaid = 'ORDER_FULLY_PAID',
	/** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
	OrderUpdated = 'ORDER_UPDATED',
	/** A new page is created. */
	PageCreated = 'PAGE_CREATED',
	/** A page is deleted. */
	PageDeleted = 'PAGE_DELETED',
	/** A page is updated. */
	PageUpdated = 'PAGE_UPDATED',
	PaymentAuthorize = 'PAYMENT_AUTHORIZE',
	PaymentCapture = 'PAYMENT_CAPTURE',
	PaymentConfirm = 'PAYMENT_CONFIRM',
	PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
	PaymentProcess = 'PAYMENT_PROCESS',
	PaymentRefund = 'PAYMENT_REFUND',
	PaymentVoid = 'PAYMENT_VOID',
	/** A new product is created. */
	ProductCreated = 'PRODUCT_CREATED',
	/** A product is deleted. */
	ProductDeleted = 'PRODUCT_DELETED',
	/** A product is updated. */
	ProductUpdated = 'PRODUCT_UPDATED',
	ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
	/** A new product variant is created. */
	ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
	/** A product variant is deleted. */
	ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
	ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
	/** A product variant is updated. */
	ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
	SaleCreated = 'SALE_CREATED',
	SaleDeleted = 'SALE_DELETED',
	SaleUpdated = 'SALE_UPDATED',
	ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
	/** A new shipping price is created. */
	ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
	/** A shipping price is deleted. */
	ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
	/** A shipping price is updated. */
	ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
	/** A new shipping zone is created. */
	ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
	/** A shipping zone is deleted. */
	ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
	/** A shipping zone is updated. */
	ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
	TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
	TranslationCreated = 'TRANSLATION_CREATED',
	TranslationUpdated = 'TRANSLATION_UPDATED',
	/** A new voucher created. */
	VoucherCreated = 'VOUCHER_CREATED',
	/** A voucher is deleted. */
	VoucherDeleted = 'VOUCHER_DELETED',
	/** A voucher is updated. */
	VoucherUpdated = 'VOUCHER_UPDATED',
	/** A new warehouse created. */
	WarehouseCreated = 'WAREHOUSE_CREATED',
	/** A warehouse is deleted. */
	WarehouseDeleted = 'WAREHOUSE_DELETED',
	/** A warehouse is updated. */
	WarehouseUpdated = 'WAREHOUSE_UPDATED',
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeSyncEnum {
	CheckoutFilterShippingMethods = 'CHECKOUT_FILTER_SHIPPING_METHODS',
	OrderFilterShippingMethods = 'ORDER_FILTER_SHIPPING_METHODS',
	PaymentAuthorize = 'PAYMENT_AUTHORIZE',
	PaymentCapture = 'PAYMENT_CAPTURE',
	PaymentConfirm = 'PAYMENT_CONFIRM',
	PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
	PaymentProcess = 'PAYMENT_PROCESS',
	PaymentRefund = 'PAYMENT_REFUND',
	PaymentVoid = 'PAYMENT_VOID',
	ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
	AppDeleted = 'APP_DELETED',
	AppInstalled = 'APP_INSTALLED',
	AppStatusChanged = 'APP_STATUS_CHANGED',
	AppUpdated = 'APP_UPDATED',
	CategoryCreated = 'CATEGORY_CREATED',
	CategoryDeleted = 'CATEGORY_DELETED',
	CategoryUpdated = 'CATEGORY_UPDATED',
	ChannelCreated = 'CHANNEL_CREATED',
	ChannelDeleted = 'CHANNEL_DELETED',
	ChannelStatusChanged = 'CHANNEL_STATUS_CHANGED',
	ChannelUpdated = 'CHANNEL_UPDATED',
	CheckoutCreated = 'CHECKOUT_CREATED',
	CheckoutUpdated = 'CHECKOUT_UPDATED',
	CollectionCreated = 'COLLECTION_CREATED',
	CollectionDeleted = 'COLLECTION_DELETED',
	CollectionUpdated = 'COLLECTION_UPDATED',
	CustomerCreated = 'CUSTOMER_CREATED',
	CustomerUpdated = 'CUSTOMER_UPDATED',
	DraftOrderCreated = 'DRAFT_ORDER_CREATED',
	DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
	DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
	FulfillmentCanceled = 'FULFILLMENT_CANCELED',
	FulfillmentCreated = 'FULFILLMENT_CREATED',
	GiftCardCreated = 'GIFT_CARD_CREATED',
	GiftCardDeleted = 'GIFT_CARD_DELETED',
	GiftCardStatusChanged = 'GIFT_CARD_STATUS_CHANGED',
	GiftCardUpdated = 'GIFT_CARD_UPDATED',
	InvoiceDeleted = 'INVOICE_DELETED',
	InvoiceRequested = 'INVOICE_REQUESTED',
	InvoiceSent = 'INVOICE_SENT',
	MenuCreated = 'MENU_CREATED',
	MenuDeleted = 'MENU_DELETED',
	MenuItemCreated = 'MENU_ITEM_CREATED',
	MenuItemDeleted = 'MENU_ITEM_DELETED',
	MenuItemUpdated = 'MENU_ITEM_UPDATED',
	MenuUpdated = 'MENU_UPDATED',
	NotifyUser = 'NOTIFY_USER',
	Observability = 'OBSERVABILITY',
	OrderCancelled = 'ORDER_CANCELLED',
	OrderConfirmed = 'ORDER_CONFIRMED',
	OrderCreated = 'ORDER_CREATED',
	OrderFulfilled = 'ORDER_FULFILLED',
	OrderFullyPaid = 'ORDER_FULLY_PAID',
	OrderUpdated = 'ORDER_UPDATED',
	PageCreated = 'PAGE_CREATED',
	PageDeleted = 'PAGE_DELETED',
	PageUpdated = 'PAGE_UPDATED',
	ProductCreated = 'PRODUCT_CREATED',
	ProductDeleted = 'PRODUCT_DELETED',
	ProductUpdated = 'PRODUCT_UPDATED',
	ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
	ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
	ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
	ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
	ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
	SaleCreated = 'SALE_CREATED',
	SaleDeleted = 'SALE_DELETED',
	SaleUpdated = 'SALE_UPDATED',
	ShippingPriceCreated = 'SHIPPING_PRICE_CREATED',
	ShippingPriceDeleted = 'SHIPPING_PRICE_DELETED',
	ShippingPriceUpdated = 'SHIPPING_PRICE_UPDATED',
	ShippingZoneCreated = 'SHIPPING_ZONE_CREATED',
	ShippingZoneDeleted = 'SHIPPING_ZONE_DELETED',
	ShippingZoneUpdated = 'SHIPPING_ZONE_UPDATED',
	TransactionActionRequest = 'TRANSACTION_ACTION_REQUEST',
	TranslationCreated = 'TRANSLATION_CREATED',
	TranslationUpdated = 'TRANSLATION_UPDATED',
	VoucherCreated = 'VOUCHER_CREATED',
	VoucherDeleted = 'VOUCHER_DELETED',
	VoucherUpdated = 'VOUCHER_UPDATED',
	WarehouseCreated = 'WAREHOUSE_CREATED',
	WarehouseDeleted = 'WAREHOUSE_DELETED',
	WarehouseUpdated = 'WAREHOUSE_UPDATED',
}

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type WebhookUpdate = {
	readonly __typename?: 'WebhookUpdate';
	readonly errors: ReadonlyArray<WebhookError>;
	readonly webhook?: Maybe<Webhook>;
	/** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
	readonly webhookErrors: ReadonlyArray<WebhookError>;
};

export type WebhookUpdateInput = {
	/** ID of the app to which webhook belongs. */
	readonly app?: InputMaybe<Scalars['ID']>;
	/** The asynchronous events that webhook wants to subscribe. */
	readonly asyncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeAsyncEnum>>;
	/**
	 * The events that webhook wants to subscribe.
	 *
	 * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
	 */
	readonly events?: InputMaybe<ReadonlyArray<WebhookEventTypeEnum>>;
	/** Determine if webhook will be set active or not. */
	readonly isActive?: InputMaybe<Scalars['Boolean']>;
	/** The new name of the webhook. */
	readonly name?: InputMaybe<Scalars['String']>;
	/**
	 * Subscription query used to define a webhook payload.
	 *
	 * Added in Saleor 3.2.
	 *
	 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
	 */
	readonly query?: InputMaybe<Scalars['String']>;
	/** Use to create a hash signature with each payload. */
	readonly secretKey?: InputMaybe<Scalars['String']>;
	/** The synchronous events that webhook wants to subscribe. */
	readonly syncEvents?: InputMaybe<ReadonlyArray<WebhookEventTypeSyncEnum>>;
	/** The url to receive the payload. */
	readonly targetUrl?: InputMaybe<Scalars['String']>;
};

/** Represents weight value in a specific weight unit. */
export type Weight = {
	readonly __typename?: 'Weight';
	/** Weight unit. */
	readonly unit: WeightUnitsEnum;
	/** Weight value. */
	readonly value: Scalars['Float'];
};

/** An enumeration. */
export enum WeightUnitsEnum {
	G = 'G',
	Kg = 'KG',
	Lb = 'LB',
	Oz = 'OZ',
	Tonne = 'TONNE',
}

/** _Entity union as defined by Federation spec. */
export type _Entity =
	| Address
	| App
	| Category
	| Collection
	| Group
	| PageType
	| Product
	| ProductMedia
	| ProductType
	| ProductVariant
	| User;

/** _Service manifest as defined by Federation spec. */
export type _Service = {
	readonly __typename?: '_Service';
	readonly sdl?: Maybe<Scalars['String']>;
};

export type CheckoutAddToCartMutationVariables = Exact<{
	checkoutToken: Scalars['UUID'];
	variantId: Scalars['ID'];
}>;

export type CheckoutAddToCartMutation = {
	readonly __typename?: 'Mutation';
	readonly checkoutLinesAdd?: {
		readonly __typename?: 'CheckoutLinesAdd';
		readonly checkout?: {
			readonly __typename?: 'Checkout';
			readonly id: string;
			readonly lines: ReadonlyArray<{
				readonly __typename?: 'CheckoutLine';
				readonly id: string;
				readonly quantity: number;
				readonly variant: {
					readonly __typename?: 'ProductVariant';
					readonly name: string;
					readonly product: {
						readonly __typename?: 'Product';
						readonly name: string;
					};
				};
			}>;
		} | null;
		readonly errors: ReadonlyArray<{
			readonly __typename?: 'CheckoutError';
			readonly message?: string | null;
		}>;
	} | null;
};

export type CheckoutCreateForChannelMutationVariables = Exact<{
	channel: Scalars['String'];
}>;

export type CheckoutCreateForChannelMutation = {
	readonly __typename?: 'Mutation';
	readonly checkoutCreate?: {
		readonly __typename?: 'CheckoutCreate';
		readonly checkout?: {
			readonly __typename?: 'Checkout';
			readonly token: any;
		} | null;
	} | null;
};

export type CheckoutDetailsFragment = {
	readonly __typename?: 'Checkout';
	readonly id: string;
	readonly email?: string | null;
	readonly lines: ReadonlyArray<{
		readonly __typename?: 'CheckoutLine';
		readonly id: string;
		readonly quantity: number;
		readonly totalPrice: {
			readonly __typename?: 'TaxedMoney';
			readonly gross: {
				readonly __typename?: 'Money';
				readonly amount: number;
				readonly currency: string;
			};
		};
		readonly variant: {
			readonly __typename?: 'ProductVariant';
			readonly name: string;
			readonly product: {
				readonly __typename?: 'Product';
				readonly id: string;
				readonly name: string;
				readonly slug: string;
				readonly thumbnail?: {
					readonly __typename?: 'Image';
					readonly url: string;
					readonly alt?: string | null;
				} | null;
			};
			readonly pricing?: {
				readonly __typename?: 'VariantPricingInfo';
				readonly price?: {
					readonly __typename?: 'TaxedMoney';
					readonly gross: {
						readonly __typename?: 'Money';
						readonly amount: number;
						readonly currency: string;
					};
				} | null;
			} | null;
		};
	}>;
	readonly totalPrice: {
		readonly __typename?: 'TaxedMoney';
		readonly gross: {
			readonly __typename?: 'Money';
			readonly amount: number;
			readonly currency: string;
		};
	};
};

export type CheckoutGetByTokenQueryVariables = Exact<{
	checkoutToken: Scalars['UUID'];
}>;

export type CheckoutGetByTokenQuery = {
	readonly __typename?: 'Query';
	readonly checkout?: {
		readonly __typename?: 'Checkout';
		readonly id: string;
		readonly email?: string | null;
		readonly lines: ReadonlyArray<{
			readonly __typename?: 'CheckoutLine';
			readonly id: string;
			readonly quantity: number;
			readonly totalPrice: {
				readonly __typename?: 'TaxedMoney';
				readonly gross: {
					readonly __typename?: 'Money';
					readonly amount: number;
					readonly currency: string;
				};
			};
			readonly variant: {
				readonly __typename?: 'ProductVariant';
				readonly name: string;
				readonly product: {
					readonly __typename?: 'Product';
					readonly id: string;
					readonly name: string;
					readonly slug: string;
					readonly thumbnail?: {
						readonly __typename?: 'Image';
						readonly url: string;
						readonly alt?: string | null;
					} | null;
				};
				readonly pricing?: {
					readonly __typename?: 'VariantPricingInfo';
					readonly price?: {
						readonly __typename?: 'TaxedMoney';
						readonly gross: {
							readonly __typename?: 'Money';
							readonly amount: number;
							readonly currency: string;
						};
					} | null;
				} | null;
			};
		}>;
		readonly totalPrice: {
			readonly __typename?: 'TaxedMoney';
			readonly gross: {
				readonly __typename?: 'Money';
				readonly amount: number;
				readonly currency: string;
			};
		};
	} | null;
};

export type ProductListItemFragment = {
	readonly __typename?: 'Product';
	readonly id: string;
	readonly name: string;
	readonly slug: string;
	readonly media?: ReadonlyArray<{
		readonly __typename?: 'ProductMedia';
		readonly url: string;
		readonly alt: string;
	}> | null;
	readonly pricing?: {
		readonly __typename?: 'ProductPricingInfo';
		readonly onSale?: boolean | null;
		readonly priceRange?: {
			readonly __typename?: 'TaxedMoneyRange';
			readonly start?: {
				readonly __typename?: 'TaxedMoney';
				readonly gross: {
					readonly __typename?: 'Money';
					readonly amount: number;
					readonly currency: string;
				};
			} | null;
		} | null;
	} | null;
};

export type ProductsGetForChannelQueryVariables = Exact<{
	first: Scalars['Int'];
	channel: Scalars['String'];
}>;

export type ProductsGetForChannelQuery = {
	readonly __typename?: 'Query';
	readonly products?: {
		readonly __typename?: 'ProductCountableConnection';
		readonly edges: ReadonlyArray<{
			readonly __typename?: 'ProductCountableEdge';
			readonly node: {
				readonly __typename?: 'Product';
				readonly id: string;
				readonly name: string;
				readonly slug: string;
				readonly media?: ReadonlyArray<{
					readonly __typename?: 'ProductMedia';
					readonly url: string;
					readonly alt: string;
				}> | null;
				readonly pricing?: {
					readonly __typename?: 'ProductPricingInfo';
					readonly onSale?: boolean | null;
					readonly priceRange?: {
						readonly __typename?: 'TaxedMoneyRange';
						readonly start?: {
							readonly __typename?: 'TaxedMoney';
							readonly gross: {
								readonly __typename?: 'Money';
								readonly amount: number;
								readonly currency: string;
							};
						} | null;
					} | null;
				} | null;
			};
		}>;
	} | null;
};

export type ProductDetailsFragment = {
	readonly __typename?: 'Product';
	readonly id: string;
	readonly name: string;
	readonly slug: string;
	readonly description?: any | null;
	readonly defaultVariant?: {
		readonly __typename?: 'ProductVariant';
		readonly id: string;
	} | null;
	readonly attributes: ReadonlyArray<{
		readonly __typename?: 'SelectedAttribute';
		readonly attribute: {
			readonly __typename?: 'Attribute';
			readonly name?: string | null;
		};
		readonly values: ReadonlyArray<{
			readonly __typename?: 'AttributeValue';
			readonly id: string;
			readonly name?: string | null;
		}>;
	}>;
	readonly media?: ReadonlyArray<{
		readonly __typename?: 'ProductMedia';
		readonly url: string;
		readonly alt: string;
	}> | null;
	readonly pricing?: {
		readonly __typename?: 'ProductPricingInfo';
		readonly onSale?: boolean | null;
		readonly priceRange?: {
			readonly __typename?: 'TaxedMoneyRange';
			readonly start?: {
				readonly __typename?: 'TaxedMoney';
				readonly gross: {
					readonly __typename?: 'Money';
					readonly amount: number;
					readonly currency: string;
				};
			} | null;
		} | null;
	} | null;
};

export type GetProductDetailsQueryVariables = Exact<{
	slug: Scalars['String'];
}>;

export type GetProductDetailsQuery = {
	readonly __typename?: 'Query';
	readonly product?: {
		readonly __typename?: 'Product';
		readonly id: string;
		readonly name: string;
		readonly slug: string;
		readonly description?: any | null;
		readonly defaultVariant?: {
			readonly __typename?: 'ProductVariant';
			readonly id: string;
		} | null;
		readonly attributes: ReadonlyArray<{
			readonly __typename?: 'SelectedAttribute';
			readonly attribute: {
				readonly __typename?: 'Attribute';
				readonly name?: string | null;
			};
			readonly values: ReadonlyArray<{
				readonly __typename?: 'AttributeValue';
				readonly id: string;
				readonly name?: string | null;
			}>;
		}>;
		readonly media?: ReadonlyArray<{
			readonly __typename?: 'ProductMedia';
			readonly url: string;
			readonly alt: string;
		}> | null;
		readonly pricing?: {
			readonly __typename?: 'ProductPricingInfo';
			readonly onSale?: boolean | null;
			readonly priceRange?: {
				readonly __typename?: 'TaxedMoneyRange';
				readonly start?: {
					readonly __typename?: 'TaxedMoney';
					readonly gross: {
						readonly __typename?: 'Money';
						readonly amount: number;
						readonly currency: string;
					};
				} | null;
			} | null;
		} | null;
	} | null;
};

export type ProductsGetTotalCountForChannelQueryVariables = Exact<{
	channel: Scalars['String'];
}>;

export type ProductsGetTotalCountForChannelQuery = {
	readonly __typename?: 'Query';
	readonly products?: {
		readonly __typename?: 'ProductCountableConnection';
		readonly totalCount?: number | null;
	} | null;
};

export type ProductsSlugsQueryVariables = Exact<{
	channel: Scalars['String'];
}>;

export type ProductsSlugsQuery = {
	readonly __typename?: 'Query';
	readonly products?: {
		readonly __typename?: 'ProductCountableConnection';
		readonly edges: ReadonlyArray<{
			readonly __typename?: 'ProductCountableEdge';
			readonly node: { readonly __typename?: 'Product'; readonly slug: string };
		}>;
	} | null;
};

export const CheckoutDetailsFragmentDoc = gql`
	fragment CheckoutDetails on Checkout {
		id
		email
		lines {
			id
			quantity
			totalPrice {
				gross {
					amount
					currency
				}
			}
			variant {
				product {
					id
					name
					slug
					thumbnail {
						url
						alt
					}
				}
				pricing {
					price {
						gross {
							amount
							currency
						}
					}
				}
				name
			}
		}
		totalPrice {
			gross {
				amount
				currency
			}
		}
	}
`;
export const ProductListItemFragmentDoc = gql`
	fragment ProductListItem on Product {
		id
		name
		slug
		media {
			url
			alt
		}
		pricing {
			onSale
			priceRange {
				start {
					gross {
						amount
						currency
					}
				}
			}
		}
	}
`;
export const ProductDetailsFragmentDoc = gql`
	fragment ProductDetails on Product {
		id
		name
		defaultVariant {
			id
		}
		attributes {
			attribute {
				name
			}
			values {
				id
				name
			}
		}
		slug
		media {
			url
			alt
		}
		pricing {
			onSale
			priceRange {
				start {
					gross {
						amount
						currency
					}
				}
			}
		}
		description
	}
`;
export const CheckoutAddToCartDocument = gql`
	mutation CheckoutAddToCart($checkoutToken: UUID!, $variantId: ID!) {
		checkoutLinesAdd(
			token: $checkoutToken
			lines: [{ quantity: 1, variantId: $variantId }]
		) {
			checkout {
				id
				lines {
					id
					quantity
					variant {
						name
						product {
							name
						}
					}
				}
			}
			errors {
				message
			}
		}
	}
`;
export type CheckoutAddToCartMutationFn = Apollo.MutationFunction<
	CheckoutAddToCartMutation,
	CheckoutAddToCartMutationVariables
>;

/**
 * __useCheckoutAddToCartMutation__
 *
 * To run a mutation, you first call `useCheckoutAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutAddToCartMutation, { data, loading, error }] = useCheckoutAddToCartMutation({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useCheckoutAddToCartMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CheckoutAddToCartMutation,
		CheckoutAddToCartMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<
		CheckoutAddToCartMutation,
		CheckoutAddToCartMutationVariables
	>(CheckoutAddToCartDocument, options);
}
export type CheckoutAddToCartMutationHookResult = ReturnType<
	typeof useCheckoutAddToCartMutation
>;
export type CheckoutAddToCartMutationResult =
	Apollo.MutationResult<CheckoutAddToCartMutation>;
export type CheckoutAddToCartMutationOptions = Apollo.BaseMutationOptions<
	CheckoutAddToCartMutation,
	CheckoutAddToCartMutationVariables
>;
export const CheckoutCreateForChannelDocument = gql`
	mutation CheckoutCreateForChannel($channel: String!) {
		checkoutCreate(input: { channel: $channel, lines: [] }) {
			checkout {
				token
			}
		}
	}
`;
export type CheckoutCreateForChannelMutationFn = Apollo.MutationFunction<
	CheckoutCreateForChannelMutation,
	CheckoutCreateForChannelMutationVariables
>;

/**
 * __useCheckoutCreateForChannelMutation__
 *
 * To run a mutation, you first call `useCheckoutCreateForChannelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutCreateForChannelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutCreateForChannelMutation, { data, loading, error }] = useCheckoutCreateForChannelMutation({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useCheckoutCreateForChannelMutation(
	baseOptions?: Apollo.MutationHookOptions<
		CheckoutCreateForChannelMutation,
		CheckoutCreateForChannelMutationVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<
		CheckoutCreateForChannelMutation,
		CheckoutCreateForChannelMutationVariables
	>(CheckoutCreateForChannelDocument, options);
}
export type CheckoutCreateForChannelMutationHookResult = ReturnType<
	typeof useCheckoutCreateForChannelMutation
>;
export type CheckoutCreateForChannelMutationResult =
	Apollo.MutationResult<CheckoutCreateForChannelMutation>;
export type CheckoutCreateForChannelMutationOptions =
	Apollo.BaseMutationOptions<
		CheckoutCreateForChannelMutation,
		CheckoutCreateForChannelMutationVariables
	>;
export const CheckoutGetByTokenDocument = gql`
	query CheckoutGetByToken($checkoutToken: UUID!) {
		checkout(token: $checkoutToken) {
			...CheckoutDetails
		}
	}
	${CheckoutDetailsFragmentDoc}
`;

/**
 * __useCheckoutGetByTokenQuery__
 *
 * To run a query within a React component, call `useCheckoutGetByTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutGetByTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutGetByTokenQuery({
 *   variables: {
 *      checkoutToken: // value for 'checkoutToken'
 *   },
 * });
 */
export function useCheckoutGetByTokenQuery(
	baseOptions: Apollo.QueryHookOptions<
		CheckoutGetByTokenQuery,
		CheckoutGetByTokenQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		CheckoutGetByTokenQuery,
		CheckoutGetByTokenQueryVariables
	>(CheckoutGetByTokenDocument, options);
}
export function useCheckoutGetByTokenLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		CheckoutGetByTokenQuery,
		CheckoutGetByTokenQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		CheckoutGetByTokenQuery,
		CheckoutGetByTokenQueryVariables
	>(CheckoutGetByTokenDocument, options);
}
export type CheckoutGetByTokenQueryHookResult = ReturnType<
	typeof useCheckoutGetByTokenQuery
>;
export type CheckoutGetByTokenLazyQueryHookResult = ReturnType<
	typeof useCheckoutGetByTokenLazyQuery
>;
export type CheckoutGetByTokenQueryResult = Apollo.QueryResult<
	CheckoutGetByTokenQuery,
	CheckoutGetByTokenQueryVariables
>;
export const ProductsGetForChannelDocument = gql`
	query ProductsGetForChannel($first: Int!, $channel: String!) {
		products(first: $first, channel: $channel) {
			edges {
				node {
					...ProductListItem
				}
			}
		}
	}
	${ProductListItemFragmentDoc}
`;

/**
 * __useProductsGetForChannelQuery__
 *
 * To run a query within a React component, call `useProductsGetForChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsGetForChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsGetForChannelQuery({
 *   variables: {
 *      first: // value for 'first'
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useProductsGetForChannelQuery(
	baseOptions: Apollo.QueryHookOptions<
		ProductsGetForChannelQuery,
		ProductsGetForChannelQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		ProductsGetForChannelQuery,
		ProductsGetForChannelQueryVariables
	>(ProductsGetForChannelDocument, options);
}
export function useProductsGetForChannelLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ProductsGetForChannelQuery,
		ProductsGetForChannelQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		ProductsGetForChannelQuery,
		ProductsGetForChannelQueryVariables
	>(ProductsGetForChannelDocument, options);
}
export type ProductsGetForChannelQueryHookResult = ReturnType<
	typeof useProductsGetForChannelQuery
>;
export type ProductsGetForChannelLazyQueryHookResult = ReturnType<
	typeof useProductsGetForChannelLazyQuery
>;
export type ProductsGetForChannelQueryResult = Apollo.QueryResult<
	ProductsGetForChannelQuery,
	ProductsGetForChannelQueryVariables
>;
export const GetProductDetailsDocument = gql`
	query GetProductDetails($slug: String!) {
		product(slug: $slug) {
			...ProductDetails
		}
	}
	${ProductDetailsFragmentDoc}
`;

/**
 * __useGetProductDetailsQuery__
 *
 * To run a query within a React component, call `useGetProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDetailsQuery(
	baseOptions: Apollo.QueryHookOptions<
		GetProductDetailsQuery,
		GetProductDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		GetProductDetailsQuery,
		GetProductDetailsQueryVariables
	>(GetProductDetailsDocument, options);
}
export function useGetProductDetailsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetProductDetailsQuery,
		GetProductDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		GetProductDetailsQuery,
		GetProductDetailsQueryVariables
	>(GetProductDetailsDocument, options);
}
export type GetProductDetailsQueryHookResult = ReturnType<
	typeof useGetProductDetailsQuery
>;
export type GetProductDetailsLazyQueryHookResult = ReturnType<
	typeof useGetProductDetailsLazyQuery
>;
export type GetProductDetailsQueryResult = Apollo.QueryResult<
	GetProductDetailsQuery,
	GetProductDetailsQueryVariables
>;
export const ProductsGetTotalCountForChannelDocument = gql`
	query ProductsGetTotalCountForChannel($channel: String!) {
		products(channel: $channel) {
			totalCount
		}
	}
`;

/**
 * __useProductsGetTotalCountForChannelQuery__
 *
 * To run a query within a React component, call `useProductsGetTotalCountForChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsGetTotalCountForChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsGetTotalCountForChannelQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useProductsGetTotalCountForChannelQuery(
	baseOptions: Apollo.QueryHookOptions<
		ProductsGetTotalCountForChannelQuery,
		ProductsGetTotalCountForChannelQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		ProductsGetTotalCountForChannelQuery,
		ProductsGetTotalCountForChannelQueryVariables
	>(ProductsGetTotalCountForChannelDocument, options);
}
export function useProductsGetTotalCountForChannelLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ProductsGetTotalCountForChannelQuery,
		ProductsGetTotalCountForChannelQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		ProductsGetTotalCountForChannelQuery,
		ProductsGetTotalCountForChannelQueryVariables
	>(ProductsGetTotalCountForChannelDocument, options);
}
export type ProductsGetTotalCountForChannelQueryHookResult = ReturnType<
	typeof useProductsGetTotalCountForChannelQuery
>;
export type ProductsGetTotalCountForChannelLazyQueryHookResult = ReturnType<
	typeof useProductsGetTotalCountForChannelLazyQuery
>;
export type ProductsGetTotalCountForChannelQueryResult = Apollo.QueryResult<
	ProductsGetTotalCountForChannelQuery,
	ProductsGetTotalCountForChannelQueryVariables
>;
export const ProductsSlugsDocument = gql`
	query ProductsSlugs($channel: String!) {
		products(first: 100, channel: $channel) {
			edges {
				node {
					slug
				}
			}
		}
	}
`;

/**
 * __useProductsSlugsQuery__
 *
 * To run a query within a React component, call `useProductsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsSlugsQuery({
 *   variables: {
 *      channel: // value for 'channel'
 *   },
 * });
 */
export function useProductsSlugsQuery(
	baseOptions: Apollo.QueryHookOptions<
		ProductsSlugsQuery,
		ProductsSlugsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<ProductsSlugsQuery, ProductsSlugsQueryVariables>(
		ProductsSlugsDocument,
		options,
	);
}
export function useProductsSlugsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		ProductsSlugsQuery,
		ProductsSlugsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<ProductsSlugsQuery, ProductsSlugsQueryVariables>(
		ProductsSlugsDocument,
		options,
	);
}
export type ProductsSlugsQueryHookResult = ReturnType<
	typeof useProductsSlugsQuery
>;
export type ProductsSlugsLazyQueryHookResult = ReturnType<
	typeof useProductsSlugsLazyQuery
>;
export type ProductsSlugsQueryResult = Apollo.QueryResult<
	ProductsSlugsQuery,
	ProductsSlugsQueryVariables
>;
