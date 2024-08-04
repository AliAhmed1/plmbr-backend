import { DynamoDBDocumentClient, GetCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { subCategorySchema } from '../schema/generatedZodSchema'; // adjust the path as needed

const dynamoDB = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;

const SubCategoryService = {
  getBySubCategoryId: async (subCategoryId: string) => {
    const params = {
      TableName: SUB_CATEGORY_TABLE_NAME,
      Key: {
        id: subCategoryId,
      },
    };

    const result = await dynamoDB.send(new GetCommand(params));
    if (!result.Item) {
      throw new Error('SubCategory not found');
    }
    return result.Item;
  },

  getAllSubCategoriesByMainCategoryId: async (mainCategoryId: string) => {
    const params = {
      TableName: SUB_CATEGORY_TABLE_NAME,
      FilterExpression: 'mainCategorySubCategoriesId = :mainCategoryId',
      ExpressionAttributeValues: {
        ':mainCategoryId': mainCategoryId,
      },
    };

    const result = await dynamoDB.send(new ScanCommand(params));
    if (!result.Items) {
      throw new Error('No SubCategories found for the given MainCategory');
    }
    return result.Items;
  },
};

export = SubCategoryService;
