import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ClinicalEvent } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { createOneClinicalEventArgs } from './Args/CreateOneClinicalEventArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { WebsocketMessageInterface } from '../../Utils/PubSubInterfaces/WebsocketMessageInterface'
import { v4 as uuid } from 'uuid'
import { notificationTopic } from '../../Utils/PubSubInterfaces/MessageTypesInterface'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class CreateOneClinicalEventResolver {
  @TypeGraphQL.Mutation((_returns) => ClinicalEvent, {
    nullable: false,
  })
  async createOneClinicalEvent(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args()
    { eventType, patientId, userId, eventCategory }: createOneClinicalEventArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    _notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const { pubSub } = ctx

    try {
      const [clinicalEvent] = await Promise.all([
        prisma.clinicalEvent.create({
          data: {
            eventType,
            eventCategory,
            user: { connect: { userId } },
            patient: { connect: { id: patientId } },
          },
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        }),
      ])
      const message: WebsocketMessageInterface = {
        type: 'clinicalEvent',
        id: uuid(),
        global: true,
        destination: ['patient-full-information'],
        payload: { operation: 'add', clinicalEvent },
        subscriptionIds: [patientId],
      }
      await pubSub.publish(notificationTopic, JSON.stringify(message))

      return clinicalEvent
    } catch (error) {
      console.log({ error })
      throw Error('The clinical event was not created')
    }
  }
}
