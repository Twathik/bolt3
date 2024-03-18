import typesenseClient from "../../typesense/client";
import { HooksConfig } from "../../generated/wundergraph.hooks";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

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
        const editorKey = uuid();
        const { data } = await operations.mutate({
          operationName: "users/internal/UpdateAuthenticatedUser",
          input: {
            create: {
              userId: user.userId!,
              email: user.email!,
              searchApiKeyId: apiKey.id,
              searchApiKey: apiKey.value,
              editorKey,
            },
            update: {
              userId: { set: user.userId! },
              email: { set: user.email! },
              searchApiKeyId: { set: apiKey.id },
              searchApiKey: { set: apiKey.value },
              editorKey: { set: editorKey },
            },
            where: {
              email: user.email,
            },
          },
        });
        const JWT_secret = process.env.JWT_SECRET!;

        const editorApiKey = jwt.sign(
          { userId: user.userId, editorKey },
          JWT_secret,
          {
            expiresIn: "1000h",
          }
        );
        console.log({ editorApiKey });
        const cookieUser = {
          ...user,
          customClaims: {
            avatarUrl: data?.mainDb_upsertOneUser.avatarUrl ?? "",
            searchApiKey: apiKey.value,
            editorApiKey,
          },
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
