"use strict";
const validateProviderData = (data) => {
    const requiredFields = [
        'email', 'password', 'firstName', 'lastName',
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
