import { Client } from "typesense";

export interface SearchResponseInterface {
  found: number;
  page: number;
  search_time_ms: number;
}

const typesenseClient = new Client({
  nodes: [
    {
      host: "search.bolt3.local",
      port: 80,
      protocol: "http",
    },
  ],
  apiKey: "xyz",
  numRetries: 3, // A total of 4 tries (1 original try + 3 retries)
  connectionTimeoutSeconds: 30,
  logLevel: "SILENT",
  healthcheckIntervalSeconds: 10,

  // cacheSearchResultsForSeconds: 60,
});

export default typesenseClient;
