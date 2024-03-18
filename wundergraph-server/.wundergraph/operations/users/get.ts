import { createOperation, z } from "../../generated/wundergraph.factory";

export default createOperation.query({
  handler: async ({ context, clientRequest }) => {
    console.dir({ context, clientRequest }, { depth: 5, colors: true });

    return {
      user: {
        name: "Twathik",
        email: "takdemt.wathik@gmail.com",
        image: "https://avatars.githubusercontent.com/u/90990900?v=4",
      },
      expires: "2023-11-10T17:55:04.668Z",
    };
  },
});
