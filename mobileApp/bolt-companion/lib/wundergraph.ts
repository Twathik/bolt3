import { createClient, Operations } from "../generated/client";

import {
  createHooks,
  UseMutationHook,
  UseQueryHook,
  UseSubscriptionHook,
  UseUploadHook,
} from "@wundergraph/swr";
import useWundergraphStore from "./stores/wundergraphStore";
import { baseURL } from "./CONST";

export const useQuery: UseQueryHook<Operations, {}> = (options) => {
  const { authToken } = useWundergraphStore();
  const client = createClient({
    extraHeaders: { Authorization: `Bearer ${authToken}` },
    baseURL,
  });
  const { useQuery: wgQuery } = createHooks<Operations>(client);

  return wgQuery(options);
};

export const useMutation: UseMutationHook<Operations, {}> = (options) => {
  const { authToken } = useWundergraphStore();
  console.log({ authToken });
  const client = createClient({
    extraHeaders: { Authorization: `Bearer ${authToken}` },
    baseURL,
    csrfEnabled: false,
  });
  const { useMutation: wgUseMutation } = createHooks<Operations>(client);
  return wgUseMutation(options);
};

export const useSubscription: UseSubscriptionHook<Operations, {}> = (
  options
) => {
  const { authToken } = useWundergraphStore();
  const client = createClient({
    extraHeaders: { Authorization: `Bearer ${authToken}` },
    baseURL,
  });
  const { useSubscription: wgSubscription } = createHooks<Operations>(client);
  return wgSubscription(options);
};

export const useFileUpload: UseUploadHook<Operations> = (options) => {
  const { authToken } = useWundergraphStore();
  const client = createClient({
    extraHeaders: { Authorization: `Bearer ${authToken}` },
    baseURL,
  });
  const { useFileUpload: wgFileUpload } = createHooks<Operations>(client);

  return wgFileUpload(options);
};
