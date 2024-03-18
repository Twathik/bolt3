import { Client } from 'typesense'

const typesense = new Client({
  nodes: [
    {
      host: 'search.bolt3.local',
      port: 80,
      protocol: 'http',
    },
  ],
  apiKey: 'xyz',
  numRetries: 3, // A total of 4 tries (1 original try + 3 retries)
  connectionTimeoutSeconds: 90,
  logLevel: 'debug',
  retryIntervalSeconds: 3,
})

export default typesense

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
