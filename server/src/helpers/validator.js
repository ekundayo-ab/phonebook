/**
 * @description Validates phone number
 *
 * @param {string} phone - Phone string to be validated
 *
 * @returns {boolean} true or false - based on if phone number is valid or not
 */
export const validatePhone = (phone) => {
  const phoneValidator = /^\d{11}$/i;
  return phoneValidator.test(phone);
};

/**
 * @description Validates contact details
 *
 * @param {object} contact - Contact object to be validated
 *
 * @returns {object} isValid & errors - returns an object containing a boolean
 * isValid and errors object(consists of errors if any)
 */
export const validateContact = (contact) => {
  const errors = {};
  let sanitizeContact = {};
  const { firstName, lastName, phone } = contact;

  if (firstName === undefined || lastName === undefined
    || phone === undefined) {
    errors.generalError = 'All fields must be defined';
    return { isValid: Object.keys(errors).length <= 0, errors };
  }

  for (let i = 0; i < 3; i += 1) {
    const fieldName = Object.keys(contact)[i];
    const fieldValue = Object.values(contact)[i];

    if (!fieldValue.trim()) {
      errors[fieldName] = 'This field is required';
    }

    if (fieldValue.length > 0
      && (fieldName === 'firstName' || fieldName === 'lastName')) {
      if (!/[a-zA-Z-]+$/i.test(fieldValue) || fieldValue.length < 2) {
        errors[fieldName] = '(a-z, A-Z, -) allowed & must be more than one letter';
      }
    }

    if (fieldValue.length > 0 && fieldName === 'phone') {
      if (!validatePhone(fieldValue)) {
        errors[fieldName] = 'Phone number is not valid';
      }
    }

    if (!errors[fieldName]) {
      sanitizeContact[fieldName] = fieldValue.trim();
    }
  }

  if (Object.keys(errors).length <= 0) {
    sanitizeContact = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim()
    };
  }

  return { isValid: Object.keys(errors).length <= 0, errors, sanitizeContact };
};

/**
 * @description Validates group details
 *
 * @param {object} group - Group object to be validated
 *
 * @returns {object} isValid & errors - returns an object containing a boolean
 * isValid and errors object(consists of errors if any)
 */
export const validateGroup = (group) => {
  const errors = {};
  const { title } = group;

  if (title === undefined) {
    errors.generalError = 'Title field must be defined';
    return { isValid: Object.keys(errors).length <= 0, errors };
  }

  if (!title.trim()) errors.title = 'This field is required';
  if (title && (title.length < 2 || !/[a-zA-Z]+$/i.test(title))) {
    errors.title = '(a-z, A-Z, -) allowed & must be more than one letter';
  }

  return { isValid: Object.keys(errors).length <= 0, errors };
};

/**
 * @description Validates ID
 *
 * @param {number} ID - ID to be validated
 *
 * @returns {boolean} true or false - returns a boolean if ID is valid or not
 */
export const validateId = (ID) => {
  const errors = {};
  if (!ID || Number.isNaN(parseInt(ID, 10)) || !/^[0-9]+$/i.test(ID)) {
    errors.ID = 'ID is not valid';
    return false;
  }
  return true;
};

