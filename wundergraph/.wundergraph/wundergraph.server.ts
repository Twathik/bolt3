import { configureWunderGraphServer } from "@wundergraph/sdk/server";

export default configureWunderGraphServer(() => ({
  hooks: {
    queries: {},
    mutations: {},
  },
  options: { logger: { level: "info" } },
  graphqlServers: [],
}));
