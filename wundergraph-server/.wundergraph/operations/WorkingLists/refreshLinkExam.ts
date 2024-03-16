import { createOperation, z } from "../../generated/wundergraph.factory";
import linkExamToOrthancStudy from "../../axios/linkExamToOrthancStudy";

const inputSchema = z.object({
  workingListId: z.string().max(36).min(36),
});

export default createOperation.mutation({
  input: inputSchema,
  requireAuthentication: true,
  handler: async ({ input }) => {
    const { workingListId } = input;
    return await linkExamToOrthancStudy({ workingListId });
  },
});
