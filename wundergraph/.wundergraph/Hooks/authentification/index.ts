import { HooksConfig } from "../../generated/wundergraph.hooks";

const authentication: HooksConfig["authentication"] = {
  mutatingPostAuthentication: async ({ user, operations }) => {
    try {
      if (user) {
        const { data } = await operations.mutate({
          operationName: "users/internal/UpdateAuthenticatedUser",
          input: {
            create: {
              userId: user.userId!,
              email: user.email!,
            },
            update: {
              userId: { set: user.userId! },
              email: { set: user.email! },
            },
            where: {
              email: user.email,
            },
          },
        });

        return {
          user: {
            ...user,
            picture: data?.mainDb_upsertOneUser.avatarUrl ?? "",
          },
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
