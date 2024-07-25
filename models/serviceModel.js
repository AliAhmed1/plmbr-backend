const { PutCommand, GetCommand, UpdateCommand, QueryCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');

const TABLE_NAME = 'Services';
const AVAILABLE_INDEX = 'AvailableIndex';

const ServiceModel = {
  createService: async (service) => {
    const params = {
      TableName: TABLE_NAME,
      Item: service,
    };
    return dynamoDB.send(new PutCommand(params));
  },

  getServiceById: async (serviceId) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { serviceId },
    };
    return dynamoDB.send(new GetCommand(params));
  },

  getAvailableServices: async () => {
    const params = {
      TableName: TABLE_NAME,
      IndexName: AVAILABLE_INDEX,
      KeyConditionExpression: '#availableStatus = :availableStatus',
      ExpressionAttributeNames: {
        '#availableStatus': 'availableStatus'
      },
      ExpressionAttributeValues: {
        ':availableStatus': 'true'
      }
    };
    return dynamoDB.send(new QueryCommand(params));
  },

  toggleInstantBooking: async (serviceId, instantBooking) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { serviceId },
      UpdateExpression: 'set #instantBooking = :instantBooking',
      ExpressionAttributeNames: {
        '#instantBooking': 'instantBooking',
      },
      ExpressionAttributeValues: {
        ':instantBooking': instantBooking,
      },
      ReturnValues: 'ALL_NEW',
    };
    return dynamoDB.send(new UpdateCommand(params));
  },

  toggleAvailable: async (serviceId, available) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { serviceId },
      UpdateExpression: 'set #available = :available, #availableStatus = :availableStatus',
      ExpressionAttributeNames: {
        '#available': 'available',
        '#availableStatus': 'availableStatus',
      },
      ExpressionAttributeValues: {
        ':available': available,
        ':availableStatus': available ? 'true' : 'false',
      },
      ReturnValues: 'ALL_NEW',
    };
    return dynamoDB.send(new UpdateCommand(params));
  },
  getServicesForInstantBooking: async () => {
    try {
      const params = {
        TableName: TABLE_NAME,
        FilterExpression: 'instantBooking = :instantBooking and available = :available',
        ExpressionAttributeValues: {
          ':instantBooking': true,
          ':available': true
        }
      };
      const result = await dynamoDB.send(new ScanCommand(params));
      console.log('Fetched services for instant booking:', result.Items);
      return result;
    } catch (error) {
      console.error('Error fetching services for instant booking:', error);
      throw error;
    }
  },
};

module.exports = ServiceModel;
