import { configureWunderGraphServer } from "@wundergraph/sdk/server";

export default configureWunderGraphServer(() => ({
  hooks: {
    queries: {
      Countries: {
        preResolve: async ({ operations }) => {},
      },
    },
    mutations: {},
    authentication: {
      postAuthentication: async ({ log, user }) => {
        console.log({ user });
      },
    },
  },
}));
