import { Provider } from '../src/API';

const validateProviderData = (data: Partial<Provider>): boolean => {
  const requiredFields: (keyof Provider)[] = [
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

export = {
  validateProviderData
}
