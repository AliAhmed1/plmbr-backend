"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const generatedZodSchema_1 = require("../schema/generatedZodSchema");
const addCommonFields_1 = require("../utils/addCommonFields");
const { uuidv4 } = require('uuid');
const dynamoDB = require('../config/dbConfig');
const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;
const MAIN_CATEGORY_TABLE_NAME = process.env.TABLE_MAIN_CATEGORY;
const SubCategoryService = {
    getBySubCategoryId: (subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: SUB_CATEGORY_TABLE_NAME,
            Key: {
                id: subCategoryId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(params));
        if (!result.Item) {
            throw new Error('SubCategory not found');
        }
        return result.Item;
    }),
    getAllSubCategoriesByMainCategoryId: (mainCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: SUB_CATEGORY_TABLE_NAME,
            FilterExpression: 'mainCategorySubCategoriesId = :mainCategoryId',
            ExpressionAttributeValues: {
                ':mainCategoryId': mainCategoryId,
            },
        };
        const result = yield dynamoDB.send(new lib_dynamodb_1.ScanCommand(params));
        if (!result.Items) {
            throw new Error('No SubCategories found for the given MainCategory');
        }
        return result.Items;
    }),
    createSubCategory: (subCategoryData) => __awaiter(void 0, void 0, void 0, function* () {
        const extendedSubCategoryData = (0, addCommonFields_1.processSchemaAndData)(generatedZodSchema_1.subCategorySchema, subCategoryData, "SubCategory");
        const validationResult = generatedZodSchema_1.subCategorySchema.safeParse(extendedSubCategoryData);
        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            throw new Error(`SubCategory data is invalid: ${errors}`);
        }
        const subCategory = validationResult.data;
        // Validate mainCategorySubCategoriesId
        if (subCategory.mainCategorySubCategoriesId) {
            const mainCategoryParams = {
                TableName: MAIN_CATEGORY_TABLE_NAME,
                Key: { id: subCategory.mainCategorySubCategoriesId },
            };
            const mainCategoryResult = yield dynamoDB.send(new lib_dynamodb_1.GetCommand(mainCategoryParams));
            if (!mainCategoryResult.Item) {
                throw new Error(`MainCategory not found: ${subCategory.mainCategorySubCategoriesId}`);
            }
        }
        else {
            throw new Error('MainCategory ID is required');
        }
        const params = {
            TableName: SUB_CATEGORY_TABLE_NAME,
            Item: Object.assign({}, subCategory),
        };
        yield dynamoDB.send(new lib_dynamodb_1.PutCommand(params));
        return subCategory;
    }),
};
module.exports = SubCategoryService;
