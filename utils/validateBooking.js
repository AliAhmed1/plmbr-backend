"use strict";
// utils/validateBooking.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBookingData = void 0;
const validateBookingData = (data) => {
    const requiredFields = [
        'date', 'startTime', 'endTime', 'price',
    ];
    for (const field of requiredFields) {
        if (data[field] === undefined || data[field] === null) {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }
    return true;
};
exports.validateBookingData = validateBookingData;
