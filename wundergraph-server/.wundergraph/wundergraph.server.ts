import { configureWunderGraphServer } from "@wundergraph/sdk/server";
import hooks from "./Hooks";

export default configureWunderGraphServer(() => ({
  hooks,
  options: { logger: { level: "info" } },
  graphqlServers: [],
}));
