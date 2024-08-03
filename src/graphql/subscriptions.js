"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.onUpdateAIDiagnostics = exports.onCreateAIDiagnostics = exports.onDeleteServiceReview = exports.onUpdateServiceReview = exports.onCreateServiceReview = exports.onDeleteServiceImage = exports.onUpdateServiceImage = exports.onCreateServiceImage = exports.onDeleteServiceVideo = exports.onUpdateServiceVideo = exports.onCreateServiceVideo = exports.onDeleteProviderCertification = exports.onUpdateProviderCertification = exports.onCreateProviderCertification = exports.onDeleteUserPreference = exports.onUpdateUserPreference = exports.onCreateUserPreference = exports.onDeleteProviderAvailability = exports.onUpdateProviderAvailability = exports.onCreateProviderAvailability = exports.onDeleteServiceDiscount = exports.onUpdateServiceDiscount = exports.onCreateServiceDiscount = exports.onDeleteUserNotification = exports.onUpdateUserNotification = exports.onCreateUserNotification = exports.onDeleteProviderNotification = exports.onUpdateProviderNotification = exports.onCreateProviderNotification = exports.onDeleteUserBookmark = exports.onUpdateUserBookmark = exports.onCreateUserBookmark = exports.onDeleteProviderBookmark = exports.onUpdateProviderBookmark = exports.onCreateProviderBookmark = exports.onDeleteUserInvoice = exports.onUpdateUserInvoice = exports.onCreateUserInvoice = exports.onDeleteUserReport = exports.onUpdateUserReport = exports.onCreateUserReport = exports.onDeleteProviderReport = exports.onUpdateProviderReport = exports.onCreateProviderReport = exports.onDeleteServicePromotion = exports.onUpdateServicePromotion = exports.onCreateServicePromotion = exports.onDeleteProviderSchedule = exports.onUpdateProviderSchedule = exports.onCreateProviderSchedule = void 0;
exports.onCreatePromoCode = exports.onDeleteAnalytics = exports.onUpdateAnalytics = exports.onCreateAnalytics = exports.onDeleteVerification = exports.onUpdateVerification = exports.onCreateVerification = exports.onDeleteLoyaltyProgram = exports.onUpdateLoyaltyProgram = exports.onCreateLoyaltyProgram = exports.onDeleteReward = exports.onUpdateReward = exports.onCreateReward = exports.onDeleteServicePackage = exports.onUpdateServicePackage = exports.onCreateServicePackage = exports.onDeleteNicheService = exports.onUpdateNicheService = exports.onCreateNicheService = exports.onDeleteContract = exports.onUpdateContract = exports.onCreateContract = exports.onDeleteInvoice = exports.onUpdateInvoice = exports.onCreateInvoice = exports.onDeletePaymentMethod = exports.onUpdatePaymentMethod = exports.onCreatePaymentMethod = exports.onDeleteTip = exports.onUpdateTip = exports.onCreateTip = exports.onDeleteReferral = exports.onUpdateReferral = exports.onCreateReferral = exports.onDeleteProviderAward = exports.onUpdateProviderAward = exports.onCreateProviderAward = exports.onDeleteUserHistory = exports.onUpdateUserHistory = exports.onCreateUserHistory = exports.onDeleteFavoriteProvider = exports.onUpdateFavoriteProvider = exports.onCreateFavoriteProvider = exports.onDeleteExpense = exports.onUpdateExpense = exports.onCreateExpense = exports.onDeleteCustomization = exports.onUpdateCustomization = exports.onCreateCustomization = exports.onDeleteAIDiagnostics = void 0;
exports.onDeleteEquipment = exports.onUpdateEquipment = exports.onCreateEquipment = exports.onDeleteFeedback = exports.onUpdateFeedback = exports.onCreateFeedback = exports.onDeleteServiceFAQ = exports.onUpdateServiceFAQ = exports.onCreateServiceFAQ = exports.onDeleteServiceTag = exports.onUpdateServiceTag = exports.onCreateServiceTag = exports.onDeleteServiceHighlight = exports.onUpdateServiceHighlight = exports.onCreateServiceHighlight = exports.onDeleteServiceVariant = exports.onUpdateServiceVariant = exports.onCreateServiceVariant = exports.onDeletePortfolio = exports.onUpdatePortfolio = exports.onCreatePortfolio = exports.onDeleteProviderSettings = exports.onUpdateProviderSettings = exports.onCreateProviderSettings = exports.onDeleteUserSettings = exports.onUpdateUserSettings = exports.onCreateUserSettings = exports.onDeletePLMBRSubscription = exports.onUpdatePLMBRSubscription = exports.onCreatePLMBRSubscription = exports.onDeleteSubCategory = exports.onUpdateSubCategory = exports.onCreateSubCategory = exports.onDeleteMainCategory = exports.onUpdateMainCategory = exports.onCreateMainCategory = exports.onDeleteAIChatBot = exports.onUpdateAIChatBot = exports.onCreateAIChatBot = exports.onDeleteAIChatLog = exports.onUpdateAIChatLog = exports.onCreateAIChatLog = exports.onDeleteJobTracking = exports.onUpdateJobTracking = exports.onCreateJobTracking = exports.onDeleteReport = exports.onUpdateReport = exports.onCreateReport = exports.onDeletePromoCode = exports.onUpdatePromoCode = void 0;
exports.onUpdateQualification = exports.onCreateQualification = exports.onDeleteCertification = exports.onUpdateCertification = exports.onCreateCertification = exports.onDeleteProviderReview = exports.onUpdateProviderReview = exports.onCreateProviderReview = exports.onDeleteAvailability = exports.onUpdateAvailability = exports.onCreateAvailability = exports.onDeleteProvider = exports.onUpdateProvider = exports.onCreateProvider = exports.onDeleteService = exports.onUpdateService = exports.onCreateService = exports.onDeleteJob = exports.onUpdateJob = exports.onCreateJob = exports.onDeleteMessage = exports.onUpdateMessage = exports.onCreateMessage = exports.onDeleteLocation = exports.onUpdateLocation = exports.onCreateLocation = exports.onDeleteTeamMember = exports.onUpdateTeamMember = exports.onCreateTeamMember = exports.onDeleteBooking = exports.onUpdateBooking = exports.onCreateBooking = exports.onDeleteMessageContent = exports.onUpdateMessageContent = exports.onCreateMessageContent = exports.onDeleteMessageThread = exports.onUpdateMessageThread = exports.onCreateMessageThread = exports.onDeleteReviewResponse = exports.onUpdateReviewResponse = exports.onCreateReviewResponse = exports.onDeleteReview = exports.onUpdateReview = exports.onCreateReview = exports.onDeleteTransaction = exports.onUpdateTransaction = exports.onCreateTransaction = exports.onDeleteWallet = exports.onUpdateWallet = exports.onCreateWallet = void 0;
exports.onDeleteUser = exports.onUpdateUser = exports.onCreateUser = exports.onDeleteProviderHistory = exports.onUpdateProviderHistory = exports.onCreateProviderHistory = exports.onDeleteSpecialization = exports.onUpdateSpecialization = exports.onCreateSpecialization = exports.onDeleteQualification = void 0;
exports.onCreateProviderSchedule = `subscription OnCreateProviderSchedule(
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
`;
exports.onUpdateProviderSchedule = `subscription OnUpdateProviderSchedule(
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
`;
exports.onDeleteProviderSchedule = `subscription OnDeleteProviderSchedule(
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
`;
exports.onCreateServicePromotion = `subscription OnCreateServicePromotion(
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
`;
exports.onUpdateServicePromotion = `subscription OnUpdateServicePromotion(
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
`;
exports.onDeleteServicePromotion = `subscription OnDeleteServicePromotion(
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
`;
exports.onCreateProviderReport = `subscription OnCreateProviderReport(
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
`;
exports.onUpdateProviderReport = `subscription OnUpdateProviderReport(
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
`;
exports.onDeleteProviderReport = `subscription OnDeleteProviderReport(
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
`;
exports.onCreateUserReport = `subscription OnCreateUserReport(
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
`;
exports.onUpdateUserReport = `subscription OnUpdateUserReport(
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
`;
exports.onDeleteUserReport = `subscription OnDeleteUserReport(
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
`;
exports.onCreateUserInvoice = `subscription OnCreateUserInvoice(
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
`;
exports.onUpdateUserInvoice = `subscription OnUpdateUserInvoice(
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
`;
exports.onDeleteUserInvoice = `subscription OnDeleteUserInvoice(
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
`;
exports.onCreateProviderBookmark = `subscription OnCreateProviderBookmark(
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
`;
exports.onUpdateProviderBookmark = `subscription OnUpdateProviderBookmark(
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
`;
exports.onDeleteProviderBookmark = `subscription OnDeleteProviderBookmark(
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
`;
exports.onCreateUserBookmark = `subscription OnCreateUserBookmark(
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
`;
exports.onUpdateUserBookmark = `subscription OnUpdateUserBookmark(
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
`;
exports.onDeleteUserBookmark = `subscription OnDeleteUserBookmark(
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
`;
exports.onCreateProviderNotification = `subscription OnCreateProviderNotification(
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
`;
exports.onUpdateProviderNotification = `subscription OnUpdateProviderNotification(
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
`;
exports.onDeleteProviderNotification = `subscription OnDeleteProviderNotification(
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
`;
exports.onCreateUserNotification = `subscription OnCreateUserNotification(
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
`;
exports.onUpdateUserNotification = `subscription OnUpdateUserNotification(
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
`;
exports.onDeleteUserNotification = `subscription OnDeleteUserNotification(
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
`;
exports.onCreateServiceDiscount = `subscription OnCreateServiceDiscount(
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
`;
exports.onUpdateServiceDiscount = `subscription OnUpdateServiceDiscount(
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
`;
exports.onDeleteServiceDiscount = `subscription OnDeleteServiceDiscount(
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
`;
exports.onCreateProviderAvailability = `subscription OnCreateProviderAvailability(
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
`;
exports.onUpdateProviderAvailability = `subscription OnUpdateProviderAvailability(
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
`;
exports.onDeleteProviderAvailability = `subscription OnDeleteProviderAvailability(
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
`;
exports.onCreateUserPreference = `subscription OnCreateUserPreference(
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
`;
exports.onUpdateUserPreference = `subscription OnUpdateUserPreference(
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
`;
exports.onDeleteUserPreference = `subscription OnDeleteUserPreference(
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
`;
exports.onCreateProviderCertification = `subscription OnCreateProviderCertification(
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
`;
exports.onUpdateProviderCertification = `subscription OnUpdateProviderCertification(
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
`;
exports.onDeleteProviderCertification = `subscription OnDeleteProviderCertification(
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
`;
exports.onCreateServiceVideo = `subscription OnCreateServiceVideo(
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
`;
exports.onUpdateServiceVideo = `subscription OnUpdateServiceVideo(
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
`;
exports.onDeleteServiceVideo = `subscription OnDeleteServiceVideo(
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
`;
exports.onCreateServiceImage = `subscription OnCreateServiceImage(
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
`;
exports.onUpdateServiceImage = `subscription OnUpdateServiceImage(
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
`;
exports.onDeleteServiceImage = `subscription OnDeleteServiceImage(
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
`;
exports.onCreateServiceReview = `subscription OnCreateServiceReview(
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
`;
exports.onUpdateServiceReview = `subscription OnUpdateServiceReview(
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
`;
exports.onDeleteServiceReview = `subscription OnDeleteServiceReview(
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
`;
exports.onCreateAIDiagnostics = `subscription OnCreateAIDiagnostics(
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
`;
exports.onUpdateAIDiagnostics = `subscription OnUpdateAIDiagnostics(
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
`;
exports.onDeleteAIDiagnostics = `subscription OnDeleteAIDiagnostics(
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
`;
exports.onCreateCustomization = `subscription OnCreateCustomization(
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
`;
exports.onUpdateCustomization = `subscription OnUpdateCustomization(
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
`;
exports.onDeleteCustomization = `subscription OnDeleteCustomization(
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
`;
exports.onCreateExpense = `subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
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
`;
exports.onUpdateExpense = `subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
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
`;
exports.onDeleteExpense = `subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
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
`;
exports.onCreateFavoriteProvider = `subscription OnCreateFavoriteProvider(
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
`;
exports.onUpdateFavoriteProvider = `subscription OnUpdateFavoriteProvider(
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
`;
exports.onDeleteFavoriteProvider = `subscription OnDeleteFavoriteProvider(
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
`;
exports.onCreateUserHistory = `subscription OnCreateUserHistory(
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
`;
exports.onUpdateUserHistory = `subscription OnUpdateUserHistory(
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
`;
exports.onDeleteUserHistory = `subscription OnDeleteUserHistory(
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
`;
exports.onCreateProviderAward = `subscription OnCreateProviderAward(
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
`;
exports.onUpdateProviderAward = `subscription OnUpdateProviderAward(
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
`;
exports.onDeleteProviderAward = `subscription OnDeleteProviderAward(
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
`;
exports.onCreateReferral = `subscription OnCreateReferral($filter: ModelSubscriptionReferralFilterInput) {
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
`;
exports.onUpdateReferral = `subscription OnUpdateReferral($filter: ModelSubscriptionReferralFilterInput) {
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
`;
exports.onDeleteReferral = `subscription OnDeleteReferral($filter: ModelSubscriptionReferralFilterInput) {
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
`;
exports.onCreateTip = `subscription OnCreateTip($filter: ModelSubscriptionTipFilterInput) {
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
`;
exports.onUpdateTip = `subscription OnUpdateTip($filter: ModelSubscriptionTipFilterInput) {
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
`;
exports.onDeleteTip = `subscription OnDeleteTip($filter: ModelSubscriptionTipFilterInput) {
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
`;
exports.onCreatePaymentMethod = `subscription OnCreatePaymentMethod(
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
`;
exports.onUpdatePaymentMethod = `subscription OnUpdatePaymentMethod(
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
`;
exports.onDeletePaymentMethod = `subscription OnDeletePaymentMethod(
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
`;
exports.onCreateInvoice = `subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
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
`;
exports.onUpdateInvoice = `subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
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
`;
exports.onDeleteInvoice = `subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
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
`;
exports.onCreateContract = `subscription OnCreateContract($filter: ModelSubscriptionContractFilterInput) {
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
`;
exports.onUpdateContract = `subscription OnUpdateContract($filter: ModelSubscriptionContractFilterInput) {
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
`;
exports.onDeleteContract = `subscription OnDeleteContract($filter: ModelSubscriptionContractFilterInput) {
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
`;
exports.onCreateNicheService = `subscription OnCreateNicheService(
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
`;
exports.onUpdateNicheService = `subscription OnUpdateNicheService(
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
`;
exports.onDeleteNicheService = `subscription OnDeleteNicheService(
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
`;
exports.onCreateServicePackage = `subscription OnCreateServicePackage(
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
`;
exports.onUpdateServicePackage = `subscription OnUpdateServicePackage(
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
`;
exports.onDeleteServicePackage = `subscription OnDeleteServicePackage(
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
`;
exports.onCreateReward = `subscription OnCreateReward($filter: ModelSubscriptionRewardFilterInput) {
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
`;
exports.onUpdateReward = `subscription OnUpdateReward($filter: ModelSubscriptionRewardFilterInput) {
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
`;
exports.onDeleteReward = `subscription OnDeleteReward($filter: ModelSubscriptionRewardFilterInput) {
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
`;
exports.onCreateLoyaltyProgram = `subscription OnCreateLoyaltyProgram(
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
`;
exports.onUpdateLoyaltyProgram = `subscription OnUpdateLoyaltyProgram(
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
`;
exports.onDeleteLoyaltyProgram = `subscription OnDeleteLoyaltyProgram(
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
`;
exports.onCreateVerification = `subscription OnCreateVerification(
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
`;
exports.onUpdateVerification = `subscription OnUpdateVerification(
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
`;
exports.onDeleteVerification = `subscription OnDeleteVerification(
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
`;
exports.onCreateAnalytics = `subscription OnCreateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
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
`;
exports.onUpdateAnalytics = `subscription OnUpdateAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
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
`;
exports.onDeleteAnalytics = `subscription OnDeleteAnalytics($filter: ModelSubscriptionAnalyticsFilterInput) {
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
`;
exports.onCreatePromoCode = `subscription OnCreatePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
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
`;
exports.onUpdatePromoCode = `subscription OnUpdatePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
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
`;
exports.onDeletePromoCode = `subscription OnDeletePromoCode($filter: ModelSubscriptionPromoCodeFilterInput) {
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
`;
exports.onCreateReport = `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
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
`;
exports.onUpdateReport = `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
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
`;
exports.onDeleteReport = `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
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
`;
exports.onCreateJobTracking = `subscription OnCreateJobTracking(
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
`;
exports.onUpdateJobTracking = `subscription OnUpdateJobTracking(
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
`;
exports.onDeleteJobTracking = `subscription OnDeleteJobTracking(
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
`;
exports.onCreateAIChatLog = `subscription OnCreateAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
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
`;
exports.onUpdateAIChatLog = `subscription OnUpdateAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
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
`;
exports.onDeleteAIChatLog = `subscription OnDeleteAIChatLog($filter: ModelSubscriptionAIChatLogFilterInput) {
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
`;
exports.onCreateAIChatBot = `subscription OnCreateAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
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
`;
exports.onUpdateAIChatBot = `subscription OnUpdateAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
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
`;
exports.onDeleteAIChatBot = `subscription OnDeleteAIChatBot($filter: ModelSubscriptionAIChatBotFilterInput) {
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
`;
exports.onCreateMainCategory = `subscription OnCreateMainCategory(
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
`;
exports.onUpdateMainCategory = `subscription OnUpdateMainCategory(
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
`;
exports.onDeleteMainCategory = `subscription OnDeleteMainCategory(
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
`;
exports.onCreateSubCategory = `subscription OnCreateSubCategory(
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
`;
exports.onUpdateSubCategory = `subscription OnUpdateSubCategory(
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
`;
exports.onDeleteSubCategory = `subscription OnDeleteSubCategory(
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
`;
exports.onCreatePLMBRSubscription = `subscription OnCreatePLMBRSubscription(
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
`;
exports.onUpdatePLMBRSubscription = `subscription OnUpdatePLMBRSubscription(
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
`;
exports.onDeletePLMBRSubscription = `subscription OnDeletePLMBRSubscription(
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
`;
exports.onCreateUserSettings = `subscription OnCreateUserSettings(
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
`;
exports.onUpdateUserSettings = `subscription OnUpdateUserSettings(
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
`;
exports.onDeleteUserSettings = `subscription OnDeleteUserSettings(
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
`;
exports.onCreateProviderSettings = `subscription OnCreateProviderSettings(
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
`;
exports.onUpdateProviderSettings = `subscription OnUpdateProviderSettings(
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
`;
exports.onDeleteProviderSettings = `subscription OnDeleteProviderSettings(
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
`;
exports.onCreatePortfolio = `subscription OnCreatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
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
`;
exports.onUpdatePortfolio = `subscription OnUpdatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
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
`;
exports.onDeletePortfolio = `subscription OnDeletePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
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
`;
exports.onCreateServiceVariant = `subscription OnCreateServiceVariant(
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
`;
exports.onUpdateServiceVariant = `subscription OnUpdateServiceVariant(
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
`;
exports.onDeleteServiceVariant = `subscription OnDeleteServiceVariant(
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
`;
exports.onCreateServiceHighlight = `subscription OnCreateServiceHighlight(
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
`;
exports.onUpdateServiceHighlight = `subscription OnUpdateServiceHighlight(
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
`;
exports.onDeleteServiceHighlight = `subscription OnDeleteServiceHighlight(
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
`;
exports.onCreateServiceTag = `subscription OnCreateServiceTag(
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
`;
exports.onUpdateServiceTag = `subscription OnUpdateServiceTag(
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
`;
exports.onDeleteServiceTag = `subscription OnDeleteServiceTag(
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
`;
exports.onCreateServiceFAQ = `subscription OnCreateServiceFAQ(
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
`;
exports.onUpdateServiceFAQ = `subscription OnUpdateServiceFAQ(
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
`;
exports.onDeleteServiceFAQ = `subscription OnDeleteServiceFAQ(
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
`;
exports.onCreateFeedback = `subscription OnCreateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
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
`;
exports.onUpdateFeedback = `subscription OnUpdateFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
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
`;
exports.onDeleteFeedback = `subscription OnDeleteFeedback($filter: ModelSubscriptionFeedbackFilterInput) {
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
`;
exports.onCreateEquipment = `subscription OnCreateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
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
`;
exports.onUpdateEquipment = `subscription OnUpdateEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
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
`;
exports.onDeleteEquipment = `subscription OnDeleteEquipment($filter: ModelSubscriptionEquipmentFilterInput) {
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
`;
exports.onCreateWallet = `subscription OnCreateWallet($filter: ModelSubscriptionWalletFilterInput) {
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
`;
exports.onUpdateWallet = `subscription OnUpdateWallet($filter: ModelSubscriptionWalletFilterInput) {
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
`;
exports.onDeleteWallet = `subscription OnDeleteWallet($filter: ModelSubscriptionWalletFilterInput) {
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
`;
exports.onCreateTransaction = `subscription OnCreateTransaction(
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
`;
exports.onUpdateTransaction = `subscription OnUpdateTransaction(
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
`;
exports.onDeleteTransaction = `subscription OnDeleteTransaction(
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
`;
exports.onCreateReview = `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
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
`;
exports.onUpdateReview = `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
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
`;
exports.onDeleteReview = `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
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
`;
exports.onCreateReviewResponse = `subscription OnCreateReviewResponse(
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
`;
exports.onUpdateReviewResponse = `subscription OnUpdateReviewResponse(
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
`;
exports.onDeleteReviewResponse = `subscription OnDeleteReviewResponse(
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
`;
exports.onCreateMessageThread = `subscription OnCreateMessageThread(
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
`;
exports.onUpdateMessageThread = `subscription OnUpdateMessageThread(
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
`;
exports.onDeleteMessageThread = `subscription OnDeleteMessageThread(
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
`;
exports.onCreateMessageContent = `subscription OnCreateMessageContent(
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
`;
exports.onUpdateMessageContent = `subscription OnUpdateMessageContent(
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
`;
exports.onDeleteMessageContent = `subscription OnDeleteMessageContent(
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
`;
exports.onCreateBooking = `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
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
`;
exports.onUpdateBooking = `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
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
`;
exports.onDeleteBooking = `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
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
`;
exports.onCreateTeamMember = `subscription OnCreateTeamMember(
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
`;
exports.onUpdateTeamMember = `subscription OnUpdateTeamMember(
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
`;
exports.onDeleteTeamMember = `subscription OnDeleteTeamMember(
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
`;
exports.onCreateLocation = `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
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
`;
exports.onUpdateLocation = `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
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
`;
exports.onDeleteLocation = `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
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
`;
exports.onCreateMessage = `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
exports.onUpdateMessage = `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
exports.onDeleteMessage = `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
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
`;
exports.onCreateJob = `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
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
`;
exports.onUpdateJob = `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
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
`;
exports.onDeleteJob = `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
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
`;
exports.onCreateService = `subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
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
`;
exports.onUpdateService = `subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
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
`;
exports.onDeleteService = `subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
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
`;
exports.onCreateProvider = `subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
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
`;
exports.onUpdateProvider = `subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
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
`;
exports.onDeleteProvider = `subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
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
`;
exports.onCreateAvailability = `subscription OnCreateAvailability(
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
`;
exports.onUpdateAvailability = `subscription OnUpdateAvailability(
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
`;
exports.onDeleteAvailability = `subscription OnDeleteAvailability(
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
`;
exports.onCreateProviderReview = `subscription OnCreateProviderReview(
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
`;
exports.onUpdateProviderReview = `subscription OnUpdateProviderReview(
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
`;
exports.onDeleteProviderReview = `subscription OnDeleteProviderReview(
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
`;
exports.onCreateCertification = `subscription OnCreateCertification(
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
`;
exports.onUpdateCertification = `subscription OnUpdateCertification(
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
`;
exports.onDeleteCertification = `subscription OnDeleteCertification(
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
`;
exports.onCreateQualification = `subscription OnCreateQualification(
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
`;
exports.onUpdateQualification = `subscription OnUpdateQualification(
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
`;
exports.onDeleteQualification = `subscription OnDeleteQualification(
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
`;
exports.onCreateSpecialization = `subscription OnCreateSpecialization(
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
`;
exports.onUpdateSpecialization = `subscription OnUpdateSpecialization(
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
`;
exports.onDeleteSpecialization = `subscription OnDeleteSpecialization(
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
`;
exports.onCreateProviderHistory = `subscription OnCreateProviderHistory(
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
`;
exports.onUpdateProviderHistory = `subscription OnUpdateProviderHistory(
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
`;
exports.onDeleteProviderHistory = `subscription OnDeleteProviderHistory(
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
`;
exports.onCreateUser = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
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
`;
exports.onUpdateUser = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
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
`;
exports.onDeleteUser = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
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
`;
