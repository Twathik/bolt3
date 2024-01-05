import { createOperation, z } from "../../generated/wundergraph.factory";
import linkExamToOrthancStudy from "../../axios/linkExamToOrthancStudy";

const inputSchema = z.object({
  workingListId: z.string().max(36).min(36),
});

export default createOperation.query({
  input: inputSchema,
  requireAuthentication: true,
  live: { enable: true, pollingIntervalSeconds: 20 },
  handler: async ({ input }) => {
    const { workingListId } = input;
    return await linkExamToOrthancStudy({ workingListId });
  },
});
