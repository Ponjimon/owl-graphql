import { createError } from 'apollo-errors';

const InvalidSMSCodeError = createError('InvalidSMSCode', {
    message: 'Invalid SMS code.',
});

export default InvalidSMSCodeError;
