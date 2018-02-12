import { createError } from 'apollo-errors';

const InvalidLimitError = createError('InvalidLimitError', {
    message: 'Invalid limit argument `first`.',
});

export default InvalidLimitError;
