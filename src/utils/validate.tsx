import {REGEXP_CONFIG} from '../configs';

/**
 * Validate email
 *
 * @param {string} email - email to validate
 *
 * @returns string - error message
 */
export const getEmailValidationError = (email: string): string => {
  if (!email || !email.trim()) {
    return '';
  }

  return !REGEXP_CONFIG.email.test(email) ? 'Please add a valid email' : '';
};

export const searchValidate = (text: string) => {
  return !REGEXP_CONFIG.email.test(text) ? 'Please add a valid e-mail' : '';
};
