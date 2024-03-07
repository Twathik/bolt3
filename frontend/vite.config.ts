import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import vitePluginRequire from "vite-plugin-require";
import topLevelAwait from "vite-plugin-top-level-await";
import { cjsInterop } from "vite-plugin-cjs-interop";

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
    cjsInterop({
      dependencies: ["react-spinners", "qrcode.react"],
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
});
