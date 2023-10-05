import {
  authProviders,
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";
import { NextJsTemplate } from "@wundergraph/nextjs/dist/template";
import { z } from "@wundergraph/sdk/operations";

const countries = introspect.graphql({
  apiNamespace: "countries",
  url: "https://countries.trevorblades.com/",
});

const mainDb = introspect.graphql({
  apiNamespace: "mainDb",
  url: "http://localhost:4000/graphql",
  introspection: {
    disableCache: true,
  },
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [countries, mainDb],
  authentication: {
    cookieBased: {
      providers: [
        authProviders.github({
          id: "github",
          clientId: "75c238d4dfd9db377a1c",
          clientSecret: "b54cce9a63bf42efb0dea77082a1d964ad47cec7",
        }),
        authProviders.openIdConnect({
          id: "kc",
          clientId: "bolt3",
          clientSecret: "9QH92Rg4tiShK1eczONTy0uJA1ph38T1",
          issuer: "http://keycloak.local/realms/bolt3",
        }),
      ],
      authorizedRedirectUris: [
        "http://bolt3.local/login",
        "http://localhost:3000/login",
      ],
      secureCookieHashKey: new EnvironmentVariable(
        "WUNDERGRAPH_SECURE_COOKIE_HASH_KEY",
        "00000000000000000000000000000000",
      ), // must be of length 32
      secureCookieBlockKey: new EnvironmentVariable(
        "WUNDERGRAPH_SECURE_COOKIE_BLOCK_KEY",
        "00000000000000000000000000000000",
      ), // must be of length 32
      csrfTokenSecret: new EnvironmentVariable(
        "WUNDERGRAPH_CSRF_TOKEN_SECRET",
        "00000000000",
      ), // must be of length 11
    },
  },
  experimental: { orm: true },
  server,
  operations,
  generate: {
    codeGenerators: [
      {
        templates: [new NextJsTemplate()],
        path: "../src/components/wg-generated",
      },
    ],
  },
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            new EnvironmentVariable("NEXT_PUBLIC_APPLICATION_BASE_PATH"),
          ]
        : ["http://localhost:3000", "http://bolt3.local"],
  },

  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== "production" ||
      process.env.GITPOD_WORKSPACE_ID !== undefined,
    allowedHosts: ["api.bolt3.local", "localhost:9991"],
  },
  s3UploadProvider: [
    {
      name: "localMinio",
      endpoint: "storage.bolt3.local",
      accessKeyID: "test",
      secretAccessKey: "12345678",
      bucketLocation: "eu-central-1",
      bucketName: "uploads",
      useSSL: false,
      uploadProfiles: {
        avatar: {
          maxAllowedUploadSizeBytes: 1024 * 1024 * 10, // 10 MB, optional, defaults to 25 MB
          maxAllowedFiles: 1, // limit the number of files to 1, leave undefined for unlimited files
          allowedMimeTypes: ["image/png", "image/jpeg"], // wildcard is supported, e.g. 'image/*', leave empty/undefined to allow all
          allowedFileExtensions: ["png", "jpg"], // leave empty/undefined to allow all
          meta: z.object({
            uuid: z.string(),
          }),
        },
        coverPicture: {
          maxAllowedUploadSizeBytes: 1024 * 1024 * 10, // 10 MB, optional, defaults to 25 MB
          maxAllowedFiles: 1, // limit the number of files to 1, leave undefined for unlimited files
          allowedMimeTypes: ["image/*"], // wildcard is supported, e.g. 'image/*', leave empty/undefined to allow all
          allowedFileExtensions: ["png", "jpg"], // leave empty/undefined to allow all
        },
        gallery: {
          meta: z.object({
            postId: z.string(),
            position: z.number().positive(),
          }),
        },
      },
    },
  ],
  options: {
    publicNodeUrl: "http://api.bolt3.local",
  },
});
