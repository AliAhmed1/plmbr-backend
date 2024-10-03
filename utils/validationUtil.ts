import { CardType } from '../src/API';
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

const validateCardNumber = (cardType: CardType, cardNumber: string): boolean => {
  // Remove spaces and non-numeric characters
  const sanitizedCardNumber = cardNumber.replace(/\D/g, '');

  switch (cardType) {
    case CardType.VISA:
      // VISA cards start with a 4 and are 13 or 16 digits long
      const visaPattern = /^4(?:\d{12}|\d{15})$/;
      return visaPattern.test(sanitizedCardNumber);
      
    case CardType.MASTERCARD:
      // MasterCard cards start with 51-55 and are 16 digits long
      const mastercardPattern = /^5[1-5]\d{14}$/;
      return mastercardPattern.test(sanitizedCardNumber);
      
    case CardType.AMEX:
      // American Express cards start with 34 or 37 and are 15 digits long
      const amexPattern = /^3[47]\d{13}$/;
      return amexPattern.test(sanitizedCardNumber);
      
    case CardType.DISCOVER:
      // Discover cards start with 6011, 65, 644-649 or 622126-622925 and are 16 digits long
      const discoverPattern = /^(6011\d{12}|65\d{14}|64[4-9]\d{13}|6221[2-9]\d{12}|622[2-8]\d{13}|6229[0-5]\d{12})$/;
      return discoverPattern.test(sanitizedCardNumber);
      
    default:
      return false;
  }
}

export {
  validateDate,
  validateTime,
  validateDateTime,
  validateCardNumber
};
