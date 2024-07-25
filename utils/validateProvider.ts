import { Provider } from '../src/API';

const validateProviderData = (data: Partial<Provider>): boolean => {
  const requiredFields: (keyof Provider)[] = [
    'id', 'email', 'password', 'firstName', 'lastName', 'createdAt', 'updatedAt', '_version'
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
