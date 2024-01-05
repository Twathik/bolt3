import * as TypeGraphQL from 'type-graphql'
import type { GraphQLResolveInfo } from 'graphql'
import { ConsultationList } from '../../@generated'
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../@generated/helpers'
import { DeleteOneConsultationListArgs } from './args/DeleteOneConsultationListArgs'
import { AppSubscriptionTriggerArgs } from '../Global/AppSubscription/args/AppSubscriptionTriggerArgs'
import { PrismaClient } from '@prisma/client'

@TypeGraphQL.Resolver((_of) => ConsultationList)
export class DeleteOneConsultationListResolver {
  @TypeGraphQL.Mutation((_returns) => ConsultationList, {
    nullable: true,
  })
  async deleteOneConsultationList(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { userId, ...args }: DeleteOneConsultationListArgs,
    @TypeGraphQL.PubSub('APP_SUBSCRIPTION')
    notify: TypeGraphQL.Publisher<AppSubscriptionTriggerArgs>,
  ): Promise<ConsultationList | null> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      console.dir({ args }, { depth: 5, colors: true })
      const prisma = getPrismaFromContext(ctx) as PrismaClient
      const consultationList = await prisma.consultationList.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
        include: { patient: true },
      })
      const { active, id, patientId, consultationId } = consultationList
      const { firstName, lastName, ddn, sexe } =
        await prisma.patient.findFirstOrThrow({
          where: { id: patientId },
        })
      await notify({
        userId,
        global: true,
        subscriptionSpecificId: consultationId,
        type: 'consultationLists',
        appPayload: JSON.stringify({
          operation: 'delete',
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
      console.log({ error })
      throw Error('consultationList deletion failed')
    }
  }
}
