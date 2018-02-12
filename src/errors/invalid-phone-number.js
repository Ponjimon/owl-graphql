import { createError } from 'apollo-errors';

const InvalidPhoneNumberError = createError('InvalidPhoneNumber', {
    message: 'Invalid phone number.',
});

export default InvalidPhoneNumberError;
