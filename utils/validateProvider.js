"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateProviderData = (data) => {
    const requiredFields = [
        'email', 'password', 'firstName', 'lastName', 'createdAt', 'updatedAt', '_version'
    ];
    for (const field of requiredFields) {
        if (data[field] === undefined || data[field] === null) {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }
    return true;
};
module.exports = {
    validateProviderData
};
