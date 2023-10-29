import type { Operations } from "@/components/generated/client";
import { createClient } from "@/components/generated/client";
import { createHooks } from "@wundergraph/swr";

export const client = createClient();

export const createClientFromCookies = (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");

  const client = createClient({
    extraHeaders: {
      cookie: cookieHeader ?? "",
    },
  });

  return client;
};

// Use these hooks for any client side operations
export const { useQuery, useMutation, useSubscription, useUser, useAuth } =
  // @ts-ignore
  createHooks<Operations>(client);
