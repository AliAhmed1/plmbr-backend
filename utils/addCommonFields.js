"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processSchemaAndData = exports.addCommonFields = void 0;
const zod_1 = require("zod");
const uuid_1 = require("uuid");
// Function to add common fields
const addCommonFields = (data, typename) => {
    const currentDate = new Date().toISOString();
    const newData = Object.assign(Object.assign({}, data), { __typename: typename, id: data.id || (0, uuid_1.v4)(), createdAt: data.createdAt || currentDate, updatedAt: data.updatedAt || currentDate, _version: data._version || 1, _lastChangedAt: data._lastChangedAt || Date.now(), _deleted: data._deleted !== undefined ? data._deleted : null });
    return newData;
};
exports.addCommonFields = addCommonFields;
// Function to process schema and data
const processSchemaAndData = (schema, data, typename) => {
    // Add common fields
    const dataWithCommonFields = (0, exports.addCommonFields)(data, typename);
    // Traverse schema and set missing optional fields to null
    const traverseSchema = (schema, data) => {
        var _a;
        if (schema instanceof zod_1.ZodObject) {
            const shape = schema.shape;
            const result = {};
            for (const key in shape) {
                const fieldSchema = shape[key];
                if (data[key] !== undefined) {
                    result[key] = traverseSchema(fieldSchema, data[key]);
                }
                else {
                    // Set to null if field is optional, or use default value if provided
                    result[key] = fieldSchema.isOptional() ? null : (_a = fieldSchema._def.defaultValue) !== null && _a !== void 0 ? _a : undefined;
                }
            }
            return result;
        }
        else {
            // For non-object schemas, just return data
            return data;
        }
    };
    return traverseSchema(schema, dataWithCommonFields);
};
exports.processSchemaAndData = processSchemaAndData;
