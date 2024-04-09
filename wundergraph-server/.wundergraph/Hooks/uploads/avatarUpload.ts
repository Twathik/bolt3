import { User } from ".wundergraph/generated/wundergraph.server";
import {
  PostUploadHookRequest,
  PostUploadHookResponse,
  PreUploadHookRequest,
  PreUploadHookResponse,
} from "@wundergraph/sdk/server";
import crypto from "crypto";
import * as Minio from "minio";

const avatar: {
  preUpload?:
    | ((hook: PreUploadHookRequest<User, any>) => PreUploadHookResponse)
    | undefined;
  postUpload?:
    | ((hook: PostUploadHookRequest<User, any>) => PostUploadHookResponse)
    | undefined;
} = {
  preUpload: ({ user, file, meta }) => {
    console.log(`preUpload user: ${user}, file: ${file}, meta: ${meta}`);

    if (!user) {
      return { error: "authenticate" };
    }
    const hash = crypto.createHash("md5").update(user.email!).digest("hex");
    //return { fileKey: "myfile.png" };
    return { fileKey: `avatar-${meta.uuid}.${file.name.split(".").pop()}` };
  },
  postUpload: async ({ user, file, meta, error, context }) => {
    if (!user) {
      return;
    }
    try {
      var minioClient = new Minio.Client({
        port: 9000,
        useSSL: false,
        accessKey: "test",
        secretKey: "12345678",
        endPoint: "localhost",
      });
      console.log({ user });

      const { data } = await context.queries.UsersGetUserProfile({
        input: { email: user.email! },
      });

      minioClient.removeObject(
        "uploads",
        data?.backend_findFirstUser?.avatarUrl ?? ""
      );

      await context.mutations.UsersUpdateUser({
        input: {
          email: user?.email!,
          avatarUrl: {
            set: `avatar-${meta.uuid}.${file.name.split(".").pop()}`,
          },
        },
      });
    } catch (error) {
      console.log({ error });
    }

    console.log(
      `postUpload user: ${user}, file: ${file}, meta: ${meta}, internalClient: ${context}, error: ${error}`
    );
  },
};

export default avatar;
