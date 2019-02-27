# OWL GraphQL
This repository is a GraphQL wrapper for the API of the Overwatch League

It is made with the [serverless framework](https://serverless.com)

![Example image](https://i.imgur.com/hBDjC8W.jpg)

## Install
1. Run `npm install` or `yarn install`
2. Rename `config.sample.js` to `config.js` and change the configuration (e.g. add a redis server for query caching, etc.)
3. Run `npm start` or `yarn start` to start *Serverless Offline* on `http://localhost:4000`

## Playgrounds
There are 2 playgrounds available. You can either use GraphiQL or GraphQL Playground like so:

`http://localhost:4000/graphiql`

`http://localhost:4000/playground`

The GraphQL API itself is reachable under:

`http://localhost:4000/graphql`

## Deploy
Run `npm run deploy-dev` or `yarn run deploy-dev` for deploying the API to AWS Lambda using serverless.
Same for `deploy-prod`.

`dev` and `prod` are the stages.

Don't forget to setup serverless appropriately.

## Misc
This project is currently WIP.

