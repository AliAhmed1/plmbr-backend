import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
const dynamoDB = require('../config/dbConfig');

const MAIN_CATEGORY_TABLE_NAME = process.env.TABLE_MAIN_CATEGORY;

const MainCategoryService = {
  getAllMainCategory: async () => {
    const params = {
      TableName: MAIN_CATEGORY_TABLE_NAME,
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    return result.Items;
  },
};

export = MainCategoryService;
