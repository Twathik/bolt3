import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ClinicalEvent } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { UpdateOneClinicalEventArgs } from './Args/UpdateOneClinicalEventArgs'
import { PrismaClient } from '@prisma/client'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class UpdateOneClinicalEventResolver {
  @TypeGraphQL.Mutation((_returns) => ClinicalEvent, {
    nullable: true,
  })
  async updateOneClinicalEvent(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneClinicalEventArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)

    const prisma = getPrismaFromContext(ctx) as PrismaClient

    const [clinicalEvent, { fullName, id: user_id }] = await Promise.all([
      prisma.clinicalEvent.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      }),
      prisma.user.findUniqueOrThrow({ where: { userId } }),
    ])

    const {
      id,
      updatedAt,
      createdReport,
      report,
      empty,
      dicomId,
      eventType,
      dicom,
      patientId,
      deleted,
      onTrash,
    } = clinicalEvent
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
          createdReport,
          report,
          empty,
          dicomId,
          dicom,
          deleted,
          onTrash,
          user: {
            id: user_id,
            fullName,
          },
          patientId,
        },
      }),
    })

    return clinicalEvent
  }
}
