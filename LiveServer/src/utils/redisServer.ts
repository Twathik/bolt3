import redis, { RedisClientType } from "redis";

const redisUrl = "redis://localhost:6379";

const redisClient: RedisClientType = redis.createClient({
  url: redisUrl,
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81",
});

export default redisClient;
