import nodeFetch from 'node-fetch';
import fetchCached from 'fetch-cached';
import redis from '../redis';

const EXPIRE = 60;
const fetch = fetchCached({
    fetch: nodeFetch,
    cache: {
        get: k => redis.getInstance(1).get(k),
        set: (k, v) => redis.getInstance(1).send('set', [k, v, 'EX', EXPIRE]),
    },
});

export default fetch;
