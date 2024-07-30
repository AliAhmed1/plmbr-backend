const { PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const dynamoDB = require('../config/dbConfig');
import { User } from '../src/API';
import { userSchema, locationSchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';

const TABLE_NAME = 'Users';

const UserService = {
  createUser: async (userData: Partial<User>) => {
    const extendedUserData = processSchemaAndData(userSchema, userData, "User");

    const validationResult = userSchema.safeParse(extendedUserData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`User data is invalid: ${errors}`);
    }

    const user: User = validationResult.data;

    const params = {
      TableName: TABLE_NAME,
      Item: user,
    };

    await dynamoDB.send(new PutCommand(params));
    return user;
  },

  getUserById: async (userId: string) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: userId,
      },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('User not found');
    }
    return result.Item as User;
  },

  getAllUsers: async () => {
    const params = {
      TableName: TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items as User[];
  },

  updateUser: async (userId: string, updateData: Partial<User>) => {
    const extendedUpdateData = processSchemaAndData(userSchema, updateData, "User");

    const validationResult = userSchema.safeParse(extendedUpdateData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`User update data is invalid: ${errors}`);
    }

    const filteredUpdateData = Object.entries(validationResult.data)
      .filter(([key]) => !['id', 'createdAt', 'updatedAt', 'lastLogin'].includes(key))
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {} as Record<string, any>);

    const updateExpression: string[] = [];
    const expressionAttributeNames: Record<string, string> = {};
    const expressionAttributeValues: Record<string, any> = {};

    for (const [key, value] of Object.entries(filteredUpdateData)) {
      updateExpression.push(`#${key} = :${key}`);
      expressionAttributeNames[`#${key}`] = key;
      expressionAttributeValues[`:${key}`] = value;
    }

    const params = {
      TableName: TABLE_NAME,
      Key: { id: userId },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes as User;
  },

  deleteUser: async (userId: string) => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: userId,
      },
    };

    const result = await dynamoDB.send(new DeleteCommand(params));
    return result.Attributes as User;
  },

  updateUserLocation: async (userId: string, locationData: any) => {
    const locationValidationResult = locationSchema.safeParse(locationData);

    if (!locationValidationResult.success) {
      const errors = locationValidationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Location data is invalid: ${errors}`);
    }

    const existingUser = await UserService.getUserById(userId);

    const updatedUserData = {
      ...existingUser,
      currentLocation: locationValidationResult.data,
      updatedAt: new Date().toISOString(),
    };

    const userValidationResult = userSchema.safeParse(updatedUserData);

    if (!userValidationResult.success) {
      const errors = userValidationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`Updated user data is invalid: ${errors}`);
    }

    const params = {
      TableName: TABLE_NAME,
      Key: { id: userId },
      UpdateExpression: 'SET currentLocation = :currentLocation, updatedAt = :updatedAt',
      ExpressionAttributeValues: {
        ':currentLocation': locationValidationResult.data,
        ':updatedAt': updatedUserData.updatedAt,
      },
      ReturnValues: 'ALL_NEW',
    };

    const result = await dynamoDB.send(new UpdateCommand(params));
    return result.Attributes as User;
  },
};

export = UserService;
