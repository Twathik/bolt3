import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'

import { Modality } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { Context } from '../../context'
import { UpdateOneModalityArgs } from './args/UpdateOneModalityArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => Modality)
export class UpdateOneModalityResolver {
  @TypeGraphQL.Mutation((_returns) => Modality, {
    nullable: true,
  })
  async updateOneModality(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneModalityArgs,
  ): Promise<Modality | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const pubsub = ctx.pubSub

    try {
      const modality = await prisma.modality.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      const res = await ctx.orthanc.put(
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
      const message: WebsocketMessageInterface = {
        type: 'modality',
        destination: ['modality'],
        global: true,
        subscriptionIds: [],
        payload: {
          operation: 'update',
          modality: modality,
        },
      }

      await pubsub.publish(notificationTopic, message)

      return modality
    } catch (error) {
      console.log({ error })
      throw Error('The modality has not been updated')
    }
  }
}
