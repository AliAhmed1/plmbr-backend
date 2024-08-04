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
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const dynamoDB = lib_dynamodb_1.DynamoDBDocumentClient.from(new client_dynamodb_1.DynamoDBClient({}));
const SUB_CATEGORY_TABLE_NAME = process.env.TABLE_SUB_CATEGORY;
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
};
module.exports = SubCategoryService;
