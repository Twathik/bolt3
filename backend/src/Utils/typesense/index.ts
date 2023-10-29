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
  connectionTimeoutSeconds: 30,
  logLevel: 'debug',
})

export default typesense
