/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createServicePromotion = /* GraphQL */ `mutation CreateServicePromotion(
  $input: CreateServicePromotionInput!
  $condition: ModelServicePromotionConditionInput
) {
  createServicePromotion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServicePromotionMutationVariables,
  APITypes.CreateServicePromotionMutation
>;
export const updateServicePromotion = /* GraphQL */ `mutation UpdateServicePromotion(
  $input: UpdateServicePromotionInput!
  $condition: ModelServicePromotionConditionInput
) {
  updateServicePromotion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServicePromotionMutationVariables,
  APITypes.UpdateServicePromotionMutation
>;
export const deleteServicePromotion = /* GraphQL */ `mutation DeleteServicePromotion(
  $input: DeleteServicePromotionInput!
  $condition: ModelServicePromotionConditionInput
) {
  deleteServicePromotion(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServicePromotionMutationVariables,
  APITypes.DeleteServicePromotionMutation
>;
export const createProviderReport = /* GraphQL */ `mutation CreateProviderReport(
  $input: CreateProviderReportInput!
  $condition: ModelProviderReportConditionInput
) {
  createProviderReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderReportMutationVariables,
  APITypes.CreateProviderReportMutation
>;
export const updateProviderReport = /* GraphQL */ `mutation UpdateProviderReport(
  $input: UpdateProviderReportInput!
  $condition: ModelProviderReportConditionInput
) {
  updateProviderReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderReportMutationVariables,
  APITypes.UpdateProviderReportMutation
>;
export const deleteProviderReport = /* GraphQL */ `mutation DeleteProviderReport(
  $input: DeleteProviderReportInput!
  $condition: ModelProviderReportConditionInput
) {
  deleteProviderReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderReportMutationVariables,
  APITypes.DeleteProviderReportMutation
>;
export const createUserReport = /* GraphQL */ `mutation CreateUserReport(
  $input: CreateUserReportInput!
  $condition: ModelUserReportConditionInput
) {
  createUserReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserReportMutationVariables,
  APITypes.CreateUserReportMutation
>;
export const updateUserReport = /* GraphQL */ `mutation UpdateUserReport(
  $input: UpdateUserReportInput!
  $condition: ModelUserReportConditionInput
) {
  updateUserReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserReportMutationVariables,
  APITypes.UpdateUserReportMutation
>;
export const deleteUserReport = /* GraphQL */ `mutation DeleteUserReport(
  $input: DeleteUserReportInput!
  $condition: ModelUserReportConditionInput
) {
  deleteUserReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserReportMutationVariables,
  APITypes.DeleteUserReportMutation
>;
export const createUserInvoice = /* GraphQL */ `mutation CreateUserInvoice(
  $input: CreateUserInvoiceInput!
  $condition: ModelUserInvoiceConditionInput
) {
  createUserInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserInvoiceMutationVariables,
  APITypes.CreateUserInvoiceMutation
>;
export const updateUserInvoice = /* GraphQL */ `mutation UpdateUserInvoice(
  $input: UpdateUserInvoiceInput!
  $condition: ModelUserInvoiceConditionInput
) {
  updateUserInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserInvoiceMutationVariables,
  APITypes.UpdateUserInvoiceMutation
>;
export const deleteUserInvoice = /* GraphQL */ `mutation DeleteUserInvoice(
  $input: DeleteUserInvoiceInput!
  $condition: ModelUserInvoiceConditionInput
) {
  deleteUserInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserInvoiceMutationVariables,
  APITypes.DeleteUserInvoiceMutation
>;
export const createProviderBookmark = /* GraphQL */ `mutation CreateProviderBookmark(
  $input: CreateProviderBookmarkInput!
  $condition: ModelProviderBookmarkConditionInput
) {
  createProviderBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderBookmarkMutationVariables,
  APITypes.CreateProviderBookmarkMutation
>;
export const updateProviderBookmark = /* GraphQL */ `mutation UpdateProviderBookmark(
  $input: UpdateProviderBookmarkInput!
  $condition: ModelProviderBookmarkConditionInput
) {
  updateProviderBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderBookmarkMutationVariables,
  APITypes.UpdateProviderBookmarkMutation
>;
export const deleteProviderBookmark = /* GraphQL */ `mutation DeleteProviderBookmark(
  $input: DeleteProviderBookmarkInput!
  $condition: ModelProviderBookmarkConditionInput
) {
  deleteProviderBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderBookmarkMutationVariables,
  APITypes.DeleteProviderBookmarkMutation
>;
export const createUserBookmark = /* GraphQL */ `mutation CreateUserBookmark(
  $input: CreateUserBookmarkInput!
  $condition: ModelUserBookmarkConditionInput
) {
  createUserBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserBookmarkMutationVariables,
  APITypes.CreateUserBookmarkMutation
>;
export const updateUserBookmark = /* GraphQL */ `mutation UpdateUserBookmark(
  $input: UpdateUserBookmarkInput!
  $condition: ModelUserBookmarkConditionInput
) {
  updateUserBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserBookmarkMutationVariables,
  APITypes.UpdateUserBookmarkMutation
>;
export const deleteUserBookmark = /* GraphQL */ `mutation DeleteUserBookmark(
  $input: DeleteUserBookmarkInput!
  $condition: ModelUserBookmarkConditionInput
) {
  deleteUserBookmark(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserBookmarkMutationVariables,
  APITypes.DeleteUserBookmarkMutation
>;
export const createProviderNotification = /* GraphQL */ `mutation CreateProviderNotification(
  $input: CreateProviderNotificationInput!
  $condition: ModelProviderNotificationConditionInput
) {
  createProviderNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderNotificationMutationVariables,
  APITypes.CreateProviderNotificationMutation
>;
export const updateProviderNotification = /* GraphQL */ `mutation UpdateProviderNotification(
  $input: UpdateProviderNotificationInput!
  $condition: ModelProviderNotificationConditionInput
) {
  updateProviderNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderNotificationMutationVariables,
  APITypes.UpdateProviderNotificationMutation
>;
export const deleteProviderNotification = /* GraphQL */ `mutation DeleteProviderNotification(
  $input: DeleteProviderNotificationInput!
  $condition: ModelProviderNotificationConditionInput
) {
  deleteProviderNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderNotificationMutationVariables,
  APITypes.DeleteProviderNotificationMutation
>;
export const createUserNotification = /* GraphQL */ `mutation CreateUserNotification(
  $input: CreateUserNotificationInput!
  $condition: ModelUserNotificationConditionInput
) {
  createUserNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserNotificationMutationVariables,
  APITypes.CreateUserNotificationMutation
>;
export const updateUserNotification = /* GraphQL */ `mutation UpdateUserNotification(
  $input: UpdateUserNotificationInput!
  $condition: ModelUserNotificationConditionInput
) {
  updateUserNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserNotificationMutationVariables,
  APITypes.UpdateUserNotificationMutation
>;
export const deleteUserNotification = /* GraphQL */ `mutation DeleteUserNotification(
  $input: DeleteUserNotificationInput!
  $condition: ModelUserNotificationConditionInput
) {
  deleteUserNotification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserNotificationMutationVariables,
  APITypes.DeleteUserNotificationMutation
>;
export const createServiceDiscount = /* GraphQL */ `mutation CreateServiceDiscount(
  $input: CreateServiceDiscountInput!
  $condition: ModelServiceDiscountConditionInput
) {
  createServiceDiscount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceDiscountMutationVariables,
  APITypes.CreateServiceDiscountMutation
>;
export const updateServiceDiscount = /* GraphQL */ `mutation UpdateServiceDiscount(
  $input: UpdateServiceDiscountInput!
  $condition: ModelServiceDiscountConditionInput
) {
  updateServiceDiscount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceDiscountMutationVariables,
  APITypes.UpdateServiceDiscountMutation
>;
export const deleteServiceDiscount = /* GraphQL */ `mutation DeleteServiceDiscount(
  $input: DeleteServiceDiscountInput!
  $condition: ModelServiceDiscountConditionInput
) {
  deleteServiceDiscount(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceDiscountMutationVariables,
  APITypes.DeleteServiceDiscountMutation
>;
export const createProviderAvailability = /* GraphQL */ `mutation CreateProviderAvailability(
  $input: CreateProviderAvailabilityInput!
  $condition: ModelProviderAvailabilityConditionInput
) {
  createProviderAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderAvailabilityMutationVariables,
  APITypes.CreateProviderAvailabilityMutation
>;
export const updateProviderAvailability = /* GraphQL */ `mutation UpdateProviderAvailability(
  $input: UpdateProviderAvailabilityInput!
  $condition: ModelProviderAvailabilityConditionInput
) {
  updateProviderAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderAvailabilityMutationVariables,
  APITypes.UpdateProviderAvailabilityMutation
>;
export const deleteProviderAvailability = /* GraphQL */ `mutation DeleteProviderAvailability(
  $input: DeleteProviderAvailabilityInput!
  $condition: ModelProviderAvailabilityConditionInput
) {
  deleteProviderAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderAvailabilityMutationVariables,
  APITypes.DeleteProviderAvailabilityMutation
>;
export const createUserPreference = /* GraphQL */ `mutation CreateUserPreference(
  $input: CreateUserPreferenceInput!
  $condition: ModelUserPreferenceConditionInput
) {
  createUserPreference(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserPreferenceMutationVariables,
  APITypes.CreateUserPreferenceMutation
>;
export const updateUserPreference = /* GraphQL */ `mutation UpdateUserPreference(
  $input: UpdateUserPreferenceInput!
  $condition: ModelUserPreferenceConditionInput
) {
  updateUserPreference(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserPreferenceMutationVariables,
  APITypes.UpdateUserPreferenceMutation
>;
export const deleteUserPreference = /* GraphQL */ `mutation DeleteUserPreference(
  $input: DeleteUserPreferenceInput!
  $condition: ModelUserPreferenceConditionInput
) {
  deleteUserPreference(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserPreferenceMutationVariables,
  APITypes.DeleteUserPreferenceMutation
>;
export const createProviderCertification = /* GraphQL */ `mutation CreateProviderCertification(
  $input: CreateProviderCertificationInput!
  $condition: ModelProviderCertificationConditionInput
) {
  createProviderCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderCertificationMutationVariables,
  APITypes.CreateProviderCertificationMutation
>;
export const updateProviderCertification = /* GraphQL */ `mutation UpdateProviderCertification(
  $input: UpdateProviderCertificationInput!
  $condition: ModelProviderCertificationConditionInput
) {
  updateProviderCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderCertificationMutationVariables,
  APITypes.UpdateProviderCertificationMutation
>;
export const deleteProviderCertification = /* GraphQL */ `mutation DeleteProviderCertification(
  $input: DeleteProviderCertificationInput!
  $condition: ModelProviderCertificationConditionInput
) {
  deleteProviderCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderCertificationMutationVariables,
  APITypes.DeleteProviderCertificationMutation
>;
export const createServiceVideo = /* GraphQL */ `mutation CreateServiceVideo(
  $input: CreateServiceVideoInput!
  $condition: ModelServiceVideoConditionInput
) {
  createServiceVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceVideoMutationVariables,
  APITypes.CreateServiceVideoMutation
>;
export const updateServiceVideo = /* GraphQL */ `mutation UpdateServiceVideo(
  $input: UpdateServiceVideoInput!
  $condition: ModelServiceVideoConditionInput
) {
  updateServiceVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceVideoMutationVariables,
  APITypes.UpdateServiceVideoMutation
>;
export const deleteServiceVideo = /* GraphQL */ `mutation DeleteServiceVideo(
  $input: DeleteServiceVideoInput!
  $condition: ModelServiceVideoConditionInput
) {
  deleteServiceVideo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceVideoMutationVariables,
  APITypes.DeleteServiceVideoMutation
>;
export const createServiceImage = /* GraphQL */ `mutation CreateServiceImage(
  $input: CreateServiceImageInput!
  $condition: ModelServiceImageConditionInput
) {
  createServiceImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceImageMutationVariables,
  APITypes.CreateServiceImageMutation
>;
export const updateServiceImage = /* GraphQL */ `mutation UpdateServiceImage(
  $input: UpdateServiceImageInput!
  $condition: ModelServiceImageConditionInput
) {
  updateServiceImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceImageMutationVariables,
  APITypes.UpdateServiceImageMutation
>;
export const deleteServiceImage = /* GraphQL */ `mutation DeleteServiceImage(
  $input: DeleteServiceImageInput!
  $condition: ModelServiceImageConditionInput
) {
  deleteServiceImage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceImageMutationVariables,
  APITypes.DeleteServiceImageMutation
>;
export const createServiceReview = /* GraphQL */ `mutation CreateServiceReview(
  $input: CreateServiceReviewInput!
  $condition: ModelServiceReviewConditionInput
) {
  createServiceReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceReviewMutationVariables,
  APITypes.CreateServiceReviewMutation
>;
export const updateServiceReview = /* GraphQL */ `mutation UpdateServiceReview(
  $input: UpdateServiceReviewInput!
  $condition: ModelServiceReviewConditionInput
) {
  updateServiceReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceReviewMutationVariables,
  APITypes.UpdateServiceReviewMutation
>;
export const deleteServiceReview = /* GraphQL */ `mutation DeleteServiceReview(
  $input: DeleteServiceReviewInput!
  $condition: ModelServiceReviewConditionInput
) {
  deleteServiceReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceReviewMutationVariables,
  APITypes.DeleteServiceReviewMutation
>;
export const createAIDiagnostics = /* GraphQL */ `mutation CreateAIDiagnostics(
  $input: CreateAIDiagnosticsInput!
  $condition: ModelAIDiagnosticsConditionInput
) {
  createAIDiagnostics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAIDiagnosticsMutationVariables,
  APITypes.CreateAIDiagnosticsMutation
>;
export const updateAIDiagnostics = /* GraphQL */ `mutation UpdateAIDiagnostics(
  $input: UpdateAIDiagnosticsInput!
  $condition: ModelAIDiagnosticsConditionInput
) {
  updateAIDiagnostics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAIDiagnosticsMutationVariables,
  APITypes.UpdateAIDiagnosticsMutation
>;
export const deleteAIDiagnostics = /* GraphQL */ `mutation DeleteAIDiagnostics(
  $input: DeleteAIDiagnosticsInput!
  $condition: ModelAIDiagnosticsConditionInput
) {
  deleteAIDiagnostics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAIDiagnosticsMutationVariables,
  APITypes.DeleteAIDiagnosticsMutation
>;
export const createCustomization = /* GraphQL */ `mutation CreateCustomization(
  $input: CreateCustomizationInput!
  $condition: ModelCustomizationConditionInput
) {
  createCustomization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomizationMutationVariables,
  APITypes.CreateCustomizationMutation
>;
export const updateCustomization = /* GraphQL */ `mutation UpdateCustomization(
  $input: UpdateCustomizationInput!
  $condition: ModelCustomizationConditionInput
) {
  updateCustomization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomizationMutationVariables,
  APITypes.UpdateCustomizationMutation
>;
export const deleteCustomization = /* GraphQL */ `mutation DeleteCustomization(
  $input: DeleteCustomizationInput!
  $condition: ModelCustomizationConditionInput
) {
  deleteCustomization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomizationMutationVariables,
  APITypes.DeleteCustomizationMutation
>;
export const createExpense = /* GraphQL */ `mutation CreateExpense(
  $input: CreateExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  createExpense(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExpenseMutationVariables,
  APITypes.CreateExpenseMutation
>;
export const updateExpense = /* GraphQL */ `mutation UpdateExpense(
  $input: UpdateExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  updateExpense(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExpenseMutationVariables,
  APITypes.UpdateExpenseMutation
>;
export const deleteExpense = /* GraphQL */ `mutation DeleteExpense(
  $input: DeleteExpenseInput!
  $condition: ModelExpenseConditionInput
) {
  deleteExpense(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExpenseMutationVariables,
  APITypes.DeleteExpenseMutation
>;
export const createFavoriteProvider = /* GraphQL */ `mutation CreateFavoriteProvider(
  $input: CreateFavoriteProviderInput!
  $condition: ModelFavoriteProviderConditionInput
) {
  createFavoriteProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFavoriteProviderMutationVariables,
  APITypes.CreateFavoriteProviderMutation
>;
export const updateFavoriteProvider = /* GraphQL */ `mutation UpdateFavoriteProvider(
  $input: UpdateFavoriteProviderInput!
  $condition: ModelFavoriteProviderConditionInput
) {
  updateFavoriteProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFavoriteProviderMutationVariables,
  APITypes.UpdateFavoriteProviderMutation
>;
export const deleteFavoriteProvider = /* GraphQL */ `mutation DeleteFavoriteProvider(
  $input: DeleteFavoriteProviderInput!
  $condition: ModelFavoriteProviderConditionInput
) {
  deleteFavoriteProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFavoriteProviderMutationVariables,
  APITypes.DeleteFavoriteProviderMutation
>;
export const createUserHistory = /* GraphQL */ `mutation CreateUserHistory(
  $input: CreateUserHistoryInput!
  $condition: ModelUserHistoryConditionInput
) {
  createUserHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserHistoryMutationVariables,
  APITypes.CreateUserHistoryMutation
>;
export const updateUserHistory = /* GraphQL */ `mutation UpdateUserHistory(
  $input: UpdateUserHistoryInput!
  $condition: ModelUserHistoryConditionInput
) {
  updateUserHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserHistoryMutationVariables,
  APITypes.UpdateUserHistoryMutation
>;
export const deleteUserHistory = /* GraphQL */ `mutation DeleteUserHistory(
  $input: DeleteUserHistoryInput!
  $condition: ModelUserHistoryConditionInput
) {
  deleteUserHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserHistoryMutationVariables,
  APITypes.DeleteUserHistoryMutation
>;
export const createProviderAward = /* GraphQL */ `mutation CreateProviderAward(
  $input: CreateProviderAwardInput!
  $condition: ModelProviderAwardConditionInput
) {
  createProviderAward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderAwardMutationVariables,
  APITypes.CreateProviderAwardMutation
>;
export const updateProviderAward = /* GraphQL */ `mutation UpdateProviderAward(
  $input: UpdateProviderAwardInput!
  $condition: ModelProviderAwardConditionInput
) {
  updateProviderAward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderAwardMutationVariables,
  APITypes.UpdateProviderAwardMutation
>;
export const deleteProviderAward = /* GraphQL */ `mutation DeleteProviderAward(
  $input: DeleteProviderAwardInput!
  $condition: ModelProviderAwardConditionInput
) {
  deleteProviderAward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderAwardMutationVariables,
  APITypes.DeleteProviderAwardMutation
>;
export const createReferral = /* GraphQL */ `mutation CreateReferral(
  $input: CreateReferralInput!
  $condition: ModelReferralConditionInput
) {
  createReferral(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReferralMutationVariables,
  APITypes.CreateReferralMutation
>;
export const updateReferral = /* GraphQL */ `mutation UpdateReferral(
  $input: UpdateReferralInput!
  $condition: ModelReferralConditionInput
) {
  updateReferral(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReferralMutationVariables,
  APITypes.UpdateReferralMutation
>;
export const deleteReferral = /* GraphQL */ `mutation DeleteReferral(
  $input: DeleteReferralInput!
  $condition: ModelReferralConditionInput
) {
  deleteReferral(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReferralMutationVariables,
  APITypes.DeleteReferralMutation
>;
export const createTip = /* GraphQL */ `mutation CreateTip(
  $input: CreateTipInput!
  $condition: ModelTipConditionInput
) {
  createTip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTipMutationVariables,
  APITypes.CreateTipMutation
>;
export const updateTip = /* GraphQL */ `mutation UpdateTip(
  $input: UpdateTipInput!
  $condition: ModelTipConditionInput
) {
  updateTip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTipMutationVariables,
  APITypes.UpdateTipMutation
>;
export const deleteTip = /* GraphQL */ `mutation DeleteTip(
  $input: DeleteTipInput!
  $condition: ModelTipConditionInput
) {
  deleteTip(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTipMutationVariables,
  APITypes.DeleteTipMutation
>;
export const createPaymentMethod = /* GraphQL */ `mutation CreatePaymentMethod(
  $input: CreatePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  createPaymentMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePaymentMethodMutationVariables,
  APITypes.CreatePaymentMethodMutation
>;
export const updatePaymentMethod = /* GraphQL */ `mutation UpdatePaymentMethod(
  $input: UpdatePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  updatePaymentMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePaymentMethodMutationVariables,
  APITypes.UpdatePaymentMethodMutation
>;
export const deletePaymentMethod = /* GraphQL */ `mutation DeletePaymentMethod(
  $input: DeletePaymentMethodInput!
  $condition: ModelPaymentMethodConditionInput
) {
  deletePaymentMethod(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePaymentMethodMutationVariables,
  APITypes.DeletePaymentMethodMutation
>;
export const createInvoice = /* GraphQL */ `mutation CreateInvoice(
  $input: CreateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  createInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateInvoiceMutationVariables,
  APITypes.CreateInvoiceMutation
>;
export const updateInvoice = /* GraphQL */ `mutation UpdateInvoice(
  $input: UpdateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  updateInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateInvoiceMutationVariables,
  APITypes.UpdateInvoiceMutation
>;
export const deleteInvoice = /* GraphQL */ `mutation DeleteInvoice(
  $input: DeleteInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  deleteInvoice(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteInvoiceMutationVariables,
  APITypes.DeleteInvoiceMutation
>;
export const createContract = /* GraphQL */ `mutation CreateContract(
  $input: CreateContractInput!
  $condition: ModelContractConditionInput
) {
  createContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContractMutationVariables,
  APITypes.CreateContractMutation
>;
export const updateContract = /* GraphQL */ `mutation UpdateContract(
  $input: UpdateContractInput!
  $condition: ModelContractConditionInput
) {
  updateContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContractMutationVariables,
  APITypes.UpdateContractMutation
>;
export const deleteContract = /* GraphQL */ `mutation DeleteContract(
  $input: DeleteContractInput!
  $condition: ModelContractConditionInput
) {
  deleteContract(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContractMutationVariables,
  APITypes.DeleteContractMutation
>;
export const createNicheService = /* GraphQL */ `mutation CreateNicheService(
  $input: CreateNicheServiceInput!
  $condition: ModelNicheServiceConditionInput
) {
  createNicheService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNicheServiceMutationVariables,
  APITypes.CreateNicheServiceMutation
>;
export const updateNicheService = /* GraphQL */ `mutation UpdateNicheService(
  $input: UpdateNicheServiceInput!
  $condition: ModelNicheServiceConditionInput
) {
  updateNicheService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNicheServiceMutationVariables,
  APITypes.UpdateNicheServiceMutation
>;
export const deleteNicheService = /* GraphQL */ `mutation DeleteNicheService(
  $input: DeleteNicheServiceInput!
  $condition: ModelNicheServiceConditionInput
) {
  deleteNicheService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNicheServiceMutationVariables,
  APITypes.DeleteNicheServiceMutation
>;
export const createServicePackage = /* GraphQL */ `mutation CreateServicePackage(
  $input: CreateServicePackageInput!
  $condition: ModelServicePackageConditionInput
) {
  createServicePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServicePackageMutationVariables,
  APITypes.CreateServicePackageMutation
>;
export const updateServicePackage = /* GraphQL */ `mutation UpdateServicePackage(
  $input: UpdateServicePackageInput!
  $condition: ModelServicePackageConditionInput
) {
  updateServicePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServicePackageMutationVariables,
  APITypes.UpdateServicePackageMutation
>;
export const deleteServicePackage = /* GraphQL */ `mutation DeleteServicePackage(
  $input: DeleteServicePackageInput!
  $condition: ModelServicePackageConditionInput
) {
  deleteServicePackage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServicePackageMutationVariables,
  APITypes.DeleteServicePackageMutation
>;
export const createReward = /* GraphQL */ `mutation CreateReward(
  $input: CreateRewardInput!
  $condition: ModelRewardConditionInput
) {
  createReward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRewardMutationVariables,
  APITypes.CreateRewardMutation
>;
export const updateReward = /* GraphQL */ `mutation UpdateReward(
  $input: UpdateRewardInput!
  $condition: ModelRewardConditionInput
) {
  updateReward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRewardMutationVariables,
  APITypes.UpdateRewardMutation
>;
export const deleteReward = /* GraphQL */ `mutation DeleteReward(
  $input: DeleteRewardInput!
  $condition: ModelRewardConditionInput
) {
  deleteReward(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRewardMutationVariables,
  APITypes.DeleteRewardMutation
>;
export const createLoyaltyProgram = /* GraphQL */ `mutation CreateLoyaltyProgram(
  $input: CreateLoyaltyProgramInput!
  $condition: ModelLoyaltyProgramConditionInput
) {
  createLoyaltyProgram(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLoyaltyProgramMutationVariables,
  APITypes.CreateLoyaltyProgramMutation
>;
export const updateLoyaltyProgram = /* GraphQL */ `mutation UpdateLoyaltyProgram(
  $input: UpdateLoyaltyProgramInput!
  $condition: ModelLoyaltyProgramConditionInput
) {
  updateLoyaltyProgram(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLoyaltyProgramMutationVariables,
  APITypes.UpdateLoyaltyProgramMutation
>;
export const deleteLoyaltyProgram = /* GraphQL */ `mutation DeleteLoyaltyProgram(
  $input: DeleteLoyaltyProgramInput!
  $condition: ModelLoyaltyProgramConditionInput
) {
  deleteLoyaltyProgram(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLoyaltyProgramMutationVariables,
  APITypes.DeleteLoyaltyProgramMutation
>;
export const createVerification = /* GraphQL */ `mutation CreateVerification(
  $input: CreateVerificationInput!
  $condition: ModelVerificationConditionInput
) {
  createVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVerificationMutationVariables,
  APITypes.CreateVerificationMutation
>;
export const updateVerification = /* GraphQL */ `mutation UpdateVerification(
  $input: UpdateVerificationInput!
  $condition: ModelVerificationConditionInput
) {
  updateVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVerificationMutationVariables,
  APITypes.UpdateVerificationMutation
>;
export const deleteVerification = /* GraphQL */ `mutation DeleteVerification(
  $input: DeleteVerificationInput!
  $condition: ModelVerificationConditionInput
) {
  deleteVerification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVerificationMutationVariables,
  APITypes.DeleteVerificationMutation
>;
export const createAnalytics = /* GraphQL */ `mutation CreateAnalytics(
  $input: CreateAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  createAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAnalyticsMutationVariables,
  APITypes.CreateAnalyticsMutation
>;
export const updateAnalytics = /* GraphQL */ `mutation UpdateAnalytics(
  $input: UpdateAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  updateAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAnalyticsMutationVariables,
  APITypes.UpdateAnalyticsMutation
>;
export const deleteAnalytics = /* GraphQL */ `mutation DeleteAnalytics(
  $input: DeleteAnalyticsInput!
  $condition: ModelAnalyticsConditionInput
) {
  deleteAnalytics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAnalyticsMutationVariables,
  APITypes.DeleteAnalyticsMutation
>;
export const createPromoCode = /* GraphQL */ `mutation CreatePromoCode(
  $input: CreatePromoCodeInput!
  $condition: ModelPromoCodeConditionInput
) {
  createPromoCode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePromoCodeMutationVariables,
  APITypes.CreatePromoCodeMutation
>;
export const updatePromoCode = /* GraphQL */ `mutation UpdatePromoCode(
  $input: UpdatePromoCodeInput!
  $condition: ModelPromoCodeConditionInput
) {
  updatePromoCode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePromoCodeMutationVariables,
  APITypes.UpdatePromoCodeMutation
>;
export const deletePromoCode = /* GraphQL */ `mutation DeletePromoCode(
  $input: DeletePromoCodeInput!
  $condition: ModelPromoCodeConditionInput
) {
  deletePromoCode(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePromoCodeMutationVariables,
  APITypes.DeletePromoCodeMutation
>;
export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createJobTracking = /* GraphQL */ `mutation CreateJobTracking(
  $input: CreateJobTrackingInput!
  $condition: ModelJobTrackingConditionInput
) {
  createJobTracking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobTrackingMutationVariables,
  APITypes.CreateJobTrackingMutation
>;
export const updateJobTracking = /* GraphQL */ `mutation UpdateJobTracking(
  $input: UpdateJobTrackingInput!
  $condition: ModelJobTrackingConditionInput
) {
  updateJobTracking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobTrackingMutationVariables,
  APITypes.UpdateJobTrackingMutation
>;
export const deleteJobTracking = /* GraphQL */ `mutation DeleteJobTracking(
  $input: DeleteJobTrackingInput!
  $condition: ModelJobTrackingConditionInput
) {
  deleteJobTracking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobTrackingMutationVariables,
  APITypes.DeleteJobTrackingMutation
>;
export const createAIChatLog = /* GraphQL */ `mutation CreateAIChatLog(
  $input: CreateAIChatLogInput!
  $condition: ModelAIChatLogConditionInput
) {
  createAIChatLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAIChatLogMutationVariables,
  APITypes.CreateAIChatLogMutation
>;
export const updateAIChatLog = /* GraphQL */ `mutation UpdateAIChatLog(
  $input: UpdateAIChatLogInput!
  $condition: ModelAIChatLogConditionInput
) {
  updateAIChatLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAIChatLogMutationVariables,
  APITypes.UpdateAIChatLogMutation
>;
export const deleteAIChatLog = /* GraphQL */ `mutation DeleteAIChatLog(
  $input: DeleteAIChatLogInput!
  $condition: ModelAIChatLogConditionInput
) {
  deleteAIChatLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAIChatLogMutationVariables,
  APITypes.DeleteAIChatLogMutation
>;
export const createAIChatBot = /* GraphQL */ `mutation CreateAIChatBot(
  $input: CreateAIChatBotInput!
  $condition: ModelAIChatBotConditionInput
) {
  createAIChatBot(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAIChatBotMutationVariables,
  APITypes.CreateAIChatBotMutation
>;
export const updateAIChatBot = /* GraphQL */ `mutation UpdateAIChatBot(
  $input: UpdateAIChatBotInput!
  $condition: ModelAIChatBotConditionInput
) {
  updateAIChatBot(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAIChatBotMutationVariables,
  APITypes.UpdateAIChatBotMutation
>;
export const deleteAIChatBot = /* GraphQL */ `mutation DeleteAIChatBot(
  $input: DeleteAIChatBotInput!
  $condition: ModelAIChatBotConditionInput
) {
  deleteAIChatBot(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAIChatBotMutationVariables,
  APITypes.DeleteAIChatBotMutation
>;
export const createMainCategory = /* GraphQL */ `mutation CreateMainCategory(
  $input: CreateMainCategoryInput!
  $condition: ModelMainCategoryConditionInput
) {
  createMainCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMainCategoryMutationVariables,
  APITypes.CreateMainCategoryMutation
>;
export const updateMainCategory = /* GraphQL */ `mutation UpdateMainCategory(
  $input: UpdateMainCategoryInput!
  $condition: ModelMainCategoryConditionInput
) {
  updateMainCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMainCategoryMutationVariables,
  APITypes.UpdateMainCategoryMutation
>;
export const deleteMainCategory = /* GraphQL */ `mutation DeleteMainCategory(
  $input: DeleteMainCategoryInput!
  $condition: ModelMainCategoryConditionInput
) {
  deleteMainCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMainCategoryMutationVariables,
  APITypes.DeleteMainCategoryMutation
>;
export const createSubCategory = /* GraphQL */ `mutation CreateSubCategory(
  $input: CreateSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  createSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSubCategoryMutationVariables,
  APITypes.CreateSubCategoryMutation
>;
export const updateSubCategory = /* GraphQL */ `mutation UpdateSubCategory(
  $input: UpdateSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  updateSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSubCategoryMutationVariables,
  APITypes.UpdateSubCategoryMutation
>;
export const deleteSubCategory = /* GraphQL */ `mutation DeleteSubCategory(
  $input: DeleteSubCategoryInput!
  $condition: ModelSubCategoryConditionInput
) {
  deleteSubCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSubCategoryMutationVariables,
  APITypes.DeleteSubCategoryMutation
>;
export const createPLMBRSubscription = /* GraphQL */ `mutation CreatePLMBRSubscription(
  $input: CreatePLMBRSubscriptionInput!
  $condition: ModelPLMBRSubscriptionConditionInput
) {
  createPLMBRSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePLMBRSubscriptionMutationVariables,
  APITypes.CreatePLMBRSubscriptionMutation
>;
export const updatePLMBRSubscription = /* GraphQL */ `mutation UpdatePLMBRSubscription(
  $input: UpdatePLMBRSubscriptionInput!
  $condition: ModelPLMBRSubscriptionConditionInput
) {
  updatePLMBRSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePLMBRSubscriptionMutationVariables,
  APITypes.UpdatePLMBRSubscriptionMutation
>;
export const deletePLMBRSubscription = /* GraphQL */ `mutation DeletePLMBRSubscription(
  $input: DeletePLMBRSubscriptionInput!
  $condition: ModelPLMBRSubscriptionConditionInput
) {
  deletePLMBRSubscription(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePLMBRSubscriptionMutationVariables,
  APITypes.DeletePLMBRSubscriptionMutation
>;
export const createUserSettings = /* GraphQL */ `mutation CreateUserSettings(
  $input: CreateUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  createUserSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserSettingsMutationVariables,
  APITypes.CreateUserSettingsMutation
>;
export const updateUserSettings = /* GraphQL */ `mutation UpdateUserSettings(
  $input: UpdateUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  updateUserSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserSettingsMutationVariables,
  APITypes.UpdateUserSettingsMutation
>;
export const deleteUserSettings = /* GraphQL */ `mutation DeleteUserSettings(
  $input: DeleteUserSettingsInput!
  $condition: ModelUserSettingsConditionInput
) {
  deleteUserSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserSettingsMutationVariables,
  APITypes.DeleteUserSettingsMutation
>;
export const createProviderSettings = /* GraphQL */ `mutation CreateProviderSettings(
  $input: CreateProviderSettingsInput!
  $condition: ModelProviderSettingsConditionInput
) {
  createProviderSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProviderSettingsMutationVariables,
  APITypes.CreateProviderSettingsMutation
>;
export const updateProviderSettings = /* GraphQL */ `mutation UpdateProviderSettings(
  $input: UpdateProviderSettingsInput!
  $condition: ModelProviderSettingsConditionInput
) {
  updateProviderSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProviderSettingsMutationVariables,
  APITypes.UpdateProviderSettingsMutation
>;
export const deleteProviderSettings = /* GraphQL */ `mutation DeleteProviderSettings(
  $input: DeleteProviderSettingsInput!
  $condition: ModelProviderSettingsConditionInput
) {
  deleteProviderSettings(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProviderSettingsMutationVariables,
  APITypes.DeleteProviderSettingsMutation
>;
export const createPortfolio = /* GraphQL */ `mutation CreatePortfolio(
  $input: CreatePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  createPortfolio(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePortfolioMutationVariables,
  APITypes.CreatePortfolioMutation
>;
export const updatePortfolio = /* GraphQL */ `mutation UpdatePortfolio(
  $input: UpdatePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  updatePortfolio(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePortfolioMutationVariables,
  APITypes.UpdatePortfolioMutation
>;
export const deletePortfolio = /* GraphQL */ `mutation DeletePortfolio(
  $input: DeletePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  deletePortfolio(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePortfolioMutationVariables,
  APITypes.DeletePortfolioMutation
>;
export const createServiceVariant = /* GraphQL */ `mutation CreateServiceVariant(
  $input: CreateServiceVariantInput!
  $condition: ModelServiceVariantConditionInput
) {
  createServiceVariant(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceVariantMutationVariables,
  APITypes.CreateServiceVariantMutation
>;
export const updateServiceVariant = /* GraphQL */ `mutation UpdateServiceVariant(
  $input: UpdateServiceVariantInput!
  $condition: ModelServiceVariantConditionInput
) {
  updateServiceVariant(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceVariantMutationVariables,
  APITypes.UpdateServiceVariantMutation
>;
export const deleteServiceVariant = /* GraphQL */ `mutation DeleteServiceVariant(
  $input: DeleteServiceVariantInput!
  $condition: ModelServiceVariantConditionInput
) {
  deleteServiceVariant(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceVariantMutationVariables,
  APITypes.DeleteServiceVariantMutation
>;
export const createServiceHighlight = /* GraphQL */ `mutation CreateServiceHighlight(
  $input: CreateServiceHighlightInput!
  $condition: ModelServiceHighlightConditionInput
) {
  createServiceHighlight(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceHighlightMutationVariables,
  APITypes.CreateServiceHighlightMutation
>;
export const updateServiceHighlight = /* GraphQL */ `mutation UpdateServiceHighlight(
  $input: UpdateServiceHighlightInput!
  $condition: ModelServiceHighlightConditionInput
) {
  updateServiceHighlight(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceHighlightMutationVariables,
  APITypes.UpdateServiceHighlightMutation
>;
export const deleteServiceHighlight = /* GraphQL */ `mutation DeleteServiceHighlight(
  $input: DeleteServiceHighlightInput!
  $condition: ModelServiceHighlightConditionInput
) {
  deleteServiceHighlight(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceHighlightMutationVariables,
  APITypes.DeleteServiceHighlightMutation
>;
export const createServiceTag = /* GraphQL */ `mutation CreateServiceTag(
  $input: CreateServiceTagInput!
  $condition: ModelServiceTagConditionInput
) {
  createServiceTag(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceTagMutationVariables,
  APITypes.CreateServiceTagMutation
>;
export const updateServiceTag = /* GraphQL */ `mutation UpdateServiceTag(
  $input: UpdateServiceTagInput!
  $condition: ModelServiceTagConditionInput
) {
  updateServiceTag(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceTagMutationVariables,
  APITypes.UpdateServiceTagMutation
>;
export const deleteServiceTag = /* GraphQL */ `mutation DeleteServiceTag(
  $input: DeleteServiceTagInput!
  $condition: ModelServiceTagConditionInput
) {
  deleteServiceTag(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceTagMutationVariables,
  APITypes.DeleteServiceTagMutation
>;
export const createServiceFAQ = /* GraphQL */ `mutation CreateServiceFAQ(
  $input: CreateServiceFAQInput!
  $condition: ModelServiceFAQConditionInput
) {
  createServiceFAQ(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServiceFAQMutationVariables,
  APITypes.CreateServiceFAQMutation
>;
export const updateServiceFAQ = /* GraphQL */ `mutation UpdateServiceFAQ(
  $input: UpdateServiceFAQInput!
  $condition: ModelServiceFAQConditionInput
) {
  updateServiceFAQ(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServiceFAQMutationVariables,
  APITypes.UpdateServiceFAQMutation
>;
export const deleteServiceFAQ = /* GraphQL */ `mutation DeleteServiceFAQ(
  $input: DeleteServiceFAQInput!
  $condition: ModelServiceFAQConditionInput
) {
  deleteServiceFAQ(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServiceFAQMutationVariables,
  APITypes.DeleteServiceFAQMutation
>;
export const createFeedback = /* GraphQL */ `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFeedbackMutationVariables,
  APITypes.CreateFeedbackMutation
>;
export const updateFeedback = /* GraphQL */ `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFeedbackMutationVariables,
  APITypes.UpdateFeedbackMutation
>;
export const deleteFeedback = /* GraphQL */ `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFeedbackMutationVariables,
  APITypes.DeleteFeedbackMutation
>;
export const createEquipment = /* GraphQL */ `mutation CreateEquipment(
  $input: CreateEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  createEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEquipmentMutationVariables,
  APITypes.CreateEquipmentMutation
>;
export const updateEquipment = /* GraphQL */ `mutation UpdateEquipment(
  $input: UpdateEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  updateEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEquipmentMutationVariables,
  APITypes.UpdateEquipmentMutation
>;
export const deleteEquipment = /* GraphQL */ `mutation DeleteEquipment(
  $input: DeleteEquipmentInput!
  $condition: ModelEquipmentConditionInput
) {
  deleteEquipment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEquipmentMutationVariables,
  APITypes.DeleteEquipmentMutation
>;
export const createWallet = /* GraphQL */ `mutation CreateWallet(
  $input: CreateWalletInput!
  $condition: ModelWalletConditionInput
) {
  createWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWalletMutationVariables,
  APITypes.CreateWalletMutation
>;
export const updateWallet = /* GraphQL */ `mutation UpdateWallet(
  $input: UpdateWalletInput!
  $condition: ModelWalletConditionInput
) {
  updateWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWalletMutationVariables,
  APITypes.UpdateWalletMutation
>;
export const deleteWallet = /* GraphQL */ `mutation DeleteWallet(
  $input: DeleteWalletInput!
  $condition: ModelWalletConditionInput
) {
  deleteWallet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWalletMutationVariables,
  APITypes.DeleteWalletMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createReviewResponse = /* GraphQL */ `mutation CreateReviewResponse(
  $input: CreateReviewResponseInput!
  $condition: ModelReviewResponseConditionInput
) {
  createReviewResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewResponseMutationVariables,
  APITypes.CreateReviewResponseMutation
>;
export const updateReviewResponse = /* GraphQL */ `mutation UpdateReviewResponse(
  $input: UpdateReviewResponseInput!
  $condition: ModelReviewResponseConditionInput
) {
  updateReviewResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewResponseMutationVariables,
  APITypes.UpdateReviewResponseMutation
>;
export const deleteReviewResponse = /* GraphQL */ `mutation DeleteReviewResponse(
  $input: DeleteReviewResponseInput!
  $condition: ModelReviewResponseConditionInput
) {
  deleteReviewResponse(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewResponseMutationVariables,
  APITypes.DeleteReviewResponseMutation
>;
export const createMessageThread = /* GraphQL */ `mutation CreateMessageThread(
  $input: CreateMessageThreadInput!
  $condition: ModelMessageThreadConditionInput
) {
  createMessageThread(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageThreadMutationVariables,
  APITypes.CreateMessageThreadMutation
>;
export const updateMessageThread = /* GraphQL */ `mutation UpdateMessageThread(
  $input: UpdateMessageThreadInput!
  $condition: ModelMessageThreadConditionInput
) {
  updateMessageThread(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageThreadMutationVariables,
  APITypes.UpdateMessageThreadMutation
>;
export const deleteMessageThread = /* GraphQL */ `mutation DeleteMessageThread(
  $input: DeleteMessageThreadInput!
  $condition: ModelMessageThreadConditionInput
) {
  deleteMessageThread(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageThreadMutationVariables,
  APITypes.DeleteMessageThreadMutation
>;
export const createMessageContent = /* GraphQL */ `mutation CreateMessageContent(
  $input: CreateMessageContentInput!
  $condition: ModelMessageContentConditionInput
) {
  createMessageContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageContentMutationVariables,
  APITypes.CreateMessageContentMutation
>;
export const updateMessageContent = /* GraphQL */ `mutation UpdateMessageContent(
  $input: UpdateMessageContentInput!
  $condition: ModelMessageContentConditionInput
) {
  updateMessageContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageContentMutationVariables,
  APITypes.UpdateMessageContentMutation
>;
export const deleteMessageContent = /* GraphQL */ `mutation DeleteMessageContent(
  $input: DeleteMessageContentInput!
  $condition: ModelMessageContentConditionInput
) {
  deleteMessageContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageContentMutationVariables,
  APITypes.DeleteMessageContentMutation
>;
export const createBooking = /* GraphQL */ `mutation CreateBooking(
  $input: CreateBookingInput!
  $condition: ModelBookingConditionInput
) {
  createBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookingMutationVariables,
  APITypes.CreateBookingMutation
>;
export const updateBooking = /* GraphQL */ `mutation UpdateBooking(
  $input: UpdateBookingInput!
  $condition: ModelBookingConditionInput
) {
  updateBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookingMutationVariables,
  APITypes.UpdateBookingMutation
>;
export const deleteBooking = /* GraphQL */ `mutation DeleteBooking(
  $input: DeleteBookingInput!
  $condition: ModelBookingConditionInput
) {
  deleteBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
export const createTeamMember = /* GraphQL */ `mutation CreateTeamMember(
  $input: CreateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  createTeamMember(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTeamMemberMutationVariables,
  APITypes.CreateTeamMemberMutation
>;
export const updateTeamMember = /* GraphQL */ `mutation UpdateTeamMember(
  $input: UpdateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  updateTeamMember(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTeamMemberMutationVariables,
  APITypes.UpdateTeamMemberMutation
>;
export const deleteTeamMember = /* GraphQL */ `mutation DeleteTeamMember(
  $input: DeleteTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  deleteTeamMember(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTeamMemberMutationVariables,
  APITypes.DeleteTeamMemberMutation
>;
export const createLocation = /* GraphQL */ `mutation CreateLocation(
  $input: CreateLocationInput!
  $condition: ModelLocationConditionInput
) {
  createLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLocationMutationVariables,
  APITypes.CreateLocationMutation
>;
export const updateLocation = /* GraphQL */ `mutation UpdateLocation(
  $input: UpdateLocationInput!
  $condition: ModelLocationConditionInput
) {
  updateLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLocationMutationVariables,
  APITypes.UpdateLocationMutation
>;
export const deleteLocation = /* GraphQL */ `mutation DeleteLocation(
  $input: DeleteLocationInput!
  $condition: ModelLocationConditionInput
) {
  deleteLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLocationMutationVariables,
  APITypes.DeleteLocationMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createJob = /* GraphQL */ `mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateJobMutationVariables,
  APITypes.CreateJobMutation
>;
export const updateJob = /* GraphQL */ `mutation UpdateJob(
  $input: UpdateJobInput!
  $condition: ModelJobConditionInput
) {
  updateJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateJobMutationVariables,
  APITypes.UpdateJobMutation
>;
export const deleteJob = /* GraphQL */ `mutation DeleteJob(
  $input: DeleteJobInput!
  $condition: ModelJobConditionInput
) {
  deleteJob(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteJobMutationVariables,
  APITypes.DeleteJobMutation
>;
export const createService = /* GraphQL */ `mutation CreateService(
  $input: CreateServiceInput!
  $condition: ModelServiceConditionInput
) {
  createService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceMutationVariables,
  APITypes.CreateServiceMutation
>;
export const updateService = /* GraphQL */ `mutation UpdateService(
  $input: UpdateServiceInput!
  $condition: ModelServiceConditionInput
) {
  updateService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceMutationVariables,
  APITypes.UpdateServiceMutation
>;
export const deleteService = /* GraphQL */ `mutation DeleteService(
  $input: DeleteServiceInput!
  $condition: ModelServiceConditionInput
) {
  deleteService(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceMutationVariables,
  APITypes.DeleteServiceMutation
>;
export const createProvider = /* GraphQL */ `mutation CreateProvider(
  $input: CreateProviderInput!
  $condition: ModelProviderConditionInput
) {
  createProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderMutationVariables,
  APITypes.CreateProviderMutation
>;
export const updateProvider = /* GraphQL */ `mutation UpdateProvider(
  $input: UpdateProviderInput!
  $condition: ModelProviderConditionInput
) {
  updateProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderMutationVariables,
  APITypes.UpdateProviderMutation
>;
export const deleteProvider = /* GraphQL */ `mutation DeleteProvider(
  $input: DeleteProviderInput!
  $condition: ModelProviderConditionInput
) {
  deleteProvider(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderMutationVariables,
  APITypes.DeleteProviderMutation
>;
export const createAvailability = /* GraphQL */ `mutation CreateAvailability(
  $input: CreateAvailabilityInput!
  $condition: ModelAvailabilityConditionInput
) {
  createAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAvailabilityMutationVariables,
  APITypes.CreateAvailabilityMutation
>;
export const updateAvailability = /* GraphQL */ `mutation UpdateAvailability(
  $input: UpdateAvailabilityInput!
  $condition: ModelAvailabilityConditionInput
) {
  updateAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAvailabilityMutationVariables,
  APITypes.UpdateAvailabilityMutation
>;
export const deleteAvailability = /* GraphQL */ `mutation DeleteAvailability(
  $input: DeleteAvailabilityInput!
  $condition: ModelAvailabilityConditionInput
) {
  deleteAvailability(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAvailabilityMutationVariables,
  APITypes.DeleteAvailabilityMutation
>;
export const createProviderReview = /* GraphQL */ `mutation CreateProviderReview(
  $input: CreateProviderReviewInput!
  $condition: ModelProviderReviewConditionInput
) {
  createProviderReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderReviewMutationVariables,
  APITypes.CreateProviderReviewMutation
>;
export const updateProviderReview = /* GraphQL */ `mutation UpdateProviderReview(
  $input: UpdateProviderReviewInput!
  $condition: ModelProviderReviewConditionInput
) {
  updateProviderReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderReviewMutationVariables,
  APITypes.UpdateProviderReviewMutation
>;
export const deleteProviderReview = /* GraphQL */ `mutation DeleteProviderReview(
  $input: DeleteProviderReviewInput!
  $condition: ModelProviderReviewConditionInput
) {
  deleteProviderReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderReviewMutationVariables,
  APITypes.DeleteProviderReviewMutation
>;
export const createCertification = /* GraphQL */ `mutation CreateCertification(
  $input: CreateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  createCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCertificationMutationVariables,
  APITypes.CreateCertificationMutation
>;
export const updateCertification = /* GraphQL */ `mutation UpdateCertification(
  $input: UpdateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  updateCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCertificationMutationVariables,
  APITypes.UpdateCertificationMutation
>;
export const deleteCertification = /* GraphQL */ `mutation DeleteCertification(
  $input: DeleteCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  deleteCertification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCertificationMutationVariables,
  APITypes.DeleteCertificationMutation
>;
export const createQualification = /* GraphQL */ `mutation CreateQualification(
  $input: CreateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  createQualification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateQualificationMutationVariables,
  APITypes.CreateQualificationMutation
>;
export const updateQualification = /* GraphQL */ `mutation UpdateQualification(
  $input: UpdateQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  updateQualification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateQualificationMutationVariables,
  APITypes.UpdateQualificationMutation
>;
export const deleteQualification = /* GraphQL */ `mutation DeleteQualification(
  $input: DeleteQualificationInput!
  $condition: ModelQualificationConditionInput
) {
  deleteQualification(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteQualificationMutationVariables,
  APITypes.DeleteQualificationMutation
>;
export const createSpecialization = /* GraphQL */ `mutation CreateSpecialization(
  $input: CreateSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  createSpecialization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSpecializationMutationVariables,
  APITypes.CreateSpecializationMutation
>;
export const updateSpecialization = /* GraphQL */ `mutation UpdateSpecialization(
  $input: UpdateSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  updateSpecialization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSpecializationMutationVariables,
  APITypes.UpdateSpecializationMutation
>;
export const deleteSpecialization = /* GraphQL */ `mutation DeleteSpecialization(
  $input: DeleteSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  deleteSpecialization(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSpecializationMutationVariables,
  APITypes.DeleteSpecializationMutation
>;
export const createProviderHistory = /* GraphQL */ `mutation CreateProviderHistory(
  $input: CreateProviderHistoryInput!
  $condition: ModelProviderHistoryConditionInput
) {
  createProviderHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProviderHistoryMutationVariables,
  APITypes.CreateProviderHistoryMutation
>;
export const updateProviderHistory = /* GraphQL */ `mutation UpdateProviderHistory(
  $input: UpdateProviderHistoryInput!
  $condition: ModelProviderHistoryConditionInput
) {
  updateProviderHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProviderHistoryMutationVariables,
  APITypes.UpdateProviderHistoryMutation
>;
export const deleteProviderHistory = /* GraphQL */ `mutation DeleteProviderHistory(
  $input: DeleteProviderHistoryInput!
  $condition: ModelProviderHistoryConditionInput
) {
  deleteProviderHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProviderHistoryMutationVariables,
  APITypes.DeleteProviderHistoryMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
