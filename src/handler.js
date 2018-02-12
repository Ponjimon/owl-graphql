import { graphiqlLambda, graphqlLambda } from 'apollo-server-lambda';
import 'babel-polyfill';
import lambdaPlayground from 'graphql-playground-middleware-lambda';
import costAnalysis from 'graphql-cost-analysis';
import { formatError } from 'apollo-errors';
import { makeExecutableSchema } from 'graphql-tools';
import schema from '../schema.graphql';
import { graphql as graphQLConfig } from '../config';
import { resolvers } from './resolvers';
import corsResponse from './utils/cors-response';

const getGraphQLEndpoint = () => {
    if (!graphQLConfig) {
        return '/production/graphql';
    }

    if (process.env.NODE_ENV === 'production') {
        const stage = process.env.STAGE;
        return graphQLConfig.prod[stage].endpoint;
    }

    return graphQLConfig.dev.endpoint;
};

exports.graphqlHandler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const graphQLSchema = makeExecutableSchema({
        typeDefs: schema,
        resolvers,
        logger: console,
    });

    const costAnalyzer = costAnalysis({
        maximumCost: 1000,
        onComplete: cost => {
            console.log('Query cost', cost);
        },
    });

    const handler = graphqlLambda({
        schema: graphQLSchema,
        tracing: true,
        cacheControl: true,
        validationRules: [costAnalyzer],
        formatError,
    });
    return handler(event, context, callbackFilter);

    function callbackFilter(error, output) {
        if (!output.headers) {
            output.headers = {};
        }
        // eslint-disable-next-line no-param-reassign
        output.headers['Access-Control-Allow-Origin'] = '*';
        callback(error, output);
    }
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return lambdaPlayground({
        endpoint: getGraphQLEndpoint(),
    })(event, context, callback);
};

exports.graphiqlHandler = graphiqlLambda({
    endpointURL: getGraphQLEndpoint(),
});

exports.helloWorldHandler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const message = {
        message: 'Hello World',
        event,
    };
    corsResponse(callback, message);
};
