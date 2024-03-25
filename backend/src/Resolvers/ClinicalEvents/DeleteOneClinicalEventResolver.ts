import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ClinicalEvent } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { PrismaClient } from '@prisma/client'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { DeleteOneClinicalEventArgs } from './Args/DeleteOneClinicalEventArgs'
import { v4 as uuid } from 'uuid'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'
import { Context } from '../../context'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class DeleteOneClinicalEventResolver {
  @TypeGraphQL.Mutation((_returns) => ClinicalEvent, {
    nullable: true,
  })
  async deleteOneClinicalEvent(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args()
    { userId, deletedReport, ...args }: DeleteOneClinicalEventArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    _notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const { pubSub } = ctx
    try {
      const [clinicalEvent] = await Promise.all([
        prisma.clinicalEvent.update({
          ...args,
          data: { deleted: true, deletedReport, deletedByUserId: userId },

          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        }),
      ])
      const message: WebsocketMessageInterface = {
        type: 'clinicalEvent',
        id: uuid(),
        global: true,
        destination: ['patient-full-information'],
        payload: { operation: 'remove', clinicalEvent },
        subscriptionIds: [clinicalEvent.patientId],
      }
      await pubSub.publish(notificationTopic, JSON.stringify(message))

      return clinicalEvent
    } catch (error) {
      throw Error('The clinical event was not deleted')
    }
  }
}
