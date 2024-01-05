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
    { eventType, patientId, userId }: createOneClinicalEventArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient

    try {
      if (eventType === 'CLINICAL_VISIT') {
        const clinicalVisit = await prisma.clinicalEvent.findFirstOrThrow({
          where: { patientId, eventType: 'CLINICAL_VISIT' },
        })
        if (clinicalVisit) {
          const {
            id,
            updatedAt,
            createdReport,
            report,
            empty,
            dicomId,
            dicom,
            deleted,
            onTrash,
          } = clinicalVisit
          const { fullName, id: user_id } = await prisma.user.findUniqueOrThrow(
            {
              where: { userId },
            },
          )
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

          return clinicalVisit
        }
      }
      const [clinicalEvent, { fullName, id: user_id }] = await Promise.all([
        prisma.clinicalEvent.create({
          data: {
            eventType,
            user: { connect: { userId } },
            patient: { connect: { id: patientId } },
          },
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
        dicom,
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
      console.log({ error })
      throw Error('The clinical event was not created')
    }
  }
}
