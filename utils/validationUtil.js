"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDateTime = exports.validateTime = exports.validateDate = void 0;
const zod_1 = require("zod");
// Date validation (YYYY-MM-DD format)
const dateSchema = zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Expected format: YYYY-MM-DD");
// Time validation (HH:MM:SS format)
const timeSchema = zod_1.z.string().regex(/^\d{2}:\d{2}:\d{2}$/, "Invalid time format. Expected format: HH:MM:SS");
// DateTime validation (YYYY-MM-DDTHH:MM:SSZ format)
const dateTimeSchema = zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, "Invalid dateTime format. Expected format: YYYY-MM-DDTHH:MM:SSZ");
const validateDate = (date) => {
    const validationResult = dateSchema.safeParse(date);
    if (!validationResult.success) {
        throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
    }
};
exports.validateDate = validateDate;
const validateTime = (time) => {
    const validationResult = timeSchema.safeParse(time);
    if (!validationResult.success) {
        throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
    }
};
exports.validateTime = validateTime;
const validateDateTime = (dateTime) => {
    const validationResult = dateTimeSchema.safeParse(dateTime);
    if (!validationResult.success) {
        throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
    }
};
exports.validateDateTime = validateDateTime;
