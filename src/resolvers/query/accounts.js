import { connectionFromArray } from 'graphql-relay';
import { InvalidLimitError } from '../../errors';

const accounts = async (obj, args) => {
    const limit = args.first;

    if (limit < 1 || limit > 100) {
        throw new InvalidLimitError();
    }

    const accs = obj && obj.accounts ? obj.accounts : [];
    return connectionFromArray(accs, args);
};

export default accounts;
