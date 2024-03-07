import { createTw } from "react-pdf-tailwind";

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});
