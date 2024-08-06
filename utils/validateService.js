"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateServiceData = void 0;
const validateServiceData = (data) => {
    const requiredFields = ['name', 'price_min', 'price_max'];
    for (const field of requiredFields) {
        if (data[field] === undefined || data[field] === null) {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }
    return true;
};
exports.validateServiceData = validateServiceData;
