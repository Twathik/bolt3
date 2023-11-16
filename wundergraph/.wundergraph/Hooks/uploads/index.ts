import { HooksConfig } from "../../generated/wundergraph.hooks";
import crypto from "crypto";
import * as Minio from "minio";

const uploads: HooksConfig["uploads"] = {
  localMinio: {
    avatar: {
      preUpload: ({ user, file, meta }) => {
        console.log(`preUpload user: ${user}, file: ${file}, meta: ${meta}`);

        if (!user) {
          return { error: "authenticate" };
        }
        const hash = crypto.createHash("md5").update(user.email!).digest("hex");
        //return { fileKey: "myfile.png" };
        return { fileKey: `avatar-${meta.uuid}.${file.name.split(".").pop()}` };
      },
      postUpload: async ({ user, file, meta, internalClient, error }) => {
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

          const { data } = await internalClient.queries.UsersGetUserProfile({
            input: { email: user.email! },
          });

          minioClient.removeObject(
            "uploads",
            data?.backend_findFirstUser?.avatarUrl ?? ""
          );

          await internalClient.mutations.UsersUpdateUser({
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
          `postUpload user: ${user}, file: ${file}, meta: ${meta}, internalClient: ${internalClient}, error: ${error}`
        );
      },
    },
  },
};

export default uploads;
