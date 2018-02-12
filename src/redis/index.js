import { createClient } from 'then-redis';
import getConfig from '../utils/get-config';
import { redis as redisAllConfig } from '../../config';

const redisConfig = getConfig(redisAllConfig);

export default class Redis {
    static client;

    /**
     *
     * @param db
     * @returns RedisClient/RedisClient
     */
    static getInstance(db) {
        if (!this.client) {
            this.client = createClient({
                host: redisConfig.host,
                port: redisConfig.port,
                db,
                password: redisConfig.password,
            });
        }

        return this.client;
    }
}
