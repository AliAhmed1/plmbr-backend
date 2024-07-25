const { PutCommand, GetCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');

const TABLE_NAME = 'Users';

const UserModel = {
  createUser: async (user) => {
    const params = {
      TableName: TABLE_NAME,
      Item: user,
    };
    return dynamoDB.send(new PutCommand(params));
  },

   getUserById: async (userId) => {
    try {
      const params = {
        TableName: TABLE_NAME,
        Key: { userId },
      };
      return dynamoDB.send(new GetCommand(params));
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  },
  
  updateUser: async (userId, updateData) => {
    const params = {
      TableName: TABLE_NAME,
      Key: { userId },
      UpdateExpression: 'set #instantBooking = :instantBooking, #latitude = :latitude, #longitude = :longitude',
      ExpressionAttributeNames: {
        '#instantBooking': 'instantBooking',
        '#latitude': 'latitude',
        '#longitude': 'longitude',
      },
      ExpressionAttributeValues: {
        ':instantBooking': updateData.instantBooking,
        ':latitude': updateData.latitude,
        ':longitude': updateData.longitude,
      },
      ReturnValues: 'ALL_NEW',
    };
    return dynamoDB.send(new UpdateCommand(params));
  },
};

module.exports = UserModel;
