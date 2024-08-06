import { z } from 'zod';

// Date validation (YYYY-MM-DD format)
const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Expected format: YYYY-MM-DD");

// Time validation (HH:MM:SS format)
const timeSchema = z.string().regex(/^\d{2}:\d{2}:\d{2}$/, "Invalid time format. Expected format: HH:MM:SS");

// DateTime validation (YYYY-MM-DDTHH:MM:SSZ format)
const dateTimeSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, "Invalid dateTime format. Expected format: YYYY-MM-DDTHH:MM:SSZ");

const validateDate = (date: string) => {
  const validationResult = dateSchema.safeParse(date);
  if (!validationResult.success) {
    throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
  }
};

const validateTime = (time: string) => {
  const validationResult = timeSchema.safeParse(time);
  if (!validationResult.success) {
    throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
  }
};

const validateDateTime = (dateTime: string) => {
  const validationResult = dateTimeSchema.safeParse(dateTime);
  if (!validationResult.success) {
    throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
  }
};

export {
  validateDate,
  validateTime,
  validateDateTime,
};
