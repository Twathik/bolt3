import { configureWunderGraphOperations } from "@wundergraph/sdk";
import type { OperationsConfiguration } from "./generated/wundergraph.operations";

export default configureWunderGraphOperations<OperationsConfiguration>({
  operations: {
    defaultConfig: {
      authentication: {
        required: true,
      },
    },
    queries: (config) => ({
      ...config,
      caching: {
        enable: false,
        staleWhileRevalidate: 60,
        maxAge: 60,
        public: true,
      },
      liveQuery: {
        enable: false,
        pollingIntervalSeconds: 10,
      },
    }),
    mutations: (config) => ({
      ...config,
    }),
    subscriptions: (config) => ({
      ...config,
    }),
    custom: {
      MobileDevicesRegisterOneMobileDevice: (config) => ({
        ...config,
        authentication: { required: true },
      }),
    },
  },
});
