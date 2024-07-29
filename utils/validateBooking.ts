// utils/validateBooking.ts

import { Booking } from '../src/API';

export const validateBookingData = (data: Partial<Booking>): boolean => {
  const requiredFields: (keyof Booking)[] = [
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
