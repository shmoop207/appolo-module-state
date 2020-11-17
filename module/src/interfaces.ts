import Redis = require("ioredis");

export interface IStateOptions {
    maxStates?: number
    redis?: string
    cache?: boolean
    cacheTime?: number
    name?: string
    initialState?: { [index: string]: any }
}

export interface IOptions {
    id?: string
    redis: string
    redisClient?: Redis.Redis
    redisPubSub?: Redis.Redis
    cache?: boolean
    cacheTime?: number
}
