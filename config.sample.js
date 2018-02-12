/**
 * This is the configuration file.
 * Please fill in the data. The database assumes default port 3306!
 * Please DO NOT touch this if you don't know what you are doing!
 */

module.exports = {
    graphql: {
        dev: {
            endpoint: 'http://localhost:4000/graphql',
        },
        prod: {
            dev: {
                endpoint:
                    'enter the serverless endpoint here e.g. /dev/graphql',
            },
            production: {
                endpoint:
                    'enter the serverless endpoint here e.g. /prod/graphql',
            },
        },
    },
    redis: {
        dev: {
            host: '127.0.0.1',
            port: 6379,
            password: '',
        },
        prod: {
            host: '',
            port: 6379,
            password: '',
        },
        databases: {
            fetchCache: {
                database: 1,
                key: 'fetchCache',
            },
        },
    },
};
