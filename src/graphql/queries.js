"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAIDiagnostics = exports.getAIDiagnostics = exports.syncServiceReviews = exports.listServiceReviews = exports.getServiceReview = exports.syncServiceImages = exports.listServiceImages = exports.getServiceImage = exports.syncServiceVideos = exports.listServiceVideos = exports.getServiceVideo = exports.syncProviderCertifications = exports.listProviderCertifications = exports.getProviderCertification = exports.syncUserPreferences = exports.listUserPreferences = exports.getUserPreference = exports.syncProviderAvailabilities = exports.listProviderAvailabilities = exports.getProviderAvailability = exports.syncServiceDiscounts = exports.listServiceDiscounts = exports.getServiceDiscount = exports.syncUserNotifications = exports.listUserNotifications = exports.getUserNotification = exports.syncProviderNotifications = exports.listProviderNotifications = exports.getProviderNotification = exports.syncUserBookmarks = exports.listUserBookmarks = exports.getUserBookmark = exports.syncProviderBookmarks = exports.listProviderBookmarks = exports.getProviderBookmark = exports.syncUserInvoices = exports.listUserInvoices = exports.getUserInvoice = exports.syncUserReports = exports.listUserReports = exports.getUserReport = exports.syncProviderReports = exports.listProviderReports = exports.getProviderReport = exports.syncServicePromotions = exports.listServicePromotions = exports.getServicePromotion = exports.syncTasks = exports.listTasks = exports.getTasks = void 0;
exports.getPromoCode = exports.syncAnalytics = exports.listAnalytics = exports.getAnalytics = exports.syncVerifications = exports.listVerifications = exports.getVerification = exports.syncLoyaltyPrograms = exports.listLoyaltyPrograms = exports.getLoyaltyProgram = exports.syncRewards = exports.listRewards = exports.getReward = exports.syncServicePackages = exports.listServicePackages = exports.getServicePackage = exports.syncNicheServices = exports.listNicheServices = exports.getNicheService = exports.syncContracts = exports.listContracts = exports.getContract = exports.syncInvoices = exports.listInvoices = exports.getInvoice = exports.syncPaymentMethods = exports.listPaymentMethods = exports.getPaymentMethod = exports.syncTips = exports.listTips = exports.getTip = exports.syncReferrals = exports.listReferrals = exports.getReferral = exports.syncProviderAwards = exports.listProviderAwards = exports.getProviderAward = exports.syncUserHistories = exports.listUserHistories = exports.getUserHistory = exports.syncFavoriteProviders = exports.listFavoriteProviders = exports.getFavoriteProvider = exports.syncExpenses = exports.listExpenses = exports.getExpense = exports.syncCustomizations = exports.listCustomizations = exports.getCustomization = exports.syncAIDiagnostics = void 0;
exports.syncEquipment = exports.listEquipment = exports.getEquipment = exports.syncFeedbacks = exports.listFeedbacks = exports.getFeedback = exports.syncServiceFAQS = exports.listServiceFAQS = exports.getServiceFAQ = exports.syncServiceTags = exports.listServiceTags = exports.getServiceTag = exports.syncServiceHighlights = exports.listServiceHighlights = exports.getServiceHighlight = exports.syncServiceVariants = exports.listServiceVariants = exports.getServiceVariant = exports.syncPortfolios = exports.listPortfolios = exports.getPortfolio = exports.syncProviderSettings = exports.listProviderSettings = exports.getProviderSettings = exports.syncUserSettings = exports.listUserSettings = exports.getUserSettings = exports.syncPLMBRSubscriptions = exports.listPLMBRSubscriptions = exports.getPLMBRSubscription = exports.syncSubCategories = exports.listSubCategories = exports.getSubCategory = exports.syncMainCategories = exports.listMainCategories = exports.getMainCategory = exports.syncAIChatBots = exports.listAIChatBots = exports.getAIChatBot = exports.syncAIChatLogs = exports.listAIChatLogs = exports.getAIChatLog = exports.syncJobTrackings = exports.listJobTrackings = exports.getJobTracking = exports.syncReports = exports.listReports = exports.getReport = exports.syncPromoCodes = exports.listPromoCodes = void 0;
exports.listQualifications = exports.getQualification = exports.syncCertifications = exports.listCertifications = exports.getCertification = exports.syncProviderReviews = exports.listProviderReviews = exports.getProviderReview = exports.syncAvailabilities = exports.listAvailabilities = exports.getAvailability = exports.syncProviders = exports.listProviders = exports.getProvider = exports.syncServices = exports.listServices = exports.getService = exports.syncJobs = exports.listJobs = exports.getJob = exports.syncMessages = exports.listMessages = exports.getMessage = exports.syncLocations = exports.listLocations = exports.getLocation = exports.syncTeamMembers = exports.listTeamMembers = exports.getTeamMember = exports.syncBookings = exports.listBookings = exports.getBooking = exports.syncMessageContents = exports.listMessageContents = exports.getMessageContent = exports.syncMessageThreads = exports.listMessageThreads = exports.getMessageThread = exports.syncReviewResponses = exports.listReviewResponses = exports.getReviewResponse = exports.syncReviews = exports.listReviews = exports.getReview = exports.syncTransactions = exports.listTransactions = exports.getTransaction = exports.syncWallets = exports.listWallets = exports.getWallet = void 0;
exports.syncUsers = exports.listUsers = exports.getUser = exports.syncProviderHistories = exports.listProviderHistories = exports.getProviderHistory = exports.syncSpecializations = exports.listSpecializations = exports.getSpecialization = exports.syncQualifications = void 0;
exports.getTasks = `query GetTasks($id: ID!) {
  getTasks(id: $id) {
    id
    taskName
    taskTime
    Service {
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
      serviceTasksId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    tasksServiceId
    __typename
  }
}
`;
exports.listTasks = `query ListTasks(
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      taskName
      taskTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tasksServiceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.syncTasks = `query SyncTasks(
  $filter: ModelTasksFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTasks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      taskName
      taskTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tasksServiceId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.getServicePromotion = `query GetServicePromotion($id: ID!) {
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
      serviceTasksId
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
exports.listServicePromotions = `query ListServicePromotions(
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
`;
exports.syncServicePromotions = `query SyncServicePromotions(
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
`;
exports.getProviderReport = `query GetProviderReport($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listProviderReports = `query ListProviderReports(
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
`;
exports.syncProviderReports = `query SyncProviderReports(
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
`;
exports.getUserReport = `query GetUserReport($id: ID!) {
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
      isEmailVerified
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
exports.listUserReports = `query ListUserReports(
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
`;
exports.syncUserReports = `query SyncUserReports(
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
`;
exports.getUserInvoice = `query GetUserInvoice($id: ID!) {
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
      isEmailVerified
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
exports.listUserInvoices = `query ListUserInvoices(
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
`;
exports.syncUserInvoices = `query SyncUserInvoices(
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
`;
exports.getProviderBookmark = `query GetProviderBookmark($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      isEmailVerified
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
exports.listProviderBookmarks = `query ListProviderBookmarks(
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
`;
exports.syncProviderBookmarks = `query SyncProviderBookmarks(
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
`;
exports.getUserBookmark = `query GetUserBookmark($id: ID!) {
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
      isEmailVerified
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
      serviceTasksId
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
exports.listUserBookmarks = `query ListUserBookmarks(
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
`;
exports.syncUserBookmarks = `query SyncUserBookmarks(
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
`;
exports.getProviderNotification = `query GetProviderNotification($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listProviderNotifications = `query ListProviderNotifications(
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
`;
exports.syncProviderNotifications = `query SyncProviderNotifications(
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
`;
exports.getUserNotification = `query GetUserNotification($id: ID!) {
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
      isEmailVerified
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
exports.listUserNotifications = `query ListUserNotifications(
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
`;
exports.syncUserNotifications = `query SyncUserNotifications(
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
`;
exports.getServiceDiscount = `query GetServiceDiscount($id: ID!) {
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
      serviceTasksId
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
exports.listServiceDiscounts = `query ListServiceDiscounts(
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
`;
exports.syncServiceDiscounts = `query SyncServiceDiscounts(
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
`;
exports.getProviderAvailability = `query GetProviderAvailability($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
`;
exports.listProviderAvailabilities = `query ListProviderAvailabilities(
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
`;
exports.syncProviderAvailabilities = `query SyncProviderAvailabilities(
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
`;
exports.getUserPreference = `query GetUserPreference($id: ID!) {
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
      isEmailVerified
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
exports.listUserPreferences = `query ListUserPreferences(
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
`;
exports.syncUserPreferences = `query SyncUserPreferences(
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
`;
exports.getProviderCertification = `query GetProviderCertification($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listProviderCertifications = `query ListProviderCertifications(
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
`;
exports.syncProviderCertifications = `query SyncProviderCertifications(
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
`;
exports.getServiceVideo = `query GetServiceVideo($id: ID!) {
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
      serviceTasksId
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
exports.listServiceVideos = `query ListServiceVideos(
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
`;
exports.syncServiceVideos = `query SyncServiceVideos(
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
`;
exports.getServiceImage = `query GetServiceImage($id: ID!) {
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
      serviceTasksId
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
exports.listServiceImages = `query ListServiceImages(
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
`;
exports.syncServiceImages = `query SyncServiceImages(
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
`;
exports.getServiceReview = `query GetServiceReview($id: ID!) {
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
      serviceTasksId
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
      isEmailVerified
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
exports.listServiceReviews = `query ListServiceReviews(
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
`;
exports.syncServiceReviews = `query SyncServiceReviews(
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
`;
exports.getAIDiagnostics = `query GetAIDiagnostics($id: ID!) {
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
`;
exports.listAIDiagnostics = `query ListAIDiagnostics(
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
`;
exports.syncAIDiagnostics = `query SyncAIDiagnostics(
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
`;
exports.getCustomization = `query GetCustomization($id: ID!) {
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
      isEmailVerified
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
exports.listCustomizations = `query ListCustomizations(
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
`;
exports.syncCustomizations = `query SyncCustomizations(
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
`;
exports.getExpense = `query GetExpense($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listExpenses = `query ListExpenses(
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
`;
exports.syncExpenses = `query SyncExpenses(
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
`;
exports.getFavoriteProvider = `query GetFavoriteProvider($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listFavoriteProviders = `query ListFavoriteProviders(
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
`;
exports.syncFavoriteProviders = `query SyncFavoriteProviders(
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
`;
exports.getUserHistory = `query GetUserHistory($id: ID!) {
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
      isEmailVerified
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
exports.listUserHistories = `query ListUserHistories(
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
`;
exports.syncUserHistories = `query SyncUserHistories(
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
`;
exports.getProviderAward = `query GetProviderAward($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listProviderAwards = `query ListProviderAwards(
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
`;
exports.syncProviderAwards = `query SyncProviderAwards(
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
`;
exports.getReferral = `query GetReferral($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
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
exports.listReferrals = `query ListReferrals(
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
`;
exports.syncReferrals = `query SyncReferrals(
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
`;
exports.getTip = `query GetTip($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listTips = `query ListTips($filter: ModelTipFilterInput, $limit: Int, $nextToken: String) {
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
`;
exports.syncTips = `query SyncTips(
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
`;
exports.getPaymentMethod = `query GetPaymentMethod($id: ID!) {
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
      isEmailVerified
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
    stripeCustomerId
    stripeCardId
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
exports.listPaymentMethods = `query ListPaymentMethods(
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
      stripeCustomerId
      stripeCardId
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
`;
exports.syncPaymentMethods = `query SyncPaymentMethods(
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
      stripeCustomerId
      stripeCardId
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
`;
exports.getInvoice = `query GetInvoice($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listInvoices = `query ListInvoices(
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
`;
exports.syncInvoices = `query SyncInvoices(
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
`;
exports.getContract = `query GetContract($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      serviceTasksId
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
exports.listContracts = `query ListContracts(
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
`;
exports.syncContracts = `query SyncContracts(
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
`;
exports.getNicheService = `query GetNicheService($id: ID!) {
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
`;
exports.listNicheServices = `query ListNicheServices(
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
`;
exports.syncNicheServices = `query SyncNicheServices(
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
`;
exports.getServicePackage = `query GetServicePackage($id: ID!) {
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
`;
exports.listServicePackages = `query ListServicePackages(
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
`;
exports.syncServicePackages = `query SyncServicePackages(
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
`;
exports.getReward = `query GetReward($id: ID!) {
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
`;
exports.listRewards = `query ListRewards(
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
`;
exports.syncRewards = `query SyncRewards(
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
`;
exports.getLoyaltyProgram = `query GetLoyaltyProgram($id: ID!) {
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
      isEmailVerified
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
exports.listLoyaltyPrograms = `query ListLoyaltyPrograms(
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
`;
exports.syncLoyaltyPrograms = `query SyncLoyaltyPrograms(
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
`;
exports.getVerification = `query GetVerification($id: ID!) {
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
      isEmailVerified
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
exports.listVerifications = `query ListVerifications(
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
`;
exports.syncVerifications = `query SyncVerifications(
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
`;
exports.getAnalytics = `query GetAnalytics($id: ID!) {
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
`;
exports.listAnalytics = `query ListAnalytics(
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
`;
exports.syncAnalytics = `query SyncAnalytics(
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
`;
exports.getPromoCode = `query GetPromoCode($id: ID!) {
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
`;
exports.listPromoCodes = `query ListPromoCodes(
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
`;
exports.syncPromoCodes = `query SyncPromoCodes(
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
`;
exports.getReport = `query GetReport($id: ID!) {
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
      isEmailVerified
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
exports.listReports = `query ListReports(
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
`;
exports.syncReports = `query SyncReports(
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
`;
exports.getJobTracking = `query GetJobTracking($id: ID!) {
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
      isEmailVerified
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      serviceTasksId
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
exports.listJobTrackings = `query ListJobTrackings(
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
`;
exports.syncJobTrackings = `query SyncJobTrackings(
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
`;
exports.getAIChatLog = `query GetAIChatLog($id: ID!) {
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
      isEmailVerified
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
exports.listAIChatLogs = `query ListAIChatLogs(
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
`;
exports.syncAIChatLogs = `query SyncAIChatLogs(
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
`;
exports.getAIChatBot = `query GetAIChatBot($id: ID!) {
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
`;
exports.listAIChatBots = `query ListAIChatBots(
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
`;
exports.syncAIChatBots = `query SyncAIChatBots(
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
`;
exports.getMainCategory = `query GetMainCategory($id: ID!) {
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
`;
exports.listMainCategories = `query ListMainCategories(
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
`;
exports.syncMainCategories = `query SyncMainCategories(
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
`;
exports.getSubCategory = `query GetSubCategory($id: ID!) {
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
`;
exports.listSubCategories = `query ListSubCategories(
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
`;
exports.syncSubCategories = `query SyncSubCategories(
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
`;
exports.getPLMBRSubscription = `query GetPLMBRSubscription($id: ID!) {
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
`;
exports.listPLMBRSubscriptions = `query ListPLMBRSubscriptions(
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
`;
exports.syncPLMBRSubscriptions = `query SyncPLMBRSubscriptions(
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
`;
exports.getUserSettings = `query GetUserSettings($id: ID!) {
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
`;
exports.listUserSettings = `query ListUserSettings(
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
`;
exports.syncUserSettings = `query SyncUserSettings(
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
`;
exports.getProviderSettings = `query GetProviderSettings($id: ID!) {
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
`;
exports.listProviderSettings = `query ListProviderSettings(
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
`;
exports.syncProviderSettings = `query SyncProviderSettings(
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
`;
exports.getPortfolio = `query GetPortfolio($id: ID!) {
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
`;
exports.listPortfolios = `query ListPortfolios(
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
`;
exports.syncPortfolios = `query SyncPortfolios(
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
`;
exports.getServiceVariant = `query GetServiceVariant($id: ID!) {
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
`;
exports.listServiceVariants = `query ListServiceVariants(
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
`;
exports.syncServiceVariants = `query SyncServiceVariants(
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
`;
exports.getServiceHighlight = `query GetServiceHighlight($id: ID!) {
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
`;
exports.listServiceHighlights = `query ListServiceHighlights(
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
`;
exports.syncServiceHighlights = `query SyncServiceHighlights(
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
`;
exports.getServiceTag = `query GetServiceTag($id: ID!) {
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
`;
exports.listServiceTags = `query ListServiceTags(
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
`;
exports.syncServiceTags = `query SyncServiceTags(
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
`;
exports.getServiceFAQ = `query GetServiceFAQ($id: ID!) {
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
`;
exports.listServiceFAQS = `query ListServiceFAQS(
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
`;
exports.syncServiceFAQS = `query SyncServiceFAQS(
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
`;
exports.getFeedback = `query GetFeedback($id: ID!) {
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
`;
exports.listFeedbacks = `query ListFeedbacks(
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
`;
exports.syncFeedbacks = `query SyncFeedbacks(
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
`;
exports.getEquipment = `query GetEquipment($id: ID!) {
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
`;
exports.listEquipment = `query ListEquipment(
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
`;
exports.syncEquipment = `query SyncEquipment(
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
`;
exports.getWallet = `query GetWallet($id: ID!) {
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
`;
exports.listWallets = `query ListWallets(
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
`;
exports.syncWallets = `query SyncWallets(
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
`;
exports.getTransaction = `query GetTransaction($id: ID!) {
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
`;
exports.listTransactions = `query ListTransactions(
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
`;
exports.syncTransactions = `query SyncTransactions(
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
`;
exports.getReview = `query GetReview($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      isEmailVerified
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
      serviceTasksId
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
exports.listReviews = `query ListReviews(
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
`;
exports.syncReviews = `query SyncReviews(
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
`;
exports.getReviewResponse = `query GetReviewResponse($id: ID!) {
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
`;
exports.listReviewResponses = `query ListReviewResponses(
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
`;
exports.syncReviewResponses = `query SyncReviewResponses(
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
`;
exports.getMessageThread = `query GetMessageThread($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      isEmailVerified
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
exports.listMessageThreads = `query ListMessageThreads(
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
`;
exports.syncMessageThreads = `query SyncMessageThreads(
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
`;
exports.getMessageContent = `query GetMessageContent($id: ID!) {
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
`;
exports.listMessageContents = `query ListMessageContents(
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
`;
exports.syncMessageContents = `query SyncMessageContents(
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
`;
exports.getBooking = `query GetBooking($id: ID!) {
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
      serviceTasksId
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
      isEmailVerified
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
exports.listBookings = `query ListBookings(
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
`;
exports.syncBookings = `query SyncBookings(
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
`;
exports.getTeamMember = `query GetTeamMember($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listTeamMembers = `query ListTeamMembers(
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
`;
exports.syncTeamMembers = `query SyncTeamMembers(
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
`;
exports.getLocation = `query GetLocation($id: ID!) {
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
`;
exports.listLocations = `query ListLocations(
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
`;
exports.syncLocations = `query SyncLocations(
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
`;
exports.getMessage = `query GetMessage($id: ID!) {
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
`;
exports.listMessages = `query ListMessages(
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
`;
exports.syncMessages = `query SyncMessages(
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
`;
exports.getJob = `query GetJob($id: ID!) {
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
`;
exports.listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
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
`;
exports.syncJobs = `query SyncJobs(
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
`;
exports.getService = `query GetService($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
    Tasks {
      id
      taskName
      taskTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tasksServiceId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    invoiceServicesId
    servicePackageServicesId
    subCategoryServicesId
    providerServicesOfferedId
    serviceTasksId
    __typename
  }
}
`;
exports.listServices = `query ListServices(
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
      serviceTasksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.syncServices = `query SyncServices(
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
      serviceTasksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.getProvider = `query GetProvider($id: ID!) {
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
    Tasks {
      id
      taskName
      taskTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tasksServiceId
      __typename
    }
    isEmailVerified
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    nicheServiceProvidersId
    providerCurrentLocationId
    providerTasksId
    __typename
  }
}
`;
exports.listProviders = `query ListProviders(
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.syncProviders = `query SyncProviders(
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
`;
exports.getAvailability = `query GetAvailability($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listAvailabilities = `query ListAvailabilities(
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
`;
exports.syncAvailabilities = `query SyncAvailabilities(
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
`;
exports.getProviderReview = `query GetProviderReview($id: ID!) {
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
`;
exports.listProviderReviews = `query ListProviderReviews(
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
`;
exports.syncProviderReviews = `query SyncProviderReviews(
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
`;
exports.getCertification = `query GetCertification($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listCertifications = `query ListCertifications(
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
`;
exports.syncCertifications = `query SyncCertifications(
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
`;
exports.getQualification = `query GetQualification($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listQualifications = `query ListQualifications(
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
`;
exports.syncQualifications = `query SyncQualifications(
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
`;
exports.getSpecialization = `query GetSpecialization($id: ID!) {
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
      isEmailVerified
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      nicheServiceProvidersId
      providerCurrentLocationId
      providerTasksId
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
exports.listSpecializations = `query ListSpecializations(
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
`;
exports.syncSpecializations = `query SyncSpecializations(
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
`;
exports.getProviderHistory = `query GetProviderHistory($id: ID!) {
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
`;
exports.listProviderHistories = `query ListProviderHistories(
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
`;
exports.syncProviderHistories = `query SyncProviderHistories(
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
`;
exports.getUser = `query GetUser($id: ID!) {
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
    isEmailVerified
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
exports.listUsers = `query ListUsers(
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
      isEmailVerified
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
`;
exports.syncUsers = `query SyncUsers(
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
      isEmailVerified
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
`;
