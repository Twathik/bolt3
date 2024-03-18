import Redis from 'ioredis'

const redis = new Redis({
  port: 6379,
  host: process.env.NODE_ENV === 'production' ? 'redis' : 'localhost',
  retryStrategy: (times: number) => Math.max(times * 100, 3000),
  password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
})

export default redis
