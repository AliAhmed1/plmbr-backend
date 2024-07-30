import { z, ZodObject, ZodSchema, ZodOptional, ZodNullable } from "zod";
import { v4 as uuidv4 } from "uuid";

// Define the CommonFields type
type CommonFields = {
  __typename: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _lastChangedAt: number;
  _deleted: boolean | null;
};

// Function to add common fields
export const addCommonFields = <T extends Partial<CommonFields>>(data: T, typename: string): T & CommonFields => {
  const currentDate = new Date().toISOString();

  const newData: T & CommonFields = {
    ...data,
    __typename: typename,
    id: data.id || uuidv4(),
    createdAt: data.createdAt || currentDate,
    updatedAt: data.updatedAt || currentDate,
    _version: data._version || 1,
    _lastChangedAt: data._lastChangedAt || Date.now(),
    _deleted: data._deleted !== undefined ? data._deleted : null,
  };

  return newData;
};

// Function to process schema and data
export const processSchemaAndData = <T>(schema: ZodSchema<T>, data: Partial<T>, typename: string): T & CommonFields => {
  // Add common fields
  const dataWithCommonFields = addCommonFields(data as T & Partial<CommonFields>, typename);

  // Traverse schema and set missing optional fields to null
  const traverseSchema = (schema: ZodSchema<any>, data: any): any => {
    if (schema instanceof ZodObject) {
      const shape = schema.shape;
      const result: any = {};

      for (const key in shape) {
        const fieldSchema = shape[key];
        if (data[key] !== undefined) {
          result[key] = traverseSchema(fieldSchema, data[key]);
        } else {
          // Set to null if field is optional, or use default value if provided
          result[key] = fieldSchema instanceof ZodOptional || fieldSchema instanceof ZodNullable
            ? null
            : fieldSchema._def.defaultValue ?? undefined;
        }
      }

      return result;
    } else {
      // For non-object schemas, just return data
      return data;
    }
  };

  return traverseSchema(schema, dataWithCommonFields);
};
