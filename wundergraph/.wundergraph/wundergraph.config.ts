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
import { z } from "@wundergraph/sdk/operations";

const countries = introspect.graphql({
  apiNamespace: "countries",
  url: "https://countries.trevorblades.com/",
});

const spaceX = introspect.graphql({
  apiNamespace: "spacex",
  url: "https://spacex-api.fly.dev/graphql/",
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
  apis: [countries, mainDb, spaceX],
  authentication: {
    cookieBased: {
      providers: [
        authProviders.openIdConnect({
          id: "kc",
          clientId: "bolt3",
          clientSecret: "6fzXbI7bjgcZqfCJXeRxBQG30dxSBVvi",
          issuer: "http://keycloak.local/realms/bolt3",
        }),
      ],

      authorizedRedirectUris: [
        "http://bolt3.local/login",
        "http://bolt3.local/search",
        "http://localhost:3000/login",
      ],
      secureCookieHashKey: new EnvironmentVariable(
        "WUNDERGRAPH_SECURE_COOKIE_HASH_KEY",
        "00000000000000000000000000000000"
      ), // must be of length 32
      secureCookieBlockKey: new EnvironmentVariable(
        "WUNDERGRAPH_SECURE_COOKIE_BLOCK_KEY",
        "00000000000000000000000000000000"
      ), // must be of length 32
      csrfTokenSecret: new EnvironmentVariable(
        "WUNDERGRAPH_CSRF_TOKEN_SECRET",
        "00000000000"
      ), // must be of length 11
    },
    tokenBased: {
      providers: [{ userInfoEndpoint: "http://localhost:3000/api/user" }],
    },
    customClaims: {
      avatarUrl: { jsonPath: "avatarUrl", type: "string", required: false },
      searchApiKey: {
        jsonPath: "searchApiKey",
        type: "string",
        required: true,
      },
    },
  },

  server,
  operations,
  generate: {
    codeGenerators: [
      {
        templates: [...templates.typescript.all],
        path: "./generated",
      },
      {
        templates: [templates.typescript.client],
        path: "../../remix/app/components/generated",
      },
      {
        templates: [templates.typescript.client],
        path: "../../mobileApp/bolt-companion/generated",
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
    allowedHosts: [
      "api.bolt3.local",
      "localhost:9991",
      "10.0.2.2:9991",
      "192.168.1.41:9991",
    ],
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
