import { createClient, Operations } from "../generated/client";

import { createHooks } from "@wundergraph/swr";

export const client = createClient({
  extraHeaders: { Authorization: `Bearer test` },
  baseURL: "http://10.0.2.2:9991",
});

export const { useQuery, useMutation, useSubscription, useUser, useAuth } =
  createHooks<Operations>(client);
