import typesenseClient from "../../typesense/client";
import { HooksConfig } from "../../generated/wundergraph.hooks";

const authentication: HooksConfig["authentication"] = {
  mutatingPostAuthentication: async ({ user, operations }) => {
    try {
      if (user) {
        const userData = await operations.query({
          operationName: "users/internal/GetUser",
          input: { email: user.email! },
        });
        const apiKey = await typesenseClient.keys().create({
          actions: ["documents:search"],
          collections: ["*"],
          description: "client search key",
        });
        if (userData.data?.mainDb_user) {
          const u = userData.data?.mainDb_user;
          if (u.searchApiKeyId) {
            await typesenseClient.keys(u.searchApiKeyId).delete();
          }
        }
        const { data } = await operations.mutate({
          operationName: "users/internal/UpdateAuthenticatedUser",
          input: {
            create: {
              userId: user.userId!,
              email: user.email!,
              searchApiKeyId: apiKey.id,
              searchApiKey: apiKey.value,
            },
            update: {
              userId: { set: user.userId! },
              email: { set: user.email! },
              searchApiKeyId: { set: apiKey.id },
              searchApiKey: { set: apiKey.value },
            },
            where: {
              email: user.email,
            },
          },
        });
        const cookieUser = {
          ...user,
          avatarUrl: data?.mainDb_upsertOneUser.avatarUrl ?? "",
          searchApiKey: apiKey.value,
        };

        return {
          user: cookieUser,
          status: "ok",
        };
      } else {
        throw Error("Auth Hook : user not found");
      }
    } catch (error) {
      return {
        user: null,
        status: "deny",
        message: (error as any).message,
      };
    }
  },
};

export default authentication;
