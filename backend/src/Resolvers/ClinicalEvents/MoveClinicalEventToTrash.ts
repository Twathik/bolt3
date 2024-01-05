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

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class MoveClinicalEventToTrash {
  @TypeGraphQL.Mutation((_returns) => ClinicalEvent, {
    nullable: true,
  })
  async moveClinicalEventToTrash(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneClinicalEventArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ClinicalEvent | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    try {
      const [clinicalEvent, { fullName, id: user_id }] = await Promise.all([
        prisma.clinicalEvent.update({
          ...args,
          data: { onTrash: true },
          ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        }),
        prisma.user.findUniqueOrThrow({ where: { userId } }),
      ])

      const {
        id,
        updatedAt,
        createdReport,
        report,
        eventType,
        empty,
        dicomId,
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
    } catch (error) {
      throw Error('The clinical event was not created')
    }
  }
}
