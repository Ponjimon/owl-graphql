# OWL GraphQL
This repository is a GraphQL wrapper for the API of the Overwatch League

It is made with the [serverless framework](https://serverless.com)

## Install
1. Run `npm install` or `yarn install`
2. Rename `config.sample.js` to `config.js` and change the configuration (e.g. add a redis server for query caching, etc.)
3. Run `npm start` or `yarn start` to start *Serverless Offline* on `http://localhost:4000`

## Deploy
Run `npm run deploy-dev` or `yarn run deploy-dev` for deploying the API to AWS Lambda using serverless.
Same for `deploy-prod`.

`dev` and `prod` are the stages.

Don't forget to setup serverless appropriately.

## Misc
This project is currently WIP.

