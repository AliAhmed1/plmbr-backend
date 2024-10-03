// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const InvoiceStatus = {
  "PENDING": "PENDING",
  "PAID": "PAID",
  "OVERDUE": "OVERDUE"
};

const NotificationStatus = {
  "UNREAD": "UNREAD",
  "READ": "READ"
};

const CardType = {
  "VISA": "VISA",
  "MASTERCARD": "MASTERCARD",
  "AMEX": "AMEX",
  "DISCOVER": "DISCOVER"
};

const VerificationStatus = {
  "PENDING": "PENDING",
  "VERIFIED": "VERIFIED"
};

const JobStatus = {
  "PENDING": "PENDING",
  "IN_PROGRESS": "IN_PROGRESS",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const EquipmentCategory = {
  "ELECTRICAL": "Electrical",
  "PLUMBING": "Plumbing",
  "CARPENTRY": "Carpentry",
  "MASONRY": "Masonry",
  "PAINTING": "Painting",
  "HVAC": "HVAC"
};

const EquipmentAvailabilityStatus = {
  "AVAILABLE": "Available",
  "IN_USE": "InUse",
  "UNDER_MAINTENANCE": "UnderMaintenance",
  "UNAVAILABLE": "Unavailable"
};

const TransactionType = {
  "CREDIT": "Credit",
  "DEBIT": "Debit",
  "REFUND": "Refund",
  "WITHDRAWAL": "Withdrawal"
};

const MessageStatus = {
  "UNREAD": "UNREAD",
  "READ": "READ"
};

const BookingStatus = {
  "PENDING": "PENDING",
  "CONFIRMED": "CONFIRMED",
  "IN_PROGRESS": "IN_PROGRESS",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const Gender = {
  "MALE": "Male",
  "FEMALE": "Female",
  "OTHER": "Other"
};

const AccountType = {
  "BASIC": "Basic",
  "PREMIUM": "Premium",
  "PLATINUM": "Platinum"
};

const NotificationPreference = {
  "EMAIL": "Email",
  "SMS": "SMS",
  "BOTH": "Both"
};

const { Tasks, ServicePromotion, ProviderReport, UserReport, UserInvoice, ProviderBookmark, UserBookmark, ProviderNotification, UserNotification, ServiceDiscount, ProviderAvailability, UserPreference, ProviderCertification, ServiceVideo, ServiceImage, ServiceReview, AIDiagnostics, Customization, Expense, FavoriteProvider, UserHistory, ProviderAward, Referral, Tip, PaymentMethod, Invoice, Contract, NicheService, ServicePackage, Reward, LoyaltyProgram, Verification, Analytics, PromoCode, Report, JobTracking, AIChatLog, AIChatBot, MainCategory, SubCategory, PLMBRSubscription, UserSettings, ProviderSettings, Portfolio, ServiceVariant, ServiceHighlight, ServiceTag, ServiceFAQ, Feedback, Equipment, Wallet, Transaction, Review, ReviewResponse, MessageThread, MessageContent, Booking, TeamMember, Location, Message, Job, Service, Provider, Availability, ProviderReview, Certification, Qualification, Specialization, ProviderHistory, User } = initSchema(schema);

export {
  Tasks,
  ServicePromotion,
  ProviderReport,
  UserReport,
  UserInvoice,
  ProviderBookmark,
  UserBookmark,
  ProviderNotification,
  UserNotification,
  ServiceDiscount,
  ProviderAvailability,
  UserPreference,
  ProviderCertification,
  ServiceVideo,
  ServiceImage,
  ServiceReview,
  AIDiagnostics,
  Customization,
  Expense,
  FavoriteProvider,
  UserHistory,
  ProviderAward,
  Referral,
  Tip,
  PaymentMethod,
  Invoice,
  Contract,
  NicheService,
  ServicePackage,
  Reward,
  LoyaltyProgram,
  Verification,
  Analytics,
  PromoCode,
  Report,
  JobTracking,
  AIChatLog,
  AIChatBot,
  MainCategory,
  SubCategory,
  PLMBRSubscription,
  UserSettings,
  ProviderSettings,
  Portfolio,
  ServiceVariant,
  ServiceHighlight,
  ServiceTag,
  ServiceFAQ,
  Feedback,
  Equipment,
  Wallet,
  Transaction,
  Review,
  ReviewResponse,
  MessageThread,
  MessageContent,
  Booking,
  TeamMember,
  Location,
  Message,
  Job,
  Service,
  Provider,
  Availability,
  ProviderReview,
  Certification,
  Qualification,
  Specialization,
  ProviderHistory,
  User,
  InvoiceStatus,
  NotificationStatus,
  CardType,
  VerificationStatus,
  JobStatus,
  EquipmentCategory,
  EquipmentAvailabilityStatus,
  TransactionType,
  MessageStatus,
  BookingStatus,
  Gender,
  AccountType,
  NotificationPreference
};