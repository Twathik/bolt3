import { InternalOperationsClient } from ".wundergraph/generated/wundergraph.internal.operations.client";
import { User } from ".wundergraph/generated/wundergraph.server";
import {
  PostUploadHookRequest,
  PostUploadHookResponse,
  PreUploadHookRequest,
  PreUploadHookResponse,
} from "@wundergraph/sdk/server";

const documentTemplate: {
  preUpload?:
    | ((hook: PreUploadHookRequest<User, any>) => PreUploadHookResponse)
    | undefined;
  postUpload?:
    | ((hook: PostUploadHookRequest<User, any>) => PostUploadHookResponse)
    | undefined;
} = {
  preUpload: async ({ meta, user }) => {
    if (!user) {
      // Optional: return an error if the user is not authenticated
      return { error: "authenticate" };
    }
    return { fileKey: `${meta.face}-${meta.uuid}` };
  },
};
export default documentTemplate;
