import * as TypeGraphQL from 'type-graphql'
import { Context } from '../../context'
import { PrismaClient } from '@prisma/client'
import { ClinicalEvent } from '../../@generated'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../@generated/helpers'
import { GraphQLResolveInfo } from 'graphql'
import { updateClinicalEventSubscriptionArgs } from './Args/UpdateClinicalEventSubscriptionArgs'

@TypeGraphQL.Resolver((_of) => ClinicalEvent)
export class UpdateClinicalEventsSubscription {
  @TypeGraphQL.Subscription((_returns) => [ClinicalEvent], {
    topics: 'UPDATE_CLINICAL_EVENT',
    filter: ({ payload, args }) => {
      return args.patientId === payload
    },
  })
  async updateClinicalEventsSubscription(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() { patientId }: updateClinicalEventSubscriptionArgs,
  ): Promise<ClinicalEvent[]> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    const { _count } = transformInfoIntoPrismaArgs(info)
    try {
      const clinicalEvent = await prisma.clinicalEvent.findMany({
        where: { patientId, onTrash: false, deleted: false },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      return clinicalEvent
    } catch (error) {
      throw Error('List of clinical events is not available')
    }
  }
}
