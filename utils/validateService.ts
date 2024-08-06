import { Service } from '../src/API';

export const validateServiceData = (data: Partial<Service>): boolean => {
  const requiredFields: (keyof Service)[] = ['name', 'price_min', 'price_max'];

  for (const field of requiredFields) {
    if (data[field] === undefined || data[field] === null) {
      console.error(`Missing required field: ${field}`);
      return false;
    }
  }

  return true;
};
