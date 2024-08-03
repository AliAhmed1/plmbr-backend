"use strict";
/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSortDirection = exports.EquipmentAvailabilityStatus = exports.EquipmentCategory = exports.VerificationStatus = exports.NotificationStatus = exports.CardType = exports.InvoiceStatus = exports.TransactionType = exports.MessageStatus = exports.BookingStatus = exports.JobStatus = exports.NotificationPreference = exports.AccountType = exports.Gender = exports.ModelAttributeTypes = void 0;
var ModelAttributeTypes;
(function (ModelAttributeTypes) {
    ModelAttributeTypes["binary"] = "binary";
    ModelAttributeTypes["binarySet"] = "binarySet";
    ModelAttributeTypes["bool"] = "bool";
    ModelAttributeTypes["list"] = "list";
    ModelAttributeTypes["map"] = "map";
    ModelAttributeTypes["number"] = "number";
    ModelAttributeTypes["numberSet"] = "numberSet";
    ModelAttributeTypes["string"] = "string";
    ModelAttributeTypes["stringSet"] = "stringSet";
    ModelAttributeTypes["_null"] = "_null";
})(ModelAttributeTypes || (exports.ModelAttributeTypes = ModelAttributeTypes = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (exports.Gender = Gender = {}));
var AccountType;
(function (AccountType) {
    AccountType["Basic"] = "Basic";
    AccountType["Premium"] = "Premium";
    AccountType["Platinum"] = "Platinum";
})(AccountType || (exports.AccountType = AccountType = {}));
var NotificationPreference;
(function (NotificationPreference) {
    NotificationPreference["Email"] = "Email";
    NotificationPreference["SMS"] = "SMS";
    NotificationPreference["Both"] = "Both";
})(NotificationPreference || (exports.NotificationPreference = NotificationPreference = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "PENDING";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["CANCELLED"] = "CANCELLED";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["PENDING"] = "PENDING";
    BookingStatus["CONFIRMED"] = "CONFIRMED";
    BookingStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BookingStatus["COMPLETED"] = "COMPLETED";
    BookingStatus["CANCELLED"] = "CANCELLED";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["UNREAD"] = "UNREAD";
    MessageStatus["READ"] = "READ";
})(MessageStatus || (exports.MessageStatus = MessageStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["Credit"] = "Credit";
    TransactionType["Debit"] = "Debit";
    TransactionType["Refund"] = "Refund";
    TransactionType["Withdrawal"] = "Withdrawal";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["PENDING"] = "PENDING";
    InvoiceStatus["PAID"] = "PAID";
    InvoiceStatus["OVERDUE"] = "OVERDUE";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
var CardType;
(function (CardType) {
    CardType["VISA"] = "VISA";
    CardType["MASTERCARD"] = "MASTERCARD";
    CardType["AMEX"] = "AMEX";
    CardType["DISCOVER"] = "DISCOVER";
})(CardType || (exports.CardType = CardType = {}));
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["UNREAD"] = "UNREAD";
    NotificationStatus["READ"] = "READ";
})(NotificationStatus || (exports.NotificationStatus = NotificationStatus = {}));
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["PENDING"] = "PENDING";
    VerificationStatus["VERIFIED"] = "VERIFIED";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
var EquipmentCategory;
(function (EquipmentCategory) {
    EquipmentCategory["Electrical"] = "Electrical";
    EquipmentCategory["Plumbing"] = "Plumbing";
    EquipmentCategory["Carpentry"] = "Carpentry";
    EquipmentCategory["Masonry"] = "Masonry";
    EquipmentCategory["Painting"] = "Painting";
    EquipmentCategory["HVAC"] = "HVAC";
})(EquipmentCategory || (exports.EquipmentCategory = EquipmentCategory = {}));
var EquipmentAvailabilityStatus;
(function (EquipmentAvailabilityStatus) {
    EquipmentAvailabilityStatus["Available"] = "Available";
    EquipmentAvailabilityStatus["InUse"] = "InUse";
    EquipmentAvailabilityStatus["UnderMaintenance"] = "UnderMaintenance";
    EquipmentAvailabilityStatus["Unavailable"] = "Unavailable";
})(EquipmentAvailabilityStatus || (exports.EquipmentAvailabilityStatus = EquipmentAvailabilityStatus = {}));
var ModelSortDirection;
(function (ModelSortDirection) {
    ModelSortDirection["ASC"] = "ASC";
    ModelSortDirection["DESC"] = "DESC";
})(ModelSortDirection || (exports.ModelSortDirection = ModelSortDirection = {}));
