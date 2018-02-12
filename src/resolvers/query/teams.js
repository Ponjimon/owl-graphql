import { connectionFromArray } from 'graphql-relay';
import { InvalidLimitError } from '../../errors';
import fetch from '../../utils/fetch';

const teams = async (obj, args) => {
    const limit = args.first;

    if (limit < 1 || limit > 100) {
        throw new InvalidLimitError();
    }

    const teamRes = await fetch('https://api.overwatchleague.com/teams').then(
        res => res.json()
    );

    const competitors =
        teamRes && teamRes.competitors ? teamRes.competitors : [];

    return connectionFromArray(competitors, args);
};

export default teams;
