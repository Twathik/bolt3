import 'reflect-metadata'
import 'dotenv/config'
import http from 'node:http'
import path from 'node:path'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import { useServer } from 'graphql-ws/lib/use/ws'
import Redis from 'ioredis'
import { NonEmptyArray, buildSchema } from 'type-graphql'
import { WebSocketServer } from 'ws'
import { resolvers as GeneratedResolvers } from './@generated'
import * as resolvers from './Resolvers'
import { Context, createContext, createSubscriptionContext } from './context'
import prisma from './Utils/api/prismaClient'
import { axiosOrthancInstance } from './Utils/api/axiosConfig'

export const port = 4000

async function bootstrap() {
  // Create Redis-based pub-sub
  const pubSub = new RedisPubSub({
    publisher: new Redis(process.env.REDIS_URL!, {
      retryStrategy: (times: number) => Math.max(times * 100, 3000),
      password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
    }),
    subscriber: new Redis(process.env.REDIS_URL!, {
      retryStrategy: (times: number) => Math.max(times * 100, 3000),
      password: 'eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81',
    }),
  })

  const AppResolvers = Object.values(
    resolvers,
  ) as unknown as NonEmptyArray<Function>

  // Build TypeGraphQL executable schema
  const schema = await buildSchema({
    // Array of resolvers
    resolvers: [...GeneratedResolvers, ...AppResolvers],
    // Create 'schema.graphql' file with schema definition in current directory
    emitSchemaFile: path.resolve(__dirname, 'schema.graphql'),
    // Provide Redis-based instance of pub-sub
    pubSub,
    validate: false,
  })

  // Create an Express app and HTTP server
  // The WebSocket server and the ApolloServer will be attached to this HTTP server
  const app = express()
  const httpServer = http.createServer(app)

  // Create WebSocket server using the HTTP server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  })
  // Save the returned server's info so it can be shutdown later
  const serverCleanup = useServer(
    {
      schema,
      context: (ctx) => {
        // You can define your own function for setting a dynamic context
        // or provide a static value
        return createSubscriptionContext(ctx)
      },
    },
    wsServer,
  )

  // Create GraphQL server
  const server = new ApolloServer<Context>({
    schema,
    csrfPrevention: true,
    cache: 'bounded',

    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),
      // Proper shutdown for the WebSocket server
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            },
          }
        },
      },
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  })

  // Start server
  if (process.env.NODE_ENV === 'production') {
    try {
      const modalities = await prisma.modality.findMany({
        where: { activated: true, deleted: false },
      })
      modalities.forEach(async (modality) => {
        const res = await axiosOrthancInstance.put(
          `/modalities/${modality.modalityName}`,
          {
            AET: modality.modalityAETitle,
            AllowEcho: true,
            AllowFind: true,
            AllowFindWorklist: true,
            AllowGet: true,
            AllowMove: true,
            AllowStorageCommitment: true,
            AllowStore: true,
            AllowTranscoding: true,
            Host: modality.modalityIpAddress,
            Port: modality.modalityPort,
            UseDicomTls: true,
          },
        )
        if (res.status !== 200) throw Error()
      })
    } catch (error) {
      console.log({ error })
    }
  }

  await server.start()
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => createContext({ req, res }),
    }),
  )

  // Now that the HTTP server is fully set up, we can listen to it
  httpServer.listen(port, () => {
    console.log(`GraphQL server ready at http://localhost:${port}/graphql`)
  })
}

bootstrap()
  .then(() =>
    console.log(`\
🚀 Server ready at: http://localhost:${port}
⭐️ Graphql server up and ready`),
  )
  .catch(console.error)
