import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum InvoiceStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE"
}

export enum NotificationStatus {
  UNREAD = "UNREAD",
  READ = "READ"
}

export enum CardType {
  VISA = "VISA",
  MASTERCARD = "MASTERCARD",
  AMEX = "AMEX",
  DISCOVER = "DISCOVER"
}

export enum VerificationStatus {
  PENDING = "PENDING",
  VERIFIED = "VERIFIED"
}

export enum JobStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum EquipmentCategory {
  ELECTRICAL = "Electrical",
  PLUMBING = "Plumbing",
  CARPENTRY = "Carpentry",
  MASONRY = "Masonry",
  PAINTING = "Painting",
  HVAC = "HVAC"
}

export enum EquipmentAvailabilityStatus {
  AVAILABLE = "Available",
  IN_USE = "InUse",
  UNDER_MAINTENANCE = "UnderMaintenance",
  UNAVAILABLE = "Unavailable"
}

export enum TransactionType {
  CREDIT = "Credit",
  DEBIT = "Debit",
  REFUND = "Refund",
  WITHDRAWAL = "Withdrawal"
}

export enum MessageStatus {
  UNREAD = "UNREAD",
  READ = "READ"
}

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other"
}

export enum AccountType {
  BASIC = "Basic",
  PREMIUM = "Premium",
  PLATINUM = "Platinum"
}

export enum NotificationPreference {
  EMAIL = "Email",
  SMS = "SMS",
  BOTH = "Both"
}



type EagerTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskName: string;
  readonly taskTime: number;
  readonly Service?: Service | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksServiceId?: string | null;
}

type LazyTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskName: string;
  readonly taskTime: number;
  readonly Service: AsyncItem<Service | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksServiceId?: string | null;
}

export declare type Tasks = LazyLoading extends LazyLoadingDisabled ? EagerTasks : LazyTasks

export declare const Tasks: (new (init: ModelInit<Tasks>) => Tasks) & {
  copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

type EagerServicePromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicePromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service?: Service | null;
  readonly description: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly discountPercentage: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServicePromotionsId?: string | null;
}

type LazyServicePromotion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicePromotion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service: AsyncItem<Service | undefined>;
  readonly description: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly discountPercentage: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServicePromotionsId?: string | null;
}

export declare type ServicePromotion = LazyLoading extends LazyLoadingDisabled ? EagerServicePromotion : LazyServicePromotion

export declare const ServicePromotion: (new (init: ModelInit<ServicePromotion>) => ServicePromotion) & {
  copyOf(source: ServicePromotion, mutator: (draft: MutableModel<ServicePromotion>) => MutableModel<ServicePromotion> | void): ServicePromotion;
}

type EagerProviderReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderReportsId?: string | null;
  readonly serviceProviderReportsId?: string | null;
}

type LazyProviderReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderReportsId?: string | null;
  readonly serviceProviderReportsId?: string | null;
}

export declare type ProviderReport = LazyLoading extends LazyLoadingDisabled ? EagerProviderReport : LazyProviderReport

export declare const ProviderReport: (new (init: ModelInit<ProviderReport>) => ProviderReport) & {
  copyOf(source: ProviderReport, mutator: (draft: MutableModel<ProviderReport>) => MutableModel<ProviderReport> | void): ProviderReport;
}

type EagerUserReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserReportsId?: string | null;
  readonly serviceUserReportsId?: string | null;
}

type LazyUserReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserReport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserReportsId?: string | null;
  readonly serviceUserReportsId?: string | null;
}

export declare type UserReport = LazyLoading extends LazyLoadingDisabled ? EagerUserReport : LazyUserReport

export declare const UserReport: (new (init: ModelInit<UserReport>) => UserReport) & {
  copyOf(source: UserReport, mutator: (draft: MutableModel<UserReport>) => MutableModel<UserReport> | void): UserReport;
}

type EagerUserInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInvoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly amount: number;
  readonly dateIssued: string;
  readonly dueDate: string;
  readonly status?: InvoiceStatus | keyof typeof InvoiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserInvoicesId?: string | null;
  readonly serviceUserInvoicesId?: string | null;
}

type LazyUserInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInvoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly amount: number;
  readonly dateIssued: string;
  readonly dueDate: string;
  readonly status?: InvoiceStatus | keyof typeof InvoiceStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserInvoicesId?: string | null;
  readonly serviceUserInvoicesId?: string | null;
}

export declare type UserInvoice = LazyLoading extends LazyLoadingDisabled ? EagerUserInvoice : LazyUserInvoice

export declare const UserInvoice: (new (init: ModelInit<UserInvoice>) => UserInvoice) & {
  copyOf(source: UserInvoice, mutator: (draft: MutableModel<UserInvoice>) => MutableModel<UserInvoice> | void): UserInvoice;
}

type EagerProviderBookmark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderBookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly user?: User | null;
  readonly dateBookmarked: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderBookmarksId?: string | null;
  readonly userProviderBookmarksId?: string | null;
  readonly serviceProviderBookmarksId?: string | null;
}

type LazyProviderBookmark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderBookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly dateBookmarked: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderBookmarksId?: string | null;
  readonly userProviderBookmarksId?: string | null;
  readonly serviceProviderBookmarksId?: string | null;
}

export declare type ProviderBookmark = LazyLoading extends LazyLoadingDisabled ? EagerProviderBookmark : LazyProviderBookmark

export declare const ProviderBookmark: (new (init: ModelInit<ProviderBookmark>) => ProviderBookmark) & {
  copyOf(source: ProviderBookmark, mutator: (draft: MutableModel<ProviderBookmark>) => MutableModel<ProviderBookmark> | void): ProviderBookmark;
}

type EagerUserBookmark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserBookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly service?: Service | null;
  readonly dateBookmarked: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserBookmarksId?: string | null;
  readonly serviceUserBookmarksId?: string | null;
}

type LazyUserBookmark = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserBookmark, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly service: AsyncItem<Service | undefined>;
  readonly dateBookmarked: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserBookmarksId?: string | null;
  readonly serviceUserBookmarksId?: string | null;
}

export declare type UserBookmark = LazyLoading extends LazyLoadingDisabled ? EagerUserBookmark : LazyUserBookmark

export declare const UserBookmark: (new (init: ModelInit<UserBookmark>) => UserBookmark) & {
  copyOf(source: UserBookmark, mutator: (draft: MutableModel<UserBookmark>) => MutableModel<UserBookmark> | void): UserBookmark;
}

type EagerProviderNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly content: string;
  readonly dateSent: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderNotificationsId?: string | null;
  readonly serviceProviderNotificationsId?: string | null;
}

type LazyProviderNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly content: string;
  readonly dateSent: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderNotificationsId?: string | null;
  readonly serviceProviderNotificationsId?: string | null;
}

export declare type ProviderNotification = LazyLoading extends LazyLoadingDisabled ? EagerProviderNotification : LazyProviderNotification

export declare const ProviderNotification: (new (init: ModelInit<ProviderNotification>) => ProviderNotification) & {
  copyOf(source: ProviderNotification, mutator: (draft: MutableModel<ProviderNotification>) => MutableModel<ProviderNotification> | void): ProviderNotification;
}

type EagerUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly content: string;
  readonly dateSent: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserNotificationsId?: string | null;
  readonly serviceUserNotificationsId?: string | null;
}

type LazyUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly content: string;
  readonly dateSent: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserNotificationsId?: string | null;
  readonly serviceUserNotificationsId?: string | null;
}

export declare type UserNotification = LazyLoading extends LazyLoadingDisabled ? EagerUserNotification : LazyUserNotification

export declare const UserNotification: (new (init: ModelInit<UserNotification>) => UserNotification) & {
  copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification>) => MutableModel<UserNotification> | void): UserNotification;
}

type EagerServiceDiscount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceDiscount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service?: Service | null;
  readonly discountPercentage: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceDiscountsId?: string | null;
}

type LazyServiceDiscount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceDiscount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service: AsyncItem<Service | undefined>;
  readonly discountPercentage: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceDiscountsId?: string | null;
}

export declare type ServiceDiscount = LazyLoading extends LazyLoadingDisabled ? EagerServiceDiscount : LazyServiceDiscount

export declare const ServiceDiscount: (new (init: ModelInit<ServiceDiscount>) => ServiceDiscount) & {
  copyOf(source: ServiceDiscount, mutator: (draft: MutableModel<ServiceDiscount>) => MutableModel<ServiceDiscount> | void): ServiceDiscount;
}

type EagerProviderAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderAvailability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly isScheduled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderAvailabilityId?: string | null;
  readonly serviceProviderAvailabilitiesId?: string | null;
}

type LazyProviderAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderAvailability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly startDate: string;
  readonly endDate: string;
  readonly isScheduled?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderAvailabilityId?: string | null;
  readonly serviceProviderAvailabilitiesId?: string | null;
}

export declare type ProviderAvailability = LazyLoading extends LazyLoadingDisabled ? EagerProviderAvailability : LazyProviderAvailability

export declare const ProviderAvailability: (new (init: ModelInit<ProviderAvailability>) => ProviderAvailability) & {
  copyOf(source: ProviderAvailability, mutator: (draft: MutableModel<ProviderAvailability>) => MutableModel<ProviderAvailability> | void): ProviderAvailability;
}

type EagerUserPreference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly preferenceType: string;
  readonly preferenceValue: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserPreferenceId?: string | null;
  readonly serviceUserPreferencesId?: string | null;
}

type LazyUserPreference = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreference, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly preferenceType: string;
  readonly preferenceValue: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserPreferenceId?: string | null;
  readonly serviceUserPreferencesId?: string | null;
}

export declare type UserPreference = LazyLoading extends LazyLoadingDisabled ? EagerUserPreference : LazyUserPreference

export declare const UserPreference: (new (init: ModelInit<UserPreference>) => UserPreference) & {
  copyOf(source: UserPreference, mutator: (draft: MutableModel<UserPreference>) => MutableModel<UserPreference> | void): UserPreference;
}

type EagerProviderCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly certificationName: string;
  readonly issuedBy: string;
  readonly validFrom: string;
  readonly validUntil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderCertificationId?: string | null;
  readonly serviceProviderCertificationsId?: string | null;
}

type LazyProviderCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderCertification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly certificationName: string;
  readonly issuedBy: string;
  readonly validFrom: string;
  readonly validUntil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderCertificationId?: string | null;
  readonly serviceProviderCertificationsId?: string | null;
}

export declare type ProviderCertification = LazyLoading extends LazyLoadingDisabled ? EagerProviderCertification : LazyProviderCertification

export declare const ProviderCertification: (new (init: ModelInit<ProviderCertification>) => ProviderCertification) & {
  copyOf(source: ProviderCertification, mutator: (draft: MutableModel<ProviderCertification>) => MutableModel<ProviderCertification> | void): ProviderCertification;
}

type EagerServiceVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceVideo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service?: Service | null;
  readonly videoURL: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceVideosId?: string | null;
}

type LazyServiceVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceVideo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service: AsyncItem<Service | undefined>;
  readonly videoURL: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceVideosId?: string | null;
}

export declare type ServiceVideo = LazyLoading extends LazyLoadingDisabled ? EagerServiceVideo : LazyServiceVideo

export declare const ServiceVideo: (new (init: ModelInit<ServiceVideo>) => ServiceVideo) & {
  copyOf(source: ServiceVideo, mutator: (draft: MutableModel<ServiceVideo>) => MutableModel<ServiceVideo> | void): ServiceVideo;
}

type EagerServiceImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service?: Service | null;
  readonly imageURL: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceImagesId?: string | null;
}

type LazyServiceImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service: AsyncItem<Service | undefined>;
  readonly imageURL: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceImagesId?: string | null;
}

export declare type ServiceImage = LazyLoading extends LazyLoadingDisabled ? EagerServiceImage : LazyServiceImage

export declare const ServiceImage: (new (init: ModelInit<ServiceImage>) => ServiceImage) & {
  copyOf(source: ServiceImage, mutator: (draft: MutableModel<ServiceImage>) => MutableModel<ServiceImage> | void): ServiceImage;
}

type EagerServiceReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service?: Service | null;
  readonly user?: User | null;
  readonly rating: number;
  readonly comment: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceReviewsId?: string | null;
  readonly userServiceReviewsId?: string | null;
}

type LazyServiceReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly service: AsyncItem<Service | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly rating: number;
  readonly comment: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceServiceReviewsId?: string | null;
  readonly userServiceReviewsId?: string | null;
}

export declare type ServiceReview = LazyLoading extends LazyLoadingDisabled ? EagerServiceReview : LazyServiceReview

export declare const ServiceReview: (new (init: ModelInit<ServiceReview>) => ServiceReview) & {
  copyOf(source: ServiceReview, mutator: (draft: MutableModel<ServiceReview>) => MutableModel<ServiceReview> | void): ServiceReview;
}

type EagerAIDiagnostics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIDiagnostics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aiChatBot?: AIChatBot | null;
  readonly diagnosticData: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIChatBotDiagnosticsId?: string | null;
  readonly serviceAiDiagnosticsId?: string | null;
}

type LazyAIDiagnostics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIDiagnostics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aiChatBot: AsyncItem<AIChatBot | undefined>;
  readonly diagnosticData: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIChatBotDiagnosticsId?: string | null;
  readonly serviceAiDiagnosticsId?: string | null;
}

export declare type AIDiagnostics = LazyLoading extends LazyLoadingDisabled ? EagerAIDiagnostics : LazyAIDiagnostics

export declare const AIDiagnostics: (new (init: ModelInit<AIDiagnostics>) => AIDiagnostics) & {
  copyOf(source: AIDiagnostics, mutator: (draft: MutableModel<AIDiagnostics>) => MutableModel<AIDiagnostics> | void): AIDiagnostics;
}

type EagerCustomization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly customizationType: string;
  readonly customizationValue: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCustomizationsId?: string | null;
  readonly serviceCustomizationsId?: string | null;
}

type LazyCustomization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly customizationType: string;
  readonly customizationValue: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCustomizationsId?: string | null;
  readonly serviceCustomizationsId?: string | null;
}

export declare type Customization = LazyLoading extends LazyLoadingDisabled ? EagerCustomization : LazyCustomization

export declare const Customization: (new (init: ModelInit<Customization>) => Customization) & {
  copyOf(source: Customization, mutator: (draft: MutableModel<Customization>) => MutableModel<Customization> | void): Customization;
}

type EagerExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly amount: number;
  readonly description: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerExpensesId?: string | null;
  readonly serviceExpensesId?: string | null;
  readonly userExpensesId?: string | null;
}

type LazyExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly amount: number;
  readonly description: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerExpensesId?: string | null;
  readonly serviceExpensesId?: string | null;
  readonly userExpensesId?: string | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense) & {
  copyOf(source: Expense, mutator: (draft: MutableModel<Expense>) => MutableModel<Expense> | void): Expense;
}

type EagerFavoriteProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly provider?: Provider | null;
  readonly dateAdded: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFavoriteProvidersId?: string | null;
  readonly providerFavoriteProvidersId?: string | null;
  readonly serviceFavoriteProvidersId?: string | null;
}

type LazyFavoriteProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly dateAdded: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFavoriteProvidersId?: string | null;
  readonly providerFavoriteProvidersId?: string | null;
  readonly serviceFavoriteProvidersId?: string | null;
}

export declare type FavoriteProvider = LazyLoading extends LazyLoadingDisabled ? EagerFavoriteProvider : LazyFavoriteProvider

export declare const FavoriteProvider: (new (init: ModelInit<FavoriteProvider>) => FavoriteProvider) & {
  copyOf(source: FavoriteProvider, mutator: (draft: MutableModel<FavoriteProvider>) => MutableModel<FavoriteProvider> | void): FavoriteProvider;
}

type EagerUserHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly action: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserHistoriesId?: string | null;
  readonly serviceUserHistoriesId?: string | null;
}

type LazyUserHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly action: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userUserHistoriesId?: string | null;
  readonly serviceUserHistoriesId?: string | null;
}

export declare type UserHistory = LazyLoading extends LazyLoadingDisabled ? EagerUserHistory : LazyUserHistory

export declare const UserHistory: (new (init: ModelInit<UserHistory>) => UserHistory) & {
  copyOf(source: UserHistory, mutator: (draft: MutableModel<UserHistory>) => MutableModel<UserHistory> | void): UserHistory;
}

type EagerProviderAward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderAward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly awardName: string;
  readonly awardedBy: string;
  readonly dateAwarded: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderAwardsId?: string | null;
  readonly serviceProviderAwardsId?: string | null;
}

type LazyProviderAward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderAward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly awardName: string;
  readonly awardedBy: string;
  readonly dateAwarded: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderAwardsId?: string | null;
  readonly serviceProviderAwardsId?: string | null;
}

export declare type ProviderAward = LazyLoading extends LazyLoadingDisabled ? EagerProviderAward : LazyProviderAward

export declare const ProviderAward: (new (init: ModelInit<ProviderAward>) => ProviderAward) & {
  copyOf(source: ProviderAward, mutator: (draft: MutableModel<ProviderAward>) => MutableModel<ProviderAward> | void): ProviderAward;
}

type EagerReferral = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referral, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly referrer?: User | null;
  readonly referred?: User | null;
  readonly dateReferred: string;
  readonly reward?: Reward | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReferralsId?: string | null;
  readonly rewardReferralsId?: string | null;
  readonly serviceReferralsId?: string | null;
  readonly providerProviderReferralsId?: string | null;
}

type LazyReferral = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referral, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly referrer: AsyncItem<User | undefined>;
  readonly referred: AsyncItem<User | undefined>;
  readonly dateReferred: string;
  readonly reward: AsyncItem<Reward | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReferralsId?: string | null;
  readonly rewardReferralsId?: string | null;
  readonly serviceReferralsId?: string | null;
  readonly providerProviderReferralsId?: string | null;
}

export declare type Referral = LazyLoading extends LazyLoadingDisabled ? EagerReferral : LazyReferral

export declare const Referral: (new (init: ModelInit<Referral>) => Referral) & {
  copyOf(source: Referral, mutator: (draft: MutableModel<Referral>) => MutableModel<Referral> | void): Referral;
}

type EagerTip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly provider?: Provider | null;
  readonly amount: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTipsId?: string | null;
  readonly providerProviderTipsId?: string | null;
}

type LazyTip = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tip, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly amount: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTipsId?: string | null;
  readonly providerProviderTipsId?: string | null;
}

export declare type Tip = LazyLoading extends LazyLoadingDisabled ? EagerTip : LazyTip

export declare const Tip: (new (init: ModelInit<Tip>) => Tip) & {
  copyOf(source: Tip, mutator: (draft: MutableModel<Tip>) => MutableModel<Tip> | void): Tip;
}

type EagerPaymentMethod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly cardNumber: string;
  readonly expiryDate: string;
  readonly cardType?: CardType | keyof typeof CardType | null;
  readonly stripeCustomerId?: string | null;
  readonly stripeCardId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPaymentMethodsId?: string | null;
}

type LazyPaymentMethod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentMethod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly cardNumber: string;
  readonly expiryDate: string;
  readonly cardType?: CardType | keyof typeof CardType | null;
  readonly stripeCustomerId?: string | null;
  readonly stripeCardId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPaymentMethodsId?: string | null;
}

export declare type PaymentMethod = LazyLoading extends LazyLoadingDisabled ? EagerPaymentMethod : LazyPaymentMethod

export declare const PaymentMethod: (new (init: ModelInit<PaymentMethod>) => PaymentMethod) & {
  copyOf(source: PaymentMethod, mutator: (draft: MutableModel<PaymentMethod>) => MutableModel<PaymentMethod> | void): PaymentMethod;
}

type EagerInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly provider?: Provider | null;
  readonly amount: number;
  readonly dateIssued: string;
  readonly dueDate: string;
  readonly status?: InvoiceStatus | keyof typeof InvoiceStatus | null;
  readonly services?: (Service | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInvoicesId?: string | null;
  readonly providerProviderInvoicesId?: string | null;
}

type LazyInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly amount: number;
  readonly dateIssued: string;
  readonly dueDate: string;
  readonly status?: InvoiceStatus | keyof typeof InvoiceStatus | null;
  readonly services: AsyncCollection<Service>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInvoicesId?: string | null;
  readonly providerProviderInvoicesId?: string | null;
}

export declare type Invoice = LazyLoading extends LazyLoadingDisabled ? EagerInvoice : LazyInvoice

export declare const Invoice: (new (init: ModelInit<Invoice>) => Invoice) & {
  copyOf(source: Invoice, mutator: (draft: MutableModel<Invoice>) => MutableModel<Invoice> | void): Invoice;
}

type EagerContract = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contract, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly provider?: Provider | null;
  readonly service?: Service | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly terms: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userContractsId?: string | null;
  readonly providerProviderContractsId?: string | null;
  readonly serviceContractsId?: string | null;
}

type LazyContract = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contract, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly service: AsyncItem<Service | undefined>;
  readonly startDate: string;
  readonly endDate: string;
  readonly terms: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userContractsId?: string | null;
  readonly providerProviderContractsId?: string | null;
  readonly serviceContractsId?: string | null;
}

export declare type Contract = LazyLoading extends LazyLoadingDisabled ? EagerContract : LazyContract

export declare const Contract: (new (init: ModelInit<Contract>) => Contract) & {
  copyOf(source: Contract, mutator: (draft: MutableModel<Contract>) => MutableModel<Contract> | void): Contract;
}

type EagerNicheService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NicheService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceName: string;
  readonly description: string;
  readonly providers?: (Provider | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNicheService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NicheService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceName: string;
  readonly description: string;
  readonly providers: AsyncCollection<Provider>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NicheService = LazyLoading extends LazyLoadingDisabled ? EagerNicheService : LazyNicheService

export declare const NicheService: (new (init: ModelInit<NicheService>) => NicheService) & {
  copyOf(source: NicheService, mutator: (draft: MutableModel<NicheService>) => MutableModel<NicheService> | void): NicheService;
}

type EagerServicePackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicePackage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly packageName: string;
  readonly services?: (Service | null)[] | null;
  readonly discount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServicePackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServicePackage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly packageName: string;
  readonly services: AsyncCollection<Service>;
  readonly discount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServicePackage = LazyLoading extends LazyLoadingDisabled ? EagerServicePackage : LazyServicePackage

export declare const ServicePackage: (new (init: ModelInit<ServicePackage>) => ServicePackage) & {
  copyOf(source: ServicePackage, mutator: (draft: MutableModel<ServicePackage>) => MutableModel<ServicePackage> | void): ServicePackage;
}

type EagerReward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rewardName: string;
  readonly description: string;
  readonly value: number;
  readonly referrals?: (Referral | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly loyaltyProgramRewardsId?: string | null;
  readonly userRewardsId?: string | null;
}

type LazyReward = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reward, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rewardName: string;
  readonly description: string;
  readonly value: number;
  readonly referrals: AsyncCollection<Referral>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly loyaltyProgramRewardsId?: string | null;
  readonly userRewardsId?: string | null;
}

export declare type Reward = LazyLoading extends LazyLoadingDisabled ? EagerReward : LazyReward

export declare const Reward: (new (init: ModelInit<Reward>) => Reward) & {
  copyOf(source: Reward, mutator: (draft: MutableModel<Reward>) => MutableModel<Reward> | void): Reward;
}

type EagerLoyaltyProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoyaltyProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly points: number;
  readonly rewards?: (Reward | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLoyaltyProgramsId?: string | null;
}

type LazyLoyaltyProgram = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LoyaltyProgram, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly points: number;
  readonly rewards: AsyncCollection<Reward>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLoyaltyProgramsId?: string | null;
}

export declare type LoyaltyProgram = LazyLoading extends LazyLoadingDisabled ? EagerLoyaltyProgram : LazyLoyaltyProgram

export declare const LoyaltyProgram: (new (init: ModelInit<LoyaltyProgram>) => LoyaltyProgram) & {
  copyOf(source: LoyaltyProgram, mutator: (draft: MutableModel<LoyaltyProgram>) => MutableModel<LoyaltyProgram> | void): LoyaltyProgram;
}

type EagerVerification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Verification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly verificationCode: string;
  readonly dateSent: string;
  readonly status?: VerificationStatus | keyof typeof VerificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userVerificationsId?: string | null;
}

type LazyVerification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Verification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly verificationCode: string;
  readonly dateSent: string;
  readonly status?: VerificationStatus | keyof typeof VerificationStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userVerificationsId?: string | null;
}

export declare type Verification = LazyLoading extends LazyLoadingDisabled ? EagerVerification : LazyVerification

export declare const Verification: (new (init: ModelInit<Verification>) => Verification) & {
  copyOf(source: Verification, mutator: (draft: MutableModel<Verification>) => MutableModel<Verification> | void): Verification;
}

type EagerAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userCount: number;
  readonly providerCount: number;
  readonly serviceCount: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnalytics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Analytics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userCount: number;
  readonly providerCount: number;
  readonly serviceCount: number;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Analytics = LazyLoading extends LazyLoadingDisabled ? EagerAnalytics : LazyAnalytics

export declare const Analytics: (new (init: ModelInit<Analytics>) => Analytics) & {
  copyOf(source: Analytics, mutator: (draft: MutableModel<Analytics>) => MutableModel<Analytics> | void): Analytics;
}

type EagerPromoCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PromoCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code: string;
  readonly discount: number;
  readonly validFrom: string;
  readonly validUntil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPromoCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PromoCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code: string;
  readonly discount: number;
  readonly validFrom: string;
  readonly validUntil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PromoCode = LazyLoading extends LazyLoadingDisabled ? EagerPromoCode : LazyPromoCode

export declare const PromoCode: (new (init: ModelInit<PromoCode>) => PromoCode) & {
  copyOf(source: PromoCode, mutator: (draft: MutableModel<PromoCode>) => MutableModel<PromoCode> | void): PromoCode;
}

type EagerReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reporter?: User | null;
  readonly reportedEntity: string;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReportsId?: string | null;
}

type LazyReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly reporter: AsyncItem<User | undefined>;
  readonly reportedEntity: string;
  readonly description: string;
  readonly dateReported: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userReportsId?: string | null;
}

export declare type Report = LazyLoading extends LazyLoadingDisabled ? EagerReport : LazyReport

export declare const Report: (new (init: ModelInit<Report>) => Report) & {
  copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

type EagerJobTracking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTracking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly provider?: Provider | null;
  readonly service?: Service | null;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userJobTrackingsId?: string | null;
  readonly providerJobTrackingId?: string | null;
  readonly serviceJobTrackingsId?: string | null;
}

type LazyJobTracking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTracking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly service: AsyncItem<Service | undefined>;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly startDate: string;
  readonly endDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userJobTrackingsId?: string | null;
  readonly providerJobTrackingId?: string | null;
  readonly serviceJobTrackingsId?: string | null;
}

export declare type JobTracking = LazyLoading extends LazyLoadingDisabled ? EagerJobTracking : LazyJobTracking

export declare const JobTracking: (new (init: ModelInit<JobTracking>) => JobTracking) & {
  copyOf(source: JobTracking, mutator: (draft: MutableModel<JobTracking>) => MutableModel<JobTracking> | void): JobTracking;
}

type EagerAIChatLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIChatLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly aiChatBot?: AIChatBot | null;
  readonly message: string;
  readonly response: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAiChatLogsId?: string | null;
  readonly aIChatBotChatLogsId?: string | null;
}

type LazyAIChatLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIChatLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly aiChatBot: AsyncItem<AIChatBot | undefined>;
  readonly message: string;
  readonly response: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAiChatLogsId?: string | null;
  readonly aIChatBotChatLogsId?: string | null;
}

export declare type AIChatLog = LazyLoading extends LazyLoadingDisabled ? EagerAIChatLog : LazyAIChatLog

export declare const AIChatLog: (new (init: ModelInit<AIChatLog>) => AIChatLog) & {
  copyOf(source: AIChatLog, mutator: (draft: MutableModel<AIChatLog>) => MutableModel<AIChatLog> | void): AIChatLog;
}

type EagerAIChatBot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIChatBot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly diagnostics?: (AIDiagnostics | null)[] | null;
  readonly chatLogs?: (AIChatLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAiChatBotsId?: string | null;
}

type LazyAIChatBot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIChatBot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly version: string;
  readonly diagnostics: AsyncCollection<AIDiagnostics>;
  readonly chatLogs: AsyncCollection<AIChatLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAiChatBotsId?: string | null;
}

export declare type AIChatBot = LazyLoading extends LazyLoadingDisabled ? EagerAIChatBot : LazyAIChatBot

export declare const AIChatBot: (new (init: ModelInit<AIChatBot>) => AIChatBot) & {
  copyOf(source: AIChatBot, mutator: (draft: MutableModel<AIChatBot>) => MutableModel<AIChatBot> | void): AIChatBot;
}

type EagerMainCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MainCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly descrption?: string | null;
  readonly SubCategories?: (SubCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMainCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MainCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly descrption?: string | null;
  readonly SubCategories: AsyncCollection<SubCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MainCategory = LazyLoading extends LazyLoadingDisabled ? EagerMainCategory : LazyMainCategory

export declare const MainCategory: (new (init: ModelInit<MainCategory>) => MainCategory) & {
  copyOf(source: MainCategory, mutator: (draft: MutableModel<MainCategory>) => MutableModel<MainCategory> | void): MainCategory;
}

type EagerSubCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly MainCategory?: MainCategory | null;
  readonly Services?: (Service | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mainCategorySubCategoriesId?: string | null;
}

type LazySubCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly MainCategory: AsyncItem<MainCategory | undefined>;
  readonly Services: AsyncCollection<Service>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mainCategorySubCategoriesId?: string | null;
}

export declare type SubCategory = LazyLoading extends LazyLoadingDisabled ? EagerSubCategory : LazySubCategory

export declare const SubCategory: (new (init: ModelInit<SubCategory>) => SubCategory) & {
  copyOf(source: SubCategory, mutator: (draft: MutableModel<SubCategory>) => MutableModel<SubCategory> | void): SubCategory;
}

type EagerPLMBRSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PLMBRSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSubscriptionsId?: string | null;
}

type LazyPLMBRSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PLMBRSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSubscriptionsId?: string | null;
}

export declare type PLMBRSubscription = LazyLoading extends LazyLoadingDisabled ? EagerPLMBRSubscription : LazyPLMBRSubscription

export declare const PLMBRSubscription: (new (init: ModelInit<PLMBRSubscription>) => PLMBRSubscription) & {
  copyOf(source: PLMBRSubscription, mutator: (draft: MutableModel<PLMBRSubscription>) => MutableModel<PLMBRSubscription> | void): PLMBRSubscription;
}

type EagerUserSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSettings = LazyLoading extends LazyLoadingDisabled ? EagerUserSettings : LazyUserSettings

export declare const UserSettings: (new (init: ModelInit<UserSettings>) => UserSettings) & {
  copyOf(source: UserSettings, mutator: (draft: MutableModel<UserSettings>) => MutableModel<UserSettings> | void): UserSettings;
}

type EagerProviderSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProviderSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProviderSettings = LazyLoading extends LazyLoadingDisabled ? EagerProviderSettings : LazyProviderSettings

export declare const ProviderSettings: (new (init: ModelInit<ProviderSettings>) => ProviderSettings) & {
  copyOf(source: ProviderSettings, mutator: (draft: MutableModel<ProviderSettings>) => MutableModel<ProviderSettings> | void): ProviderSettings;
}

type EagerPortfolio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Portfolio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPortfolio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Portfolio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Portfolio = LazyLoading extends LazyLoadingDisabled ? EagerPortfolio : LazyPortfolio

export declare const Portfolio: (new (init: ModelInit<Portfolio>) => Portfolio) & {
  copyOf(source: Portfolio, mutator: (draft: MutableModel<Portfolio>) => MutableModel<Portfolio> | void): Portfolio;
}

type EagerServiceVariant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceVariant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceVariant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceVariant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceVariant = LazyLoading extends LazyLoadingDisabled ? EagerServiceVariant : LazyServiceVariant

export declare const ServiceVariant: (new (init: ModelInit<ServiceVariant>) => ServiceVariant) & {
  copyOf(source: ServiceVariant, mutator: (draft: MutableModel<ServiceVariant>) => MutableModel<ServiceVariant> | void): ServiceVariant;
}

type EagerServiceHighlight = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceHighlight, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceHighlight = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceHighlight, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceHighlight = LazyLoading extends LazyLoadingDisabled ? EagerServiceHighlight : LazyServiceHighlight

export declare const ServiceHighlight: (new (init: ModelInit<ServiceHighlight>) => ServiceHighlight) & {
  copyOf(source: ServiceHighlight, mutator: (draft: MutableModel<ServiceHighlight>) => MutableModel<ServiceHighlight> | void): ServiceHighlight;
}

type EagerServiceTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceTag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceTag = LazyLoading extends LazyLoadingDisabled ? EagerServiceTag : LazyServiceTag

export declare const ServiceTag: (new (init: ModelInit<ServiceTag>) => ServiceTag) & {
  copyOf(source: ServiceTag, mutator: (draft: MutableModel<ServiceTag>) => MutableModel<ServiceTag> | void): ServiceTag;
}

type EagerServiceFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceFAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceFAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceFAQ = LazyLoading extends LazyLoadingDisabled ? EagerServiceFAQ : LazyServiceFAQ

export declare const ServiceFAQ: (new (init: ModelInit<ServiceFAQ>) => ServiceFAQ) & {
  copyOf(source: ServiceFAQ, mutator: (draft: MutableModel<ServiceFAQ>) => MutableModel<ServiceFAQ> | void): ServiceFAQ;
}

type EagerFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feedback, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFeedbacksId?: string | null;
}

type LazyFeedback = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Feedback, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFeedbacksId?: string | null;
}

export declare type Feedback = LazyLoading extends LazyLoadingDisabled ? EagerFeedback : LazyFeedback

export declare const Feedback: (new (init: ModelInit<Feedback>) => Feedback) & {
  copyOf(source: Feedback, mutator: (draft: MutableModel<Feedback>) => MutableModel<Feedback> | void): Feedback;
}

type EagerEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly category?: EquipmentCategory | keyof typeof EquipmentCategory | null;
  readonly availabilityStatus?: EquipmentAvailabilityStatus | keyof typeof EquipmentAvailabilityStatus | null;
  readonly purchaseDate?: string | null;
  readonly maintenanceDate?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEquipment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Equipment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly name: string;
  readonly description?: string | null;
  readonly category?: EquipmentCategory | keyof typeof EquipmentCategory | null;
  readonly availabilityStatus?: EquipmentAvailabilityStatus | keyof typeof EquipmentAvailabilityStatus | null;
  readonly purchaseDate?: string | null;
  readonly maintenanceDate?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Equipment = LazyLoading extends LazyLoadingDisabled ? EagerEquipment : LazyEquipment

export declare const Equipment: (new (init: ModelInit<Equipment>) => Equipment) & {
  copyOf(source: Equipment, mutator: (draft: MutableModel<Equipment>) => MutableModel<Equipment> | void): Equipment;
}

type EagerWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerID: string;
  readonly balance: number;
  readonly currency: string;
  readonly transactions?: (Transaction | null)[] | null;
  readonly lastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWallet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wallet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownerID: string;
  readonly balance: number;
  readonly currency: string;
  readonly transactions: AsyncCollection<Transaction>;
  readonly lastUpdated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Wallet = LazyLoading extends LazyLoadingDisabled ? EagerWallet : LazyWallet

export declare const Wallet: (new (init: ModelInit<Wallet>) => Wallet) & {
  copyOf(source: Wallet, mutator: (draft: MutableModel<Wallet>) => MutableModel<Wallet> | void): Wallet;
}

type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wallet?: Wallet | null;
  readonly amount: number;
  readonly type?: TransactionType | keyof typeof TransactionType | null;
  readonly description?: string | null;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletTransactionsId?: string | null;
  readonly userTransactionsId?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wallet: AsyncItem<Wallet | undefined>;
  readonly amount: number;
  readonly type?: TransactionType | keyof typeof TransactionType | null;
  readonly description?: string | null;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly walletTransactionsId?: string | null;
  readonly userTransactionsId?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Provider?: Provider | null;
  readonly user?: User | null;
  readonly service?: Service | null;
  readonly rating: number;
  readonly comment?: string | null;
  readonly date: string;
  readonly response?: ReviewResponse | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerReviewsId?: string | null;
  readonly userReviewsId?: string | null;
  readonly serviceReviewsId?: string | null;
  readonly reviewResponseId?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly service: AsyncItem<Service | undefined>;
  readonly rating: number;
  readonly comment?: string | null;
  readonly date: string;
  readonly response: AsyncItem<ReviewResponse | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerReviewsId?: string | null;
  readonly userReviewsId?: string | null;
  readonly serviceReviewsId?: string | null;
  readonly reviewResponseId?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerReviewResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReviewResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review?: Review | null;
  readonly responseText: string;
  readonly responseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewResponseReviewId?: string | null;
}

type LazyReviewResponse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReviewResponse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review: AsyncItem<Review | undefined>;
  readonly responseText: string;
  readonly responseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reviewResponseReviewId?: string | null;
}

export declare type ReviewResponse = LazyLoading extends LazyLoadingDisabled ? EagerReviewResponse : LazyReviewResponse

export declare const ReviewResponse: (new (init: ModelInit<ReviewResponse>) => ReviewResponse) & {
  copyOf(source: ReviewResponse, mutator: (draft: MutableModel<ReviewResponse>) => MutableModel<ReviewResponse> | void): ReviewResponse;
}

type EagerMessageThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageThread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider?: Provider | null;
  readonly user?: User | null;
  readonly messages?: (MessageContent | null)[] | null;
  readonly lastMessageDate?: string | null;
  readonly lastMessageContent?: string | null;
  readonly status?: MessageStatus | keyof typeof MessageStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderMessagesId?: string | null;
  readonly userMessagesId?: string | null;
}

type LazyMessageThread = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageThread, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly messages: AsyncCollection<MessageContent>;
  readonly lastMessageDate?: string | null;
  readonly lastMessageContent?: string | null;
  readonly status?: MessageStatus | keyof typeof MessageStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderMessagesId?: string | null;
  readonly userMessagesId?: string | null;
}

export declare type MessageThread = LazyLoading extends LazyLoadingDisabled ? EagerMessageThread : LazyMessageThread

export declare const MessageThread: (new (init: ModelInit<MessageThread>) => MessageThread) & {
  copyOf(source: MessageThread, mutator: (draft: MutableModel<MessageThread>) => MutableModel<MessageThread> | void): MessageThread;
}

type EagerMessageContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly thread?: MessageThread | null;
  readonly sender?: string | null;
  readonly content: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageThreadMessagesId?: string | null;
}

type LazyMessageContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly thread: AsyncItem<MessageThread | undefined>;
  readonly sender?: string | null;
  readonly content: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageThreadMessagesId?: string | null;
}

export declare type MessageContent = LazyLoading extends LazyLoadingDisabled ? EagerMessageContent : LazyMessageContent

export declare const MessageContent: (new (init: ModelInit<MessageContent>) => MessageContent) & {
  copyOf(source: MessageContent, mutator: (draft: MutableModel<MessageContent>) => MutableModel<MessageContent> | void): MessageContent;
}

type EagerBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
  readonly service?: Service | null;
  readonly provider?: Provider | null;
  readonly user?: User | null;
  readonly location?: string | null;
  readonly notes?: string | null;
  readonly price: number;
  readonly isInstantBooking?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceBookingsId?: string | null;
  readonly providerProviderBookingsId?: string | null;
  readonly userBookingsId?: string | null;
}

type LazyBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
  readonly service: AsyncItem<Service | undefined>;
  readonly provider: AsyncItem<Provider | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly location?: string | null;
  readonly notes?: string | null;
  readonly price: number;
  readonly isInstantBooking?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly serviceBookingsId?: string | null;
  readonly providerProviderBookingsId?: string | null;
  readonly userBookingsId?: string | null;
}

export declare type Booking = LazyLoading extends LazyLoadingDisabled ? EagerBooking : LazyBooking

export declare const Booking: (new (init: ModelInit<Booking>) => Booking) & {
  copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

type EagerTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly role?: string | null;
  readonly currentLocation?: Location | null;
  readonly jobSiteDuration?: string | null;
  readonly communicationLog?: (Message | null)[] | null;
  readonly assignedJobs?: (Job | null)[] | null;
  readonly providerID: string;
  readonly Provider?: Provider | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberCurrentLocationId?: string | null;
  readonly providerTeamMembersId?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly role?: string | null;
  readonly currentLocation: AsyncItem<Location | undefined>;
  readonly jobSiteDuration?: string | null;
  readonly communicationLog: AsyncCollection<Message>;
  readonly assignedJobs: AsyncCollection<Job>;
  readonly providerID: string;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberCurrentLocationId?: string | null;
  readonly providerTeamMembersId?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly content: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberCommunicationLogId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender: string;
  readonly content: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberCommunicationLogId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly location: string;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberAssignedJobsId?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly location: string;
  readonly startTime?: string | null;
  readonly endTime?: string | null;
  readonly status?: JobStatus | keyof typeof JobStatus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberAssignedJobsId?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price_min: number;
  readonly Provider?: Provider | null;
  readonly reviews?: (Review | null)[] | null;
  readonly bookings?: (Booking | null)[] | null;
  readonly SubCategory?: SubCategory | null;
  readonly servicePromotions?: (ServicePromotion | null)[] | null;
  readonly providerReports?: (ProviderReport | null)[] | null;
  readonly userReports?: (UserReport | null)[] | null;
  readonly userInvoices?: (UserInvoice | null)[] | null;
  readonly providerBookmarks?: (ProviderBookmark | null)[] | null;
  readonly userBookmarks?: (UserBookmark | null)[] | null;
  readonly providerNotifications?: (ProviderNotification | null)[] | null;
  readonly userNotifications?: (UserNotification | null)[] | null;
  readonly serviceDiscounts?: (ServiceDiscount | null)[] | null;
  readonly providerAvailabilities?: (ProviderAvailability | null)[] | null;
  readonly userPreferences?: (UserPreference | null)[] | null;
  readonly providerCertifications?: (ProviderCertification | null)[] | null;
  readonly serviceVideos?: (ServiceVideo | null)[] | null;
  readonly serviceImages?: (ServiceImage | null)[] | null;
  readonly serviceReviews?: (ServiceReview | null)[] | null;
  readonly aiDiagnostics?: (AIDiagnostics | null)[] | null;
  readonly customizations?: (Customization | null)[] | null;
  readonly expenses?: (Expense | null)[] | null;
  readonly favoriteProviders?: (FavoriteProvider | null)[] | null;
  readonly userHistories?: (UserHistory | null)[] | null;
  readonly providerAwards?: (ProviderAward | null)[] | null;
  readonly referrals?: (Referral | null)[] | null;
  readonly contracts?: (Contract | null)[] | null;
  readonly jobTrackings?: (JobTracking | null)[] | null;
  readonly duration?: string | null;
  readonly Materials?: string | null;
  readonly MaterialCosts?: number | null;
  readonly BookingRequirements?: string | null;
  readonly price_max: number;
  readonly Tasks?: Tasks | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly invoiceServicesId?: string | null;
  readonly servicePackageServicesId?: string | null;
  readonly subCategoryServicesId?: string | null;
  readonly providerServicesOfferedId?: string | null;
  readonly serviceTasksId?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly price_min: number;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly reviews: AsyncCollection<Review>;
  readonly bookings: AsyncCollection<Booking>;
  readonly SubCategory: AsyncItem<SubCategory | undefined>;
  readonly servicePromotions: AsyncCollection<ServicePromotion>;
  readonly providerReports: AsyncCollection<ProviderReport>;
  readonly userReports: AsyncCollection<UserReport>;
  readonly userInvoices: AsyncCollection<UserInvoice>;
  readonly providerBookmarks: AsyncCollection<ProviderBookmark>;
  readonly userBookmarks: AsyncCollection<UserBookmark>;
  readonly providerNotifications: AsyncCollection<ProviderNotification>;
  readonly userNotifications: AsyncCollection<UserNotification>;
  readonly serviceDiscounts: AsyncCollection<ServiceDiscount>;
  readonly providerAvailabilities: AsyncCollection<ProviderAvailability>;
  readonly userPreferences: AsyncCollection<UserPreference>;
  readonly providerCertifications: AsyncCollection<ProviderCertification>;
  readonly serviceVideos: AsyncCollection<ServiceVideo>;
  readonly serviceImages: AsyncCollection<ServiceImage>;
  readonly serviceReviews: AsyncCollection<ServiceReview>;
  readonly aiDiagnostics: AsyncCollection<AIDiagnostics>;
  readonly customizations: AsyncCollection<Customization>;
  readonly expenses: AsyncCollection<Expense>;
  readonly favoriteProviders: AsyncCollection<FavoriteProvider>;
  readonly userHistories: AsyncCollection<UserHistory>;
  readonly providerAwards: AsyncCollection<ProviderAward>;
  readonly referrals: AsyncCollection<Referral>;
  readonly contracts: AsyncCollection<Contract>;
  readonly jobTrackings: AsyncCollection<JobTracking>;
  readonly duration?: string | null;
  readonly Materials?: string | null;
  readonly MaterialCosts?: number | null;
  readonly BookingRequirements?: string | null;
  readonly price_max: number;
  readonly Tasks: AsyncItem<Tasks | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly invoiceServicesId?: string | null;
  readonly servicePackageServicesId?: string | null;
  readonly subCategoryServicesId?: string | null;
  readonly providerServicesOfferedId?: string | null;
  readonly serviceTasksId?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

type EagerProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dob?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zipCode?: string | null;
  readonly profileImage?: string | null;
  readonly isActive?: boolean | null;
  readonly isVerified?: boolean | null;
  readonly lastLogin?: string | null;
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly notificationPreference?: NotificationPreference | keyof typeof NotificationPreference | null;
  readonly languagePreference?: string | null;
  readonly currencyPreference?: string | null;
  readonly timezone?: string | null;
  readonly chatbotRequests?: number | null;
  readonly servicesOffered?: (Service | null)[] | null;
  readonly teamMembers?: (TeamMember | null)[] | null;
  readonly availability?: (Availability | null)[] | null;
  readonly reviews?: (Review | null)[] | null;
  readonly certifications?: (Certification | null)[] | null;
  readonly qualifications?: (Qualification | null)[] | null;
  readonly specializations?: (Specialization | null)[] | null;
  readonly providerBookings?: (Booking | null)[] | null;
  readonly providerMessages?: (MessageThread | null)[] | null;
  readonly providerContracts?: (Contract | null)[] | null;
  readonly providerInvoices?: (Invoice | null)[] | null;
  readonly providerTips?: (Tip | null)[] | null;
  readonly providerReferrals?: (Referral | null)[] | null;
  readonly providerHistories?: (ProviderHistory | null)[] | null;
  readonly providerNotifications?: (ProviderNotification | null)[] | null;
  readonly providerBookmarks?: (ProviderBookmark | null)[] | null;
  readonly providerReports?: (ProviderReport | null)[] | null;
  readonly providerAvailability?: (ProviderAvailability | null)[] | null;
  readonly providerCertification?: (ProviderCertification | null)[] | null;
  readonly favoriteProviders?: (FavoriteProvider | null)[] | null;
  readonly providerAwards?: (ProviderAward | null)[] | null;
  readonly jobTracking?: (JobTracking | null)[] | null;
  readonly expenses?: (Expense | null)[] | null;
  readonly currentLocation?: Location | null;
  readonly isInstantBookingAvailable?: boolean | null;
  readonly Tasks?: Tasks | null;
  readonly isEmailVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly nicheServiceProvidersId?: string | null;
  readonly providerCurrentLocationId?: string | null;
  readonly providerTasksId?: string | null;
}

type LazyProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Provider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dob?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zipCode?: string | null;
  readonly profileImage?: string | null;
  readonly isActive?: boolean | null;
  readonly isVerified?: boolean | null;
  readonly lastLogin?: string | null;
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly notificationPreference?: NotificationPreference | keyof typeof NotificationPreference | null;
  readonly languagePreference?: string | null;
  readonly currencyPreference?: string | null;
  readonly timezone?: string | null;
  readonly chatbotRequests?: number | null;
  readonly servicesOffered: AsyncCollection<Service>;
  readonly teamMembers: AsyncCollection<TeamMember>;
  readonly availability: AsyncCollection<Availability>;
  readonly reviews: AsyncCollection<Review>;
  readonly certifications: AsyncCollection<Certification>;
  readonly qualifications: AsyncCollection<Qualification>;
  readonly specializations: AsyncCollection<Specialization>;
  readonly providerBookings: AsyncCollection<Booking>;
  readonly providerMessages: AsyncCollection<MessageThread>;
  readonly providerContracts: AsyncCollection<Contract>;
  readonly providerInvoices: AsyncCollection<Invoice>;
  readonly providerTips: AsyncCollection<Tip>;
  readonly providerReferrals: AsyncCollection<Referral>;
  readonly providerHistories: AsyncCollection<ProviderHistory>;
  readonly providerNotifications: AsyncCollection<ProviderNotification>;
  readonly providerBookmarks: AsyncCollection<ProviderBookmark>;
  readonly providerReports: AsyncCollection<ProviderReport>;
  readonly providerAvailability: AsyncCollection<ProviderAvailability>;
  readonly providerCertification: AsyncCollection<ProviderCertification>;
  readonly favoriteProviders: AsyncCollection<FavoriteProvider>;
  readonly providerAwards: AsyncCollection<ProviderAward>;
  readonly jobTracking: AsyncCollection<JobTracking>;
  readonly expenses: AsyncCollection<Expense>;
  readonly currentLocation: AsyncItem<Location | undefined>;
  readonly isInstantBookingAvailable?: boolean | null;
  readonly Tasks: AsyncItem<Tasks | undefined>;
  readonly isEmailVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly nicheServiceProvidersId?: string | null;
  readonly providerCurrentLocationId?: string | null;
  readonly providerTasksId?: string | null;
}

export declare type Provider = LazyLoading extends LazyLoadingDisabled ? EagerProvider : LazyProvider

export declare const Provider: (new (init: ModelInit<Provider>) => Provider) & {
  copyOf(source: Provider, mutator: (draft: MutableModel<Provider>) => MutableModel<Provider> | void): Provider;
}

type EagerAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly Provider?: Provider | null;
  readonly avalabilityDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerAvailabilityId?: string | null;
}

type LazyAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly avalabilityDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerAvailabilityId?: string | null;
}

export declare type Availability = LazyLoading extends LazyLoadingDisabled ? EagerAvailability : LazyAvailability

export declare const Availability: (new (init: ModelInit<Availability>) => Availability) & {
  copyOf(source: Availability, mutator: (draft: MutableModel<Availability>) => MutableModel<Availability> | void): Availability;
}

type EagerProviderReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly userID: string;
  readonly rating: number;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProviderReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderReview, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly userID: string;
  readonly rating: number;
  readonly comment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProviderReview = LazyLoading extends LazyLoadingDisabled ? EagerProviderReview : LazyProviderReview

export declare const ProviderReview: (new (init: ModelInit<ProviderReview>) => ProviderReview) & {
  copyOf(source: ProviderReview, mutator: (draft: MutableModel<ProviderReview>) => MutableModel<ProviderReview> | void): ProviderReview;
}

type EagerCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly certificationName: string;
  readonly issuedBy?: string | null;
  readonly validFrom?: string | null;
  readonly validUntil?: string | null;
  readonly Provider?: Provider | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerCertificationsId?: string | null;
}

type LazyCertification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly certificationName: string;
  readonly issuedBy?: string | null;
  readonly validFrom?: string | null;
  readonly validUntil?: string | null;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerCertificationsId?: string | null;
}

export declare type Certification = LazyLoading extends LazyLoadingDisabled ? EagerCertification : LazyCertification

export declare const Certification: (new (init: ModelInit<Certification>) => Certification) & {
  copyOf(source: Certification, mutator: (draft: MutableModel<Certification>) => MutableModel<Certification> | void): Certification;
}

type EagerQualification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qualificationName: string;
  readonly institution?: string | null;
  readonly yearObtained?: number | null;
  readonly Provider?: Provider | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerQualificationsId?: string | null;
}

type LazyQualification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Qualification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qualificationName: string;
  readonly institution?: string | null;
  readonly yearObtained?: number | null;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerQualificationsId?: string | null;
}

export declare type Qualification = LazyLoading extends LazyLoadingDisabled ? EagerQualification : LazyQualification

export declare const Qualification: (new (init: ModelInit<Qualification>) => Qualification) & {
  copyOf(source: Qualification, mutator: (draft: MutableModel<Qualification>) => MutableModel<Qualification> | void): Qualification;
}

type EagerSpecialization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Specialization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly specializationName: string;
  readonly description?: string | null;
  readonly Provider?: Provider | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerSpecializationsId?: string | null;
}

type LazySpecialization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Specialization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly specializationName: string;
  readonly description?: string | null;
  readonly Provider: AsyncItem<Provider | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerSpecializationsId?: string | null;
}

export declare type Specialization = LazyLoading extends LazyLoadingDisabled ? EagerSpecialization : LazySpecialization

export declare const Specialization: (new (init: ModelInit<Specialization>) => Specialization) & {
  copyOf(source: Specialization, mutator: (draft: MutableModel<Specialization>) => MutableModel<Specialization> | void): Specialization;
}

type EagerProviderHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly event: string;
  readonly date: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderHistoriesId?: string | null;
}

type LazyProviderHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProviderHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly providerID: string;
  readonly event: string;
  readonly date: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerProviderHistoriesId?: string | null;
}

export declare type ProviderHistory = LazyLoading extends LazyLoadingDisabled ? EagerProviderHistory : LazyProviderHistory

export declare const ProviderHistory: (new (init: ModelInit<ProviderHistory>) => ProviderHistory) & {
  copyOf(source: ProviderHistory, mutator: (draft: MutableModel<ProviderHistory>) => MutableModel<ProviderHistory> | void): ProviderHistory;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dob?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zipCode?: string | null;
  readonly profileImage?: string | null;
  readonly isActive?: boolean | null;
  readonly isVerified?: boolean | null;
  readonly lastLogin?: string | null;
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly notificationPreference?: NotificationPreference | keyof typeof NotificationPreference | null;
  readonly languagePreference?: string | null;
  readonly currencyPreference?: string | null;
  readonly timezone?: string | null;
  readonly chatbotRequests?: number | null;
  readonly bookings?: (Booking | null)[] | null;
  readonly messages?: (MessageThread | null)[] | null;
  readonly reviews?: (Review | null)[] | null;
  readonly wallet?: Wallet | null;
  readonly transactions?: (Transaction | null)[] | null;
  readonly feedbacks?: (Feedback | null)[] | null;
  readonly subscriptions?: (PLMBRSubscription | null)[] | null;
  readonly aiChatBots?: (AIChatBot | null)[] | null;
  readonly aiChatLogs?: (AIChatLog | null)[] | null;
  readonly jobTrackings?: (JobTracking | null)[] | null;
  readonly reports?: (Report | null)[] | null;
  readonly loyaltyPrograms?: (LoyaltyProgram | null)[] | null;
  readonly rewards?: (Reward | null)[] | null;
  readonly contracts?: (Contract | null)[] | null;
  readonly invoices?: (Invoice | null)[] | null;
  readonly paymentMethods?: (PaymentMethod | null)[] | null;
  readonly tips?: (Tip | null)[] | null;
  readonly referrals?: (Referral | null)[] | null;
  readonly userHistories?: (UserHistory | null)[] | null;
  readonly favoriteProviders?: (FavoriteProvider | null)[] | null;
  readonly expenses?: (Expense | null)[] | null;
  readonly customizations?: (Customization | null)[] | null;
  readonly serviceReviews?: (ServiceReview | null)[] | null;
  readonly userNotifications?: (UserNotification | null)[] | null;
  readonly userBookmarks?: (UserBookmark | null)[] | null;
  readonly userInvoices?: (UserInvoice | null)[] | null;
  readonly userReports?: (UserReport | null)[] | null;
  readonly providerBookmarks?: (ProviderBookmark | null)[] | null;
  readonly userPreference?: (UserPreference | null)[] | null;
  readonly verifications?: (Verification | null)[] | null;
  readonly preferredContactTime?: string | null;
  readonly serviceInterestedIn?: string | null;
  readonly curentLocation?: Location | null;
  readonly isEmailVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userWalletId?: string | null;
  readonly userCurentLocationId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dob?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly zipCode?: string | null;
  readonly profileImage?: string | null;
  readonly isActive?: boolean | null;
  readonly isVerified?: boolean | null;
  readonly lastLogin?: string | null;
  readonly accountType?: AccountType | keyof typeof AccountType | null;
  readonly notificationPreference?: NotificationPreference | keyof typeof NotificationPreference | null;
  readonly languagePreference?: string | null;
  readonly currencyPreference?: string | null;
  readonly timezone?: string | null;
  readonly chatbotRequests?: number | null;
  readonly bookings: AsyncCollection<Booking>;
  readonly messages: AsyncCollection<MessageThread>;
  readonly reviews: AsyncCollection<Review>;
  readonly wallet: AsyncItem<Wallet | undefined>;
  readonly transactions: AsyncCollection<Transaction>;
  readonly feedbacks: AsyncCollection<Feedback>;
  readonly subscriptions: AsyncCollection<PLMBRSubscription>;
  readonly aiChatBots: AsyncCollection<AIChatBot>;
  readonly aiChatLogs: AsyncCollection<AIChatLog>;
  readonly jobTrackings: AsyncCollection<JobTracking>;
  readonly reports: AsyncCollection<Report>;
  readonly loyaltyPrograms: AsyncCollection<LoyaltyProgram>;
  readonly rewards: AsyncCollection<Reward>;
  readonly contracts: AsyncCollection<Contract>;
  readonly invoices: AsyncCollection<Invoice>;
  readonly paymentMethods: AsyncCollection<PaymentMethod>;
  readonly tips: AsyncCollection<Tip>;
  readonly referrals: AsyncCollection<Referral>;
  readonly userHistories: AsyncCollection<UserHistory>;
  readonly favoriteProviders: AsyncCollection<FavoriteProvider>;
  readonly expenses: AsyncCollection<Expense>;
  readonly customizations: AsyncCollection<Customization>;
  readonly serviceReviews: AsyncCollection<ServiceReview>;
  readonly userNotifications: AsyncCollection<UserNotification>;
  readonly userBookmarks: AsyncCollection<UserBookmark>;
  readonly userInvoices: AsyncCollection<UserInvoice>;
  readonly userReports: AsyncCollection<UserReport>;
  readonly providerBookmarks: AsyncCollection<ProviderBookmark>;
  readonly userPreference: AsyncCollection<UserPreference>;
  readonly verifications: AsyncCollection<Verification>;
  readonly preferredContactTime?: string | null;
  readonly serviceInterestedIn?: string | null;
  readonly curentLocation: AsyncItem<Location | undefined>;
  readonly isEmailVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userWalletId?: string | null;
  readonly userCurentLocationId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}