import path from "path";
import { defineConfig } from "vite";
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [
    remix(),
    // @ts-ignore
    vitePluginRequire.default(),
    tsconfigPaths(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  // build: { rollupOptions: { external: ["date-fns/local"] } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  /* ssr: {
    // Add npm packages containing invalid code here
     noExternal: [
      "@lexical+react",
      "@lexical/markdown",
      "lexical",
      "@lexical/code",
      "@lexical/rich-text",
      "date-fns/local",
      "@lexical/clipboard",
      "@lexical/code",
      "@lexical/file",
      "@lexical/hashtag",
      "@lexical/html",
      "@lexical/link",
      "@lexical/list",
      "@lexical/mark",
      "@lexical/markdown",
      "@lexical/overflow",
      "@lexical/react",
      "@lexical/rich-text",
      "@lexical/selection",
      "@lexical/table",
      "@lexical/text",
      "@lexical/utils",
      "@lexical/yjs",
      "react-spinners",
      "qrcode.react",
      "yjs",
    ],
  }, */
});
