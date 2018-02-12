import { connectionFromArray, fromGlobalId } from 'graphql-relay';
import { InvalidLimitError } from '../../errors';
import fetch from '../../utils/fetch';

const players = async ({ competitor }, args) => {
    const limit = args.first;

    if (limit < 1 || limit > 100) {
        throw new InvalidLimitError();
    }

    if (!competitor) {
        return connectionFromArray([], args);
    }

    let playersArr = competitor.players ? competitor.players : [];
    const id = competitor.id;
    if (!playersArr || (playersArr && playersArr.length === 0)) {
        // assume it's part of ranks
        const res = await fetch('https://api.overwatchleague.com/teams').then(
            r => r.json()
        );

        if (!res) {
            return connectionFromArray([], args);
        }

        const targetTeam = res.competitors.find(
            team => team.competitor.id === id
        );
        playersArr =
            targetTeam && targetTeam.competitor && targetTeam.competitor.players
                ? targetTeam.competitor.players
                : [];
    }
    const newArr = [];
    playersArr.forEach(player => {
        newArr.push(player.player);
    });

    return connectionFromArray(newArr, args);
};

export default players;
