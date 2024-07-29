import { z, ZodObject, ZodSchema, ZodOptional, ZodNullable, ZodLiteral, ZodLazy } from "zod";
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

// Function to traverse schema and set default or null values
const traverseSchema = <T>(schema: ZodSchema<T>, data: any): T => {
  if (schema instanceof ZodObject) {
    const shape = schema.shape;
    const result: any = {};

    for (const key in shape) {
      const fieldSchema = shape[key];
      if (data[key] !== undefined) {
        result[key] = traverseSchema(fieldSchema, data[key]);
      } else {
        // Handle optional fields by setting to null
        if (fieldSchema instanceof ZodOptional || fieldSchema instanceof ZodNullable) {
          result[key] = null;
        } else if (fieldSchema instanceof ZodObject) {
          result[key] = traverseSchema(fieldSchema, {}); // Recursively handle nested objects
        } else if (fieldSchema instanceof ZodLazy) {
          result[key] = traverseSchema(fieldSchema._def.factory(), {}); // Handle lazy-loaded schemas
        } else {
          // Handle default values if available
          result[key] = fieldSchema._def.defaultValue ?? undefined;
        }
      }
    }

    return result;
  } else if (schema instanceof ZodLazy) {
    return traverseSchema(schema._def.factory(), data); // Handle lazy-loaded schemas
  } else if (schema instanceof ZodLiteral) {
    return data;
  } else {
    // For non-object schemas, return data as-is
    return data;
  }
};

// Function to process schema and data
export const processSchemaAndData = <T>(schema: ZodSchema<T>, data: Partial<T>, typename: string): T & CommonFields => {
  // Add common fields
  const dataWithCommonFields = addCommonFields(data as T & Partial<CommonFields>, typename);

  // Traverse schema and set missing optional fields to null
  return traverseSchema(schema, dataWithCommonFields);
};
