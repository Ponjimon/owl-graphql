import { toGlobalId } from 'graphql-relay';
import {
    teamsResolver,
    playersResolver,
    accountsResolver,
    ranksResolver,
} from './query/index';

export const resolvers = {
    Query: {
        teams: teamsResolver,
        ranks: ranksResolver,
    },
    Team: {
        id: ({ competitor: { id } }) => toGlobalId('Team', id),
        name: ({ competitor: { name } }) => name,
        homeLocation: ({ competitor: { homeLocation } }) => homeLocation,
        primaryColor: ({ competitor: { primaryColor } }) => primaryColor,
        secondaryColor: ({ competitor: { secondaryColor } }) => secondaryColor,
        abbreviatedName: ({ competitor: { abbreviatedName } }) =>
            abbreviatedName,
        logo: ({ competitor: { logo } }) => logo,
        icon: ({ competitor: { icon } }) => icon,
        secondaryPhoto: ({ competitor: { secondaryPhoto } }) => secondaryPhoto,
        players: playersResolver,
    },
    Player: {
        id: ({ id }) => toGlobalId('Player', id),
        name: ({ name }) => name,
        homeLocation: ({ homeLocation }) => homeLocation,
        heroes: ({ attributes: { heroes } }) => heroes,
        playerNumber: ({ attributes: { player_number } }) => player_number,
        role: ({ attributes: { role } }) => role,
        familyName: ({ familyName }) => familyName,
        givenName: ({ givenName }) => givenName,
        nationality: ({ nationality }) => nationality,
        headshot: ({ headshot }) => headshot,
        accounts: accountsResolver,
    },
    Account: {
        id: ({ id }) => toGlobalId('Account', id),
        value: ({ value }) => value,
        accountType: ({ accountType }) => accountType,
        isPublic: ({ isPublic }) => isPublic,
        playerId: ({ competitorId }) => toGlobalId('Player', competitorId),
    },
    Rank: {
        placement: ({ placement }) => placement,
        advantage: ({ advantage }) => advantage,
        team: obj => obj,
        records: ({ records }) => records,
    },
    Record: {
        gameLoss: ({ gameLoss }) => gameLoss,
        gamePointsAgainst: ({ gamePointsAgainst }) => gamePointsAgainst,
        gamePointsFor: ({ gamePointsFor }) => gamePointsFor,
        gameTie: ({ gameTie }) => gameTie,
        gameWin: ({ gameWin }) => gameWin,
        matchBye: ({ matchBye }) => matchBye,
        matchDraw: ({ matchDraw }) => matchDraw,
        matchLoss: ({ matchLoss }) => matchLoss,
        matchWin: ({ matchWin }) => matchWin,
    },
};

export default resolvers;
