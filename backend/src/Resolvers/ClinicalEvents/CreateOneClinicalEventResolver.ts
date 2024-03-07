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
      /*  const { id, updatedAt, report, dicomId, dicom, deleted } = clinicalEvent
      await notify({
        type: 'clinicalEvents',
        userId,
        global: true,
        appPayload: JSON.stringify({
          operation: 'create',
          clinicalEvent: {
            id,
            eventType,
            updatedAt,
            report,
            dicomId,
            dicom,
            deleted,
            user: {
              id: user_id,
              fullName,
            },
            patientId,
          },
        }),
      }) */

      return clinicalEvent
    } catch (error) {
      console.log({ error })
      throw Error('The clinical event was not created')
    }
  }
}
