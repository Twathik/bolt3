import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ConsultationList } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { UpdateOneConsultationListArgs } from './args/UpdateOneConsultationListArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class UpdateOneConsultationListResolver {
  @TypeGraphQL.Mutation((_returns) => ConsultationList, {
    nullable: true,
  })
  async updateOneConsultationList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: UpdateOneConsultationListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const prisma = getPrismaFromContext(ctx) as PrismaClient

      const consultationList = await prisma.consultationList.update({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      const { active, id, patientId, consultationId } = consultationList

      const { firstName, lastName, ddn, sexe } =
        await prisma.patient.findFirstOrThrow({
          where: { id: patientId },
        })
      await notify({
        userId,
        subscriptionSpecificId: consultationId,
        global: true,
        type: 'consultationLists',
        appPayload: JSON.stringify({
          operation: 'update',
          consultationList: {
            id,
            active,
            consultationId,
            patientId,
            patient: {
              id: patientId,
              lastName,
              firstName,
              sexe,
              ddn,
            },
          },
        }),
      })
      return consultationList
    } catch (error) {
      throw Error('ConsultationList has not been updated')
    }
  }
}
