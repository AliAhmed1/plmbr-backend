import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, QueryCommand,GetCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { subCategorySchema, mainCategorySchema } from '../schema/generatedZodSchema';
import { processSchemaAndData } from '../utils/addCommonFields';
import { z } from 'zod';
const { uuidv4 } = require('uuid');
const dynamoDB = require('../config/dbConfig');
import { SubCategory } from '../src/API';

const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;
const MAIN_CATEGORY_TABLE_NAME = process.env.TABLE_MAIN_CATEGORY;
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
  createSubCategory: async (subCategoryData: Partial<SubCategory>) => {
    const extendedSubCategoryData = processSchemaAndData(subCategorySchema, subCategoryData, "SubCategory");

    const validationResult = subCategorySchema.safeParse(extendedSubCategoryData);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(', ');
      throw new Error(`SubCategory data is invalid: ${errors}`);
    }

    const subCategory: SubCategory = validationResult.data;

    // Validate mainCategorySubCategoriesId
    if (subCategory.mainCategorySubCategoriesId) {
      const mainCategoryParams = {
        TableName: MAIN_CATEGORY_TABLE_NAME,
        Key: { id: subCategory.mainCategorySubCategoriesId },
      };

      const mainCategoryResult = await dynamoDB.send(new GetCommand(mainCategoryParams));
      if (!mainCategoryResult.Item) {
        throw new Error(`MainCategory not found: ${subCategory.mainCategorySubCategoriesId}`);
      }
    } else {
      throw new Error('MainCategory ID is required');
    }

    const params = {
      TableName: SUB_CATEGORY_TABLE_NAME,
      Item: { ...subCategory },
    };

    await dynamoDB.send(new PutCommand(params));
    return subCategory;
  },
  getAllSubCategories: async (top = 10) => {
    const params = {
      TableName: SUB_CATEGORY_TABLE_NAME, // Replace with your actual subcategory table name
      Limit: top,
    };

    try {
      const data = await dynamoDB.send(new ScanCommand(params));
      const subCategories = data.Items;

      // Validate each subCategory against the schema
      const validatedSubCategories = subCategories.map((subCategory: SubCategory) => {
        const validationResult = subCategorySchema.safeParse(subCategory);
        if (!validationResult.success) {
          throw new Error(`Invalid subcategory data: ${validationResult.error.message}`);
        }
        return validationResult.data;
      });

      return validatedSubCategories;
    } catch (error: any) {
      throw new Error(`Error retrieving subcategories: ${error.message}`);
    }
  },
};

export = SubCategoryService;
