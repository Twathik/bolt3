import Redis from 'ioredis'

const redis = new Redis({
  port: 6379,
  host: process.env.NODE_ENV === 'production' ? 'redis' : 'localhost',
})

export default redis
