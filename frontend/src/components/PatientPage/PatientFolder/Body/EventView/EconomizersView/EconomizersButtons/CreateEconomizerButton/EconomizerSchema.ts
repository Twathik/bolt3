import { z } from "zod";

const EconomizerSchema = z.object({
  name: z.string().min(2, {
    message: "2 caractères minimum",
  }),
});

export default EconomizerSchema;
