/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProviderSchedule = /* GraphQL */ `subscription OnCreateProviderSchedule(
  $filter: ModelSubscriptionProviderScheduleFilterInput
) {
  onCreateProviderSchedule(filter: $filter) {
    id
    providerID
    startTime
    endTime
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProviderScheduleSubscriptionVariables,
  APITypes.OnCreateProviderScheduleSubscription
>;
export const onUpdateProviderSchedule = /* GraphQL */ `subscription OnUpdateProviderSchedule(
  $filter: ModelSubscriptionProviderScheduleFilterInput
) {
  onUpdateProviderSchedule(filter: $filter) {
    id
    providerID
    startTime
    endTime
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProviderScheduleSubscriptionVariables,
  APITypes.OnUpdateProviderScheduleSubscription
>;
export const onDeleteProviderSchedule = /* GraphQL */ `subscription OnDeleteProviderSchedule(
  $filter: ModelSubscriptionProviderScheduleFilterInput
) {
  onDeleteProviderSchedule(filter: $filter) {
    id
    providerID
    startTime
    endTime
    date
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProviderScheduleSubscriptionVariables,
  APITypes.OnDeleteProviderScheduleSubscription
>;
export const onCreateServicePromotion = /* GraphQL */ `subscription OnCreateServicePromotion(
  $filter: ModelSubscriptionServicePromotionFilterInput
) {
  onCreateServicePromotion(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateServicePromotionSubscriptionVariables,
  APITypes.OnCreateServicePromotionSubscription
>;
export const onUpdateServicePromotion = /* GraphQL */ `subscription OnUpdateServicePromotion(
  $filter: ModelSubscriptionServicePromotionFilterInput
) {
  onUpdateServicePromotion(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateServicePromotionSubscriptionVariables,
  APITypes.OnUpdateServicePromotionSubscription
>;
export const onDeleteServicePromotion = /* GraphQL */ `subscription OnDeleteServicePromotion(
  $filter: ModelSubscriptionServicePromotionFilterInput
) {
  onDeleteServicePromotion(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteServicePromotionSubscriptionVariables,
  APITypes.OnDeleteServicePromotionSubscription
>;
export const onCreateProviderReport = /* GraphQL */ `subscription OnCreateProviderReport(
  $filter: ModelSubscriptionProviderReportFilterInput
) {
  onCreateProviderReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderReportSubscriptionVariables,
  APITypes.OnCreateProviderReportSubscription
>;
export const onUpdateProviderReport = /* GraphQL */ `subscription OnUpdateProviderReport(
  $filter: ModelSubscriptionProviderReportFilterInput
) {
  onUpdateProviderReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderReportSubscriptionVariables,
  APITypes.OnUpdateProviderReportSubscription
>;
export const onDeleteProviderReport = /* GraphQL */ `subscription OnDeleteProviderReport(
  $filter: ModelSubscriptionProviderReportFilterInput
) {
  onDeleteProviderReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderReportSubscriptionVariables,
  APITypes.OnDeleteProviderReportSubscription
>;
export const onCreateUserReport = /* GraphQL */ `subscription OnCreateUserReport(
  $filter: ModelSubscriptionUserReportFilterInput
) {
  onCreateUserReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserReportSubscriptionVariables,
  APITypes.OnCreateUserReportSubscription
>;
export const onUpdateUserReport = /* GraphQL */ `subscription OnUpdateUserReport(
  $filter: ModelSubscriptionUserReportFilterInput
) {
  onUpdateUserReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserReportSubscriptionVariables,
  APITypes.OnUpdateUserReportSubscription
>;
export const onDeleteUserReport = /* GraphQL */ `subscription OnDeleteUserReport(
  $filter: ModelSubscriptionUserReportFilterInput
) {
  onDeleteUserReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserReportSubscriptionVariables,
  APITypes.OnDeleteUserReportSubscription
>;
export const onCreateUserInvoice = /* GraphQL */ `subscription OnCreateUserInvoice(
  $filter: ModelSubscriptionUserInvoiceFilterInput
) {
  onCreateUserInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserInvoiceSubscriptionVariables,
  APITypes.OnCreateUserInvoiceSubscription
>;
export const onUpdateUserInvoice = /* GraphQL */ `subscription OnUpdateUserInvoice(
  $filter: ModelSubscriptionUserInvoiceFilterInput
) {
  onUpdateUserInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserInvoiceSubscriptionVariables,
  APITypes.OnUpdateUserInvoiceSubscription
>;
export const onDeleteUserInvoice = /* GraphQL */ `subscription OnDeleteUserInvoice(
  $filter: ModelSubscriptionUserInvoiceFilterInput
) {
  onDeleteUserInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserInvoiceSubscriptionVariables,
  APITypes.OnDeleteUserInvoiceSubscription
>;
export const onCreateProviderBookmark = /* GraphQL */ `subscription OnCreateProviderBookmark(
  $filter: ModelSubscriptionProviderBookmarkFilterInput
) {
  onCreateProviderBookmark(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderBookmarkSubscriptionVariables,
  APITypes.OnCreateProviderBookmarkSubscription
>;
export const onUpdateProviderBookmark = /* GraphQL */ `subscription OnUpdateProviderBookmark(
  $filter: ModelSubscriptionProviderBookmarkFilterInput
) {
  onUpdateProviderBookmark(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderBookmarkSubscriptionVariables,
  APITypes.OnUpdateProviderBookmarkSubscription
>;
export const onDeleteProviderBookmark = /* GraphQL */ `subscription OnDeleteProviderBookmark(
  $filter: ModelSubscriptionProviderBookmarkFilterInput
) {
  onDeleteProviderBookmark(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderBookmarkSubscriptionVariables,
  APITypes.OnDeleteProviderBookmarkSubscription
>;
export const onCreateUserBookmark = /* GraphQL */ `subscription OnCreateUserBookmark(
  $filter: ModelSubscriptionUserBookmarkFilterInput
) {
  onCreateUserBookmark(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateUserBookmarkSubscriptionVariables,
  APITypes.OnCreateUserBookmarkSubscription
>;
export const onUpdateUserBookmark = /* GraphQL */ `subscription OnUpdateUserBookmark(
  $filter: ModelSubscriptionUserBookmarkFilterInput
) {
  onUpdateUserBookmark(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserBookmarkSubscriptionVariables,
  APITypes.OnUpdateUserBookmarkSubscription
>;
export const onDeleteUserBookmark = /* GraphQL */ `subscription OnDeleteUserBookmark(
  $filter: ModelSubscriptionUserBookmarkFilterInput
) {
  onDeleteUserBookmark(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserBookmarkSubscriptionVariables,
  APITypes.OnDeleteUserBookmarkSubscription
>;
export const onCreateProviderNotification = /* GraphQL */ `subscription OnCreateProviderNotification(
  $filter: ModelSubscriptionProviderNotificationFilterInput
) {
  onCreateProviderNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderNotificationSubscriptionVariables,
  APITypes.OnCreateProviderNotificationSubscription
>;
export const onUpdateProviderNotification = /* GraphQL */ `subscription OnUpdateProviderNotification(
  $filter: ModelSubscriptionProviderNotificationFilterInput
) {
  onUpdateProviderNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderNotificationSubscriptionVariables,
  APITypes.OnUpdateProviderNotificationSubscription
>;
export const onDeleteProviderNotification = /* GraphQL */ `subscription OnDeleteProviderNotification(
  $filter: ModelSubscriptionProviderNotificationFilterInput
) {
  onDeleteProviderNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderNotificationSubscriptionVariables,
  APITypes.OnDeleteProviderNotificationSubscription
>;
export const onCreateUserNotification = /* GraphQL */ `subscription OnCreateUserNotification(
  $filter: ModelSubscriptionUserNotificationFilterInput
) {
  onCreateUserNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserNotificationSubscriptionVariables,
  APITypes.OnCreateUserNotificationSubscription
>;
export const onUpdateUserNotification = /* GraphQL */ `subscription OnUpdateUserNotification(
  $filter: ModelSubscriptionUserNotificationFilterInput
) {
  onUpdateUserNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserNotificationSubscriptionVariables,
  APITypes.OnUpdateUserNotificationSubscription
>;
export const onDeleteUserNotification = /* GraphQL */ `subscription OnDeleteUserNotification(
  $filter: ModelSubscriptionUserNotificationFilterInput
) {
  onDeleteUserNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserNotificationSubscriptionVariables,
  APITypes.OnDeleteUserNotificationSubscription
>;
export const onCreateServiceDiscount = /* GraphQL */ `subscription OnCreateServiceDiscount(
  $filter: ModelSubscriptionServiceDiscountFilterInput
) {
  onCreateServiceDiscount(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceDiscountSubscriptionVariables,
  APITypes.OnCreateServiceDiscountSubscription
>;
export const onUpdateServiceDiscount = /* GraphQL */ `subscription OnUpdateServiceDiscount(
  $filter: ModelSubscriptionServiceDiscountFilterInput
) {
  onUpdateServiceDiscount(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceDiscountSubscriptionVariables,
  APITypes.OnUpdateServiceDiscountSubscription
>;
export const onDeleteServiceDiscount = /* GraphQL */ `subscription OnDeleteServiceDiscount(
  $filter: ModelSubscriptionServiceDiscountFilterInput
) {
  onDeleteServiceDiscount(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceDiscountSubscriptionVariables,
  APITypes.OnDeleteServiceDiscountSubscription
>;
export const onCreateProviderAvailability = /* GraphQL */ `subscription OnCreateProviderAvailability(
  $filter: ModelSubscriptionProviderAvailabilityFilterInput
) {
  onCreateProviderAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderAvailabilitySubscriptionVariables,
  APITypes.OnCreateProviderAvailabilitySubscription
>;
export const onUpdateProviderAvailability = /* GraphQL */ `subscription OnUpdateProviderAvailability(
  $filter: ModelSubscriptionProviderAvailabilityFilterInput
) {
  onUpdateProviderAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderAvailabilitySubscriptionVariables,
  APITypes.OnUpdateProviderAvailabilitySubscription
>;
export const onDeleteProviderAvailability = /* GraphQL */ `subscription OnDeleteProviderAvailability(
  $filter: ModelSubscriptionProviderAvailabilityFilterInput
) {
  onDeleteProviderAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderAvailabilitySubscriptionVariables,
  APITypes.OnDeleteProviderAvailabilitySubscription
>;
export const onCreateUserPreference = /* GraphQL */ `subscription OnCreateUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
) {
  onCreateUserPreference(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserPreferenceSubscriptionVariables,
  APITypes.OnCreateUserPreferenceSubscription
>;
export const onUpdateUserPreference = /* GraphQL */ `subscription OnUpdateUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
) {
  onUpdateUserPreference(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserPreferenceSubscriptionVariables,
  APITypes.OnUpdateUserPreferenceSubscription
>;
export const onDeleteUserPreference = /* GraphQL */ `subscription OnDeleteUserPreference(
  $filter: ModelSubscriptionUserPreferenceFilterInput
) {
  onDeleteUserPreference(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserPreferenceSubscriptionVariables,
  APITypes.OnDeleteUserPreferenceSubscription
>;
export const onCreateProviderCertification = /* GraphQL */ `subscription OnCreateProviderCertification(
  $filter: ModelSubscriptionProviderCertificationFilterInput
) {
  onCreateProviderCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderCertificationSubscriptionVariables,
  APITypes.OnCreateProviderCertificationSubscription
>;
export const onUpdateProviderCertification = /* GraphQL */ `subscription OnUpdateProviderCertification(
  $filter: ModelSubscriptionProviderCertificationFilterInput
) {
  onUpdateProviderCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderCertificationSubscriptionVariables,
  APITypes.OnUpdateProviderCertificationSubscription
>;
export const onDeleteProviderCertification = /* GraphQL */ `subscription OnDeleteProviderCertification(
  $filter: ModelSubscriptionProviderCertificationFilterInput
) {
  onDeleteProviderCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderCertificationSubscriptionVariables,
  APITypes.OnDeleteProviderCertificationSubscription
>;
export const onCreateServiceVideo = /* GraphQL */ `subscription OnCreateServiceVideo(
  $filter: ModelSubscriptionServiceVideoFilterInput
) {
  onCreateServiceVideo(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceVideoSubscriptionVariables,
  APITypes.OnCreateServiceVideoSubscription
>;
export const onUpdateServiceVideo = /* GraphQL */ `subscription OnUpdateServiceVideo(
  $filter: ModelSubscriptionServiceVideoFilterInput
) {
  onUpdateServiceVideo(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceVideoSubscriptionVariables,
  APITypes.OnUpdateServiceVideoSubscription
>;
export const onDeleteServiceVideo = /* GraphQL */ `subscription OnDeleteServiceVideo(
  $filter: ModelSubscriptionServiceVideoFilterInput
) {
  onDeleteServiceVideo(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceVideoSubscriptionVariables,
  APITypes.OnDeleteServiceVideoSubscription
>;
export const onCreateServiceImage = /* GraphQL */ `subscription OnCreateServiceImage(
  $filter: ModelSubscriptionServiceImageFilterInput
) {
  onCreateServiceImage(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceImageSubscriptionVariables,
  APITypes.OnCreateServiceImageSubscription
>;
export const onUpdateServiceImage = /* GraphQL */ `subscription OnUpdateServiceImage(
  $filter: ModelSubscriptionServiceImageFilterInput
) {
  onUpdateServiceImage(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceImageSubscriptionVariables,
  APITypes.OnUpdateServiceImageSubscription
>;
export const onDeleteServiceImage = /* GraphQL */ `subscription OnDeleteServiceImage(
  $filter: ModelSubscriptionServiceImageFilterInput
) {
  onDeleteServiceImage(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceImageSubscriptionVariables,
  APITypes.OnDeleteServiceImageSubscription
>;
export const onCreateServiceReview = /* GraphQL */ `subscription OnCreateServiceReview(
  $filter: ModelSubscriptionServiceReviewFilterInput
) {
  onCreateServiceReview(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceReviewSubscriptionVariables,
  APITypes.OnCreateServiceReviewSubscription
>;
export const onUpdateServiceReview = /* GraphQL */ `subscription OnUpdateServiceReview(
  $filter: ModelSubscriptionServiceReviewFilterInput
) {
  onUpdateServiceReview(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceReviewSubscriptionVariables,
  APITypes.OnUpdateServiceReviewSubscription
>;
export const onDeleteServiceReview = /* GraphQL */ `subscription OnDeleteServiceReview(
  $filter: ModelSubscriptionServiceReviewFilterInput
) {
  onDeleteServiceReview(filter: $filter) {
    id
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceReviewSubscriptionVariables,
  APITypes.OnDeleteServiceReviewSubscription
>;
export const onCreateAIDiagnostics = /* GraphQL */ `subscription OnCreateAIDiagnostics(
  $filter: ModelSubscriptionAIDiagnosticsFilterInput
) {
  onCreateAIDiagnostics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAIDiagnosticsSubscriptionVariables,
  APITypes.OnCreateAIDiagnosticsSubscription
>;
export const onUpdateAIDiagnostics = /* GraphQL */ `subscription OnUpdateAIDiagnostics(
  $filter: ModelSubscriptionAIDiagnosticsFilterInput
) {
  onUpdateAIDiagnostics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAIDiagnosticsSubscriptionVariables,
  APITypes.OnUpdateAIDiagnosticsSubscription
>;
export const onDeleteAIDiagnostics = /* GraphQL */ `subscription OnDeleteAIDiagnostics(
  $filter: ModelSubscriptionAIDiagnosticsFilterInput
) {
  onDeleteAIDiagnostics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAIDiagnosticsSubscriptionVariables,
  APITypes.OnDeleteAIDiagnosticsSubscription
>;
export const onCreateCustomization = /* GraphQL */ `subscription OnCreateCustomization(
  $filter: ModelSubscriptionCustomizationFilterInput
) {
  onCreateCustomization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomizationSubscriptionVariables,
  APITypes.OnCreateCustomizationSubscription
>;
export const onUpdateCustomization = /* GraphQL */ `subscription OnUpdateCustomization(
  $filter: ModelSubscriptionCustomizationFilterInput
) {
  onUpdateCustomization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomizationSubscriptionVariables,
  APITypes.OnUpdateCustomizationSubscription
>;
export const onDeleteCustomization = /* GraphQL */ `subscription OnDeleteCustomization(
  $filter: ModelSubscriptionCustomizationFilterInput
) {
  onDeleteCustomization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomizationSubscriptionVariables,
  APITypes.OnDeleteCustomizationSubscription
>;
export const onCreateExpense = /* GraphQL */ `subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
  onCreateExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExpenseSubscriptionVariables,
  APITypes.OnCreateExpenseSubscription
>;
export const onUpdateExpense = /* GraphQL */ `subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
  onUpdateExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExpenseSubscriptionVariables,
  APITypes.OnUpdateExpenseSubscription
>;
export const onDeleteExpense = /* GraphQL */ `subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
  onDeleteExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExpenseSubscriptionVariables,
  APITypes.OnDeleteExpenseSubscription
>;
export const onCreateFavoriteProvider = /* GraphQL */ `subscription OnCreateFavoriteProvider(
  $filter: ModelSubscriptionFavoriteProviderFilterInput
) {
  onCreateFavoriteProvider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFavoriteProviderSubscriptionVariables,
  APITypes.OnCreateFavoriteProviderSubscription
>;
export const onUpdateFavoriteProvider = /* GraphQL */ `subscription OnUpdateFavoriteProvider(
  $filter: ModelSubscriptionFavoriteProviderFilterInput
) {
  onUpdateFavoriteProvider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFavoriteProviderSubscriptionVariables,
  APITypes.OnUpdateFavoriteProviderSubscription
>;
export const onDeleteFavoriteProvider = /* GraphQL */ `subscription OnDeleteFavoriteProvider(
  $filter: ModelSubscriptionFavoriteProviderFilterInput
) {
  onDeleteFavoriteProvider(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFavoriteProviderSubscriptionVariables,
  APITypes.OnDeleteFavoriteProviderSubscription
>;
export const onCreateUserHistory = /* GraphQL */ `subscription OnCreateUserHistory(
  $filter: ModelSubscriptionUserHistoryFilterInput
) {
  onCreateUserHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserHistorySubscriptionVariables,
  APITypes.OnCreateUserHistorySubscription
>;
export const onUpdateUserHistory = /* GraphQL */ `subscription OnUpdateUserHistory(
  $filter: ModelSubscriptionUserHistoryFilterInput
) {
  onUpdateUserHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserHistorySubscriptionVariables,
  APITypes.OnUpdateUserHistorySubscription
>;
export const onDeleteUserHistory = /* GraphQL */ `subscription OnDeleteUserHistory(
  $filter: ModelSubscriptionUserHistoryFilterInput
) {
  onDeleteUserHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserHistorySubscriptionVariables,
  APITypes.OnDeleteUserHistorySubscription
>;
export const onCreateProviderAward = /* GraphQL */ `subscription OnCreateProviderAward(
  $filter: ModelSubscriptionProviderAwardFilterInput
) {
  onCreateProviderAward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderAwardSubscriptionVariables,
  APITypes.OnCreateProviderAwardSubscription
>;
export const onUpdateProviderAward = /* GraphQL */ `subscription OnUpdateProviderAward(
  $filter: ModelSubscriptionProviderAwardFilterInput
) {
  onUpdateProviderAward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderAwardSubscriptionVariables,
  APITypes.OnUpdateProviderAwardSubscription
>;
export const onDeleteProviderAward = /* GraphQL */ `subscription OnDeleteProviderAward(
  $filter: ModelSubscriptionProviderAwardFilterInput
) {
  onDeleteProviderAward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderAwardSubscriptionVariables,
  APITypes.OnDeleteProviderAwardSubscription
>;
export const onCreateReferral = /* GraphQL */ `subscription OnCreateReferral($filter: ModelSubscriptionReferralFilterInput) {
  onCreateReferral(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReferralSubscriptionVariables,
  APITypes.OnCreateReferralSubscription
>;
export const onUpdateReferral = /* GraphQL */ `subscription OnUpdateReferral($filter: ModelSubscriptionReferralFilterInput) {
  onUpdateReferral(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReferralSubscriptionVariables,
  APITypes.OnUpdateReferralSubscription
>;
export const onDeleteReferral = /* GraphQL */ `subscription OnDeleteReferral($filter: ModelSubscriptionReferralFilterInput) {
  onDeleteReferral(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReferralSubscriptionVariables,
  APITypes.OnDeleteReferralSubscription
>;
export const onCreateTip = /* GraphQL */ `subscription OnCreateTip($filter: ModelSubscriptionTipFilterInput) {
  onCreateTip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTipSubscriptionVariables,
  APITypes.OnCreateTipSubscription
>;
export const onUpdateTip = /* GraphQL */ `subscription OnUpdateTip($filter: ModelSubscriptionTipFilterInput) {
  onUpdateTip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTipSubscriptionVariables,
  APITypes.OnUpdateTipSubscription
>;
export const onDeleteTip = /* GraphQL */ `subscription OnDeleteTip($filter: ModelSubscriptionTipFilterInput) {
  onDeleteTip(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTipSubscriptionVariables,
  APITypes.OnDeleteTipSubscription
>;
export const onCreatePaymentMethod = /* GraphQL */ `subscription OnCreatePaymentMethod(
  $filter: ModelSubscriptionPaymentMethodFilterInput
) {
  onCreatePaymentMethod(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePaymentMethodSubscriptionVariables,
  APITypes.OnCreatePaymentMethodSubscription
>;
export const onUpdatePaymentMethod = /* GraphQL */ `subscription OnUpdatePaymentMethod(
  $filter: ModelSubscriptionPaymentMethodFilterInput
) {
  onUpdatePaymentMethod(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentMethodSubscriptionVariables,
  APITypes.OnUpdatePaymentMethodSubscription
>;
export const onDeletePaymentMethod = /* GraphQL */ `subscription OnDeletePaymentMethod(
  $filter: ModelSubscriptionPaymentMethodFilterInput
) {
  onDeletePaymentMethod(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePaymentMethodSubscriptionVariables,
  APITypes.OnDeletePaymentMethodSubscription
>;
export const onCreateInvoice = /* GraphQL */ `subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onCreateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInvoiceSubscriptionVariables,
  APITypes.OnCreateInvoiceSubscription
>;
export const onUpdateInvoice = /* GraphQL */ `subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onUpdateInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInvoiceSubscriptionVariables,
  APITypes.OnUpdateInvoiceSubscription
>;
export const onDeleteInvoice = /* GraphQL */ `subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
  onDeleteInvoice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInvoiceSubscriptionVariables,
  APITypes.OnDeleteInvoiceSubscription
>;
export const onCreateContract = /* GraphQL */ `subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
  onCreateContract(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateContractSubscriptionVariables,
  APITypes.OnCreateContractSubscription
>;
export const onUpdateContract = /* GraphQL */ `subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
  onUpdateContract(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateContractSubscriptionVariables,
  APITypes.OnUpdateContractSubscription
>;
export const onDeleteContract = /* GraphQL */ `subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
  onDeleteContract(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteContractSubscriptionVariables,
  APITypes.OnDeleteContractSubscription
>;
export const onCreateNicheService = /* GraphQL */ `subscription OnCreateNicheService(
  $filter: ModelSubscriptionNicheServiceFilterInput
) {
  onCreateNicheService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNicheServiceSubscriptionVariables,
  APITypes.OnCreateNicheServiceSubscription
>;
export const onUpdateNicheService = /* GraphQL */ `subscription OnUpdateNicheService(
  $filter: ModelSubscriptionNicheServiceFilterInput
) {
  onUpdateNicheService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNicheServiceSubscriptionVariables,
  APITypes.OnUpdateNicheServiceSubscription
>;
export const onDeleteNicheService = /* GraphQL */ `subscription OnDeleteNicheService(
  $filter: ModelSubscriptionNicheServiceFilterInput
) {
  onDeleteNicheService(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNicheServiceSubscriptionVariables,
  APITypes.OnDeleteNicheServiceSubscription
>;
export const onCreateServicePackage = /* GraphQL */ `subscription OnCreateServicePackage(
  $filter: ModelSubscriptionServicePackageFilterInput
) {
  onCreateServicePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateServicePackageSubscriptionVariables,
  APITypes.OnCreateServicePackageSubscription
>;
export const onUpdateServicePackage = /* GraphQL */ `subscription OnUpdateServicePackage(
  $filter: ModelSubscriptionServicePackageFilterInput
) {
  onUpdateServicePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateServicePackageSubscriptionVariables,
  APITypes.OnUpdateServicePackageSubscription
>;
export const onDeleteServicePackage = /* GraphQL */ `subscription OnDeleteServicePackage(
  $filter: ModelSubscriptionServicePackageFilterInput
) {
  onDeleteServicePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteServicePackageSubscriptionVariables,
  APITypes.OnDeleteServicePackageSubscription
>;
export const onCreateReward = /* GraphQL */ `subscription OnCreateReward($filter: ModelSubscriptionRewardFilterInput) {
  onCreateReward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRewardSubscriptionVariables,
  APITypes.OnCreateRewardSubscription
>;
export const onUpdateReward = /* GraphQL */ `subscription OnUpdateReward($filter: ModelSubscriptionRewardFilterInput) {
  onUpdateReward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRewardSubscriptionVariables,
  APITypes.OnUpdateRewardSubscription
>;
export const onDeleteReward = /* GraphQL */ `subscription OnDeleteReward($filter: ModelSubscriptionRewardFilterInput) {
  onDeleteReward(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRewardSubscriptionVariables,
  APITypes.OnDeleteRewardSubscription
>;
export const onCreateLoyaltyProgram = /* GraphQL */ `subscription OnCreateLoyaltyProgram(
  $filter: ModelSubscriptionLoyaltyProgramFilterInput
) {
  onCreateLoyaltyProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLoyaltyProgramSubscriptionVariables,
  APITypes.OnCreateLoyaltyProgramSubscription
>;
export const onUpdateLoyaltyProgram = /* GraphQL */ `subscription OnUpdateLoyaltyProgram(
  $filter: ModelSubscriptionLoyaltyProgramFilterInput
) {
  onUpdateLoyaltyProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLoyaltyProgramSubscriptionVariables,
  APITypes.OnUpdateLoyaltyProgramSubscription
>;
export const onDeleteLoyaltyProgram = /* GraphQL */ `subscription OnDeleteLoyaltyProgram(
  $filter: ModelSubscriptionLoyaltyProgramFilterInput
) {
  onDeleteLoyaltyProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLoyaltyProgramSubscriptionVariables,
  APITypes.OnDeleteLoyaltyProgramSubscription
>;
export const onCreateVerification = /* GraphQL */ `subscription OnCreateVerification(
  $filter: ModelSubscriptionVerificationFilterInput
) {
  onCreateVerification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVerificationSubscriptionVariables,
  APITypes.OnCreateVerificationSubscription
>;
export const onUpdateVerification = /* GraphQL */ `subscription OnUpdateVerification(
  $filter: ModelSubscriptionVerificationFilterInput
) {
  onUpdateVerification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVerificationSubscriptionVariables,
  APITypes.OnUpdateVerificationSubscription
>;
export const onDeleteVerification = /* GraphQL */ `subscription OnDeleteVerification(
  $filter: ModelSubscriptionVerificationFilterInput
) {
  onDeleteVerification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVerificationSubscriptionVariables,
  APITypes.OnDeleteVerificationSubscription
>;
export const onCreateAnalytics = /* GraphQL */ `subscription OnCreateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onCreateAnalytics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAnalyticsSubscriptionVariables,
  APITypes.OnCreateAnalyticsSubscription
>;
export const onUpdateAnalytics = /* GraphQL */ `subscription OnUpdateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onUpdateAnalytics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAnalyticsSubscriptionVariables,
  APITypes.OnUpdateAnalyticsSubscription
>;
export const onDeleteAnalytics = /* GraphQL */ `subscription OnDeleteAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
  onDeleteAnalytics(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAnalyticsSubscriptionVariables,
  APITypes.OnDeleteAnalyticsSubscription
>;
export const onCreatePromoCode = /* GraphQL */ `subscription OnCreatePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
  onCreatePromoCode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePromoCodeSubscriptionVariables,
  APITypes.OnCreatePromoCodeSubscription
>;
export const onUpdatePromoCode = /* GraphQL */ `subscription OnUpdatePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
  onUpdatePromoCode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePromoCodeSubscriptionVariables,
  APITypes.OnUpdatePromoCodeSubscription
>;
export const onDeletePromoCode = /* GraphQL */ `subscription OnDeletePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
  onDeletePromoCode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePromoCodeSubscriptionVariables,
  APITypes.OnDeletePromoCodeSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateJobTracking = /* GraphQL */ `subscription OnCreateJobTracking(
  $filter: ModelSubscriptionJobTrackingFilterInput
) {
  onCreateJobTracking(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateJobTrackingSubscriptionVariables,
  APITypes.OnCreateJobTrackingSubscription
>;
export const onUpdateJobTracking = /* GraphQL */ `subscription OnUpdateJobTracking(
  $filter: ModelSubscriptionJobTrackingFilterInput
) {
  onUpdateJobTracking(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobTrackingSubscriptionVariables,
  APITypes.OnUpdateJobTrackingSubscription
>;
export const onDeleteJobTracking = /* GraphQL */ `subscription OnDeleteJobTracking(
  $filter: ModelSubscriptionJobTrackingFilterInput
) {
  onDeleteJobTracking(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobTrackingSubscriptionVariables,
  APITypes.OnDeleteJobTrackingSubscription
>;
export const onCreateAIChatLog = /* GraphQL */ `subscription OnCreateAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
  onCreateAIChatLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAIChatLogSubscriptionVariables,
  APITypes.OnCreateAIChatLogSubscription
>;
export const onUpdateAIChatLog = /* GraphQL */ `subscription OnUpdateAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
  onUpdateAIChatLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAIChatLogSubscriptionVariables,
  APITypes.OnUpdateAIChatLogSubscription
>;
export const onDeleteAIChatLog = /* GraphQL */ `subscription OnDeleteAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
  onDeleteAIChatLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAIChatLogSubscriptionVariables,
  APITypes.OnDeleteAIChatLogSubscription
>;
export const onCreateAIChatBot = /* GraphQL */ `subscription OnCreateAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
  onCreateAIChatBot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAIChatBotSubscriptionVariables,
  APITypes.OnCreateAIChatBotSubscription
>;
export const onUpdateAIChatBot = /* GraphQL */ `subscription OnUpdateAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
  onUpdateAIChatBot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAIChatBotSubscriptionVariables,
  APITypes.OnUpdateAIChatBotSubscription
>;
export const onDeleteAIChatBot = /* GraphQL */ `subscription OnDeleteAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
  onDeleteAIChatBot(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAIChatBotSubscriptionVariables,
  APITypes.OnDeleteAIChatBotSubscription
>;
export const onCreateMainCategory = /* GraphQL */ `subscription OnCreateMainCategory(
  $filter: ModelSubscriptionMainCategoryFilterInput
) {
  onCreateMainCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMainCategorySubscriptionVariables,
  APITypes.OnCreateMainCategorySubscription
>;
export const onUpdateMainCategory = /* GraphQL */ `subscription OnUpdateMainCategory(
  $filter: ModelSubscriptionMainCategoryFilterInput
) {
  onUpdateMainCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMainCategorySubscriptionVariables,
  APITypes.OnUpdateMainCategorySubscription
>;
export const onDeleteMainCategory = /* GraphQL */ `subscription OnDeleteMainCategory(
  $filter: ModelSubscriptionMainCategoryFilterInput
) {
  onDeleteMainCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMainCategorySubscriptionVariables,
  APITypes.OnDeleteMainCategorySubscription
>;
export const onCreateSubCategory = /* GraphQL */ `subscription OnCreateSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onCreateSubCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubCategorySubscriptionVariables,
  APITypes.OnCreateSubCategorySubscription
>;
export const onUpdateSubCategory = /* GraphQL */ `subscription OnUpdateSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onUpdateSubCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubCategorySubscriptionVariables,
  APITypes.OnUpdateSubCategorySubscription
>;
export const onDeleteSubCategory = /* GraphQL */ `subscription OnDeleteSubCategory(
  $filter: ModelSubscriptionSubCategoryFilterInput
) {
  onDeleteSubCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubCategorySubscriptionVariables,
  APITypes.OnDeleteSubCategorySubscription
>;
export const onCreatePLMBRSubscription = /* GraphQL */ `subscription OnCreatePLMBRSubscription(
  $filter: ModelSubscriptionPLMBRSubscriptionFilterInput
) {
  onCreatePLMBRSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePLMBRSubscriptionSubscriptionVariables,
  APITypes.OnCreatePLMBRSubscriptionSubscription
>;
export const onUpdatePLMBRSubscription = /* GraphQL */ `subscription OnUpdatePLMBRSubscription(
  $filter: ModelSubscriptionPLMBRSubscriptionFilterInput
) {
  onUpdatePLMBRSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePLMBRSubscriptionSubscriptionVariables,
  APITypes.OnUpdatePLMBRSubscriptionSubscription
>;
export const onDeletePLMBRSubscription = /* GraphQL */ `subscription OnDeletePLMBRSubscription(
  $filter: ModelSubscriptionPLMBRSubscriptionFilterInput
) {
  onDeletePLMBRSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePLMBRSubscriptionSubscriptionVariables,
  APITypes.OnDeletePLMBRSubscriptionSubscription
>;
export const onCreateUserSettings = /* GraphQL */ `subscription OnCreateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onCreateUserSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSettingsSubscriptionVariables,
  APITypes.OnCreateUserSettingsSubscription
>;
export const onUpdateUserSettings = /* GraphQL */ `subscription OnUpdateUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onUpdateUserSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSettingsSubscriptionVariables,
  APITypes.OnUpdateUserSettingsSubscription
>;
export const onDeleteUserSettings = /* GraphQL */ `subscription OnDeleteUserSettings(
  $filter: ModelSubscriptionUserSettingsFilterInput
) {
  onDeleteUserSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSettingsSubscriptionVariables,
  APITypes.OnDeleteUserSettingsSubscription
>;
export const onCreateProviderSettings = /* GraphQL */ `subscription OnCreateProviderSettings(
  $filter: ModelSubscriptionProviderSettingsFilterInput
) {
  onCreateProviderSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProviderSettingsSubscriptionVariables,
  APITypes.OnCreateProviderSettingsSubscription
>;
export const onUpdateProviderSettings = /* GraphQL */ `subscription OnUpdateProviderSettings(
  $filter: ModelSubscriptionProviderSettingsFilterInput
) {
  onUpdateProviderSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProviderSettingsSubscriptionVariables,
  APITypes.OnUpdateProviderSettingsSubscription
>;
export const onDeleteProviderSettings = /* GraphQL */ `subscription OnDeleteProviderSettings(
  $filter: ModelSubscriptionProviderSettingsFilterInput
) {
  onDeleteProviderSettings(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProviderSettingsSubscriptionVariables,
  APITypes.OnDeleteProviderSettingsSubscription
>;
export const onCreatePortfolio = /* GraphQL */ `subscription OnCreatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onCreatePortfolio(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePortfolioSubscriptionVariables,
  APITypes.OnCreatePortfolioSubscription
>;
export const onUpdatePortfolio = /* GraphQL */ `subscription OnUpdatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onUpdatePortfolio(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePortfolioSubscriptionVariables,
  APITypes.OnUpdatePortfolioSubscription
>;
export const onDeletePortfolio = /* GraphQL */ `subscription OnDeletePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onDeletePortfolio(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePortfolioSubscriptionVariables,
  APITypes.OnDeletePortfolioSubscription
>;
export const onCreateServiceVariant = /* GraphQL */ `subscription OnCreateServiceVariant(
  $filter: ModelSubscriptionServiceVariantFilterInput
) {
  onCreateServiceVariant(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceVariantSubscriptionVariables,
  APITypes.OnCreateServiceVariantSubscription
>;
export const onUpdateServiceVariant = /* GraphQL */ `subscription OnUpdateServiceVariant(
  $filter: ModelSubscriptionServiceVariantFilterInput
) {
  onUpdateServiceVariant(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceVariantSubscriptionVariables,
  APITypes.OnUpdateServiceVariantSubscription
>;
export const onDeleteServiceVariant = /* GraphQL */ `subscription OnDeleteServiceVariant(
  $filter: ModelSubscriptionServiceVariantFilterInput
) {
  onDeleteServiceVariant(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceVariantSubscriptionVariables,
  APITypes.OnDeleteServiceVariantSubscription
>;
export const onCreateServiceHighlight = /* GraphQL */ `subscription OnCreateServiceHighlight(
  $filter: ModelSubscriptionServiceHighlightFilterInput
) {
  onCreateServiceHighlight(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceHighlightSubscriptionVariables,
  APITypes.OnCreateServiceHighlightSubscription
>;
export const onUpdateServiceHighlight = /* GraphQL */ `subscription OnUpdateServiceHighlight(
  $filter: ModelSubscriptionServiceHighlightFilterInput
) {
  onUpdateServiceHighlight(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceHighlightSubscriptionVariables,
  APITypes.OnUpdateServiceHighlightSubscription
>;
export const onDeleteServiceHighlight = /* GraphQL */ `subscription OnDeleteServiceHighlight(
  $filter: ModelSubscriptionServiceHighlightFilterInput
) {
  onDeleteServiceHighlight(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceHighlightSubscriptionVariables,
  APITypes.OnDeleteServiceHighlightSubscription
>;
export const onCreateServiceTag = /* GraphQL */ `subscription OnCreateServiceTag(
  $filter: ModelSubscriptionServiceTagFilterInput
) {
  onCreateServiceTag(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceTagSubscriptionVariables,
  APITypes.OnCreateServiceTagSubscription
>;
export const onUpdateServiceTag = /* GraphQL */ `subscription OnUpdateServiceTag(
  $filter: ModelSubscriptionServiceTagFilterInput
) {
  onUpdateServiceTag(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceTagSubscriptionVariables,
  APITypes.OnUpdateServiceTagSubscription
>;
export const onDeleteServiceTag = /* GraphQL */ `subscription OnDeleteServiceTag(
  $filter: ModelSubscriptionServiceTagFilterInput
) {
  onDeleteServiceTag(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceTagSubscriptionVariables,
  APITypes.OnDeleteServiceTagSubscription
>;
export const onCreateServiceFAQ = /* GraphQL */ `subscription OnCreateServiceFAQ(
  $filter: ModelSubscriptionServiceFAQFilterInput
) {
  onCreateServiceFAQ(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceFAQSubscriptionVariables,
  APITypes.OnCreateServiceFAQSubscription
>;
export const onUpdateServiceFAQ = /* GraphQL */ `subscription OnUpdateServiceFAQ(
  $filter: ModelSubscriptionServiceFAQFilterInput
) {
  onUpdateServiceFAQ(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceFAQSubscriptionVariables,
  APITypes.OnUpdateServiceFAQSubscription
>;
export const onDeleteServiceFAQ = /* GraphQL */ `subscription OnDeleteServiceFAQ(
  $filter: ModelSubscriptionServiceFAQFilterInput
) {
  onDeleteServiceFAQ(filter: $filter) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceFAQSubscriptionVariables,
  APITypes.OnDeleteServiceFAQSubscription
>;
export const onCreateFeedback = /* GraphQL */ `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onCreateFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackSubscriptionVariables,
  APITypes.OnCreateFeedbackSubscription
>;
export const onUpdateFeedback = /* GraphQL */ `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onUpdateFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackSubscriptionVariables,
  APITypes.OnUpdateFeedbackSubscription
>;
export const onDeleteFeedback = /* GraphQL */ `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
  onDeleteFeedback(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackSubscriptionVariables,
  APITypes.OnDeleteFeedbackSubscription
>;
export const onCreateEquipment = /* GraphQL */ `subscription OnCreateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onCreateEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEquipmentSubscriptionVariables,
  APITypes.OnCreateEquipmentSubscription
>;
export const onUpdateEquipment = /* GraphQL */ `subscription OnUpdateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onUpdateEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEquipmentSubscriptionVariables,
  APITypes.OnUpdateEquipmentSubscription
>;
export const onDeleteEquipment = /* GraphQL */ `subscription OnDeleteEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
  onDeleteEquipment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEquipmentSubscriptionVariables,
  APITypes.OnDeleteEquipmentSubscription
>;
export const onCreateWallet = /* GraphQL */ `subscription OnCreateWallet($filter: ModelSubscriptionWalletFilterInput) {
  onCreateWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWalletSubscriptionVariables,
  APITypes.OnCreateWalletSubscription
>;
export const onUpdateWallet = /* GraphQL */ `subscription OnUpdateWallet($filter: ModelSubscriptionWalletFilterInput) {
  onUpdateWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWalletSubscriptionVariables,
  APITypes.OnUpdateWalletSubscription
>;
export const onDeleteWallet = /* GraphQL */ `subscription OnDeleteWallet($filter: ModelSubscriptionWalletFilterInput) {
  onDeleteWallet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWalletSubscriptionVariables,
  APITypes.OnDeleteWalletSubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onCreateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onUpdateTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onDeleteTransaction(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateReviewResponse = /* GraphQL */ `subscription OnCreateReviewResponse(
  $filter: ModelSubscriptionReviewResponseFilterInput
) {
  onCreateReviewResponse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewResponseSubscriptionVariables,
  APITypes.OnCreateReviewResponseSubscription
>;
export const onUpdateReviewResponse = /* GraphQL */ `subscription OnUpdateReviewResponse(
  $filter: ModelSubscriptionReviewResponseFilterInput
) {
  onUpdateReviewResponse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewResponseSubscriptionVariables,
  APITypes.OnUpdateReviewResponseSubscription
>;
export const onDeleteReviewResponse = /* GraphQL */ `subscription OnDeleteReviewResponse(
  $filter: ModelSubscriptionReviewResponseFilterInput
) {
  onDeleteReviewResponse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewResponseSubscriptionVariables,
  APITypes.OnDeleteReviewResponseSubscription
>;
export const onCreateMessageThread = /* GraphQL */ `subscription OnCreateMessageThread(
  $filter: ModelSubscriptionMessageThreadFilterInput
) {
  onCreateMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageThreadSubscriptionVariables,
  APITypes.OnCreateMessageThreadSubscription
>;
export const onUpdateMessageThread = /* GraphQL */ `subscription OnUpdateMessageThread(
  $filter: ModelSubscriptionMessageThreadFilterInput
) {
  onUpdateMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageThreadSubscriptionVariables,
  APITypes.OnUpdateMessageThreadSubscription
>;
export const onDeleteMessageThread = /* GraphQL */ `subscription OnDeleteMessageThread(
  $filter: ModelSubscriptionMessageThreadFilterInput
) {
  onDeleteMessageThread(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageThreadSubscriptionVariables,
  APITypes.OnDeleteMessageThreadSubscription
>;
export const onCreateMessageContent = /* GraphQL */ `subscription OnCreateMessageContent(
  $filter: ModelSubscriptionMessageContentFilterInput
) {
  onCreateMessageContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageContentSubscriptionVariables,
  APITypes.OnCreateMessageContentSubscription
>;
export const onUpdateMessageContent = /* GraphQL */ `subscription OnUpdateMessageContent(
  $filter: ModelSubscriptionMessageContentFilterInput
) {
  onUpdateMessageContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageContentSubscriptionVariables,
  APITypes.OnUpdateMessageContentSubscription
>;
export const onDeleteMessageContent = /* GraphQL */ `subscription OnDeleteMessageContent(
  $filter: ModelSubscriptionMessageContentFilterInput
) {
  onDeleteMessageContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageContentSubscriptionVariables,
  APITypes.OnDeleteMessageContentSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
    id
    date
    startTime
    endTime
    status
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
    id
    date
    startTime
    endTime
    status
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
    id
    date
    startTime
    endTime
    status
    service {
      id
      name
      description
      price
      duration
      Materials
      MaterialCosts
      BookingRequirements
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
export const onCreateTeamMember = /* GraphQL */ `subscription OnCreateTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onCreateTeamMember(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTeamMemberSubscriptionVariables,
  APITypes.OnCreateTeamMemberSubscription
>;
export const onUpdateTeamMember = /* GraphQL */ `subscription OnUpdateTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onUpdateTeamMember(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTeamMemberSubscriptionVariables,
  APITypes.OnUpdateTeamMemberSubscription
>;
export const onDeleteTeamMember = /* GraphQL */ `subscription OnDeleteTeamMember(
  $filter: ModelSubscriptionTeamMemberFilterInput
) {
  onDeleteTeamMember(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTeamMemberSubscriptionVariables,
  APITypes.OnDeleteTeamMemberSubscription
>;
export const onCreateLocation = /* GraphQL */ `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onCreateLocation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLocationSubscriptionVariables,
  APITypes.OnCreateLocationSubscription
>;
export const onUpdateLocation = /* GraphQL */ `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onUpdateLocation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLocationSubscriptionVariables,
  APITypes.OnUpdateLocationSubscription
>;
export const onDeleteLocation = /* GraphQL */ `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
  onDeleteLocation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLocationSubscriptionVariables,
  APITypes.OnDeleteLocationSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateJob = /* GraphQL */ `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
  onCreateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobSubscriptionVariables,
  APITypes.OnCreateJobSubscription
>;
export const onUpdateJob = /* GraphQL */ `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
  onUpdateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobSubscriptionVariables,
  APITypes.OnUpdateJobSubscription
>;
export const onDeleteJob = /* GraphQL */ `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
  onDeleteJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobSubscriptionVariables,
  APITypes.OnDeleteJobSubscription
>;
export const onCreateService = /* GraphQL */ `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
  onCreateService(filter: $filter) {
    id
    name
    description
    price
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
` as GeneratedSubscription<
  APITypes.OnCreateServiceSubscriptionVariables,
  APITypes.OnCreateServiceSubscription
>;
export const onUpdateService = /* GraphQL */ `subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
  onUpdateService(filter: $filter) {
    id
    name
    description
    price
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
` as GeneratedSubscription<
  APITypes.OnUpdateServiceSubscriptionVariables,
  APITypes.OnUpdateServiceSubscription
>;
export const onDeleteService = /* GraphQL */ `subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
  onDeleteService(filter: $filter) {
    id
    name
    description
    price
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
` as GeneratedSubscription<
  APITypes.OnDeleteServiceSubscriptionVariables,
  APITypes.OnDeleteServiceSubscription
>;
export const onCreateProvider = /* GraphQL */ `subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
  onCreateProvider(filter: $filter) {
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
    ProviderSchedules {
      nextToken
      startedAt
      __typename
    }
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderSubscriptionVariables,
  APITypes.OnCreateProviderSubscription
>;
export const onUpdateProvider = /* GraphQL */ `subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
  onUpdateProvider(filter: $filter) {
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
    ProviderSchedules {
      nextToken
      startedAt
      __typename
    }
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderSubscriptionVariables,
  APITypes.OnUpdateProviderSubscription
>;
export const onDeleteProvider = /* GraphQL */ `subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
  onDeleteProvider(filter: $filter) {
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
    ProviderSchedules {
      nextToken
      startedAt
      __typename
    }
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderSubscriptionVariables,
  APITypes.OnDeleteProviderSubscription
>;
export const onCreateAvailability = /* GraphQL */ `subscription OnCreateAvailability(
  $filter: ModelSubscriptionAvailabilityFilterInput
) {
  onCreateAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAvailabilitySubscriptionVariables,
  APITypes.OnCreateAvailabilitySubscription
>;
export const onUpdateAvailability = /* GraphQL */ `subscription OnUpdateAvailability(
  $filter: ModelSubscriptionAvailabilityFilterInput
) {
  onUpdateAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAvailabilitySubscriptionVariables,
  APITypes.OnUpdateAvailabilitySubscription
>;
export const onDeleteAvailability = /* GraphQL */ `subscription OnDeleteAvailability(
  $filter: ModelSubscriptionAvailabilityFilterInput
) {
  onDeleteAvailability(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAvailabilitySubscriptionVariables,
  APITypes.OnDeleteAvailabilitySubscription
>;
export const onCreateProviderReview = /* GraphQL */ `subscription OnCreateProviderReview(
  $filter: ModelSubscriptionProviderReviewFilterInput
) {
  onCreateProviderReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderReviewSubscriptionVariables,
  APITypes.OnCreateProviderReviewSubscription
>;
export const onUpdateProviderReview = /* GraphQL */ `subscription OnUpdateProviderReview(
  $filter: ModelSubscriptionProviderReviewFilterInput
) {
  onUpdateProviderReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderReviewSubscriptionVariables,
  APITypes.OnUpdateProviderReviewSubscription
>;
export const onDeleteProviderReview = /* GraphQL */ `subscription OnDeleteProviderReview(
  $filter: ModelSubscriptionProviderReviewFilterInput
) {
  onDeleteProviderReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderReviewSubscriptionVariables,
  APITypes.OnDeleteProviderReviewSubscription
>;
export const onCreateCertification = /* GraphQL */ `subscription OnCreateCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onCreateCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCertificationSubscriptionVariables,
  APITypes.OnCreateCertificationSubscription
>;
export const onUpdateCertification = /* GraphQL */ `subscription OnUpdateCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onUpdateCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCertificationSubscriptionVariables,
  APITypes.OnUpdateCertificationSubscription
>;
export const onDeleteCertification = /* GraphQL */ `subscription OnDeleteCertification(
  $filter: ModelSubscriptionCertificationFilterInput
) {
  onDeleteCertification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCertificationSubscriptionVariables,
  APITypes.OnDeleteCertificationSubscription
>;
export const onCreateQualification = /* GraphQL */ `subscription OnCreateQualification(
  $filter: ModelSubscriptionQualificationFilterInput
) {
  onCreateQualification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQualificationSubscriptionVariables,
  APITypes.OnCreateQualificationSubscription
>;
export const onUpdateQualification = /* GraphQL */ `subscription OnUpdateQualification(
  $filter: ModelSubscriptionQualificationFilterInput
) {
  onUpdateQualification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQualificationSubscriptionVariables,
  APITypes.OnUpdateQualificationSubscription
>;
export const onDeleteQualification = /* GraphQL */ `subscription OnDeleteQualification(
  $filter: ModelSubscriptionQualificationFilterInput
) {
  onDeleteQualification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQualificationSubscriptionVariables,
  APITypes.OnDeleteQualificationSubscription
>;
export const onCreateSpecialization = /* GraphQL */ `subscription OnCreateSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onCreateSpecialization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpecializationSubscriptionVariables,
  APITypes.OnCreateSpecializationSubscription
>;
export const onUpdateSpecialization = /* GraphQL */ `subscription OnUpdateSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onUpdateSpecialization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpecializationSubscriptionVariables,
  APITypes.OnUpdateSpecializationSubscription
>;
export const onDeleteSpecialization = /* GraphQL */ `subscription OnDeleteSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onDeleteSpecialization(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpecializationSubscriptionVariables,
  APITypes.OnDeleteSpecializationSubscription
>;
export const onCreateProviderHistory = /* GraphQL */ `subscription OnCreateProviderHistory(
  $filter: ModelSubscriptionProviderHistoryFilterInput
) {
  onCreateProviderHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProviderHistorySubscriptionVariables,
  APITypes.OnCreateProviderHistorySubscription
>;
export const onUpdateProviderHistory = /* GraphQL */ `subscription OnUpdateProviderHistory(
  $filter: ModelSubscriptionProviderHistoryFilterInput
) {
  onUpdateProviderHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProviderHistorySubscriptionVariables,
  APITypes.OnUpdateProviderHistorySubscription
>;
export const onDeleteProviderHistory = /* GraphQL */ `subscription OnDeleteProviderHistory(
  $filter: ModelSubscriptionProviderHistoryFilterInput
) {
  onDeleteProviderHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProviderHistorySubscriptionVariables,
  APITypes.OnDeleteProviderHistorySubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
