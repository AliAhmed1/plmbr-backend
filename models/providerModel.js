const { PutCommand, GetCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
const { v4: uuidv4 } = require('uuid');

const TABLE_NAME = 'Provider';

const ProviderModel = {
  createProvider: async (provider) => {
    provider.id = `prv${uuidv4().slice(0, 8)}`;
    provider.isActive = provider.isActive || true;
    provider.isVerified = provider.isVerified || false;
    provider.lastLogin = new Date().toISOString();

    const params = {
      TableName: TABLE_NAME,
      Item: provider,
    };
    await dynamoDB.send(new PutCommand(params));
    return provider;
  },

  getProviderById: async (providerId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id: providerId },
    };
    const result = await dynamoDB.send(new GetCommand(params));
    return result.Item;
  },

  updateProvider: async (providerId, updateData) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id: providerId },
      UpdateExpression: 'set #email = :email, #firstName = :firstName, #lastName = :lastName, #dob = :dob, #gender = :gender, #phone = :phone, #address = :address, #city = :city, #state = :state, #country = :country, #zipCode = :zipCode, #profileImage = :profileImage, #isActive = :isActive, #isVerified = :isVerified, #lastLogin = :lastLogin, #accountType = :accountType, #notificationPreference = :notificationPreference, #languagePreference = :languagePreference, #currencyPreference = :currencyPreference, #timezone = :timezone, #chatbotRequests = :chatbotRequests',
      ExpressionAttributeNames: {
        '#email': 'email',
        '#firstName': 'firstName',
        '#lastName': 'lastName',
        '#dob': 'dob',
        '#gender': 'gender',
        '#phone': 'phone',
        '#address': 'address',
        '#city': 'city',
        '#state': 'state',
        '#country': 'country',
        '#zipCode': 'zipCode',
        '#profileImage': 'profileImage',
        '#isActive': 'isActive',
        '#isVerified': 'isVerified',
        '#lastLogin': 'lastLogin',
        '#accountType': 'accountType',
        '#notificationPreference': 'notificationPreference',
        '#languagePreference': 'languagePreference',
        '#currencyPreference': 'currencyPreference',
        '#timezone': 'timezone',
        '#chatbotRequests': 'chatbotRequests'
      },
      ExpressionAttributeValues: {
        ':email': updateData.email,
        ':firstName': updateData.firstName,
        ':lastName': updateData.lastName,
        ':dob': updateData.dob,
        ':gender': updateData.gender,
        ':phone': updateData.phone,
        ':address': updateData.address,
        ':city': updateData.city,
        ':state': updateData.state,
        ':country': updateData.country,
        ':zipCode': updateData.zipCode,
        ':profileImage': updateData.profileImage,
        ':isActive': updateData.isActive,
        ':isVerified': updateData.isVerified,
        ':lastLogin': new Date().toISOString(),
        ':accountType': updateData.accountType,
        ':notificationPreference': updateData.notificationPreference,
        ':languagePreference': updateData.languagePreference,
        ':currencyPreference': updateData.currencyPreference,
        ':timezone': updateData.timezone,
        ':chatbotRequests': updateData.chatbotRequests
      },
      ReturnValues: 'ALL_NEW'
    };
    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes;
  },

  deleteProvider: async (providerId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { id: providerId },
    };
    await dynamoDB.send(new DeleteCommand(params));
    return { id: providerId };
  }
};

module.exports = ProviderModel;
