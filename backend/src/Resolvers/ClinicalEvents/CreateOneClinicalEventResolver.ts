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
  ): Promise<ClinicalEvent> {
    const { _count } = transformInfoIntoPrismaArgs(info)
    const prisma = getPrismaFromContext(ctx) as PrismaClient
    console.log({ userId })

    try {
      const clinicalEvent = await prisma.clinicalEvent.create({
        data: {
          eventType,
          user: { connect: { userId } },
          patient: { connect: { id: patientId } },
        },
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })

      return clinicalEvent
    } catch (error) {
      console.log({ error })
      throw Error('The clinical event was not created')
    }
  }
}
