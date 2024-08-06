/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getServicePromotion = /* GraphQL */ `query GetServicePromotion($id: ID!) {
  getServicePromotion(id: $id) {
    id
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    description
    startDate
    endDate
    discountPercentage
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceServicePromotionsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServicePromotionQueryVariables,
  APITypes.GetServicePromotionQuery
>;
export const listServicePromotions = /* GraphQL */ `query ListServicePromotions(
  $filter: ModelServicePromotionFilterInput
  $limit: Int
  $nextToken: String
) {
  listServicePromotions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      startDate
      endDate
      discountPercentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServicePromotionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicePromotionsQueryVariables,
  APITypes.ListServicePromotionsQuery
>;
export const syncServicePromotions = /* GraphQL */ `query SyncServicePromotions(
  $filter: ModelServicePromotionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServicePromotions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      startDate
      endDate
      discountPercentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServicePromotionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServicePromotionsQueryVariables,
  APITypes.SyncServicePromotionsQuery
>;
export const getProviderReport = /* GraphQL */ `query GetProviderReport($id: ID!) {
  getProviderReport(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    description
    dateReported
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderReportsId
    providerProviderReportsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderReportQueryVariables,
  APITypes.GetProviderReportQuery
>;
export const listProviderReports = /* GraphQL */ `query ListProviderReports(
  $filter: ModelProviderReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderReportsId
      providerProviderReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderReportsQueryVariables,
  APITypes.ListProviderReportsQuery
>;
export const syncProviderReports = /* GraphQL */ `query SyncProviderReports(
  $filter: ModelProviderReportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderReportsId
      providerProviderReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderReportsQueryVariables,
  APITypes.SyncProviderReportsQuery
>;
export const getUserReport = /* GraphQL */ `query GetUserReport($id: ID!) {
  getUserReport(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    description
    dateReported
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserReportsId
    userUserReportsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserReportQueryVariables,
  APITypes.GetUserReportQuery
>;
export const listUserReports = /* GraphQL */ `query ListUserReports(
  $filter: ModelUserReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserReportsId
      userUserReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserReportsQueryVariables,
  APITypes.ListUserReportsQuery
>;
export const syncUserReports = /* GraphQL */ `query SyncUserReports(
  $filter: ModelUserReportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserReportsId
      userUserReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserReportsQueryVariables,
  APITypes.SyncUserReportsQuery
>;
export const getUserInvoice = /* GraphQL */ `query GetUserInvoice($id: ID!) {
  getUserInvoice(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    amount
    dateIssued
    dueDate
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserInvoicesId
    userUserInvoicesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserInvoiceQueryVariables,
  APITypes.GetUserInvoiceQuery
>;
export const listUserInvoices = /* GraphQL */ `query ListUserInvoices(
  $filter: ModelUserInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      dateIssued
      dueDate
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserInvoicesId
      userUserInvoicesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserInvoicesQueryVariables,
  APITypes.ListUserInvoicesQuery
>;
export const syncUserInvoices = /* GraphQL */ `query SyncUserInvoices(
  $filter: ModelUserInvoiceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserInvoices(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      amount
      dateIssued
      dueDate
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserInvoicesId
      userUserInvoicesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserInvoicesQueryVariables,
  APITypes.SyncUserInvoicesQuery
>;
export const getProviderBookmark = /* GraphQL */ `query GetProviderBookmark($id: ID!) {
  getProviderBookmark(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    dateBookmarked
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderBookmarksId
    providerProviderBookmarksId
    userProviderBookmarksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderBookmarkQueryVariables,
  APITypes.GetProviderBookmarkQuery
>;
export const listProviderBookmarks = /* GraphQL */ `query ListProviderBookmarks(
  $filter: ModelProviderBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateBookmarked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderBookmarksId
      providerProviderBookmarksId
      userProviderBookmarksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderBookmarksQueryVariables,
  APITypes.ListProviderBookmarksQuery
>;
export const syncProviderBookmarks = /* GraphQL */ `query SyncProviderBookmarks(
  $filter: ModelProviderBookmarkFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderBookmarks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      dateBookmarked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderBookmarksId
      providerProviderBookmarksId
      userProviderBookmarksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderBookmarksQueryVariables,
  APITypes.SyncProviderBookmarksQuery
>;
export const getUserBookmark = /* GraphQL */ `query GetUserBookmark($id: ID!) {
  getUserBookmark(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    dateBookmarked
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserBookmarksId
    userUserBookmarksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserBookmarkQueryVariables,
  APITypes.GetUserBookmarkQuery
>;
export const listUserBookmarks = /* GraphQL */ `query ListUserBookmarks(
  $filter: ModelUserBookmarkFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateBookmarked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserBookmarksId
      userUserBookmarksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserBookmarksQueryVariables,
  APITypes.ListUserBookmarksQuery
>;
export const syncUserBookmarks = /* GraphQL */ `query SyncUserBookmarks(
  $filter: ModelUserBookmarkFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserBookmarks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      dateBookmarked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserBookmarksId
      userUserBookmarksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserBookmarksQueryVariables,
  APITypes.SyncUserBookmarksQuery
>;
export const getProviderNotification = /* GraphQL */ `query GetProviderNotification($id: ID!) {
  getProviderNotification(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    content
    dateSent
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderNotificationsId
    providerProviderNotificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderNotificationQueryVariables,
  APITypes.GetProviderNotificationQuery
>;
export const listProviderNotifications = /* GraphQL */ `query ListProviderNotifications(
  $filter: ModelProviderNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderNotificationsId
      providerProviderNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderNotificationsQueryVariables,
  APITypes.ListProviderNotificationsQuery
>;
export const syncProviderNotifications = /* GraphQL */ `query SyncProviderNotifications(
  $filter: ModelProviderNotificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      content
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderNotificationsId
      providerProviderNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderNotificationsQueryVariables,
  APITypes.SyncProviderNotificationsQuery
>;
export const getUserNotification = /* GraphQL */ `query GetUserNotification($id: ID!) {
  getUserNotification(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    content
    dateSent
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserNotificationsId
    userUserNotificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserNotificationQueryVariables,
  APITypes.GetUserNotificationQuery
>;
export const listUserNotifications = /* GraphQL */ `query ListUserNotifications(
  $filter: ModelUserNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserNotificationsId
      userUserNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserNotificationsQueryVariables,
  APITypes.ListUserNotificationsQuery
>;
export const syncUserNotifications = /* GraphQL */ `query SyncUserNotifications(
  $filter: ModelUserNotificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      content
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserNotificationsId
      userUserNotificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserNotificationsQueryVariables,
  APITypes.SyncUserNotificationsQuery
>;
export const getServiceDiscount = /* GraphQL */ `query GetServiceDiscount($id: ID!) {
  getServiceDiscount(id: $id) {
    id
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    discountPercentage
    startDate
    endDate
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceServiceDiscountsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceDiscountQueryVariables,
  APITypes.GetServiceDiscountQuery
>;
export const listServiceDiscounts = /* GraphQL */ `query ListServiceDiscounts(
  $filter: ModelServiceDiscountFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceDiscounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      discountPercentage
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceDiscountsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceDiscountsQueryVariables,
  APITypes.ListServiceDiscountsQuery
>;
export const syncServiceDiscounts = /* GraphQL */ `query SyncServiceDiscounts(
  $filter: ModelServiceDiscountFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceDiscounts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      discountPercentage
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceDiscountsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceDiscountsQueryVariables,
  APITypes.SyncServiceDiscountsQuery
>;
export const getProviderAvailability = /* GraphQL */ `query GetProviderAvailability($id: ID!) {
  getProviderAvailability(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    startDate
    endDate
    isScheduled
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderAvailabilitiesId
    providerProviderAvailabilityId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderAvailabilityQueryVariables,
  APITypes.GetProviderAvailabilityQuery
>;
export const listProviderAvailabilities = /* GraphQL */ `query ListProviderAvailabilities(
  $filter: ModelProviderAvailabilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderAvailabilities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      startDate
      endDate
      isScheduled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderAvailabilitiesId
      providerProviderAvailabilityId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderAvailabilitiesQueryVariables,
  APITypes.ListProviderAvailabilitiesQuery
>;
export const syncProviderAvailabilities = /* GraphQL */ `query SyncProviderAvailabilities(
  $filter: ModelProviderAvailabilityFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderAvailabilities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      startDate
      endDate
      isScheduled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderAvailabilitiesId
      providerProviderAvailabilityId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderAvailabilitiesQueryVariables,
  APITypes.SyncProviderAvailabilitiesQuery
>;
export const getUserPreference = /* GraphQL */ `query GetUserPreference($id: ID!) {
  getUserPreference(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    preferenceType
    preferenceValue
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserPreferencesId
    userUserPreferenceId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserPreferenceQueryVariables,
  APITypes.GetUserPreferenceQuery
>;
export const listUserPreferences = /* GraphQL */ `query ListUserPreferences(
  $filter: ModelUserPreferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      preferenceType
      preferenceValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserPreferencesId
      userUserPreferenceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserPreferencesQueryVariables,
  APITypes.ListUserPreferencesQuery
>;
export const syncUserPreferences = /* GraphQL */ `query SyncUserPreferences(
  $filter: ModelUserPreferenceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserPreferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      preferenceType
      preferenceValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserPreferencesId
      userUserPreferenceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserPreferencesQueryVariables,
  APITypes.SyncUserPreferencesQuery
>;
export const getProviderCertification = /* GraphQL */ `query GetProviderCertification($id: ID!) {
  getProviderCertification(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    certificationName
    issuedBy
    validFrom
    validUntil
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderCertificationsId
    providerProviderCertificationId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderCertificationQueryVariables,
  APITypes.GetProviderCertificationQuery
>;
export const listProviderCertifications = /* GraphQL */ `query ListProviderCertifications(
  $filter: ModelProviderCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      certificationName
      issuedBy
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderCertificationsId
      providerProviderCertificationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderCertificationsQueryVariables,
  APITypes.ListProviderCertificationsQuery
>;
export const syncProviderCertifications = /* GraphQL */ `query SyncProviderCertifications(
  $filter: ModelProviderCertificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      certificationName
      issuedBy
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderCertificationsId
      providerProviderCertificationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderCertificationsQueryVariables,
  APITypes.SyncProviderCertificationsQuery
>;
export const getServiceVideo = /* GraphQL */ `query GetServiceVideo($id: ID!) {
  getServiceVideo(id: $id) {
    id
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    videoURL
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceServiceVideosId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceVideoQueryVariables,
  APITypes.GetServiceVideoQuery
>;
export const listServiceVideos = /* GraphQL */ `query ListServiceVideos(
  $filter: ModelServiceVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      videoURL
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceVideosId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceVideosQueryVariables,
  APITypes.ListServiceVideosQuery
>;
export const syncServiceVideos = /* GraphQL */ `query SyncServiceVideos(
  $filter: ModelServiceVideoFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceVideos(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      videoURL
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceVideosId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceVideosQueryVariables,
  APITypes.SyncServiceVideosQuery
>;
export const getServiceImage = /* GraphQL */ `query GetServiceImage($id: ID!) {
  getServiceImage(id: $id) {
    id
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    imageURL
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceServiceImagesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceImageQueryVariables,
  APITypes.GetServiceImageQuery
>;
export const listServiceImages = /* GraphQL */ `query ListServiceImages(
  $filter: ModelServiceImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      imageURL
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceImagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceImagesQueryVariables,
  APITypes.ListServiceImagesQuery
>;
export const syncServiceImages = /* GraphQL */ `query SyncServiceImages(
  $filter: ModelServiceImageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceImages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      imageURL
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceImagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceImagesQueryVariables,
  APITypes.SyncServiceImagesQuery
>;
export const getServiceReview = /* GraphQL */ `query GetServiceReview($id: ID!) {
  getServiceReview(id: $id) {
    id
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    rating
    comment
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceServiceReviewsId
    userServiceReviewsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceReviewQueryVariables,
  APITypes.GetServiceReviewQuery
>;
export const listServiceReviews = /* GraphQL */ `query ListServiceReviews(
  $filter: ModelServiceReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceReviewsId
      userServiceReviewsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceReviewsQueryVariables,
  APITypes.ListServiceReviewsQuery
>;
export const syncServiceReviews = /* GraphQL */ `query SyncServiceReviews(
  $filter: ModelServiceReviewFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceReviews(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rating
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceServiceReviewsId
      userServiceReviewsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceReviewsQueryVariables,
  APITypes.SyncServiceReviewsQuery
>;
export const getAIDiagnostics = /* GraphQL */ `query GetAIDiagnostics($id: ID!) {
  getAIDiagnostics(id: $id) {
    id
    aiChatBot {
      id
      name
      version
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAiChatBotsId
      __typename
    }
    diagnosticData
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    aIChatBotDiagnosticsId
    serviceAiDiagnosticsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAIDiagnosticsQueryVariables,
  APITypes.GetAIDiagnosticsQuery
>;
export const listAIDiagnostics = /* GraphQL */ `query ListAIDiagnostics(
  $filter: ModelAIDiagnosticsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAIDiagnostics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      diagnosticData
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aIChatBotDiagnosticsId
      serviceAiDiagnosticsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAIDiagnosticsQueryVariables,
  APITypes.ListAIDiagnosticsQuery
>;
export const syncAIDiagnostics = /* GraphQL */ `query SyncAIDiagnostics(
  $filter: ModelAIDiagnosticsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAIDiagnostics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      diagnosticData
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aIChatBotDiagnosticsId
      serviceAiDiagnosticsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAIDiagnosticsQueryVariables,
  APITypes.SyncAIDiagnosticsQuery
>;
export const getCustomization = /* GraphQL */ `query GetCustomization($id: ID!) {
  getCustomization(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    customizationType
    customizationValue
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceCustomizationsId
    userCustomizationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomizationQueryVariables,
  APITypes.GetCustomizationQuery
>;
export const listCustomizations = /* GraphQL */ `query ListCustomizations(
  $filter: ModelCustomizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customizationType
      customizationValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceCustomizationsId
      userCustomizationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomizationsQueryVariables,
  APITypes.ListCustomizationsQuery
>;
export const syncCustomizations = /* GraphQL */ `query SyncCustomizations(
  $filter: ModelCustomizationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCustomizations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      customizationType
      customizationValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceCustomizationsId
      userCustomizationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCustomizationsQueryVariables,
  APITypes.SyncCustomizationsQuery
>;
export const getExpense = /* GraphQL */ `query GetExpense($id: ID!) {
  getExpense(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    amount
    description
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceExpensesId
    providerExpensesId
    userExpensesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExpenseQueryVariables,
  APITypes.GetExpenseQuery
>;
export const listExpenses = /* GraphQL */ `query ListExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      description
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceExpensesId
      providerExpensesId
      userExpensesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpensesQueryVariables,
  APITypes.ListExpensesQuery
>;
export const syncExpenses = /* GraphQL */ `query SyncExpenses(
  $filter: ModelExpenseFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      amount
      description
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceExpensesId
      providerExpensesId
      userExpensesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExpensesQueryVariables,
  APITypes.SyncExpensesQuery
>;
export const getFavoriteProvider = /* GraphQL */ `query GetFavoriteProvider($id: ID!) {
  getFavoriteProvider(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    dateAdded
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceFavoriteProvidersId
    providerFavoriteProvidersId
    userFavoriteProvidersId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFavoriteProviderQueryVariables,
  APITypes.GetFavoriteProviderQuery
>;
export const listFavoriteProviders = /* GraphQL */ `query ListFavoriteProviders(
  $filter: ModelFavoriteProviderFilterInput
  $limit: Int
  $nextToken: String
) {
  listFavoriteProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateAdded
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceFavoriteProvidersId
      providerFavoriteProvidersId
      userFavoriteProvidersId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFavoriteProvidersQueryVariables,
  APITypes.ListFavoriteProvidersQuery
>;
export const syncFavoriteProviders = /* GraphQL */ `query SyncFavoriteProviders(
  $filter: ModelFavoriteProviderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFavoriteProviders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      dateAdded
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceFavoriteProvidersId
      providerFavoriteProvidersId
      userFavoriteProvidersId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFavoriteProvidersQueryVariables,
  APITypes.SyncFavoriteProvidersQuery
>;
export const getUserHistory = /* GraphQL */ `query GetUserHistory($id: ID!) {
  getUserHistory(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    action
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceUserHistoriesId
    userUserHistoriesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserHistoryQueryVariables,
  APITypes.GetUserHistoryQuery
>;
export const listUserHistories = /* GraphQL */ `query ListUserHistories(
  $filter: ModelUserHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      action
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserHistoriesId
      userUserHistoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserHistoriesQueryVariables,
  APITypes.ListUserHistoriesQuery
>;
export const syncUserHistories = /* GraphQL */ `query SyncUserHistories(
  $filter: ModelUserHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      action
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceUserHistoriesId
      userUserHistoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserHistoriesQueryVariables,
  APITypes.SyncUserHistoriesQuery
>;
export const getProviderAward = /* GraphQL */ `query GetProviderAward($id: ID!) {
  getProviderAward(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    awardName
    awardedBy
    dateAwarded
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceProviderAwardsId
    providerProviderAwardsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderAwardQueryVariables,
  APITypes.GetProviderAwardQuery
>;
export const listProviderAwards = /* GraphQL */ `query ListProviderAwards(
  $filter: ModelProviderAwardFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      awardName
      awardedBy
      dateAwarded
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderAwardsId
      providerProviderAwardsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderAwardsQueryVariables,
  APITypes.ListProviderAwardsQuery
>;
export const syncProviderAwards = /* GraphQL */ `query SyncProviderAwards(
  $filter: ModelProviderAwardFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderAwards(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      awardName
      awardedBy
      dateAwarded
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceProviderAwardsId
      providerProviderAwardsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderAwardsQueryVariables,
  APITypes.SyncProviderAwardsQuery
>;
export const getReferral = /* GraphQL */ `query GetReferral($id: ID!) {
  getReferral(id: $id) {
    id
    referrer {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    referred {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    dateReferred
    reward {
      id
      rewardName
      description
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loyaltyProgramRewardsId
      userRewardsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    rewardReferralsId
    serviceReferralsId
    providerProviderReferralsId
    userReferralsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReferralQueryVariables,
  APITypes.GetReferralQuery
>;
export const listReferrals = /* GraphQL */ `query ListReferrals(
  $filter: ModelReferralFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateReferred
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rewardReferralsId
      serviceReferralsId
      providerProviderReferralsId
      userReferralsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReferralsQueryVariables,
  APITypes.ListReferralsQuery
>;
export const syncReferrals = /* GraphQL */ `query SyncReferrals(
  $filter: ModelReferralFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReferrals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      dateReferred
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rewardReferralsId
      serviceReferralsId
      providerProviderReferralsId
      userReferralsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReferralsQueryVariables,
  APITypes.SyncReferralsQuery
>;
export const getTip = /* GraphQL */ `query GetTip($id: ID!) {
  getTip(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    amount
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerProviderTipsId
    userTipsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTipQueryVariables, APITypes.GetTipQuery>;
export const listTips = /* GraphQL */ `query ListTips($filter: ModelTipFilterInput, $limit: Int, $nextToken: String) {
  listTips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderTipsId
      userTipsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTipsQueryVariables, APITypes.ListTipsQuery>;
export const syncTips = /* GraphQL */ `query SyncTips(
  $filter: ModelTipFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTips(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      amount
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderTipsId
      userTipsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTipsQueryVariables, APITypes.SyncTipsQuery>;
export const getPaymentMethod = /* GraphQL */ `query GetPaymentMethod($id: ID!) {
  getPaymentMethod(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    cardNumber
    expiryDate
    cardType
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userPaymentMethodsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentMethodQueryVariables,
  APITypes.GetPaymentMethodQuery
>;
export const listPaymentMethods = /* GraphQL */ `query ListPaymentMethods(
  $filter: ModelPaymentMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  listPaymentMethods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cardNumber
      expiryDate
      cardType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPaymentMethodsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentMethodsQueryVariables,
  APITypes.ListPaymentMethodsQuery
>;
export const syncPaymentMethods = /* GraphQL */ `query SyncPaymentMethods(
  $filter: ModelPaymentMethodFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPaymentMethods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      cardNumber
      expiryDate
      cardType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPaymentMethodsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPaymentMethodsQueryVariables,
  APITypes.SyncPaymentMethodsQuery
>;
export const getInvoice = /* GraphQL */ `query GetInvoice($id: ID!) {
  getInvoice(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    amount
    dateIssued
    dueDate
    status
    services {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerProviderInvoicesId
    userInvoicesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInvoiceQueryVariables,
  APITypes.GetInvoiceQuery
>;
export const listInvoices = /* GraphQL */ `query ListInvoices(
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      dateIssued
      dueDate
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderInvoicesId
      userInvoicesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvoicesQueryVariables,
  APITypes.ListInvoicesQuery
>;
export const syncInvoices = /* GraphQL */ `query SyncInvoices(
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncInvoices(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      amount
      dateIssued
      dueDate
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderInvoicesId
      userInvoicesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncInvoicesQueryVariables,
  APITypes.SyncInvoicesQuery
>;
export const getContract = /* GraphQL */ `query GetContract($id: ID!) {
  getContract(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    startDate
    endDate
    terms
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceContractsId
    providerProviderContractsId
    userContractsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContractQueryVariables,
  APITypes.GetContractQuery
>;
export const listContracts = /* GraphQL */ `query ListContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
) {
  listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      startDate
      endDate
      terms
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceContractsId
      providerProviderContractsId
      userContractsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContractsQueryVariables,
  APITypes.ListContractsQuery
>;
export const syncContracts = /* GraphQL */ `query SyncContracts(
  $filter: ModelContractFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncContracts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      startDate
      endDate
      terms
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceContractsId
      providerProviderContractsId
      userContractsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncContractsQueryVariables,
  APITypes.SyncContractsQuery
>;
export const getNicheService = /* GraphQL */ `query GetNicheService($id: ID!) {
  getNicheService(id: $id) {
    id
    serviceName
    description
    providers {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNicheServiceQueryVariables,
  APITypes.GetNicheServiceQuery
>;
export const listNicheServices = /* GraphQL */ `query ListNicheServices(
  $filter: ModelNicheServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listNicheServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      serviceName
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNicheServicesQueryVariables,
  APITypes.ListNicheServicesQuery
>;
export const syncNicheServices = /* GraphQL */ `query SyncNicheServices(
  $filter: ModelNicheServiceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNicheServices(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      serviceName
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncNicheServicesQueryVariables,
  APITypes.SyncNicheServicesQuery
>;
export const getServicePackage = /* GraphQL */ `query GetServicePackage($id: ID!) {
  getServicePackage(id: $id) {
    id
    packageName
    services {
      nextToken
      startedAt
      __typename
    }
    discount
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServicePackageQueryVariables,
  APITypes.GetServicePackageQuery
>;
export const listServicePackages = /* GraphQL */ `query ListServicePackages(
  $filter: ModelServicePackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listServicePackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      packageName
      discount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicePackagesQueryVariables,
  APITypes.ListServicePackagesQuery
>;
export const syncServicePackages = /* GraphQL */ `query SyncServicePackages(
  $filter: ModelServicePackageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServicePackages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      packageName
      discount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServicePackagesQueryVariables,
  APITypes.SyncServicePackagesQuery
>;
export const getReward = /* GraphQL */ `query GetReward($id: ID!) {
  getReward(id: $id) {
    id
    rewardName
    description
    value
    referrals {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    loyaltyProgramRewardsId
    userRewardsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRewardQueryVariables, APITypes.GetRewardQuery>;
export const listRewards = /* GraphQL */ `query ListRewards(
  $filter: ModelRewardFilterInput
  $limit: Int
  $nextToken: String
) {
  listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rewardName
      description
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loyaltyProgramRewardsId
      userRewardsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRewardsQueryVariables,
  APITypes.ListRewardsQuery
>;
export const syncRewards = /* GraphQL */ `query SyncRewards(
  $filter: ModelRewardFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRewards(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rewardName
      description
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      loyaltyProgramRewardsId
      userRewardsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRewardsQueryVariables,
  APITypes.SyncRewardsQuery
>;
export const getLoyaltyProgram = /* GraphQL */ `query GetLoyaltyProgram($id: ID!) {
  getLoyaltyProgram(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    points
    rewards {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userLoyaltyProgramsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLoyaltyProgramQueryVariables,
  APITypes.GetLoyaltyProgramQuery
>;
export const listLoyaltyPrograms = /* GraphQL */ `query ListLoyaltyPrograms(
  $filter: ModelLoyaltyProgramFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoyaltyPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLoyaltyProgramsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLoyaltyProgramsQueryVariables,
  APITypes.ListLoyaltyProgramsQuery
>;
export const syncLoyaltyPrograms = /* GraphQL */ `query SyncLoyaltyPrograms(
  $filter: ModelLoyaltyProgramFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLoyaltyPrograms(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLoyaltyProgramsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLoyaltyProgramsQueryVariables,
  APITypes.SyncLoyaltyProgramsQuery
>;
export const getVerification = /* GraphQL */ `query GetVerification($id: ID!) {
  getVerification(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    verificationCode
    dateSent
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userVerificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVerificationQueryVariables,
  APITypes.GetVerificationQuery
>;
export const listVerifications = /* GraphQL */ `query ListVerifications(
  $filter: ModelVerificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVerifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      verificationCode
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userVerificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVerificationsQueryVariables,
  APITypes.ListVerificationsQuery
>;
export const syncVerifications = /* GraphQL */ `query SyncVerifications(
  $filter: ModelVerificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncVerifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      verificationCode
      dateSent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userVerificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncVerificationsQueryVariables,
  APITypes.SyncVerificationsQuery
>;
export const getAnalytics = /* GraphQL */ `query GetAnalytics($id: ID!) {
  getAnalytics(id: $id) {
    id
    userCount
    providerCount
    serviceCount
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAnalyticsQueryVariables,
  APITypes.GetAnalyticsQuery
>;
export const listAnalytics = /* GraphQL */ `query ListAnalytics(
  $filter: ModelAnalyticsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnalytics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userCount
      providerCount
      serviceCount
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAnalyticsQueryVariables,
  APITypes.ListAnalyticsQuery
>;
export const syncAnalytics = /* GraphQL */ `query SyncAnalytics(
  $filter: ModelAnalyticsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAnalytics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userCount
      providerCount
      serviceCount
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAnalyticsQueryVariables,
  APITypes.SyncAnalyticsQuery
>;
export const getPromoCode = /* GraphQL */ `query GetPromoCode($id: ID!) {
  getPromoCode(id: $id) {
    id
    code
    discount
    validFrom
    validUntil
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPromoCodeQueryVariables,
  APITypes.GetPromoCodeQuery
>;
export const listPromoCodes = /* GraphQL */ `query ListPromoCodes(
  $filter: ModelPromoCodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPromoCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      code
      discount
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPromoCodesQueryVariables,
  APITypes.ListPromoCodesQuery
>;
export const syncPromoCodes = /* GraphQL */ `query SyncPromoCodes(
  $filter: ModelPromoCodeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPromoCodes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      code
      discount
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPromoCodesQueryVariables,
  APITypes.SyncPromoCodesQuery
>;
export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
    id
    reporter {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    reportedEntity
    description
    dateReported
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userReportsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reportedEntity
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const syncReports = /* GraphQL */ `query SyncReports(
  $filter: ModelReportFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReports(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      reportedEntity
      description
      dateReported
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userReportsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReportsQueryVariables,
  APITypes.SyncReportsQuery
>;
export const getJobTracking = /* GraphQL */ `query GetJobTracking($id: ID!) {
  getJobTracking(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    status
    startDate
    endDate
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceJobTrackingsId
    providerJobTrackingId
    userJobTrackingsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobTrackingQueryVariables,
  APITypes.GetJobTrackingQuery
>;
export const listJobTrackings = /* GraphQL */ `query ListJobTrackings(
  $filter: ModelJobTrackingFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceJobTrackingsId
      providerJobTrackingId
      userJobTrackingsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobTrackingsQueryVariables,
  APITypes.ListJobTrackingsQuery
>;
export const syncJobTrackings = /* GraphQL */ `query SyncJobTrackings(
  $filter: ModelJobTrackingFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncJobTrackings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      status
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceJobTrackingsId
      providerJobTrackingId
      userJobTrackingsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncJobTrackingsQueryVariables,
  APITypes.SyncJobTrackingsQuery
>;
export const getAIChatLog = /* GraphQL */ `query GetAIChatLog($id: ID!) {
  getAIChatLog(id: $id) {
    id
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    aiChatBot {
      id
      name
      version
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAiChatBotsId
      __typename
    }
    message
    response
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    aIChatBotChatLogsId
    userAiChatLogsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAIChatLogQueryVariables,
  APITypes.GetAIChatLogQuery
>;
export const listAIChatLogs = /* GraphQL */ `query ListAIChatLogs(
  $filter: ModelAIChatLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listAIChatLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      message
      response
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aIChatBotChatLogsId
      userAiChatLogsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAIChatLogsQueryVariables,
  APITypes.ListAIChatLogsQuery
>;
export const syncAIChatLogs = /* GraphQL */ `query SyncAIChatLogs(
  $filter: ModelAIChatLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAIChatLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      message
      response
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      aIChatBotChatLogsId
      userAiChatLogsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAIChatLogsQueryVariables,
  APITypes.SyncAIChatLogsQuery
>;
export const getAIChatBot = /* GraphQL */ `query GetAIChatBot($id: ID!) {
  getAIChatBot(id: $id) {
    id
    name
    version
    diagnostics {
      nextToken
      startedAt
      __typename
    }
    chatLogs {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userAiChatBotsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAIChatBotQueryVariables,
  APITypes.GetAIChatBotQuery
>;
export const listAIChatBots = /* GraphQL */ `query ListAIChatBots(
  $filter: ModelAIChatBotFilterInput
  $limit: Int
  $nextToken: String
) {
  listAIChatBots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      version
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAiChatBotsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAIChatBotsQueryVariables,
  APITypes.ListAIChatBotsQuery
>;
export const syncAIChatBots = /* GraphQL */ `query SyncAIChatBots(
  $filter: ModelAIChatBotFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAIChatBots(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      version
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAiChatBotsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAIChatBotsQueryVariables,
  APITypes.SyncAIChatBotsQuery
>;
export const getMainCategory = /* GraphQL */ `query GetMainCategory($id: ID!) {
  getMainCategory(id: $id) {
    id
    name
    descrption
    SubCategories {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMainCategoryQueryVariables,
  APITypes.GetMainCategoryQuery
>;
export const listMainCategories = /* GraphQL */ `query ListMainCategories(
  $filter: ModelMainCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMainCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      descrption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMainCategoriesQueryVariables,
  APITypes.ListMainCategoriesQuery
>;
export const syncMainCategories = /* GraphQL */ `query SyncMainCategories(
  $filter: ModelMainCategoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMainCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      descrption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMainCategoriesQueryVariables,
  APITypes.SyncMainCategoriesQuery
>;
export const getSubCategory = /* GraphQL */ `query GetSubCategory($id: ID!) {
  getSubCategory(id: $id) {
    id
    name
    description
    MainCategory {
      id
      name
      descrption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    Services {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    mainCategorySubCategoriesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubCategoryQueryVariables,
  APITypes.GetSubCategoryQuery
>;
export const listSubCategories = /* GraphQL */ `query ListSubCategories(
  $filter: ModelSubCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mainCategorySubCategoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubCategoriesQueryVariables,
  APITypes.ListSubCategoriesQuery
>;
export const syncSubCategories = /* GraphQL */ `query SyncSubCategories(
  $filter: ModelSubCategoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSubCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mainCategorySubCategoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSubCategoriesQueryVariables,
  APITypes.SyncSubCategoriesQuery
>;
export const getPLMBRSubscription = /* GraphQL */ `query GetPLMBRSubscription($id: ID!) {
  getPLMBRSubscription(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userSubscriptionsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPLMBRSubscriptionQueryVariables,
  APITypes.GetPLMBRSubscriptionQuery
>;
export const listPLMBRSubscriptions = /* GraphQL */ `query ListPLMBRSubscriptions(
  $filter: ModelPLMBRSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPLMBRSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSubscriptionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPLMBRSubscriptionsQueryVariables,
  APITypes.ListPLMBRSubscriptionsQuery
>;
export const syncPLMBRSubscriptions = /* GraphQL */ `query SyncPLMBRSubscriptions(
  $filter: ModelPLMBRSubscriptionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPLMBRSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSubscriptionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPLMBRSubscriptionsQueryVariables,
  APITypes.SyncPLMBRSubscriptionsQuery
>;
export const getUserSettings = /* GraphQL */ `query GetUserSettings($id: ID!) {
  getUserSettings(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserSettingsQueryVariables,
  APITypes.GetUserSettingsQuery
>;
export const listUserSettings = /* GraphQL */ `query ListUserSettings(
  $filter: ModelUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSettingsQueryVariables,
  APITypes.ListUserSettingsQuery
>;
export const syncUserSettings = /* GraphQL */ `query SyncUserSettings(
  $filter: ModelUserSettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserSettingsQueryVariables,
  APITypes.SyncUserSettingsQuery
>;
export const getProviderSettings = /* GraphQL */ `query GetProviderSettings($id: ID!) {
  getProviderSettings(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderSettingsQueryVariables,
  APITypes.GetProviderSettingsQuery
>;
export const listProviderSettings = /* GraphQL */ `query ListProviderSettings(
  $filter: ModelProviderSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderSettingsQueryVariables,
  APITypes.ListProviderSettingsQuery
>;
export const syncProviderSettings = /* GraphQL */ `query SyncProviderSettings(
  $filter: ModelProviderSettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderSettingsQueryVariables,
  APITypes.SyncProviderSettingsQuery
>;
export const getPortfolio = /* GraphQL */ `query GetPortfolio($id: ID!) {
  getPortfolio(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPortfolioQueryVariables,
  APITypes.GetPortfolioQuery
>;
export const listPortfolios = /* GraphQL */ `query ListPortfolios(
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
) {
  listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPortfoliosQueryVariables,
  APITypes.ListPortfoliosQuery
>;
export const syncPortfolios = /* GraphQL */ `query SyncPortfolios(
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPortfolios(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPortfoliosQueryVariables,
  APITypes.SyncPortfoliosQuery
>;
export const getServiceVariant = /* GraphQL */ `query GetServiceVariant($id: ID!) {
  getServiceVariant(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceVariantQueryVariables,
  APITypes.GetServiceVariantQuery
>;
export const listServiceVariants = /* GraphQL */ `query ListServiceVariants(
  $filter: ModelServiceVariantFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceVariants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceVariantsQueryVariables,
  APITypes.ListServiceVariantsQuery
>;
export const syncServiceVariants = /* GraphQL */ `query SyncServiceVariants(
  $filter: ModelServiceVariantFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceVariants(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceVariantsQueryVariables,
  APITypes.SyncServiceVariantsQuery
>;
export const getServiceHighlight = /* GraphQL */ `query GetServiceHighlight($id: ID!) {
  getServiceHighlight(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceHighlightQueryVariables,
  APITypes.GetServiceHighlightQuery
>;
export const listServiceHighlights = /* GraphQL */ `query ListServiceHighlights(
  $filter: ModelServiceHighlightFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceHighlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceHighlightsQueryVariables,
  APITypes.ListServiceHighlightsQuery
>;
export const syncServiceHighlights = /* GraphQL */ `query SyncServiceHighlights(
  $filter: ModelServiceHighlightFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceHighlights(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceHighlightsQueryVariables,
  APITypes.SyncServiceHighlightsQuery
>;
export const getServiceTag = /* GraphQL */ `query GetServiceTag($id: ID!) {
  getServiceTag(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceTagQueryVariables,
  APITypes.GetServiceTagQuery
>;
export const listServiceTags = /* GraphQL */ `query ListServiceTags(
  $filter: ModelServiceTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceTagsQueryVariables,
  APITypes.ListServiceTagsQuery
>;
export const syncServiceTags = /* GraphQL */ `query SyncServiceTags(
  $filter: ModelServiceTagFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceTags(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceTagsQueryVariables,
  APITypes.SyncServiceTagsQuery
>;
export const getServiceFAQ = /* GraphQL */ `query GetServiceFAQ($id: ID!) {
  getServiceFAQ(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceFAQQueryVariables,
  APITypes.GetServiceFAQQuery
>;
export const listServiceFAQS = /* GraphQL */ `query ListServiceFAQS(
  $filter: ModelServiceFAQFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceFAQSQueryVariables,
  APITypes.ListServiceFAQSQuery
>;
export const syncServiceFAQS = /* GraphQL */ `query SyncServiceFAQS(
  $filter: ModelServiceFAQFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceFAQS(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceFAQSQueryVariables,
  APITypes.SyncServiceFAQSQuery
>;
export const getFeedback = /* GraphQL */ `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userFeedbacksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedbackQueryVariables,
  APITypes.GetFeedbackQuery
>;
export const listFeedbacks = /* GraphQL */ `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFeedbacksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbacksQueryVariables,
  APITypes.ListFeedbacksQuery
>;
export const syncFeedbacks = /* GraphQL */ `query SyncFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncFeedbacks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userFeedbacksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncFeedbacksQueryVariables,
  APITypes.SyncFeedbacksQuery
>;
export const getEquipment = /* GraphQL */ `query GetEquipment($id: ID!) {
  getEquipment(id: $id) {
    id
    providerID
    name
    description
    category
    availabilityStatus
    purchaseDate
    maintenanceDate
    image
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEquipmentQueryVariables,
  APITypes.GetEquipmentQuery
>;
export const listEquipment = /* GraphQL */ `query ListEquipment(
  $filter: ModelEquipmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      providerID
      name
      description
      category
      availabilityStatus
      purchaseDate
      maintenanceDate
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEquipmentQueryVariables,
  APITypes.ListEquipmentQuery
>;
export const syncEquipment = /* GraphQL */ `query SyncEquipment(
  $filter: ModelEquipmentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEquipment(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      providerID
      name
      description
      category
      availabilityStatus
      purchaseDate
      maintenanceDate
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEquipmentQueryVariables,
  APITypes.SyncEquipmentQuery
>;
export const getWallet = /* GraphQL */ `query GetWallet($id: ID!) {
  getWallet(id: $id) {
    id
    ownerID
    balance
    currency
    transactions {
      nextToken
      startedAt
      __typename
    }
    lastUpdated
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetWalletQueryVariables, APITypes.GetWalletQuery>;
export const listWallets = /* GraphQL */ `query ListWallets(
  $filter: ModelWalletFilterInput
  $limit: Int
  $nextToken: String
) {
  listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ownerID
      balance
      currency
      lastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWalletsQueryVariables,
  APITypes.ListWalletsQuery
>;
export const syncWallets = /* GraphQL */ `query SyncWallets(
  $filter: ModelWalletFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncWallets(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      ownerID
      balance
      currency
      lastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncWalletsQueryVariables,
  APITypes.SyncWalletsQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    id
    wallet {
      id
      ownerID
      balance
      currency
      lastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    amount
    type
    description
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    walletTransactionsId
    userTransactionsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      amount
      type
      description
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      walletTransactionsId
      userTransactionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const syncTransactions = /* GraphQL */ `query SyncTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      amount
      type
      description
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      walletTransactionsId
      userTransactionsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTransactionsQueryVariables,
  APITypes.SyncTransactionsQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    rating
    comment
    date
    response {
      id
      responseText
      responseDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reviewResponseReviewId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceReviewsId
    providerReviewsId
    userReviewsId
    reviewResponseId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceReviewsId
      providerReviewsId
      userReviewsId
      reviewResponseId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const syncReviews = /* GraphQL */ `query SyncReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReviews(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      rating
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceReviewsId
      providerReviewsId
      userReviewsId
      reviewResponseId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReviewsQueryVariables,
  APITypes.SyncReviewsQuery
>;
export const getReviewResponse = /* GraphQL */ `query GetReviewResponse($id: ID!) {
  getReviewResponse(id: $id) {
    id
    review {
      id
      rating
      comment
      date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceReviewsId
      providerReviewsId
      userReviewsId
      reviewResponseId
      __typename
    }
    responseText
    responseDate
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    reviewResponseReviewId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetReviewResponseQueryVariables,
  APITypes.GetReviewResponseQuery
>;
export const listReviewResponses = /* GraphQL */ `query ListReviewResponses(
  $filter: ModelReviewResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviewResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      responseText
      responseDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reviewResponseReviewId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewResponsesQueryVariables,
  APITypes.ListReviewResponsesQuery
>;
export const syncReviewResponses = /* GraphQL */ `query SyncReviewResponses(
  $filter: ModelReviewResponseFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReviewResponses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      responseText
      responseDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      reviewResponseReviewId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReviewResponsesQueryVariables,
  APITypes.SyncReviewResponsesQuery
>;
export const getMessageThread = /* GraphQL */ `query GetMessageThread($id: ID!) {
  getMessageThread(id: $id) {
    id
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    messages {
      nextToken
      startedAt
      __typename
    }
    lastMessageDate
    lastMessageContent
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerProviderMessagesId
    userMessagesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageThreadQueryVariables,
  APITypes.GetMessageThreadQuery
>;
export const listMessageThreads = /* GraphQL */ `query ListMessageThreads(
  $filter: ModelMessageThreadFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      lastMessageDate
      lastMessageContent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderMessagesId
      userMessagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageThreadsQueryVariables,
  APITypes.ListMessageThreadsQuery
>;
export const syncMessageThreads = /* GraphQL */ `query SyncMessageThreads(
  $filter: ModelMessageThreadFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessageThreads(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      lastMessageDate
      lastMessageContent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderMessagesId
      userMessagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessageThreadsQueryVariables,
  APITypes.SyncMessageThreadsQuery
>;
export const getMessageContent = /* GraphQL */ `query GetMessageContent($id: ID!) {
  getMessageContent(id: $id) {
    id
    thread {
      id
      lastMessageDate
      lastMessageContent
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderMessagesId
      userMessagesId
      __typename
    }
    sender
    content
    timestamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    messageThreadMessagesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageContentQueryVariables,
  APITypes.GetMessageContentQuery
>;
export const listMessageContents = /* GraphQL */ `query ListMessageContents(
  $filter: ModelMessageContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sender
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageThreadMessagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessageContentsQueryVariables,
  APITypes.ListMessageContentsQuery
>;
export const syncMessageContents = /* GraphQL */ `query SyncMessageContents(
  $filter: ModelMessageContentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessageContents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      sender
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageThreadMessagesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessageContentsQueryVariables,
  APITypes.SyncMessageContentsQuery
>;
export const getBooking = /* GraphQL */ `query GetBooking($id: ID!) {
  getBooking(id: $id) {
    id
    date
    startTime
    endTime
    status
    service {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    user {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    location
    notes
    price
    isInstantBooking
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    serviceBookingsId
    providerProviderBookingsId
    userBookingsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBookingQueryVariables,
  APITypes.GetBookingQuery
>;
export const listBookings = /* GraphQL */ `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      startTime
      endTime
      status
      location
      notes
      price
      isInstantBooking
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceBookingsId
      providerProviderBookingsId
      userBookingsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookingsQueryVariables,
  APITypes.ListBookingsQuery
>;
export const syncBookings = /* GraphQL */ `query SyncBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBookings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      date
      startTime
      endTime
      status
      location
      notes
      price
      isInstantBooking
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      serviceBookingsId
      providerProviderBookingsId
      userBookingsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBookingsQueryVariables,
  APITypes.SyncBookingsQuery
>;
export const getTeamMember = /* GraphQL */ `query GetTeamMember($id: ID!) {
  getTeamMember(id: $id) {
    id
    name
    role
    currentLocation {
      id
      latitude
      longitude
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    jobSiteDuration
    communicationLog {
      nextToken
      startedAt
      __typename
    }
    assignedJobs {
      nextToken
      startedAt
      __typename
    }
    providerID
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerTeamMembersId
    teamMemberCurrentLocationId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTeamMemberQueryVariables,
  APITypes.GetTeamMemberQuery
>;
export const listTeamMembers = /* GraphQL */ `query ListTeamMembers(
  $filter: ModelTeamMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      role
      jobSiteDuration
      providerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerTeamMembersId
      teamMemberCurrentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeamMembersQueryVariables,
  APITypes.ListTeamMembersQuery
>;
export const syncTeamMembers = /* GraphQL */ `query SyncTeamMembers(
  $filter: ModelTeamMemberFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTeamMembers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      role
      jobSiteDuration
      providerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerTeamMembersId
      teamMemberCurrentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncTeamMembersQueryVariables,
  APITypes.SyncTeamMembersQuery
>;
export const getLocation = /* GraphQL */ `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    latitude
    longitude
    timestamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLocationQueryVariables,
  APITypes.GetLocationQuery
>;
export const listLocations = /* GraphQL */ `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      latitude
      longitude
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationsQueryVariables,
  APITypes.ListLocationsQuery
>;
export const syncLocations = /* GraphQL */ `query SyncLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLocations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      latitude
      longitude
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLocationsQueryVariables,
  APITypes.SyncLocationsQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    sender
    content
    timestamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    teamMemberCommunicationLogId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sender
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberCommunicationLogId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const syncMessages = /* GraphQL */ `query SyncMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncMessages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      sender
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberCommunicationLogId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncMessagesQueryVariables,
  APITypes.SyncMessagesQuery
>;
export const getJob = /* GraphQL */ `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    description
    location
    startTime
    endTime
    status
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    teamMemberAssignedJobsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetJobQueryVariables, APITypes.GetJobQuery>;
export const listJobs = /* GraphQL */ `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      location
      startTime
      endTime
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberAssignedJobsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListJobsQueryVariables, APITypes.ListJobsQuery>;
export const syncJobs = /* GraphQL */ `query SyncJobs(
  $filter: ModelJobFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncJobs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      description
      location
      startTime
      endTime
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberAssignedJobsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncJobsQueryVariables, APITypes.SyncJobsQuery>;
export const getService = /* GraphQL */ `query GetService($id: ID!) {
  getService(id: $id) {
    id
    name
    description
    price_min
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    reviews {
      nextToken
      startedAt
      __typename
    }
    bookings {
      nextToken
      startedAt
      __typename
    }
    SubCategory {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mainCategorySubCategoriesId
      __typename
    }
    servicePromotions {
      nextToken
      startedAt
      __typename
    }
    providerReports {
      nextToken
      startedAt
      __typename
    }
    userReports {
      nextToken
      startedAt
      __typename
    }
    userInvoices {
      nextToken
      startedAt
      __typename
    }
    providerBookmarks {
      nextToken
      startedAt
      __typename
    }
    userBookmarks {
      nextToken
      startedAt
      __typename
    }
    providerNotifications {
      nextToken
      startedAt
      __typename
    }
    userNotifications {
      nextToken
      startedAt
      __typename
    }
    serviceDiscounts {
      nextToken
      startedAt
      __typename
    }
    providerAvailabilities {
      nextToken
      startedAt
      __typename
    }
    userPreferences {
      nextToken
      startedAt
      __typename
    }
    providerCertifications {
      nextToken
      startedAt
      __typename
    }
    serviceVideos {
      nextToken
      startedAt
      __typename
    }
    serviceImages {
      nextToken
      startedAt
      __typename
    }
    serviceReviews {
      nextToken
      startedAt
      __typename
    }
    aiDiagnostics {
      nextToken
      startedAt
      __typename
    }
    customizations {
      nextToken
      startedAt
      __typename
    }
    expenses {
      nextToken
      startedAt
      __typename
    }
    favoriteProviders {
      nextToken
      startedAt
      __typename
    }
    userHistories {
      nextToken
      startedAt
      __typename
    }
    providerAwards {
      nextToken
      startedAt
      __typename
    }
    referrals {
      nextToken
      startedAt
      __typename
    }
    contracts {
      nextToken
      startedAt
      __typename
    }
    jobTrackings {
      nextToken
      startedAt
      __typename
    }
    duration
    Materials
    MaterialCosts
    BookingRequirements
    price_max
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    invoiceServicesId
    servicePackageServicesId
    subCategoryServicesId
    providerServicesOfferedId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceQueryVariables,
  APITypes.GetServiceQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const syncServices = /* GraphQL */ `query SyncServices(
  $filter: ModelServiceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServices(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      price_min
      duration
      Materials
      MaterialCosts
      BookingRequirements
      price_max
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      invoiceServicesId
      servicePackageServicesId
      subCategoryServicesId
      providerServicesOfferedId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServicesQueryVariables,
  APITypes.SyncServicesQuery
>;
export const getProvider = /* GraphQL */ `query GetProvider($id: ID!) {
  getProvider(id: $id) {
    id
    email
    password
    firstName
    lastName
    dob
    gender
    phone
    address
    city
    state
    country
    zipCode
    profileImage
    isActive
    isVerified
    lastLogin
    accountType
    notificationPreference
    languagePreference
    currencyPreference
    timezone
    chatbotRequests
    servicesOffered {
      nextToken
      startedAt
      __typename
    }
    teamMembers {
      nextToken
      startedAt
      __typename
    }
    availability {
      nextToken
      startedAt
      __typename
    }
    reviews {
      nextToken
      startedAt
      __typename
    }
    certifications {
      nextToken
      startedAt
      __typename
    }
    qualifications {
      nextToken
      startedAt
      __typename
    }
    specializations {
      nextToken
      startedAt
      __typename
    }
    providerBookings {
      nextToken
      startedAt
      __typename
    }
    providerMessages {
      nextToken
      startedAt
      __typename
    }
    providerContracts {
      nextToken
      startedAt
      __typename
    }
    providerInvoices {
      nextToken
      startedAt
      __typename
    }
    providerTips {
      nextToken
      startedAt
      __typename
    }
    providerReferrals {
      nextToken
      startedAt
      __typename
    }
    providerHistories {
      nextToken
      startedAt
      __typename
    }
    providerNotifications {
      nextToken
      startedAt
      __typename
    }
    providerBookmarks {
      nextToken
      startedAt
      __typename
    }
    providerReports {
      nextToken
      startedAt
      __typename
    }
    providerAvailability {
      nextToken
      startedAt
      __typename
    }
    providerCertification {
      nextToken
      startedAt
      __typename
    }
    favoriteProviders {
      nextToken
      startedAt
      __typename
    }
    providerAwards {
      nextToken
      startedAt
      __typename
    }
    jobTracking {
      nextToken
      startedAt
      __typename
    }
    expenses {
      nextToken
      startedAt
      __typename
    }
    currentLocation {
      id
      latitude
      longitude
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    isInstantBookingAvailable
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    nicheServiceProvidersId
    providerCurrentLocationId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderQueryVariables,
  APITypes.GetProviderQuery
>;
export const listProviders = /* GraphQL */ `query ListProviders(
  $filter: ModelProviderFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProvidersQueryVariables,
  APITypes.ListProvidersQuery
>;
export const syncProviders = /* GraphQL */ `query SyncProviders(
  $filter: ModelProviderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProvidersQueryVariables,
  APITypes.SyncProvidersQuery
>;
export const getAvailability = /* GraphQL */ `query GetAvailability($id: ID!) {
  getAvailability(id: $id) {
    id
    startTime
    endTime
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    avalabilityDate
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerAvailabilityId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAvailabilityQueryVariables,
  APITypes.GetAvailabilityQuery
>;
export const listAvailabilities = /* GraphQL */ `query ListAvailabilities(
  $filter: ModelAvailabilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listAvailabilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      startTime
      endTime
      avalabilityDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerAvailabilityId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAvailabilitiesQueryVariables,
  APITypes.ListAvailabilitiesQuery
>;
export const syncAvailabilities = /* GraphQL */ `query SyncAvailabilities(
  $filter: ModelAvailabilityFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAvailabilities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      startTime
      endTime
      avalabilityDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerAvailabilityId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAvailabilitiesQueryVariables,
  APITypes.SyncAvailabilitiesQuery
>;
export const getProviderReview = /* GraphQL */ `query GetProviderReview($id: ID!) {
  getProviderReview(id: $id) {
    id
    providerID
    userID
    rating
    comment
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderReviewQueryVariables,
  APITypes.GetProviderReviewQuery
>;
export const listProviderReviews = /* GraphQL */ `query ListProviderReviews(
  $filter: ModelProviderReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      providerID
      userID
      rating
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderReviewsQueryVariables,
  APITypes.ListProviderReviewsQuery
>;
export const syncProviderReviews = /* GraphQL */ `query SyncProviderReviews(
  $filter: ModelProviderReviewFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderReviews(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      providerID
      userID
      rating
      comment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderReviewsQueryVariables,
  APITypes.SyncProviderReviewsQuery
>;
export const getCertification = /* GraphQL */ `query GetCertification($id: ID!) {
  getCertification(id: $id) {
    id
    certificationName
    issuedBy
    validFrom
    validUntil
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerCertificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCertificationQueryVariables,
  APITypes.GetCertificationQuery
>;
export const listCertifications = /* GraphQL */ `query ListCertifications(
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      certificationName
      issuedBy
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerCertificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCertificationsQueryVariables,
  APITypes.ListCertificationsQuery
>;
export const syncCertifications = /* GraphQL */ `query SyncCertifications(
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      certificationName
      issuedBy
      validFrom
      validUntil
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerCertificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCertificationsQueryVariables,
  APITypes.SyncCertificationsQuery
>;
export const getQualification = /* GraphQL */ `query GetQualification($id: ID!) {
  getQualification(id: $id) {
    id
    qualificationName
    institution
    yearObtained
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerQualificationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetQualificationQueryVariables,
  APITypes.GetQualificationQuery
>;
export const listQualifications = /* GraphQL */ `query ListQualifications(
  $filter: ModelQualificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listQualifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      qualificationName
      institution
      yearObtained
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerQualificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQualificationsQueryVariables,
  APITypes.ListQualificationsQuery
>;
export const syncQualifications = /* GraphQL */ `query SyncQualifications(
  $filter: ModelQualificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncQualifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      qualificationName
      institution
      yearObtained
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerQualificationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncQualificationsQueryVariables,
  APITypes.SyncQualificationsQuery
>;
export const getSpecialization = /* GraphQL */ `query GetSpecialization($id: ID!) {
  getSpecialization(id: $id) {
    id
    specializationName
    description
    Provider {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      isInstantBookingAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerSpecializationsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpecializationQueryVariables,
  APITypes.GetSpecializationQuery
>;
export const listSpecializations = /* GraphQL */ `query ListSpecializations(
  $filter: ModelSpecializationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpecializations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      specializationName
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerSpecializationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecializationsQueryVariables,
  APITypes.ListSpecializationsQuery
>;
export const syncSpecializations = /* GraphQL */ `query SyncSpecializations(
  $filter: ModelSpecializationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSpecializations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      specializationName
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerSpecializationsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSpecializationsQueryVariables,
  APITypes.SyncSpecializationsQuery
>;
export const getProviderHistory = /* GraphQL */ `query GetProviderHistory($id: ID!) {
  getProviderHistory(id: $id) {
    id
    providerID
    event
    date
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    providerProviderHistoriesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProviderHistoryQueryVariables,
  APITypes.GetProviderHistoryQuery
>;
export const listProviderHistories = /* GraphQL */ `query ListProviderHistories(
  $filter: ModelProviderHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listProviderHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      providerID
      event
      date
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderHistoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProviderHistoriesQueryVariables,
  APITypes.ListProviderHistoriesQuery
>;
export const syncProviderHistories = /* GraphQL */ `query SyncProviderHistories(
  $filter: ModelProviderHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviderHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      providerID
      event
      date
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      providerProviderHistoriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProviderHistoriesQueryVariables,
  APITypes.SyncProviderHistoriesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    email
    password
    firstName
    lastName
    dob
    gender
    phone
    address
    city
    state
    country
    zipCode
    profileImage
    isActive
    isVerified
    lastLogin
    accountType
    notificationPreference
    languagePreference
    currencyPreference
    timezone
    chatbotRequests
    bookings {
      nextToken
      startedAt
      __typename
    }
    messages {
      nextToken
      startedAt
      __typename
    }
    reviews {
      nextToken
      startedAt
      __typename
    }
    wallet {
      id
      ownerID
      balance
      currency
      lastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    transactions {
      nextToken
      startedAt
      __typename
    }
    feedbacks {
      nextToken
      startedAt
      __typename
    }
    subscriptions {
      nextToken
      startedAt
      __typename
    }
    aiChatBots {
      nextToken
      startedAt
      __typename
    }
    aiChatLogs {
      nextToken
      startedAt
      __typename
    }
    jobTrackings {
      nextToken
      startedAt
      __typename
    }
    reports {
      nextToken
      startedAt
      __typename
    }
    loyaltyPrograms {
      nextToken
      startedAt
      __typename
    }
    rewards {
      nextToken
      startedAt
      __typename
    }
    contracts {
      nextToken
      startedAt
      __typename
    }
    invoices {
      nextToken
      startedAt
      __typename
    }
    paymentMethods {
      nextToken
      startedAt
      __typename
    }
    tips {
      nextToken
      startedAt
      __typename
    }
    referrals {
      nextToken
      startedAt
      __typename
    }
    userHistories {
      nextToken
      startedAt
      __typename
    }
    favoriteProviders {
      nextToken
      startedAt
      __typename
    }
    expenses {
      nextToken
      startedAt
      __typename
    }
    customizations {
      nextToken
      startedAt
      __typename
    }
    serviceReviews {
      nextToken
      startedAt
      __typename
    }
    userNotifications {
      nextToken
      startedAt
      __typename
    }
    userBookmarks {
      nextToken
      startedAt
      __typename
    }
    userInvoices {
      nextToken
      startedAt
      __typename
    }
    userReports {
      nextToken
      startedAt
      __typename
    }
    providerBookmarks {
      nextToken
      startedAt
      __typename
    }
    userPreference {
      nextToken
      startedAt
      __typename
    }
    verifications {
      nextToken
      startedAt
      __typename
    }
    preferredContactTime
    serviceInterestedIn
    curentLocation {
      id
      latitude
      longitude
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userWalletId
    userCurentLocationId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      password
      firstName
      lastName
      dob
      gender
      phone
      address
      city
      state
      country
      zipCode
      profileImage
      isActive
      isVerified
      lastLogin
      accountType
      notificationPreference
      languagePreference
      currencyPreference
      timezone
      chatbotRequests
      preferredContactTime
      serviceInterestedIn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userWalletId
      userCurentLocationId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
