import { Validate } from 'payload/types';

export const phoneValidator: (required: boolean) => Validate<string> = (required) => {
  return (value) => {
    if (!value) {
      return required ? 'Phone is required' : true;
    }

    if (!value.startsWith('+201')) {
      return 'Phone number must start with +201';
    }

    if (value.length !== 13) {
      return 'Phone number must be exactly 13 characters';
    }

    return true;
  };
};
export const lowerCase = (value: string) => {
  if (!value || typeof value !== 'string') {
    return value;
  }
  return value.toLowerCase();
};
