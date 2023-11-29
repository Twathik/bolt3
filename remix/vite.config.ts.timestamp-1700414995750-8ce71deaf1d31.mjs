// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/mac/Desktop/Projects/bolt3.0/remix/node_modules/.pnpm/vite@4.5.0_@types+node@20.8.10/node_modules/vite/dist/node/index.js";
import { unstable_vitePlugin as remix } from "file:///Users/mac/Desktop/Projects/bolt3.0/remix/node_modules/.pnpm/@remix-run+dev@2.2.0_@remix-run+serve@2.2.0_@types+node@20.8.10_typescript@5.2.2_vite@4.5.0/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///Users/mac/Desktop/Projects/bolt3.0/remix/node_modules/.pnpm/vite-tsconfig-paths@4.2.1_typescript@5.2.2_vite@4.5.0/node_modules/vite-tsconfig-paths/dist/index.mjs";
import topLevelAwait from "file:///Users/mac/Desktop/Projects/bolt3.0/remix/node_modules/.pnpm/vite-plugin-top-level-await@1.3.1_vite@4.5.0/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_dirname = "/Users/mac/Desktop/Projects/bolt3.0/remix";
var vite_config_default = defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  // build: { rollupOptions: { external: ["date-fns/local"] } },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./app")
    }
  },
  server: {
    host: true,
    port: 3e3
  },
  ssr: {
    // Add npm packages containing invalid code here
    noExternal: [
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
      "yjs"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvYm9sdDMuMC9yZW1peFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL2JvbHQzLjAvcmVtaXgvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYy9EZXNrdG9wL1Byb2plY3RzL2JvbHQzLjAvcmVtaXgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHVuc3RhYmxlX3ZpdGVQbHVnaW4gYXMgcmVtaXggfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXZcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgdG9wTGV2ZWxBd2FpdCBmcm9tIFwidml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZW1peCgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICB0b3BMZXZlbEF3YWl0KHtcbiAgICAgIC8vIFRoZSBleHBvcnQgbmFtZSBvZiB0b3AtbGV2ZWwgYXdhaXQgcHJvbWlzZSBmb3IgZWFjaCBjaHVuayBtb2R1bGVcbiAgICAgIHByb21pc2VFeHBvcnROYW1lOiBcIl9fdGxhXCIsXG4gICAgICAvLyBUaGUgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgaW1wb3J0IG5hbWVzIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGluIGVhY2ggY2h1bmsgbW9kdWxlXG4gICAgICBwcm9taXNlSW1wb3J0TmFtZTogKGkpID0+IGBfX3RsYV8ke2l9YCxcbiAgICB9KSxcbiAgXSxcbiAgLy8gYnVpbGQ6IHsgcm9sbHVwT3B0aW9uczogeyBleHRlcm5hbDogW1wiZGF0ZS1mbnMvbG9jYWxcIl0gfSB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vYXBwXCIpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHRydWUsXG4gICAgcG9ydDogMzAwMCxcbiAgfSxcbiAgc3NyOiB7XG4gICAgLy8gQWRkIG5wbSBwYWNrYWdlcyBjb250YWluaW5nIGludmFsaWQgY29kZSBoZXJlXG4gICAgbm9FeHRlcm5hbDogW1xuICAgICAgXCJAbGV4aWNhbC9tYXJrZG93blwiLFxuICAgICAgXCJsZXhpY2FsXCIsXG4gICAgICBcIkBsZXhpY2FsL2NvZGVcIixcbiAgICAgIFwiQGxleGljYWwvcmljaC10ZXh0XCIsXG4gICAgICBcImRhdGUtZm5zL2xvY2FsXCIsXG4gICAgICBcIkBsZXhpY2FsL2NsaXBib2FyZFwiLFxuICAgICAgXCJAbGV4aWNhbC9jb2RlXCIsXG4gICAgICBcIkBsZXhpY2FsL2ZpbGVcIixcbiAgICAgIFwiQGxleGljYWwvaGFzaHRhZ1wiLFxuICAgICAgXCJAbGV4aWNhbC9odG1sXCIsXG4gICAgICBcIkBsZXhpY2FsL2xpbmtcIixcbiAgICAgIFwiQGxleGljYWwvbGlzdFwiLFxuICAgICAgXCJAbGV4aWNhbC9tYXJrXCIsXG4gICAgICBcIkBsZXhpY2FsL21hcmtkb3duXCIsXG4gICAgICBcIkBsZXhpY2FsL292ZXJmbG93XCIsXG4gICAgICBcIkBsZXhpY2FsL3JlYWN0XCIsXG4gICAgICBcIkBsZXhpY2FsL3JpY2gtdGV4dFwiLFxuICAgICAgXCJAbGV4aWNhbC9zZWxlY3Rpb25cIixcbiAgICAgIFwiQGxleGljYWwvdGFibGVcIixcbiAgICAgIFwiQGxleGljYWwvdGV4dFwiLFxuICAgICAgXCJAbGV4aWNhbC91dGlsc1wiLFxuICAgICAgXCJAbGV4aWNhbC95anNcIixcbiAgICAgIFwicmVhY3Qtc3Bpbm5lcnNcIixcbiAgICAgIFwicXJjb2RlLnJlYWN0XCIsXG4gICAgICBcInlqc1wiLFxuICAgIF0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsT0FBTyxVQUFVO0FBQzlULFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsdUJBQXVCLGFBQWE7QUFDN0MsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxtQkFBbUI7QUFKMUIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsY0FBYztBQUFBO0FBQUEsTUFFWixtQkFBbUI7QUFBQTtBQUFBLE1BRW5CLG1CQUFtQixDQUFDLE1BQU0sU0FBUyxDQUFDO0FBQUEsSUFDdEMsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQTtBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
